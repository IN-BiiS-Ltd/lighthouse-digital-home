import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/editorial-page";

export const Route = createFileRoute("/parents_/parent-journey")({
  head: () => ({
    meta: [
      { title: "Parent Journey | Parents | Lighthouse Campus" },
      { name: "description", content: "A family's journey with Lighthouse Campus follows a natural arc, from first enquiry to long-term partnership." },
      { property: "og:title", content: "Parent Journey | Lighthouse Campus" },
      { property: "og:description", content: "How a family's relationship with Lighthouse Campus begins and grows over time." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/parents/parent-journey" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/parents/parent-journey" }],
  }),
  component: ParentJourney,
});

function ParentJourney() {
  return (
    <EditorialPage
      config={{
        breadcrumb: [
          { label: "Home", to: "/" },
          { label: "Parents", to: "/parents" },
          { label: "Parent Journey" },
        ],
        eyebrow: "Parents / Parent Journey",
        title: "How the relationship begins and grows over time.",
        intro:
          "A family's journey with Lighthouse Campus follows a natural arc, from first enquiry to long-term partnership. The intention, from the very first conversation, is that the child and the family feel known.",
        focus: ["enquiry", "welcome", "enrolment", "everyday partnership", "long-term relationship"],
        chapters: [
          {
            numeral: "I",
            eyebrow: "Beginning",
            title: "First conversations.",
            body: [
              "The relationship begins with the first enquiry and campus visit. Families are welcomed, listened to and helped to understand the school — its philosophy, its rhythm and its people.",
              "This first exchange is not a sales encounter. It is the first honest meeting between two parties who may, together, take responsibility for a child's education for many years.",
            ],
            quote: {
              text: "The way a family is welcomed on the first day is the way the school will treat them on every day that follows.",
            },
          },
          {
            numeral: "II",
            eyebrow: "Enrolment",
            title: "Joining the community.",
            body: [
              "Once a place is offered, families are supported through enrolment and induction. Documents are handled with care; questions are answered without impatience; the practical becomes hospitable.",
              "The intention is for the child and the family to feel known from the start — not merely registered, but received.",
            ],
          },
          {
            numeral: "III",
            eyebrow: "Everyday Partnership",
            title: "An ongoing relationship.",
            body: [
              "Through the school year, families and school stay in regular, respectful contact. Progress is understood together; challenges are addressed together; celebrations are shared.",
              "The partnership is neither performed nor decorative. It is the working assumption that home and school are on the same side of every question about the child.",
            ],
          },
          {
            numeral: "IV",
            eyebrow: "Beyond Graduation",
            title: "A relationship that outlasts a school year.",
            body: [
              "The parent journey does not end at graduation. Families remain part of the Lighthouse community — through alumni programmes, ongoing conversation, and the continued life of the institution their children helped shape.",
              "This is what a lifelong partnership means: not a promise printed in a brochure, but a door that stays open.",
            ],
          },
        ],
        manifesto: {
          eyebrow: "The Journey, in a Sentence",
          statement: "From first enquiry to lifelong partnership, every family is met, known, and kept.",
        },
        cta: {
          title: "Start the conversation.",
          body: "Contact admissions to take the first step.",
          primary: { to: "/contact", label: "Contact admissions" },
          secondary: { to: "/parents", label: "Parents overview" },
        },
      }}
    />
  );
}
