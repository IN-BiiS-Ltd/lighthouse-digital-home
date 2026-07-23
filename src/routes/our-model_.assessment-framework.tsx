import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardCheck,
  FileCheck2,
  Sprout,
  MessagesSquare,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";

export const Route = createFileRoute("/our-model_/assessment-framework")({
  head: () => ({
    meta: [
      { title: "Assessment for Growth — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Understanding where learning is, and what should happen next. How assessment at Lighthouse Campus supports learning, growth and responsible decisions.",
      },
      { property: "og:title", content: "Assessment for Growth" },
      {
        property: "og:description",
        content: "How assessment supports learning, growth and responsible decisions.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/our-model/assessment-framework" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/our-model/assessment-framework" }],
  }),
  component: AssessmentFramework,
});

const items = [
  { title: "Assessment for Learning", icon: <ClipboardCheck className="size-5" />, body: "Ongoing observation, questioning, discussion and student work guide teaching and support immediate improvement." },
  { title: "Assessment of Learning", icon: <FileCheck2 className="size-5" />, body: "Formal assessments provide evidence of achievement against clearly defined expectations." },
  { title: "Assessment as Learning", icon: <Sprout className="size-5" />, body: "Students develop the ability to reflect, evaluate their own work and take increasing responsibility for improvement." },
  { title: "Meaningful Feedback", icon: <MessagesSquare className="size-5" />, body: "Feedback is timely, specific, honest and constructive — helping students understand what they have achieved, what needs attention, and what to do next." },
  { title: "A Balanced View of Progress", icon: <Scale className="size-5" />, body: "Achievement is understood through multiple forms of evidence: knowledge, understanding, application, communication, creativity and growth over time." },
  { title: "Responsible Use of Data", icon: <ShieldCheck className="size-5" />, body: "Assessment information supports professional judgement. It is interpreted carefully and never used as a substitute for knowing the learner." },
];

function AssessmentFramework() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Assessment Framework" },
        ]}
        eyebrow="Assessment for Growth"
        title="Understanding where learning is, and what should happen next."
        intro="Assessment is part of the learning process. It helps learners understand progress, enables teachers to respond thoughtfully and gives families a clear view of development."
      />

      <Section>
        <SectionHeading
          eyebrow="Six principles"
          title="Assessment that serves learning."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <FeatureCard key={n.title} title={n.title} icon={n.icon}>
              {n.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onNavy className="justify-center">Closing</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-navy-foreground md:text-3xl">
            Success is measured through achievement, progress, depth of
            understanding and the learner’s growing capacity to act
            independently.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="Beyond academics"
        body="Explore how Lighthouse develops the whole learner — character, confidence, wellbeing and contribution."
        primary={{ to: "/our-model/student-development", label: "Student Development" }}
        secondary={{ to: "/our-model/institutional-intelligence", label: "Institutional Intelligence" }}
      />
      <ShareBar title="Assessment for Growth — Lighthouse Campus" />
    </>
  );
}
