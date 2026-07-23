import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Pullquote,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { PillarWheel } from "@/components/pillar-wheel";
import {
  IconCompass,
  IconConstellation,
  IconRoot,
  IconHorizon,
  IconDialogue,
  IconLedger,
  IconSpark,
  IconArc,
  IconLens,
  IconPrism,
} from "@/components/lighthouse-icons";




export const Route = createFileRoute("/our-model")({
  head: () => ({
    meta: [
      { title: "Our Model — Lighthouse Campus" },
      {
        name: "description",
        content:
          "How education, relationships, leadership and intelligence work together at Lighthouse Campus — one coherent institutional model built around the learner.",
      },
      { property: "og:title", content: "Our Model — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "The educational and institutional model of Lighthouse Campus, in ten connected pillars.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/our-model" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/our-model" }],
  }),
  component: OurModel,
});

const pillars = [
  {
    to: "/our-model/educational-model",
    title: "The Educational Model",
    short: "Model",
    body: "A coherent approach to learning, growth and contribution across every stage.",
    icon: <IconCompass className="size-5" />,
  },
  {
    to: "/our-model/learning-ecosystem",
    title: "The Learning Ecosystem",
    short: "Ecosystem",
    body: "People, knowledge and intelligence connected around every learner.",
    icon: <IconConstellation className="size-5" />,
  },
  {
    to: "/our-model/learner-profile",
    title: "The Lighthouse Learner",
    short: "Learner",
    body: "The qualities we develop through every stage of a child’s journey.",
    icon: <IconRoot className="size-5" />,
  },
  {
    to: "/our-model/graduate-profile",
    title: "The Lighthouse Graduate",
    short: "Graduate",
    body: "Prepared for university. Ready for life. Grounded in purpose.",
    icon: <IconHorizon className="size-5" />,
  },
  {
    to: "/our-model/teaching-framework",
    title: "Teaching Framework",
    short: "Teaching",
    body: "Mentorship, expertise and thoughtful design in every classroom.",
    icon: <IconLens className="size-5" />,
  },
  {
    to: "/our-model/assessment-framework",
    title: "Assessment Framework",
    short: "Assessment",
    body: "Understanding where learning is, and what should happen next.",
    icon: <IconLedger className="size-5" />,
  },
  {
    to: "/our-model/student-development",
    title: "Student Development",
    short: "Development",
    body: "Character, confidence, wellbeing and contribution beyond the classroom.",
    icon: <IconArc className="size-5" />,
  },
  {
    to: "/our-model/parent-partnership",
    title: "Parent Partnership",
    short: "Partnership",
    body: "Families as educational partners, from the first conversation onward.",
    icon: <IconDialogue className="size-5" />,
  },
  {
    to: "/our-model/institutional-intelligence",
    title: "Institutional Intelligence",
    short: "Intelligence",
    body: "An institution that learns from its own experience to improve decisions.",
    icon: <IconPrism className="size-5" />,
  },
  {
    to: "/our-model/innovation",
    title: "Innovation with Purpose",
    short: "Innovation",
    body: "New possibilities guided by educational value.",
    icon: <IconSpark className="size-5" />,
  },
];


function OurModel() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Our Model" }]}
        eyebrow="Our Model"
        title="The institutional model behind the Lighthouse experience."
        intro="Lighthouse Campus is a coherent educational system. Every part of the institution — learning, teaching, assessment, partnership, leadership and intelligence — is designed to work together around the learner."
        sections={pillars.map((p) => ({ label: p.title, to: p.to }))}
      />

      <Section tone="navy">
        <SectionHeading
          onNavy
          eyebrow="A connected system"
          title="Ten pillars, one coherent institution."
          description="Each pillar describes one dimension of how Lighthouse Campus is designed. Together they form the model that shapes daily life on campus."
        />
        <div className="mt-14">
          <PillarWheel pillars={pillars} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Read each pillar"
          title="Ten dimensions of the institutional design."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <FeatureCard key={p.to} title={p.title} icon={p.icon}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </Section>


      <Section tone="navy">
        <Pullquote
          onNavy
          quote="One campus. One community. One connected learning ecosystem — where every learner is known, every teacher is supported, and every decision returns to educational purpose."
        />
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="Explore how the model comes to life"
        body="Begin with the Educational Model, or step into the Learning Ecosystem to see how every part of the institution connects around the learner."
        primary={{ to: "/our-model/educational-model", label: "The Educational Model" }}
        secondary={{ to: "/our-model/learning-ecosystem", label: "The Learning Ecosystem" }}
      />
    </>
  );
}
