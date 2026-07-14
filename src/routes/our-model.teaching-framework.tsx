import { createFileRoute } from "@tanstack/react-router";
import {
  UserRound,
  Compass,
  Search,
  Eye,
  ClipboardCheck,
  Sprout,
  GraduationCap,
  Cpu,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/our-model/teaching-framework")({
  head: () => ({
    meta: [
      { title: "Teaching at Lighthouse — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Mentorship, expertise and thoughtful design. The professional practice of teaching at Lighthouse Campus.",
      },
      { property: "og:title", content: "Teaching at Lighthouse" },
      {
        property: "og:description",
        content: "How Lighthouse teachers know learners, design experiences and invite meaningful thinking.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-model/teaching-framework" },
    ],
    links: [{ rel: "canonical", href: "/our-model/teaching-framework" }],
  }),
  component: TeachingFramework,
});

const principles = [
  { title: "Know the Learner", icon: <UserRound className="size-5" />, body: "Teachers develop a clear understanding of each learner’s strengths, needs, interests and progress." },
  { title: "Design with Purpose", icon: <Compass className="size-5" />, body: "Lessons begin with clear educational intentions and are structured to build understanding over time." },
  { title: "Invite Inquiry", icon: <Search className="size-5" />, body: "Students are encouraged to ask questions, examine evidence, test ideas and make connections." },
  { title: "Make Thinking Visible", icon: <Eye className="size-5" />, body: "Discussion, explanation, modelling and reflection help students understand how learning develops." },
  { title: "Respond to Evidence", icon: <ClipboardCheck className="size-5" />, body: "Teachers use observation, student work, assessment and dialogue to adjust teaching and provide support." },
  { title: "Build Independence", icon: <Sprout className="size-5" />, body: "Learning gradually moves from guided experience toward confident, responsible and independent practice." },
  { title: "Learn as Professionals", icon: <GraduationCap className="size-5" />, body: "Teachers reflect, collaborate, study evidence and continue developing throughout their careers." },
  { title: "Technology in Teaching", icon: <Cpu className="size-5" />, body: "Technology supports planning, accessibility, creativity, collaboration and responsive teaching. It does not replace professional judgement or human relationships." },
];

function TeachingFramework() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Teaching Framework" },
        ]}
        eyebrow="Teaching at Lighthouse"
        title="Mentorship, expertise and thoughtful design."
        intro="Great teaching begins with strong relationships and deep professional knowledge. Lighthouse teachers understand what they teach, know the learners before them and create experiences that invite meaningful thinking."
      />

      <Section>
        <SectionHeading
          eyebrow="Eight principles of practice"
          title="How teaching happens at Lighthouse."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <FeatureCard key={p.title} title={p.title} icon={p.icon}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Mentors, experts, designers</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-foreground md:text-3xl">
            Teachers at Lighthouse Campus are mentors, subject experts, learning
            designers and lifelong learners.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="How is progress understood?"
        body="See how assessment supports learning, growth and responsible decisions."
        primary={{ to: "/our-model/assessment-framework", label: "Assessment Framework" }}
        secondary={{ to: "/careers", label: "Working at Lighthouse" }}
      />
    </>
  );
}
