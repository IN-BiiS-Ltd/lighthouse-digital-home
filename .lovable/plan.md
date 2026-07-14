# Lighthouse Campus — Institutional Expansion Plan

## Explicit confirmations

1. **Homepage & Hero unchanged.** `src/routes/index.tsx` hero block, ordering, animations, and visuals are not touched. Only a single contextual `ButtonLink` ("Explore Our Model") is added inside the existing "Why Lighthouse" band already present on the page.
2. **No removal or redesign.** No existing page, component, token, font, colour, spacing rule or animation is removed or restyled. Edits are additive; existing files change only where navigation integration requires (header nav array, footer link list, sitemap entries, typo fix).
3. **"Our Model" ships all 10 pillar pages** with the full supplied content: Educational Model, Learning Ecosystem, Learner Profile, Pedagogy & Teaching, Curriculum Framework, Assessment Philosophy, Wellbeing & Character, Innovation & Technology, Institutional Intelligence, Continuous Improvement.
4. **Compact internal-page template.** All new internal pages use the existing compact `PageHero` + section pattern already used by `/about/why-lighthouse`. No new full-screen hero component is introduced.
5. **Learning stages ≠ academic pathways.** Learning Journey stages (Early Years → Graduation) and Academics curriculum pathways live in separate route trees and separate content modules; cross-links only.
6. **Real routes, real nav.** Every new section gets a real route file, a real nav entry, breadcrumbs with JSON-LD, and a footer link. No hash-only navigation.
7. **No invented facts.** No fabricated accreditation, staff names, fees, scholarships, portals, partners, or future-campus claims. Where source content is silent, the page stays silent.
8. **Accurate digital statuses.** Every digital service renders a `StatusPill` of exactly `Available`, `In Development`, or `Planned`, matching the supplied list.
9. **CMS-ready, ZANOVA-ready, ZANOVA not built.** Content lives in typed modules under `src/content/*` (one export per page/collection) so a future CMS or ZANOVA feed can replace the source without touching routes/components. No auth, LMS, ERP, portal, or ZANOVA UI is built.
10. **`LIGHTHAUSE` → `LIGHTHOUSE`** corrected in every occurrence across `src/`.
11. **QA gates run each phase:** `tsgo --noEmit`; each new route renders; breadcrumbs + JSON-LD present; per-route `head()` with title/description/og/canonical; alt text on images; visible focus + keyboard nav on cards; mobile @375px; reduced-motion respected; `/sitemap.xml` updated; no console errors.
12. **Phased delivery** — files, routes, and shared components enumerated below.

---

## Shared components (added once, reused across all phases)

- `src/components/breadcrumbs.tsx` — accessible breadcrumb + JSON-LD `BreadcrumbList`.
- `src/components/status-pill.tsx` — `Available | In Development | Planned` visual token, uses existing semantic colours.
- `src/components/service-card.tsx` — icon + title + description + `StatusPill`.
- `src/components/ecosystem-diagram.tsx` — SVG diagram of the digital ecosystem (decorative, `aria-hidden`, with text fallback list).
- `src/components/internal-page.tsx` — thin wrapper composing existing `PageHero` + `Breadcrumbs` + slotted sections; no new visual language.
- `src/content/_types.ts` — TypeScript models: `ModelPillar`, `LearningStage`, `AcademicPathway`, `SubjectArea`, `Campus`, `NewsArticle`, `DigitalService`, `AdmissionsStep`, etc.
- `src/lib/site-nav.ts` — single source of truth for header + footer navigation; header/footer read from it.

---

## Phase 1 — Foundations, "Our Model", Digital Ecosystem, global fixes

**Edits (existing files):**
- `src/components/blocks.tsx` — fix `LIGHTHAUSE` → `LIGHTHOUSE` (and any other occurrences found by `rg`).
- `src/components/site-header.tsx` — consume `site-nav.ts`; add "Our Model" and "Explore" groups. Visual style unchanged.
- `src/components/site-footer.tsx` — add link columns for the new sections; visual unchanged.
- `src/routes/index.tsx` — add ONE `ButtonLink` ("Explore Our Model → `/our-model`") inside the existing "Why Lighthouse" band. Hero + all other sections untouched.
- `src/routes/sitemap[.]xml.ts` — append Phase 1 routes.

