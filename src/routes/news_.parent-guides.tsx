import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/parent-guides")({
  head: () => ({
    meta: [
      { title: "Parent Guides | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Practical guides written to support families through the school year." },
      { property: "og:title", content: "Parent Guides | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Practical guides written to support families through the school year." },
      { property: "og:url", content: "https://lighthousecampus.com/news/parent-guides" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/parent-guides" }],
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
      "label": "Parent Guides"
    }
  ],
  "eyebrow": "News & Insights / Parent Guides",
  "title": "Practical guides for families.",
  "intro": "Practical guides written to support families through the school year.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section offers clear, useful guidance on common questions and moments in family life around school.",
        "Articles are added over time and shared through the wider Lighthouse digital ecosystem when published."
      ]
    },
    {
      "eyebrow": "How Guides Are Built",
      "title": "Practical, checked and dated",
      "body": [
        "Each guide answers one recurring family question with concrete steps rather than general advice.",
        "Guides carry a review date and are updated when school practice changes."
      ]
    }
  ],
  "status": {
    "label": "Guides are released ahead of the moments they support",
    "body": "A guide is published before the point in the year at which families need it, then reviewed annually."
  },
  "related": [
    {
      "title": "School News",
      "to": "/news/school-news",
      "body": "Institutional announcements and milestones."
    },
    {
      "title": "Educational Insights",
      "to": "/news/educational-insights",
      "body": "Reflections on learning and teaching."
    },
    {
      "title": "Community Stories",
      "to": "/news/community-stories",
      "body": "The campus in its community."
    }
  ],
  "cta": {
    "title": "Support for families, in one place.",
    "body": "Contact us to be notified when new family guides are published.",
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
