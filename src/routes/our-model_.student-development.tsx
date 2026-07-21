import { createFileRoute } from "@tanstack/react-router";
import {
  Scale,
  Sparkles,
  HeartPulse,
  Compass,
  Palette,
  HeartHandshake,
  Globe,
  Star,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/our-model_/student-development")({
  head: () => ({
    meta: [
      { title: "Growing the Whole Learner — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Character, confidence, wellbeing and contribution. How Lighthouse Campus develops the whole person alongside academic learning.",
      },
      { property: "og:title", content: "Growing the Whole Learner" },
      {
        property: "og:description",
        content: "How Lighthouse Campus develops the whole person beyond academic learning.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-model/student-development" },
    ],
    links: [{ rel: "canonical", href: "/our-model/student-development" }],
  }),
  component: StudentDevelopment,
});

const areas = [
  { title: "Character", icon: <Scale className="size-5" />, body: "Integrity, responsibility, empathy and respect develop through relationships, expectations and example." },
  { title: "Confidence", icon: <Sparkles className="size-5" />, body: "Students learn to express ideas, attempt difficult work and recognise their capacity to improve." },
  { title: "Wellbeing", icon: <HeartPulse className="size-5" />, body: "Emotional, social and physical wellbeing support meaningful learning and healthy development." },
  { title: "Leadership", icon: <Compass className="size-5" />, body: "Students gain increasing opportunities to take responsibility, guide others and contribute to shared goals." },
  { title: "Creativity", icon: <Palette className="size-5" />, body: "Art, performance, design, inquiry and problem-solving help students develop imagination and creative courage." },
  { title: "Service", icon: <HeartHandshake className="size-5" />, body: "Students learn that knowledge and capability carry responsibility toward others." },
  { title: "Citizenship", icon: <Globe className="size-5" />, body: "Students develop awareness of community, culture, society and the wider world." },
  { title: "Purpose", icon: <Star className="size-5" />, body: "Reflection and guidance help learners connect strengths and interests with future direction." },
];

function StudentDevelopment() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Student Development" },
        ]}
        eyebrow="Growing the Whole Learner"
        title="Character, confidence, wellbeing and contribution."
        intro="Education shapes how young people understand themselves, relate to others and participate in community life. Student development is therefore woven through the full Lighthouse experience."
      />

      <Section>
        <SectionHeading
          eyebrow="Eight areas of growth"
          title="Development woven into daily life."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <FeatureCard key={a.title} title={a.title} icon={a.icon}>
              {a.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Not an add-on</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-foreground md:text-3xl">
            Student development is not an additional programme. It is part of
            how students learn, participate, build relationships and grow
            throughout campus life.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="How do families take part?"
        body="See how Lighthouse and families partner around every learner."
        primary={{ to: "/our-model/parent-partnership", label: "Parent Partnership" }}
        secondary={{ to: "/student-life", label: "Student Life" }}
      />
    </>
  );
}
