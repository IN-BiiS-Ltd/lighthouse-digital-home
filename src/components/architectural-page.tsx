import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading, FeatureCard, Stat, SmartLink, Eyebrow } from "@/components/blocks";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";
import { Reveal } from "@/components/reveal";

/**
 * ArchitecturalPage — Cadence III
 *
 * Structural template for pages that describe systems, ecosystems and
 * frameworks. Presents ordered modules — pillar grids, stats, principle
 * lists, connected bento panels — with an anchored hero so readers can
 * navigate between structural components at a glance.
 */

interface CardModule {
  kind: "cards";
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "sand";
  columns?: 2 | 3 | 4;
  cards: { title: string; body: string; icon?: ReactNode }[];
}

interface StatsModule {
  kind: "stats";
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "sand" | "navy";
  stats: { value: string; label: string }[];
}

interface PillarsModule {
  kind: "pillars";
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "sand";
  pillars: { numeral?: string; title: string; body: string }[];
}

interface PrinciplesModule {
  kind: "principles";
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "sand";
  principles: string[];
}

interface BentoModule {
  kind: "bento";
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "sand";
  /** 4–6 tiles work best. First tile becomes the wide "keystone". */
  tiles: { title: string; body: string; icon?: ReactNode }[];
}

interface RelatedModule {
  kind: "related";
  eyebrow?: string;
  title: string;
  tone?: "default" | "muted" | "sand";
  links: { title: string; to: string; body: string }[];
}

export type ArchitecturalModule =
  | CardModule
  | StatsModule
  | PillarsModule
  | PrinciplesModule
  | BentoModule
  | RelatedModule;

export interface ArchitecturalPageConfig {
  breadcrumb: { label: string; to?: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  /** Anchor links shown in the hero. */
  sections?: { label: string; to: string }[];
  modules: (ArchitecturalModule & { id?: string })[];
  cta: {
    title: string;
    body: string;
    primary: { to: string; label: string };
    secondary?: { to: string; label: string };
  };
}

const colToClass: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

function ModuleCards({ mod }: { mod: CardModule & { id?: string } }) {
  return (
    <Section id={mod.id} tone={mod.tone ?? "default"}>
      <SectionHeading eyebrow={mod.eyebrow} title={mod.title} description={mod.description} />
      <div className={`mt-12 grid gap-5 ${colToClass[mod.columns ?? 3]}`}>
        {mod.cards.map((c) => (
          <FeatureCard key={c.title} title={c.title} icon={c.icon}>
            {c.body}
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}

function ModuleStats({ mod }: { mod: StatsModule & { id?: string } }) {
  const onNavy = mod.tone === "navy";
  return (
    <Section id={mod.id} tone={mod.tone ?? "muted"}>
      <SectionHeading
        eyebrow={mod.eyebrow}
        title={mod.title}
        description={mod.description}
        onNavy={onNavy}
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {mod.stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} onNavy={onNavy} />
        ))}
      </div>
    </Section>
  );
}

function ModulePillars({ mod }: { mod: PillarsModule & { id?: string } }) {
  return (
    <Section id={mod.id} tone={mod.tone ?? "default"}>
      <SectionHeading eyebrow={mod.eyebrow} title={mod.title} description={mod.description} />
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mod.pillars.map((p, i) => (
          <li
            key={p.title}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_20px_50px_-30px_color-mix(in_oklab,var(--gold)_60%,transparent)]"
          >
            <span
              aria-hidden
              className="text-serif-accent absolute right-5 top-3 text-5xl italic leading-none text-gold/25"
            >
              {p.numeral ?? String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-medium leading-snug text-foreground">
              {p.title}
            </h3>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function ModulePrinciples({ mod }: { mod: PrinciplesModule & { id?: string } }) {
  return (
    <Section id={mod.id} tone={mod.tone ?? "sand"}>
      <SectionHeading eyebrow={mod.eyebrow} title={mod.title} description={mod.description} />
      <ul className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
        {mod.principles.map((p) => (
          <li
            key={p}
            className="flex items-start gap-3 rounded-lg border border-gold/15 bg-card px-4 py-3 text-sm font-medium text-foreground"
          >
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ModuleBento({ mod }: { mod: BentoModule & { id?: string } }) {
  const [keystone, ...rest] = mod.tiles;
  return (
    <Section id={mod.id} tone={mod.tone ?? "muted"}>
      <SectionHeading eyebrow={mod.eyebrow} title={mod.title} description={mod.description} />
      <div className="mt-12 grid gap-5 md:grid-cols-6">
        {keystone ? (
          <Reveal className="md:col-span-6 lg:col-span-3 lg:row-span-2">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy p-8 text-navy-foreground shadow-[0_30px_80px_-40px_rgba(11,29,58,0.55)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(70% 90% at 20% 10%, color-mix(in oklab, var(--gold) 22%, transparent) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                {keystone.icon ? (
                  <div className="mb-6 inline-flex size-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                    {keystone.icon}
                  </div>
                ) : null}
                <h3 className="font-display text-2xl font-medium leading-tight md:text-3xl">
                  {keystone.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy-foreground/80">
                  {keystone.body}
                </p>
              </div>
            </div>
          </Reveal>
        ) : null}
        {rest.map((t, i) => (
          <Reveal key={t.title} className={i === 0 || i === 3 ? "md:col-span-3" : "md:col-span-3"}>
            <FeatureCard title={t.title} icon={t.icon} className="h-full">
              {t.body}
            </FeatureCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ModuleRelated({
  mod,
  pageEyebrow,
}: {
  mod: RelatedModule & { id?: string };
  pageEyebrow: string;
}) {
  return (
    <Section id={mod.id} tone={mod.tone ?? "muted"}>
      <SectionHeading eyebrow={mod.eyebrow ?? "Related"} title={mod.title} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {mod.links.map((r) => (
          <SmartLink
            key={r.to}
            to={r.to}
            className="block group"
            data-event="Related Link Click"
            data-event-prop-to={r.to}
            data-event-prop-title={r.title}
            data-event-prop-from-section={pageEyebrow}
          >
            <FeatureCard title={r.title}>{r.body}</FeatureCard>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
}

export function ArchitecturalPage({ config }: { config: ArchitecturalPageConfig }) {
  const { breadcrumb, eyebrow, title, intro, sections, modules, cta } = config;
  return (
    <>
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        sections={sections}
      />
      {modules.map((m, i) => {
        const key = `${m.kind}-${i}`;
        switch (m.kind) {
          case "cards":
            return <ModuleCards key={key} mod={m} />;
          case "stats":
            return <ModuleStats key={key} mod={m} />;
          case "pillars":
            return <ModulePillars key={key} mod={m} />;
          case "principles":
            return <ModulePrinciples key={key} mod={m} />;
          case "bento":
            return <ModuleBento key={key} mod={m} />;
          case "related":
            return <ModuleRelated key={key} mod={m} pageEyebrow={eyebrow} />;
        }
      })}
      <CtaBand title={cta.title} body={cta.body} primary={cta.primary} secondary={cta.secondary} />
      <ShareBar title={title} />
    </>
  );
}
