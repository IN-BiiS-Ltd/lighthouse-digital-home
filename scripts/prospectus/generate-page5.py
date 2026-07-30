#!/usr/bin/env python3
"""
Re-render page 05 (EEIOS) of the approved Lighthouse Campus school guides and
replace it in place, so the parent-teacher photo is fully framed (no crop).

    python3 scripts/prospectus/generate-page5.py

The logo is always taken from the single approved asset pointer.
"""

import asyncio
import base64
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).parent
TEMPLATE = HERE / "page5.html"
PHOTO = HERE / "assets/eeios-meeting.jpg"
POINTER = ROOT / "src/assets/lighthouse-official-logo.png.asset.json"
APPROVED_ASSET_ID = "5d38ff3c-f45d-40e5-9422-681697584e01"
CDN_BASES = ["http://localhost:8080", "https://lighthousecampus.com"]
DOCS = ROOT / "public/docs"
PAGE_INDEX = 4  # zero-based: printed page 05


def load_official_logo() -> str:
    pointer = json.loads(POINTER.read_text())
    if pointer["asset_id"] != APPROVED_ASSET_ID:
        raise SystemExit(
            "Refusing to render: the official logo pointer has been changed. "
            "Only the approved Lighthouse Campus logo may be used."
        )
    last = None
    for base in CDN_BASES:
        try:
            req = urllib.request.Request(
                base + pointer["url"], headers={"User-Agent": "lighthouse-guide-generator"}
            )
            with urllib.request.urlopen(req, timeout=20) as r:
                return "data:image/png;base64," + base64.b64encode(r.read()).decode()
        except Exception as exc:  # try the next base
            last = exc
    raise SystemExit(f"Could not load the approved logo asset: {last}")


async def render(lang: str, logo: str, photo: str) -> Path:
    from playwright.async_api import async_playwright

    data = json.loads((HERE / f"content/page5-{lang}.json").read_text(encoding="utf-8"))
    data["logoDataUrl"] = logo
    data["photoDataUrl"] = photo
    html = TEMPLATE.read_text(encoding="utf-8").replace(
        "window.__PAGE5__ || {}", json.dumps(data, ensure_ascii=False)
    )
    tmp = Path(f"/tmp/lh-page5-{lang}.html")
    tmp.write_text(html, encoding="utf-8")
    out = Path(f"/tmp/lh-page5-{lang}.pdf")
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1240, "height": 1754})
        await page.goto(tmp.as_uri(), wait_until="networkidle")
        await page.wait_for_timeout(1200)
        await page.pdf(path=str(out), format="A4", print_background=True)
        await browser.close()
    return out


def replace(lang: str, rendered: Path) -> None:
    from pypdf import PdfReader, PdfWriter

    target = DOCS / f"lighthouse-campus-prospectus-2026-2027-{lang}.pdf"
    guide = PdfReader(str(target))
    fresh = PdfReader(str(rendered))
    if len(fresh.pages) != 1:
        raise SystemExit(f"{lang}: page 05 must render as exactly one page, got {len(fresh.pages)}")
    writer = PdfWriter()
    for i, page in enumerate(guide.pages):
        writer.add_page(fresh.pages[0] if i == PAGE_INDEX else page)
    with open(target, "wb") as f:
        writer.write(f)
    print(f"{target.name}: replaced page {PAGE_INDEX + 1} of {len(writer.pages)}")


async def main() -> None:
    logo = load_official_logo()
    photo = "data:image/jpeg;base64," + base64.b64encode(PHOTO.read_bytes()).decode()
    for lang in ("en", "ar"):
        replace(lang, await render(lang, logo, photo))


if __name__ == "__main__":
    asyncio.run(main())
