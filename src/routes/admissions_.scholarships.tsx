import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/admissions_/scholarships")({
  head: () => ({
    meta: [
      { title: "Scholarships | Admissions | Lighthouse Campus" },
      { name: "description", content: "Lighthouse Campus recognises the value of scholarship programmes as part of a diverse, ambitious learning community." },
      { property: "og:title", content: "Scholarships | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "Lighthouse Campus recognises the value of scholarship programmes as part of a diverse, ambitious learning community." },
      { property: "og:url", content: "/admissions/scholarships" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/admissions/scholarships" }],
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
      "label": "Scholarships"
    }
  ],
  "eyebrow": "Admissions / Scholarships",
  "title": "Support for exceptional applicants, guided by considered policy.",
  "intro": "Lighthouse Campus recognises the value of scholarship programmes as part of a diverse, ambitious learning community.",
  "blocks": [
    {
      "eyebrow": "Our Position",
      "title": "A considered approach",
      "body": [
        "Any scholarship or financial support programme will be established with a clear policy, transparent criteria and a fair process.",
        "The commitment is to fairness and clarity rather than a broad promise made in advance."
      ]
    }
  ],
  "status": {
    "label": "A formal scholarship policy is developed as the institution matures",
    "body": "Specific scholarship criteria and amounts will be published once an approved institutional policy is in place. Families interested in support should contact the admissions team directly."
  },
  "related": [
    {
      "title": "Tuition & Fees",
      "to": "/admissions/tuition-fees",
      "body": "Clear, transparent fee information."
    },
    {
      "title": "Application Process",
      "to": "/admissions/application-process",
      "body": "The five-step journey."
    },
    {
      "title": "FAQs",
      "to": "/admissions/faq",
      "body": "Common questions from families."
    }
  ],
  "cta": {
    "title": "Speak with admissions.",
    "body": "We are glad to have an honest conversation about any support your family may need.",
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
