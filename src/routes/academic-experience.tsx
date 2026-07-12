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
import stemImg from "@/assets/academic-stem.jpg";
import leadershipImg from "@/assets/leadership.jpg";

export const Route = createFileRoute("/academic-experience")({
  head: () => ({
    meta: [
      { title: "Academic Experience — Lighthouse Campus" },
      {
        name: "description",
        content:
          "A rigorous, human curriculum: teaching approach, assessment, languages, STEM, arts, sports, innovation, leadership development and learning support.",
      },
      { property: "og:title", content: "Academic Experience — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "How Lighthouse Campus develops deep knowledge and enduring capabilities.",
      },
      { property: "og:url", content: "/academic-experience" },
    ],
    links: [{ rel: "canonical", href: "/academic-experience" }],
  }),
  component: AcademicExperience,
});

const disciplines = [
  { title: "Languages", body: "Confident multilingual learners, with language taught as a living tool for connection and thought." },
  { title: "Mathematics", body: "Reasoning, fluency and problem-solving built on genuine understanding, not memorisation." },
  { title: "Sciences", body: "Inquiry-led study where students investigate, test and explain the world around them." },
  { title: "Humanities", body: "History, geography and society explored to build perspective, empathy and judgement." },
  { title: "The Arts", body: "Visual art, music, drama and design — expression, discipline and creative courage." },
  { title: "Physical Education", body: "Health, teamwork and resilience through sport and active, joyful movement." },
];

function AcademicExperience() {
  return (
    <>
      <PageHero
        eyebrow="Academic Experience"
        title="Rigorous, human, and built for a changing world."
        intro="Our curriculum develops deep knowledge and the capabilities that endure — thinking, creating, collaborating and leading."
        sections={[
          { label: "Curriculum", to: "/academic-experience#curriculum" },
          { label: "Teaching", to: "/academic-experience#teaching" },
          { label: "STEM", to: "/academic-experience#stem" },
          { label: "Arts & Sports", to: "/academic-experience#arts" },
          { label: "Support", to: "/academic-experience#support" },
        ]}
      />

      {/* Curriculum */}
      <Section id="curriculum">
        <SectionHeading
          eyebrow="Curriculum"
          title="A coherent, ambitious programme"
          description="Our curriculum is carefully sequenced so that knowledge builds meaningfully year on year, while leaving room for depth, exploration and joy."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d) => (
            <FeatureCard key={d.title} title={d.title}>
              {d.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Teaching approach */}
      <Section tone="muted" id="teaching">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Teaching Approach</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
              Mentors, not lecturers
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Our teachers know their students as individuals. They ask better
              questions, model curiosity, and design lessons that invite
              thinking rather than passive listening.
            </p>
          </div>
          <div id="assessment" className="scroll-mt-24">
            <Eyebrow>Assessment</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
              Feedback that helps students grow
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Assessment is used to understand and support learning — timely,
              honest and constructive — so students always know where they are
              and what comes next.
            </p>
          </div>
        </div>
      </Section>

      {/* STEM & Innovation */}
      <Section id="stem">
        <MediaRow
          eyebrow="STEM & Innovation"
          title="Curiosity turned into capability"
          image={stemImg}
          imageAlt="Students conducting a science experiment together in a laboratory"
        >
          <p>
            From early scientific play to advanced laboratory work, students
            learn to investigate, test ideas and build. Innovation spaces let
            them prototype, code and design solutions to real problems.
          </p>
          <p>
            We treat questions as the starting point of understanding — and give
            students the tools and confidence to pursue them.
          </p>
        </MediaRow>
      </Section>

      {/* Arts, Sports & Leadership */}
      <Section tone="sand" id="arts">
        <MediaRow
          reverse
          eyebrow="Arts, Sports & Leadership"
          title="Expression, discipline and joy"
          image={leadershipImg}
          imageAlt="Students collaborating on a leadership project at a whiteboard"
        >
          <p>
            The arts and athletics are central, not optional. They build
            creativity, teamwork, resilience and voice — and give every student
            a place to shine beyond the academic day.
          </p>
          <p id="languages" className="scroll-mt-24">
            Leadership development runs throughout the journey, cultivating
            responsibility, service and the confidence to lead with integrity.
          </p>
        </MediaRow>
      </Section>

      {/* Learning Support */}
      <Section id="support">
        <SectionHeading
          eyebrow="Learning Support"
          title="Every learner known and guided"
          description="We meet students where they are. Thoughtful support and enrichment ensure that each child is appropriately challenged and genuinely cared for."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <FeatureCard title="Personalised support">
            Targeted help for students who need it, delivered with dignity and
            without stigma.
          </FeatureCard>
          <FeatureCard title="Enrichment & extension">
            Opportunities that stretch curious and able learners further into
            their interests.
          </FeatureCard>
          <FeatureCard title="Wellbeing at the core">
            Academic support and pastoral care work together, because learning
            and wellbeing are inseparable.
          </FeatureCard>
        </div>
      </Section>

      <CtaBand
        title="Discover the academic experience in person"
        body="See our classrooms, laboratories and studios — and meet the mentors who bring the curriculum to life."
      />
    </>
  );
}
