import type { ReactNode } from "react";
import { Section, SectionHeading, FeatureCard, Eyebrow, SmartLink } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";
import { StatusPill, type ServiceStatus } from "@/components/status-pill";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Shared types                                                        */
/* ------------------------------------------------------------------ */

export interface Breadcrumb { label: string; to?: string }
export interface CardLink { title: string; to: string; body: string; icon?: ReactNode }
export interface CtaConfig {
  title: string;
  body: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}

/* ------------------------------------------------------------------ */
/* DevelopmentTimeline — descriptive Discovery → Launch stepper.       */
/* Deliberately without dates. Uses the campus rail motif.             */
/* ------------------------------------------------------------------ */

const DEFAULT_STAGES = [
  { key: "discovery", name: "Discovery", body: "We listen to families, learners and educators to understand the real need." },
  { key: "design", name: "Design", body: "We shape the service so it reflects the way the campus already works." },
  { key: "pilot", name: "Pilot", body: "We trial it quietly with a small group and refine what does not yet serve people well." },
  { key: "launch", name: "Launch", body: "We release the service once it can stand alongside the rest of the campus with confidence." },
] as const;

export type TimelineStage = { key: string; name: string; body: string };

function DevelopmentTimeline({
  stages = DEFAULT_STAGES as unknown as TimelineStage[],
  currentStage,
}: {
  stages?: TimelineStage[];
  currentStage?: string;
}) {
  const currentIndex = Math.max(
    0,
    stages.findIndex((s) => s.key === currentStage),
  );
  return (
    <div className="relative">
      {/* Desktop rail */}
      <div className="relative hidden md:block">
        <div aria-hidden className="absolute left-0 right-0 top-[22px] h-px bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10" />
        <ol
          className="relative grid gap-6"
          style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}
        >
          {stages.map((s, i) => {
            const isCurrent = currentStage ? i === currentIndex : false;
            const isDone = currentStage ? i < currentIndex : false;
            return (
              <li key={s.key} className="flex flex-col items-center text-center">
                <span
                  aria-hidden
                  className={cn(
                    "relative z-10 grid size-[44px] place-items-center rounded-full border shadow-e1 transition-colors",
                    isCurrent && "border-gold bg-navy text-gold shadow-gold-glow",
                    isDone && "border-gold/60 bg-gold text-navy",
                    !isCurrent && !isDone && "border-border bg-card text-muted-foreground",
                  )}
                >
                  <span className="text-serif-accent text-lg italic">{i + 1}</span>
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                  {s.name}
                </p>
                {isCurrent ? (
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Current stage
                  </span>
                ) : null}
                <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile rhythm */}
      <ol className="relative space-y-6 border-l border-gold/40 pl-6 md:hidden">
        {stages.map((s, i) => {
          const isCurrent = currentStage ? i === currentIndex : false;
          return (
            <li key={s.key} className="relative">
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[30px] top-1 grid size-[36px] place-items-center rounded-full border",
                  isCurrent
                    ? "border-gold bg-navy text-gold"
                    : "border-border bg-card text-muted-foreground",
                )}
              >
                <span className="text-serif-accent text-base italic">{i + 1}</span>
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                {s.name}
                {isCurrent ? (
                  <span className="ml-2 text-[10px] font-semibold text-gold">— current</span>
                ) : null}
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* InDevelopmentPage                                                   */
/* For services being prepared but not yet available.                  */
/* ------------------------------------------------------------------ */

export interface InDevelopmentPageConfig {
  breadcrumb: Breadcrumb[];
  eyebrow: string;
  title: string;
  intro: string;
  intent: {
    heading: string;
    body: string[];
  };
  capabilities: {
    heading: string;
    body?: string;
    bullets: string[];
  };
  timeline?: {
    heading?: string;
    stages?: TimelineStage[];
    currentStage?: string;
  };
  whatToDoNow: {
    heading: string;
    body?: string;
    cards: CardLink[];
  };
  status?: { label: string; body: string };
  cta: CtaConfig;
  serviceStatus?: ServiceStatus; // defaults to "In Development"
}

export function InDevelopmentPage({ config }: { config: InDevelopmentPageConfig }) {
  const {
    breadcrumb, eyebrow, title, intro,
    intent, capabilities, timeline, whatToDoNow,
    status, cta, serviceStatus = "In Development",
  } = config;

  return (
    <>
      <PageHero breadcrumb={breadcrumb} eyebrow={eyebrow} title={title} intro={intro} />

      <Section>
        <div className="mb-8 flex items-center gap-3">
          <StatusPill status={serviceStatus} />
          <span className="text-sm text-muted-foreground">
            This service is being prepared with the same care as the rest of the campus.
          </span>
        </div>
        <SectionHeading eyebrow="Intention" title={intent.heading} />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {intent.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What it will offer" title={capabilities.heading} />
        {capabilities.body ? (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {capabilities.body}
          </p>
        ) : null}
        <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          {capabilities.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground"
            >
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Development path"
          title={timeline?.heading ?? "How this service comes into being"}
        />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Every new service moves through the same institutional path — described here so
          families know what is under way, without inventing dates it has not yet earned.
        </p>
        <div className="mt-12">
          <DevelopmentTimeline
            stages={timeline?.stages}
            currentStage={timeline?.currentStage}
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="In the meantime" title={whatToDoNow.heading} />
        {whatToDoNow.body ? (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {whatToDoNow.body}
          </p>
        ) : null}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatToDoNow.cards.map((c) => (
            <SmartLink key={c.to} to={c.to} className="block group">
              <FeatureCard title={c.title} icon={c.icon}>{c.body}</FeatureCard>
            </SmartLink>
          ))}
        </div>
      </Section>

      {status ? (
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Implementation status</Eyebrow>
            <h2 className="mt-5 font-display text-2xl font-medium leading-snug md:text-3xl">
              {status.label}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{status.body}</p>
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
      />
      <ShareBar title={title} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* PrincipledPage                                                      */
/* For services awaiting final operational details but grounded in     */
/* institutional standards that are already in place.                  */
/* ------------------------------------------------------------------ */

export interface PrincipledPageConfig {
  breadcrumb: Breadcrumb[];
  eyebrow: string;
  title: string;
  intro: string;
  approach: {
    heading: string;
    body: string[];
  };
  principles: {
    heading: string;
    items: { title: string; body: string; icon?: ReactNode }[];
  };
  standards?: {
    heading: string;
    body?: string;
    bullets: string[];
  };
  familyExperience?: {
    heading: string;
    body: string[];
  };
  status?: { label: string; body: string };
  related?: CardLink[];
  cta: CtaConfig;
}

export function PrincipledPage({ config }: { config: PrincipledPageConfig }) {
  const {
    breadcrumb, eyebrow, title, intro,
    approach, principles, standards, familyExperience,
    status, related, cta,
  } = config;

  return (
    <>
      <PageHero breadcrumb={breadcrumb} eyebrow={eyebrow} title={title} intro={intro} />

      <Section>
        <SectionHeading eyebrow="Approach" title={approach.heading} />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {approach.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Principles" title={principles.heading} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.items.map((p) => (
            <FeatureCard key={p.title} title={p.title} icon={p.icon}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {standards ? (
        <Section>
          <SectionHeading eyebrow="Standards" title={standards.heading} />
          {standards.body ? (
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {standards.body}
            </p>
          ) : null}
          <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
            {standards.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground"
              >
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {familyExperience ? (
        <Section tone="muted">
          <SectionHeading eyebrow="What families experience" title={familyExperience.heading} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {familyExperience.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Section>
      ) : null}

      {status ? (
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Publishing details</Eyebrow>
            <h2 className="mt-5 font-display text-2xl font-medium leading-snug md:text-3xl">
              {status.label}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{status.body}</p>
          </div>
        </Section>
      ) : null}

      {related && related.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="Related" title="Continue exploring" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <SmartLink key={r.to} to={r.to} className="block group">
                <FeatureCard title={r.title}>{r.body}</FeatureCard>
              </SmartLink>
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
      />
      <ShareBar title={title} />
    </>
  );
}
