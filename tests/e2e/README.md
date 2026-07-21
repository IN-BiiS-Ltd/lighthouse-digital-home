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
