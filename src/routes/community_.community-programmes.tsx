import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/community_/community-programmes")({
  head: () => ({
    meta: [
      { title: "Community Programmes | Community | Lighthouse Campus" },
      { name: "description", content: "Community programmes give learners and educators a way to contribute meaningfully to the world around them." },
      { property: "og:title", content: "Community Programmes | Community | Lighthouse Campus" },
      { property: "og:description", content: "Community programmes give learners and educators a way to contribute meaningfully to the world around them." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/community/community-programmes" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/community/community-programmes" }],
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
      "label": "Community Programmes"
    }
  ],
  "eyebrow": "Community / Community Programmes",
  "title": "How the campus contributes beyond its walls.",
  "intro": "Community programmes give learners and educators a way to contribute meaningfully to the world around them.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "Contribution as part of education",
      "body": [
        "Service and community contribution are part of what it means to be well-educated.",
        "Community programmes give learners the chance to practise this at appropriate ages and in appropriate ways."
      ]
    }
  ],
  "status": {
    "label": "Programmes develop as the campus community grows",
    "body": "Specific community programmes are described publicly as they are formalised. Enrolled families are the first to hear about opportunities to contribute."
  },
  "related": [
    {
      "title": "Leadership & Service",
      "to": "/student-life/leadership-service",
      "body": "Responsibility exercised in service of others."
    },
    {
      "title": "Partnerships",
      "to": "/community/partnerships",
      "body": "Considered relationships."
    },
    {
      "title": "Events",
      "to": "/community/events",
      "body": "Community moments on campus."
    }
  ],
  "cta": {
    "title": "Get involved as the campus grows.",
    "body": "Contact us if you would like to contribute or collaborate.",
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
