#!/usr/bin/env python3
"""
Lighthouse Campus — social share card (1200x630) generator.

The logo is always the single approved asset pointer; only layout/text here.
Outputs public/lighthouse-social-card-v9.jpg (versioned path follows SOCIAL_CARD_VERSION).
"""
import asyncio
import base64
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
POINTER = ROOT / "src/assets/lighthouse-official-logo.png.asset.json"
APPROVED_ASSET_ID = "5d38ff3c-f45d-40e5-9422-681697584e01"
CDN_BASES = ["http://localhost:8080", "https://lighthousecampus.com"]
W, H = 1200, 630


def load_official_logo() -> str:
    pointer = json.loads(POINTER.read_text())
    if pointer["asset_id"] != APPROVED_ASSET_ID:
        raise SystemExit("Refusing to render: official logo pointer changed.")
    last = None
    for base in CDN_BASES:
        try:
            req = urllib.request.Request(
                base + pointer["url"], headers={"User-Agent": "lighthouse-card-generator"}
            )
            with urllib.request.urlopen(req, timeout=20) as r:
                return "data:image/png;base64," + base64.b64encode(r.read()).decode()
        except Exception as exc:
            last = exc
    raise SystemExit(f"Could not load the approved logo asset: {last}")


HTML = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; overflow:hidden;
    background: radial-gradient(120% 140% at 18% 30%, #2C6E6B 0%, #0E3A56 45%, #08253C 100%); }
  .card { display:grid; grid-template-columns: 600px 1fr; height:630px; align-items:center; }
  .logo { display:flex; align-items:center; justify-content:center; padding:34px; }
  .logo img { width:100%; max-width:520px; height:auto; display:block;
    filter: drop-shadow(0 18px 44px rgba(0,0,0,.45)); }
  .panel { position:relative; height:100%; display:flex; flex-direction:column;
    align-items:center; justify-content:center; text-align:center; padding:0 60px; gap:0; }
  .panel::before { content:""; position:absolute; left:0; top:96px; bottom:96px; width:1px;
    background:linear-gradient(180deg, rgba(212,175,55,0), rgba(212,175,55,.55), rgba(212,175,55,0)); }
  h1 { font-family:"Cormorant Garamond", serif; font-weight:700; font-size:66px; line-height:1.05;
    letter-spacing:.02em; color:#e6c465; text-transform:uppercase; }
  h1 span { white-space:nowrap; }
  .rule { width:120px; height:2px; margin:22px auto 20px;
    background:linear-gradient(90deg, rgba(212,175,55,0), #d4af37, rgba(212,175,55,0)); }
  h2 { font-family:"Inter", sans-serif; font-weight:500; font-size:34px; color:#ffffff;
    letter-spacing:.01em; }
  p { font-family:"Inter", sans-serif; font-weight:300; font-size:22px; color:#c3cfe3;
    margin-top:14px; letter-spacing:.03em; }
</style>
</head>
<body>
  <div class="card">
    <div class="logo"><img id="logo" alt="Lighthouse Campus" /></div>
    <div class="panel">
      <h1><span>Light House</span><br />Campus</h1>
      <div class="rule"></div>
      <h2>International School</h2>
      <p>Sudan &nbsp;·&nbsp; South Sudan &nbsp;·&nbsp; Egypt &nbsp;·&nbsp; Uganda</p>
    </div>
  </div>
  <script>document.getElementById("logo").src = "__LOGO__";</script>
</body>
</html>
"""


async def render(logo: str):
    from playwright.async_api import async_playwright

    tmp = Path("/tmp/lh-social-card.html")
    tmp.write_text(HTML.replace("__LOGO__", logo), encoding="utf-8")
    out = ROOT / "public/lighthouse-social-card-v9.jpg"

    # Remove stale versions so only the latest card remains in the deploy bundle
    for stale in ROOT.glob("public/lighthouse-social-card-v*.jpg"):
        if stale != out:
            stale.unlink()
    for stale in ROOT.glob("public/lighthouse-social-card-v*.webp"):
        if stale.with_suffix(".jpg") != out:
            stale.unlink()
    legacy_webp = ROOT / "public/lighthouse-social-card.webp"
    if legacy_webp.exists():
        legacy_webp.unlink()

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        page = await (await browser.new_context(
            viewport={"width": W, "height": H}, device_scale_factor=2
        )).new_page()
        await page.goto(tmp.as_uri(), wait_until="networkidle")
        await page.wait_for_timeout(500)
        await page.screenshot(path="/tmp/lh-social-card.png")
        await browser.close()

    from PIL import Image

    img = Image.open("/tmp/lh-social-card.png").convert("RGB").resize((W, H), Image.LANCZOS)
    img.save(out, quality=92, optimize=True)
    img.save(out.with_suffix(".webp"), quality=90, method=6)
    print("✓", out.relative_to(ROOT))


if __name__ == "__main__":
    asyncio.run(render(load_official_logo()))
