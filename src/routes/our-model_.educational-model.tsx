import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Brain, Compass, Users } from "lucide-react";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/our-model_/educational-model")({
  head: () => ({
    meta: [
      { title: "The Lighthouse Educational Model — Lighthouse Campus" },
      {
        name: "description",
        content:
          "A coherent approach to learning, growth and contribution. How Lighthouse Campus turns its educational philosophy into a continuous learning experience.",
      },
      { property: "og:title", content: "The Lighthouse Educational Model" },
      {
        property: "og:description",
        content: "How learning, character, creativity and purpose develop together across every stage.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-model/educational-model" },
    ],
    links: [{ rel: "canonical", href: "/our-model/educational-model" }],
  }),
  component: EducationalModel,
});

const dimensions = [
  {
    title: "Learn",
    icon: <BookOpen className="size-5" />,
    body: "Students develop secure knowledge, deep understanding and the ability to connect ideas across disciplines.",
  },
  {
    title: "Think",
    icon: <Brain className="size-5" />,
    body: "Students learn to question, analyse, create, solve problems and reflect on evidence.",
  },
  {
    title: "Lead",
    icon: <Compass className="size-5" />,
    body: "Students develop confidence, character, responsibility, communication and the courage to act with integrity.",
  },
  {
    title: "Contribute",
    icon: <Users className="size-5" />,
    body: "Students apply learning through collaboration, service and meaningful participation in their communities.",
  },
];

const arc = [
  "curiosity becomes inquiry",
  "inquiry becomes understanding",
  "understanding becomes capability",
  "capability becomes leadership",
  "leadership becomes contribution",
];

function EducationalModel() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Educational Model" },
        ]}
        eyebrow="The Lighthouse Educational Model"
        title="A coherent approach to learning, growth and contribution."
        intro="At Lighthouse Campus, education is designed as one continuous journey. Knowledge, character, creativity, wellbeing and responsibility develop together through purposeful relationships and carefully designed experiences."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>Learning with Purpose</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] md:text-[2.4rem]">
              Learning begins with curiosity and grows into capability.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Learning develops through inquiry, understanding, application and
              reflection. Students encounter knowledge as something to explore,
              connect and use.
            </p>
            <p>
              Every stage strengthens the intellectual habits, personal
              qualities and practical capabilities required for meaningful
              participation in an evolving world.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="The Learner at the Centre"
          title="Every educational decision begins with the learner."
          description="The curriculum, teaching approach, assessment, learning support and campus environment are designed around how young people develop, what they need at each stage, and who they are becoming."
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Four Dimensions of Learning"
          title="Learn. Think. Lead. Contribute."
          description="Four connected dimensions that shape every classroom and every experience on campus."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dimensions.map((d) => (
            <FeatureCard key={d.title} title={d.title} icon={d.icon}>
              {d.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          onNavy
          eyebrow="One Model Across Every Stage"
          title="The same philosophy, expressed for every age."
          description="Its expression changes with age, but its purpose remains constant."
        />
        <ol className="mx-auto mt-12 max-w-2xl space-y-4">
          {arc.map((step, i) => (
            <li
              key={step}
              className="flex items-baseline gap-4 border-b border-navy-foreground/15 pb-4 last:border-none"
            >
              <span className="font-display text-2xl text-gold">
                0{i + 1}
              </span>
              <span className="text-lg text-navy-foreground/90">{step}.</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Closing</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-foreground md:text-3xl">
            The Lighthouse Educational Model brings learning, character,
            relationships and purpose into one coherent experience — preparing
            students not only to succeed academically, but to understand
            themselves, engage thoughtfully with others and contribute with
            confidence.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Explore"
        title="Discover the stages of the journey"
        body="See how the model expresses itself from Early Years through Graduation Pathways."
        primary={{ to: "/learning-journey", label: "Discover the stages" }}
        secondary={{ to: "/our-model/learning-ecosystem", label: "The Learning Ecosystem" }}
      />
    </>
  );
}
