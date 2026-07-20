# Lighthouse Campus — World-Class Elevation Plan
## Target: 9.8/10 per axis · Benchmarks: Apple · Stripe · Linear · Palantir · Arc

---

## Governing Doctrine

بناءً على `IN-BiiS Experience OS`:
- **Motion is intelligence, not decoration** — every animation must reveal, guide, or coordinate.
- **Strategic stillness** — calm, deliberate, confident. Movement emerges from stillness.
- **Space is authority** — generous breathing room, no crowding.
- **Cinematic behavior, not cinematic posters** — atmospheric transitions, not spectacle.
- **Never**: startup vibes, SaaS templates, neon, marketing clichés.

---

## Reference Benchmarks (learn principles, imitate none)

| Studio | Principle to internalize |
|---|---|
| **Apple** | Editorial typography rhythm · pinned scroll storytelling · ken-burns restraint |
| **Stripe** | Precision grids · living gradient meshes · type as UI |
| **Linear** | Speed illusion · micro-interactions with intent · translucent depth |
| **Palantir** | Sovereign silence · data-as-atmosphere · executive gravity |
| **Arc / Vercel** | Progressive reveal · scroll choreography · glass surfaces |

---

## Six Elevation Tracks

### Track 1 — Motion Choreography (target 9.8)
Purposeful, coordinated system motion.

- **Scroll-driven reveals**: replace uniform `Reveal` with staggered orchestration via IntersectionObserver + CSS scroll-timeline where supported; fallback to stagger-index custom properties.
- **Magnetic pointer** on primary CTAs (subtle 4px pull, not gimmicky).
- **Cursor-aware card lift** already exists (`cine-card`) — extend to hero images and stat blocks.
- **Route transitions**: cross-fade + 6px lift between page navigations (view-transitions API where supported).
- **Micro-choreography**: eyebrow line draws in → title fades up → intro line follows (200ms cascade).

### Track 2 — Typographic System (target 9.8)
Editorial gravity like Apple/Stripe.

- Introduce a **display-scale ramp** (fluid clamp) — hero titles at `clamp(2.5rem, 6vw, 5.5rem)` with tightened tracking.
- Add **Instrument Serif** or **Fraunces** as a display accent for pull-quotes and section eyebrows.
- **Text-wrap: balance** globally on headings; `text-wrap: pretty` on body.
- **Optical alignment**: hanging punctuation on blockquotes.
- **Numeric tabular**: stat blocks use `font-variant-numeric: tabular-nums`.

### Track 3 — Depth & Materiality (target 9.8)
Sovereign, calm, layered.

- **Living gradient mesh** in navy sections (SVG turbulence, low-opacity, slowly morphing) — replaces static gradients.
- **Glass surfaces** for the header (backdrop-blur when scrolled) and floating CTAs.
- **Layered shadows**: three-tier elevation tokens (`shadow-elevated-1/2/3`) with color-tinted ambient shadows (navy for light surfaces, gold-tinted for cards on navy).
- **Grain/noise overlay** at 3% opacity on hero surfaces — kills flat-vector feel.
- **Radial vignette** on all PageHero components — draws eye to headline.

### Track 4 — Content Density & Editorial Composition (target 9.8)
Break template rigidity.

- **Section rhythm patterns**: introduce 4 hero variants (Editorial, Split, Immersive, Data) and rotate across the 86 pages.
- **Anchored side rails** on long pages (progress + section markers, like Stripe docs).
- **Pull-quote treatment**: full-width bleed, oversized quotation glyph, attribution with role.
- **In-line footnotes / margin notes** on academic pages (like Tufte / Stripe docs).
- **Callout components**: `<Insight>`, `<Note>`, `<Milestone>` — distinct visual language.

### Track 5 — Data & Information Design (target 9.8)
Fixes the current 0/10 gap.

- **Institutional Model diagram** (`our-model.tsx`): interactive 10-pillar radial with hover-reveal descriptions.
- **Learner Journey timeline**: horizontal scroll-snap with stage cards.
- **Assessment Framework**: 4-quadrant matrix (formative × summative / individual × collective).
- **Campus map**: illustrated SVG floor-plan of Mohandessin campus (not embedded Google Maps).
- **Stats dashboards**: animated count-up on scroll, small sparklines for growth.

### Track 6 — Sensory & Environmental Signals (target 9.8)
Living intelligence layer.

- **Breathing atmosphere**: `BrandAtmosphere` upgraded with slow parallax drift on scroll (subtle, 2px per 100vh).
- **Time-of-day tint**: hero gradient shifts 5° hue between morning/afternoon/evening (using local time).
- **Cursor beacon** on navy sections: a 400px soft-light spot follows cursor at 30% opacity.
- **Section transitions**: subtle horizontal hairline draws across as user enters each section.
- **Ambient audio cue** (opt-in, off by default): 800ms low-volume chime on primary CTA hover — disabled behind toggle.

---

## Execution Sequence (Stages)

```text
Stage A — Foundations (invisible plumbing)
├── Typographic ramp + font accent
├── Elevation shadow tokens
├── Grain overlay utility
└── Fluid spacing scale

Stage B — Motion System
├── Orchestrated Reveal (stagger-aware)
├── Magnetic CTA
├── View-transitions between routes
└── Header glass-on-scroll

Stage C — Hero Variants (4 templates)
├── Editorial hero (current, refined)
├── Split hero (media + text)
├── Immersive hero (full-bleed image + overlay)
└── Data hero (stat-forward)

Stage D — Data Visualizations
├── 10-pillar radial (Our Model)
├── Learner journey timeline
├── Assessment matrix
└── Campus floor-plan SVG

Stage E — Editorial Components
├── Pull-quote, Insight, Milestone
├── Side-rail progress on long pages
└── Margin notes

Stage F — Environmental Layer
├── Living gradient mesh
├── Cursor beacon
├── Parallax atmosphere
└── Section hairline transitions
```

Stages A + B ship first because everything else depends on them.

---

## Non-Goals (hard refusals)

- No neon, glitch, cyberpunk, or generative-AI aesthetics.
- No parallax-heavy hero videos or WebGL spectacle.
- No dark mode toggle (institutional identity stays fixed).
- No CMS rewrite in this pass — content stays in typed modules.
- No copy changes — this is a visual/behavioral elevation only.

---

## Technical Details

- **Motion**: CSS-first (scroll-timeline, view-transitions, `@starting-style`) with JS fallback via IntersectionObserver. No Framer Motion added unless a specific interaction demands it.
- **Fonts**: add one accent family via `<link>` in `__root.tsx` head (per Tailwind v4 rules — no `@import` of remote URLs in `styles.css`).
- **Tokens**: extend `src/styles.css` `@theme` with elevation, grain, gradient-mesh, fluid-type variables.
- **Data-viz**: hand-crafted SVG components in `src/components/viz/` — no chart library.
- **Perf budget**: keep LCP < 1.8s, CLS < 0.05, main-thread JS < 120KB per route.
- **A11y**: every new animation respects `prefers-reduced-motion`; every viz has a `<figcaption>` with prose fallback.
- **Files touched**: `styles.css`, `blocks.tsx`, `page-hero.tsx`, `brand-atmosphere.tsx`, `__root.tsx`, plus new `src/components/viz/*`, `src/components/hero-variants/*`, `src/components/editorial/*`.

---

## Approval

I'll start with **Stage A + B** in the next turn (foundations + motion system) — these are invisible-but-transformative, and they unlock the rest without visible churn. Confirm to proceed, or tell me to reorder / narrow / expand.
