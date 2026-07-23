import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, type EditorialPageConfig } from "@/components/editorial-page";

export const Route = createFileRoute("/about_/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision | Lighthouse Campus" },
      { name: "description", content: "Read the long-term educational vision guiding Lighthouse Campus and its growing community." },
      { property: "og:title", content: "Our Vision | Lighthouse Campus" },
      { property: "og:description", content: "The future we seek — a learning community where every learner develops knowledge, character and confidence." },
      { property: "og:url", content: "/about/vision" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/vision" }],
  }),
  component: Vision,
});

const config: EditorialPageConfig = {
  breadcrumb: [{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Vision" }],
  eyebrow: "About / Vision",
  title: "A learning community where every learner develops the knowledge, character and confidence to shape a meaningful future.",
  intro:
    "The long-term horizon of Lighthouse Campus — the future we are working toward, day by day, learner by learner.",
  focus: ["knowledge", "character", "confidence", "purpose"],
  chapters: [
    {
      numeral: "I",
      eyebrow: "The Future We Seek",
      title: "Young people growing as knowledgeable, capable, responsible and compassionate human beings",
      body: [
        "We envision an educational community where young people grow as knowledgeable, capable, responsible and compassionate human beings.",
        "Learning develops intellectual strength. Relationships build confidence and belonging. Character guides decisions. Opportunity enables learners to discover and develop their individual potential.",
      ],
    },
    {
      numeral: "II",
      eyebrow: "Education for an Evolving World",
      title: "Preparing learners for a world that will continue to change",
      body: [
        "They will need secure knowledge and the ability to continue learning.",
        "They will need curiosity, creativity, communication and critical thinking.",
        "They will need resilience, responsibility, empathy and the confidence to collaborate across differences.",
        "Our vision brings these qualities together within one coherent educational journey.",
      ],
      quote: { text: "One coherent educational journey — knowledge, character and confidence, together." },
    },
    {
      numeral: "III",
      eyebrow: "Growth with Purpose",
      title: "An educational ecosystem that grows with clarity and responsibility",
      body: [
        "Future campuses will extend the institution’s learning philosophy while remaining responsive to their local communities.",
        "Digital services, educational research and institutional intelligence will support this growth.",
        "Human development and educational purpose will remain central.",
      ],
    },
  ],
  manifesto: {
    eyebrow: "Vision Statement",
    statement:
      "To nurture knowledgeable, capable and responsible learners who approach the future with curiosity, confidence, character and purpose.",
  },
  cta: {
    title: "Read Our Mission",
    body: "Discover how our vision becomes daily practice through learning, relationships and institutional life.",
    primary: { to: "/about/mission", label: "Read Our Mission" },
    secondary: { to: "/our-model/educational-model", label: "Explore Our Educational Model" },
  },
};

function Vision() {
  return <EditorialPage config={config} />;
}
