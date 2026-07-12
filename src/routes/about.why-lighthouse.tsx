import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Sun,
  BookOpen,
  Compass,
  Sparkles,
  Sprout,
  Flag,
  ShieldCheck,
  Award,
  Sunrise,
  Telescope,
  Anchor,
  Lightbulb,
  Waypoints,
  CircleDot,
  Gem,
  ShieldHalf,
  ArrowDown,
} from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  ButtonLink,
  BrandLogo,
} from "@/components/blocks";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about/why-lighthouse")({
  head: () => ({
    meta: [
      { title: "Why Lighthouse Campus | The Meaning Behind Our Name" },
      {
        name: "description",
        content:
          "Discover the story behind Lighthouse Campus, the educational philosophy reflected in its name, the symbolism of its logo, and the values that guide every learner's journey.",
      },
      {
        property: "og:title",
        content: "Why Lighthouse Campus | The Meaning Behind Our Name",
      },
      {
        property: "og:description",
        content:
          "The educational philosophy embedded in the name, the symbolism of the logo, and the values that guide every learner at Lighthouse Campus.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about/why-lighthouse" },
    ],
    links: [{ rel: "canonical", href: "/about/why-lighthouse" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Why Lighthouse Campus — The Meaning Behind Our Name",
          description:
            "The educational philosophy embedded in the name, the symbolism of the logo, and the values that guide every learner at Lighthouse Campus.",
          isPartOf: {
            "@type": "EducationalOrganization",
            name: "Lighthouse Campus",
          },
        }),
      },
    ],
  }),
  component: WhyLighthouse,
});

/* ------------------------------------------------------------------ */
/* Scroll-reveal wrapper — light, elegant fade-and-rise               */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const meanings = [
  { icon: Sun, title: "Light", body: "Illuminating the path to understanding rather than dictating the destination." },
  { icon: BookOpen, title: "Knowledge", body: "A lifelong pursuit — understanding that endures well beyond the classroom." },
  { icon: Compass, title: "Discovery", body: "The quiet joy of finding answers through inquiry, exploration and wonder." },
  { icon: Sparkles, title: "Curiosity", body: "Protecting the instinct to question, imagine and seek what lies beyond." },
  { icon: Sprout, title: "Growth", body: "Nurturing intellectual, personal and emotional development, step by step." },
  { icon: Flag, title: "Leadership", body: "Forming confident, principled young people ready to guide others well." },
  { icon: ShieldCheck, title: "Responsibility", body: "Learning to act with integrity toward oneself, others and the world." },
  { icon: Award, title: "Confidence", body: "The quiet assurance that comes from being known, challenged and supported." },
  { icon: Sunrise, title: "Hope", body: "A steady light that reminds every learner what is truly possible." },
  { icon: Telescope, title: "Future", body: "Preparing young people to navigate a changing world with purpose." },
];

const acronym = [
  { letter: "L", word: "Leadership", body: "Developing confident, responsible and ethical leaders." },
  { letter: "I", word: "Inquiry", body: "Encouraging curiosity, investigation and lifelong learning." },
  { letter: "G", word: "Growth", body: "Supporting intellectual, personal and emotional development." },
  { letter: "H", word: "Humanity", body: "Building compassion, empathy and meaningful relationships." },
  { letter: "T", word: "Transformation", body: "Helping learners become the best version of themselves." },
  { letter: "H", word: "Harmony", body: "Creating balanced development of mind, character and wellbeing." },
  { letter: "O", word: "Opportunity", body: "Helping every learner discover their unique strengths." },
  { letter: "U", word: "Understanding", body: "Promoting deep thinking, reflection and global awareness." },
  { letter: "S", word: "Stewardship", body: "Preparing learners to contribute responsibly to society." },
  { letter: "E", word: "Excellence", body: "Pursuing continuous improvement in learning and life." },
];

const logoCallouts = [
  { icon: Anchor, name: "The Lighthouse", meanings: ["Guidance", "Leadership", "Vision"] },
  { icon: Lightbulb, name: "The Light", meanings: ["Knowledge", "Hope", "Discovery"] },
  { icon: BookOpen, name: "The Open Book", meanings: ["Learning", "Curiosity", "Wisdom"] },
  { icon: Waypoints, name: "The Network", meanings: ["Innovation", "Connection", "Future Learning", "Collaboration"] },
  { icon: CircleDot, name: "The Circle", meanings: ["Continuity", "Belonging", "Lifelong Learning"] },
  { icon: Gem, name: "The Gold", meanings: ["Excellence", "Achievement", "Aspiration"] },
  { icon: ShieldHalf, name: "The Blue", meanings: ["Trust", "Confidence", "Wisdom", "Professionalism"] },
];

