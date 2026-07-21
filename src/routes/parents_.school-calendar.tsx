import { createFileRoute } from "@tanstack/react-router";
import { PrincipledPage, type PrincipledPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/parents_/school-calendar")({
  head: () => ({
    meta: [
      { title: "School Calendar | Parents | Lighthouse Campus" },
      { name: "description", content: "A shared rhythm across the school year — terms, key moments and community events that families and the school live by together." },
      { property: "og:title", content: "School Calendar | Parents | Lighthouse Campus" },
      { property: "og:description", content: "A shared rhythm across the school year — terms, key moments and community events that families and the school live by together." },
      { property: "og:url", content: "/parents/school-calendar" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/parents/school-calendar" }],
  }),
  component: Page,
});

function Page() {
  return <PrincipledPage config={config} />;
}

const config: PrincipledPageConfig = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Parents", to: "/parents" },
    { label: "School Calendar" },
  ],
  eyebrow: "Parents / School Calendar",
  title: "A shared rhythm across the school year.",
  intro: "The school calendar gives families and the school a shared rhythm — of terms, key learning moments and community events. It is one of the ways the institution respects family life.",
  approach: {
    heading: "A living document for families",
    body: [
      "The calendar is not a static grid of dates. It expresses how the school year is composed — its terms, its pauses, its high points and its quiet weeks.",
      "It is shared as one document so that families can plan their own lives around a rhythm they can trust.",
      "It is updated when reality asks for it, and every change is communicated directly to families.",
    ],
  },
  principles: {
    heading: "The principles that guide the calendar",
    items: [
      {
        title: "One source of truth",
        body: "One authoritative calendar lives at the school and reaches families through official channels. Nothing important is only in a chat message.",
      },
      {
        title: "Advance notice",
        body: "The rhythm of the year is shared far enough in advance that families can plan travel, work and life around it.",
      },
      {
        title: "Respect for family life",
        body: "Weekends, holidays and family time are treated as protected. Additional demands on families are considered before they are added.",
      },
      {
        title: "Learning at the centre",
        body: "Key learning moments — assessment weeks, showcases, transitions — are planned first, and the rest of the year composed around them.",
      },
      {
        title: "Honest change management",
        body: "When a date must move, it moves once, is announced clearly and is not quietly re-adjusted.",
      },
      {
        title: "Community moments protected",
        body: "The events that make the school a community — not just a service — are given real space in the year.",
      },
    ],
  },
  standards: {
    heading: "What families can rely on",
    bullets: [
      "term dates and holiday periods shared as one document",
      "key learning moments visible across the whole year",
      "community events and family gatherings clearly marked",
      "advance notice of any change, with the reason explained",
      "coordination with communication and family engagement teams",
      "the calendar published to families through official channels only",
    ],
  },
  status: {
    label: "Current calendar details are shared with enrolled families",
    body: "The full school calendar and specific event dates are shared directly with enrolled families through official school communications and, in time, through the parent portal.",
  },
  related: [
    { title: "Communication", to: "/parents/communication", body: "How families and school stay in touch." },
    { title: "Family Engagement", to: "/parents/family-engagement", body: "Ways to be part of school life." },
    { title: "Events", to: "/student-life/events", body: "Moments that mark the school year." },
  ],
  cta: {
    title: "Speak with the school.",
    body: "Contact us for the current term calendar.",
    primary: { to: "/contact", label: "Get in touch" },
    secondary: { to: "/parents", label: "Parents overview" },
  },
};
