# E2E navigation tests

Smoke tests that open every internal route in
[`routes.json`](./routes.json) on **desktop** (1280×900) and **mobile**
(390×844) viewports, then exercise browser **Back / Forward** across a
representative navigation flow.

## Run

The Lovable sandbox already runs the dev server on
`http://localhost:8080`. Nothing else is required — Playwright's
Chromium is pre-installed.

```bash
python3 tests/e2e/navigation.py
```

Point at a different environment with `BASE_URL`:

```bash
BASE_URL=https://<preview-or-published-host> python3 tests/e2e/navigation.py
```

Exit code is non-zero when any page fails to load, is missing a visible
`<h1>`, or when a back/forward step lands on a broken page. A per-device
summary and a list of failures is printed at the end.

## Keeping the route list in sync

`routes.json` mirrors the entries in `src/lib/site-nav.ts` plus a few
top-level pages (`/`, `/contact`, `/careers`). When you add a new route
under `src/routes/`, add its URL there so the smoke test picks it up.

## Accessibility regression suite

```bash
npm run test:a11y     # python3 tests/e2e/a11y_navigation.py
```

Runs on desktop (1280×1800) and mobile (390×844) across 10 representative
routes and checks, on every page **and after client-side route changes /
history back**:

- axe-core scan (fails on serious/critical; decorative `aria-hidden` nodes excluded)
- "Skip to main content" is the first Tab stop and moves focus to `<main id="main">`
- "Skip to search" opens the command palette with focus in its input
- Header disclosure buttons expose `aria-expanded` / `aria-controls`, and
  Escape collapses them and returns focus to the trigger
- Focus indicators are actually rendered for keyboard users

Contexts use `reduced_motion="reduce"` so reveal animations are never scanned
mid-transition. Exit code is non-zero on any failure.
