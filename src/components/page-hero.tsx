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
    <header className="relative overflow-hidden bg-navy text-navy-foreground beacon-surface grain"
      onPointerMove={(e) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--bx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--by", `${((e.clientY - r.top) / r.height) * 100}%`);
      }}
    >
      {/* Living gradient mesh — sovereign navy backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh-navy opacity-80" />
      {/* Radial vignette — draws the eye to the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 100% at 50% 30%, transparent 30%, color-mix(in oklab, var(--navy) 60%, transparent) 100%)",
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
          {/* Cinematic luminous halo — decorative layers around the mark */}
          <div
            role="presentation"
            className="logo-halo relative shrink-0 forced-colors:rounded-full forced-colors:border forced-colors:border-[CanvasText] forced-colors:p-1"
          >
            <div aria-hidden="true" className="logo-halo__glow forced-colors:hidden" />
            <div aria-hidden="true" className="logo-halo__aura forced-colors:hidden" />
            <div aria-hidden="true" className="logo-halo__ring forced-colors:hidden" />
            <span aria-hidden="true" className="logo-halo__spark logo-halo__spark--a forced-colors:hidden" />
            <span aria-hidden="true" className="logo-halo__spark logo-halo__spark--b forced-colors:hidden" />
            <span aria-hidden="true" className="logo-halo__spark logo-halo__spark--c forced-colors:hidden" />
            <span aria-hidden="true" className="logo-halo__spark logo-halo__spark--d forced-colors:hidden" />
            <BrandLogo
              variant="dark"
              className="relative h-20 w-20 object-contain drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)] forced-colors:drop-shadow-none md:h-24 md:w-24"
              alt="Lighthouse Campus"
            />
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

        <h1 className="text-display-1 mt-5 max-w-4xl text-balance">
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
