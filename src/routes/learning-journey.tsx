import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, Eyebrow, Pullquote } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { JourneyTimeline } from "@/components/journey-timeline";
import { CrystalField } from "@/components/crystal-field";
import { ChapterRail } from "@/components/chapter-rail";
import { ChapterActions } from "@/components/chapter-actions";
import { Sparkles, BookOpen, Compass, GraduationCap, Rocket, ArrowRight } from "lucide-react";


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

      <StageCinema stages={stages} />


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

/* ------------------------------------------------------------------ */
/* StageCinema — cinematic, alternating full-bleed stage panels        */
/* ------------------------------------------------------------------ */

const stageIcons = [Sparkles, BookOpen, Compass, GraduationCap, Rocket] as const;

type Stage = { id: string; number: string; name: string; to: string; tagline: string; body: string; focus: string[] };

function StageCinema({ stages }: { stages: Stage[] }) {
  return (
    <div className="relative">
      {stages.map((stage, i) => {
        const dark = i % 2 === 0;
        const Icon = stageIcons[i] ?? Sparkles;
        return (
          <section
            key={stage.id}
            id={stage.id}
            className={cx(
              "stage-panel relative isolate overflow-hidden scroll-mt-24 py-24 md:py-32",
              dark
                ? "bg-navy text-navy-foreground grain"
                : "bg-sand text-foreground",
            )}
          >
            {/* Atmosphere layers */}
            {dark ? (
              <>
                <div aria-hidden className="pointer-events-none absolute inset-0 mesh-navy opacity-70" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 85% 20%, color-mix(in oklab, var(--gold) 22%, transparent) 0%, transparent 60%)",
                  }}
                />
                <CrystalField className="opacity-80" count={5} />
              </>
            ) : (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(70% 90% at 15% 20%, color-mix(in oklab, var(--gold) 14%, transparent) 0%, transparent 65%)",
                  }}
                />
                <CrystalField variant="light" count={4} className="opacity-90" />
              </>
            )}

            <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[280px_1fr] md:gap-16 md:px-8 lg:gap-20">
              {/* Numeral column — the cinematic hero glyph */}
              <div className="relative">
                <div className="sticky top-24">
                  <div
                    className={cx(
                      "relative flex items-start gap-4",
                      dark ? "text-navy-foreground" : "text-foreground",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cx(
                        "mt-6 hidden h-24 w-px md:block",
                        dark ? "bg-gradient-to-b from-transparent via-gold/60 to-transparent" : "bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent",
                      )}
                    />
                    <div>
                      <span
                        className={cx(
                          "text-serif-accent block text-[6.5rem] leading-none italic md:text-[9rem]",
                          dark ? "text-gilded" : "text-gilded",
                        )}
                      >
                        {stage.number}
                      </span>
                      <div className={cx("mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]", dark ? "border-gold/40 bg-navy/40 text-gold" : "border-brand-blue/25 bg-white/70 text-brand-blue")}>
                        <span aria-hidden className={cx("size-1.5 rounded-full", dark ? "bg-gold" : "bg-brand-blue")} />
                        Chapter {stage.number}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className="relative">
                <Eyebrow onNavy={dark}>{stage.tagline}</Eyebrow>
                <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl lg:text-6xl">
                  <span className="inline-flex items-center gap-4">
                    <Icon
                      aria-hidden
                      className={cx(
                        "size-8 shrink-0 md:size-10",
                        dark ? "text-gold" : "text-brand-blue",
                      )}
                      strokeWidth={1.4}
                    />
                    {stage.name}
                  </span>
                </h2>

                <div className={cx("ornament-rule mt-7 max-w-md", dark && "ornament-rule--on-navy")}>
                  <span className="ornament-rule__mark" aria-hidden />
                </div>

                <p
                  className={cx(
                    "mt-7 max-w-2xl text-lg leading-relaxed md:text-xl",
                    dark ? "text-navy-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {stage.body}
                </p>

                <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
                  {stage.focus.map((f, j) => (
                    <li
                      key={f}
                      className={cx(
                        "focus-chip group relative overflow-hidden rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-500",
                        dark
                          ? "border border-gold/25 bg-navy/55 text-navy-foreground/95 backdrop-blur-sm hover:border-gold/70 hover:bg-navy/75"
                          : "border border-brand-blue/15 bg-white/85 text-foreground shadow-e1 hover:border-brand-blue/40 hover:shadow-e2",
                      )}
                      style={{ animationDelay: `${j * 90}ms` }}
                    >
                      <span
                        aria-hidden
                        className={cx(
                          "pointer-events-none absolute -inset-x-1 -top-px h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                          dark ? "bg-gradient-to-r from-transparent via-gold to-transparent" : "bg-gradient-to-r from-transparent via-brand-blue to-transparent",
                        )}
                      />
                      <span className="relative flex items-start gap-3">
                        <span
                          aria-hidden
                          className={cx(
                            "mt-2 size-1.5 shrink-0 rounded-full transition-transform duration-500 group-hover:scale-150",
                            dark ? "bg-gold" : "bg-brand-blue",
                          )}
                        />
                        <span>{f}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    to={stage.to}
                    className={cx(
                      "sheen group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300",
                      dark
                        ? "bg-gold text-navy shadow-[0_18px_40px_-16px_rgba(212,175,55,0.6)] hover:shadow-[0_22px_55px_-14px_rgba(212,175,55,0.8)]"
                        : "bg-navy text-navy-foreground shadow-[0_18px_40px_-18px_rgba(11,29,58,0.55)] hover:shadow-[0_22px_55px_-14px_rgba(11,29,58,0.75)]",
                    )}
                  >
                    <span>Explore {stage.name}</span>
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

/** Tiny local `classnames` helper to keep the file self-contained. */
function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
