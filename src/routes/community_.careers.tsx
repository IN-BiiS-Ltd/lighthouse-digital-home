import { createFileRoute } from "@tanstack/react-router";
import { InDevelopmentPage, type InDevelopmentPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/community_/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Community | Lighthouse Campus" },
      { name: "description", content: "Careers at Lighthouse Campus are for people who take teaching, learning and community life seriously. Open roles are published only when they are formally open." },
      { property: "og:title", content: "Careers | Community | Lighthouse Campus" },
      { property: "og:description", content: "Careers at Lighthouse Campus are for people who take teaching, learning and community life seriously. Open roles are published only when they are formally open." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/community/careers" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/community/careers" }],
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
    { label: "Careers" },
  ],
  eyebrow: "Community / Careers",
  title: "Working at Lighthouse Campus.",
  intro: "Careers at Lighthouse Campus are for people who take teaching, learning and community life seriously. A live vacancies experience is being prepared; until it is ready, colleagues introduce themselves directly.",
  intent: {
    heading: "Educators first, employees second",
    body: [
      "Lighthouse Campus is being built by people who see education as meaningful work — not as a career step among others.",
      "The careers area is designed around that same commitment: honest about who we look for, honest about when there is genuinely a role to offer.",
    ],
  },
  capabilities: {
    heading: "What the careers experience is being designed to offer",
    bullets: [
      "a clear picture of the kind of colleague Lighthouse looks for",
      "current openings, published only when they are formally open",
      "role descriptions written the way the work is actually lived",
      "a respectful application path that closes the loop with every candidate",
      "a way to introduce yourself when no vacancy fits, without being lost in an inbox",
      "insight into how the institution develops the people it hires",
    ],
  },
  timeline: {
    heading: "How the careers experience comes into being",
    currentStage: "design",
  },
  whatToDoNow: {
    heading: "In the meantime",
    body: "Colleagues are hired individually and thoughtfully — often through introduction. Start with the fuller careers area and introduce yourself.",
    cards: [
      {
        title: "The full careers area",
        to: "/careers",
        body: "How Lighthouse thinks about teaching, professional growth and the kind of colleague we look for.",
      },
      {
        title: "Governance",
        to: "/about/governance",
        body: "The long-term stewardship of educational purpose that shapes every role on campus.",
      },
      {
        title: "Introduce yourself",
        to: "/contact",
        body: "Send a note — colleagues who might fit an open or future role are always welcome to write.",
      },
    ],
  },
  status: {
    label: "Vacancies are published only when they are formally open",
    body: "Named roles, salaries and start dates are described publicly only once they are confirmed. This page never lists a role that does not yet exist.",
  },
  cta: {
    title: "Interested in joining us?",
    body: "Contact us to introduce yourself and hear when suitable roles open.",
    primary: { to: "/careers", label: "Full careers area" },
    secondary: { to: "/contact", label: "Get in touch" },
  },
};
