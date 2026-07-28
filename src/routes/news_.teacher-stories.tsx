import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/news_/teacher-stories")({
  head: () => ({
    meta: [
      { title: "Teacher Stories | News & Insights | Lighthouse Campus" },
      { name: "description", content: "Reflections and portraits of the educators who shape daily life at Lighthouse Campus." },
      { property: "og:title", content: "Teacher Stories | News & Insights | Lighthouse Campus" },
      { property: "og:description", content: "Reflections and portraits of the educators who shape daily life at Lighthouse Campus." },
      { property: "og:url", content: "https://lighthousecampus.com/news/teacher-stories" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/news/teacher-stories" }],
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
      "label": "Teacher Stories"
    }
  ],
  "eyebrow": "News & Insights / Teacher Stories",
  "title": "The people who teach on campus.",
  "intro": "Reflections and portraits of the educators who shape daily life at Lighthouse Campus.",
  "blocks": [
    {
      "eyebrow": "About This Section",
      "title": "What you will find here",
      "body": [
        "This section introduces educators and their thinking, so readers can meet the people behind the classroom.",
        "Articles are added over time and shared through the wider Lighthouse digital ecosystem when published."
      ]
    },
    {
      "eyebrow": "Portraits of Practice",
      "title": "How educator profiles are written",
      "body": [
        "Each profile is written with the teacher, not about them, and reviewed before publication.",
        "Profiles focus on practice — how a teacher thinks, plans and works with learners."
      ]
    }
  ],
  "status": {
    "label": "Profiles are published across the academic year",
    "body": "Educator profiles appear gradually as colleagues join and settle into the campus."
  },
  "related": [
    {
      "title": "Student Stories",
      "to": "/news/student-stories",
      "body": "Voices from the campus."
    },
    {
      "title": "Educational Insights",
      "to": "/news/educational-insights",
      "body": "Reflections on learning and teaching."
    },
    {
      "title": "Research & Reflection",
      "to": "/news/research-reflection",
      "body": "Longer-form institutional thinking."
    }
  ],
  "cta": {
    "title": "Meet the educators.",
    "body": "Contact us to follow new educator profiles as they are published.",
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
