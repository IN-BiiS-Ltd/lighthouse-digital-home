#!/usr/bin/env python3
"""
Reproduce the full Light House Campus school guide PDF from source.

Content lives in scripts/prospectus/content/guide-{lang}.json and is rendered
through scripts/prospectus/guide.html (A4, print-exact) with Playwright.

    python3 scripts/prospectus/generate-guide.py en

The logo is always taken from the single approved asset pointer; any change to
that pointer aborts the render.
"""

import asyncio
import base64
import json
import mimetypes
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).parent
TEMPLATE = HERE / "guide.html"
ASSETS = HERE / "assets"
POINTER = ROOT / "src/assets/lighthouse-official-logo.png.asset.json"
APPROVED_ASSET_ID = "5d38ff3c-f45d-40e5-9422-681697584e01"
CDN_BASES = ["http://localhost:8080", "https://lighthousecampus.com"]
DOCS = ROOT / "public/docs"

PHOTOS = {
    "classroom": "photo-classroom-primary.jpg",
    "teacher": "photo-teacher-portrait.jpg",
    "eeios": "eeios-meeting.jpg",
    "campus": "campus-exterior.jpg",
    "stem": "academic-stem.jpg",
    "parents": "parent-partnership.jpg",
    "life": "student-life.jpg",
    "library": "campus-library.jpg",
    "hero": "hero-learning.jpg",
    "leadership": "leadership.jpg",
    "campusClean": "campus-clean.jpg",
}


def data_url(path: Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or "image/jpeg"
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def load_official_logo() -> str:
    pointer = json.loads(POINTER.read_text())
    if pointer["asset_id"] != APPROVED_ASSET_ID:
        raise SystemExit(
            "Refusing to render: the official logo pointer has been changed. "
            "Only the approved Light House Campus logo may be used."
        )
    last = None
    for base in CDN_BASES:
        try:
            req = urllib.request.Request(
                base + pointer["url"], headers={"User-Agent": "lighthouse-guide-generator"}
            )
            with urllib.request.urlopen(req, timeout=20) as r:
                return "data:image/png;base64," + base64.b64encode(r.read()).decode()
        except Exception as exc:  # noqa: BLE001
            last = exc
    raise SystemExit(f"Could not load the approved logo asset: {last}")


async def render(lang: str) -> Path:
    from playwright.async_api import async_playwright

    data = json.loads((HERE / f"content/guide-{lang}.json").read_text(encoding="utf-8"))
    data["images"] = {"logo": load_official_logo()}
    for key, name in PHOTOS.items():
        data["images"][key] = data_url(ASSETS / name)

    html = TEMPLATE.read_text(encoding="utf-8").replace(
        "window.__GUIDE__ || {}", json.dumps(data, ensure_ascii=False)
    )
    tmp_html = Path(f"/tmp/lh-guide-{lang}.html")
    tmp_html.write_text(html, encoding="utf-8")

    out = DOCS / f"lighthouse-campus-prospectus-2026-2027-{lang}.pdf"
    DOCS.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(tmp_html.as_uri(), wait_until="networkidle")
        await page.wait_for_timeout(1200)
        await page.pdf(path=str(out), format="A4", print_background=True)
        await browser.close()

    from pypdf import PdfReader

    pages = len(PdfReader(str(out)).pages)
    print(f"wrote {out.relative_to(ROOT)} — {pages} pages")
    if pages != len(data["pages"]):
        raise SystemExit(
            f"Page count mismatch: expected {len(data['pages'])}, rendered {pages}. "
            "A page has overflowed; tighten its content."
        )
    return out


if __name__ == "__main__":
    langs = sys.argv[1:] or ["en"]
    for lang in langs:
        asyncio.run(render(lang))
