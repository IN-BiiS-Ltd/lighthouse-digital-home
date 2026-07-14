import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/dining")({
  head: () => ({
    meta: [
      { title: "Dining | Campus | Lighthouse Campus" },
      { name: "description", content: "Meal times are part of the educational day — a moment of shared community, care and healthy routine." },
      { property: "og:title", content: "Dining | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Meal times are part of the educational day — a moment of shared community, care and healthy routine." },
      { property: "og:url", content: "/campus-experience/dining" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/dining" }],
  }),
  component: Page,
});

function Page() {
  return <InternalPage config={config} />;
}

const config = {
  "breadcrumb": [
    {
      "label": "Home",
      "to": "/"
    },
    {
      "label": "Campus",
      "to": "/campus-experience"
    },
    {
      "label": "Dining"
    }
  ],
  "eyebrow": "Campus / Dining",
  "title": "A daily rhythm of shared meals and healthy habits.",
  "intro": "Meal times are part of the educational day — a moment of shared community, care and healthy routine.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "More than food",
      "body": [
        "Dining is an opportunity for learners to practise everyday courtesy, sit together and take care of a shared space.",
        "Choices around food are part of the broader commitment to wellbeing."
      ]
    }
  ],
  "status": {
    "label": "Dining operations are described accurately as they are established",
    "body": "Specific menus, providers and dietary arrangements are shared with enrolled families through official channels."
  },
  "related": [
    {
      "title": "Wellbeing",
      "to": "/student-life/wellbeing",
      "body": "Care for the whole learner."
    },
    {
      "title": "Health Services",
      "to": "/campus-experience/health-services",
      "body": "Care available on campus."
    },
    {
      "title": "Campus Overview",
      "to": "/campus-experience/overview",
      "body": "Every space serves the learner."
    }
  ],
  "cta": {
    "title": "Learn how daily life is organised.",
    "body": "Contact us with any questions about the school day.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/campus-experience",
      "label": "Campus overview"
    }
  }
};
