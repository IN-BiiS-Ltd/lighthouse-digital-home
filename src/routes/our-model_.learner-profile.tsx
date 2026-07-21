import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  BrainCircuit,
  BookMarked,
  Palette,
  MessagesSquare,
  HeartHandshake,
  Compass,
  Sprout,
  Users,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/our-model_/learner-profile")({
  head: () => ({
    meta: [
      { title: "The Lighthouse Learner — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Curious in thought. Grounded in character. Ready to contribute. Nine qualities that describe the Lighthouse learner at every stage of the journey.",
      },
      { property: "og:title", content: "The Lighthouse Learner" },
      {
        property: "og:description",
        content: "The qualities we develop through every stage of a child's journey.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-model/learner-profile" },
    ],
    links: [{ rel: "canonical", href: "/our-model/learner-profile" }],
  }),
  component: LearnerProfile,
});

const qualities = [
  { title: "Curious", icon: <Search className="size-5" />, body: "Questions, explores and approaches learning with openness and wonder." },
  { title: "Thoughtful", icon: <BrainCircuit className="size-5" />, body: "Reflects carefully, considers evidence and develops informed judgement." },
  { title: "Knowledgeable", icon: <BookMarked className="size-5" />, body: "Builds secure understanding and connects learning across disciplines and experience." },
  { title: "Creative", icon: <Palette className="size-5" />, body: "Generates ideas, experiments with possibility and expresses thinking with confidence." },
  { title: "Communicative", icon: <MessagesSquare className="size-5" />, body: "Listens with respect and communicates ideas clearly across languages, cultures and contexts." },
  { title: "Compassionate", icon: <HeartHandshake className="size-5" />, body: "Understands the experiences of others and acts with kindness, empathy and respect." },
  { title: "Responsible", icon: <Compass className="size-5" />, body: "Takes ownership of actions, learning, relationships and shared environments." },
  { title: "Resilient", icon: <Sprout className="size-5" />, body: "Responds to challenge with perseverance, reflection and the willingness to grow." },
  { title: "Collaborative", icon: <Users className="size-5" />, body: "Works constructively with others and contributes to shared understanding and achievement." },
];

function LearnerProfile() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Learner Profile" },
        ]}
        eyebrow="The Lighthouse Learner"
        title="Curious in thought. Grounded in character. Ready to contribute."
        intro="The Lighthouse learner profile describes the qualities that grow through every stage of education. These qualities shape how students learn, relate to others and participate in the world."
      />

      <Section>
        <SectionHeading
          eyebrow="Nine qualities"
          title="Qualities that grow through every stage."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((q) => (
            <FeatureCard key={q.title} title={q.title} icon={q.icon}>
              {q.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Not taught through slogans</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-foreground md:text-3xl">
            The Lighthouse learner profile develops through classroom practice,
            relationships, responsibilities, feedback, leadership and
            participation in community life.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="And after graduation?"
        body="See the knowledge, character and capabilities Lighthouse graduates carry beyond school."
        primary={{ to: "/our-model/graduate-profile", label: "The Lighthouse Graduate" }}
        secondary={{ to: "/our-model/student-development", label: "Student Development" }}
      />
    </>
  );
}
