import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/community_/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni | Community | Lighthouse Campus" },
      { name: "description", content: "Lighthouse Campus is at the beginning of its story. The alumni community described here is the one we are preparing to welcome." },
      { property: "og:title", content: "Alumni | Community | Lighthouse Campus" },
      { property: "og:description", content: "Lighthouse Campus is at the beginning of its story. The alumni community described here is the one we are preparing to welcome." },
      { property: "og:url", content: "/community/alumni" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/community/alumni" }],
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
      "label": "Alumni"
    }
  ],
  "eyebrow": "Community / Alumni",
  "title": "The future Lighthouse alumni community.",
  "intro": "Lighthouse Campus is at the beginning of its story. The alumni community described here is the one we are preparing to welcome.",
  "blocks": [
    {
      "eyebrow": "How We Think About Alumni",
      "title": "Graduates as long-term partners",
      "body": [
        "Graduates of Lighthouse Campus will remain part of the institution long after they leave its classrooms.",
        "The intention is a relationship of mutual respect and long-term contribution — not a mailing list."
      ]
    },
    {
      "eyebrow": "What We Are Preparing",
      "title": "Structures for a lifelong community",
      "bullets": [
        "a place for graduates to remain connected",
        "opportunities to contribute to current learners",
        "invitations to campus moments",
        "channels for continued dialogue"
      ]
    }
  ],
  "status": {
    "label": "An alumni community forms with the first graduating cohort",
    "body": "Lighthouse Campus does not yet have graduates. The alumni community is being designed so that it is ready when the first cohort completes their journey."
  },
  "related": [
    {
      "title": "Graduation Pathways",
      "to": "/learning-journey/graduation-pathways",
      "body": "Where the learning journey leads."
    },
    {
      "title": "Partnerships",
      "to": "/community/partnerships",
      "body": "Values-aligned relationships."
    },
    {
      "title": "Community Programmes",
      "to": "/community/community-programmes",
      "body": "How the campus contributes."
    }
  ],
  "cta": {
    "title": "Follow the story from the beginning.",
    "body": "Stay in touch to see how the community grows.",
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
