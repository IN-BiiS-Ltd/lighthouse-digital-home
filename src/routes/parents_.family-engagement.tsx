import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/family-engagement")({
  head: () => ({
    meta: [
      { title: "Family Engagement | Parents | Lighthouse Campus" },
      { name: "description", content: "Families are welcome to be part of school life in ways that are meaningful and appropriate." },
      { property: "og:title", content: "Family Engagement | Parents | Lighthouse Campus" },
      { property: "og:description", content: "Families are welcome to be part of school life in ways that are meaningful and appropriate." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/parents/family-engagement" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/parents/family-engagement" }],
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
      "label": "Family Engagement"
    }
  ],
  "eyebrow": "Parents / Family Engagement",
  "title": "Ways to be part of school life.",
  "intro": "Families are welcome to be part of school life in ways that are meaningful and appropriate.",
  "blocks": [
    {
      "eyebrow": "How Families Contribute",
      "title": "Considered, respectful engagement",
      "bullets": [
        "community events",
        "family workshops",
        "supporting classroom projects when invited",
        "celebrating cultural moments",
        "contributing time and expertise",
        "being present at key milestones"
      ]
    },
    {
      "eyebrow": "Principle",
      "title": "Contribution, not intrusion",
      "body": [
        "Family engagement is designed to support the learner and the community, not to blur the responsibilities of educators.",
        "Boundaries are respectful in both directions."
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
      "title": "Community & Belonging",
      "to": "/student-life/community-belonging",
      "body": "Life shared beyond lessons."
    },
    {
      "title": "Events",
      "to": "/student-life/events",
      "body": "Moments that mark the school year."
    }
  ],
  "cta": {
    "title": "Come and be part of it.",
    "body": "Contact the school for ways to contribute to campus life.",
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
