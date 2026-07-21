import { createFileRoute } from "@tanstack/react-router";
import { PrincipledPage, type PrincipledPageConfig } from "@/components/development-page";

export const Route = createFileRoute("/campus-experience_/dining")({
  head: () => ({
    meta: [
      { title: "Dining | Campus | Lighthouse Campus" },
      { name: "description", content: "At Lighthouse Campus, meal times are part of the educational day — a moment of shared community, care and healthy routine." },
      { property: "og:title", content: "Dining | Campus | Lighthouse Campus" },
      { property: "og:description", content: "At Lighthouse Campus, meal times are part of the educational day — a moment of shared community, care and healthy routine." },
      { property: "og:url", content: "/campus-experience/dining" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/dining" }],
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
    { label: "Dining" },
  ],
  eyebrow: "Campus / Dining",
  title: "A daily rhythm of shared meals and healthy habits.",
  intro: "Meal times are part of the educational day — a moment of shared community, care and healthy routine that shapes children as much as any lesson.",
  approach: {
    heading: "More than food",
    body: [
      "Dining at Lighthouse Campus is treated as a small daily practice in community: sitting together, waiting, sharing, tidying, thanking.",
      "Choices around food are made in the same spirit as choices around learning — thoughtfully, with children's long-term wellbeing at the centre.",
      "A meal on campus is meant to feel calm, unhurried and dignified.",
    ],
  },
  principles: {
    heading: "The principles that guide dining",
    items: [
      {
        title: "Nourishment first",
        body: "Meals are planned to support growing bodies and busy minds, not simply to fill a break in the timetable.",
      },
      {
        title: "Everyday courtesy",
        body: "Dining is one of the school's most reliable teachers of manners, patience and attention to others.",
      },
      {
        title: "Care for the space",
        body: "Children help keep the dining area the way they found it — a small, daily practice in shared responsibility.",
      },
      {
        title: "Respect for difference",
        body: "Dietary, cultural and religious needs are treated as ordinary, not as exceptions to be accommodated.",
      },
      {
        title: "Calm over rush",
        body: "The timetable is built so meals are not eaten standing up. Time to sit and speak is protected.",
      },
      {
        title: "Adults present",
        body: "Adults share the space at meal times — modelling the conduct expected, and quietly noticing every child.",
      },
    ],
  },
  standards: {
    heading: "What families can rely on",
    bullets: [
      "meals planned with nutritional guidance appropriate to each age group",
      "clear declaration of ingredients for allergens and dietary needs",
      "protected time and space to sit and eat together",
      "hygiene and food-handling standards reviewed as part of institutional practice",
      "regular listening to what learners actually think of the food",
      "coordination with families on any dietary or health requirement",
    ],
  },
  status: {
    label: "Menus and providers are shared with enrolled families",
    body: "Specific menus, providers and dietary arrangements are shared with enrolled families through official school communications rather than published publicly.",
  },
  related: [
    { title: "Wellbeing", to: "/student-life/wellbeing", body: "Care for the whole learner." },
    { title: "Health Services", to: "/campus-experience/health-services", body: "Care available on campus." },
    { title: "Campus Overview", to: "/campus-experience/overview", body: "Every space serves the learner." },
  ],
  cta: {
    title: "Learn how daily life is organised.",
    body: "Contact us with any questions about the school day.",
    primary: { to: "/contact", label: "Get in touch" },
    secondary: { to: "/campus-experience", label: "Campus overview" },
  },
};
