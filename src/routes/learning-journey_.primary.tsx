import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/learning-journey_/primary")({
  head: () => ({
    meta: [
      { title: "Primary School | Lighthouse Campus" },
      { name: "description", content: "Explore the Lighthouse Campus Primary experience, where strong foundations in knowledge, literacy, numeracy, character and curiosity develop together." },
      { property: "og:title", content: "Primary School | Lighthouse Campus" },
      { property: "og:description", content: "Strong foundations for knowledge, character and confident learning." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/learning-journey/primary" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/learning-journey/primary" }],
  }),
  component: Primary,
});

const priorities = [
  { title: "Literacy", body: "Reading, writing, speaking and listening develop across subjects and experiences." },
  { title: "Numeracy", body: "Students build mathematical fluency, reasoning and problem-solving through genuine conceptual understanding." },
  { title: "Scientific Inquiry", body: "Observation, investigation and explanation develop curiosity and evidence-based thinking." },
  { title: "Humanities", body: "History, geography and social understanding help students develop perspective, empathy and a sense of place." },
  { title: "Languages", body: "Language learning strengthens communication, cultural understanding and cognitive flexibility." },
  { title: "Creativity and the Arts", body: "Art, music, drama and design develop expression, discipline and creative courage." },
  { title: "Physical Development", body: "Sport and movement build health, coordination, teamwork, confidence and resilience." },
  { title: "Character and Community", body: "Students practise kindness, responsibility, integrity, cooperation and care for shared environments." },
];

const responsibility = ["learning routines", "organisation", "relationships", "participation", "reflection", "care for the community"];

const pathways = [
  { title: "Cambridge International Curriculum", body: "An internationally recognised pathway supporting knowledge, critical thinking, creativity and global understanding." },
  { title: "Republic of the Sudan National Curriculum", body: "A national pathway delivered according to the relevant educational requirements, strengthened by the wider Lighthouse learning experience." },
  { title: "Republic of South Sudan National Curriculum", body: "A national pathway delivered according to the relevant educational requirements within the wider Lighthouse educational environment." },
];

function Primary() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Learning Journey", to: "/learning-journey" }, { label: "Primary" }]}
        eyebrow="Learning Journey / Primary"
        title="Strong foundations for knowledge, character and confident learning."
        intro="Primary students develop secure literacy and numeracy while building knowledge across sciences, humanities, languages, arts and physical education."
      />

      <Section>
        <SectionHeading eyebrow="Purpose of the Stage" title="Foundations for later independence" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students grow as readers, writers, mathematicians, investigators, creators and responsible members of the community.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="The Learning Experience" title="Explicit teaching, guided practice, discussion and creative work" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Knowledge is sequenced carefully while students are encouraged to ask questions and make connections across disciplines.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Learning Priorities" title="Eight connected areas of development" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {priorities.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Teaching Approach" title="Clear instruction and space for inquiry" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Teachers know students as individuals and adapt support and challenge accordingly.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Assessment" title="Understanding progress and the next step" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Assessment combines classroom observation, student work, discussion, practical tasks and formal checks of understanding. Feedback helps students recognise progress and understand the next step.
        </p>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Student Development" title="Taking increasing responsibility" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {responsibility.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Environment & Family Partnership" title="Spaces and communication that support development" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Primary learning environments support reading, direct instruction, discussion, practical investigation, collaboration and independent work.</p>
          <p>Families receive clear information about learning, progress, wellbeing and ways to support development at home.</p>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Available Academic Pathways" title="Three pathways within one educational experience" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pathways.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base font-medium text-foreground">
          Availability by year group and campus is confirmed through the admissions process.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Transition to Preparatory" title="Stronger foundations and growing confidence" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students move forward with stronger academic foundations, established learning habits and growing confidence in managing responsibility.
        </p>
      </Section>

      <CtaBand
        title="Explore Preparatory"
        body="Independence, deeper thinking and an expanding view of the world."
        primary={{ to: "/learning-journey/preparatory", label: "Explore Preparatory" }}
        secondary={{ to: "/admissions", label: "Admissions Overview" }}
      />
    </>
  );
}
