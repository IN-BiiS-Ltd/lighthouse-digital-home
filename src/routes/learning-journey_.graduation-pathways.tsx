import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Pullquote, Section } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CrystalField } from "@/components/crystal-field";
import { ChapterRail } from "@/components/chapter-rail";
import { ChapterActions } from "@/components/chapter-actions";
import {
  Compass,
  GraduationCap,
  FileText,
  Briefcase,
  ShieldCheck,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/learning-journey_/graduation-pathways")({
  head: () => ({
    meta: [
      { title: "Graduation Pathways | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Prepared for university. Ready for life. A cinematic six-chapter portrait of how Lighthouse guides graduates into meaningful futures.",
      },
      { property: "og:title", content: "Graduation Pathways | Lighthouse Campus" },
      {
        property: "og:description",
        content: "Prepared for university. Ready for life. Grounded in purpose.",
      },
      { property: "og:url", content: "/learning-journey/graduation-pathways" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/learning-journey/graduation-pathways" }],
  }),
  component: GraduationPathways,
});

/* ------------------------------------------------------------------ */
/* Content — six chapters. Chip counts are kept odd for consistency.  */
/* ------------------------------------------------------------------ */

type Chapter = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: LucideIcon;
  focus?: string[];
  prose?: string;
};

const chapters: Chapter[] = [
  {
    id: "understanding-the-learner",
    number: "01",
    eyebrow: "Understanding the Learner",
    title: "Reflection before decision",
    body: "Every pathway begins with the person walking it. Before options are weighed, learners are invited into an honest, unhurried portrait of who they are and who they are becoming.",
    icon: Compass,
    focus: [
      "academic strengths",
      "interests",
      "values",
      "personal qualities",
      "preferred ways of learning",
      "long-term aspirations",
      "areas for further development",
    ],
  },
  {
    id: "university-guidance",
    number: "02",
    eyebrow: "University Guidance",
    title: "Supporting learners in understanding their options",
    body: "Guidance is not a template. It is a careful reading of the landscape — programmes, institutions, expectations and realities — placed alongside the learner's own compass.",
    icon: GraduationCap,
    focus: [
      "programme options",
      "university requirements",
      "application timelines",
      "entry expectations",
      "academic fit",
      "personal fit",
      "financial and practical considerations",
    ],
  },
  {
    id: "application-support",
    number: "03",
    eyebrow: "Application Support",
    title: "Practical support across the application journey",
    body: "From first draft to final submission, learners are accompanied through the craft and choreography of applications — clear, deliberate, and grounded in their authentic voice.",
    icon: FileText,
    focus: [
      "application planning",
      "document preparation",
      "personal statement development",
      "interview preparation",
      "reference coordination",
      "portfolio guidance where relevant",
      "deadline management",
    ],
  },
  {
    id: "careers-and-aspirations",
    number: "04",
    eyebrow: "Careers and Aspirations",
    title: "Connecting present choices with future possibilities",
    body: "Career exploration at Lighthouse widens the horizon before it narrows the path.",
    icon: Briefcase,
    prose:
      "Students explore professions, industries, entrepreneurship, public service, research and emerging fields. Career exploration helps learners connect present choices with future possibilities — turning ambition into direction and direction into deliberate action.",
  },
  {
    id: "readiness-for-life",
    number: "05",
    eyebrow: "Readiness for Life",
    title: "Preparation extends beyond formal applications",
    body: "A university place is only one destination. Lighthouse graduates are prepared for the wider architecture of adult life — its freedoms, its responsibilities, its quiet daily disciplines.",
    icon: ShieldCheck,
    focus: [
      "independence",
      "communication",
      "decision-making",
      "organisation",
      "financial awareness",
      "digital responsibility",
      "resilience",
      "ethical judgement",
      "cultural awareness",
    ],
  },
  {
    id: "future-alumni-community",
    number: "06",
    eyebrow: "The Future Alumni Community",
    title: "Graduates remain part of the Lighthouse story",
    body: "Graduation opens the next chapter of belonging.",
    icon: Users,
    prose:
      "The future alumni community will create opportunities for connection, mentorship, contribution and continuing institutional relationships — a lifelong network of Lighthouse voices, projects and conversations that extend well beyond graduation day.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function GraduationPathways() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Learning Journey", to: "/learning-journey" },
          { label: "Graduation Pathways" },
        ]}
        eyebrow="Learning Journey / Graduation Pathways"
        title="Prepared for university. Ready for life. Grounded in purpose."
        intro="Graduation is not an ending. It is the point at which knowledge, character, confidence and aspiration move into a wider world of choices and responsibilities."
      />

      <PathwayCinema chapters={chapters} />

      <Section tone="navy">
        <Pullquote
          onNavy
          quote="A Lighthouse graduate leaves prepared to learn continuously, act responsibly and build a future with purpose."
        />
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

