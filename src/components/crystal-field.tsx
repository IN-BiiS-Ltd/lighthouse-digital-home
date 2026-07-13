import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * CrystalField — a decorative layer of drifting prismatic shards rendered in
 * the Lighthouse palette (gold, executive blue, sky, silver). Purely
 * decorative (aria-hidden, pointer-events-none) and honours
 * prefers-reduced-motion via the .crystal styles in styles.css.
 */

type Crystal = {
  top: string;
  left: string;
  size: string;
  c1: string;
  c2: string;
  opacity: number;
  dur: string;
  delay: string;
  dx: string;
  dy: string;
  rot: string;
};

const GOLD = "var(--gold)";
const BLUE = "var(--brand-blue)";
const SKY = "var(--sky)";
const SILVER = "var(--silver)";

const crystals: Crystal[] = [
  { top: "8%", left: "4%", size: "3.5rem", c1: GOLD, c2: BLUE, opacity: 0.2, dur: "17s", delay: "0s", dx: "1.5rem", dy: "-2.5rem", rot: "8deg" },
  { top: "62%", left: "9%", size: "2.4rem", c1: SKY, c2: BLUE, opacity: 0.18, dur: "21s", delay: "1.2s", dx: "-1rem", dy: "-1.8rem", rot: "-14deg" },
  { top: "24%", left: "48%", size: "2rem", c1: GOLD, c2: SILVER, opacity: 0.16, dur: "19s", delay: "0.6s", dx: "1.2rem", dy: "2rem", rot: "18deg" },
  { top: "78%", left: "42%", size: "3rem", c1: BLUE, c2: SKY, opacity: 0.15, dur: "23s", delay: "2s", dx: "-1.6rem", dy: "-2.2rem", rot: "-6deg" },
  { top: "12%", left: "82%", size: "3.2rem", c1: GOLD, c2: BLUE, opacity: 0.2, dur: "18s", delay: "0.9s", dx: "-1.8rem", dy: "2rem", rot: "12deg" },
  { top: "56%", left: "90%", size: "2.6rem", c1: SKY, c2: SILVER, opacity: 0.17, dur: "20s", delay: "1.6s", dx: "1rem", dy: "-2rem", rot: "-20deg" },
  { top: "40%", left: "68%", size: "1.8rem", c1: GOLD, c2: SKY, opacity: 0.14, dur: "24s", delay: "0.3s", dx: "1.4rem", dy: "1.6rem", rot: "24deg" },
];

export function CrystalField({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("crystal-field -z-0", className)}>
      {crystals.map((c, i) => (
        <span
          key={i}
          className="crystal"
          style={
            {
              top: c.top,
              left: c.left,
              "--size": c.size,
              "--c1": c.c1,
              "--c2": c.c2,
              "--opacity": c.opacity,
              "--dur": c.dur,
              "--delay": c.delay,
              "--dx": c.dx,
              "--dy": c.dy,
              "--rot": c.rot,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
