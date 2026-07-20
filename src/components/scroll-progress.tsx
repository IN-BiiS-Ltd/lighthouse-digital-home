import { useEffect, useState } from "react";

/**
 * ScrollProgress — a slim gold rail at the very top of the viewport that
 * tracks reading progress. Institutional, quiet, respects reduced motion.
 */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const compute = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      setPct(max > 0 ? Math.min(100, Math.max(0, (y / max) * 100)) : 0);
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[2px] bg-transparent forced-colors:hidden"
    >
      <div
        className="h-full origin-left"
        style={{
          width: `${pct}%`,
          background:
            "linear-gradient(90deg, color-mix(in oklab, var(--gold) 30%, transparent), var(--gold) 60%, color-mix(in oklab, var(--gold) 60%, white))",
          boxShadow: "0 0 12px color-mix(in oklab, var(--gold) 60%, transparent)",
          transition: "width 120ms linear",
        }}
      />
    </div>
  );
}
