import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/community_/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Community | Lighthouse Campus" },
      { name: "description", content: "Careers at Lighthouse Campus are for people who take teaching, learning and community life seriously." },
      { property: "og:title", content: "Careers | Community | Lighthouse Campus" },
      { property: "og:description", content: "Careers at Lighthouse Campus are for people who take teaching, learning and community life seriously." },
      { property: "og:url", content: "/community/careers" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/community/careers" }],
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
      "label": "Careers"
    }
  ],
  "eyebrow": "Community / Careers",
  "title": "Working at Lighthouse Campus.",
  "intro": "Careers at Lighthouse Campus are for people who take teaching, learning and community life seriously.",
  "blocks": [
    {
      "eyebrow": "Who We Look For",
      "title": "Educators, not employees",
      "body": [
        "Lighthouse Campus is built by people who see education as meaningful work.",
        "Colleagues share a commitment to learners, to craft and to the long-term development of the institution."
      ]
    },
    {
      "eyebrow": "How We Grow",
      "title": "An institution that develops its people",
      "body": [
        "Professional growth is treated as an institutional responsibility, not an individual favour.",
        "Educators are supported to develop through mentorship, collaboration and thoughtful practice."
      ]
    }
  ],
  "status": {
    "label": "Vacancies are shared as they are confirmed",
    "body": "Specific job openings and application procedures are published through official channels only when they are formally open."
  },
  "related": [
    {
      "title": "Working at Lighthouse",
      "to": "/careers",
      "body": "The full careers area."
    },
    {
      "title": "Governance",
      "to": "/about/governance",
      "body": "Long-term stewardship of educational purpose."
    },
    {
      "title": "Community Overview",
      "to": "/community",
      "body": "One community, considered relationships."
    }
  ],
  "cta": {
    "title": "Interested in joining us?",
    "body": "Contact us to introduce yourself and hear when suitable roles open.",
    "primary": {
      "to": "/careers",
      "label": "Careers area"
    },
    "secondary": {
      "to": "/contact",
      "label": "Get in touch"
    }
  }
};