/* ------------------------------------------------------------------ */
/* PathwayCinema — alternating cinematic panels                        */
/* ------------------------------------------------------------------ */

function PathwayCinema({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="relative">
      {chapters.map((c, i) => {
        const dark = i % 2 === 0;
        const Icon = c.icon;
        return (
          <section
            key={c.id}
            id={c.id}
            className={cx(
              "stage-panel relative isolate overflow-hidden scroll-mt-24 py-24 md:py-32",
              dark ? "bg-navy text-navy-foreground grain" : "bg-sand text-foreground",
            )}
          >
            {/* Atmosphere */}
            {dark ? (
              <>
                <div aria-hidden className="pointer-events-none absolute inset-0 mesh-navy opacity-70" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 15% 25%, color-mix(in oklab, var(--gold) 22%, transparent) 0%, transparent 60%)",
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
                      "radial-gradient(70% 90% at 85% 20%, color-mix(in oklab, var(--gold) 14%, transparent) 0%, transparent 65%)",
                  }}
                />
                <CrystalField variant="light" count={4} className="opacity-90" />
              </>
            )}

            <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[280px_1fr] md:gap-16 md:px-8 lg:gap-20">
              {/* Numeral column */}
              <div className="relative">
                <div className="sticky top-24">
                  <div className={cx("relative flex items-start gap-4", dark ? "text-navy-foreground" : "text-foreground")}>
                    <span
                      aria-hidden
                      className={cx(
                        "mt-6 hidden h-24 w-px md:block",
                        dark
                          ? "bg-gradient-to-b from-transparent via-gold/60 to-transparent"
                          : "bg-gradient-to-b from-transparent via-brand-blue/50 to-transparent",
                      )}
                    />
                    <div>
                      <span className="text-serif-accent text-gilded block text-[6.5rem] leading-none italic md:text-[9rem]">
                        {c.number}
                      </span>
                      <div
                        className={cx(
                          "mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]",
                          dark
                            ? "border-gold/40 bg-navy/40 text-gold"
                            : "border-brand-blue/25 bg-white/70 text-brand-blue",
                        )}
                      >
                        <span aria-hidden className={cx("size-1.5 rounded-full", dark ? "bg-gold" : "bg-brand-blue")} />
                        Chapter {c.number}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className="relative">
                <Eyebrow onNavy={dark}>{c.eyebrow}</Eyebrow>
                <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl lg:text-6xl">
                  <span className="inline-flex items-center gap-4">
                    <Icon
                      aria-hidden
                      className={cx("size-8 shrink-0 md:size-10", dark ? "text-gold" : "text-brand-blue")}
                      strokeWidth={1.4}
                    />
                    {c.title}
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
                  {c.body}
                </p>

                {c.focus && (
                  <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-3">
                    {c.focus.map((f, j) => (
                      <li
                        key={f}
                        className={cx(
                          "focus-chip group relative overflow-hidden rounded-xl px-4 py-3.5 text-sm font-medium capitalize transition-all duration-500",
                          dark
                            ? "border border-gold/25 bg-navy/55 text-navy-foreground/95 backdrop-blur-sm hover:border-gold/70 hover:bg-navy/75"
                            : "border border-brand-blue/15 bg-white/85 text-foreground shadow-e1 hover:border-brand-blue/40 hover:shadow-e2",
                        )}
                        style={{ animationDelay: `${j * 70}ms` }}
                      >
                        <span
                          aria-hidden
                          className={cx(
                            "pointer-events-none absolute -inset-x-1 -top-px h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                            dark
                              ? "bg-gradient-to-r from-transparent via-gold to-transparent"
                              : "bg-gradient-to-r from-transparent via-brand-blue to-transparent",
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
                )}

                {c.prose && (
                  <blockquote
                    className={cx(
                      "relative mt-10 max-w-2xl rounded-2xl border-l-2 py-4 pl-6 pr-4 text-lg italic leading-relaxed md:text-xl",
                      dark
                        ? "border-gold/70 bg-navy/40 text-navy-foreground/90"
                        : "border-brand-blue/50 bg-white/70 text-foreground/90 shadow-e1",
                    )}
                  >
                    {c.prose}
                  </blockquote>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing rail */}
      <section className="relative isolate overflow-hidden bg-sand py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 30%, color-mix(in oklab, var(--gold) 16%, transparent) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <span className="text-serif-accent text-gilded text-5xl italic md:text-6xl">Beyond</span>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Six chapters. One horizon. The Lighthouse graduate steps outward — steady, prepared, and unmistakably their own.
          </p>
          <Link
            to="/our-model/graduate-profile"
            className="sheen group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-navy-foreground shadow-[0_18px_40px_-18px_rgba(11,29,58,0.55)] transition-all duration-300 hover:shadow-[0_22px_55px_-14px_rgba(11,29,58,0.75)]"
          >
            <span>Meet the Graduate</span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
