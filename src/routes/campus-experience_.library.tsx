import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";
import libraryPhoto from "@/assets/photo-library.jpg?w=1600&format=jpg";
import libraryPhotoAvif from "@/assets/photo-library.jpg?w=640;960;1280;1600&format=avif&as=srcset";
import libraryPhotoWebp from "@/assets/photo-library.jpg?w=640;960;1280;1600&format=webp&as=srcset";

export const Route = createFileRoute("/campus-experience_/library")({
  head: () => ({
    meta: [
      { title: "Library | Campus | Lighthouse Campus" },
      { name: "description", content: "The library is a home for readers, researchers and thinkers. Its role in learning is intentional and central." },
      { property: "og:title", content: "Library | Campus | Lighthouse Campus" },
      { property: "og:description", content: "The library is a home for readers, researchers and thinkers. Its role in learning is intentional and central." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience/library" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience/library" }],
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
      "label": "Library"
    }
  ],
  "eyebrow": "Campus / Library",
  "title": "A place for reading, thinking, questioning and quiet.",
  "intro": "The library is a home for readers, researchers and thinkers. Its role in learning is intentional and central.",
  "heroImage": {
    "src": libraryPhoto,
    "alt": "Lighthouse students reading at long oak tables in the campus library, warm afternoon light through arched windows",
    "caption": "A quiet centre of the campus — reading rooms shaped by attention and light."
  },
  "blocks": [
    {
      "eyebrow": "Purpose",
      "title": "More than a room with books",
      "body": [
        "The library supports reading for pleasure, structured research and independent study.",
        "It gives learners the habit of returning to good sources and paying attention over time."
      ]
    },
    {
      "eyebrow": "How It Serves Learning",
      "title": "A quiet centre of the campus",
      "bullets": [
        "reading widely across genres",
        "building research skills",
        "supporting classroom projects",
        "providing quiet independent study",
        "introducing digital and print resources",
        "celebrating stories and authors"
      ]
    },
    {
      "eyebrow": "Culture",
      "title": "A shared responsibility",
      "body": [
        "Learners are trusted with the library as a shared resource.",
        "The habits formed there — attention, patience, curiosity — extend into every other space on campus."
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
      "title": "Educational Philosophy",
      "to": "/about/educational-philosophy",
      "body": "How we understand learning."
    },
    {
      "title": "Innovation & Creative Spaces",
      "to": "/campus-experience/innovation-creative-spaces",
      "body": "Where ideas are made."
    }
  ],
  "cta": {
    "title": "Reading changes people.",
    "body": "Learn how the library sits at the centre of the learning day.",
    "primary": {
      "to": "/campus-experience",
      "label": "Campus overview"
    },
    "secondary": {
      "to": "/contact",
      "label": "Get in touch"
    }
  }
};
