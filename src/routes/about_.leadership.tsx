import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership | Lighthouse Campus" },
      { name: "description", content: "Learn how educational leadership at Lighthouse Campus creates the conditions for learning, wellbeing, professional growth and institutional development." },
      { property: "og:title", content: "Leadership | Lighthouse Campus" },
      { property: "og:description", content: "Educational purpose expressed through responsibility, service and thoughtful action." },
      { property: "og:url", content: "/about/leadership" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/leadership" }],
  }),
  component: Leadership,
});

const measures = ["learners", "teaching quality", "staff development", "wellbeing", "family trust", "institutional sustainability"];

const sections = [
  { eyebrow: "Shared Responsibility", title: "Leadership is not confined to formal titles", body: [
    "Teachers lead learning.",
    "Students lead through responsibility and service.",
    "Families contribute insight and partnership.",
    "Operational teams protect the daily conditions required for campus life.",
    "Institutional leadership brings these responsibilities together around one purpose.",
  ] },
  { eyebrow: "Developing People", title: "Strong institutions grow by developing people", body: [
    "Lighthouse Campus supports professional learning, reflection, collaboration and increasing responsibility.",
    "Leadership builds capability rather than dependence.",
  ] },
  { eyebrow: "Listening and Judgement", title: "Responsible leadership listens carefully", body: [
    "It considers evidence, professional expertise, institutional values and the experience of the community.",
    "Information supports judgement. It does not replace accountability.",
  ] },
  { eyebrow: "Continuity and Growth", title: "Protecting educational identity as the institution develops", body: [
    "Growth across future campuses will be guided by shared standards, a coherent educational model and continuing institutional learning.",
  ] },
];

function Leadership() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Leadership" }]}
        eyebrow="About / Leadership"
        title="Educational purpose expressed through responsibility, service and thoughtful action."
        intro="Leadership at Lighthouse Campus creates the conditions in which learners, educators and the wider community can flourish."
      />

      <Section>
        <SectionHeading eyebrow="Leadership in Service of Learning" title="Decisions measured by their effect on the learning experience" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The central responsibility of leadership is to protect and strengthen the learning experience. Decisions are measured by their effect on:
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {measures.map((m) => (
            <li key={m} className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{m}
            </li>
          ))}
        </ul>
      </Section>

      {sections.map((s, i) => (
        <Section key={s.eyebrow} tone={i % 2 === 0 ? "muted" : "default"}>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {s.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>
      ))}

      <CtaBand
        title="Explore Governance"
        body="How responsibility, educational purpose and institutional stewardship guide decisions."
        primary={{ to: "/about/governance", label: "Explore Governance" }}
        secondary={{ to: "/our-model", label: "Discover Our Model" }}
      />
    </>
  );
}
