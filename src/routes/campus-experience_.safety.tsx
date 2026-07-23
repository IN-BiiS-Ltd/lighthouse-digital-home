import { createFileRoute } from "@tanstack/react-router";
import { PrincipledPage, type PrincipledPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/campus-experience_/safety")({
  head: () => ({
    meta: [
      { title: "Safety | Campus | Lighthouse Campus" },
      { name: "description", content: "Safety at Lighthouse Campus is a foundation, not a feature — expressed through design, procedures and the daily behaviour of everyone on campus." },
      { property: "og:title", content: "Safety | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Safety at Lighthouse Campus is a foundation, not a feature — expressed through design, procedures and the daily behaviour of everyone on campus." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience/safety" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience/safety" }],
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
    { label: "Safety" },
  ],
  eyebrow: "Campus / Safety",
  title: "A safe, orderly and cared-for campus.",
  intro: "Safety at Lighthouse Campus is a foundation, not a feature. It is expressed through the way spaces are designed, the way adults behave and the way learners are trusted to help sustain it.",
  approach: {
    heading: "Safety as everyone's responsibility",
    body: [
      "A safe campus is built through thoughtful design, clear procedures and a shared culture of care — not through fences and signs alone.",
      "Adults on campus are responsible for creating and maintaining this environment. Learners are trusted, in age-appropriate ways, to help sustain it.",
      "The absence of incident is not the definition of safety. The presence of attention, calm and dignified conduct is.",
    ],
  },
  principles: {
    heading: "The principles that guide safety",
    items: [
      {
        title: "Named accountability",
        body: "Specific adults are responsible for specific aspects of safety. No essential responsibility is left to 'the school' in the abstract.",
      },
      {
        title: "Prevention over reaction",
        body: "Design, routine and quiet supervision are the primary layers. Incident response exists, but is never the first line.",
      },
      {
        title: "Clear procedure",
        body: "Written, practised procedures exist for the things that matter — access, emergency, safeguarding — and are reviewed regularly.",
      },
      {
        title: "Dignified conduct",
        body: "Respectful behaviour between learners, and between adults and learners, is treated as a safety measure, not just a courtesy.",
      },
      {
        title: "Adults present",
        body: "Shared spaces are supervised by adults who know the learners, not policed by a checklist.",
      },
      {
        title: "Learning from real experience",
        body: "Every incident, however small, is treated as information — reviewed with honesty and used to improve.",
      },
    ],
  },
  standards: {
    heading: "Everyday commitments",
    bullets: [
      "controlled access to campus with clear arrival and dismissal protocols",
      "safeguarding procedures aligned with best professional practice",
      "adults present in shared spaces throughout the day",
      "respectful behaviour between learners as an institutional norm",
      "cared-for facilities maintained on a documented cycle",
      "regular review of safety practice as part of institutional life",
    ],
  },
  status: {
    label: "Safety procedures are described in detail to enrolled families",
    body: "Specific safeguarding protocols, emergency arrangements and named contacts are shared directly with enrolled families through official school communications.",
  },
  related: [
    { title: "Health Services", to: "/campus-experience/health-services", body: "Care available on campus." },
    { title: "Transportation", to: "/campus-experience/transportation", body: "Safe and considered journeys." },
    { title: "School Policies", to: "/parents/school-policies", body: "The framework that supports daily life." },
  ],
  cta: {
    title: "Peace of mind for families.",
    body: "Contact us with any question about how the campus is run.",
    primary: { to: "/contact", label: "Get in touch" },
    secondary: { to: "/campus-experience", label: "Campus overview" },
  },
};
