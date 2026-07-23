# Lighthouse Campus Website — Technical Architecture

Version: 1.0 (Production Baseline)
Stack: TanStack Start v1 · React 19 · Vite 7 · Tailwind CSS v4 · shadcn/ui
Runtime: Cloudflare Workers (workerd) with `nodejs_compat`.
Deployment: Lovable managed hosting.

---

## 1. Routing Architecture

File-based routing under `src/routes/`. TanStack Router generates
`src/routeTree.gen.ts` on every build — never hand-edited.

### Conventions
- Dot-separated filenames map to URL segments. `about_.our-story.tsx`
  produces `/about/our-story`. The trailing underscore on the parent
  segment breaks the layout relationship, so each sub-page is a
  standalone route rather than a child rendered inside `<Outlet />`.
- `index.tsx` files are leaf routes for their parent path.
- `__root.tsx` is the single root layout (Header, Outlet, Footer, Head).
- `src/routes/sitemap[.]xml.ts` is a server route that emits `sitemap.xml`.

### Route inventory (86 route files)
- **Root & marketing**: `index`, `about`, `academic-experience`,
  `admissions`, `campus-experience`, `campuses`, `careers`, `community`,
  `contact`, `explore.digital-ecosystem`, `learning-journey`, `news`,
  `our-model`, `parents`, `student-life`, `campuses.mohandessin`.
- **About**: 9 sub-pages (`our-story`, `why-lighthouse`, `vision`,
  `mission`, `core-values`, `educational-philosophy`, `leadership`,
  `governance`, `campus-culture`).
- **Our Model**: 10 sub-pages under `/our-model/*`.
- **Learning Journey**: 5 sub-pages under `/learning-journey/*`.
- **Student Life**: 7 sub-pages.
- **Campus Experience**: 10 sub-pages.
- **Admissions**: 7 sub-pages.
- **Parents**: 8 sub-pages.
- **Community**: 5 sub-pages.
- **News & Insights**: 8 sub-pages.

### Route options
- Every route sets `head()` with `title`, `description`, `og:title`,
  `og:description`, `og:url`, `og:type`, and a leaf-only
  `<link rel="canonical">`.
- Sitewide defaults live in `__root.tsx` only (viewport, `og:site_name`,
  `og:type: website`).

---

## 2. Component Architecture

### Shared building blocks (`src/components/blocks.tsx`)
- `Container` — max-width wrapper with horizontal padding.
- `Section` — vertical rhythm section with `tone` variants (`default`,
  `muted`, `sand`, `navy`).
- `SectionHeading` — eyebrow + title + optional intro.
- `Eyebrow` — small caps label with rule.
- `FeatureCard` — icon + title + body card, used in grids.
- `ButtonLink` — anchor/Link styled as button (variants: `gold`,
  `outline-light`, `ghost`).
- `SmartLink` — internal/external-aware link primitive.

### Composed templates
- `PageHero` (`src/components/page-hero.tsx`) — compact editorial hero
  with breadcrumb, eyebrow, title, intro, optional section anchors.
- `CtaBand` (`src/components/cta-band.tsx`) — closing navy invitation
  band with primary/secondary CTA.
- `InternalPage` (`src/components/internal-page.tsx`) — configuration-
  driven sub-page template: hero → alternating tone sections → optional
  status block → related links grid → CTA band.
- `OverviewPage` (same file) — section landing template: hero with
  anchor cards → paragraphs → sections grid → CTA band.

### Site chrome
- `SiteHeader` — primary + secondary nav, mobile drawer.
- `SiteFooter` — grouped nav, contact, meta.

### Content-model interfaces
`InternalPageConfig`, `OverviewPage` props, and `NavSection` in
`src/lib/site-nav.ts` are the canonical content schemas. Every content
page is a config object passed to a template — there is no bespoke
one-off layout in `src/routes/`. This is the foundation of CMS readiness
(see §7).

---

## 3. Content Architecture

- Source of truth: `LIGHTHOUSE_CAMPUS_WEBSITE_CONTENT_v1.md`.
- Every route file declares a `config` constant (typed by
  `InternalPageConfig` or `OverviewPage` props) and renders the shared
  template. No JSX-embedded copy in content pages.
