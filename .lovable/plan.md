
# Lighthouse Campus — Institutional Expansion (Expanded Plan)

## Explicit confirmations

1. **Homepage & Hero unchanged.** `src/routes/index.tsx` hero section will not be touched. Only tiny contextual link additions (using existing components) below the hero, and only if they slot into current sections cleanly. If any homepage edit risks altering the hero composition, I will skip it and note it.
2. **No removal or redesign** of existing pages, components, visual identity, typography, colour system, or animations. The only exceptions are navigation-integration edits: `site-nav.ts`, `site-header.tsx`, `site-footer.tsx`, `sitemap[.]xml.ts` — and *only* to add the new section/links, not to restyle.
3. **"Our Model" delivers all 10 pages** with the full supplied content, plus a section overview page (`/our-model`).
4. **Internal pages use the compact internal template** (existing `PageHero` in compact form + `Section` + `SectionHeading`) — no new full-screen homepage hero pattern is introduced.
5. **Learning stages ≠ academic pathways.** Stages (Early Years → Graduation) stay under `/learning-journey/*`. Curriculum pathways (Cambridge, Sudan National, South Sudan National) live under `/academics/pathways/*`. Stage pages reference pathways by link only.
6. **Existing sections expanded via real routes, nav, breadcrumbs, footer** — no fake anchors substituting for pages. `site-nav.ts` remains the single source of truth for header + footer + sitemap.
7. **No invented facts.** Fees, scholarships, staff names, accreditations, university destinations, future campus openings, class sizes, portals, phone numbers, addresses etc. are never fabricated. Where copy is not supplied, I use the approved holding language ("Clear, transparent fee information is available on request.", "The future Lighthouse alumni community", etc.) or a clearly marked editorial placeholder.
8. **Digital services show accurate status.** Each service card renders a `Status` pill: `Available`, `In Development`, or `Planned`. No fake login/portal links — status pills are non-interactive when the service is not `Available`.
9. **CMS-ready, ZANOVA-ready architecture.** Page copy lives in typed content modules (e.g. `src/content/our-model/*.ts`) separated from presentation. Stable slugs/IDs are used for stages, pathways, subjects, campuses, services, articles. No ERP/LMS/dashboard is built.
10. **`LIGHTHAUSE` → `LIGHTHOUSE`** fixed. Confirmed only one occurrence remains: `src/components/blocks.tsx:62` (the `Wordmark`). I will also grep once more before finishing and fix any I find.
11. **QA gates before finishing:** typecheck (`tsgo --noEmit`), route load check on a sample of new routes, keyboard/focus review on new interactive elements, alt text on all images, WCAG AA contrast (already met by tokens), reduced-motion respected (existing `Reveal`/`.cine-card` already do), meta tags per route, canonical (relative), sitemap updated, no console errors, no dead links, breadcrumbs on every internal page.
12. **Phased breakdown below**, with the exact files, routes, and shared components per phase.

---

## Shared components added once, reused everywhere

Created in **Phase 1** and reused by every phase:

- `src/components/breadcrumbs.tsx` — accessible `<nav aria-label="Breadcrumb">` with schema.org `BreadcrumbList` JSON-LD; consumes an array of `{ label, to? }`.
- `src/components/status-pill.tsx` — `Available` / `In Development` / `Planned` (uses existing tokens: brand-blue, gold, muted).
- `src/components/service-card.tsx` — card variant of `FeatureCard` that shows a `StatusPill` and renders as a non-link when status ≠ Available.
- `src/components/ecosystem-diagram.tsx` — accessible SVG (learner at center, 7 nodes: Teachers, Families, Learning, Leadership, Community, Technology, Institutional Intelligence) with subtle gold connector lines echoing the logo network motif; `role="img"` + `<title>`/`<desc>`; simplifies to a stacked list on mobile.
- `src/components/internal-page.tsx` — thin wrapper that composes `Breadcrumbs` + compact `PageHero` (existing component in its compact configuration) to standardise every internal page and enforce the template.
- `src/lib/content-types.ts` — typed models: `StandardPage`, `ModelPage`, `LearningStage`, `AcademicPathway`, `SubjectArea`, `Campus`, `NewsArticle`, `Event`, `StaffProfile`, `CareerOpportunity`, `FAQ`, `Policy`, `Resource`, `DigitalService`. Content files under `src/content/**` conform to these — CMS-swappable later.

Nothing above changes existing visuals; each is built from current tokens/components.

---

## Files changed / added — global (Phase 1 opens these; later phases only extend content)

**Changed (navigation + typo + sitemap):**
- `src/components/blocks.tsx` — fix `LIGHTHAUSE` → `LIGHTHOUSE` (one string, line 62).
- `src/lib/site-nav.ts` — add `Our Model` to `primaryNav` (with 10 children); add `Digital Ecosystem` to secondary `Explore`; ensure ordering matches the approved architecture: About, Our Model, Learning Journey, Academics, Student Life, Campus, Admissions, Explore.
- `src/components/site-header.tsx` — verify mega-menu / dropdown accessibly renders the new section; no visual redesign, only data-driven additions.
- `src/components/site-footer.tsx` — add Our Model column + Digital Ecosystem link; same visual pattern.
- `src/routes/sitemap[.]xml.ts` — add every new route.
- `src/routes/__root.tsx` — no design change; only verify head defaults still apply (already correct).

**Added (shared):**
- `src/components/breadcrumbs.tsx`
- `src/components/status-pill.tsx`
- `src/components/service-card.tsx`
- `src/components/ecosystem-diagram.tsx`
- `src/components/internal-page.tsx`
- `src/lib/content-types.ts`

