import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/student-life_/leadership-service")({
  head: () => ({
    meta: [
      { title: "Leadership & Service | Student Life | Lighthouse Campus" },
      { name: "description", content: "Students develop leadership by taking real responsibility inside a community that trusts them with meaningful work." },
      { property: "og:title", content: "Leadership & Service | Student Life | Lighthouse Campus" },
      { property: "og:description", content: "Students develop leadership by taking real responsibility inside a community that trusts them with meaningful work." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/student-life/leadership-service" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/student-life/leadership-service" }],
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
      "label": "Leadership & Service"
    }
  ],
  "eyebrow": "Student Life / Leadership & Service",
  "title": "Leadership expressed through responsibility, service and thoughtful action.",
  "intro": "Students develop leadership by taking real responsibility inside a community that trusts them with meaningful work.",
  "blocks": [
    {
      "eyebrow": "How We Understand Leadership",
      "title": "Not titles — behaviour",
      "body": [
        "Leadership at Lighthouse Campus is not defined by positions alone.",
        "It is the daily practice of listening well, acting responsibly and improving the community for others."
      ]
    },
    {
      "eyebrow": "How It Is Developed",
      "title": "Everyday opportunities to lead",
      "bullets": [
        "responsibility for shared spaces",
        "peer mentoring",
        "service projects",
        "voice in campus life",
        "initiative in clubs and activities",
        "reflection on personal contribution"
      ]
    },
    {
      "eyebrow": "Service",
      "title": "Service as part of character",
      "body": [
        "Service is how students learn that they belong to something larger than themselves.",
        "Opportunities for service grow with the campus and with the wider community around it."
      ]
    }
  ],
  "related": [
    {
      "title": "Core Values",
      "to": "/about/core-values",
      "body": "The principles that shape daily life."
    },
    {
      "title": "Community & Belonging",
      "to": "/student-life/community-belonging",
      "body": "Shared responsibility for community."
    },
    {
      "title": "Community Programmes",
      "to": "/community/community-programmes",
      "body": "Ways the campus contributes beyond its walls."
    }
  ],
  "cta": {
    "title": "Character is grown, not decorated.",
    "body": "Explore how student development is woven through the whole educational experience.",
    "primary": {
      "to": "/our-model/student-development",
      "label": "Student development"
    },
    "secondary": {
      "to": "/student-life",
      "label": "Student Life overview"
    }
  }
};
