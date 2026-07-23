import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";

export const Route = createFileRoute("/learning-journey_/secondary")({
  head: () => ({
    meta: [
      { title: "Secondary School | Lighthouse Campus" },
      { name: "description", content: "Explore the Lighthouse Campus Secondary experience, combining rigorous academic study, mentorship, leadership and preparation for university and life." },
      { property: "og:title", content: "Secondary School | Lighthouse Campus" },
      { property: "og:description", content: "Scholarship, identity and purposeful direction." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/learning-journey/secondary" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/learning-journey/secondary" }],
  }),
  component: Secondary,
});

const priorities = [
  { title: "Academic Rigour", body: "Students develop secure and increasingly specialised knowledge within their selected pathway." },
  { title: "Research and Independent Learning", body: "Learners plan, investigate, evaluate sources, construct arguments and manage extended work." },
  { title: "Communication", body: "Students communicate with precision through academic writing, presentation, discussion and collaborative work." },
  { title: "Leadership and Service", body: "Opportunities to lead, mentor and contribute develop responsibility and confidence." },
  { title: "Personal Direction", body: "Guidance helps students understand strengths, interests, values and possible future pathways." },
  { title: "University and Career Readiness", body: "Students develop the academic, organisational and personal capabilities required for further education and adult responsibility." },
];

const contributions = ["student leadership", "service", "clubs", "arts", "athletics", "mentoring", "community programmes", "institutional dialogue"];

const pathways = [
  { title: "Cambridge International Curriculum", body: "An internationally recognised route supporting formal qualifications, academic depth, independent learning and global university progression." },
  { title: "Republic of the Sudan National Curriculum", body: "A nationally recognised route supporting progression within the Sudanese educational system while benefiting from the wider Lighthouse experience." },
  { title: "Republic of South Sudan National Curriculum", body: "A nationally recognised route supporting progression within the South Sudanese educational system within an internationally inspired learning environment." },
];

function Secondary() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Learning Journey", to: "/learning-journey" }, { label: "Secondary" }]}
        eyebrow="Learning Journey / Secondary"
        title="Scholarship, identity and purposeful direction."
        intro="Secondary students pursue rigorous academic learning while developing the judgement, independence and self-knowledge required for life beyond school."
      />

      <Section>
        <SectionHeading eyebrow="Purpose of the Stage" title="Academic depth, personal direction and preparation for future pathways" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students strengthen subject knowledge while making increasingly informed decisions about university, careers and contribution.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="The Learning Experience" title="Advanced study, research and sustained independent learning" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students engage in advanced subject study, research, discussion, problem-solving, practical work and sustained independent learning. Teachers provide expertise, mentorship and clear guidance.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Learning Priorities" title="Six areas of scholarly and personal development" />
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
        <SectionHeading eyebrow="Teaching & Assessment" title="Subject expertise balanced with mentorship" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Teaching balances explicit instruction, scholarly discussion, independent study, feedback and preparation for formal qualifications.</p>
          <p>Assessment provides evidence of subject mastery, progress and readiness. Formal examinations form one part of a wider assessment approach that includes coursework, projects, practical work, research and ongoing feedback where appropriate to the pathway.</p>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Student Development" title="Contribution beyond the classroom" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contributions.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Wellbeing, Guidance & Family Partnership" title="Ambition supported by pastoral care" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Academic ambition is supported by pastoral care, mentorship, transition guidance and attention to healthy routines and relationships.</p>
          <p>Families receive clear guidance about academic choices, progress, examinations, future pathways and transition planning.</p>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Available Academic Pathways" title="Three recognised routes" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pathways.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base font-medium text-foreground">
          Exact qualifications, subjects and year-group availability must only be published after formal confirmation.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Transition to Graduation Pathways" title="Connecting achievement with realistic future choices" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Students receive structured support in connecting achievement, interests, values and aspirations with realistic future choices.
        </p>
      </Section>

      <CtaBand
        title="Explore Graduation Pathways"
        body="Prepared for university. Ready for life. Grounded in purpose."
        primary={{ to: "/learning-journey/graduation-pathways", label: "Explore Graduation Pathways" }}
        secondary={{ to: "/admissions", label: "Admissions Overview" }}
      />
      <ShareBar title="Secondary School | Lighthouse Campus" />
    </>
  );
}
