import { createFileRoute } from "@tanstack/react-router";
import {
  UserRound,
  Compass,
  Search,
  Eye,
  ClipboardCheck,
  Sprout,
  GraduationCap,
  Cpu,
} from "lucide-react";
import { ArchitecturalPage } from "@/components/architectural-page";

export const Route = createFileRoute("/our-model_/teaching-framework")({
  head: () => ({
    meta: [
      { title: "Teaching at Lighthouse — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Mentorship, expertise and thoughtful design. The professional practice of teaching at Lighthouse Campus.",
      },
      { property: "og:title", content: "Teaching at Lighthouse" },
      { property: "og:description", content: "How Lighthouse teachers know learners, design experiences and invite meaningful thinking." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/our-model/teaching-framework" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/our-model/teaching-framework" }],
  }),
  component: TeachingFramework,
});

function TeachingFramework() {
  return (
    <ArchitecturalPage
      config={{
        breadcrumb: [
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Teaching Framework" },
        ],
        eyebrow: "Teaching at Lighthouse",
        title: "Mentorship, expertise and thoughtful design.",
        intro:
          "Great teaching begins with strong relationships and deep professional knowledge. Lighthouse teachers understand what they teach, know the learners before them and create experiences that invite meaningful thinking.",
        sections: [
          { label: "Stance", to: "#stance" },
          { label: "Practice", to: "#practice" },
          { label: "Commitments", to: "#commitments" },
        ],
        modules: [
          {
            kind: "pillars",
            id: "stance",
            eyebrow: "The teacher's stance",
            title: "Three roles held together.",
            description:
              "At Lighthouse, teaching is not a single act. It is three roles practised at once, in every lesson.",
            pillars: [
              { numeral: "01", title: "Mentor", body: "A trusted adult who knows each learner and holds high expectations with warmth." },
              { numeral: "02", title: "Subject Expert", body: "A scholar of a discipline — its ideas, methods and open questions — who reveals its meaning." },
              { numeral: "03", title: "Learning Designer", body: "A careful architect of experience, matching what is taught to how understanding truly develops." },
            ],
          },
          {
            kind: "bento",
            id: "practice",
            eyebrow: "Eight principles of practice",
            title: "How teaching happens at Lighthouse.",
            description:
              "Not a checklist — an integrated craft, refined through reflection and collegial learning.",
            tiles: [
              { title: "Know the Learner", body: "Teachers develop a clear understanding of each learner’s strengths, needs, interests and progress.", icon: <UserRound className="size-5" /> },
              { title: "Design with Purpose", body: "Lessons begin with clear educational intentions and are structured to build understanding over time.", icon: <Compass className="size-5" /> },
              { title: "Invite Inquiry", body: "Students are encouraged to ask questions, examine evidence, test ideas and make connections.", icon: <Search className="size-5" /> },
              { title: "Make Thinking Visible", body: "Discussion, explanation, modelling and reflection help students understand how learning develops.", icon: <Eye className="size-5" /> },
              { title: "Respond to Evidence", body: "Teachers use observation, student work, assessment and dialogue to adjust teaching and provide support.", icon: <ClipboardCheck className="size-5" /> },
              { title: "Build Independence", body: "Learning gradually moves from guided experience toward confident, responsible and independent practice.", icon: <Sprout className="size-5" /> },
              { title: "Learn as Professionals", body: "Teachers reflect, collaborate, study evidence and continue developing throughout their careers.", icon: <GraduationCap className="size-5" /> },
              { title: "Technology in Teaching", body: "Technology supports planning, accessibility, creativity, collaboration and responsive teaching — never replacing professional judgement.", icon: <Cpu className="size-5" /> },
            ],
          },
          {
            kind: "principles",
            id: "commitments",
            eyebrow: "Professional commitments",
            title: "What Lighthouse teachers hold to.",
            principles: [
              "Every learner is worth understanding deeply.",
              "Every lesson has a clear educational intention.",
              "Evidence shapes teaching, not assumption.",
              "Relationships precede results.",
              "Independence is the destination, not a threat.",
              "Teaching is a lifelong craft.",
            ],
          },
          {
            kind: "related",
            eyebrow: "Continue",
            title: "How is progress understood?",
            links: [
              { title: "Assessment Framework", to: "/our-model/assessment-framework", body: "How progress is observed, evidenced and understood." },
              { title: "Educational Model", to: "/our-model/educational-model", body: "The philosophy behind Lighthouse teaching." },
              { title: "Working at Lighthouse", to: "/careers", body: "Careers and colleagues." },
            ],
          },
        ],
        cta: {
          eyebrow: "Continue",
          title: "How is progress understood?",
          body: "See how assessment supports learning, growth and responsible decisions.",
          primary: { to: "/our-model/assessment-framework", label: "Assessment Framework" },
          secondary: { to: "/careers", label: "Working at Lighthouse" },
        },
      }}
    />
  );
}
