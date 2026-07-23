import { useCallback, useEffect, useRef, useState } from "react";

export type ChapterRef = {
  id: string;
  number: string;
  label: string;
};

interface ChapterRailProps {
  chapters: ChapterRef[];
  ariaLabel?: string;
}

/**
 * ChapterRail — a floating, sticky vertical navigator that mirrors the
 * cinematic chapter panels. Tracks the current chapter via
 * IntersectionObserver and exposes keyboard navigation (Home / End /
 * ArrowUp / ArrowDown) alongside a Skip-to-Content link for AT users.
 */
export function ChapterRail({ chapters, ariaLabel = "Chapter navigation" }: ChapterRailProps) {
  const [active, setActive] = useState<string>(chapters[0]?.id ?? "");
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  const focusIndex = useCallback((idx: number) => {
    const next = linkRefs.current[idx];
    next?.focus();
  }, []);

  const onKey = (e: React.KeyboardEvent<HTMLAnchorElement>, idx: number) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusIndex(Math.min(chapters.length - 1, idx + 1));
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusIndex(Math.max(0, idx - 1));
        break;
      case "Home":
        e.preventDefault();
        focusIndex(0);
        break;
      case "End":
        e.preventDefault();
        focusIndex(chapters.length - 1);
        break;
    }
  };

  const activeIndex = Math.max(0, chapters.findIndex((c) => c.id === active));
  const progress = chapters.length > 1 ? activeIndex / (chapters.length - 1) : 0;

  return (
    <>
      {/* Skip link — visible on focus */}
      <a
        href={`#${chapters[0]?.id ?? "main"}`}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-foreground focus:shadow-e2"
      >
        Skip to chapters
      </a>

      {/* Mobile: horizontal chapter strip */}
      <nav
        aria-label={ariaLabel}
        className="sticky top-14 z-30 -mx-6 border-y border-white/10 bg-navy/85 px-6 py-2 backdrop-blur md:hidden"
      >
        <ol className="flex snap-x snap-mandatory gap-2 overflow-x-auto no-scrollbar">
          {chapters.map((c, i) => {
            const isActive = c.id === active;
            return (
              <li key={c.id} className="snap-start">
                <a
                  href={`#${c.id}`}
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  onKeyDown={(e) => onKey(e, i)}
                  aria-current={isActive ? "location" : undefined}
                  className={
                    "inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all " +
                    (isActive
                      ? "border-gold bg-gold text-navy shadow-[0_6px_16px_-6px_rgba(212,175,55,0.75)]"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-gold/50 hover:text-white")
                  }
                >
                  <span aria-hidden className="text-serif-accent italic">{c.number}</span>
                  <span className="max-w-[8rem] truncate">{c.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Desktop: floating vertical rail */}
      <nav
        aria-label={ariaLabel}
        className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 md:block"
      >
        <div className="pointer-events-auto relative flex flex-col items-end gap-3 rounded-full border border-white/10 bg-navy/70 px-3 py-4 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)] backdrop-blur-md">
          {/* Progress bar */}
          <div aria-hidden className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-gold via-gold to-transparent transition-transform duration-500 ease-out"
              style={{ transform: `scaleY(${progress})`, transformOrigin: "top" }}
            />
          </div>

          <ol className="relative flex flex-col gap-4">
            {chapters.map((c, i) => {
              const isActive = c.id === active;
              return (
                <li key={c.id} className="group relative">
                  <a
                    href={`#${c.id}`}
                    ref={(el) => {
                      linkRefs.current[i] = el;
                    }}
                    onKeyDown={(e) => onKey(e, i)}
                    aria-current={isActive ? "location" : undefined}
                    aria-label={`Chapter ${c.number}: ${c.label}`}
                    className="flex items-center justify-end gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  >
                    {/* Label — appears on hover / focus / active */}
                    <span
                      className={
                        "hidden text-right text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 lg:inline-flex " +
                        (isActive
                          ? "text-gold opacity-100 translate-x-0"
                          : "text-white/70 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0")
                      }
                    >
                      <span aria-hidden className="mr-2 text-serif-accent italic">{c.number}</span>
                      {c.label}
                    </span>
                    {/* Dot */}
                    <span
                      aria-hidden
                      className={
                        "relative flex size-3 items-center justify-center rounded-full border transition-all duration-300 " +
                        (isActive
                          ? "border-gold bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.18)]"
                          : "border-white/40 bg-transparent group-hover:border-gold")
                      }
                    >
                      {isActive && <span className="size-1 rounded-full bg-navy" />}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
