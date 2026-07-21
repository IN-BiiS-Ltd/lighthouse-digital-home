import { createFileRoute } from "@tanstack/react-router";
import { InDevelopmentPage, type InDevelopmentPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/admissions_/apply-online")({
  head: () => ({
    meta: [
      { title: "Apply Online | Admissions | Lighthouse Campus" },
      { name: "description", content: "An online application experience is being prepared with the same care as the wider admissions journey. Until it launches, families apply through the admissions team." },
      { property: "og:title", content: "Apply Online | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "An online application experience is being prepared with the same care as the wider admissions journey. Until it launches, families apply through the admissions team." },
      { property: "og:url", content: "/admissions/apply-online" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/admissions/apply-online" }],
  }),
  component: Page,
});

function Page() {
  return <InDevelopmentPage config={config} />;
}

const config: InDevelopmentPageConfig = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Admissions", to: "/admissions" },
    { label: "Apply Online" },
  ],
  eyebrow: "Admissions / Apply Online",
  title: "Applying online — under thoughtful development.",
  intro: "An online application experience is being prepared as part of the wider Lighthouse digital ecosystem. Until it launches, every application is handled personally by the admissions team.",
  intent: {
    heading: "A calm, guided way to begin the journey",
    body: [
      "Applying to Lighthouse Campus is a considered decision for a family, and the online experience is being shaped to reflect that.",
      "The intention is not a form — it is a guided, respectful path that gives families clarity at every step and gives the admissions team the context needed to welcome each child well.",
    ],
  },
  capabilities: {
    heading: "What the online application will offer",
    body: "The experience is being designed around what families actually need at this moment, not around what is easiest to build.",
    bullets: [
      "a clear picture of the full admissions journey from the start",
      "the ability to begin, pause and return to an application at any time",
      "guided upload of the documents required for each stage",
      "transparent status updates from submission to invitation to visit",
      "a private, respectful place to share information about a child",
      "direct access to the admissions team throughout the process",
    ],
  },
  timeline: {
    heading: "How the online application comes into being",
    currentStage: "design",
  },
  whatToDoNow: {
    heading: "What to do now",
    body: "The full admissions journey is already open — the online form is one convenience within it, not a prerequisite. Start where it makes sense for your family.",
    cards: [
      {
        title: "Understand the application process",
        to: "/admissions/application-process",
        body: "The five-step journey the admissions team walks with every family, from first conversation to enrolment.",
      },
      {
        title: "Schedule a visit",
        to: "/admissions/schedule-a-visit",
        body: "The best introduction to Lighthouse is time on campus. Arrange a visit that fits your family's rhythm.",
      },
      {
        title: "Contact the admissions team",
        to: "/contact",
        body: "Ask any question, request the current documents, or begin an application in conversation with a real person.",
      },
    ],
  },
  status: {
    label: "Handled personally, published when ready",
    body: "The online application is announced here only once it can serve families with the same care as the personal process it complements — never before.",
  },
  cta: {
    title: "Begin your application today.",
    body: "The admissions team is ready to walk with your family from the very first question.",
    primary: { to: "/contact", label: "Contact admissions" },
    secondary: { to: "/admissions/application-process", label: "See the process" },
  },
};
