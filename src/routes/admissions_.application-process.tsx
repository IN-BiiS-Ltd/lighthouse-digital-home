import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/admissions_/application-process")({
  head: () => ({
    meta: [
      { title: "Application Process | Admissions | Lighthouse Campus" },
      { name: "description", content: "Joining Lighthouse Campus is a deliberate process designed to know each family and each learner well." },
      { property: "og:title", content: "Application Process | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "Joining Lighthouse Campus is a deliberate process designed to know each family and each learner well." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/admissions/application-process" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/admissions/application-process" }],
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
      "label": "Application Process"
    }
  ],
  "eyebrow": "Admissions / Application Process",
  "title": "A considered, five-step journey into the community.",
  "intro": "Joining Lighthouse Campus is a deliberate process designed to know each family and each learner well.",
  "blocks": [
    {
      "eyebrow": "The Journey",
      "title": "Five clear steps",
      "bullets": [
        "1. Enquire",
        "2. Visit",
        "3. Apply",
        "4. Assessment & Meeting",
        "5. Offer & Enrolment"
      ]
    },
    {
      "eyebrow": "What Each Step Is For",
      "title": "Understanding, not filtering",
      "body": [
        "Each step in the journey is an opportunity for the family and the school to understand one another.",
        "The intention is a good fit for the learner, the family and the community."
      ]
    },
    {
      "eyebrow": "Timelines",
      "title": "A responsive approach",
      "body": [
        "Timelines are communicated clearly at each stage of the application.",
        "Families are supported by the admissions team throughout the process."
      ]
    }
  ],
  "related": [
    {
      "title": "Requirements",
      "to": "/admissions/requirements",
      "body": "What we invite families to prepare."
    },
    {
      "title": "Schedule a Visit",
      "to": "/admissions/schedule-a-visit",
      "body": "See the campus in person."
    },
    {
      "title": "FAQs",
      "to": "/admissions/faq",
      "body": "Common questions from families."
    }
  ],
  "cta": {
    "title": "Begin your enquiry.",
    "body": "We would be glad to hear from you and take the first step together.",
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
