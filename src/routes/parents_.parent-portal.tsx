import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/parent-portal")({
  head: () => ({
    meta: [
      { title: "Parent Portal | Parents | Lighthouse Campus" },
      { name: "description", content: "A dedicated parent portal is planned as part of the Lighthouse digital ecosystem." },
      { property: "og:title", content: "Parent Portal | Parents | Lighthouse Campus" },
      { property: "og:description", content: "A dedicated parent portal is planned as part of the Lighthouse digital ecosystem." },
      { property: "og:url", content: "/parents/parent-portal" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/parents/parent-portal" }],
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
      "label": "Parents",
      "to": "/parents"
    },
    {
      "label": "Parent Portal"
    }
  ],
  "eyebrow": "Parents / Parent Portal",
  "title": "A family-facing portal, in development.",
  "intro": "A dedicated parent portal is planned as part of the Lighthouse digital ecosystem.",
  "blocks": [
    {
      "eyebrow": "Intention",
      "title": "A single, respectful place for family information",
      "body": [
        "The parent portal is designed to bring family communications, calendars and learning updates into one respectful, private place.",
        "It will complement — not replace — the personal relationship between families and the school."
      ]
    }
  ],
  "status": {
    "label": "In development",
    "body": "The parent portal is planned as part of the Lighthouse Campus digital ecosystem. Until it is available, families remain in direct contact with the school and the admissions team."
  },
  "related": [
    {
      "title": "Communication",
      "to": "/parents/communication",
      "body": "How families and school stay in touch."
    },
    {
      "title": "Digital Ecosystem",
      "to": "/explore/digital-ecosystem",
      "body": "Connected services around the learner."
    },
    {
      "title": "Family Resources",
      "to": "/parents/family-resources",
      "body": "Useful information for families."
    }
  ],
  "cta": {
    "title": "Stay in touch in the meantime.",
    "body": "Contact the school directly with any question about your child.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/parents",
      "label": "Parents overview"
    }
  }
};
