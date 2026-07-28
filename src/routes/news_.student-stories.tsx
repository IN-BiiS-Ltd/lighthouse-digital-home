import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/student-stories")({
  head: () => ({
    meta: [
      { title: "Student Stories | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Stories that capture the voice, work and growth of learners at Lighthouse Campus." },
      { property: "og:title", content: "Student Stories | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Stories that capture the voice, work and growth of learners at Lighthouse Campus." },
      { property: "og:url", content: "https://lighthousecampus.com/news/student-stories" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/student-stories" }],
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
      "label": "News & Insights",
      "to": "/news"
    },
    {
      "label": "Student Stories"
    }
  ],
  "eyebrow": "News & Insights / Student Stories",
  "title": "Voices from the campus.",
  "intro": "Stories that capture the voice, work and growth of learners at Lighthouse Campus.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section presents student experience with care and respect, telling stories that matter to the community.",
        "Articles are added over time and shared through the wider Lighthouse digital ecosystem when published."
      ]
    },
    {
      "eyebrow": "Consent and Care",
      "title": "How student stories are told",
      "body": [
        "No learner appears in a story without the informed consent of the family and the student.",
        "Names, images and details are used only to the extent the story genuinely needs."
      ]
    }
  ],
  "status": {
    "label": "Stories are published with family consent",
    "body": "A story appears here only after review and family approval. Consent can be withdrawn at any time."
  },
  "related": [
    {
      "title": "Teacher Stories",
      "to": "/news/teacher-stories",
      "body": "The people who teach on campus."
    },
    {
      "title": "Campus Events",
      "to": "/news/campus-events",
      "body": "Public moments across the school year."
    },
    {
      "title": "Educational Insights",
      "to": "/news/educational-insights",
      "body": "Reflections on learning and teaching."
    }
  ],
  "cta": {
    "title": "Meet the learners.",
    "body": "Contact us to follow new student stories as they are published.",
    "primary": {
      "to": "/contact",
      "label": "Get in touch"
    },
    "secondary": {
      "to": "/news",
      "label": "News & Insights overview"
    }
  }
};
