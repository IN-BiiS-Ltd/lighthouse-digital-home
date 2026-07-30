#!/usr/bin/env python3
"""
Append the wellbeing + extracurricular addendum pages to the approved
Lighthouse Campus school guide PDFs (EN and AR).

The pages are rendered from scripts/prospectus/addendum.html with the copy in
scripts/prospectus/content/addendum-{lang}.json, then inserted BEFORE the
closing contact page of each guide so the guide still ends on the CTA page.

The logo is always taken from the single approved asset pointer.

    python3 scripts/prospectus/generate-addendum.py
"""

import asyncio
import base64
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).parent
TEMPLATE = HERE / "addendum.html"
POINTER = ROOT / "src/assets/lighthouse-official-logo.png.asset.json"
APPROVED_ASSET_ID = "5d38ff3c-f45d-40e5-9422-681697584e01"
CDN_BASES = ["http://localhost:8080", "https://lighthousecampus.com"]
DOCS = ROOT / "public/docs"


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
        except Exception as exc:
            last = exc
    raise SystemExit(f"Could not load the approved logo asset: {last}")


async def render(lang: str, logo: str) -> Path:
    from playwright.async_api import async_playwright

    data = json.loads((HERE / f"content/addendum-{lang}.json").read_text(encoding="utf-8"))
    data["logoDataUrl"] = logo
    html = TEMPLATE.read_text(encoding="utf-8").replace(
        "window.__ADDENDUM__ || {}", json.dumps(data, ensure_ascii=False)
    )
    tmp = Path(f"/tmp/lh-addendum-{lang}.html")
    tmp.write_text(html, encoding="utf-8")
    out = Path(f"/tmp/lh-addendum-{lang}.pdf")
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1240, "height": 1754})
        await page.goto(tmp.as_uri(), wait_until="networkidle")
        await page.wait_for_timeout(1200)
        await page.pdf(path=str(out), format="A4", print_background=True)
        await browser.close()
    return out


def merge(lang: str, addendum: Path) -> None:
    from pypdf import PdfReader, PdfWriter

    target = DOCS / f"lighthouse-campus-prospectus-2026-2027-{lang}.pdf"
    guide = PdfReader(str(target))
    extra = PdfReader(str(addendum))
    writer = PdfWriter()
    # Everything except the closing CTA page, then the addendum, then the CTA.
    for page in guide.pages[:-1]:
        writer.add_page(page)
    for page in extra.pages:
        writer.add_page(page)
    writer.add_page(guide.pages[-1])
    with open(target, "wb") as f:
        writer.write(f)
    print(f"{target.name}: {len(guide.pages)} -> {len(writer.pages)} pages")


async def main() -> None:
    logo = load_official_logo()
    for lang in ("en", "ar"):
        merge(lang, await render(lang, logo))


if __name__ == "__main__":
    asyncio.run(main())
