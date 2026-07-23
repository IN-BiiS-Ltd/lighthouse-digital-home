import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/student-life_/arts-performance")({
  head: () => ({
    meta: [
      { title: "Arts & Performance | Student Life | Lighthouse Campus" },
      { name: "description", content: "The arts help students find their voice, refine craft and understand the world differently. They are essential, not optional." },
      { property: "og:title", content: "Arts & Performance | Student Life | Lighthouse Campus" },
      { property: "og:description", content: "The arts help students find their voice, refine craft and understand the world differently. They are essential, not optional." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/student-life/arts-performance" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/student-life/arts-performance" }],
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
      "label": "Arts & Performance"
    }
  ],
  "eyebrow": "Student Life / Arts & Performance",
  "title": "Voice, craft and expression as part of a full education.",
  "intro": "The arts help students find their voice, refine craft and understand the world differently. They are essential, not optional.",
  "blocks": [
    {
      "eyebrow": "Why the Arts Matter",
      "title": "A different way of knowing",
      "body": [
        "The arts develop attention, sensitivity, imagination and discipline.",
        "They connect learners to culture, to one another and to their own inner life."
      ]
    },
    {
      "eyebrow": "How Students Engage",
      "title": "Making, performing and reflecting",
      "bullets": [
        "visual arts and craft",
        "music-making",
        "drama and performance",
        "design and creative writing",
        "collaborative projects",
        "reflection and critique"
      ]
    },
    {
      "eyebrow": "Growing Programme",
      "title": "A developing arts culture",
      "body": [
        "Arts opportunities expand as the campus community grows.",
        "The commitment is to depth and craft, not spectacle: the work students produce is meant to teach them something about themselves and their world."
      ]
    }
  ],
  "related": [
    {
      "title": "Clubs & Activities",
      "to": "/student-life/clubs-activities",
      "body": "Interests explored beyond the timetable."
    },
    {
      "title": "Innovation & Creative Spaces",
      "to": "/campus-experience/innovation-creative-spaces",
      "body": "Environments that invite making."
    },
    {
      "title": "Community & Belonging",
      "to": "/student-life/community-belonging",
      "body": "Shared life across the campus."
    }
  ],
  "cta": {
    "title": "Come see the campus.",
    "body": "A visit is the best way to sense how the arts fit into daily life.",
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
