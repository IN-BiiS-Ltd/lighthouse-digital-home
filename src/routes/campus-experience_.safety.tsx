import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/safety")({
  head: () => ({
    meta: [
      { title: "Safety | Campus | Lighthouse Campus" },
      { name: "description", content: "Safety is a foundation, not a feature. It is expressed through design, procedures and daily behaviour across the campus." },
      { property: "og:title", content: "Safety | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Safety is a foundation, not a feature. It is expressed through design, procedures and daily behaviour across the campus." },
      { property: "og:url", content: "/campus-experience/safety" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/safety" }],
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
      "label": "Safety"
    }
  ],
  "eyebrow": "Campus / Safety",
  "title": "A safe, orderly and cared-for campus.",
  "intro": "Safety is a foundation, not a feature. It is expressed through design, procedures and daily behaviour across the campus.",
  "blocks": [
    {
      "eyebrow": "Approach",
      "title": "Safety as everyone's responsibility",
      "body": [
        "A safe campus is built through thoughtful design, clear procedures and a shared culture of care.",
        "Adults on campus are responsible for creating this environment; learners are trusted to help sustain it."
      ]
    },
    {
      "eyebrow": "What This Looks Like",
      "title": "Everyday commitments",
      "bullets": [
        "controlled access to campus",
        "clear procedures",
        "adults present in shared spaces",
        "respectful behaviour between learners",
        "cared-for facilities",
        "regular review and improvement"
      ]
    }
  ],
  "related": [
    {
      "title": "Health Services",
      "to": "/campus-experience/health-services",
      "body": "Care available on campus."
    },
    {
      "title": "Transportation",
      "to": "/campus-experience/transportation",
      "body": "Safe and considered journeys."
    },
    {
      "title": "School Policies",
      "to": "/parents/school-policies",
      "body": "The framework that supports daily life."
    }
  ],
  "cta": {
    "title": "Peace of mind for families.",
    "body": "Contact us with any question about how the campus is run.",
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
