import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";
import classroomPhoto from "@/assets/photo-classroom-primary.jpg?w=1600&format=jpg";
import classroomPhotoAvif from "@/assets/photo-classroom-primary.jpg?w=640;960;1280;1600&format=avif&as=srcset";
import classroomPhotoWebp from "@/assets/photo-classroom-primary.jpg?w=640;960;1280;1600&format=webp&as=srcset";

export const Route = createFileRoute("/campus-experience_/classrooms")({
  head: () => ({
    meta: [
      { title: "Classrooms | Campus | Lighthouse Campus" },
      { name: "description", content: "The classroom is where much of daily learning happens. Its design supports attention, dialogue and care." },
      { property: "og:title", content: "Classrooms | Campus | Lighthouse Campus" },
      { property: "og:description", content: "The classroom is where much of daily learning happens. Its design supports attention, dialogue and care." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience/classrooms" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience/classrooms" }],
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
      "label": "Classrooms"
    }
  ],
  "eyebrow": "Campus / Classrooms",
  "title": "Rooms designed for focused work and thoughtful conversation.",
  "intro": "The classroom is where much of daily learning happens. Its design supports attention, dialogue and care.",
  "heroImage": {
    "src": classroomPhoto,
    "alt": "A diverse group of Lighthouse primary students — Sudanese, Arab and African — collaborating around an open illustrated book in a warm sunlit classroom",
    "caption": "Rooms designed for focused work, thoughtful conversation and every voice."
  },
  "blocks": [
    {
      "eyebrow": "Design Principle",
      "title": "Calm, ordered, purposeful",
      "body": [
        "Classrooms are arranged to invite focused work, small-group collaboration and one-to-one guidance.",
        "Furniture, light, sound and display all serve learning rather than distract from it."
      ]
    },
    {
      "eyebrow": "How They Are Used",
      "title": "A shared space between teacher and learners",
      "body": [
        "Teachers plan the environment as carefully as the lesson.",
        "Learners take responsibility for the state of the room they share."
      ]
    },
    {
      "eyebrow": "Everyday Commitments",
      "title": "What the classroom should always be",
      "bullets": [
        "safe and welcoming",
        "tidy and well-cared-for",
        "adaptable for different activities",
        "respectful of concentration",
        "supportive of dialogue",
        "expressive of learners' work"
      ]
    }
  ],
  "related": [
    {
      "title": "Library",
      "to": "/campus-experience/library",
      "body": "A different kind of learning space."
    },
    {
      "title": "Laboratories",
      "to": "/campus-experience/laboratories",
      "body": "Where inquiry becomes practice."
    },
    {
      "title": "Innovation & Creative Spaces",
      "to": "/campus-experience/innovation-creative-spaces",
      "body": "Environments that invite making."
    }
  ],
  "cta": {
    "title": "Come and see the rooms.",
    "body": "The atmosphere of a classroom is best experienced in person.",
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
