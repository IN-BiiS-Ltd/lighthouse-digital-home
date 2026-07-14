import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/overview")({
  head: () => ({
    meta: [
      { title: "Overview | Campus | Lighthouse Campus" },
      { name: "description", content: "The campus is not a backdrop to learning. It is one of the most important educators in the school." },
      { property: "og:title", content: "Overview | Campus | Lighthouse Campus" },
      { property: "og:description", content: "The campus is not a backdrop to learning. It is one of the most important educators in the school." },
      { property: "og:url", content: "/campus-experience/overview" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/overview" }],
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
      "label": "Overview"
    }
  ],
  "eyebrow": "Campus / Overview",
  "title": "Every space serves the learner.",
  "intro": "The campus is not a backdrop to learning. It is one of the most important educators in the school.",
  "blocks": [
    {
      "eyebrow": "Principle",
      "title": "Environments that teach",
      "body": [
        "Every space at Lighthouse Campus is designed to support learning, relationships, safety and wellbeing.",
        "The layout, materials and rhythms of daily life are all intentional."
      ]
    },
    {
      "eyebrow": "How Spaces Work Together",
      "title": "A coherent campus, not a collection of rooms",
      "body": [
        "Classrooms, library, laboratories, creative spaces, dining and outdoor areas belong to one educational vision.",
        "Learners move through them with a growing sense of ownership and responsibility."
      ]
    },
    {
      "eyebrow": "What Every Space Should Do",
      "title": "Shared design commitments",
      "bullets": [
        "support the learner",
        "invite good behaviour and belonging",
        "enable focused work",
        "allow collaboration",
        "respect wellbeing",
        "remain safe and cared for"
      ]
    }
  ],
  "related": [
    {
      "title": "Classrooms",
      "to": "/campus-experience/classrooms",
      "body": "Where daily learning happens."
    },
    {
      "title": "Library",
      "to": "/campus-experience/library",
      "body": "A place of reading, thinking and quiet."
    },
    {
      "title": "Innovation & Creative Spaces",
      "to": "/campus-experience/innovation-creative-spaces",
      "body": "Where ideas are made."
    }
  ],
  "cta": {
    "title": "See it for yourself.",
    "body": "A visit is the best way to understand how the campus supports learning.",
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
