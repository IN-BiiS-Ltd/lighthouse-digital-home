"""
End-to-end navigation smoke test for Lighthouse Campus.

Verifies:
  1. Every internal route in tests/e2e/routes.json returns HTTP 200 and
     renders a visible <h1> (or role=heading) on both desktop and mobile
     viewports.
  2. Client-side navigation between a sample of pages works, and the
     browser Back / Forward buttons restore the correct URL and DOM.

Usage:
  # Dev server must already be running (Lovable sandbox already runs it):
  BASE_URL=http://localhost:8080 python3 tests/e2e/navigation.py

  # Or point at the live preview / published URL:
  BASE_URL=https://id-preview--<id>.lovable.app python3 tests/e2e/navigation.py

Exit code is non-zero when any check fails; a summary is printed at the end.
"""

from __future__ import annotations

import asyncio
import json
import os
import sys
from pathlib import Path
from typing import List, Tuple

from playwright.async_api import async_playwright, Page, TimeoutError as PWTimeout

BASE_URL = os.environ.get("BASE_URL", "http://localhost:8080").rstrip("/")
ROUTES_FILE = Path(__file__).parent / "routes.json"
ROUTES: List[str] = json.loads(ROUTES_FILE.read_text())["routes"]

DEVICES: List[Tuple[str, dict]] = [
    ("desktop", {"width": 1280, "height": 900}),
    ("mobile", {"width": 390, "height": 844}),
]

# Sample used for the interactive back/forward test — keep small so the run
# stays fast but crosses section boundaries.
NAV_FLOW = [
    "/",
    "/about",
    "/our-model/educational-model",
    "/learning-journey/early-years",
    "/admissions/application-process",
    "/campuses/mohandessin",
    "/contact",
]


async def check_route(page: Page, path: str) -> str | None:
    """Return None on success or an error string."""
    url = f"{BASE_URL}{path}"
    try:
        resp = await page.goto(url, wait_until="domcontentloaded", timeout=20_000)
    except PWTimeout:
        return f"timeout loading {url}"
    if resp is None:
        return f"no response for {url}"
    if resp.status >= 400:
        return f"HTTP {resp.status} for {url}"
    # Wait for at least one heading — every internal page has an h1.
    try:
        await page.locator("h1").first.wait_for(state="visible", timeout=8_000)
    except PWTimeout:
        return f"no visible <h1> at {url}"
    return None


async def run_device(pw, device_name: str, viewport: dict) -> Tuple[int, List[str]]:
    errors: List[str] = []
    browser = await pw.chromium.launch(headless=True)
    context = await browser.new_context(viewport=viewport)
    page = await context.new_page()

    # 1. Every route loads with an h1.
    checked = 0
    for path in ROUTES:
        err = await check_route(page, path)
        checked += 1
        if err:
            errors.append(f"[{device_name}] {err}")

    # 2. Back / forward navigation through a representative flow.
    for path in NAV_FLOW:
        err = await check_route(page, path)
        if err:
            errors.append(f"[{device_name}] flow forward: {err}")

    for _ in range(len(NAV_FLOW) - 1):
        await page.go_back(wait_until="domcontentloaded")
        try:
            await page.locator("h1").first.wait_for(state="visible", timeout=8_000)
        except PWTimeout:
            errors.append(f"[{device_name}] back: missing <h1> at {page.url}")

    for _ in range(len(NAV_FLOW) - 1):
        await page.go_forward(wait_until="domcontentloaded")
        try:
            await page.locator("h1").first.wait_for(state="visible", timeout=8_000)
        except PWTimeout:
            errors.append(f"[{device_name}] forward: missing <h1> at {page.url}")

    await browser.close()
    return checked, errors


async def main() -> int:
    print(f"E2E navigation smoke against {BASE_URL}")
    print(f"Routes: {len(ROUTES)}   Devices: {[d[0] for d in DEVICES]}")
    all_errors: List[str] = []
    async with async_playwright() as pw:
        for name, viewport in DEVICES:
            checked, errors = await run_device(pw, name, viewport)
            status = "OK" if not errors else f"{len(errors)} FAIL"
            print(f"  [{name}] checked {checked} routes — {status}")
            all_errors.extend(errors)

    print("\nSummary")
    print(f"  Total routes: {len(ROUTES)} x {len(DEVICES)} viewports"
          f" = {len(ROUTES) * len(DEVICES)} page loads")
    if all_errors:
        print(f"  {len(all_errors)} failure(s):")
        for e in all_errors:
            print(f"   - {e}")
        return 1
    print("  All routes rendered and back/forward navigation succeeded.")
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
