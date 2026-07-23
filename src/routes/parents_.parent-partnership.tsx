import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/parent-partnership")({
  head: () => ({
    meta: [
      { title: "Parent Partnership | Parents | Lighthouse Campus" },
      { name: "description", content: "At Lighthouse Campus, families are partners in a child's education — not spectators of it." },
      { property: "og:title", content: "Parent Partnership | Parents | Lighthouse Campus" },
      { property: "og:description", content: "At Lighthouse Campus, families are partners in a child's education — not spectators of it." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/parents/parent-partnership" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/parents/parent-partnership" }],
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
      "label": "Parent Partnership"
    }
  ],
  "eyebrow": "Parents / Parent Partnership",
  "title": "Families as educational partners.",
  "intro": "At Lighthouse Campus, families are partners in a child's education — not spectators of it.",
  "blocks": [
    {
      "eyebrow": "The Principle",
      "title": "Home and school, working together",
      "body": [
        "Each family brings deep knowledge of their child.",
        "Each teacher brings deep knowledge of learning.",
        "Together, home and school support the learner in a coherent, respectful partnership."
      ]
    },
    {
      "eyebrow": "What Partnership Requires",
      "title": "Everyday commitments on both sides",
      "bullets": [
        "clear, respectful communication",
        "shared understanding of the learner",
        "honesty about challenges",
        "celebration of progress",
        "cooperation on expectations",
        "time to listen well"
      ]
    }
  ],
  "related": [
    {
      "title": "Communication",
      "to": "/parents/communication",
      "body": "How families and school stay in touch."
    },
    {
      "title": "Parent Journey",
      "to": "/parents/parent-journey",
      "body": "How the relationship begins and develops."
    },
    {
      "title": "Family Engagement",
      "to": "/parents/family-engagement",
      "body": "Ways to be part of school life."
    }
  ],
  "cta": {
    "title": "A relationship that begins at enquiry.",
    "body": "Speak with us about how families and school work together at Lighthouse Campus.",
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