- Institutional vocabulary (single canonical form):
  - "Lighthouse Campus" (never "the school" as a proper noun).
  - "Learning Journey" (product term).
  - "Learners" for children in academic context.
  - "Students" retained only inside the "Student Life" section name and
    inherited sub-page titles, per the approved architecture.
  - "Families" for the parent audience.
  - "Teachers" for educators (public term for the ZANOVA `Educator`).
  - "Institutional Intelligence" for the ZANOVA-aligned meta-model.

---

## 4. Navigation Architecture

- Single source: `src/lib/site-nav.ts` (`primaryNav`, `secondaryNav`,
  `allNav`).
- Consumed by `SiteHeader`, `SiteFooter`, and `sitemap[.]xml.ts` — one
  edit propagates to all three surfaces.
- Breadcrumbs are declared per route via the `breadcrumb` field on the
  page config and rendered by `PageHero`.

---

## 5. SEO Architecture

- Per-route `head()` in every leaf; sitewide defaults in `__root.tsx`.
- Canonical: leaf-only, relative path (host resolved at request time).
- `og:image`: intentionally omitted until approved photography exists —
  a placeholder OG image previews worse than none.
- `robots.txt` at `public/robots.txt` allows all crawlers.
- Sitemap generated at `/sitemap.xml` from `allNav` plus explicit
  additions in `src/routes/sitemap[.]xml.ts`.
- JSON-LD: reserved for future addition when campus/organization data
  (address, phone, geo) is confirmed.

---

## 6. Asset Architecture

- Binary assets externalised via Lovable Assets CDN
  (`.asset.json` pointers in `src/assets/`).
- Current inventory: logo variants, principle illustrations, value
  illustrations.
- Photography is intentionally deferred; approved photography will
  replace the current illustration set under an image-governance plan
  (see §10).

---

## 7. CMS Readiness

The website is prepared for CMS integration without further refactor:

1. Every content page is a config object → maps 1:1 to a CMS entry.
2. Content, layout, presentation, navigation, and metadata are already
   separated in code.
3. The `InternalPageConfig` and `OverviewPage` prop shapes are the
   candidate CMS schemas.
4. Navigation is data (`site-nav.ts`) rather than JSX — trivially
   replaced by a CMS query.
5. Institutional statements (Vision, Mission, Values, Philosophy) are
   already discrete short pages, matching a future
   `institutional_statements` collection in ZANOVA.

Recommended future CMS collections: `pages`, `overview_pages`,
`nav_sections`, `articles`, `events`, `people`, `programmes`,
`institutional_statements`, `digital_services`.

---

## 8. Accessibility Architecture

- Single `<main>` per route via `__root.tsx` layout.
- Semantic H1 per page (enforced by `PageHero`).
- shadcn/ui primitives (Radix) for interactive widgets — ARIA correct
  by construction.
- Colour tokens (`text-foreground`, `text-muted-foreground`,
  `bg-navy`/`text-navy-foreground`) meet WCAG AA on their paired
  backgrounds.
- Focus-visible rings inherited from shadcn defaults.
- Reduced-motion honoured by CSS transitions (no JS-driven parallax).
- Icon-only buttons carry `aria-label`.
- Alt text: currently illustration assets carry contextual alt via
  parent component; photography will be governed by the image plan.

---

## 9. Responsive Architecture

- Mobile-first Tailwind utilities.
- Breakpoints: default (mobile), `sm`, `md`, `lg`, `xl`.
- `Container` and `Section` provide consistent spacing rhythm at all
  breakpoints.
- Header collapses to a mobile drawer under `md`.
- `PageHero` and card grids reflow (`grid-cols-1` → `sm:grid-cols-2` →
  `lg:grid-cols-3`).

---

## 10. Future Integration Architecture

- **ZANOVA**: see `LIGHTHOUSE_ZANOVA_MAPPING.md` for the entity map.
- **Digital services registry**: `/explore/digital-ecosystem` and the
  Parent Portal / Apply Online placeholders render status badges only —
  no fake dashboards.
