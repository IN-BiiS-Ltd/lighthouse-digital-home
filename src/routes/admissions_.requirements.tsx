import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/admissions_/requirements")({
  head: () => ({
    meta: [
      { title: "Requirements | Admissions | Lighthouse Campus" },
      { name: "description", content: "The requirements below help the admissions team understand the learner and the family." },
      { property: "og:title", content: "Requirements | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "The requirements below help the admissions team understand the learner and the family." },
      { property: "og:url", content: "/admissions/requirements" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/admissions/requirements" }],
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
      "label": "Admissions",
      "to": "/admissions"
    },
    {
      "label": "Requirements"
    }
  ],
  "eyebrow": "Admissions / Requirements",
  "title": "What we invite families to prepare.",
  "intro": "The requirements below help the admissions team understand the learner and the family.",
  "blocks": [
    {
      "eyebrow": "For the Enquiry",
      "title": "How the conversation begins",
      "bullets": [
        "parent contact details",
        "learner's current year group",
        "preferred campus",
        "any specific questions or needs"
      ]
    },
    {
      "eyebrow": "For the Application",
      "title": "Documents that help us know the learner",
      "body": [
        "Families are guided through the required documents at the appropriate stage of the application.",
        "Requirements are shared clearly in writing so nothing is left to guesswork."
      ]
    },
    {
      "eyebrow": "Assessment & Meeting",
      "title": "A conversation, not an interrogation",
      "body": [
        "The assessment and meeting stage is designed to understand the learner and to allow the family to understand the school.",
        "Age-appropriate approaches are used at each stage of learning."
      ]
    }
  ],
  "related": [
    {
      "title": "Application Process",
      "to": "/admissions/application-process",
      "body": "The five-step journey."
    },
    {
      "title": "FAQs",
      "to": "/admissions/faq",
      "body": "Common questions from families."
    },
    {
      "title": "Tuition & Fees",
      "to": "/admissions/tuition-fees",
      "body": "Clear, transparent fee information."
    }
  ],
  "cta": {
    "title": "Speak with admissions.",
    "body": "We are glad to walk you through requirements for your child's year group.",
    "primary": {
      "to": "/contact",
      "label": "Contact admissions"
    },
    "secondary": {
      "to": "/admissions",
      "label": "Admissions overview"
    }
  }
};
