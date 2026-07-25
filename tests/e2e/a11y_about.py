"""Comprehensive accessibility test for /about — axe-core scan, keyboard nav, active state, reduced motion."""
import asyncio, json, sys
from pathlib import Path
from playwright.async_api import async_playwright

OUT = Path("/tmp/browser/a11y_about")
OUT.mkdir(parents=True, exist_ok=True)
AXE_CDN = "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js"

async def main():
    failures = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        # Test 1: normal motion — axe scan + keyboard nav + active highlight
        ctx = await browser.new_context(viewport={"width": 1280, "height": 1800})
        page = await ctx.new_page()
        await page.goto("http://localhost:8080/about", wait_until="domcontentloaded")
        await page.wait_for_selector("nav[aria-label='Sections of this page']")
        await page.wait_for_load_state("networkidle")
        await page.wait_for_timeout(300)
        await page.add_script_tag(url=AXE_CDN)
        result = await page.evaluate("async () => await axe.run(document, {resultTypes:['violations']})")
        critical = [v for v in result["violations"] if v["impact"] in ("critical", "serious")]
        print(f"axe: {len(result['violations'])} total violations, {len(critical)} serious/critical")
        for v in critical:
            print(f"  - [{v['impact']}] {v['id']}: {v['help']} ({len(v['nodes'])} nodes)")
        if critical:
            failures.append(f"{len(critical)} serious/critical axe violations")

        # Test 2: keyboard arrow nav in TOC
        first = page.locator("nav[aria-label='Sections of this page'] a").first
        await first.focus()
        await page.keyboard.press("ArrowRight")
        focused = await page.evaluate("() => document.activeElement?.textContent?.trim()")
        print(f"ArrowRight → focused: {focused!r}")
        if focused != "Understanding":
            failures.append(f"ArrowRight expected 'Understanding', got {focused!r}")
        await page.keyboard.press("End")
        focused_end = await page.evaluate("() => document.activeElement?.textContent?.trim()")
        print(f"End → focused: {focused_end!r}")
        if focused_end != "Invitation":
            failures.append(f"End expected 'Invitation', got {focused_end!r}")
        await page.keyboard.press("Home")
        focused_home = await page.evaluate("() => document.activeElement?.textContent?.trim()")
        if focused_home != "Footprint":
            failures.append(f"Home expected 'Footprint', got {focused_home!r}")

        # Test 3: Enter activates and updates aria-current
        await page.keyboard.press("ArrowRight")
        await page.keyboard.press("ArrowRight")  # Location
        await page.keyboard.press("Enter")
        await page.wait_for_timeout(1200)
        current = await page.evaluate("() => document.querySelector(\"nav[aria-label='Sections of this page'] a[aria-current]\")?.textContent?.trim()")
        print(f"After Enter on Location → aria-current: {current!r}")
        if current != "Location":
            failures.append(f"aria-current expected 'Location', got {current!r}")
        await page.screenshot(path=str(OUT / "1_normal.png"))

        # Test 4: scroll updates active state via IntersectionObserver
        await page.evaluate("() => { const el=document.querySelector('#partnership'); window.scrollTo(0, el.getBoundingClientRect().top+window.scrollY-window.innerHeight*0.1); }")
        await page.wait_for_timeout(800)
        active_scroll = await page.evaluate("() => document.querySelector(\"nav[aria-label='Sections of this page'] a[aria-current]\")?.textContent?.trim()")
        print(f"Scrolled to #partnership → aria-current: {active_scroll!r}")
        if active_scroll not in ("Partnership", "Invitation"):
            failures.append(f"Scroll active expected Partnership, got {active_scroll!r}")

        # Test 5: skip link works
        await page.goto("http://localhost:8080/about", wait_until="domcontentloaded")
        await page.keyboard.press("Tab")
        skip_focus = await page.evaluate("() => document.activeElement?.getAttribute('href')")
        print(f"First tab focus href: {skip_focus!r}")
        if skip_focus != "#main":
            failures.append(f"Skip link expected #main, got {skip_focus!r}")

        await ctx.close()

        # Test 6: reduced motion — smooth scroll disabled
        ctx2 = await browser.new_context(viewport={"width": 1280, "height": 1800}, reduced_motion="reduce")
        page2 = await ctx2.new_page()
        await page2.goto("http://localhost:8080/about", wait_until="domcontentloaded")
        await page2.wait_for_selector("nav[aria-label='Sections of this page']")
        sb = await page2.evaluate("() => getComputedStyle(document.documentElement).scrollBehavior")
        print(f"Reduced motion → scroll-behavior: {sb}")
        if sb != "auto":
            failures.append(f"reduced motion should force scroll-behavior:auto, got {sb}")
        # click TOC item and confirm no smooth animation frames delay
        await page2.locator("nav[aria-label='Sections of this page'] a", has_text="Identity").click()
        await page2.wait_for_timeout(150)
        y = await page2.evaluate("() => document.querySelector('#identity').getBoundingClientRect().top")
        print(f"Reduced motion → #identity top after click: {y:.0f}")
        if abs(y) > 100:
            failures.append(f"reduced motion click did not jump; top={y}")
        await page2.screenshot(path=str(OUT / "2_reduced.png"))

        await browser.close()

    (OUT / "report.json").write_text(json.dumps({"failures": failures}, indent=2))
    if failures:
        print("\nFAIL:")
        for f in failures: print(" -", f)
        sys.exit(1)
    print("\nPASS — all a11y checks green")

asyncio.run(main())
