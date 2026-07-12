import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Pullquote,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Partnerships, alumni, community programmes and events — the wider community connected to Lighthouse Campus.",
      },
      { property: "og:title", content: "Community — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Partnerships, alumni and community programmes at Lighthouse Campus.",
      },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: Community,
});

function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="A campus that reaches beyond its walls."
        intro="Learning connects us to one another and to the world. We build partnerships, nurture our alumni and contribute to the community around us."
        sections={[
          { label: "Partnerships", to: "/community#partnerships" },
          { label: "Alumni", to: "/community#alumni" },
          { label: "Programmes", to: "/community#programmes" },
          { label: "Events", to: "/community#events" },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="Connected & Contributing"
          title="One community, many connections"
          description="Lighthouse Campus grows stronger through its relationships — with families, organisations and the graduates who carry our values forward."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <div id="partnerships" className="scroll-mt-24">
            <FeatureCard title="Partnerships">
              Collaborations with organisations and institutions that enrich
              learning and open opportunities for students.
            </FeatureCard>
          </div>
          <div id="alumni" className="scroll-mt-24">
            <FeatureCard title="Alumni Network">
              A lifelong community. Our graduates remain part of the campus story
              and a source of inspiration for current students.
            </FeatureCard>
          </div>
          <div id="programmes" className="scroll-mt-24">
            <FeatureCard title="Community Programmes">
              Service, outreach and shared learning that connect the campus with
              the wider community.
            </FeatureCard>
          </div>
          <div id="events" className="scroll-mt-24">
            <FeatureCard title="Events">
              Gatherings that bring families, students and partners together
              throughout the year.
            </FeatureCard>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <Pullquote
          onNavy
          quote="An education does not end at graduation. It becomes part of who we are, and of the community we build together."
        />
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Working with us</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
              Careers at Lighthouse Campus
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Our community is only as strong as its people. Explore
              opportunities to teach, lead and support learning across the campus.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-muted-foreground">
              From educators to campus staff, we look for people who share our
              belief in a humane, ambitious education — and who want to help build
              an institution that lasts.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Become part of the Lighthouse community"
        body="Whether as a family, a partner or a colleague, there is a place for you here."
        primary={{ to: "/careers", label: "Explore careers" }}
        secondary={{ to: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
