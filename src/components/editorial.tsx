import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/blocks";
import { Reveal } from "@/components/reveal";

/**
 * PullQuote — an editorial magazine-style callout for institutional voice.
 * Uses the serif accent + italic register with a gold marginal rule.
 */
export function PullQuote({
  quote,
  attribution,
  className,
}: {
  quote: ReactNode;
  attribution?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <figure
        className={cn(
          "relative mx-auto my-16 max-w-3xl border-l-2 border-gold pl-8 md:my-24 md:pl-12",
          className,
        )}
      >
        <span
          aria-hidden
          className="absolute -left-2 -top-8 select-none font-display text-[6rem] leading-none text-gold/30 md:text-[8rem]"
        >
          &ldquo;
        </span>
        <blockquote className="font-display text-2xl italic leading-snug text-foreground md:text-4xl">
          {quote}
        </blockquote>
        {attribution ? (
          <figcaption className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            — {attribution}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}

/**
 * Marginalia — a two-column editorial layout with a slim aside note running
 * alongside a longer body of text (magazine "sidenote" convention).
 */
export function Marginalia({
  note,
  children,
  className,
}: {
  note: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-[220px_1fr] md:gap-14", className)}>
      <aside className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted-foreground md:sticky md:top-24 md:self-start">
        <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Note
        </span>
        {note}
      </aside>
      <div className="prose-institutional space-y-5 text-lg leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

/**
 * StatBand — animated numeric infographic band. Reveals large italic serif
 * figures with an eyebrow + caption, laid out on a subtle grid.
 */
export function StatBand({
  eyebrow,
  stats,
  tone = "navy",
}: {
  eyebrow?: string;
  stats: { value: string; label: string; caption?: string }[];
  tone?: "navy" | "sand" | "muted";
}) {
  const bg =
    tone === "navy"
      ? "bg-navy text-navy-foreground beacon-surface grain"
      : tone === "sand"
        ? "bg-[color:var(--sand,theme(colors.muted.DEFAULT))]"
        : "bg-muted";

  const numeral =
    tone === "navy" ? "text-gold" : "text-brand-blue";
  const labelTone =
    tone === "navy" ? "text-navy-foreground/70" : "text-muted-foreground";
  const captionTone =
    tone === "navy" ? "text-navy-foreground/55" : "text-muted-foreground/80";

  return (
    <section className={cn("relative overflow-hidden py-20 md:py-28", bg)}>
      {tone === "navy" ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 mesh-navy opacity-70" />
      ) : null}
      <Container className="relative">
        {eyebrow ? (
          <div className="mb-12 text-center">
            <span
              className={cn(
                "eyebrow",
                tone === "navy" ? "text-gold" : "text-brand-blue",
              )}
            >
              {eyebrow}
            </span>
          </div>
        ) : null}
        <ul
          className={cn(
            "grid gap-x-10 gap-y-14 sm:grid-cols-2",
            stats.length >= 3 ? "lg:grid-cols-3" : "",
            stats.length >= 4 ? "xl:grid-cols-4" : "",
          )}
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <li className="relative flex flex-col items-start border-t border-gold/40 pt-6">
                <span
                  className={cn(
                    "font-display italic leading-[0.95] tracking-tight",
                    "text-[clamp(3.25rem,7vw,5.5rem)]",
                    numeral,
                  )}
                >
                  {s.value}
                </span>
                <span
                  className={cn(
                    "mt-3 text-base font-semibold uppercase tracking-[0.14em]",
                    labelTone,
                  )}
                >
                  {s.label}
                </span>
                {s.caption ? (
                  <span className={cn("mt-2 text-sm leading-relaxed", captionTone)}>
                    {s.caption}
                  </span>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
