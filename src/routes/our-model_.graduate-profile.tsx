import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Compass,
  Scale,
  MessagesSquare,
  Sprout,
  HeartHandshake,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/our-model_/graduate-profile")({
  head: () => ({
    meta: [
      { title: "The Lighthouse Graduate — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Prepared for university. Ready for life. Grounded in purpose. Six outcomes describing what Lighthouse graduates carry beyond school.",
      },
      { property: "og:title", content: "The Lighthouse Graduate" },
      {
        property: "og:description",
        content:
          "The knowledge, character and capabilities Lighthouse graduates carry beyond school.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/our-model/graduate-profile" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/our-model/graduate-profile" }],
  }),
  component: GraduateProfile,
});

const outcomes = [
  { title: "Intellectual Readiness", icon: <BookOpen className="size-5" />, body: "Secure knowledge, critical thinking, research capability and intellectual independence." },
  { title: "Personal Direction", icon: <Compass className="size-5" />, body: "A growing understanding of strengths, values, aspirations and responsibility." },
  { title: "Ethical Character", icon: <Scale className="size-5" />, body: "Integrity, empathy and the ability to make principled choices." },
  { title: "Communication and Collaboration", icon: <MessagesSquare className="size-5" />, body: "The confidence to express ideas, listen thoughtfully and work across differences." },
  { title: "Adaptability and Resilience", icon: <Sprout className="size-5" />, body: "The capacity to respond to change, challenge and new opportunities with reflection and courage." },
  { title: "Contribution", icon: <HeartHandshake className="size-5" />, body: "A commitment to use knowledge and capability in service of communities and the wider world." },
];

function GraduateProfile() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Graduate Profile" },
        ]}
        eyebrow="The Lighthouse Graduate"
        title="Prepared for university. Ready for life. Grounded in purpose."
        intro="Graduation marks the beginning of a wider journey. Lighthouse graduates leave with the knowledge, confidence and character to continue learning, make thoughtful decisions and contribute meaningfully."
      />

      <Section>
        <SectionHeading
          eyebrow="Six outcomes"
          title="What every graduate carries into the world."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <FeatureCard key={o.title} title={o.title} icon={o.icon}>
              {o.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onNavy className="justify-center">More than results</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-navy-foreground md:text-3xl">
            A Lighthouse graduate is defined by more than academic results.
            They leave prepared to learn continuously, lead responsibly and
            build a meaningful future.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="See how teaching brings the model to life"
        body="Learn how Lighthouse teachers combine mentorship, subject expertise and thoughtful design."
        primary={{ to: "/our-model/teaching-framework", label: "Teaching Framework" }}
        secondary={{ to: "/our-model/assessment-framework", label: "Assessment Framework" }}
      />
    </>
  );
}
