import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/components/internal-page";
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
      {
        property: "og:description",
        content:
          "Partnership, communication and resources for families at Lighthouse Campus.",
      },
      { property: "og:url", content: "/parents" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/parents" }],
  }),
  component: Parents,
});

function Parents() {
  return (
    <OverviewPage
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Parents" }]}
      eyebrow="Parents"
      title="Families as educational partners."
      intro="Home and school support the learner together — through clear communication, shared understanding and respect."
      paragraphs={[
        "At Lighthouse Campus, families are partners in a child's education. The relationship begins with the first enquiry and continues through every stage of the learning journey.",
        "The pages below explain how the partnership works, how communication is organised and how families can be part of school life.",
      ]}
      cards={[
        { title: "Parent Partnership", to: "/parents/parent-partnership", body: "Families as educational partners.", icon: <Handshake className="size-5" /> },
        { title: "Parent Journey", to: "/parents/parent-journey", body: "How the relationship begins and grows.", icon: <RouteIcon className="size-5" /> },
        { title: "Communication", to: "/parents/communication", body: "How families and school stay in touch.", icon: <MessagesSquare className="size-5" /> },
        { title: "Parent Portal", to: "/parents/parent-portal", body: "A family-facing portal, in development.", icon: <MonitorSmartphone className="size-5" /> },
        { title: "School Calendar", to: "/parents/school-calendar", body: "A shared rhythm across the school year.", icon: <CalendarDays className="size-5" /> },
        { title: "Family Resources", to: "/parents/family-resources", body: "Useful information for families.", icon: <BookOpen className="size-5" /> },
        { title: "School Policies", to: "/parents/school-policies", body: "The framework that supports daily life.", icon: <Scale className="size-5" /> },
        { title: "Family Engagement", to: "/parents/family-engagement", body: "Ways to be part of school life.", icon: <Users className="size-5" /> },
      ]}
      cta={{
        title: "A partnership that begins with a conversation.",
        body: "Contact the school to discuss anything relevant to your family.",
        primary: { to: "/contact", label: "Get in touch" },
        secondary: { to: "/admissions", label: "Admissions overview" },
      }}
    />
  );
}
