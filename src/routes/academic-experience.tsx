import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/academic-experience")({
  head: () => ({
    meta: [
      { title: "Academic Experience — Lighthouse Campus" },
      {
        name: "description",
        content:
          "A coherent educational framework combining internationally recognised standards, accredited national pathways, exceptional teaching, meaningful assessment and connected learning experiences.",
      },
      { property: "og:title", content: "Academic Experience — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "A coherent educational framework combining internationally recognised standards, accredited national pathways, exceptional teaching and meaningful assessment.",
      },
      { property: "og:url", content: "/academic-experience" },
    ],
    links: [{ rel: "canonical", href: "/academic-experience" }],
  }),
  component: AcademicExperience,
});

const pathways = [
  {
    title: "Cambridge International Curriculum",
    body: "An internationally respected curriculum that develops academic excellence, critical thinking, creativity, independent learning and global perspectives. Students are prepared for internationally recognised qualifications while developing the confidence to succeed at leading universities around the world.",
  },
  {
    title: "Republic of the Sudan National Curriculum",
    body: "Delivered in accordance with the requirements of the Ministry of Education of the Republic of the Sudan. This pathway enables students to continue their national educational journey while benefiting from the wider Lighthouse Campus learning experience.",
  },
  {
    title: "Republic of South Sudan National Curriculum",
    body: "Delivered in accordance with the requirements of the Ministry of General Education and Instruction of the Republic of South Sudan. Students follow nationally recognised academic standards while learning within an internationally inspired educational environment.",
  },
];

const disciplines = [
  {
    title: "Languages",
    body: "Confident multilingual learners who use language as a powerful tool for communication, critical thinking, cultural understanding and global citizenship.",
  },
  {
    title: "Mathematics",
    body: "Developing reasoning, fluency and problem-solving through deep conceptual understanding rather than memorisation.",
  },
  {
    title: "Sciences",
    body: "Inquiry-driven learning where students investigate, experiment, analyse and explain the natural world through evidence and discovery.",
  },
  {
    title: "Humanities",
    body: "History, geography and social studies that cultivate perspective, empathy, responsibility and informed global citizenship.",
  },
  {
    title: "The Arts",
    body: "Visual arts, music, drama and design that inspire creativity, discipline, imagination and confident self-expression.",
  },
  {
    title: "Physical Education",
    body: "Promoting health, wellbeing, resilience, teamwork and confidence through purposeful movement and lifelong healthy habits.",
  },
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
          { label: "Pathways", to: "/academic-experience#pathways" },
          { label: "Areas of Learning", to: "/academic-experience#areas" },
          { label: "Teaching", to: "/academic-experience#teaching" },
          { label: "Assessment", to: "/academic-experience#assessment" },
        ]}
      />

      {/* Curriculum */}
      <Section id="curriculum">
        <SectionHeading
          eyebrow="Curriculum"
          title="A coherent, ambitious programme"
          description="Our curriculum is thoughtfully designed to combine internationally recognised educational standards with accredited national educational pathways, ensuring every learner develops deep understanding, strong academic foundations, intellectual curiosity and the confidence to thrive in a rapidly changing world."
        />
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Learning is intentionally sequenced so that knowledge develops progressively
          from year to year while creating space for exploration, creativity, reflection
          and authentic understanding. Rather than teaching isolated subjects, Lighthouse
          Campus creates connected learning experiences that prepare students for
          academic success, responsible citizenship and lifelong learning.
        </p>
      </Section>

      {/* Academic Pathways */}
      <Section tone="muted" id="pathways">
        <SectionHeading
          eyebrow="Our Academic Pathways"
          title="Three pathways, one educational framework"
          description="Every pathway is offered as an equal academic option within the Lighthouse Campus educational framework, enabling families to choose the route that best serves their child's future."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pathways.map((p) => (
            <FeatureCard key={p.title} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Areas of Learning */}
      <Section id="areas">
        <SectionHeading
          eyebrow="Areas of Learning"
          title="A broad, connected curriculum"
          description="Subjects are taught as interrelated fields of understanding, encouraging students to make connections across disciplines and apply their learning with purpose."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d) => (
            <FeatureCard key={d.title} title={d.title}>
              {d.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Teaching Approach */}
      <Section tone="sand" id="teaching">
        <SectionHeading
          eyebrow="Teaching Approach"
          title="Mentors, not lecturers"
          description="Learning begins with relationships."
        />
        <div className="mt-7 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Our teachers know their students as individuals and recognise that every
            learner brings different strengths, interests and aspirations. They design
            meaningful learning experiences that encourage inquiry, creativity,
            collaboration and critical thinking.
          </p>
          <p>
            Rather than simply delivering information, teachers act as mentors,
            facilitators and guides who inspire confidence, curiosity and independent
            learning.
          </p>
          <p className="text-foreground">
            Technology supports great teaching. Human relationships define it.
          </p>
        </div>
      </Section>

      {/* Assessment */}
      <Section id="assessment">
        <SectionHeading
          eyebrow="Assessment"
          title="Feedback that helps students grow"
          description="Assessment is an essential part of learning rather than the end of learning."
        />
        <div className="mt-7 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            It provides timely, meaningful and constructive feedback that helps every
            learner understand progress, recognise strengths and identify the next steps
            for improvement.
          </p>
          <p>
            Assessment informs teaching, supports personalised learning and encourages
            students to take increasing ownership of their own development.
          </p>
          <p className="text-foreground">
            Success is measured not only by achievement, but by continuous growth.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Discover the academic experience in person"
        body="Learn more about our curriculum pathways, teaching approach and assessment philosophy — and meet the mentors who bring learning to life."
      />
    </>
  );
}
