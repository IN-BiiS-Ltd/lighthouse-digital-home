import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/transportation")({
  head: () => ({
    meta: [
      { title: "Transportation | Campus | Lighthouse Campus" },
      { name: "description", content: "Getting to and from school is part of a family's daily experience. It is treated with the same care as life on campus." },
      { property: "og:title", content: "Transportation | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Getting to and from school is part of a family's daily experience. It is treated with the same care as life on campus." },
      { property: "og:url", content: "/campus-experience/transportation" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/transportation" }],
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
      "label": "Transportation"
    }
  ],
  "eyebrow": "Campus / Transportation",
  "title": "Safe, considered journeys to and from campus.",
  "intro": "Getting to and from school is part of a family's daily experience. It is treated with the same care as life on campus.",
  "blocks": [
    {
      "eyebrow": "Approach",
      "title": "A considered approach to school journeys",
      "body": [
        "Transportation arrangements are designed with safety, reliability and the family experience in mind.",
        "Specific routes and providers are communicated accurately as they are established."
      ]
    }
  ],
  "status": {
    "label": "Route information is developed as the campus grows",
    "body": "Specific bus routes, timings and providers are shared directly with enrolled families and are not published publicly until confirmed."
  },
  "related": [
    {
      "title": "Safety",
      "to": "/campus-experience/safety",
      "body": "A safe, orderly campus."
    },
    {
      "title": "Parent Partnership",
      "to": "/parents/parent-partnership",
      "body": "Home and school together."
    },
    {
      "title": "Communication",
      "to": "/parents/communication",
      "body": "How families and school stay in touch."
    }
  ],
  "cta": {
    "title": "Ask about your family's journey.",
    "body": "Contact us to discuss arrangements for your family.",
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
