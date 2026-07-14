import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/admissions_/apply-online")({
  head: () => ({
    meta: [
      { title: "Apply Online | Admissions | Lighthouse Campus" },
      { name: "description", content: "An online application experience is being developed as part of the wider digital ecosystem." },
      { property: "og:title", content: "Apply Online | Admissions | Lighthouse Campus" },
      { property: "og:description", content: "An online application experience is being developed as part of the wider digital ecosystem." },
      { property: "og:url", content: "/admissions/apply-online" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/admissions/apply-online" }],
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
      "label": "Apply Online"
    }
  ],
  "eyebrow": "Admissions / Apply Online",
  "title": "Online application, in development.",
  "intro": "An online application experience is being developed as part of the wider digital ecosystem.",
  "blocks": [
    {
      "eyebrow": "How Applications Are Handled Today",
      "title": "A personal admissions process",
      "body": [
        "Applications are currently handled personally by the admissions team.",
        "This ensures that every family is guided through the journey with care and clarity."
      ]
    }
  ],
  "status": {
    "label": "In development",
    "body": "An online application system is planned as part of the Lighthouse digital ecosystem. Until it is available, all applications are handled through the admissions team directly."
  },
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
      "title": "Digital Ecosystem",
      "to": "/explore/digital-ecosystem",
      "body": "Connected services around the learner."
    }
  ],
  "cta": {
    "title": "Begin your application today.",
    "body": "Contact the admissions team to start the journey.",
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
