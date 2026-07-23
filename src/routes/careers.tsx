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
import leadershipImg from "@/assets/leadership.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Working at Lighthouse Campus" },
      {
        name: "description",
        content:
          "Join a community of mentors. Professional growth, opportunities and our recruitment process at Lighthouse Campus.",
      },
      { property: "og:title", content: "Careers — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Working at Lighthouse Campus — a community of mentors.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/careers" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/careers" }],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a community of mentors and lifelong learners."
        intro="Working at Lighthouse Campus means shaping an institution built to last — where educators are trusted, supported and given room to grow."
        sections={[
          { label: "Working here", to: "/careers" },
          { label: "Professional growth", to: "/careers#growth" },
          { label: "Opportunities", to: "/careers#opportunities" },
          { label: "Process", to: "/careers#process" },
        ]}
      />

      <Section>
        <MediaRow
          eyebrow="Working at Lighthouse"
          title="Educators, not employees"
          image={leadershipImg}
          imageAlt="Colleagues collaborating around a whiteboard"
        >
          <p>
            We hire people who love learning and love young people. Our teachers
            are mentors first, trusted to shape their craft within a shared
            culture of excellence and care.
          </p>
          <p>
            If you believe in a humane, ambitious education, you will find
            colleagues who share that belief.
          </p>
        </MediaRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Growth & Opportunity"
          title="Invested in the people who teach"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <div id="growth" className="scroll-mt-24">
            <FeatureCard title="Professional Growth">
              Ongoing development, mentorship and time to reflect — because great
              teaching is always evolving.
            </FeatureCard>
          </div>
          <div id="opportunities" className="scroll-mt-24">
            <FeatureCard title="Opportunities">
              Roles across teaching, leadership, wellbeing and campus operations
              as the community grows.
            </FeatureCard>
          </div>
          <div id="process" className="scroll-mt-24">
            <FeatureCard title="Recruitment Process">
              A thoughtful, respectful process designed to find genuine fit — for
              you and for the community.
            </FeatureCard>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="rounded-2xl border border-dashed border-gold/50 bg-card p-9 text-center">
          <Eyebrow className="justify-center">Now welcoming interest</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-medium md:text-3xl">
            No current vacancy that fits? Introduce yourself.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We are always glad to hear from exceptional educators and staff. Send
            us a note and tell us how you would contribute.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get in touch"
        title="Build something that lasts, with us"
        body="Reach out to our team to explore current and future opportunities at Lighthouse Campus."
        primary={{ to: "/contact", label: "Contact our team" }}
        secondary={{ to: "/about", label: "About the campus" }}
      />
    </>
  );
}
