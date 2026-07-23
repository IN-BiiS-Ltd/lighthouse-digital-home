import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Languages,
  Calculator,
  FlaskConical,
  Landmark,
  Palette,
  Dumbbell,
  GraduationCap,
  Globe2,
  Award,
} from "lucide-react";
import { ArchitecturalPage, type ArchitecturalPageConfig } from "@/components/architectural-page";

export const Route = createFileRoute("/academic-experience")({
  head: () => ({
    meta: [
      { title: "Academic Experience | Lighthouse Campus" },
      {
        name: "description",
        content:
          "A rigorous, human academic experience combining internationally recognised educational standards with accredited national pathways.",
      },
      { property: "og:title", content: "Academic Experience | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Deep knowledge and enduring capabilities — curriculum, pathways, teaching and assessment at Lighthouse Campus.",
      },
      { property: "og:url", content: "/academic-experience" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/academic-experience" }],
  }),
  component: AcademicExperience,
});

const config: ArchitecturalPageConfig = {
  breadcrumb: [{ label: "Home", to: "/" }, { label: "Academic Experience" }],
  eyebrow: "Academic Experience",
  title: "Rigorous, human, and built for a changing world.",
  intro:
    "Our curriculum develops deep knowledge and the capabilities that endure — thinking, creating, collaborating and leading.",
  sections: [
    { label: "Curriculum", to: "/academic-experience#curriculum" },
    { label: "Pathways", to: "/academic-experience#pathways" },
    { label: "Areas of Learning", to: "/academic-experience#areas" },
    { label: "Teaching", to: "/academic-experience#teaching" },
    { label: "Assessment", to: "/academic-experience#assessment" },
  ],
  modules: [
    {
      kind: "pillars",
      id: "curriculum",
      eyebrow: "Curriculum",
      title: "A coherent, ambitious programme",
      description:
        "Learning is intentionally sequenced so that knowledge develops progressively from year to year while creating space for exploration, creativity, reflection and authentic understanding.",
      pillars: [
        {
          numeral: "01",
          title: "Progressive Knowledge",
          body: "Concepts build year on year so that understanding — not memorisation — carries learners forward.",
        },
        {
          numeral: "02",
          title: "Connected Learning",
          body: "Subjects are taught as interrelated fields so that students make connections and apply learning across disciplines.",
        },
        {
          numeral: "03",
          title: "Room to Explore",
          body: "The curriculum keeps space open for curiosity, creativity, reflection and authentic understanding.",
        },
      ],
    },
    {
      kind: "cards",
      id: "pathways",
      tone: "muted",
      eyebrow: "Our Academic Pathways",
      title: "Three pathways, one educational framework",
      description:
        "Every pathway is offered as an equal academic option within the Lighthouse Campus educational framework, enabling families to choose the route that best serves their child's future.",
      columns: 3,
      cards: [
        {
          title: "International Baccalaureate (IB)",
          icon: <Globe2 className="size-5" />,
          body: "Delivered in accordance with the standards and practices of the International Baccalaureate Organization. Students develop academic depth, critical thinking, international perspective and the confidence to engage meaningfully with a rapidly changing world.",
        },
        {
          title: "Cambridge International Curriculum",
          icon: <Award className="size-5" />,
          body: "Delivered in accordance with the standards and practices of Cambridge Assessment International Education. Students develop strong subject expertise, disciplined thinking and confidence within a globally recognised educational framework.",
        },
        {
          title: "Republic of South Sudan National Curriculum",
          icon: <GraduationCap className="size-5" />,
          body: "Delivered in accordance with the requirements of the Ministry of General Education and Instruction of the Republic of South Sudan. Students follow nationally recognised academic standards while learning within an internationally inspired educational environment.",
        },
      ],
    },
    {
      kind: "cards",
      id: "areas",
      eyebrow: "Areas of Learning",
      title: "A broad, connected curriculum",
      description:
        "Subjects are taught as interrelated fields of understanding, encouraging students to make connections across disciplines and apply their learning with purpose.",
      columns: 3,
      cards: [
        { title: "Languages", icon: <Languages className="size-5" />, body: "Confident multilingual learners who use language as a powerful tool for communication, critical thinking, cultural understanding and global citizenship." },
        { title: "Mathematics", icon: <Calculator className="size-5" />, body: "Developing reasoning, fluency and problem-solving through deep conceptual understanding rather than memorisation." },
        { title: "Sciences", icon: <FlaskConical className="size-5" />, body: "Inquiry-driven learning where students investigate, experiment, analyse and explain the natural world through evidence and discovery." },
        { title: "Humanities", icon: <Landmark className="size-5" />, body: "History, geography and social studies that cultivate perspective, empathy, responsibility and informed global citizenship." },
        { title: "The Arts", icon: <Palette className="size-5" />, body: "Visual arts, music, drama and design that inspire creativity, discipline, imagination and confident self-expression." },
        { title: "Physical Education", icon: <Dumbbell className="size-5" />, body: "Promoting health, wellbeing, resilience, teamwork and confidence through purposeful movement and lifelong healthy habits." },
      ],
    },
    {
      kind: "bento",
      id: "teaching",
      tone: "sand",
      eyebrow: "Teaching Approach",
      title: "Mentors, not lecturers",
      description: "Learning begins with relationships. Technology supports great teaching. Human relationships define it.",
      tiles: [
        {
          title: "Teachers as mentors and guides",
          icon: <BookOpen className="size-6" />,
          body: "Our teachers know their students as individuals and recognise that every learner brings different strengths, interests and aspirations. They design meaningful learning experiences that encourage inquiry, creativity, collaboration and critical thinking.",
        },
        { title: "Inquiry over instruction", body: "Teachers ask purposeful questions that draw learners into thinking, rather than simply delivering information." },
        { title: "Confidence through relationship", body: "Students grow in confidence when they are known, believed in and challenged with warmth." },
        { title: "Independence as the goal", body: "The aim is not compliance — it is capable, self-directed learners who can continue learning for life." },
      ],
    },
    {
      kind: "principles",
      id: "assessment",
      eyebrow: "Assessment",
      title: "Feedback that helps students grow",
      description:
        "Assessment is an essential part of learning rather than the end of learning. It informs teaching, supports personalised learning and encourages students to take increasing ownership of their own development.",
      principles: [
        "timely and meaningful feedback",
        "clarity about progress and next steps",
        "recognition of strengths, not only gaps",
        "assessment informs teaching",
        "students take ownership of growth",
        "success is measured by continuous growth",
      ],
    },
  ],
  cta: {
    title: "Discover the academic experience in person",
    body: "Learn more about our curriculum pathways, teaching approach and assessment philosophy — and meet the mentors who bring learning to life.",
    primary: { to: "/admissions", label: "Admissions overview" },
    secondary: { to: "/contact", label: "Schedule a visit" },
  },
};

function AcademicExperience() {
  return <ArchitecturalPage config={config} />;
}
