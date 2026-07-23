import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/admissions_/tuition-fees")({
  head: () => ({
    meta: [
      { title: "Tuition & Fees | Admissions | Lighthouse Campus" },
      { name: "description", content: "Tuition and fee information is shared directly with enquiring families so it can be discussed in context." },
      { property: "og:title", content: "Tuition & Fees | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "Tuition and fee information is shared directly with enquiring families so it can be discussed in context." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/admissions/tuition-fees" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/admissions/tuition-fees" }],
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
      "label": "Tuition & Fees"
    }
  ],
  "eyebrow": "Admissions / Tuition & Fees",
  "title": "Clear, transparent fee information is available on request.",
  "intro": "Tuition and fee information is shared directly with enquiring families so it can be discussed in context.",
  "blocks": [
    {
      "eyebrow": "Our Commitment",
      "title": "Transparency, in conversation",
      "body": [
        "Families receive a clear, written breakdown of tuition and any related fees when they enquire.",
        "Discussing fees in the context of an enquiry allows us to answer questions accurately for your child's year group."
      ]
    },
    {
      "eyebrow": "What To Expect",
      "title": "Clarity at every step",
      "bullets": [
        "written fee schedule",
        "clarity on what is included",
        "payment arrangements",
        "refund and withdrawal policy"
      ]
    }
  ],
  "status": {
    "label": "Detailed schedules are shared with enquiring families",
    "body": "Specific tuition amounts are not published publicly and are provided directly to families through the admissions team."
  },
  "related": [
    {
      "title": "Application Process",
      "to": "/admissions/application-process",
      "body": "The five-step journey."
    },
    {
      "title": "Scholarships",
      "to": "/admissions/scholarships",
      "body": "Support for exceptional applicants."
    },
    {
      "title": "FAQs",
      "to": "/admissions/faq",
      "body": "Common questions from families."
    }
  ],
  "cta": {
    "title": "Request a full fee schedule.",
    "body": "Contact the admissions team for a written breakdown.",
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
