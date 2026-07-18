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
        <div className="mb-6 flex items-center gap-3">
          <BrandLogo
            variant="dark"
            className="h-12 w-12 object-contain md:h-14 md:w-14"
            alt="Lighthouse Campus emblem"
          />
          <Eyebrow onNavy>{eyebrow}</Eyebrow>
        </div>
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
