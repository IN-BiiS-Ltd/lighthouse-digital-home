import { createFileRoute } from "@tanstack/react-router";
import { InDevelopmentPage, type InDevelopmentPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/community_/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships | Community | Lighthouse Campus" },
      { name: "description", content: "Partnerships extend the campus into the wider world — carefully, and with a clear educational purpose. Partners are named only once relationships are formalised." },
      { property: "og:title", content: "Partnerships | Community | Lighthouse Campus" },
      { property: "og:description", content: "Partnerships extend the campus into the wider world — carefully, and with a clear educational purpose. Partners are named only once relationships are formalised." },
      { property: "og:url", content: "/community/partnerships" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/community/partnerships" }],
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
    { label: "Partnerships" },
  ],
  eyebrow: "Community / Partnerships",
  title: "Considered relationships with organisations that share our values.",
  intro: "Partnerships extend the campus into the wider world — carefully, and with a clear educational purpose. Named partners appear here only once relationships are formalised.",
  intent: {
    heading: "Quality of relationship over quantity of logos",
    body: [
      "A partnership at Lighthouse Campus is treated the same way an appointment is — as a long-term commitment made on behalf of learners.",
      "The intent is a small, considered set of relationships where each one demonstrably serves education, not a wall of badges that serve marketing.",
    ],
  },
  capabilities: {
    heading: "What the partnerships area is being designed to offer",
    bullets: [
      "a transparent view of active partners and what each relationship contributes",
      "the educational purpose behind every partnership, stated plainly",
      "clear boundaries on how partners engage with learners and families",
      "the criteria the institution uses to accept — and decline — proposals",
      "a considered route for organisations who wish to explore a relationship",
      "periodic review of every partnership against its stated purpose",
    ],
  },
  timeline: {
    heading: "How the partnerships area comes into being",
    currentStage: "discovery",
  },
  whatToDoNow: {
    heading: "In the meantime",
    body: "Conversations with prospective partners are happening now. If your organisation shares the campus's values, we would rather talk than publish a list.",
    cards: [
      {
        title: "Community programmes",
        to: "/community/community-programmes",
        body: "How the campus already contributes beyond its walls, ahead of a formal partnerships programme.",
      },
      {
        title: "Working at Lighthouse",
        to: "/careers",
        body: "The same standards of care and long-term thinking that shape every considered relationship.",
      },
      {
        title: "Propose a partnership",
        to: "/contact",
        body: "Write to introduce your organisation and the values-aligned relationship you have in mind.",
      },
    ],
  },
  status: {
    label: "Partners are announced only when relationships are formalised",
    body: "No partner name, agreement or programme is described publicly until it is verified and formally in place. This page is intentionally slower to fill than a marketing page would be.",
  },
  cta: {
    title: "Interested in partnering with us?",
    body: "Contact us to explore a considered, values-aligned partnership.",
    primary: { to: "/contact", label: "Get in touch" },
    secondary: { to: "/community", label: "Community overview" },
  },
};
