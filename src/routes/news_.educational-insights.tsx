import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/educational-insights")({
  head: () => ({
    meta: [
      { title: "Educational Insights | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Thinking pieces on learning, teaching, childhood and the wider educational conversation." },
      { property: "og:title", content: "Educational Insights | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Thinking pieces on learning, teaching, childhood and the wider educational conversation." },
      { property: "og:url", content: "https://lighthousecampus.com/news/educational-insights" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/educational-insights" }],
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
      "label": "Educational Insights"
    }
  ],
  "eyebrow": "News & Insights / Educational Insights",
  "title": "Reflections on learning, teaching and childhood.",
  "intro": "Thinking pieces on learning, teaching, childhood and the wider educational conversation.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section shares reflections from educators on what it means to teach and learn well.",
        "Articles are added over time and shared through the wider Lighthouse digital ecosystem when published."
      ]
    },
    {
      "eyebrow": "Editorial Approach",
      "title": "Ideas examined, not asserted",
      "body": [
        "Insight pieces set out an educational question, the thinking behind it and what it means in daily practice.",
        "Where evidence is cited, its source and its limits are stated."
      ]
    }
  ],
  "status": {
    "label": "Essays are published as the thinking matures",
    "body": "Pieces appear here when they are genuinely ready — depth is preferred to frequency."
  },
  "related": [
    {
      "title": "Research & Reflection",
      "to": "/news/research-reflection",
      "body": "Longer-form institutional thinking."
    },
    {
      "title": "Teacher Stories",
      "to": "/news/teacher-stories",
      "body": "The people who teach on campus."
    },
    {
      "title": "Parent Guides",
      "to": "/news/parent-guides",
      "body": "Practical guides for families."
    }
  ],
  "cta": {
    "title": "Follow the thinking behind the school.",
    "body": "Contact us to be notified when new insight pieces are published.",
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
