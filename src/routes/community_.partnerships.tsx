import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/community_/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships | Community | Lighthouse Campus" },
      { name: "description", content: "Partnerships extend the campus into the wider world — carefully, and with a clear educational purpose." },
      { property: "og:title", content: "Partnerships | Community | Lighthouse Campus" },
      { property: "og:description", content: "Partnerships extend the campus into the wider world — carefully, and with a clear educational purpose." },
      { property: "og:url", content: "/community/partnerships" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/community/partnerships" }],
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
      "label": "Partnerships"
    }
  ],
  "eyebrow": "Community / Partnerships",
  "title": "Considered relationships with organisations that share our values.",
  "intro": "Partnerships extend the campus into the wider world — carefully, and with a clear educational purpose.",
  "blocks": [
    {
      "eyebrow": "Our Approach",
      "title": "Quality over quantity",
      "body": [
        "Every partnership at Lighthouse Campus is chosen for its educational value and its alignment with institutional purpose.",
        "Relationships are announced only when they are formalised and meaningful."
      ]
    }
  ],
  "status": {
    "label": "Partnerships are announced as they are established",
    "body": "Specific partner names, agreements and programmes are described publicly only once they are verified and formally in place."
  },
  "related": [
    {
      "title": "Community Programmes",
      "to": "/community/community-programmes",
      "body": "How the campus contributes beyond its walls."
    },
    {
      "title": "Alumni",
      "to": "/community/alumni",
      "body": "The future Lighthouse alumni community."
    },
    {
      "title": "Careers",
      "to": "/community/careers",
      "body": "Working at Lighthouse Campus."
    }
  ],
  "cta": {
    "title": "Interested in partnering with us?",
    "body": "Contact us to explore a considered, values-aligned partnership.",
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
