import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TocItem {
  label: string;
  to: string; // hash like "#footprint"
}

/**
 * AboutTOC — sticky in-page navigation with:
 * - Active section highlighting via IntersectionObserver
 * - Roving arrow-key navigation (ArrowLeft/Right, Home/End) per WAI-ARIA tabs-like pattern
 * - Respects prefers-reduced-motion (smooth scroll only when motion is allowed)
 */
export function AboutTOC({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.to ?? "");
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const ids = items.map((i) => i.to.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (targets.length === 0) return;

    const update = () => {
      // Active section = last one whose top is above the 25% viewport line.
      const line = window.innerHeight * 0.25;
      let current = targets[0].id;
      for (const t of targets) {
        const top = t.getBoundingClientRect().top;
        if (top - line <= 0) current = t.id;
      }
      setActive(`#${current}`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  const handleKey = (e: React.KeyboardEvent<HTMLOListElement>) => {
    const links = Array.from(
      listRef.current?.querySelectorAll<HTMLAnchorElement>("a[href^='#']") ?? [],
    );
    if (links.length === 0) return;
    const currentIdx = links.findIndex((a) => a === document.activeElement);
    let next = -1;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (currentIdx + 1 + links.length) % links.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (currentIdx - 1 + links.length) % links.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = links.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    links[next]?.focus();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    const el = document.querySelector(to) as HTMLElement | null;
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    // Update the URL hash without jumping.
    history.replaceState(null, "", to);
    setActive(to);
    // Move focus to the section for screen reader / keyboard continuity.
    const prevTabIndex = el.getAttribute("tabindex");
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
    if (prevTabIndex === null) {
      el.addEventListener("blur", () => el.removeAttribute("tabindex"), { once: true });
    }
  };

  return (
    <nav
      aria-label="Sections of this page"
      className="sticky top-[64px] z-30 border-y border-gold/20 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          On this page
        </span>
        <ol
          ref={listRef}
          onKeyDown={handleKey}
          className="flex items-center gap-1 text-sm"
        >
          {items.map((s) => {
            const isActive = active === s.to;
            return (
              <li key={s.to}>
                <a
                  href={s.to}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => handleClick(e, s.to)}
                  className={cn(
                    "inline-flex shrink-0 rounded-full px-3 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-navy text-navy-foreground shadow-sm"
                      : "text-foreground/80 hover:bg-gold/10 hover:text-navy",
                  )}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