**New routes:**
- `src/routes/our-model.index.tsx` — overview + 10 pillar cards.
- `src/routes/our-model.educational-model.tsx`
- `src/routes/our-model.learning-ecosystem.tsx`
- `src/routes/our-model.learner-profile.tsx`
- `src/routes/our-model.pedagogy-and-teaching.tsx`
- `src/routes/our-model.curriculum-framework.tsx`
- `src/routes/our-model.assessment-philosophy.tsx`
- `src/routes/our-model.wellbeing-and-character.tsx`
- `src/routes/our-model.innovation-and-technology.tsx`
- `src/routes/our-model.institutional-intelligence.tsx`
- `src/routes/our-model.continuous-improvement.tsx`
- `src/routes/explore.digital-ecosystem.tsx` — 12 services + statuses + ecosystem diagram.

**New content modules:** `src/content/our-model/*.ts` (one per pillar) + `src/content/digital-ecosystem.ts`.

**QA:** typecheck, all 12 routes load, breadcrumbs + JSON-LD present, per-route meta set, mobile OK, no console errors.

---

## Phase 2 — About expansion, Learning Journey, Academics expansion

**About children** (`src/routes/about_.*`): mission-vision-values, our-story, leadership-and-governance, faculty-philosophy, safeguarding, transparency-and-ethics, partnerships (only if source content supports each — otherwise omitted).

**Learning Journey stages** (`src/routes/learning-journey.*`): early-years, primary-years, middle-years, upper-years, graduation-transition — content-only stage pages, no fabricated ages/fees.

**Academics expansion** (`src/routes/academics.*`): curriculum-framework, learning-pathways.index + per-pathway pages, subject-areas, teaching-approach, assessment, digital-learning, research-and-inquiry, languages, arts, sciences, humanities — added only where supplied content exists.

**New content modules** under `src/content/learning-journey/*.ts`, `src/content/academics/*.ts`.

**QA gates as Phase 1** + link audit (no dead links from Phase 1 pages).

---

## Phase 3 — Student Life, Campus, Admissions, Parents, Community, News

- Student Life children (wellbeing, houses, service-learning, leadership, arts, athletics, celebrations) — supplied content only.
- Campus (`src/routes/campuses.*`): current campus detail pages; `/campuses/future-campuses` states "planned" without inventing locations, dates, or capacities.
- Admissions (`src/routes/admissions.*`): process, criteria, timeline, visits, faq — **no fees, no scholarships, no portal** unless source explicitly provides them.
- Parents & Community sections — supplied content only.
- News & Insights hub upgraded under `/explore/*`, existing articles preserved.

**QA gates as prior phases** + full sitemap regen + Lighthouse-style manual pass on 3 representative pages.

---

## Global QA checklist (every phase)

- `tsgo --noEmit` clean.
- Every new route: `head()` with title (≤60), description (≤160), `og:*`, self-referential canonical.
- `/sitemap.xml` includes all new routes.
- Breadcrumbs render + emit `BreadcrumbList` JSON-LD.
- Keyboard: Tab order logical, focus ring visible on every interactive element, cards operable via Enter/Space.
- Screen reader: landmarks, `aria-current="page"` on active nav, alt text on non-decorative images, decorative SVGs `aria-hidden`.
- Reduced-motion honoured (existing `motion-safe`/`motion-reduce` utilities).
- 375px, 768px, 1280px, 1536px viewports checked.
- No console errors or warnings.

## What is explicitly NOT done

- No homepage hero, no re-theming, no new fonts/colours/tokens.
- No ZANOVA, LMS, ERP, SIS, parent/student portal, or authenticated area.
- No fabricated staff, fees, scholarships, accreditation, campuses, or partners.
- No edits to `src/routeTree.gen.ts` (auto-generated).
- No new dependencies.

---

## Decision needed

Reply with **(a)** Phase 1 only this turn, then 2 and 3 in follow-ups, or **(b)** all three phases in one large batch. On approval I will begin implementation and run the QA gates listed above.