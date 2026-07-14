import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/innovation-creative-spaces")({
  head: () => ({
    meta: [
      { title: "Innovation & Creative Spaces | Campus | Lighthouse Campus" },
      { name: "description", content: "Innovation and creative spaces give learners room to design, build and refine — with the freedom and discipline both require." },
      { property: "og:title", content: "Innovation & Creative Spaces | Campus | Lighthouse Campus" },
      { property: "og:description", content: "Innovation and creative spaces give learners room to design, build and refine — with the freedom and discipline both require." },
      { property: "og:url", content: "/campus-experience/innovation-creative-spaces" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience/innovation-creative-spaces" }],
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
      "label": "Innovation & Creative Spaces"
    }
  ],
  "eyebrow": "Campus / Innovation & Creative Spaces",
  "title": "Where ideas are made, tested and shared.",
  "intro": "Innovation and creative spaces give learners room to design, build and refine — with the freedom and discipline both require.",
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "Making as a way of learning",
      "body": [
        "Learners think differently when they build, prototype and refine.",
        "Creative spaces bring this way of learning into the everyday life of the campus."
      ]
    },
    {
      "eyebrow": "What Happens Here",
      "title": "A range of purposeful activity",
      "bullets": [
        "design projects",
        "making and prototyping",
        "collaborative problem-solving",
        "cross-disciplinary work",
        "reflection and iteration",
        "sharing work with others"
      ]
    }
  ],
  "related": [
    {
      "title": "Laboratories",
      "to": "/campus-experience/laboratories",
      "body": "Inquiry with method."
    },
    {
      "title": "Arts & Performance",
      "to": "/student-life/arts-performance",
      "body": "Voice and craft across disciplines."
    },
    {
      "title": "Innovation",
      "to": "/our-model/innovation",
      "body": "New possibilities guided by educational value."
    }
  ],
  "cta": {
    "title": "See how making happens on campus.",
    "body": "Contact us to learn how creative work fits into daily learning.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/campus-experience",
      "label": "Campus overview"
    }
  }
};
