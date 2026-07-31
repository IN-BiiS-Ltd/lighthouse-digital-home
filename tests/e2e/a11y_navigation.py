"""Automated accessibility regression suite — skip links, header, Explore menus.

Runs on desktop (1280x1800) and mobile (390x844) against the dev server and
checks, for every route in ROUTES:

  1. axe-core scan (fails on serious/critical violations)
  2. Skip links are the first Tab stops and focus lands on <main id="main">
  3. The same holds AFTER client-side route changes (SPA navigation + history)
  4. Header disclosure buttons expose aria-expanded / aria-controls and close
     on Escape with focus returned to the trigger
  5. Focus indicators are actually rendered for keyboard users

Usage:
    python3 tests/e2e/a11y_navigation.py
    BASE_URL=https://host python3 tests/e2e/a11y_navigation.py
"""

import asyncio
import os
import sys
from pathlib import Path

from playwright.async_api import async_playwright

BASE_URL = os.environ.get("BASE_URL", "http://localhost:8080").rstrip("/")
AXE_CDN = "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js"
OUT = Path("/tmp/browser/a11y_navigation")
OUT.mkdir(parents=True, exist_ok=True)

# Representative coverage: home, section landings, tools and forms.
ROUTES = [
    "/",
    "/about",
    "/learning-journey",
    "/admissions",
    "/campus-experience",
    "/announcements-library",
    "/careers",
    "/portals",
    "/prospectus",
    "/contact",
]

# Client-side navigations exercised after the first paint.
SPA_FLOW = ["/about", "/careers", "/admissions", "/contact"]

DEVICES = [
    ("desktop", {"width": 1280, "height": 1800}),
    ("mobile", {"width": 390, "height": 844}),
]

failures: list[str] = []


def fail(msg: str) -> None:
    failures.append(msg)
    print(f"  FAIL  {msg}")


async def settle(page):
    await page.wait_for_load_state("load")
    await page.wait_for_timeout(1800)


async def axe_scan(page, label: str) -> None:
    await page.add_script_tag(url=AXE_CDN)
    result = await page.evaluate(
        "async () => await axe.run(document, { resultTypes: ['violations'] })"
    )
    serious = [v for v in result["violations"] if v["impact"] in ("serious", "critical")]
    print(f"  axe: {len(result['violations'])} violations, {len(serious)} serious/critical")
    for v in serious:
        nodes = ", ".join(n["target"][0] for n in v["nodes"][:3])
        fail(f"{label}: axe [{v['impact']}] {v['id']} — {v['help']} ({nodes})")


async def check_skip_links(page, label: str) -> None:
    """First Tab must reach 'skip to main content' and land focus on <main id="main">."""
    await page.evaluate("() => document.activeElement && document.activeElement.blur && document.activeElement.blur()")
    await page.keyboard.press("Tab")
    first = (await page.evaluate("document.activeElement?.textContent?.trim() || ''")).lower()
    if "skip" not in first and "تخط" not in first:
        fail(f"{label}: first Tab stop is {first!r}, expected the skip link")
        return

    # The indicator must be genuinely visible for keyboard users.
    visible = await page.evaluate(
        """() => {
          const el = document.activeElement;
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 1 && r.height > 1 && s.visibility !== 'hidden'
            && (s.outlineWidth !== '0px' || s.boxShadow !== 'none');
        }"""
    )
    if not visible:
        fail(f"{label}: focused skip link is not visibly rendered/outlined")

    # Second Tab is the skip-to-search affordance.
    await page.keyboard.press("Tab")
    second = (await page.evaluate("document.activeElement?.textContent?.trim() || ''")).lower()
    if "search" not in second and "بحث" not in second:
        fail(f"{label}: second Tab stop is {second!r}, expected the skip-to-search link")

    # Back to the content skip link and activate it.
    await page.keyboard.press("Shift+Tab")
    await page.keyboard.press("Enter")
    await page.wait_for_timeout(350)
    landed = await page.evaluate("document.activeElement?.id || ''")
    if landed != "main":
        fail(f"{label}: skip link moved focus to #{landed or '(none)'}, expected #main")


