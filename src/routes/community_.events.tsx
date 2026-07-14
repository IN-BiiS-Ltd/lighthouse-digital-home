import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/community_/events")({
  head: () => ({
    meta: [
      { title: "Events | Community | Lighthouse Campus" },
      { name: "description", content: "Community events invite families, partners and neighbours into the life of the campus." },
      { property: "og:title", content: "Events | Community | Lighthouse Campus" },
      { property: "og:description", content: "Community events invite families, partners and neighbours into the life of the campus." },
      { property: "og:url", content: "/community/events" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/community/events" }],
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
      "label": "Community",
      "to": "/community"
    },
    {
      "label": "Events"
    }
  ],
  "eyebrow": "Community / Events",
  "title": "Public moments that bring the community together.",
  "intro": "Community events invite families, partners and neighbours into the life of the campus.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "A campus visible to its community",
      "body": [
        "Community events are opportunities for the wider community to experience the values and voice of Lighthouse Campus.",
        "They are also opportunities for learners to represent and shape the community they belong to."
      ]
    }
  ],
  "status": {
    "label": "Events are published as they are confirmed",
    "body": "Specific public event dates are shared through official channels as they are confirmed."
  },
  "related": [
    {
      "title": "Events",
      "to": "/student-life/events",
      "body": "Rituals that hold a community together."
    },
    {
      "title": "Campus Events",
      "to": "/news/campus-events",
      "body": "Public updates on campus moments."
    },
    {
      "title": "Community Programmes",
      "to": "/community/community-programmes",
      "body": "Ongoing contribution."
    }
  ],
  "cta": {
    "title": "Stay in touch with campus life.",
    "body": "Contact us to be kept informed about upcoming events.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/community",
      "label": "Community overview"
    }
  }
};
