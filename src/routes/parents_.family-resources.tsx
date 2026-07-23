import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/family-resources")({
  head: () => ({
    meta: [
      { title: "Family Resources | Parents | Lighthouse Campus" },
      { name: "description", content: "Resources for families are designed to support the everyday life of school — clearly, respectfully and practically." },
      { property: "og:title", content: "Family Resources | Parents | Lighthouse Campus" },
      { property: "og:description", content: "Resources for families are designed to support the everyday life of school — clearly, respectfully and practically." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/parents/family-resources" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/parents/family-resources" }],
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
      "label": "Family Resources"
    }
  ],
  "eyebrow": "Parents / Family Resources",
  "title": "Useful information to support family life around school.",
  "intro": "Resources for families are designed to support the everyday life of school — clearly, respectfully and practically.",
  "blocks": [
    {
      "eyebrow": "What Resources Include",
      "title": "Practical support",
      "bullets": [
        "induction and orientation guides",
        "school year information",
        "policy summaries",
        "learning support information",
        "how to raise concerns",
        "how to give feedback"
      ]
    },
    {
      "eyebrow": "Approach",
      "title": "Clear over comprehensive",
      "body": [
        "Family resources aim to be clear rather than exhaustive.",
        "Where families need more than a written resource can offer, the school is always available in person."
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
      "title": "School Policies",
      "to": "/parents/school-policies",
      "body": "The framework that supports daily life."
    },
    {
      "title": "Parent Partnership",
      "to": "/parents/parent-partnership",
      "body": "Families as educational partners."
    }
  ],
  "cta": {
    "title": "Ask us for what you need.",
    "body": "Contact the school with any question about family life on campus.",
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
