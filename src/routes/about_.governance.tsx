import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";

export const Route = createFileRoute("/about_/governance")({
  head: () => ({
    meta: [
      { title: "Governance | Lighthouse Campus" },
      { name: "description", content: "Discover how Lighthouse Campus builds excellence through strong institutional systems, governance, quality assurance and continuous improvement." },
      { property: "og:title", content: "Governance | Lighthouse Campus" },
      { property: "og:description", content: "Excellence begins with strong institutions. A modern framework supporting governance, quality assurance and operational excellence." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/about/governance" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/about/governance" }],
  }),
  component: Governance,
});

const oversight = ["curriculum", "teaching", "assessment", "safeguarding", "student development", "professional practice", "school improvement"];

const sections = [
  { eyebrow: "Excellence Begins with Strong Institutions", title: "Exceptional schools are built on exceptional systems", body: [
    "Exceptional schools are built on exceptional systems.",
    "Lighthouse Campus is supported by a modern institutional framework that ensures governance, quality assurance, operational excellence, digital transformation, and continuous improvement.",
  ] },
  { eyebrow: "Purpose Before Process", title: "Governance begins with educational purpose", body: [
    "Policies, structures and decisions exist to protect learning, wellbeing, integrity and institutional sustainability.",
    "This strong institutional foundation enables our educators to focus on what matters most — delivering an outstanding educational experience for every learner.",
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
        title="Excellence begins with strong institutions."
        intro="Through a modern institutional framework, Lighthouse Campus protects its mission, fulfils its responsibilities and creates the conditions for outstanding education."
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
      <ShareBar title="Governance | Lighthouse Campus" />
    </>
  );
}