const details = [
  { label: "Every colour", body: "Navy for trust and depth, gold for excellence and warmth, blue for confidence and wisdom." },
  { label: "Every shape", body: "The lighthouse stands as a symbol of steady guidance, never controlling the journey." },
  { label: "Every proportion", body: "Balanced and considered — a reflection of harmony between mind, character and wellbeing." },
  { label: "Every line", body: "Drawn with intention, connecting learning, community and the world beyond." },
  { label: "Every light", body: "A reminder that education illuminates the path rather than dictating the destination." },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function WhyLighthouse() {
  const [activeCallout, setActiveCallout] = useState(0);

  return (
    <>
      {/* ----------------------------------------------------- Hero */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy text-navy-foreground">
        {/* Beacon light layers */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-1/2 size-[140vmax] -translate-x-1/2 -translate-y-1/2 beacon-sweep opacity-40"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--gold) 32%, transparent) 18deg, transparent 42deg, transparent 180deg, color-mix(in oklab, var(--sky) 22%, transparent) 200deg, transparent 226deg, transparent 360deg)",
              maskImage:
                "radial-gradient(closest-side, black 10%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(closest-side, black 10%, transparent 72%)",
            }}
          />
          <div
            className="absolute left-1/2 top-[46%] size-[46rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full beacon-pulse"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent) 0%, transparent 62%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 8%, color-mix(in oklab, var(--brand-blue) 30%, transparent), transparent 60%), linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--navy) 70%, transparent) 100%)",
            }}
          />
        </div>

        <Container className="relative py-24 text-center md:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="light-drift">
              <BrandLogo
                alt="Lighthouse Campus official logo"
                className="mx-auto h-40 w-auto drop-shadow-[0_18px_50px_rgba(212,175,55,0.28)] md:h-52"
              />
            </div>
            <p className="eyebrow mt-8 text-gold">
              Why Lighthouse? · The Name, the Symbol, the Philosophy
            </p>
            <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.03] tracking-tight md:text-7xl">
              More Than a Name
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/85 md:text-xl">
              Every meaningful institution begins with a purpose. Lighthouse
              Campus was named to express an educational philosophy that guides
              learning, develops character, inspires curiosity, and prepares
              young people to navigate an ever-changing world with confidence.
            </p>
            <div className="mt-10">
              <ButtonLink
                to="/about/why-lighthouse#philosophy"
                variant="gold"
                size="lg"
              >
                Discover Our Educational Philosophy
              </ButtonLink>
            </div>
            <ArrowDown
              aria-hidden
              className="mt-14 size-5 text-navy-foreground/50 light-drift"
            />
          </div>
        </Container>
      </section>

      {/* --------------------------------------- Section 1 · Why Lighthouse */}
      <Section id="philosophy" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(50% 60% at 85% 0%, color-mix(in oklab, var(--gold) 12%, transparent), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Why Lighthouse?</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-[1.12] md:text-[2.75rem]">
              A lighthouse never controls the journey. It illuminates the path.
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Throughout history, the lighthouse has stood for something
              constant — guidance, hope, clarity, vision, leadership and trust.
              It does not seize the wheel or choose the destination. It stands
              steady on the shore, offering light so that others can find their
              own way safely home.
            </p>
            <p>
              That is exactly how we understand education. Teaching is not the
              act of handing over answers. It is the patient work of developing
              learners who can discover answers for themselves.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-3">
              {["Guidance", "Hope", "Clarity", "Vision", "Leadership", "Trust"].map(
                (word) => (
                  <li
                    key={word}
                    className="rounded-xl border border-border bg-card px-5 py-4 font-display text-lg text-foreground"
                  >
                    <span className="mr-2 text-gold">·</span>
                    {word}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------ Section 2 · Meaning behind the name */}
      <Section tone="muted">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">The Meaning Behind the Name</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight md:text-4xl">
              Ten ideas, held in a single word
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Each carries a promise about how young people learn, grow and
              belong at Lighthouse Campus.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {meanings.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.title} delay={(i % 5) * 70}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_48px_-24px_rgba(212,175,55,0.5)]">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-brand-blue transition-colors duration-300 group-hover:bg-gold/15 group-hover:text-gold">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                    {m.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] motion-reduce:grid-rows-[1fr]">
                    <p className="overflow-hidden text-[0.95rem] leading-relaxed text-muted-foreground">
                      <span className="mt-3 block">{m.body}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------------------- Section 3 · The meaning of LIGHTHOUSE */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">The Meaning of LIGHTHOUSE</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight md:text-4xl">
              Every letter is a commitment
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {acronym.map((item, i) => (
            <Reveal key={`${item.letter}-${item.word}`} delay={(i % 2) * 90}>
              <div className="group flex h-full items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_16px_44px_-26px_rgba(11,29,58,0.4)]">
                <div className="relative flex size-16 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 30%, color-mix(in oklab, var(--gold) 40%, transparent), transparent 70%)",
                    }}
                  />
                  <span className="relative font-display text-3xl font-medium">
                    {item.letter}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground">
                    {item.word}
                  </h3>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ----------------------------- Section 4 · Understanding the logo */}
      <Section tone="navy" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(45% 55% at 50% 12%, color-mix(in oklab, var(--gold) 16%, transparent), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow onNavy className="justify-center">
              Understanding the Logo
            </Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight text-navy-foreground md:text-4xl">
              Read the mark, and you read the mission
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">
              Select each element to reveal the meaning it carries.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Logo with responsive glow */}
          <Reveal className="relative flex justify-center">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 size-[26rem] max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full beacon-pulse"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--gold) 26%, transparent) 0%, transparent 62%)",
              }}
            />
            <BrandLogo
              alt="Lighthouse Campus official logo, shown large"
              className="relative h-64 w-auto drop-shadow-[0_20px_60px_rgba(212,175,55,0.3)] md:h-80"
            />
          </Reveal>

          {/* Interactive callouts */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-3">
              {logoCallouts.map((c, i) => {
                const Icon = c.icon;
                const isActive = activeCallout === i;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setActiveCallout(i)}
                    aria-expanded={isActive}
                    className={cn(
                      "w-full rounded-2xl border p-5 text-left transition-all duration-300",
                      isActive
                        ? "border-gold bg-navy-foreground/[0.06] shadow-[0_0_0_1px_var(--gold)]"
                        : "border-navy-foreground/15 hover:border-navy-foreground/35",
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "inline-flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
                          isActive
                            ? "bg-gold/15 text-gold"
                            : "bg-navy-foreground/10 text-navy-foreground/70",
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="font-display text-lg font-medium text-navy-foreground">
                        {c.name}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="mt-4 flex flex-wrap gap-2 pl-14">
                          {c.meanings.map((m) => (
                            <span
                              key={m}
                              className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-sm font-medium text-gold"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* --------------------------- Section 5 · Every detail has meaning */}
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Every Detail Has Meaning</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
              Nothing here was created randomly.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every element of the Lighthouse Campus identity represents the
              educational philosophy of the institution — considered, intentional
              and made to endure.
            </p>
          </Reveal>
          <div className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 70}>
                <div className="flex flex-col gap-1 bg-card p-6 sm:flex-row sm:items-baseline sm:gap-8">
                  <p className="w-44 shrink-0 font-display text-lg font-medium text-foreground">
                    <span className="mr-3 text-gold">—</span>
                    {d.label}
                  </p>
                  <p className="text-[1.02rem] leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* -------------------------------------- Section 6 · Our Promise */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--navy) 96%, transparent) 0%, color-mix(in oklab, var(--brand-blue) 30%, var(--navy)) 62%, color-mix(in oklab, var(--gold) 42%, var(--navy)) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 size-[70rem] max-w-[140vw] -translate-x-1/2 translate-y-1/3 rounded-full beacon-pulse"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 45%, transparent) 0%, transparent 60%)",
            }}
          />
        </div>
        <Container className="relative py-28 text-center md:py-36">
          <Reveal className="mx-auto max-w-3xl">
            <Eyebrow onNavy className="justify-center">
              Our Promise
            </Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl">
              We Do More Than Teach.
            </h2>
            <div className="mx-auto mt-8 max-w-xl space-y-1 text-lg leading-relaxed text-navy-foreground/85 md:text-xl">
              <p>We guide. We inspire. We nurture curiosity.</p>
              <p>We build confidence. We cultivate character.</p>
              <p>
                We prepare learners to contribute meaningfully to their
                communities and to the world.
              </p>
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-balance font-display text-2xl font-medium leading-snug text-gold md:text-[1.9rem]">
              At Lighthouse Campus, learning is a journey illuminated by purpose.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Continue"
        title="Discover the community behind the name"
        body="Read our full story, meet the people who guide the campus, and see how our philosophy shapes daily life."
        primary={{ to: "/about", label: "Explore About Lighthouse" }}
        secondary={{ to: "/admissions", label: "Admissions overview" }}
      />
    </>
  );
}
