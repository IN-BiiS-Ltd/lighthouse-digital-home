import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";

export const Route = createFileRoute("/learning-journey_/preparatory")({
  head: () => ({
    meta: [
      { title: "Preparatory School | Lighthouse Campus" },
      { name: "description", content: "Explore the Lighthouse Campus Preparatory experience, where learners develop independence, critical thinking, subject depth and growing responsibility." },
      { property: "og:title", content: "Preparatory School | Lighthouse Campus" },
      { property: "og:description", content: "Independence, deeper thinking and an expanding view of the world." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/learning-journey/preparatory" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/learning-journey/preparatory" }],
  }),
  component: Preparatory,
});

const priorities = [
  { title: "Subject Knowledge", body: "Students build deeper understanding across languages, mathematics, sciences, humanities, arts and physical education." },
  { title: "Critical Thinking", body: "Learners examine evidence, compare perspectives, explain reasoning and evaluate conclusions." },
  { title: "Independent Study", body: "Planning, organisation, revision, research and reflection become increasingly important." },
  { title: "Communication", body: "Students express ideas clearly through writing, speech, presentation and digital media." },
  { title: "Collaboration", body: "Group projects and shared responsibilities develop negotiation, listening and collective problem-solving." },
  { title: "Digital Fluency", body: "Students use digital tools responsibly for learning, creation, research and communication." },
  { title: "Identity and Responsibility", body: "Learners develop greater awareness of personal values, relationships, community and future aspirations." },
];

const environments = ["focused study", "laboratory investigation", "discussion", "research", "creative work", "movement", "collaboration", "reflection"];

const pathways = ["Cambridge International Curriculum", "Republic of the Sudan National Curriculum", "Republic of South Sudan National Curriculum"];

function Preparatory() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Learning Journey", to: "/learning-journey" }, { label: "Preparatory" }]}
        eyebrow="Learning Journey / Preparatory"
        title="Independence, deeper thinking and an expanding view of the world."
        intro="Preparatory learners begin to take greater ownership of their work, relationships and future direction."
      />

      <Section>
        <SectionHeading eyebrow="Purpose of the Stage" title="Connecting strong foundations with academic depth" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students learn to manage increasing complexity, organise their work, examine ideas and make responsible choices.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="The Learning Experience" title="A broadening, increasingly subject-specific curriculum" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students investigate, discuss, write, calculate, create, collaborate and reflect with greater precision.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Learning Priorities" title="Seven areas of growing capability" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Teaching, Assessment & Development" title="Structure that transfers responsibility to students" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Teachers combine subject expertise with mentorship. They provide structure while gradually transferring responsibility to students.</p>
          <p>Assessment becomes more varied and increasingly formal while remaining connected to learning. Students receive clear feedback and develop stronger self-assessment and study habits.</p>
          <p>Leadership, service, clubs, arts, sport and wellbeing programmes help learners build confidence and a stronger sense of identity.</p>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Environment" title="Spaces for depth and independence" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {environments.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Family Partnership" title="Supporting independence while keeping families informed" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Communication supports increasing student independence while keeping families meaningfully informed about progress, wellbeing and transition.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Available Academic Pathways" title="Three recognised pathways" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pathways.map((p) => (
            <div key={p} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-medium">{p}</h3>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base font-medium text-foreground">
          Pathway availability and placement are confirmed according to year group, previous study and campus provision during admissions.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Transition to Secondary" title="Understanding expectations and increasing responsibility" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Transition guidance helps students understand academic expectations, future subject choices and the increasing responsibility of Secondary study.
        </p>
      </Section>

      <CtaBand
        title="Explore Secondary"
        body="Scholarship, identity and purposeful direction."
        primary={{ to: "/learning-journey/secondary", label: "Explore Secondary" }}
        secondary={{ to: "/contact", label: "Schedule a Visit" }}
      />
      <ShareBar title="Preparatory School | Lighthouse Campus" />
    </>
  );
}
