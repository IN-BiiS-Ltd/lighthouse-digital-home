import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, type EditorialPageConfig } from "@/components/editorial-page";

export const Route = createFileRoute("/about_/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission | Lighthouse Campus" },
      { name: "description", content: "Discover the Lighthouse Campus mission: illuminating every learner’s potential through outstanding education, inspiring educators and a culture of excellence, integrity and opportunity." },
      { property: "og:title", content: "Our Mission | Lighthouse Campus" },
      { property: "og:description", content: "Our promise: every learner deserves a place where learning leads, every student is seen, and every future begins with purpose." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/about/mission" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/about/mission" }],
  }),
  component: Mission,
});

const config: EditorialPageConfig = {
  breadcrumb: [{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Mission" }],
  eyebrow: "About / Mission",
  title: "Our promise: every learner deserves a place where learning leads, every student is seen, and every future begins with purpose.",
  intro:
    "The mission that guides daily life at Lighthouse Campus — how learning, character, relationships and opportunity meet in one purposeful educational journey.",
  focus: ["excellence", "integrity", "opportunity", "belonging", "purpose"],
  chapters: [
    {
      numeral: "I",
      eyebrow: "Our Promise",
      title: "Every child carries extraordinary potential",
      body: [
        "Every child carries extraordinary potential.",
        "Our mission is to illuminate that potential through outstanding education, inspiring educators, innovative learning experiences, and a culture built on excellence, integrity, and opportunity.",
      ],
    },
    {
      numeral: "II",
      eyebrow: "Learning with Depth",
      title: "Ambitious academic experience with genuine understanding",
      body: [
        "We provide an ambitious academic experience that develops secure knowledge, genuine understanding and intellectual independence.",
        "Learning is carefully sequenced while remaining open to curiosity, exploration, reflection and creative thought.",
      ],
    },
    {
      numeral: "III",
      eyebrow: "Developing the Whole Learner",
      title: "Academic, personal, social, emotional and physical development as one journey",
      body: [
        "We support academic, personal, social, emotional and physical development as connected parts of one educational journey.",
        "Students grow through learning, relationships, responsibility, leadership, creativity and participation in community life.",
      ],
    },
    {
      numeral: "IV",
      eyebrow: "Building Meaningful Relationships",
      title: "Teachers who know learners as individuals",
      body: [
        "Families participate as educational partners.",
        "Leadership supports educators and protects the conditions required for meaningful learning.",
        "Belonging creates the confidence required for growth.",
      ],
      quote: { text: "Belonging creates the confidence required for growth." },
    },
    {
      numeral: "V",
      eyebrow: "Preparing for Contribution",
      title: "The capability and responsibility to contribute meaningfully",
      body: [
        "We prepare learners to communicate clearly, think critically, collaborate constructively and act with integrity.",
        "Education develops the capability and responsibility to contribute meaningfully to communities and the wider world.",
      ],
    },
    {
      numeral: "VI",
      eyebrow: "Every Learner Deserves More",
      title: "A place where learning leads and every future begins with purpose",
      body: [
        "Every learner deserves more than an education.",
        "Every learner deserves a place where learning leads, every student is seen, and every future begins with purpose.",
      ],
    },
  ],
  manifesto: {
    eyebrow: "Mission Statement",
    statement:
      "Lighthouse Campus provides a purposeful educational journey in which learners build knowledge, develop character, discover individual strengths and prepare to participate confidently and responsibly in an evolving world.",
  },
  cta: {
    title: "Explore Our Core Values",
    body: "The principles that shape learning, relationships and institutional life.",
    primary: { to: "/about/core-values", label: "Explore Our Core Values" },
    secondary: { to: "/learning-journey", label: "Discover the Learning Journey" },
  },
};

function Mission() {
  return <EditorialPage config={config} />;
}
