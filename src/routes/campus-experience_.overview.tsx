import { createFileRoute } from "@tanstack/react-router";
import { Building2, BookOpen, FlaskConical, Users, HeartPulse, Trees } from "lucide-react";
import { ArchitecturalPage, type ArchitecturalPageConfig } from "@/components/architectural-page";

export const Route = createFileRoute("/campus-experience_/overview")({
  head: () => ({
    meta: [
      { title: "Overview | Campus | Lighthouse Campus" },
      { name: "description", content: "The campus is not a backdrop to learning. It is one of the most important educators in the school." },
      { property: "og:title", content: "Overview | Campus | Lighthouse Campus" },
      { property: "og:description", content: "The campus is not a backdrop to learning. It is one of the most important educators in the school." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience/overview" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience/overview" }],
  }),
  component: Page,
});

const config: ArchitecturalPageConfig = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Campus", to: "/campus-experience" },
    { label: "Overview" },
  ],
  eyebrow: "Campus / Overview",
  title: "Every space serves the learner.",
  intro: "The campus is not a backdrop to learning. It is one of the most important educators in the school.",
  sections: [
    { label: "Principle", to: "/campus-experience/overview#principle" },
    { label: "How Spaces Work", to: "/campus-experience/overview#how-spaces-work" },
    { label: "Commitments", to: "/campus-experience/overview#commitments" },
  ],
  modules: [
    {
      kind: "pillars",
      id: "principle",
      eyebrow: "Principle",
      title: "Environments that teach",
      description:
        "Every space at Lighthouse Campus is designed to support learning, relationships, safety and wellbeing. The layout, materials and rhythms of daily life are all intentional.",
      pillars: [
        { numeral: "01", title: "Designed for learning", body: "Every classroom, corridor and courtyard is planned so daily life supports focused work, dialogue and reflection." },
        { numeral: "02", title: "Designed for relationships", body: "Shared spaces invite belonging — students and teachers meet, listen and think together across the day." },
        { numeral: "03", title: "Designed for wellbeing", body: "Light, air, quiet and safety are treated as educational conditions, not decorative extras." },
      ],
    },
    {
      kind: "bento",
      id: "how-spaces-work",
      eyebrow: "How Spaces Work Together",
      title: "A coherent campus, not a collection of rooms",
      description:
        "Classrooms, library, laboratories, creative spaces, dining and outdoor areas belong to one educational vision. Learners move through them with a growing sense of ownership and responsibility.",
      tiles: [
        {
          title: "One campus, one educational vision",
          icon: <Building2 className="size-6" />,
          body: "No space stands alone. Every room, corridor and courtyard is part of one educational environment, shaped by the same commitments to learning, relationships and wellbeing.",
        },
        { title: "Classrooms & Library", icon: <BookOpen className="size-5" />, body: "The daily rhythm of focused work, dialogue and quiet reading." },
        { title: "Laboratories & Innovation", icon: <FlaskConical className="size-5" />, body: "Where inquiry becomes practice — and ideas become work." },
        { title: "Assembly & Community", icon: <Users className="size-5" />, body: "Places where the whole campus comes together as one community." },
        { title: "Health, Safety & Care", icon: <HeartPulse className="size-5" />, body: "Wellbeing is a design commitment, protected across every space." },
        { title: "Outdoor Learning & Gardens", icon: <Trees className="size-5" />, body: "Courtyards, gardens and open air as extensions of the classroom." },
      ],
    },
    {
      kind: "principles",
      id: "commitments",
      eyebrow: "What Every Space Should Do",
      title: "Shared design commitments",
      description: "Six commitments that every space on campus is designed to uphold.",
      principles: [
        "support the learner",
        "invite good behaviour and belonging",
        "enable focused work",
        "allow collaboration",
        "respect wellbeing",
        "remain safe and cared for",
      ],
    },
    {
      kind: "related",
      title: "Continue exploring the campus",
      links: [
        { title: "Classrooms", to: "/campus-experience/classrooms", body: "Where daily learning happens." },
        { title: "Library", to: "/campus-experience/library", body: "A place of reading, thinking and quiet." },
        { title: "Innovation & Creative Spaces", to: "/campus-experience/innovation-creative-spaces", body: "Where ideas are made." },
      ],
    },
  ],
  cta: {
    title: "See it for yourself.",
    body: "A visit is the best way to understand how the campus supports learning.",
    primary: { to: "/contact", label: "Schedule a visit" },
    secondary: { to: "/campus-experience", label: "Campus overview" },
  },
};

function Page() {
  return <ArchitecturalPage config={config} />;
}
