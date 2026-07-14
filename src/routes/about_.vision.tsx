import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision | Lighthouse Campus" },
      { name: "description", content: "Read the long-term educational vision guiding Lighthouse Campus and its growing community." },
      { property: "og:title", content: "Our Vision | Lighthouse Campus" },
      { property: "og:description", content: "The future we seek — a learning community where every learner develops knowledge, character and confidence." },
      { property: "og:url", content: "/about/vision" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/vision" }],
  }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Vision" }]}
        eyebrow="About / Vision"
        title="A learning community where every learner develops the knowledge, character and confidence to shape a meaningful future."
      />

      <Section>
        <SectionHeading eyebrow="The Future We Seek" title="Young people growing as knowledgeable, capable, responsible and compassionate human beings" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>We envision an educational community where young people grow as knowledgeable, capable, responsible and compassionate human beings.</p>
          <p>Learning develops intellectual strength. Relationships build confidence and belonging. Character guides decisions. Opportunity enables learners to discover and develop their individual potential.</p>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Education for an Evolving World" title="Preparing learners for a world that will continue to change" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>They will need secure knowledge and the ability to continue learning.</p>
          <p>They will need curiosity, creativity, communication and critical thinking.</p>
          <p>They will need resilience, responsibility, empathy and the confidence to collaborate across differences.</p>
          <p>Our vision brings these qualities together within one coherent educational journey.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Growth with Purpose" title="An educational ecosystem that grows with clarity and responsibility" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Future campuses will extend the institution&rsquo;s learning philosophy while remaining responsive to their local communities.</p>
          <p>Digital services, educational research and institutional intelligence will support this growth.</p>
          <p>Human development and educational purpose will remain central.</p>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">Vision Statement</p>
          <p className="mt-6 font-display text-3xl font-medium leading-snug text-navy-foreground md:text-4xl">
            To nurture knowledgeable, capable and responsible learners who approach the future with curiosity, confidence, character and purpose.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Read Our Mission"
        body="Discover how our vision becomes daily practice through learning, relationships and institutional life."
        primary={{ to: "/about/mission", label: "Read Our Mission" }}
        secondary={{ to: "/our-model/educational-model", label: "Explore Our Educational Model" }}
      />
    </>
  );
}
