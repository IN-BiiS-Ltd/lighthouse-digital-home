import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/health-services")({
  head: () => ({
    meta: [
      { title: "Health Services | Campus | Lighthouse Campus" },
      { name: "description", content: "Health services support the everyday wellbeing of learners and complement the pastoral life of the campus." },
      { property: "og:title", content: "Health Services | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Health services support the everyday wellbeing of learners and complement the pastoral life of the campus." },
      { property: "og:url", content: "/campus-experience/health-services" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/health-services" }],
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
      "label": "Campus",
      "to": "/campus-experience"
    },
    {
      "label": "Health Services"
    }
  ],
  "eyebrow": "Campus / Health Services",
  "title": "Care available on campus, aligned with wellbeing.",
  "intro": "Health services support the everyday wellbeing of learners and complement the pastoral life of the campus.",
  "blocks": [
    {
      "eyebrow": "Approach",
      "title": "Care, not just response",
      "body": [
        "Health services are part of a broader commitment to care.",
        "They work alongside pastoral, academic and family support so that a learner's needs are seen as a whole."
      ]
    }
  ],
  "status": {
    "label": "Health services are described accurately as they are established",
    "body": "Specific medical services and staffing are communicated to enrolled families through official school communications."
  },
  "related": [
    {
      "title": "Wellbeing",
      "to": "/student-life/wellbeing",
      "body": "Care for the whole learner."
    },
    {
      "title": "Safety",
      "to": "/campus-experience/safety",
      "body": "A safe and orderly campus."
    },
    {
      "title": "Parent Partnership",
      "to": "/parents/parent-partnership",
      "body": "Home and school together."
    }
  ],
  "cta": {
    "title": "Ask us any question.",
    "body": "We are glad to describe how care is organised on campus.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/campus-experience",
      "label": "Campus overview"
    }
  }
};
