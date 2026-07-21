import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  Eyebrow,
  FeatureCard,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { EcosystemDiagram } from "@/components/ecosystem-diagram";
import {
  UserRound,
  Users2,
  BookOpen,
  Compass,
  Users,
  Cpu,
  Brain,
  HeartPulse,
} from "lucide-react";

export const Route = createFileRoute("/our-model/learning-ecosystem")({
  head: () => ({
    meta: [
      { title: "The Learning Ecosystem — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Where people, knowledge and intelligence grow together. How students, teachers, families, leadership, learning, technology and institutional intelligence connect around every learner.",
      },
      { property: "og:title", content: "The Lighthouse Learning Ecosystem" },
      {
        property: "og:description",
        content:
          "A living educational system where every part of the institution works together around the learner.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-model/learning-ecosystem" },
    ],
    links: [{ rel: "canonical", href: "/our-model/learning-ecosystem" }],
  }),
  component: LearningEcosystem,
});

const nodes = [
  {
    title: "The Learner at the Centre",
    icon: <UserRound className="size-5" />,
    body: "Every educational decision begins with one question: how does this help the learner grow? Academic learning, character, wellbeing, creativity, leadership and belonging form one continuous developmental journey.",
  },
  {
    title: "Teachers as Mentors and Designers",
    icon: <BookOpen className="size-5" />,
    body: "Teachers know students as individuals. They design experiences, ask purposeful questions, observe progress, provide feedback and help learners build confidence and independence. Technology supports teachers; human relationships define the learning experience.",
  },
  {
    title: "Families as Educational Partners",
    icon: <Users2 className="size-5" />,
    body: "Learning grows stronger when home and school move together. Open communication, mutual trust and shared understanding allow families and educators to support each learner with consistency and care.",
  },
  {
    title: "Leadership That Enables Learning",
    icon: <Compass className="size-5" />,
    body: "Leadership creates the conditions in which students and teachers can flourish — developing people, strengthening culture, improving systems, protecting wellbeing and keeping decisions connected to educational purpose.",
  },
  {
    title: "Community",
    icon: <Users className="size-5" />,
    body: "Lighthouse Campus is designed as an interconnected educational community rather than a collection of separate departments. Every relationship contributes to the quality of learning.",
  },
  {
    title: "Technology with Purpose",
    icon: <Cpu className="size-5" />,
    body: "Technology is used when it improves learning, communication, accessibility or institutional effectiveness. It supports inquiry, creativity, collaboration, personalised support and access to knowledge. Technology serves education. Education remains human.",
  },
  {
    title: "Institutional Intelligence",
    icon: <Brain className="size-5" />,
    body: "Meaningful information from teaching, assessment, wellbeing, attendance and communication helps the institution understand each learner, support each teacher, keep families connected, recognise emerging needs and improve decisions.",
  },
  {
    title: "Wellbeing",
    icon: <HeartPulse className="size-5" />,
    body: "Emotional, social and physical wellbeing support meaningful learning. A calm, respectful environment is the ground on which everything else stands.",
  },
];

function LearningEcosystem() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Learning Ecosystem" },
        ]}
        eyebrow="The Learning Ecosystem"
        title="Where people, knowledge and intelligence grow together."
        intro="Education is created through connections. At Lighthouse Campus, every part of the institution works together around the learner through shared purpose, meaningful relationships and continuous learning."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>A Living Learning Community</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight md:text-[2.4rem]">
              An interconnected educational community, not a collection of
              separate departments.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>Students do not learn in isolation.</p>
            <p>Teachers do not teach in isolation.</p>
            <p>Families do not support learning from the outside.</p>
            <p>
              Leaders do not make decisions without understanding the
              experience of learners and educators.
            </p>
            <p>
              Every relationship contributes to the quality of learning.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          align="center"
          eyebrow="The Model"
          title="The learner at the centre — connected to every part of the institution."
          description="A refined view of the ecosystem: eight pillars connected through shared purpose and open communication."
        />
        <div className="mt-12 text-navy">
          <EcosystemDiagram />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Inside the ecosystem"
          title="Eight pillars, connected around the learner."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {nodes.map((n) => (
            <FeatureCard key={n.title} title={n.title} icon={n.icon}>
              {n.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onNavy className="justify-center">
            One campus. One community.
          </Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-navy-foreground md:text-3xl">
            Lighthouse Campus is more than a place where lessons happen. It is
            a living educational system where people, knowledge, relationships
            and intelligence work together to help every learner flourish.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="Meet the Lighthouse learner"
        body="See the qualities the ecosystem is designed to develop — from curiosity to contribution."
        primary={{ to: "/our-model/learner-profile", label: "The Lighthouse Learner" }}
        secondary={{ to: "/our-model/institutional-intelligence", label: "Institutional Intelligence" }}
      />
    </>
  );
}
