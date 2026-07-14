import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/parents_/parent-journey")({
  head: () => ({
    meta: [
      { title: "Parent Journey | Parents | Lighthouse Campus" },
      { name: "description", content: "A family's journey with Lighthouse Campus follows a natural arc, from first enquiry to long-term partnership." },
      { property: "og:title", content: "Parent Journey | Parents | Lighthouse Campus" },
      { property: "og:description", content: "A family's journey with Lighthouse Campus follows a natural arc, from first enquiry to long-term partnership." },
      { property: "og:url", content: "/parents/parent-journey" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/parents/parent-journey" }],
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
      "label": "Parents",
      "to": "/parents"
    },
    {
      "label": "Parent Journey"
    }
  ],
  "eyebrow": "Parents / Parent Journey",
  "title": "How the relationship begins and grows over time.",
  "intro": "A family's journey with Lighthouse Campus follows a natural arc, from first enquiry to long-term partnership.",
  "blocks": [
    {
      "eyebrow": "Beginning",
      "title": "First conversations",
      "body": [
        "The relationship begins with the first enquiry and campus visit.",
        "Families are welcomed, listened to and helped to understand the school."
      ]
    },
    {
      "eyebrow": "Enrolment",
      "title": "Joining the community",
      "body": [
        "Once a place is offered, families are supported through enrolment and induction.",
        "The intention is for the child and the family to feel known from the start."
      ]
    },
    {
      "eyebrow": "Everyday Partnership",
      "title": "An ongoing relationship",
      "body": [
        "Through the school year, families and school stay in regular, respectful contact.",
        "Progress is understood together and challenges are addressed together."
      ]
    }
  ],
  "related": [
    {
      "title": "Parent Partnership",
      "to": "/parents/parent-partnership",
      "body": "Families as educational partners."
    },
    {
      "title": "Communication",
      "to": "/parents/communication",
      "body": "How families and school stay in touch."
    },
    {
      "title": "Family Engagement",
      "to": "/parents/family-engagement",
      "body": "Ways to be part of school life."
    }
  ],
  "cta": {
    "title": "Start the conversation.",
    "body": "Contact admissions to take the first step.",
    "primary": {
      "to": "/contact",
      "label": "Contact admissions"
    },
    "secondary": {
      "to": "/parents",
      "label": "Parents overview"
    }
  }
};
