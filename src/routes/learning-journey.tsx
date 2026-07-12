import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Eyebrow, Pullquote } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

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
    tagline: "Wonder & first discoveries",
    body: "The foundations of learning are built through play, story, movement and relationships. Children develop language, confidence and a joyful curiosity about the world in a warm, secure environment.",
    focus: ["Language & communication", "Social & emotional growth", "Play-based inquiry", "Care & routine"],
  },
  {
    id: "primary",
    number: "02",
    name: "Primary",
    tagline: "Foundations of knowledge & character",
    body: "Students build strong literacy and numeracy alongside a growing sense of themselves as learners. Knowledge deepens, and habits of focus, kindness and perseverance take root.",
    focus: ["Literacy & numeracy", "Scientific curiosity", "Creativity & the arts", "Character & community"],
  },
  {
    id: "preparatory",
    number: "03",
    name: "Preparatory",
    tagline: "Independence & deeper thinking",
    body: "As learners mature, they take greater ownership of their work. The curriculum broadens and challenges grow, developing critical thinking, collaboration and self-direction.",
    focus: ["Critical thinking", "Independent study", "Collaboration", "Digital fluency"],
  },
  {
    id: "secondary",
    number: "04",
    name: "Secondary",
    tagline: "Scholarship, identity & direction",
    body: "Students pursue rigorous academic study while discovering their strengths, passions and voice. Mentorship, leadership and service prepare them for the responsibilities ahead.",
    focus: ["Academic rigour", "Leadership & service", "Specialisation", "University readiness"],
  },
  {
    id: "pathways",
    number: "05",
    name: "Graduation Pathways",
    tagline: "Ready for university and life",
    body: "Graduates leave with the knowledge, character and confidence to thrive — supported by careful guidance toward universities and pathways that fit who they are and what they hope to build.",
    focus: ["University guidance", "Personal statement support", "Careers & aspirations", "Alumni community"],
  },
];

function LearningJourney() {
  return (
    <>
      <PageHero
        eyebrow="The Learning Journey"
        title="One continuous path, from first wonder to graduation."
        intro="Each stage is designed for who a child is becoming — not only what they need to know. The journey is coherent, humane and ambitious throughout."
        sections={stages.map((s) => ({ label: s.name, to: `/learning-journey#${s.id}` }))}
      />

      <Section>
        <div className="space-y-16 md:space-y-24">
          {stages.map((stage, i) => (
            <div
              key={stage.id}
              id={stage.id}
              className="grid scroll-mt-24 gap-8 md:grid-cols-[auto_1fr] md:gap-14"
            >
              <div className="md:pt-2">
                <span className="font-display text-6xl text-gold/70 md:text-7xl">
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
        body="Whether your child is beginning Early Years or joining Secondary, our admissions team will guide you."
      />
    </>
  );
}
