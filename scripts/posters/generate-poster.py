#!/usr/bin/env python3
"""
Lighthouse Campus — official announcement poster generator.

Usage:
    python3 scripts/posters/generate-poster.py scripts/posters/content/<file>.json

The layout, typography and footer come from poster-template.html.
The logo is ALWAYS pulled from the single approved asset pointer
(src/assets/lighthouse-official-logo.png.asset.json) — it is never cropped,
recoloured, regenerated or replaced. Only the JSON content changes.

Outputs <out>.png (1024x1536) and <out>.webp into public/.
"""
import asyncio
import base64
import json
import mimetypes
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TEMPLATE = Path(__file__).parent / "poster-template.html"
POINTER = ROOT / "src/assets/lighthouse-official-logo.png.asset.json"
APPROVED_ASSET_ID = "5d38ff3c-f45d-40e5-9422-681697584e01"
CDN_BASES = ["http://localhost:8080", "https://lighthousecampus.com"]

W, H = 1024, 1536


def data_url(raw: bytes, mime: str) -> str:
    return f"data:{mime};base64," + base64.b64encode(raw).decode()


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
                base + pointer["url"], headers={"User-Agent": "lighthouse-poster-generator"}
            )
            with urllib.request.urlopen(req, timeout=20) as r:
                return data_url(r.read(), "image/png")
        except Exception as exc:  # try next source
            last = exc
    raise SystemExit(f"Could not load the approved logo asset: {last}")


def load_local(path: str) -> str:
    p = (ROOT / path).resolve()
    mime = mimetypes.guess_type(p.name)[0] or "image/jpeg"
    return data_url(p.read_bytes(), mime)


async def render(content: dict, out_stem: Path):
    from playwright.async_api import async_playwright

    html = TEMPLATE.read_text().replace(
        "window.__POSTER__ || {}", json.dumps(content, ensure_ascii=False)
    )
    tmp = Path("/tmp/lh-poster.html")
    tmp.write_text(html, encoding="utf-8")

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        page = await (await browser.new_context(
            viewport={"width": W, "height": H}, device_scale_factor=2
        )).new_page()
        await page.goto(tmp.as_uri(), wait_until="networkidle")
        await page.wait_for_timeout(600)
    png = out_stem.with_suffix(".png")
    await page.screenshot(path=str(png))
    await browser.close()

    from PIL import Image

    img = Image.open(png).convert("RGB")
    # Save the canonical full-resolution poster.
    full = img.resize((W, H), Image.LANCZOS)
    full.save(png, optimize=True)
    full.save(out_stem.with_suffix(".webp"), quality=88, method=6)
    print(f"✓ {png.relative_to(ROOT)}  +  {out_stem.with_suffix('.webp').relative_to(ROOT)}")

    # Generate responsive downscale variants for gallery previews.
    for target_w in (512, 256):
        target_h = int(H * target_w / W)
        thumb = img.resize((target_w, target_h), Image.LANCZOS)
        thumb.save(out_stem.with_suffix(f".{target_w}.png"), optimize=True)
        thumb.save(out_stem.with_suffix(f".{target_w}.webp"), quality=88, method=6)
        print(
            f"✓ {out_stem.with_suffix(f'.{target_w}.png').relative_to(ROOT)}  +  "
            f"{out_stem.with_suffix(f'.{target_w}.webp').relative_to(ROOT)}"
        )


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    content = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    content["logoDataUrl"] = load_official_logo()
    if content.get("photo"):
        content["photoDataUrl"] = load_local(content["photo"])
    out = ROOT / "public" / content["output"]
    asyncio.run(render(content, out))


if __name__ == "__main__":
    main()
