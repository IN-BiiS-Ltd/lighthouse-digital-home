import { createFileRoute } from "@tanstack/react-router";
import { PrincipledPage, type PrincipledPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/campus-experience_/transportation")({
  head: () => ({
    meta: [
      { title: "Transportation | Campus | Lighthouse Campus" },
      { name: "description", content: "Safe, considered journeys to and from Lighthouse Campus — treated with the same care as life on campus." },
      { property: "og:title", content: "Transportation | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Safe, considered journeys to and from Lighthouse Campus — treated with the same care as life on campus." },
      { property: "og:url", content: "/campus-experience/transportation" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/transportation" }],
  }),
  component: Page,
});

function Page() {
  return <PrincipledPage config={config} />;
}

const config: PrincipledPageConfig = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Campus", to: "/campus-experience" },
    { label: "Transportation" },
  ],
  eyebrow: "Campus / Transportation",
  title: "Safe, considered journeys to and from campus.",
  intro: "The journey to and from school is the first and last hour of a child's school day. It is treated with the same care as everything that happens between.",
  approach: {
    heading: "A considered approach to school journeys",
    body: [
      "Transportation at Lighthouse Campus is planned around one question: is this arrangement one the school would want for its own children?",
      "Safety, reliability and the family experience are treated as inseparable — no one of them is traded for the others.",
      "The morning arrival and afternoon dismissal are designed to feel calm rather than rushed.",
    ],
  },
  principles: {
    heading: "The principles that guide transportation",
    items: [
      {
        title: "Safety without compromise",
        body: "Every vehicle, driver and route decision is made against a single non-negotiable: the safety of the children on board.",
      },
      {
        title: "Named responsibility",
        body: "A specific adult on campus is accountable for the transport arrangements each family relies on. Not a vague team.",
      },
      {
        title: "A calm arrival",
        body: "The first minutes on campus set the tone of the day. Arrival is designed to feel welcoming, not chaotic.",
      },
      {
        title: "Family trust",
        body: "Families are told the truth about journey times, delays and disruptions — as soon as we know them.",
      },
      {
        title: "Small, known groups",
        body: "Journeys are organised so that adults know every child on board, and every child knows the adults.",
      },
      {
        title: "Continuous review",
        body: "Routes, timings and providers are reviewed as the campus grows, and refined where the actual experience calls for it.",
      },
    ],
  },
  standards: {
    heading: "What families can rely on",
    bullets: [
      "vetted drivers and vehicles meeting institutional safety standards",
      "adult supervision on every school-organised journey",
      "clear pick-up and drop-off points on and off campus",
      "protocols for delays, absence and end-of-day changes",
      "direct family contact for anything that affects a child's journey",
      "coordination with safety and family communication colleagues",
    ],
  },
  status: {
    label: "Routes and providers are shared with enrolled families",
    body: "Specific bus routes, timings and providers are shared directly with enrolled families and are not published publicly until confirmed.",
  },
  related: [
    { title: "Safety", to: "/campus-experience/safety", body: "A safe, orderly campus." },
    { title: "Parent Partnership", to: "/parents/parent-partnership", body: "Home and school together." },
    { title: "Communication", to: "/parents/communication", body: "How families and school stay in touch." },
  ],
  cta: {
    title: "Ask about your family's journey.",
    body: "Contact us to discuss transport arrangements that fit your family.",
    primary: { to: "/contact", label: "Get in touch" },
    secondary: { to: "/campus-experience", label: "Campus overview" },
  },
};
