import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/sports-facilities")({
  head: () => ({
    meta: [
      { title: "Sports Facilities | Campus | Lighthouse Campus" },
      { name: "description", content: "Sports facilities support physical education, teamwork and healthy habits as part of a full education." },
      { property: "og:title", content: "Sports Facilities | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Sports facilities support physical education, teamwork and healthy habits as part of a full education." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience/sports-facilities" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience/sports-facilities" }],
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
      "label": "Campus",
      "to": "/campus-experience"
    },
    {
      "label": "Sports Facilities"
    }
  ],
  "eyebrow": "Campus / Sports Facilities",
  "title": "Spaces designed for healthy, purposeful movement.",
  "intro": "Sports facilities support physical education, teamwork and healthy habits as part of a full education.",
  "blocks": [
    {
      "eyebrow": "Design Principle",
      "title": "Movement as part of learning",
      "body": [
        "Facilities are planned to support daily physical activity, structured teaching and safe practice.",
        "The intention is quality of experience for every learner, not only for competitive teams."
      ]
    }
  ],
  "status": {
    "label": "Facilities develop with the campus",
    "body": "Specific sports facilities and equipment are described accurately as they become part of the campus."
  },
  "related": [
    {
      "title": "Athletics",
      "to": "/student-life/athletics",
      "body": "Discipline, teamwork and joy through movement."
    },
    {
      "title": "Wellbeing",
      "to": "/student-life/wellbeing",
      "body": "Care for the whole learner."
    },
    {
      "title": "Campus Overview",
      "to": "/campus-experience/overview",
      "body": "Every space serves the learner."
    }
  ],
  "cta": {
    "title": "Come and see the campus.",
    "body": "A visit shows how movement fits into a full school day.",
    "primary": {
      "to": "/contact",
      "label": "Schedule a visit"
    },
    "secondary": {
      "to": "/campus-experience",
      "label": "Campus overview"
    }
  }
};
