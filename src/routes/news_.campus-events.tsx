import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/campus-events")({
  head: () => ({
    meta: [
      { title: "Campus Events | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Reports and reflections on public and community moments across the school year." },
      { property: "og:title", content: "Campus Events | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Reports and reflections on public and community moments across the school year." },
      { property: "og:url", content: "https://lighthousecampus.com/news/campus-events" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/campus-events" }],
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
      "eyebrow": "Coverage",
      "title": "How events are reported",
      "body": [
        "Event reports describe what took place, who took part and what the moment meant for the community.",
        "Photography follows the same consent rules that apply to student stories."
      ]
    }
  ],
  "status": {
    "label": "Reports follow the calendar of the school year",
    "body": "Coverage is published after each significant campus moment, alongside upcoming dates for families."
  },
  "related": [
    {
      "title": "Community Stories",
      "to": "/news/community-stories",
      "body": "The campus in its community."
    },
    {
      "title": "Student Stories",
      "to": "/news/student-stories",
      "body": "Voices from the campus."
    },
    {
      "title": "School News",
      "to": "/news/school-news",
      "body": "Institutional announcements and milestones."
    }
  ],
  "cta": {
    "title": "Follow the school year.",
    "body": "Contact us to receive reports and dates for upcoming campus moments.",
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