---

## Phase 1 — Our Model + Digital Ecosystem + Foundations (this batch)

**New routes (12):**
- `src/routes/our-model.tsx` — section overview linking to the 10 pillars.
- `src/routes/our-model.educational-model.tsx`
- `src/routes/our-model.learning-ecosystem.tsx` (uses `EcosystemDiagram`)
- `src/routes/our-model.learner-profile.tsx` (9 quality cards)
- `src/routes/our-model.graduate-profile.tsx` (6 outcomes)
- `src/routes/our-model.teaching-framework.tsx`
- `src/routes/our-model.assessment-framework.tsx`
- `src/routes/our-model.student-development.tsx`
- `src/routes/our-model.parent-partnership.tsx`
- `src/routes/our-model.institutional-intelligence.tsx`
- `src/routes/our-model.innovation.tsx`
- `src/routes/explore.digital-ecosystem.tsx` (12 service cards, status pills)

**New content modules (CMS-ready, colocated with routes but exported separately):**
- `src/content/our-model/*.ts` — one file per pillar; typed to `ModelPage`.
- `src/content/digital-ecosystem.ts` — typed `DigitalService[]` with `status` union.

**Homepage integration:**
- `src/routes/index.tsx` — add a single contextual `ButtonLink` ("Explore Our Model") inside the existing "Why Lighthouse" area only. **Hero, layout, order untouched.** If placement risks the hero, I skip it and log it in the closing message.

**Every Phase-1 page includes:**
- Compact `PageHero`, breadcrumbs, `head()` with page-specific title / description / og:* / relative canonical, structured `Section`s, closing `CtaBand`, related-links block linking to sibling model pages.

---

## Phase 2 — About + Learning Journey + Academics (next task)

**About children (8 new routes)** — `/about/vision`, `/mission`, `/values`, `/philosophy`, `/leadership`, `/governance`, `/campus-culture`, `/strategic-direction`. `/about` remains overview. Existing `/about/why-lighthouse` untouched.

**Learning Journey stage pages (5 new routes)** — `/learning-journey/early-years`, `/primary`, `/preparatory`, `/secondary`, `/graduation-pathways`. Each follows the 11-part template. Current `/learning-journey` becomes the overview linking to the five stages. Each stage references *available* academic pathways only.

**Academics expansion (11 new routes)** — `/academics/curriculum-framework`, `/academics/pathways` (overview), `/academics/pathways/cambridge`, `/academics/pathways/sudan-national`, `/academics/pathways/south-sudan-national`, `/academics/areas-of-learning`, `/academics/teaching-approach`, `/academics/assessment`, `/academics/learning-support`, `/academics/languages`, `/academics/stem-innovation`, `/academics/arts`, `/academics/physical-education`. Existing `/academic-experience` remains as the current showcase page; nav points to it as "Academic Experience" under Academics.

**Content modules:** `src/content/about/*.ts`, `src/content/learning-journey/*.ts` (stage `LearningStage[]`), `src/content/academics/*.ts` (subjects + pathways).

## Phase 3 — Student Life / Campus / Admissions / Explore leaves

- **Student Life (7 pages):** community-belonging, clubs-activities, athletics, arts-performance, leadership-service, wellbeing, events. `/student-life` remains overview.
- **Campus (10 pages):** overview stays; add classrooms, library, laboratories, innovation-creative-spaces, sports-facilities, dining, health-services, safety, transportation. Clearly marked placeholders where facilities are unconfirmed.
- **Admissions (7 pages):** overview stays; add application-process, requirements, tuition-and-fees (holding copy only), scholarships (holding copy only), faq, schedule-a-visit, apply-online (form scaffold, no fake submissions).
- **Parents (8 pages):** partnership, journey, communication, parent-portal (status card, no fake login), calendar, resources, policies, engagement.
- **Community (5 pages):** partnerships, alumni ("future alumni community" wording), community-programmes, events, careers link.
- **News & Insights hub:** category taxonomy + `NewsArticle` template route; editorial placeholders labelled as such. No fabricated articles.
- **Campuses:** `/campuses/future-campuses` with cautious language.

---

## QA / verification checklist (run at end of each phase)

- `tsgo --noEmit` clean.
- All new routes render (spot-check via preview).
- Breadcrumbs present + JSON-LD valid.
- Each page has unique title + description; canonical is relative and self-referential; og:type/og:title/og:description set; og:image only on leaves where a meaningful image exists (otherwise omitted).
- Every image has real alt text; placeholders labelled.
- Keyboard focus visible on every interactive element (already ensured by design system + focus-visible rings).
- Reduced-motion honoured (existing utilities already guard).
- Mobile check at 375px: no horizontal overflow, cards stack, ecosystem diagram simplifies.
- Sitemap includes every new route; robots.txt untouched (no domain yet).
- No console errors on any new route.

---

## What I will NOT do

- Not touch the homepage hero.
- Not modify `styles.css` design tokens, `.cine-card`, `.crystal-field`, `BrandAtmosphere`, `Reveal`, or the approved logo assets.
- Not fabricate any factual claim.
- Not build ZANOVA, an LMS, an ERP, admin dashboards, portals, or fake auth screens.
- Not introduce new dependencies, new fonts, or new colours.
- Not edit `src/routeTree.gen.ts` (auto-generated).

---

## Ask before I start

Please confirm:
- **(a) Approve Phase 1 only** for this next turn (Our Model + Digital Ecosystem + shared foundations + typo + nav), then Phase 2 and Phase 3 in subsequent turns — recommended for review quality; **or**
- **(b) Approve all three phases** in one very large batch.

Either way, all 12 confirmations above hold.
