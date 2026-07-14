import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/laboratories")({
  head: () => ({
    meta: [
      { title: "Laboratories | Campus | Lighthouse Campus" },
      { name: "description", content: "Laboratories give learners the experience of scientific thinking — question, method, evidence and reflection." },
      { property: "og:title", content: "Laboratories | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Laboratories give learners the experience of scientific thinking — question, method, evidence and reflection." },
      { property: "og:url", content: "/campus-experience/laboratories" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/laboratories" }],
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
      "label": "Laboratories"
    }
  ],
  "eyebrow": "Campus / Laboratories",
  "title": "Spaces where inquiry becomes practice.",
  "intro": "Laboratories give learners the experience of scientific thinking — question, method, evidence and reflection.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "Science lived, not just studied",
      "body": [
        "Laboratories are designed for careful, hands-on inquiry.",
        "Learners meet the disciplines of science through practice, not only through description."
      ]
    },
    {
      "eyebrow": "Habits Developed",
      "title": "What learners take from the lab",
      "bullets": [
        "careful observation",
        "clear questioning",
        "disciplined method",
        "honest recording",
        "reflection on results",
        "respect for safety"
      ]
    }
  ],
  "status": {
    "label": "Facilities are developed to support the curriculum",
    "body": "Specific laboratory equipment and specialisations are described accurately as the programme develops."
  },
  "related": [
    {
      "title": "Innovation & Creative Spaces",
      "to": "/campus-experience/innovation-creative-spaces",
      "body": "Where ideas take physical form."
    },
    {
      "title": "Classrooms",
      "to": "/campus-experience/classrooms",
      "body": "The everyday learning environment."
    },
    {
      "title": "Educational Philosophy",
      "to": "/about/educational-philosophy",
      "body": "How we understand inquiry."
    }
  ],
  "cta": {
    "title": "Come and see inquiry in action.",
    "body": "A visit is the best way to understand how learners work in science.",
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
