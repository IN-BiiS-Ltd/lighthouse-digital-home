import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/governance")({
  head: () => ({
    meta: [
      { title: "Governance | Lighthouse Campus" },
      { name: "description", content: "Discover the governance principles supporting accountability, educational purpose, responsible growth and long-term stewardship at Lighthouse Campus." },
      { property: "og:title", content: "Governance | Lighthouse Campus" },
      { property: "og:description", content: "Responsible stewardship of educational purpose, people and institutional growth." },
      { property: "og:url", content: "/about/governance" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/governance" }],
  }),
  component: Governance,
});

const oversight = ["curriculum", "teaching", "assessment", "safeguarding", "student development", "professional practice", "school improvement"];

const sections = [
  { eyebrow: "Purpose Before Process", title: "Governance begins with educational purpose", body: [
    "Policies, structures and decisions exist to protect learning, wellbeing, integrity and institutional sustainability.",
  ] },
  { eyebrow: "Clear Responsibility", title: "Authority matched by accountability", body: [
    "Roles and responsibilities are defined clearly.",
    "Decisions are documented, reviewed and connected to the institution’s values and long-term direction.",
  ] },
  { eyebrow: "Institutional Integrity", title: "Trust grows through consistent practice", body: [
    "Lighthouse Campus is committed to responsible conduct, transparency, fairness and the careful use of institutional resources.",
    "Trust grows through consistent practice rather than statements alone.",
  ] },
  { eyebrow: "Risk and Safeguarding", title: "Protecting learners, employees, families and the institution", body: [
    "Safeguarding, health, safety, financial responsibility, data protection and operational continuity are approached as continuing institutional responsibilities.",
  ] },
  { eyebrow: "Responsible Growth", title: "Expansion that strengthens the institution", body: [
    "New campuses and services will develop through deliberate planning.",
    "Expansion must strengthen the institution rather than dilute its educational identity.",
  ] },
];

function Governance() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Governance" }]}
        eyebrow="About / Governance"
        title="Responsible stewardship of educational purpose, people and institutional growth."
        intro="Governance provides the structures through which Lighthouse Campus protects its mission, fulfils its responsibilities and develops with clarity."
      />

      {sections.map((s, i) => (
        <Section key={s.eyebrow} tone={i % 2 === 1 ? "muted" : "default"}>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {s.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>
      ))}

      <Section tone="sand">
        <SectionHeading eyebrow="Educational Oversight" title="Governance supports quality and coherence" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {oversight.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Explore Leadership"
        body="Educational purpose expressed through responsibility, service and thoughtful action."
        primary={{ to: "/about/leadership", label: "Explore Leadership" }}
        secondary={{ to: "/about", label: "Read Our Strategic Direction" }}
      />
    </>
  );
}
