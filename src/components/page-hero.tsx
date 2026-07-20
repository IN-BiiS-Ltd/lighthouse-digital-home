import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, Eyebrow, SmartLink, BrandLogo } from "@/components/blocks";
import { BrandAtmosphere } from "@/components/brand-atmosphere";

/**
 * PageHero — the calm navy header used at the top of every interior page.
 * Communicates "where you are" with an eyebrow, title and short intent line,
 * plus optional in-page section anchors for effortless orientation.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  sections,
  breadcrumb,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  sections?: { label: string; to: string }[];
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <header className="relative overflow-hidden bg-navy text-navy-foreground">
      {/* soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 90% at 82% -10%, color-mix(in oklab, var(--brand-blue) 40%, transparent), transparent 60%), radial-gradient(50% 80% at 6% 0%, color-mix(in oklab, var(--gold) 20%, transparent), transparent 55%)",
        }}
      />
      <BrandAtmosphere density={0.7} />
      <Container className="relative py-20 md:py-28">
        <div className="reveal reveal-in animate-[fade-in_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">

        {breadcrumb && breadcrumb.length > 0 ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy-foreground/60"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                {crumb.to ? (
                  <SmartLink
                    to={crumb.to}
                    className="transition-colors hover:text-gold"
                  >
                    {crumb.label}
                  </SmartLink>
                ) : (
                  <span aria-current="page" className="text-navy-foreground/90">
                    {crumb.label}
                  </span>
                )}
                {i < breadcrumb.length - 1 ? (
                  <span aria-hidden className="text-navy-foreground/40">
                    /
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}
        <div className="mb-8 flex items-center gap-5">
          {/* Single accessible name comes from the <img alt>; the wrapper and
              all layered effects are decorative for AT. */}
          <div
            role="presentation"
            className="relative shrink-0 forced-colors:rounded-full forced-colors:border forced-colors:border-[CanvasText] forced-colors:p-1"
          >
            {/* Luminous halo — hidden in forced-colors so the OS palette isn't overridden */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-4 rounded-full blur-2xl forced-colors:hidden"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.92) 0%, rgba(255,246,214,0.55) 38%, rgba(212,175,55,0.18) 62%, transparent 78%)",
              }}
            />
            {/* Gold hairline arc — decorative, hidden in forced-colors (border above replaces it) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-2 rounded-full forced-colors:hidden"
              style={{
                background:
                  "conic-gradient(from 210deg, transparent 0deg, var(--gold) 60deg, transparent 140deg, transparent 220deg, color-mix(in oklab, var(--brand-blue) 80%, white) 280deg, transparent 340deg)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
                opacity: 0.85,
              }}
            />
            <BrandLogo
              variant="dark"
              className="relative h-20 w-20 object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)] forced-colors:drop-shadow-none md:h-24 md:w-24"
              alt="Lighthouse Campus"
            />
            {/* Visual-only fallback for forced-colors: aria-hidden so screen
                readers don't announce the brand twice (the <img alt> already
                carries the accessible name). */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden flex-col items-center justify-center text-center font-display text-[10px] font-semibold leading-tight text-[CanvasText] forced-colors:flex"
            >
              <span>Lighthouse</span>
              <span>Campus</span>
            </span>
          </div>
          <Eyebrow onNavy>{eyebrow}</Eyebrow>
        </div>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.06] tracking-tight md:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/80 md:text-xl">
            {intro}
          </p>
        ) : null}
        {sections && sections.length > 0 ? (
          <nav
            aria-label="On this page"
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-navy-foreground/15 pt-6"
          >
            {sections.map((s) => (
              <SmartLink
                key={s.to}
                to={s.to}
                className="text-sm font-medium text-navy-foreground/70 transition-colors hover:text-gold"
              >
                {s.label}
              </SmartLink>
            ))}
          </nav>
        ) : null}
        </div>
      </Container>
    </header>
  );
}

/**
 * NarrativeFlow — a subtle strip expressing the campus content rhythm:
 * Purpose → Experience → People → Environment → Evidence → Invitation.
 */
const flowSteps = [
  "Purpose",
  "Experience",
  "People",
  "Environment",
  "Evidence",
  "Invitation",
];

export function NarrativeFlow({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium",
        className,
      )}
    >
      {flowSteps.map((step, i) => (
        <li key={step} className="flex items-center gap-3">
          <span className="text-muted-foreground">{step}</span>
          {i < flowSteps.length - 1 ? (
            <span aria-hidden className="text-gold">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
