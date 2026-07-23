import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/admissions_/schedule-a-visit")({
  head: () => ({
    meta: [
      { title: "Schedule a Visit | Admissions | Lighthouse Campus" },
      { name: "description", content: "A visit is the clearest way to understand life at Lighthouse Campus." },
      { property: "og:title", content: "Schedule a Visit | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "A visit is the clearest way to understand life at Lighthouse Campus." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/admissions/schedule-a-visit" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/admissions/schedule-a-visit" }],
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
      "label": "Schedule a Visit"
    }
  ],
  "eyebrow": "Admissions / Schedule a Visit",
  "title": "See the campus in person.",
  "intro": "A visit is the clearest way to understand life at Lighthouse Campus.",
  "blocks": [
    {
      "eyebrow": "What A Visit Includes",
      "title": "A considered, unhurried experience",
      "bullets": [
        "a walk through the campus",
        "time with a member of the admissions team",
        "an opportunity to ask questions",
        "information about the application journey"
      ]
    },
    {
      "eyebrow": "How To Arrange",
      "title": "A simple next step",
      "body": [
        "Visits are arranged individually so that each family receives the attention it deserves.",
        "Contact the admissions team to arrange a time that suits your family."
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
      "title": "Requirements",
      "to": "/admissions/requirements",
      "body": "What we invite families to prepare."
    },
    {
      "title": "FAQs",
      "to": "/admissions/faq",
      "body": "Common questions from families."
    }
  ],
  "cta": {
    "title": "Request a visit.",
    "body": "We would be glad to welcome your family to campus.",
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
