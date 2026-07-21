import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, FeatureCard, Eyebrow, SmartLink } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";
import { StatusPill } from "@/components/status-pill";

export const Route = createFileRoute("/parents_/parent-portal")({
  head: () => ({
    meta: [
      { title: "Parent Portal | Parents | Lighthouse Campus" },
      { name: "description", content: "The Lighthouse parent portal brings communications, calendars and learning updates into one respectful, private place for families." },
      { property: "og:title", content: "Parent Portal | Parents | Lighthouse Campus" },
      { property: "og:description", content: "The Lighthouse parent portal brings communications, calendars and learning updates into one respectful, private place for families." },
      { property: "og:url", content: "/parents/parent-portal" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/parents/parent-portal" }],
  }),
  component: Page,
});

const breadcrumb = [
  { label: "Home", to: "/" },
  { label: "Parents", to: "/parents" },
  { label: "Parent Portal" },
];

const capabilities = [
  {
    title: "One place for family communications",
    body: "School notices, class updates and messages from teachers arrive in a single, respectful inbox — not scattered across channels.",
  },
  {
    title: "The calendar your family lives by",
    body: "Term dates, key learning moments and community events, always in sync with the school and easy to add to your own calendar.",
  },
  {
    title: "Learning updates that make sense",
    body: "Progress, reflections and next steps shared in a clear, human way — designed to support a real conversation at home.",
  },
  {
    title: "Everyday practicalities, simplified",
    body: "Permission slips, forms and school documents kept together, so families spend less time chasing paperwork.",
  },
  {
    title: "Privacy by design",
    body: "Family information is treated with the same care as any conversation with the school — private, accurate and yours.",
  },
  {
    title: "A door to the wider ecosystem",
    body: "The portal is the family entrance into the connected services the campus is building around every learner.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow="Parents / Parent Portal"
        title="The Lighthouse parent portal."
        intro="A single, respectful place for family communications, calendars and learning updates — connected to the wider Lighthouse portals."
      />

      <Section>
        <div className="mb-8 flex items-center gap-3">
          <StatusPill status="Available" />
          <span className="text-sm text-muted-foreground">
            Active for families through the Lighthouse portals area.
          </span>
        </div>

        <SectionHeading
          eyebrow="Enter the portals"
          title="Sign in to your family experience"
        />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The parent portal lives inside the wider Lighthouse portals area — one door
          for every family, staff and learner experience the campus offers online.
          Use the button below to enter.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* Plain <a> is intentional: /portals is served from a separate
              deployment layer and is not a file-based route in this repo. */}
          <a
            href="/portals"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-navy-foreground shadow-e2 transition-all hover:bg-navy/90 hover:shadow-gold-glow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Enter the portals
            <span aria-hidden>→</span>
          </a>
          <SmartLink
            to="/parents/communication"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue transition-colors hover:text-gold"
          >
            How families and school stay in touch →
          </SmartLink>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          If you need help signing in, the admissions and family teams are the
          quickest route — write to us and we will guide you personally.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What the portal offers families"
          title="Built around the way families actually live with the school"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <FeatureCard key={c.title} title={c.title}>
              {c.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>A note on the relationship</Eyebrow>
          <h2 className="mt-5 font-display text-2xl font-medium leading-snug md:text-3xl">
            The portal complements — it does not replace — the human relationship.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Everything the portal does is designed to make the daily conversation
            between home and school clearer and calmer. It is a tool in service of
            the relationship, not a substitute for it.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Enter the parent experience."
        body="Sign in to the Lighthouse portals, or contact the school if you need help getting started."
        primary={{ to: "https://placeholder.invalid/portals-entry", label: "Enter the portals" }}
        secondary={{ to: "/contact", label: "Contact the school" }}
      />
      <ShareBar title="The Lighthouse parent portal." />
    </>
  );
}
