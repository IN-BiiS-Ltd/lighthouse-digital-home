import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/student-life_/events")({
  head: () => ({
    meta: [
      { title: "Events | Student Life | Lighthouse Campus" },
      { name: "description", content: "Campus events mark the milestones of a school year and shape a shared community memory." },
      { property: "og:title", content: "Events | Student Life | Lighthouse Campus" },
      { property: "og:description", content: "Campus events mark the milestones of a school year and shape a shared community memory." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/student-life/events" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/student-life/events" }],
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
      "label": "Student Life",
      "to": "/student-life"
    },
    {
      "label": "Events"
    }
  ],
  "eyebrow": "Student Life / Events",
  "title": "Moments that give the school year its rhythm.",
  "intro": "Campus events mark the milestones of a school year and shape a shared community memory.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "Rituals that hold a community together",
      "body": [
        "Events at Lighthouse Campus are not entertainment. They are the moments that make a community visible to itself.",
        "They celebrate contribution, invite families in and connect the campus to the wider world."
      ]
    },
    {
      "eyebrow": "Kinds of Events",
      "title": "Recurring moments across the year",
      "bullets": [
        "welcome and induction",
        "family gatherings",
        "learning showcases",
        "cultural and national days",
        "service and community events",
        "end-of-year milestones"
      ]
    }
  ],
  "status": {
    "label": "A working calendar shared with families",
    "body": "Specific event dates are shared with enrolled families through official school communications. Publicly announced events appear on the community events page as they are confirmed."
  },
  "related": [
    {
      "title": "Community & Belonging",
      "to": "/student-life/community-belonging",
      "body": "Life shared beyond lessons."
    },
    {
      "title": "Community Events",
      "to": "/news/campus-events",
      "body": "Public updates on campus moments."
    },
    {
      "title": "Parent Partnership",
      "to": "/parents/parent-partnership",
      "body": "Families as part of school life."
    }
  ],
  "cta": {
    "title": "Stay in touch with campus life.",
    "body": "Contact us to learn about upcoming visits, open days and family gatherings.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/student-life",
      "label": "Student Life overview"
    }
  }
};
