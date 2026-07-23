import { createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, Compass, Flag } from "lucide-react";
import { Section, SectionHeading, FeatureCard } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/core-values")({
  head: () => ({
    meta: [
      { title: "Core Values | Lighthouse Campus" },
      { name: "description", content: "Explore the values of curiosity, belonging, integrity and excellence that guide life and learning at Lighthouse Campus." },
      { property: "og:title", content: "Core Values | Lighthouse Campus" },
      { property: "og:description", content: "The principles that shape learning, relationships and institutional life." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/about/core-values" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/about/core-values" }],
  }),
  component: CoreValues,
});

const values = [
  { icon: <Eye className="size-5" />, name: "Curiosity", tagline: "The engine of lifelong learning.", body: [
    "Curiosity gives learning energy and direction.",
    "Students are encouraged to notice, ask, investigate, test and reflect.",
    "Questions are treated as openings to understanding rather than interruptions to instruction.",
    "Curiosity develops learners who continue growing beyond the classroom.",
  ] },
  { icon: <Heart className="size-5" />, name: "Belonging", tagline: "A campus is a community before it is anything else.", body: [
    "Belonging creates emotional safety and intellectual confidence.",
    "When learners feel known, valued and connected, they participate more fully, attempt difficult work and support others.",
    "Every member of the campus contributes to an inclusive and respectful community.",
  ] },
  { icon: <Compass className="size-5" />, name: "Integrity", tagline: "Character taught through relationships, example and trust.", body: [
    "Integrity develops through consistent expectations and responsible choices.",
    "Learners are encouraged to act honestly, accept responsibility and treat others with dignity.",
    "Adults model the character the institution seeks to develop.",
  ] },
  { icon: <Flag className="size-5" />, name: "Excellence", tagline: "High expectations held with warmth.", body: [
    "Excellence is the continuing pursuit of quality, understanding and improvement.",
    "Learners are challenged thoughtfully and supported carefully.",
    "Achievement matters. Growth, effort, judgement and depth of understanding matter as well.",
  ] },
];

const practice = [
  "classroom relationships",
  "teaching and feedback",
  "leadership decisions",
  "family partnership",
  "student responsibility",
  "community participation",
  "institutional development",
];

function CoreValues() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Core Values" }]}
        eyebrow="About / Core Values"
        title="The principles that shape learning, relationships and institutional life."
        intro="Our values are expressed through daily choices, classroom experiences, relationships and shared responsibility. They guide how learners grow, how teachers lead and how the community works together."
      />

      {values.map((v, i) => (
        <Section key={v.name} tone={i % 2 === 1 ? "muted" : "default"}>
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr]">
            <FeatureCard title={v.name} icon={v.icon}>{v.tagline}</FeatureCard>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {v.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </Section>
      ))}

      <Section tone="sand">
        <SectionHeading eyebrow="Values in Practice" title="They shape the conditions in which learning becomes possible." />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {practice.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Explore Our Educational Philosophy"
        body="How we understand learning, teaching and student development."
        primary={{ to: "/about/educational-philosophy", label: "Explore Our Educational Philosophy" }}
        secondary={{ to: "/our-model/learner-profile", label: "Meet the Lighthouse Learner" }}
      />
    </>
  );
}
