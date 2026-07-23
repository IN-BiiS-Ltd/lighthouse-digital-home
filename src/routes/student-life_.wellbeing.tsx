import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/student-life_/wellbeing")({
  head: () => ({
    meta: [
      { title: "Wellbeing | Student Life | Lighthouse Campus" },
      { name: "description", content: "Wellbeing is not a separate programme. It is expressed in relationships, routines, environments and expectations across the whole campus." },
      { property: "og:title", content: "Wellbeing | Student Life | Lighthouse Campus" },
      { property: "og:description", content: "Wellbeing is not a separate programme. It is expressed in relationships, routines, environments and expectations across the whole campus." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/student-life/wellbeing" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/student-life/wellbeing" }],
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
      "label": "Wellbeing"
    }
  ],
  "eyebrow": "Student Life / Wellbeing",
  "title": "Care for the whole learner across school life.",
  "intro": "Wellbeing is not a separate programme. It is expressed in relationships, routines, environments and expectations across the whole campus.",
  "blocks": [
    {
      "eyebrow": "How We Think About Wellbeing",
      "title": "Whole-child, whole-community",
      "body": [
        "A learner's physical, emotional, social and academic wellbeing are connected.",
        "The campus is designed so that care and challenge live comfortably beside one another."
      ]
    },
    {
      "eyebrow": "Everyday Practice",
      "title": "Small commitments, sustained over time",
      "bullets": [
        "adults who know each child",
        "calm, orderly routines",
        "respectful relationships between learners",
        "time for reflection",
        "physical activity and healthy habits",
        "open communication with families"
      ]
    },
    {
      "eyebrow": "When Support Is Needed",
      "title": "A considered pastoral approach",
      "body": [
        "Structures for pastoral care are established and developed with the growth of the campus.",
        "Families are partners in this work: home and school support the learner together."
      ]
    }
  ],
  "status": {
    "label": "Pastoral structures are developed as the community grows",
    "body": "Specific counselling capacity and medical services are described accurately as they are formalised."
  },
  "related": [
    {
      "title": "Community & Belonging",
      "to": "/student-life/community-belonging",
      "body": "Belonging comes before performance."
    },
    {
      "title": "Health Services",
      "to": "/campus-experience/health-services",
      "body": "Care available on campus."
    },
    {
      "title": "Parent Partnership",
      "to": "/parents/parent-partnership",
      "body": "Home and school together."
    }
  ],
  "cta": {
    "title": "Come and see how the community feels.",
    "body": "Wellbeing is best understood by walking through the campus.",
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
