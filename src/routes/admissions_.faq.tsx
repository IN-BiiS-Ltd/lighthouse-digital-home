import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/admissions_/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Admissions | Lighthouse Campus" },
      { name: "description", content: "A short set of common questions. For anything specific to your family, please contact admissions directly." },
      { property: "og:title", content: "FAQs | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "A short set of common questions. For anything specific to your family, please contact admissions directly." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/admissions/faq" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/admissions/faq" }],
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
      "label": "FAQs"
    }
  ],
  "eyebrow": "Admissions / Frequently Asked Questions",
  "title": "Common questions from families.",
  "intro": "A short set of common questions. For anything specific to your family, please contact admissions directly.",
  "blocks": [
    {
      "eyebrow": "Applying",
      "title": "How does the process work?",
      "body": [
        "Applications follow the five-step journey: Enquire, Visit, Apply, Assessment & Meeting, Offer & Enrolment.",
        "The admissions team supports families at each stage."
      ]
    },
    {
      "eyebrow": "Timing",
      "title": "When should we apply?",
      "body": [
        "Applications are considered on a rolling basis while places are available for a given year group.",
        "Specific timelines and deadlines are communicated directly to enquiring families."
      ]
    },
    {
      "eyebrow": "Fees",
      "title": "How are fees communicated?",
      "body": [
        "Clear, transparent fee information is available on request from the admissions team.",
        "Detailed schedules are shared with enquiring families rather than published publicly."
      ]
    },
    {
      "eyebrow": "Visits",
      "title": "Can we visit the campus?",
      "body": [
        "Yes. Campus visits are an important part of the journey and are arranged by request.",
        "See Schedule a Visit or contact admissions to plan yours."
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
      "title": "Schedule a Visit",
      "to": "/admissions/schedule-a-visit",
      "body": "See the campus in person."
    },
    {
      "title": "Requirements",
      "to": "/admissions/requirements",
      "body": "What we invite families to prepare."
    }
  ],
  "cta": {
    "title": "Have a question not answered here?",
    "body": "Contact admissions and we will respond.",
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
