import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission | Lighthouse Campus" },
      { name: "description", content: "Discover how Lighthouse Campus turns its educational purpose into daily learning, relationships and institutional practice." },
      { property: "og:title", content: "Our Mission | Lighthouse Campus" },
      { property: "og:description", content: "A coherent, human-centred learning experience that develops knowledge, character, confidence and the capacity to contribute." },
      { property: "og:url", content: "/about/mission" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/mission" }],
  }),
  component: Mission,
});

const sections = [
  { eyebrow: "Learning with Depth", title: "Ambitious academic experience with genuine understanding", body: [
    "We provide an ambitious academic experience that develops secure knowledge, genuine understanding and intellectual independence.",
    "Learning is carefully sequenced while remaining open to curiosity, exploration, reflection and creative thought.",
  ] },
  { eyebrow: "Developing the Whole Learner", title: "Academic, personal, social, emotional and physical development as one journey", body: [
    "We support academic, personal, social, emotional and physical development as connected parts of one educational journey.",
    "Students grow through learning, relationships, responsibility, leadership, creativity and participation in community life.",
  ] },
  { eyebrow: "Building Meaningful Relationships", title: "Teachers who know learners as individuals", body: [
    "Families participate as educational partners.",
    "Leadership supports educators and protects the conditions required for meaningful learning.",
    "Belonging creates the confidence required for growth.",
  ] },
  { eyebrow: "Preparing for Contribution", title: "The capability and responsibility to contribute meaningfully", body: [
    "We prepare learners to communicate clearly, think critically, collaborate constructively and act with integrity.",
    "Education develops the capability and responsibility to contribute meaningfully to communities and the wider world.",
  ] },
];

function Mission() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Mission" }]}
        eyebrow="About / Mission"
        title="To create a coherent, human-centred learning experience that develops knowledge, character, confidence and the capacity to contribute."
      />

      {sections.map((s, i) => (
        <Section key={s.eyebrow} tone={i % 2 === 1 ? "muted" : "default"}>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {s.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>
      ))}

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">Mission Statement</p>
          <p className="mt-6 font-display text-3xl font-medium leading-snug text-navy-foreground md:text-4xl">
            Lighthouse Campus provides a purposeful educational journey in which learners build knowledge, develop character, discover individual strengths and prepare to participate confidently and responsibly in an evolving world.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Explore Our Core Values"
        body="The principles that shape learning, relationships and institutional life."
        primary={{ to: "/about/core-values", label: "Explore Our Core Values" }}
        secondary={{ to: "/learning-journey", label: "Discover the Learning Journey" }}
      />
    </>
  );
}
