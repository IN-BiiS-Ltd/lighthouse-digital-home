import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/research-reflection")({
  head: () => ({
    meta: [
      { title: "Research & Reflection | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Longer-form reflection on educational research and institutional practice." },
      { property: "og:title", content: "Research & Reflection | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Longer-form reflection on educational research and institutional practice." },
      { property: "og:url", content: "https://lighthousecampus.com/news/research-reflection" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/research-reflection" }],
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
      "label": "News & Insights",
      "to": "/news"
    },
    {
      "label": "Research & Reflection"
    }
  ],
  "eyebrow": "News & Insights / Research & Reflection",
  "title": "Longer-form thinking on education.",
  "intro": "Longer-form reflection on educational research and institutional practice.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section makes space for slower, more considered thinking about learning and the institution.",
        "Articles are added over time and shared through the wider Lighthouse digital ecosystem when published."
      ]
    },
    {
      "eyebrow": "Method and Honesty",
      "title": "Slow writing, stated limits",
      "body": [
        "Longer pieces show their reasoning: what was observed, what was tried and what remains uncertain.",
        "Institutional practice is reported honestly, including what has not yet worked."
      ]
    }
  ],
  "status": {
    "label": "Longer pieces are published a few times a year",
    "body": "This section moves deliberately slowly; publication follows the completion of real institutional work."
  },
  "related": [
    {
      "title": "Educational Insights",
      "to": "/news/educational-insights",
      "body": "Reflections on learning and teaching."
    },
    {
      "title": "Teacher Stories",
      "to": "/news/teacher-stories",
      "body": "The people who teach on campus."
    },
    {
      "title": "School News",
      "to": "/news/school-news",
      "body": "Institutional announcements and milestones."
    }
  ],
  "cta": {
    "title": "Read the longer thinking.",
    "body": "Contact us to receive longer-form pieces as they are published.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/news",
      "label": "News & Insights overview"
    }
  }
};
