import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/student-life_/athletics")({
  head: () => ({
    meta: [
      { title: "Athletics | Student Life | Lighthouse Campus" },
      { name: "description", content: "Sport at Lighthouse Campus develops discipline, teamwork, resilience and joy — not only performance." },
      { property: "og:title", content: "Athletics | Student Life | Lighthouse Campus" },
      { property: "og:description", content: "Sport at Lighthouse Campus develops discipline, teamwork, resilience and joy — not only performance." },
      { property: "og:url", content: "/student-life/athletics" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/student-life/athletics" }],
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
      "label": "Athletics"
    }
  ],
  "eyebrow": "Student Life / Athletics",
  "title": "Movement as part of learning, health and character.",
  "intro": "Sport at Lighthouse Campus develops discipline, teamwork, resilience and joy — not only performance.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "Sport as part of a whole education",
      "body": [
        "Physical activity is a natural, healthy and formative part of school life.",
        "Every learner is entitled to develop confidence, capability and enjoyment through movement, whatever their starting point."
      ]
    },
    {
      "eyebrow": "Values on the Field",
      "title": "Discipline, respect, teamwork",
      "bullets": [
        "personal effort",
        "respect for opponents",
        "respect for officials",
        "team responsibility",
        "commitment to training",
        "gracious in success and defeat"
      ]
    },
    {
      "eyebrow": "Development Over Time",
      "title": "A pathway that grows with the campus",
      "body": [
        "The athletics programme develops as facilities, expertise and student interests grow.",
        "Rather than promise what has not yet been established, Lighthouse Campus commits to a considered, high-quality programme built over time."
      ]
    }
  ],
  "status": {
    "label": "Facilities and fixtures develop with the campus",
    "body": "Specific teams, competitions and schedules are shared with enrolled families as the programme matures."
  },
  "related": [
    {
      "title": "Wellbeing",
      "to": "/student-life/wellbeing",
      "body": "Care for the whole learner."
    },
    {
      "title": "Clubs & Activities",
      "to": "/student-life/clubs-activities",
      "body": "Interests beyond the timetable."
    },
    {
      "title": "Sports Facilities",
      "to": "/campus-experience/sports-facilities",
      "body": "Spaces designed for healthy, purposeful movement."
    }
  ],
  "cta": {
    "title": "Movement, teamwork and character.",
    "body": "Learn more about how physical education fits into daily life.",
    "primary": {
      "to": "/student-life",
      "label": "Student Life overview"
    },
    "secondary": {
      "to": "/contact",
      "label": "Contact us"
    }
  }
};
