import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/school-calendar")({
  head: () => ({
    meta: [
      { title: "School Calendar | Parents | Lighthouse Campus" },
      { name: "description", content: "The school calendar gives families and the school a shared rhythm — of terms, key moments and community events." },
      { property: "og:title", content: "School Calendar | Parents | Lighthouse Campus" },
      { property: "og:description", content: "The school calendar gives families and the school a shared rhythm — of terms, key moments and community events." },
      { property: "og:url", content: "/parents/school-calendar" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/parents/school-calendar" }],
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
      "label": "Parents",
      "to": "/parents"
    },
    {
      "label": "School Calendar"
    }
  ],
  "eyebrow": "Parents / School Calendar",
  "title": "A shared rhythm across the school year.",
  "intro": "The school calendar gives families and the school a shared rhythm — of terms, key moments and community events.",
  "blocks": [
    {
      "eyebrow": "How It Is Used",
      "title": "A living document for families",
      "body": [
        "The calendar communicates term dates, holidays, key learning moments and community events.",
        "It is updated as the school year develops and shared through official channels."
      ]
    }
  ],
  "status": {
    "label": "Calendar details are shared with enrolled families",
    "body": "The full school calendar and specific event dates are shared directly with enrolled families through official school communications."
  },
  "related": [
    {
      "title": "Communication",
      "to": "/parents/communication",
      "body": "How families and school stay in touch."
    },
    {
      "title": "Family Engagement",
      "to": "/parents/family-engagement",
      "body": "Ways to be part of school life."
    },
    {
      "title": "Events",
      "to": "/student-life/events",
      "body": "Moments that mark the school year."
    }
  ],
  "cta": {
    "title": "Speak with the school.",
    "body": "Contact us for the current term calendar.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/parents",
      "label": "Parents overview"
    }
  }
};
