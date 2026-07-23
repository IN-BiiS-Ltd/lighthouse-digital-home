import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import emblem from "@/assets/lighthouse-emblem-watermark.webp.asset.json";

/**
 * CrystalField — a decorative layer of drifting Lighthouse emblems used as
 * an ambient watermark behind institutional sections. Purely decorative
 * (aria-hidden, pointer-events-none) and honours prefers-reduced-motion
 * via the .crystal styles in styles.css.
 */

type Mote = {
  top: string;
  left: string;
  size: string;
  opacity: number;
  dur: string;
  delay: string;
  dx: string;
  dy: string;
  rot: string;
};

const motes: Mote[] = [
  { top: "12%", left: "6%",  size: "5rem",   opacity: 0.06, dur: "38s", delay: "0s",   dx: "1.4rem",  dy: "-2rem",   rot: "4deg" },
  { top: "58%", left: "82%", size: "6rem",   opacity: 0.07, dur: "42s", delay: "1.6s", dx: "-1.4rem", dy: "-1.6rem", rot: "-6deg" },
  { top: "72%", left: "38%", size: "4.5rem", opacity: 0.05, dur: "46s", delay: "0.9s", dx: "1rem",    dy: "-2.2rem", rot: "10deg" },
];

export function CrystalField({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("crystal-field -z-0", className)}>
      {motes.map((m, i) => (
        <span
          key={i}
          className="crystal"
          style={
            {
              top: m.top,
              left: m.left,
              "--size": m.size,
              "--opacity": m.opacity,
              "--dur": m.dur,
              "--delay": m.delay,
              "--dx": m.dx,
              "--dy": m.dy,
              "--rot": m.rot,
            } as CSSProperties
          }
        >
          <img src={emblem.url} alt="" loading="lazy" decoding="async" />
        </span>
      ))}
    </div>
  );
}