async def check_skip_to_search(page, label: str) -> None:
    await page.evaluate("() => document.activeElement && document.activeElement.blur && document.activeElement.blur()")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")

    # Poll until the command palette mounts and focus lands in its input.
    focused_input = False
    for _ in range(20):
        await page.wait_for_timeout(200)
        focused_input = await page.evaluate(
            """() => {
              const a = document.activeElement;
              return !!a && a.tagName === 'INPUT'
                && !!a.closest("[role='dialog'],[cmdk-root]");
            }"""
        )
        if focused_input:
            break

    if not focused_input:
        tag = await page.evaluate("document.activeElement?.tagName || '(none)'")
        fail(f"{label}: skip-to-search did not focus the search input (focus on {tag})")

    await page.keyboard.press("Escape")
    await page.wait_for_timeout(400)



async def check_header_disclosure(page, label: str) -> None:
    """Header submenu triggers: aria-expanded, aria-controls, Escape + focus return."""
    triggers = page.locator("header button[aria-expanded]:visible")
    count = await triggers.count()
    if count == 0:
        fail(f"{label}: no header disclosure buttons with aria-expanded found")
        return

    trigger = triggers.first
    controls = await trigger.get_attribute("aria-controls")
    if not controls:
        fail(f"{label}: header disclosure button is missing aria-controls")
    await trigger.focus()
    await page.keyboard.press("Enter")
    await page.wait_for_timeout(350)
    if await trigger.get_attribute("aria-expanded") != "true":
        fail(f"{label}: Enter did not set aria-expanded=true on the header trigger")
    if controls and await page.locator(f"#{controls}").count() == 0:
        fail(f"{label}: aria-controls points at #{controls}, which is not in the DOM")

    await page.keyboard.press("Escape")
    await page.wait_for_timeout(300)
    if await trigger.get_attribute("aria-expanded") != "false":
        fail(f"{label}: Escape did not collapse the header submenu")
    returned = await trigger.evaluate("(el) => el === document.activeElement")
    if not returned:
        fail(f"{label}: Escape did not return focus to the trigger button")


async def run_device(browser, device: str, viewport: dict) -> None:
    print(f"\n=== {device} {viewport['width']}x{viewport['height']} ===")
    # reduced motion keeps reveal animations from being scanned mid-transition
    ctx = await browser.new_context(viewport=viewport, reduced_motion="reduce")
    page = await ctx.new_page()

    for route in ROUTES:
        label = f"{device} {route}"
        print(f"\n{label}")
        await page.goto(BASE_URL + route, wait_until="load")
        await settle(page)
        await axe_scan(page, label)
        await check_skip_links(page, label)
        await check_skip_to_search(page, label)
        await check_header_disclosure(page, label)

    # SPA navigation: the skip links must keep working without a reload.
    print(f"\n{device} client-side navigation")
    await page.goto(BASE_URL + "/", wait_until="load")
    await settle(page)
    for route in SPA_FLOW:
        clicked = await page.evaluate(
            """(to) => {
              const a = [...document.querySelectorAll('a[href]')]
                .find(x => x.getAttribute('href') === to);
              if (!a) return false;
              a.focus(); a.click(); return true;
            }""",
            route,
        )
        if not clicked:
            print(f"  skip (no in-page link to {route})")
            continue
        await page.wait_for_timeout(1000)
        await check_skip_links(page, f"{device} spa->{route}")

    # History navigation must behave the same way.
    await page.go_back()
    await page.wait_for_timeout(900)
    await check_skip_links(page, f"{device} history-back")

    await page.screenshot(path=str(OUT / f"{device}.png"))
    await ctx.close()


async def main() -> None:
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        for device, viewport in DEVICES:
            await run_device(browser, device, viewport)
        await browser.close()

    print("\n" + "=" * 60)
    if failures:
        print(f"{len(failures)} accessibility failure(s):")
        for f in failures:
            print(f"  - {f}")
        sys.exit(1)
    print("All accessibility checks passed.")


asyncio.run(main())
