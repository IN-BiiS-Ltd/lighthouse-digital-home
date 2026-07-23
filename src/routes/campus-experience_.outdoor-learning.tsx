import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/outdoor-learning")({
  head: () => ({
    meta: [
      { title: "Outdoor Learning & Gardens | Campus | Lighthouse Campus" },
      { name: "description", content: "Courtyards, gardens and open spaces where learning continues beyond the classroom walls." },
      { property: "og:title", content: "Outdoor Learning & Gardens | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Courtyards, gardens and open spaces where learning continues beyond the classroom walls." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience/outdoor-learning" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience/outdoor-learning" }],
  }),
  component: Page,
});

function Page() {
  return <InternalPage config={config} />;
}

const config = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Campus", to: "/campus-experience" },
    { label: "Outdoor Learning & Gardens" },
  ],
  eyebrow: "Campus / Outdoor Learning & Gardens",
  title: "Learning continues beyond the classroom.",
  intro: "Courtyards, gardens and open-air spaces are designed as extensions of the learning environment — for reflection, dialogue and discovery.",
  blocks: [
    {
      eyebrow: "Design Principle",
      title: "Air, light and living learning",
      body: [
        "Outdoor spaces are planned so that daily life includes moments of quiet, movement and connection with the natural world.",
        "Gardens, shaded seating and open courtyards allow lessons, conversations and reading to move outside when the day invites it.",
      ],
    },
  ],
  status: {
    label: "Outdoor spaces develop with the campus",
    body: "Specific gardens, courtyards and planted areas are described accurately as each is completed.",
  },
  related: [
    { title: "Campus Overview", to: "/campus-experience/overview", body: "How the campus is organised around learning." },
    { title: "Wellbeing", to: "/student-life/wellbeing", body: "Care for the whole learner." },
    { title: "Community & Belonging", to: "/student-life/community-belonging", body: "A campus that feels like home." },
  ],
  cta: {
    title: "Come and see the campus.",
    body: "A visit shows how outdoor spaces support a full learning day.",
    primary: { to: "/contact", label: "Schedule a visit" },
    secondary: { to: "/campus-experience", label: "Campus overview" },
  },
};
