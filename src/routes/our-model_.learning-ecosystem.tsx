import { createFileRoute } from "@tanstack/react-router";
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
import { ArchitecturalPage, type ArchitecturalPageConfig } from "@/components/architectural-page";

export const Route = createFileRoute("/our-model_/learning-ecosystem")({
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

const config: ArchitecturalPageConfig = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Our Model", to: "/our-model" },
    { label: "Learning Ecosystem" },
  ],
  eyebrow: "The Learning Ecosystem",
  title: "Where people, knowledge and intelligence grow together.",
  intro:
    "Education is created through connections. At Lighthouse Campus, every part of the institution works together around the learner through shared purpose, meaningful relationships and continuous learning.",
  sections: [
    { label: "Community", to: "/our-model/learning-ecosystem#community" },
    { label: "The Pillars", to: "/our-model/learning-ecosystem#pillars" },
    { label: "The Ecosystem", to: "/our-model/learning-ecosystem#ecosystem" },
    { label: "Principles", to: "/our-model/learning-ecosystem#principles" },
  ],
  modules: [
    {
      kind: "pillars",
      id: "community",
      eyebrow: "A Living Learning Community",
      title: "An interconnected educational community, not a collection of separate departments.",
      description:
        "Students, teachers, families and leadership move together — every relationship contributes to the quality of learning.",
      pillars: [
        { title: "Students", body: "Learners are never in isolation — they belong to a community of curiosity, care and shared purpose." },
        { title: "Teachers", body: "Teachers work alongside colleagues, students and families rather than in isolated classrooms." },
        { title: "Families", body: "Families support learning as full educational partners, not from the outside." },
        { title: "Leadership", body: "Decisions are grounded in understanding the daily experience of learners and educators." },
        { title: "Community", body: "Every relationship in the school contributes to the quality of learning and belonging." },
        { title: "Systems", body: "Structures, processes and information support the people they serve — not the reverse." },
      ],
    },
    {
      kind: "bento",
      id: "pillars",
      eyebrow: "Inside the Ecosystem",
      title: "Eight pillars, connected around the learner.",
      description: "Each pillar has a distinct role; together they form one educational system with the learner at the centre.",
      tiles: [
        {
          title: "The Learner at the Centre",
          icon: <UserRound className="size-6" />,
          body: "Every educational decision begins with one question: how does this help the learner grow? Academic learning, character, wellbeing, creativity, leadership and belonging form one continuous developmental journey.",
        },
        {
          title: "Teachers as Mentors and Designers",
          icon: <BookOpen className="size-5" />,
          body: "Teachers know students as individuals — they design experiences, ask purposeful questions, observe progress, provide feedback and help learners build confidence and independence.",
        },
        {
          title: "Families as Educational Partners",
          icon: <Users2 className="size-5" />,
          body: "Learning grows stronger when home and school move together. Open communication, mutual trust and shared understanding support each learner with consistency and care.",
        },
        {
          title: "Leadership That Enables Learning",
          icon: <Compass className="size-5" />,
          body: "Leadership creates the conditions in which students and teachers can flourish — developing people, strengthening culture and protecting wellbeing.",
        },
        {
          title: "Community",
          icon: <Users className="size-5" />,
          body: "An interconnected educational community rather than a collection of separate departments. Every relationship contributes to the quality of learning.",
        },
        {
          title: "Technology with Purpose",
          icon: <Cpu className="size-5" />,
          body: "Technology is used when it improves learning, communication or institutional effectiveness. Technology serves education; education remains human.",
        },
        {
          title: "Institutional Intelligence",
          icon: <Brain className="size-5" />,
          body: "Meaningful information from teaching, assessment, wellbeing and communication helps the institution understand each learner and improve decisions.",
        },
        {
          title: "Wellbeing",
          icon: <HeartPulse className="size-5" />,
          body: "Emotional, social and physical wellbeing support meaningful learning. A calm, respectful environment is the ground on which everything else stands.",
        },
      ],
    },
    {
      kind: "principles",
      id: "principles",
      eyebrow: "Design Principles",
      title: "The rules that hold the ecosystem together.",
      description: "Simple commitments that keep the whole institution moving in one educational direction.",
      principles: [
        "the learner at the centre of every decision",
        "human relationships before systems",
        "technology serves education, never the reverse",
        "information supports understanding, not surveillance",
        "wellbeing is the ground, not an afterthought",
        "one community, many roles",
        "shared purpose, honest communication",
        "continuous learning across the institution",
      ],
    },
    {
      kind: "related",
      id: "related",
      title: "Continue exploring",
      links: [
        { title: "The Lighthouse Learner", to: "/our-model/learner-profile", body: "The qualities the ecosystem is designed to develop." },
        { title: "Educational Model", to: "/our-model/educational-model", body: "The philosophy behind the ecosystem." },
        { title: "Institutional Intelligence", to: "/our-model/institutional-intelligence", body: "How information supports the learner." },
      ],
    },
  ],
  cta: {
    title: "Meet the Lighthouse learner",
    body: "See the qualities the ecosystem is designed to develop — from curiosity to contribution.",
    primary: { to: "/our-model/learner-profile", label: "The Lighthouse Learner" },
    secondary: { to: "/our-model/institutional-intelligence", label: "Institutional Intelligence" },
  },
};

function LearningEcosystem() {
  return <ArchitecturalPage config={config} />;
}
