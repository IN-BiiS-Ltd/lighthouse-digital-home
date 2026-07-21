import { createFileRoute } from "@tanstack/react-router";
import {
  DoorOpen,
  MessagesSquare,
  Ear,
  HeartHandshake,
  Scale,
  Users,
} from "lucide-react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/our-model_/parent-partnership")({
  head: () => ({
    meta: [
      { title: "Families as Educational Partners — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Shared understanding. Open communication. One commitment to the learner. How Lighthouse Campus partners with families around every child.",
      },
      { property: "og:title", content: "Families as Educational Partners" },
      {
        property: "og:description",
        content: "How the school and families work together around every learner.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-model/parent-partnership" },
    ],
    links: [{ rel: "canonical", href: "/our-model/parent-partnership" }],
  }),
  component: ParentPartnership,
});

const items = [
  { title: "A Shared Beginning", icon: <DoorOpen className="size-5" />, body: "The relationship begins during admissions through open conversation about the learner, the family and the educational experience." },
  { title: "Clear Communication", icon: <MessagesSquare className="size-5" />, body: "Families receive relevant, timely and understandable information about learning, wellbeing, events and school life." },
  { title: "Meaningful Dialogue", icon: <Ear className="size-5" />, body: "Communication creates space for listening, questions and shared understanding rather than one-way reporting." },
  { title: "Supporting Learning Together", icon: <HeartHandshake className="size-5" />, body: "Families and educators align expectations and approaches where consistency benefits the learner." },
  { title: "Respecting Professional Roles", icon: <Scale className="size-5" />, body: "Partnership does not remove professional responsibility. It strengthens decisions by bringing family knowledge and educational expertise together." },
  { title: "Community Participation", icon: <Users className="size-5" />, body: "Families contribute to the culture and shared life of the campus through events, dialogue, volunteering and community programmes." },
];

function ParentPartnership() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Our Model", to: "/our-model" },
          { label: "Parent Partnership" },
        ]}
        eyebrow="Families as Educational Partners"
        title="Shared understanding. Open communication. One commitment to the learner."
        intro="Families hold knowledge of their children that no institution can replace. Teachers bring educational expertise and daily understanding of learning. Partnership grows when both are respected."
      />

      <Section>
        <SectionHeading
          eyebrow="Six commitments"
          title="How Lighthouse and families work together."
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
          <Eyebrow onNavy className="justify-center">Together</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-navy-foreground md:text-3xl">
            When families and educators move together with trust and clarity,
            learners experience stronger support and a deeper sense of
            belonging.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="For families"
        title="Explore the parent experience"
        body="Discover how communication, involvement and shared understanding come together across the year."
        primary={{ to: "/parents", label: "Parents at Lighthouse" }}
        secondary={{ to: "/contact", label: "Schedule a visit" }}
      />
    </>
  );
}
