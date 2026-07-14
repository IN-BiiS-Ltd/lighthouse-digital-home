import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Pullquote } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/learning-journey_/graduation-pathways")({
  head: () => ({
    meta: [
      { title: "Graduation Pathways | Lighthouse Campus" },
      { name: "description", content: "Discover how Lighthouse Campus supports students as they prepare for university, careers, lifelong learning and meaningful contribution." },
      { property: "og:title", content: "Graduation Pathways | Lighthouse Campus" },
      { property: "og:description", content: "Prepared for university. Ready for life. Grounded in purpose." },
      { property: "og:url", content: "/learning-journey/graduation-pathways" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/learning-journey/graduation-pathways" }],
  }),
  component: GraduationPathways,
});

const learner = ["academic strengths", "interests", "values", "personal qualities", "preferred ways of learning", "long-term aspirations", "areas for further development"];
const guidance = ["programme options", "university requirements", "application timelines", "entry expectations", "academic fit", "personal fit", "financial and practical considerations"];
const support = ["application planning", "document preparation", "personal statement development", "interview preparation", "reference coordination", "portfolio guidance where relevant", "deadline management"];
const readiness = ["independence", "communication", "decision-making", "organisation", "financial awareness", "digital responsibility", "resilience", "ethical judgement"];

function GraduationPathways() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Learning Journey", to: "/learning-journey" }, { label: "Graduation Pathways" }]}
        eyebrow="Learning Journey / Graduation Pathways"
        title="Prepared for university. Ready for life. Grounded in purpose."
        intro="Graduation is not an ending. It is the point at which knowledge, character, confidence and aspiration move into a wider world of choices and responsibilities."
      />

      <Section>
        <SectionHeading eyebrow="Purpose" title="Informed decisions about further education, careers and future direction" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Guidance begins with the learner rather than with a predetermined destination.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Understanding the Learner" title="Reflection before decision" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {learner.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="University Guidance" title="Supporting learners in understanding their options" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guidance.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Application Support" title="Practical support across the application journey" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {support.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Careers and Aspirations" title="Connecting present choices with future possibilities" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students explore professions, industries, entrepreneurship, public service, research and emerging fields. Career exploration helps learners connect present choices with future possibilities.
        </p>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Readiness for Life" title="Preparation extends beyond formal applications" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {readiness.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="The Future Alumni Community" title="Graduates remain part of the Lighthouse story" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The future alumni community will create opportunities for connection, mentorship, contribution and continuing institutional relationships.
        </p>
      </Section>

      <Section tone="navy">
        <Pullquote onNavy quote="A Lighthouse graduate leaves prepared to learn continuously, act responsibly and build a future with purpose." />
      </Section>

      <CtaBand
        title="Explore the Graduate Profile"
        body="Prepared for university. Ready for life."
        primary={{ to: "/our-model/graduate-profile", label: "Explore the Graduate Profile" }}
        secondary={{ to: "/admissions", label: "Contact Admissions" }}
      />
    </>
  );
}