- **Auth**: no authentication is bundled on the website; portals will
  ship on their own subdomains and share identity via ZANOVA SSO.
- **Analytics**: reserved for the production hosting configuration; not
  hard-coded into components.
- **Image governance**: photography will land as CDN assets keyed by
  page + section + purpose + alt text; current illustration assets will
  be retained as fallback until photography is delivered.
- **Icon governance**: `lucide-react` is the single icon library with a
  fixed stroke weight and size scale.

---

## 11. Build & Runtime Notes

- Vite plugin: `@lovable.dev/vite-tanstack-config` — do not duplicate
  bundled plugins.
- SSR entry: `src/server.ts` (error wrapper); client boot: `src/start.ts`.
- Server functions are supported but currently unused by the marketing
  site; reserved for future contact / RSVP endpoints.
- Route splitting is automatic; component functions are unexported.

---

## 12. Change Log

- v1.0 — Production Baseline. Frozen for structural changes pending
  ZANOVA integration.

---

## 12. The Four Cadences (Design System)

Every route belongs to exactly one cadence. The cadence is chosen by
content type — not by section — so unity of identity coexists with
rhythmic variety across the site.

### Cadence I — Cinematic
**Purpose:** narrative journeys with chapter-level depth.
**Toolkit:** `StageCinema` / chapter panels · `ChapterRail`
(sticky vertical navigator with `IntersectionObserver`, keyboard
support) · `ChapterActions` (per-chapter Details dialog +
deep-linked Share) · gilded Roman numerals · alternating
navy/sand full-bleed panels.
**Routes:** `/learning-journey`, `/learning-journey/graduation-pathways`.

### Cadence II — Editorial
**Purpose:** philosophy, vision, reflection.
**Toolkit:** `EditorialPage` template · generous reading column ·
drop-cap opening (`.editorial-lead`) · Roman-numeral chapters ·
`Pullquote` between chapters · closing navy `manifesto` panel ·
optional odd-count `focus` chip row.
**Routes:** `/about/mission`, `/about/vision`,
`/about/educational-philosophy`, `/about/our-story`,
`/our-model/educational-model`, `/our-model/student-development`,
`/parents/parent-journey`.

### Cadence III — Architectural
**Purpose:** structure, systems, components.
**Toolkit:** `ArchitecturalPage` template with six composable units
(`pillars`, `cards`, `stats`, `bento`, `principles`, `related`) ·
in-hero anchor navigation · one navy pin in every bento grid ·
custom SVG icons from `lighthouse-icons.tsx`.
**Routes:** `/academic-experience`, `/campus-experience/overview`,
`/our-model/learning-ecosystem`, `/our-model/teaching-framework`,
`/student-life`, `/admissions`, `/parents`, `/community`.

### Cadence IV — Reference
**Purpose:** answers, details, policies, FAQs.
**Toolkit:** `InternalPage` template · breadcrumb · alternating
`Section` tones · optional status pill · related links · standard
CTA band · `ShareBar`.
**Routes:** all remaining sub-pages (Classrooms, Requirements,
Policies, Calendar, FAQs, News items, …).

### Unifying threads (present in all four cadences)
1. Floating logo watermarks via `CrystalField` (tonal variants:
   navy = `screen` + gold glow; light = `multiply` at 10–14%).
2. `WatermarkFloat` emblem on hero blocks (4.5% opacity, 62s drift).
3. `ScrollProgress` gilded bar in `__root.tsx`.
4. `ShareBar` at the foot of every content route.
5. Global favicon, OG image (`/lighthouse-social-card.webp`) and
   canonical / og:url as **absolute** URLs pointing at
   `https://lighthousecampus.lovable.app`.
6. Typography scale (display italic numerals, gilded accents).
7. Palette: navy · gold · sand · brand-blue.
8. Breadcrumbs + Related links + CTA band structure.

### Selection rule
Ask of each route: _"Does it tell a journey?"_ → I / II.
_"Does it show a structure?"_ → III. _"Does it answer a question?"_
→ IV. This test is enforced at review time; a page never mixes two
cadences.
