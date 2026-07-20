import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Eyebrow, Pullquote, ButtonLink } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { JourneyTimeline } from "@/components/journey-timeline";


export const Route = createFileRoute("/learning-journey")({
  head: () => ({
    meta: [
      { title: "The Learning Journey — Lighthouse Campus" },
      {
        name: "description",
        content:
          "One continuous path from Early Years to Graduation Pathways — designed for who each child is becoming at every stage.",
      },
      { property: "og:title", content: "The Learning Journey — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Early Years, Primary, Preparatory, Secondary and Graduation Pathways at Lighthouse Campus.",
      },
      { property: "og:url", content: "/learning-journey" },
    ],
    links: [{ rel: "canonical", href: "/learning-journey" }],
  }),
  component: LearningJourney,
});

const stages = [
  {
    id: "early-years",
    number: "01",
    name: "Early Years",
    to: "/learning-journey/early-years",
    tagline: "Wonder & first discoveries",
    body: "The foundations of learning are built through play, story, movement, language, exploration and relationships. Children develop confidence, communication and joyful curiosity within a warm and secure environment.",
    focus: ["Language and communication", "Social and emotional growth", "Play-based inquiry", "Movement and coordination", "Care and routine"],
  },
  {
    id: "primary",
    number: "02",
    name: "Primary",
    to: "/learning-journey/primary",
    tagline: "Foundations of knowledge & character",
    body: "Students build strong literacy and numeracy alongside a growing understanding of themselves as learners. Knowledge develops across subjects while habits of focus, curiosity, kindness and perseverance take root.",
    focus: ["Literacy and numeracy", "Scientific curiosity", "Knowledge development", "Creativity and the arts", "Character and community"],
  },
  {
    id: "preparatory",
    number: "03",
    name: "Preparatory",
    to: "/learning-journey/preparatory",
    tagline: "Independence & deeper thinking",
    body: "As learners mature, they take increasing ownership of their work. The curriculum broadens and challenge deepens, developing critical thinking, collaboration, digital fluency and self-direction.",
    focus: ["Critical thinking", "Independent study", "Collaboration", "Subject depth", "Digital fluency"],
  },
  {
    id: "secondary",
    number: "04",
    name: "Secondary",
    to: "/learning-journey/secondary",
    tagline: "Scholarship, identity & direction",
    body: "Students pursue rigorous academic learning while discovering strengths, interests and future aspirations. Mentorship, leadership and service prepare them for the responsibilities ahead.",
    focus: ["Academic rigour", "Specialisation", "Leadership and service", "Research and communication", "University readiness"],
  },
  {
    id: "pathways",
    number: "05",
    name: "Graduation Pathways",
    to: "/learning-journey/graduation-pathways",
    tagline: "Ready for university and life",
    body: "Graduates leave with knowledge, character and confidence. Guidance supports students in identifying universities, careers and future pathways aligned with their strengths, values and aspirations.",
    focus: ["University guidance", "Careers and aspirations", "Personal statement support", "Transition planning", "Alumni community"],
  },
];

function LearningJourney() {
  return (
    <>
      <PageHero
        eyebrow="The Learning Journey"
        title="One continuous path, from first wonder to graduation."
        intro="Each stage is designed for who a child is becoming — not only what they need to know. The journey is coherent, humane and ambitious throughout."
        sections={stages.map((s) => ({ label: s.name, to: s.to }))}
      />

      <Section>
        <SectionHeading
          eyebrow="The journey at a glance"
          title="Five continuous chapters, one connected education."
          description="From first wonder to the moment a student graduates — each stage flows into the next."
        />
        <div className="mt-14">
          <JourneyTimeline stages={stages} />
        </div>
      </Section>

      <Section tone="soft">
        <div className="space-y-16 md:space-y-24">
          {stages.map((stage) => (
            <div
              key={stage.id}
              id={stage.id}
              className="grid scroll-mt-24 gap-8 md:grid-cols-[auto_1fr] md:gap-14"
            >
              <div className="md:pt-2">
                <span className="text-serif-accent text-7xl italic text-gold/80 md:text-8xl">
                  {stage.number}
                </span>
              </div>
              <div className="border-t border-border pt-6">

                <Eyebrow>{stage.tagline}</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
                  {stage.name}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {stage.body}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                  {stage.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-3 text-sm font-medium text-foreground"
                    >
                      <span aria-hidden className="size-1.5 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <ButtonLink to={stage.to} variant="outline" size="sm">
                    Explore {stage.name}
                  </ButtonLink>
                </div>
              </div>
              {i < stages.length - 1 ? null : null}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <Pullquote
          onNavy
          quote="Every stage prepares the next, and every child moves through it known, supported and genuinely challenged."
        />
      </Section>

      <CtaBand
        eyebrow="Invitation"
        title="Find the right stage for your child"
        body="Whether a child is beginning Early Years or joining Secondary, the admissions team will guide the family through the next step."
        primary={{ to: "/admissions", label: "Admissions Overview" }}
        secondary={{ to: "/contact", label: "Schedule a Visit" }}
      />
    </>
  );
}
