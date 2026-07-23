import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/school-policies")({
  head: () => ({
    meta: [
      { title: "School Policies | Parents | Lighthouse Campus" },
      { name: "description", content: "School policies exist to protect learners, guide the community and make expectations clear." },
      { property: "og:title", content: "School Policies | Parents | Lighthouse Campus" },
      { property: "og:description", content: "School policies exist to protect learners, guide the community and make expectations clear." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/parents/school-policies" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/parents/school-policies" }],
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
      "label": "School Policies"
    }
  ],
  "eyebrow": "Parents / School Policies",
  "title": "The framework that supports daily life on campus.",
  "intro": "School policies exist to protect learners, guide the community and make expectations clear.",
  "blocks": [
    {
      "eyebrow": "How Policies Are Used",
      "title": "Practical, not bureaucratic",
      "body": [
        "Policies at Lighthouse Campus are written to serve learners, families and educators — not to complicate them.",
        "They set out clear expectations for behaviour, safeguarding, communication and daily operations."
      ]
    },
    {
      "eyebrow": "How They Are Shared",
      "title": "Available where families need them",
      "body": [
        "Key policies are shared with families as part of enrolment and are available on request through official channels.",
        "As the campus grows, the policy library is developed and maintained."
      ]
    }
  ],
  "status": {
    "label": "Policy library develops with the institution",
    "body": "Specific policies are shared with enrolled families in writing. A published policy area is developed as part of the wider digital ecosystem."
  },
  "related": [
    {
      "title": "Governance",
      "to": "/about/governance",
      "body": "Long-term stewardship of educational purpose."
    },
    {
      "title": "Safety",
      "to": "/campus-experience/safety",
      "body": "A safe and orderly campus."
    },
    {
      "title": "Family Resources",
      "to": "/parents/family-resources",
      "body": "Practical support for families."
    }
  ],
  "cta": {
    "title": "Request a policy.",
    "body": "Contact the school if you need a specific policy for your family.",
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
