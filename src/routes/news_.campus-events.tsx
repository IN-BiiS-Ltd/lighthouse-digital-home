import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/campus-events")({
  head: () => ({
    meta: [
      { title: "Campus Events | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Reports and reflections on public and community moments across the school year." },
      { property: "og:title", content: "Campus Events | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Reports and reflections on public and community moments across the school year." },
      { property: "og:url", content: "/news/campus-events" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/news/campus-events" }],
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
      "label": "Campus Events"
    }
  ],
  "eyebrow": "News & Insights / Campus Events",
  "title": "Public updates on campus moments.",
  "intro": "Reports and reflections on public and community moments across the school year.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section captures the moments that give the school year its rhythm.",
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
