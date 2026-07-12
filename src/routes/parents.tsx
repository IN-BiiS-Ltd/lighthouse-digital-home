import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  MediaRow,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import parentImg from "@/assets/parent-partnership.jpg";

export const Route = createFileRoute("/parents")({
  head: () => ({
    meta: [
      { title: "Parents & Partnership — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Families as educational partners: partnership, communication, the school calendar, resources and policies — with a parent portal on the way.",
      },
      { property: "og:title", content: "Parents & Partnership — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Families as educational partners at Lighthouse Campus.",
      },
      { property: "og:url", content: "/parents" },
    ],
    links: [{ rel: "canonical", href: "/parents" }],
  }),
  component: Parents,
});

function Parents() {
  return (
    <>
      <PageHero
        eyebrow="Parent Partnership"
        title="Families are educational partners, not spectators."
        intro="Learning flourishes when home and school move together. We keep communication open, honest and human."
        sections={[
          { label: "Partnership", to: "/parents#partnership" },
          { label: "Communication", to: "/parents#communication" },
          { label: "Calendar", to: "/parents#calendar" },
          { label: "Resources", to: "/parents#resources" },
        ]}
      />

      <Section id="partnership">
        <MediaRow
          eyebrow="Partnership"
          title="A relationship built on trust"
          image={parentImg}
          imageAlt="A parent and teacher reviewing a student's work together"
        >
          <p>
            We see parents as essential members of the community. Your insight
            into your child, combined with our expertise, creates the conditions
            for real growth.
          </p>
          <p>
            Regular conversations, clear expectations and mutual respect keep the
            partnership strong from the first day to graduation.
          </p>
        </MediaRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Staying Connected"
          title="Clear, timely, human communication"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div id="communication" className="scroll-mt-24">
            <FeatureCard title="Communication">
              Regular updates, parent-teacher meetings and open channels so you
              are never left wondering.
            </FeatureCard>
          </div>
          <div id="calendar" className="scroll-mt-24">
            <FeatureCard title="School Calendar">
              Term dates, events and key moments, kept up to date so families can
              plan with confidence.
            </FeatureCard>
          </div>
          <div id="resources" className="scroll-mt-24">
            <FeatureCard title="Resources & Policies">
              Guidance, forms and policies in one place — transparent and easy to
              access.
            </FeatureCard>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="rounded-2xl border border-dashed border-gold/50 bg-card p-9 text-center">
          <Eyebrow className="justify-center">Coming soon</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-medium md:text-3xl">
            A dedicated Parent Portal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We are building a secure Parent Portal for progress, communication
            and resources — part of a growing digital ecosystem designed around
            families.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Questions about life as a Lighthouse family?"
        body="Our team is glad to talk through anything — from daily routines to long-term support."
      />
    </>
  );
}
