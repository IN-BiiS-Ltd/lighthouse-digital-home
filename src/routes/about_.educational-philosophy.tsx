import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/educational-philosophy")({
  head: () => ({
    meta: [
      { title: "Educational Philosophy | Lighthouse Campus" },
      { name: "description", content: "Discover the educational principles guiding learning, teaching, relationships and student development at Lighthouse Campus." },
      { property: "og:title", content: "Educational Philosophy | Lighthouse Campus" },
      { property: "og:description", content: "Learning grows through knowledge, curiosity, relationships and purposeful experience." },
      { property: "og:url", content: "/about/educational-philosophy" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/educational-philosophy" }],
  }),
  component: Philosophy,
});

const sections = [
  { eyebrow: "Knowledge Creates Possibility", title: "Deep knowledge as the foundation of thought", body: [
    "Deep knowledge gives learners the foundations required to think, question, create and communicate.",
    "The curriculum builds understanding progressively.",
    "Students connect new ideas with prior learning and apply knowledge across subjects and experiences.",
  ] },
  { eyebrow: "Curiosity Gives Learning Direction", title: "Questions are central to intellectual development", body: [
    "Learners investigate, discuss, test, create and reflect.",
    "Teaching protects curiosity while guiding students toward disciplined understanding and thoughtful judgement.",
  ] },
  { eyebrow: "Relationships Make Learning Human", title: "Meaningful learning begins with trust", body: [
    "Teachers know learners as individuals.",
    "Students experience respect, encouragement and clear expectations.",
    "Families contribute understanding and continuity.",
    "Relationships create the confidence required to take intellectual and personal risks.",
  ] },
  { eyebrow: "Character Develops Through Practice", title: "Responsibility, integrity, empathy and leadership grow through experience", body: [
    "Students learn character by making choices, participating in community life, receiving guidance and observing the example of others.",
  ] },
  { eyebrow: "Challenge and Support Belong Together", title: "High expectations held with warmth and responsiveness", body: [
    "High expectations communicate belief in a learner’s potential.",
    "Support provides the conditions required to meet those expectations.",
    "Students are challenged with warmth, clarity and responsiveness.",
  ] },
  { eyebrow: "Technology Serves Education", title: "Used when it creates educational value", body: [
    "Technology expands access, creativity, communication and institutional understanding.",
    "It is used when it creates educational value.",
    "It supports teachers and learners without replacing professional judgement or human relationships.",
  ] },
];

const beyond = ["clubs", "arts", "athletics", "service", "leadership", "research", "collaboration", "community experiences", "reflection"];

function Philosophy() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Educational Philosophy" }]}
        eyebrow="About / Educational Philosophy"
        title="Learning grows through knowledge, curiosity, relationships and purposeful experience."
        intro="Our educational philosophy begins with a clear understanding: children learn best when they feel secure, known, challenged and actively involved in making meaning."
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
        <SectionHeading eyebrow="Learning Extends Beyond the Classroom" title="Experiences that connect knowledge with life" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {beyond.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          These experiences connect knowledge with life and strengthen identity, confidence and purpose.
        </p>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-snug text-navy-foreground md:text-[1.9rem]">
            At Lighthouse Campus, learning is a continuous journey of discovery, understanding, character, confidence and contribution.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Explore Our Educational Model"
        body="One coherent approach to learning, growth and contribution."
        primary={{ to: "/our-model/educational-model", label: "Explore the Educational Model" }}
        secondary={{ to: "/learning-journey", label: "Discover the Learning Journey" }}
      />
    </>
  );
}
