import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export type JourneyStage = {
  id: string;
  number: string;
  name: string;
  to: string;
  tagline: string;
  ageRange?: string;
};

/**
 * Horizontal, chronological stepper for the Learning Journey.
 * Each stage renders a marker on a continuous gold rail with a
 * chapter card beneath. Turns into a vertical rhythm on mobile.
 */
export function JourneyTimeline({ stages }: { stages: JourneyStage[] }) {
  return (
    <div className="relative">
      {/* Desktop / tablet: horizontal rail */}
      <div className="relative hidden md:block">
        {/* Rail */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[46px] h-px bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10"
        />
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[46px] h-px bg-[linear-gradient(90deg,transparent_0,transparent_calc(50%-1px),rgba(255,255,255,0.15)_calc(50%),transparent_calc(50%+1px),transparent)] [background-size:24px_1px]"
        />
        <ol
          className="relative grid gap-6"
          style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}
        >
          {stages.map((s, i) => (
            <li key={s.id} className="flex flex-col items-center text-center">
              {/* Marker */}
              <a
                href={`#${s.id}`}
                className="group relative z-10 grid size-[92px] shrink-0 place-items-center rounded-full border border-gold/50 bg-navy/90 text-navy-foreground shadow-e2 transition-all duration-300 hover:scale-105 hover:border-gold hover:shadow-gold-glow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                aria-label={`Jump to ${s.name}`}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="text-serif-accent relative text-3xl italic text-gold">
                  {s.number}
                </span>
              </a>
              {/* Chapter card */}
              <div className="mt-6 max-w-[220px]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                  {s.name}
                </p>
                {s.ageRange ? (
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {s.ageRange}
                  </p>
                ) : null}
                <p className="text-serif-accent mt-3 text-[15px] italic leading-snug text-muted-foreground">
                  {s.tagline}
                </p>
                <Link
                  to={s.to}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue transition-colors hover:text-gold"
                >
                  Explore
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: vertical rhythm */}
      <ol className="relative space-y-6 border-l border-gold/40 pl-6 md:hidden">
        {stages.map((s, i) => (
          <li key={s.id} className="relative">
            <span
              aria-hidden
              className={cn(
                "absolute -left-[35px] top-1 grid size-[54px] place-items-center rounded-full border border-gold/50 bg-navy text-gold",
              )}
            >
              <span className="text-serif-accent text-xl italic">{s.number}</span>
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                {s.name}
              </p>
              {s.ageRange ? (
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.ageRange}
                </p>
              ) : null}
              <p className="text-serif-accent mt-2 text-base italic leading-snug text-muted-foreground">
                {s.tagline}
              </p>
              <Link
                to={s.to}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue"
              >
                Explore <span aria-hidden>→</span>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
