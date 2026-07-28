import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/school-news")({
  head: () => ({
    meta: [
      { title: "School News | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Formal announcements, milestones and updates from Lighthouse Campus." },
      { property: "og:title", content: "School News | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Formal announcements, milestones and updates from Lighthouse Campus." },
      { property: "og:url", content: "https://lighthousecampus.com/news/school-news" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/school-news" }],
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
      "title": "News you can rely on",
      "body": [
        "Institutional news is verified before publication and written plainly, without promotional language.",
        "Announcements state what has been decided, when it takes effect and who it affects."
      ]
    }
  ],
  "status": {
    "label": "Announcements are published as decisions are confirmed",
    "body": "Notices appear here once they are formally approved. Time-sensitive announcements are also shared with families directly."
  },
  "related": [
    {
      "title": "Educational Insights",
      "to": "/news/educational-insights",
      "body": "Reflections on learning and teaching."
    },
    {
      "title": "Campus Events",
      "to": "/news/campus-events",
      "body": "Public moments across the school year."
    },
    {
      "title": "Community Stories",
      "to": "/news/community-stories",
      "body": "The campus in its community."
    }
  ],
  "cta": {
    "title": "Stay informed about the school.",
    "body": "Contact us to receive institutional announcements as they are published.",
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
