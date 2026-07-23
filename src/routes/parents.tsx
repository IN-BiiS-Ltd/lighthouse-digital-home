import { createFileRoute } from "@tanstack/react-router";
import { ArchitecturalPage } from "@/components/architectural-page";
import { Handshake, Route as RouteIcon, MessagesSquare, MonitorSmartphone, CalendarDays, BookOpen, Scale, Users } from "lucide-react";

export const Route = createFileRoute("/parents")({
  head: () => ({
    meta: [
      { title: "Parents | Partnership with Families at Lighthouse Campus" },
      {
        name: "description",
        content:
          "Families are educational partners. Explore partnership, communication, calendar, resources, policies and family engagement at Lighthouse Campus.",
      },
      { property: "og:title", content: "Parents | Lighthouse Campus" },
      { property: "og:description", content: "Partnership, communication and resources for families at Lighthouse Campus." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/parents" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/parents" }],
  }),
  component: Parents,
});

function Parents() {
  return (
    <ArchitecturalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Parents" }],
        eyebrow: "Parents",
        title: "Families as educational partners.",
        intro:
          "Home and school support the learner together — through clear communication, shared understanding and respect. The partnership begins with the first enquiry and continues through every stage of the journey.",
        sections: [
          { label: "Partnership", to: "#partnership" },
          { label: "Everyday", to: "#everyday" },
          { label: "Principles", to: "#principles" },
        ],
        modules: [
          {
            kind: "pillars",
            id: "partnership",
            eyebrow: "How partnership works",
            title: "Three foundations of the family relationship.",
            description:
              "A shared framework across every stage — from first enquiry through graduation and beyond.",
            pillars: [
              { numeral: "01", title: "Shared Understanding", body: "Home and school build a common picture of the learner — strengths, needs, hopes and history — so support is coherent." },
              { numeral: "02", title: "Clear Communication", body: "Regular, respectful contact around progress, wellbeing and school life — organised, timely and honest." },
              { numeral: "03", title: "Meaningful Engagement", body: "Ways to be part of school life without pressure — from workshops and events to volunteering and reflection." },
            ],
          },
          {
            kind: "bento",
            id: "everyday",
            eyebrow: "Everyday resources",
            title: "What families rely on through the year.",
            description: "Eight practical areas that make the partnership real, day by day.",
            tiles: [
              { title: "Parent Partnership", body: "Families as educational partners.", icon: <Handshake className="size-5" /> },
              { title: "Parent Journey", body: "How the relationship begins and grows.", icon: <RouteIcon className="size-5" /> },
              { title: "Communication", body: "How families and school stay in touch.", icon: <MessagesSquare className="size-5" /> },
              { title: "Parent Portal", body: "A family-facing portal, in development.", icon: <MonitorSmartphone className="size-5" /> },
              { title: "School Calendar", body: "A shared rhythm across the school year.", icon: <CalendarDays className="size-5" /> },
              { title: "Family Resources", body: "Useful information for families.", icon: <BookOpen className="size-5" /> },
              { title: "School Policies", body: "The framework that supports daily life.", icon: <Scale className="size-5" /> },
              { title: "Family Engagement", body: "Ways to be part of school life.", icon: <Users className="size-5" /> },
            ],
          },
          {
            kind: "principles",
            id: "principles",
            eyebrow: "Principles",
            title: "How we work with families.",
            principles: [
              "Families are known — not merely informed.",
              "Communication is respectful and reciprocal.",
              "Concerns are addressed together, not around each other.",
              "Every child is understood as part of a family.",
              "Confidentiality is a practice, not a promise.",
              "Partnership continues beyond graduation.",
            ],
          },
          {
            kind: "related",
            eyebrow: "Explore",
            title: "Continue with the family relationship.",
            links: [
              { title: "Parent Journey", to: "/parents/parent-journey", body: "How the relationship begins and grows." },
              { title: "Communication", to: "/parents/communication", body: "How families and school stay in touch." },
              { title: "Family Engagement", to: "/parents/family-engagement", body: "Ways to be part of school life." },
            ],
          },
        ],
        cta: {
          title: "A partnership that begins with a conversation.",
          body: "Contact the school to discuss anything relevant to your family.",
          primary: { to: "/contact", label: "Get in touch" },
          secondary: { to: "/admissions", label: "Admissions overview" },
        },
      }}
    />
  );
}
