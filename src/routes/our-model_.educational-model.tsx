import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/editorial-page";

export const Route = createFileRoute("/our-model_/educational-model")({
  head: () => ({
    meta: [
      { title: "The Lighthouse Educational Model — Lighthouse Campus" },
      {
        name: "description",
        content:
          "A coherent approach to learning, growth and contribution. How Lighthouse Campus turns its educational philosophy into a continuous learning experience.",
      },
      { property: "og:title", content: "The Lighthouse Educational Model" },
      { property: "og:description", content: "How learning, character, creativity and purpose develop together across every stage." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/our-model/educational-model" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/our-model/educational-model" }],
  }),
  component: EducationalModel,
});

function EducationalModel() {
  return (
    <EditorialPage
      config={{
        breadcrumb: [
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Educational Model" },
        ],
        eyebrow: "The Lighthouse Educational Model",
        title: "A coherent approach to learning, growth and contribution.",
        intro:
          "At Lighthouse Campus, education is designed as one continuous journey. Knowledge, character, creativity, wellbeing and responsibility develop together through purposeful relationships and carefully designed experiences.",
        focus: ["Learn", "Think", "Lead", "Contribute", "Reflect"],
        chapters: [
          {
            numeral: "I",
            eyebrow: "Beginning",
            title: "Learning begins with curiosity and grows into capability.",
            body: [
              "Every serious education starts from a simple conviction: that a child arrives already carrying wonder, and the school's task is to protect that wonder while giving it structure. At Lighthouse, learning develops through inquiry, understanding, application and reflection — a cycle repeated across every stage.",
              "Students encounter knowledge as something to explore, connect and use. Ideas are not delivered to be memorised, but offered to be inhabited. Understanding is built slowly, honestly, and with the intellectual habits that outlast any single lesson.",
            ],
            quote: {
              text: "The purpose of a school is not to produce examinations, but to produce minds that can think for themselves.",
            },
          },
          {
            numeral: "II",
            eyebrow: "The Learner at the Centre",
            title: "Every educational decision begins with the learner.",
            body: [
              "The curriculum, teaching approach, assessment, learning support and campus environment are designed around how young people develop, what they need at each stage, and who they are becoming.",
              "This is not sentiment. It is discipline. It is the daily refusal to treat learners as an audience for an already-decided programme, and instead to design the programme around them.",
            ],
          },
          {
            numeral: "III",
            eyebrow: "Four Dimensions",
            title: "Learn. Think. Lead. Contribute.",
            body: [
              "Four connected dimensions shape every classroom and every experience on campus. Learn — the acquisition of secure knowledge and deep understanding across disciplines. Think — the disciplined practice of questioning, analysing, creating and reflecting on evidence.",
              "Lead — the development of confidence, character, responsibility and the courage to act with integrity. Contribute — the application of learning through collaboration, service and meaningful participation in community. No dimension travels alone; each depends on the others.",
            ],
          },
          {
            numeral: "IV",
            eyebrow: "One Model Across Every Stage",
            title: "The same philosophy, expressed for every age.",
            body: [
              "The model does not change as the learner grows — its expression does. In Early Years it is play, wonder and first discovery. In Primary it is foundations of knowledge and character. In Preparatory it is independence and deeper thinking. In Secondary it is scholarship, identity and direction.",
              "Across every stage the arc is the same: curiosity becomes inquiry, inquiry becomes understanding, understanding becomes capability, capability becomes leadership, and leadership becomes contribution.",
            ],
            quote: {
              text: "One philosophy, five ages, a single continuous journey.",
            },
          },
        ],
        manifesto: {
          eyebrow: "The Model, in a Sentence",
          statement:
            "To bring learning, character, relationships and purpose into one coherent experience — so students succeed academically, understand themselves, engage thoughtfully with others and contribute with confidence.",
        },
        cta: {
          title: "Discover the stages of the journey.",
          body: "See how the model expresses itself from Early Years through Graduation Pathways.",
          primary: { to: "/learning-journey", label: "Discover the stages" },
          secondary: { to: "/our-model/learning-ecosystem", label: "The Learning Ecosystem" },
        },
      }}
    />
  );
}
