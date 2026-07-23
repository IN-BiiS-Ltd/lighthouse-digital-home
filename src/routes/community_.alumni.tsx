import { createFileRoute } from "@tanstack/react-router";
import { InDevelopmentPage, type InDevelopmentPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/community_/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni | Community | Lighthouse Campus" },
      { name: "description", content: "Lighthouse Campus is at the beginning of its story. The alumni community described here is the one we are preparing to welcome — a relationship of long-term contribution, not a mailing list." },
      { property: "og:title", content: "Alumni | Community | Lighthouse Campus" },
      { property: "og:description", content: "Lighthouse Campus is at the beginning of its story. The alumni community described here is the one we are preparing to welcome — a relationship of long-term contribution, not a mailing list." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/community/alumni" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/community/alumni" }],
  }),
  component: Page,
});

function Page() {
  return <InDevelopmentPage config={config} />;
}

const config: InDevelopmentPageConfig = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Community", to: "/community" },
    { label: "Alumni" },
  ],
  eyebrow: "Community / Alumni",
  title: "The future Lighthouse alumni community.",
  intro: "Lighthouse Campus has no graduates yet. Everything on this page describes the alumni community being designed so that it is ready when the first cohort completes their journey.",
  intent: {
    heading: "Graduates as long-term partners of the institution",
    body: [
      "The alumni relationship at Lighthouse is imagined as a continuation, not a farewell — a place where former learners remain part of the institution that shaped them.",
      "It is intended to be a relationship of mutual respect and long-term contribution, where graduates enrich the school just as the school shaped them.",
    ],
  },
  capabilities: {
    heading: "What the alumni community is being designed to offer",
    bullets: [
      "a place for graduates to remain connected across cohorts and continents",
      "channels for continued dialogue with teachers, mentors and each other",
      "opportunities to contribute back to current learners as speakers, mentors and hosts",
      "invitations to campus moments that mark the life of the institution",
      "a considered network for university, gap-year and early-career navigation",
      "a record of graduate journeys that helps the institution learn from its own alumni",
    ],
  },
  timeline: {
    heading: "How the alumni community will take shape",
    currentStage: "discovery",
  },
  whatToDoNow: {
    heading: "In the meantime",
    body: "The alumni community begins with the learners on campus today. The strongest thing you can do now is watch, share and follow the story from the start.",
    cards: [
      {
        title: "See where the journey leads",
        to: "/learning-journey/graduation-pathways",
        body: "The graduation stage of the Lighthouse learning journey — what our first alumni will graduate into.",
      },
      {
        title: "Partnerships",
        to: "/community/partnerships",
        body: "Values-aligned relationships the campus is building with the wider world.",
      },
      {
        title: "Contact the community team",
        to: "/contact",
        body: "Introduce yourself if you would like to be part of the alumni story as it forms.",
      },
    ],
  },
  status: {
    label: "An alumni community forms with the first graduating cohort",
    body: "No alumni programme, event or named partner is described here until it is real. This page will change as the first cohort approaches graduation.",
  },
  cta: {
    title: "Follow the story from the beginning.",
    body: "Stay in touch with the school as the community — and its future alumni — grows.",
    primary: { to: "/contact", label: "Get in touch" },
    secondary: { to: "/community", label: "Community overview" },
  },
};
