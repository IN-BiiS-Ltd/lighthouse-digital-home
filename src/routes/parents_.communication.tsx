import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/communication")({
  head: () => ({
    meta: [
      { title: "Communication | Parents | Lighthouse Campus" },
      { name: "description", content: "How the school and families talk to one another matters as much as what is said." },
      { property: "og:title", content: "Communication | Parents | Lighthouse Campus" },
      { property: "og:description", content: "How the school and families talk to one another matters as much as what is said." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/parents/communication" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/parents/communication" }],
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
      "label": "Communication"
    }
  ],
  "eyebrow": "Parents / Communication",
  "title": "Clear, respectful communication between families and school.",
  "intro": "How the school and families talk to one another matters as much as what is said.",
  "blocks": [
    {
      "eyebrow": "Principles",
      "title": "How we communicate",
      "bullets": [
        "respect at all times",
        "clarity over jargon",
        "timely information",
        "honest about challenges",
        "confidentiality where needed",
        "open channels to raise concerns"
      ]
    },
    {
      "eyebrow": "Channels",
      "title": "Ways families and school stay connected",
      "body": [
        "Regular communications keep families informed about learning, community life and practical arrangements.",
        "One-to-one conversations are always available when families need them."
      ]
    }
  ],
  "related": [
    {
      "title": "Parent Partnership",
      "to": "/parents/parent-partnership",
      "body": "Families as educational partners."
    },
    {
      "title": "Parent Portal",
      "to": "/parents/parent-portal",
      "body": "Family-facing digital tools."
    },
    {
      "title": "Family Resources",
      "to": "/parents/family-resources",
      "body": "Useful information for families."
    }
  ],
  "cta": {
    "title": "Have a question?",
    "body": "Contact us — we are glad to talk.",
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
