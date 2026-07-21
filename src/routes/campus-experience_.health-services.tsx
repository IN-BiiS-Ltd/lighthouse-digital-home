import { createFileRoute } from "@tanstack/react-router";
import { PrincipledPage, type PrincipledPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/campus-experience_/health-services")({
  head: () => ({
    meta: [
      { title: "Health Services | Campus | Lighthouse Campus" },
      { name: "description", content: "Health services at Lighthouse Campus support the everyday wellbeing of learners and complement the pastoral life of the campus." },
      { property: "og:title", content: "Health Services | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Health services at Lighthouse Campus support the everyday wellbeing of learners and complement the pastoral life of the campus." },
      { property: "og:url", content: "/campus-experience/health-services" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/health-services" }],
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
    { label: "Health Services" },
  ],
  eyebrow: "Campus / Health Services",
  title: "Care available on campus, aligned with wellbeing.",
  intro: "Health services support the everyday wellbeing of learners and complement the pastoral life of the campus — an act of care, not simply a response to incident.",
  approach: {
    heading: "Care, not just response",
    body: [
      "Health services at Lighthouse Campus are part of a broader commitment to the whole learner — physical, emotional and social.",
      "They work alongside pastoral, academic and family support so that a learner's needs are seen and addressed as a whole, never as isolated symptoms.",
      "The presence of care on campus is meant to be felt long before it is ever needed.",
    ],
  },
  principles: {
    heading: "The principles that guide health services",
    items: [
      {
        title: "Whole-learner care",
        body: "Health is inseparable from wellbeing, learning and belonging. Care is offered in that fuller context, not in isolation.",
      },
      {
        title: "Prevention first",
        body: "Everyday habits, healthy rhythms and early conversation are treated as the first and most important layer of care.",
      },
      {
        title: "Family partnership",
        body: "Families are informed and involved. Nothing important about a child's health is handled without them.",
      },
      {
        title: "Dignity and privacy",
        body: "Every learner who comes to the health area is met with respect. Personal information stays where it belongs.",
      },
      {
        title: "Clear protocols",
        body: "Trained adults follow written procedures for illness, injury and emergency — reviewed as part of institutional practice.",
      },
      {
        title: "Continuous review",
        body: "Health provision is examined regularly against best practice and the actual experience of learners and families.",
      },
    ],
  },
  standards: {
    heading: "What families can rely on",
    bullets: [
      "trained staff responsible for day-to-day health provision",
      "a clean, private space for learners who need attention",
      "clear procedures for illness, injury and medication",
      "confidential records of any medical information families share",
      "immediate family contact for anything that warrants it",
      "coordination with wellbeing and pastoral colleagues on campus",
    ],
  },
  status: {
    label: "Operational details are shared with enrolled families",
    body: "Specific medical staffing, on-site services and providers are described directly to enrolled families through official school communications — not publicly listed.",
  },
  related: [
    { title: "Wellbeing", to: "/student-life/wellbeing", body: "Care for the whole learner across the school day." },
    { title: "Safety", to: "/campus-experience/safety", body: "A safe and orderly campus." },
    { title: "Parent Partnership", to: "/parents/parent-partnership", body: "Home and school working together." },
  ],
  cta: {
    title: "Ask us any question.",
    body: "We are glad to describe how care is organised on campus, and how it supports your child.",
    primary: { to: "/contact", label: "Get in touch" },
    secondary: { to: "/campus-experience", label: "Campus overview" },
  },
};
