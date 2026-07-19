import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/educational-philosophy")({
  head: () => ({
    meta: [
      { title: "Educational Philosophy | Lighthouse Campus" },
      { name: "description", content: "Discover how Lighthouse Campus believes education should shape the future through critical thinking, problem-solving, diversity and real-world learning." },
      { property: "og:title", content: "Educational Philosophy | Lighthouse Campus" },
      { property: "og:description", content: "Learning that shapes the future. Academic excellence combined with character development, innovation and real-world experiences." },
      { property: "og:url", content: "/about/educational-philosophy" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/educational-philosophy" }],
  }),
  component: Philosophy,
});

const sections = [
  { eyebrow: "Learning That Shapes the Future", title: "Education beyond examinations", body: [
    "We believe education should do more than prepare students for examinations.",
    "It should prepare them to think critically, solve meaningful problems, embrace diversity, lead with confidence, and make a positive impact on the world around them.",
  ] },
  { eyebrow: "Academic Excellence", title: "Secure knowledge as the foundation", body: [
    "Deep knowledge gives learners the foundations required to think, question, create and communicate.",
    "The curriculum builds understanding progressively while students connect new ideas with prior learning and apply knowledge across subjects and experiences.",
  ] },
  { eyebrow: "Character Development", title: "Integrity, empathy and responsibility grow through practice", body: [
    "Students learn character by making choices, participating in community life, receiving guidance and observing the example of others.",
    "Responsibility, integrity, empathy and leadership develop through daily experience.",
  ] },
  { eyebrow: "Innovation and Real-World Learning", title: "Connecting knowledge with life", body: [
    "Our educational philosophy combines academic excellence with innovation and real-world learning experiences.",
    "Technology expands access, creativity, communication and institutional understanding when it creates genuine educational value.",
  ] },
  { eyebrow: "Challenge and Support", title: "High expectations held with warmth and responsiveness", body: [
    "High expectations communicate belief in a learner’s potential.",
    "Support provides the conditions required to meet those expectations, so students are challenged with warmth, clarity and responsiveness.",
  ] },
];

const beyond = ["critical thinking", "problem solving", "creativity", "collaboration", "character", "global citizenship", "real-world experiences", "reflection"];

function Philosophy() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Educational Philosophy" }]}
        eyebrow="About / Educational Philosophy"
        title="Learning that shapes the future."
        intro="We believe education should prepare students to think critically, solve meaningful problems, embrace diversity, lead with confidence, and make a positive impact on the world around them."
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
