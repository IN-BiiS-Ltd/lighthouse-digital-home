import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/community-stories")({
  head: () => ({
    meta: [
      { title: "Community Stories | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Stories of the campus in relationship with its wider community." },
      { property: "og:title", content: "Community Stories | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Stories of the campus in relationship with its wider community." },
      { property: "og:url", content: "https://lighthousecampus.com/news/community-stories" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/community-stories" }],
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
      "label": "Community Stories"
    }
  ],
  "eyebrow": "News & Insights / Community Stories",
  "title": "How the campus meets its community.",
  "intro": "Stories of the campus in relationship with its wider community.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section presents the campus in its context — connected to families, neighbours and partners.",
        "Articles are added over time and shared through the wider Lighthouse digital ecosystem when published."
      ]
    },
    {
      "eyebrow": "Perspective",
      "title": "How community stories are gathered",
      "body": [
        "These stories are told with partners, neighbours and families, in their own words wherever possible.",
        "The school appears in them as one participant in a wider community, not the centre of it."
      ]
    }
  ],
  "status": {
    "label": "Stories are published as relationships develop",
    "body": "Community coverage grows with the partnerships and neighbourhood work it describes."
  },
  "related": [
    {
      "title": "Campus Events",
      "to": "/news/campus-events",
      "body": "Public moments across the school year."
    },
    {
      "title": "Parent Guides",
      "to": "/news/parent-guides",
      "body": "Practical guides for families."
    },
    {
      "title": "School News",
      "to": "/news/school-news",
      "body": "Institutional announcements and milestones."
    }
  ],
  "cta": {
    "title": "See the campus in its community.",
    "body": "Contact us to follow community stories as they are published.",
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
