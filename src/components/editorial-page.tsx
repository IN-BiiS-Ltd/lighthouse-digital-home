import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow, Pullquote } from "@/components/blocks";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";
import { Reveal } from "@/components/reveal";

/**
 * EditorialPage — Cadence II
 *
 * Long-form editorial template: generous reading column, gilded numerals,
 * drop-cap opening, alternating tone chapters, and an occasional pull-quote
 * that lifts the eye. Reserved for reflective, philosophical or mission
 * pages where language, not structure, does the heavy lifting.
 */

export interface EditorialChapter {
  /** Roman-numeral or two-digit sequence, e.g. "I", "II", "01" */
  numeral?: string;
  eyebrow: string;
  title: string;
  body: string[];
  /** Optional pull-quote rendered below the paragraphs. */
  quote?: { text: string; attribution?: string };
  tone?: "default" | "muted" | "sand";
}

export interface EditorialManifesto {
  eyebrow?: string;
  statement: string;
  attribution?: string;
}

export interface EditorialPageConfig {
  breadcrumb: { label: string; to?: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  /** Optional focus chips shown just below the hero (odd count reads best). */
  focus?: string[];
  /** The editorial "chapters" — the body of the page. */
  chapters: EditorialChapter[];
  /** A closing declarative panel on navy — the page's take-away. */
  manifesto?: EditorialManifesto;
  cta: {
    title: string;
    body: string;
    primary: { to: string; label: string };
    secondary?: { to: string; label: string };
  };
}

export function EditorialPage({ config }: { config: EditorialPageConfig }) {
  const { breadcrumb, eyebrow, title, intro, focus, chapters, manifesto, cta } = config;
  return (
    <>
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        watermark
      />

      {focus && focus.length > 0 ? (
        <Section>
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2">
              {focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-gold/30 bg-sand/50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/80"
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </Section>
      ) : null}

      {chapters.map((c, i) => {
        const tone = c.tone ?? (i % 2 === 1 ? "muted" : "default");
        const numeral = c.numeral ?? String(i + 1).padStart(2, "0");
        return (
          <Section key={`${c.title}-${i}`} tone={tone}>
            <article className="mx-auto max-w-3xl">
              <div className="flex items-baseline gap-6">
                <span
                  aria-hidden
                  className="text-serif-accent shrink-0 text-6xl italic leading-none text-gold/70 md:text-7xl"
                >
                  {numeral}
                </span>
                <div className="flex-1">
                  <Eyebrow>{c.eyebrow}</Eyebrow>
                  <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-foreground md:text-[2.35rem]">
                    {c.title}
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                {c.body.map((p, j) => (
                  <p key={j} className={j === 0 ? "editorial-lead" : undefined}>
                    {p}
                  </p>
                ))}
              </div>

              {c.quote ? (
                <div className="mt-10 border-t border-gold/20 pt-10">
                  <Pullquote quote={c.quote.text} attribution={c.quote.attribution} />
                </div>
              ) : null}
            </article>
          </Section>
        );
      })}

      {manifesto ? (
        <Section tone="navy">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow onNavy className="justify-center">
              {manifesto.eyebrow ?? "Statement"}
            </Eyebrow>
            <p className="text-serif-accent mt-8 text-balance text-3xl leading-[1.15] text-navy-foreground md:text-[2.4rem]">
              &ldquo;{manifesto.statement}&rdquo;
            </p>
            {manifesto.attribution ? (
              <p className="eyebrow mt-6 text-navy-foreground/70">{manifesto.attribution}</p>
            ) : null}
          </div>
        </Section>
      ) : null}

      <CtaBand title={cta.title} body={cta.body} primary={cta.primary} secondary={cta.secondary} />
      <ShareBar title={title} />
    </>
  );
}
