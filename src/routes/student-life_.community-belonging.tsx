import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/student-life_/community-belonging")({
  head: () => ({
    meta: [
      { title: "Community & Belonging | Student Life | Lighthouse Campus" },
      { name: "description", content: "Belonging is not a decoration on top of school life. It is the ground on which learning, character and confidence grow." },
      { property: "og:title", content: "Community & Belonging | Student Life | Lighthouse Campus" },
      { property: "og:description", content: "Belonging is not a decoration on top of school life. It is the ground on which learning, character and confidence grow." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/student-life/community-belonging" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/student-life/community-belonging" }],
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
      "label": "Community & Belonging"
    }
  ],
  "eyebrow": "Student Life / Community & Belonging",
  "title": "A community where every learner is known and valued.",
  "intro": "Belonging is not a decoration on top of school life. It is the ground on which learning, character and confidence grow.",
  "blocks": [
    {
      "eyebrow": "The Principle",
      "title": "Belonging comes before performance",
      "body": [
        "A student who feels seen, respected and safe is a student able to learn, take risks and contribute.",
        "At Lighthouse Campus, community is built deliberately, through relationships, rituals and shared responsibility."
      ]
    },
    {
      "eyebrow": "How It Shows Up",
      "title": "Small habits that build a shared culture",
      "bullets": [
        "daily welcomes",
        "attentive mentoring",
        "structured tutor time",
        "house and year-group gatherings",
        "student voice in decisions",
        "respect across differences",
        "celebration of contribution",
        "care for the campus as a shared space"
      ]
    },
    {
      "eyebrow": "Character Alongside Knowledge",
      "title": "Character grows through participation",
      "body": [
        "Students learn to listen, to disagree with respect and to take responsibility for the people around them.",
        "The everyday life of the community is one of the most important curricula on campus."
      ]
    }
  ],
  "related": [
    {
      "title": "Leadership & Service",
      "to": "/student-life/leadership-service",
      "body": "Responsibility exercised in service of others."
    },
    {
      "title": "Wellbeing",
      "to": "/student-life/wellbeing",
      "body": "Care for the whole learner across school life."
    },
    {
      "title": "Clubs & Activities",
      "to": "/student-life/clubs-activities",
      "body": "Interests explored beyond the timetable."
    }
  ],
  "cta": {
    "title": "Come and feel the community.",
    "body": "The clearest way to understand belonging at Lighthouse Campus is to visit.",
    "primary": {
      "to": "/contact",
      "label": "Schedule a visit"
    },
    "secondary": {
      "to": "/student-life",
      "label": "Student Life overview"
    }
  }
};
