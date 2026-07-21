import { createFileRoute } from "@tanstack/react-router";
import {
  FlaskConical,
  Monitor,
  Cpu,
  Wrench,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/our-model_/innovation")({
  head: () => ({
    meta: [
      { title: "Innovation with Purpose — Lighthouse Campus" },
      {
        name: "description",
        content:
          "New possibilities guided by educational value. How Lighthouse Campus approaches innovation, digital learning, AI, STEM and future capabilities.",
      },
      { property: "og:title", content: "Innovation with Purpose" },
      {
        property: "og:description",
        content: "Innovation at Lighthouse begins with a clear question: how does this improve learning, teaching or the life of the community?",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-model/innovation" },
    ],
    links: [{ rel: "canonical", href: "/our-model/innovation" }],
  }),
  component: Innovation,
});

const items = [
  { title: "Inquiry and Experimentation", icon: <FlaskConical className="size-5" />, body: "Students and teachers explore ideas, test approaches and learn through reflection." },
  { title: "Digital Learning", icon: <Monitor className="size-5" />, body: "Digital tools expand access, creativity, communication and collaboration." },
  { title: "Artificial Intelligence", icon: <Cpu className="size-5" />, body: "AI supports research, organisation, personalisation and institutional insight within clear ethical and educational boundaries." },
  { title: "STEM and Making", icon: <Wrench className="size-5" />, body: "Science, technology, engineering, mathematics and design come together through investigation and purposeful creation." },
  { title: "Research and Reflection", icon: <BookOpen className="size-5" />, body: "The institution learns from evidence, professional practice and the experience of its community." },
  { title: "Future Capabilities", icon: <Sparkles className="size-5" />, body: "Students develop adaptability, critical thinking, communication, creativity and responsible technological understanding." },
];

function Innovation() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Innovation" },
        ]}
        eyebrow="Innovation with Purpose"
        title="New possibilities, guided by educational value."
        intro="Innovation at Lighthouse Campus begins with a clear question: how does this improve learning, teaching or the life of the community?"
      />

      <Section>
        <SectionHeading
          eyebrow="Six commitments"
          title="How innovation is chosen at Lighthouse."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <FeatureCard key={n.title} title={n.title} icon={n.icon}>
              {n.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Closing</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-foreground md:text-3xl">
            Innovation is not adopted because it is new. It is adopted when it
            creates meaningful educational value.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="Explore the digital ecosystem"
        body="See the connected services being developed around the learner and the community."
        primary={{ to: "/explore/digital-ecosystem", label: "Digital Ecosystem" }}
        secondary={{ to: "/our-model", label: "Return to Our Model" }}
      />
    </>
  );
}
