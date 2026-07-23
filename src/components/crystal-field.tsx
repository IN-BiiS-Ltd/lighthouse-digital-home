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
  { top: "6%",  left: "4%",  size: "7rem",  opacity: 0.10, dur: "28s", delay: "0s",   dx: "1.6rem",  dy: "-2.4rem", rot: "6deg" },
  { top: "58%", left: "8%",  size: "5rem",  opacity: 0.08, dur: "32s", delay: "1.4s", dx: "-1.2rem", dy: "-1.8rem", rot: "-10deg" },
  { top: "22%", left: "46%", size: "4.5rem", opacity: 0.07, dur: "30s", delay: "0.7s", dx: "1.2rem", dy: "2rem",   rot: "12deg" },
  { top: "74%", left: "40%", size: "6.5rem", opacity: 0.09, dur: "34s", delay: "2.1s", dx: "-1.6rem", dy: "-2.2rem", rot: "-4deg" },
  { top: "10%", left: "80%", size: "7rem",  opacity: 0.10, dur: "29s", delay: "0.9s", dx: "-1.8rem", dy: "2rem",   rot: "8deg" },
  { top: "54%", left: "88%", size: "5.5rem", opacity: 0.08, dur: "31s", delay: "1.8s", dx: "1rem",   dy: "-2rem",   rot: "-14deg" },
  { top: "38%", left: "66%", size: "4rem",  opacity: 0.07, dur: "36s", delay: "0.4s", dx: "1.4rem", dy: "1.6rem",  rot: "16deg" },
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
