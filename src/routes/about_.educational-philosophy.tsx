import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, type EditorialPageConfig } from "@/components/editorial-page";

export const Route = createFileRoute("/about_/educational-philosophy")({
  head: () => ({
    meta: [
      { title: "Educational Philosophy | Lighthouse Campus" },
      { name: "description", content: "Discover how Lighthouse Campus believes education should shape the future through critical thinking, problem-solving, diversity and real-world learning." },
      { property: "og:title", content: "Educational Philosophy | Lighthouse Campus" },
      { property: "og:description", content: "Learning that shapes the future. Academic excellence combined with character development, innovation and real-world experiences." },
      { property: "og:url", content: "/about/educational-philosophy" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/educational-philosophy" }],
  }),
  component: Philosophy,
});

const config: EditorialPageConfig = {
  breadcrumb: [{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Educational Philosophy" }],
  eyebrow: "About / Educational Philosophy",
  title: "Learning that shapes the future.",
  intro:
    "We believe education should prepare students to think critically, solve meaningful problems, embrace diversity, lead with confidence, and make a positive impact on the world around them.",
  focus: ["critical thinking", "problem solving", "creativity", "collaboration", "character", "global citizenship", "real-world experiences", "reflection"],
  chapters: [
    {
      numeral: "I",
      eyebrow: "Learning That Shapes the Future",
      title: "Education beyond examinations",
      body: [
        "We believe education should do more than prepare students for examinations.",
        "It should prepare them to think critically, solve meaningful problems, embrace diversity, lead with confidence, and make a positive impact on the world around them.",
      ],
      quote: { text: "Education should do more than prepare students for examinations. It should prepare them for life." },
    },
    {
      numeral: "II",
      eyebrow: "Academic Excellence",
      title: "Secure knowledge as the foundation",
      body: [
        "Deep knowledge gives learners the foundations required to think, question, create and communicate.",
        "The curriculum builds understanding progressively while students connect new ideas with prior learning and apply knowledge across subjects and experiences.",
      ],
    },
    {
      numeral: "III",
      eyebrow: "Character Development",
      title: "Integrity, empathy and responsibility grow through practice",
      body: [
        "Students learn character by making choices, participating in community life, receiving guidance and observing the example of others.",
        "Responsibility, integrity, empathy and leadership develop through daily experience.",
      ],
    },
    {
      numeral: "IV",
      eyebrow: "Innovation and Real-World Learning",
      title: "Connecting knowledge with life",
      body: [
        "Our educational philosophy combines academic excellence with innovation and real-world learning experiences.",
        "Technology expands access, creativity, communication and institutional understanding when it creates genuine educational value.",
      ],
    },
    {
      numeral: "V",
      eyebrow: "Challenge and Support",
      title: "High expectations held with warmth and responsiveness",
      body: [
        "High expectations communicate belief in a learner’s potential.",
        "Support provides the conditions required to meet those expectations, so students are challenged with warmth, clarity and responsiveness.",
      ],
    },
  ],
  manifesto: {
    eyebrow: "Our Philosophy",
    statement:
      "Learning develops the mind, character develops the person, and opportunity develops the future.",
  },
  cta: {
    title: "Explore the Learning Journey",
    body: "See how our educational philosophy takes shape across every stage — from Early Years to Graduation Pathways.",
    primary: { to: "/learning-journey", label: "Discover the Learning Journey" },
    secondary: { to: "/our-model/educational-model", label: "Our Educational Model" },
  },
};

function Philosophy() {
  return <EditorialPage config={config} />;
}
