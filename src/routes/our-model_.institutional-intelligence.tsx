import { createFileRoute } from "@tanstack/react-router";
import {
  UserRound,
  BookOpen,
  Users2,
  Compass,
  Bell,
  Repeat,
  Scale,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";

export const Route = createFileRoute("/our-model_/institutional-intelligence")({
  head: () => ({
    meta: [
      { title: "An Institution That Learns — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Understanding experience. Improving decisions. Strengthening education. How institutional intelligence supports Lighthouse Campus — with human judgement at the centre.",
      },
      { property: "og:title", content: "An Institution That Learns" },
      {
        property: "og:description",
        content: "How Lighthouse Campus turns meaningful information into better understanding and responsible action.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/our-model/institutional-intelligence" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/our-model/institutional-intelligence" }],
  }),
  component: InstitutionalIntelligence,
});

const items = [
  { title: "Understanding Every Learner", icon: <UserRound className="size-5" />, body: "Information from learning, assessment, attendance, participation and wellbeing helps educators see patterns and respond with care." },
  { title: "Supporting Every Teacher", icon: <BookOpen className="size-5" />, body: "Professional insight helps teachers understand progress, identify needs and refine learning experiences." },
  { title: "Keeping Families Connected", icon: <Users2 className="size-5" />, body: "Clear and relevant communication enables families to understand development and participate meaningfully." },
  { title: "Strengthening Leadership Decisions", icon: <Compass className="size-5" />, body: "Leaders use evidence alongside professional judgement, educational values and direct human understanding." },
  { title: "Recognising Needs Early", icon: <Bell className="size-5" />, body: "Patterns can reveal where additional support, attention or intervention may be required." },
  { title: "Learning Across the Institution", icon: <Repeat className="size-5" />, body: "The school reflects on what is working, what is changing and where improvement is needed." },
  { title: "Human Judgement at the Centre", icon: <Scale className="size-5" />, body: "Data informs decisions. It does not make them alone. Artificial intelligence may support analysis, organisation and insight, but accountability remains with people." },
];

function InstitutionalIntelligence() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Institutional Intelligence" },
        ]}
        eyebrow="An Institution That Learns"
        title="Understanding experience. Improving decisions. Strengthening education."
        intro="A strong educational institution learns continuously from students, teachers, families and its own daily practice. Institutional intelligence turns meaningful information into better understanding and responsible action."
      />

      <Section>
        <SectionHeading
          eyebrow="Seven commitments"
          title="How intelligence supports the school."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <FeatureCard key={n.title} title={n.title} icon={n.icon}>
              {n.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onNavy className="justify-center">Purpose</Eyebrow>
          <p className="mt-5 font-display text-2xl leading-snug text-navy-foreground md:text-3xl">
            Every learner understood.<br />
            Every teacher supported.<br />
            Every family connected.<br />
            <span className="text-gold">Every decision informed.</span>
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="How does innovation fit in?"
        body="See how new possibilities are chosen at Lighthouse — guided by educational value, not novelty."
        primary={{ to: "/our-model/innovation", label: "Innovation with Purpose" }}
        secondary={{ to: "/explore/digital-ecosystem", label: "Digital Ecosystem" }}
      />
      <ShareBar title="An Institution That Learns — Lighthouse Campus" />
    </>
  );
}
