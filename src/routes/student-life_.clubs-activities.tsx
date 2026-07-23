import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/student-life_/clubs-activities")({
  head: () => ({
    meta: [
      { title: "Clubs & Activities | Student Life | Lighthouse Campus" },
      { name: "description", content: "Clubs and activities are how learners discover what they care about and how they develop the habits of contribution." },
      { property: "og:title", content: "Clubs & Activities | Student Life | Lighthouse Campus" },
      { property: "og:description", content: "Clubs and activities are how learners discover what they care about and how they develop the habits of contribution." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/student-life/clubs-activities" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/student-life/clubs-activities" }],
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
      "label": "Clubs & Activities"
    }
  ],
  "eyebrow": "Student Life / Clubs & Activities",
  "title": "Interests turned into commitments, curiosity turned into contribution.",
  "intro": "Clubs and activities are how learners discover what they care about and how they develop the habits of contribution.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "More than pastimes",
      "body": [
        "Clubs and activities extend learning into interests, teamwork and long-term commitments.",
        "They give students space to try, to lead, to sustain effort and to belong to something they helped build."
      ]
    },
    {
      "eyebrow": "Range",
      "title": "A living, evolving programme",
      "body": [
        "The clubs programme develops with the interests of students, the strengths of educators and the needs of the community.",
        "Rather than fixing a static list, Lighthouse Campus grows its co-curricular life around learners as the campus community grows."
      ]
    },
    {
      "eyebrow": "Skills Built Along the Way",
      "title": "What students take with them",
      "bullets": [
        "initiative",
        "collaboration",
        "communication",
        "perseverance",
        "creativity",
        "organisation",
        "self-direction",
        "responsibility to others"
      ]
    }
  ],
  "status": {
    "label": "A growing programme",
    "body": "Detailed club listings and schedules are published to enrolled families as programmes are formalised."
  },
  "related": [
    {
      "title": "Athletics",
      "to": "/student-life/athletics",
      "body": "Discipline, teamwork and joy through movement."
    },
    {
      "title": "Arts & Performance",
      "to": "/student-life/arts-performance",
      "body": "Voice, craft and expression across disciplines."
    },
    {
      "title": "Leadership & Service",
      "to": "/student-life/leadership-service",
      "body": "Responsibility exercised in service of others."
    }
  ],
  "cta": {
    "title": "Talk to us about your child's interests.",
    "body": "We would be glad to describe how the programme is developing.",
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
