import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/school-news")({
  head: () => ({
    meta: [
      { title: "School News | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Formal announcements, milestones and updates from Lighthouse Campus." },
      { property: "og:title", content: "School News | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Formal announcements, milestones and updates from Lighthouse Campus." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/news/school-news" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/news/school-news" }],
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
      "label": "School News"
    }
  ],
  "eyebrow": "News & Insights / School News",
  "title": "School news and institutional milestones.",
  "intro": "Formal announcements, milestones and updates from Lighthouse Campus.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section brings together institutional news — the moments that mark the life of the school as a whole.",
        "Articles are added over time and shared through the wider Lighthouse digital ecosystem when published."
      ]
    },
    {
      "eyebrow": "Editorial Standards",
      "title": "How we write",
      "bullets": [
        "truthful and verified",
        "respectful of learners and families",
        "clear over clever",
        "reflective, not promotional",
        "aligned with institutional values",
        "useful to readers"
      ]
    }
  ],
  "status": {
    "label": "Articles are published as they are ready",
    "body": "Article listings appear here once approved editorial content is published. Categories, tags and reading time are supported by the article template."
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
      "body": "Reflections on learning."
    },
    {
      "title": "Student Stories",
      "to": "/news/student-stories",
      "body": "Voices from the campus."
    }
  ],
  "cta": {
    "title": "Follow the story of the campus.",
    "body": "Contact us to be kept in touch as new articles are published.",
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
