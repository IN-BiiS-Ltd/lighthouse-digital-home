import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/editorial-page";

export const Route = createFileRoute("/our-model_/student-development")({
  head: () => ({
    meta: [
      { title: "Growing the Whole Learner — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Character, confidence, wellbeing and contribution. How Lighthouse Campus develops the whole person alongside academic learning.",
      },
      { property: "og:title", content: "Growing the Whole Learner" },
      { property: "og:description", content: "How Lighthouse Campus develops the whole person beyond academic learning." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/our-model/student-development" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/our-model/student-development" }],
  }),
  component: StudentDevelopment,
});

function StudentDevelopment() {
  return (
    <EditorialPage
      config={{
        breadcrumb: [
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Student Development" },
        ],
        eyebrow: "Growing the Whole Learner",
        title: "Character, confidence, wellbeing and contribution.",
        intro:
          "Education shapes how young people understand themselves, relate to others and participate in community life. At Lighthouse, student development is not an additional programme — it is woven through the full campus experience.",
        focus: [
          "character",
          "confidence",
          "wellbeing",
          "leadership",
          "creativity",
          "service",
          "purpose",
        ],
        chapters: [
          {
            numeral: "I",
            eyebrow: "Character & Confidence",
            title: "The private foundations of a public life.",
            body: [
              "Integrity, responsibility, empathy and respect are not taught by lecture. They develop through relationships, expectations and example — through the daily texture of how adults hold children and how children learn to hold one another.",
              "Alongside character, confidence grows: the capacity to express ideas, attempt difficult work, sit with uncertainty and recognise that one's own thinking can improve. Character makes the confidence trustworthy; confidence makes the character effective.",
            ],
            quote: {
              text: "Character is what you do when the lesson is over and no one is watching.",
            },
          },
          {
            numeral: "II",
            eyebrow: "Wellbeing",
            title: "Not an add-on. A foundation.",
            body: [
              "Emotional, social and physical wellbeing support meaningful learning and healthy development. A child who is not well cannot learn well; a child who has never known care cannot practise it.",
              "Wellbeing at Lighthouse is not a themed week. It is the daily assumption that every learner is worth understanding, that struggle is met with support rather than judgement, and that health of body and mind belong inside — not beside — a serious education.",
            ],
          },
          {
            numeral: "III",
            eyebrow: "Leadership & Creativity",
            title: "The outward practice of an inner formation.",
            body: [
              "Leadership is not a role reserved for a few. Students gain increasing opportunities to take responsibility, guide others and contribute to shared goals — from small classroom stewardship to campus-wide initiatives.",
              "Creativity travels alongside. Art, performance, design, inquiry and problem-solving help students develop imagination and creative courage — the willingness to make something new that did not exist before they made it.",
            ],
          },
          {
            numeral: "IV",
            eyebrow: "Service, Citizenship & Purpose",
            title: "Knowledge that carries responsibility.",
            body: [
              "Students learn that knowledge and capability carry responsibility toward others. Service is a habit, not a headline — the ordinary practice of contributing to something larger than oneself.",
              "Citizenship widens the circle: awareness of community, culture, society and the wider world. Purpose completes it: reflection and guidance that help learners connect their strengths and interests with a direction worth taking.",
            ],
            quote: {
              text: "A meaningful education does not merely prepare a student for the world. It prepares a person the world will be glad to receive.",
            },
          },
        ],
        manifesto: {
          eyebrow: "Whole learner",
          statement:
            "Student development is not an additional programme. It is part of how students learn, participate, build relationships and grow throughout campus life.",
        },
        cta: {

          title: "How do families take part?",
          body: "See how Lighthouse and families partner around every learner.",
          primary: { to: "/our-model/parent-partnership", label: "Parent Partnership" },
          secondary: { to: "/our-model/learner-profile", label: "The Learner Profile" },
        },
      }}
    />
  );
}
