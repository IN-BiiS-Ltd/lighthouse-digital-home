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
  { top: "8%",  left: "6%",  size: "6.5rem", opacity: 0.18, dur: "38s", delay: "0s",   dx: "1.4rem",  dy: "-2rem",   rot: "4deg" },
  { top: "22%", left: "48%", size: "5rem",   opacity: 0.14, dur: "44s", delay: "2.2s", dx: "-1.2rem", dy: "1.8rem",  rot: "-8deg" },
  { top: "34%", left: "78%", size: "7rem",   opacity: 0.20, dur: "42s", delay: "1.6s", dx: "-1.4rem", dy: "-1.6rem", rot: "-6deg" },
  { top: "52%", left: "18%", size: "5.5rem", opacity: 0.15, dur: "48s", delay: "3s",   dx: "1.6rem",  dy: "1.2rem",  rot: "7deg" },
  { top: "60%", left: "62%", size: "6rem",   opacity: 0.17, dur: "40s", delay: "0.6s", dx: "-1rem",   dy: "-1.4rem", rot: "5deg" },
  { top: "78%", left: "32%", size: "5.75rem",opacity: 0.16, dur: "46s", delay: "0.9s", dx: "1rem",    dy: "-2.2rem", rot: "10deg" },
  { top: "84%", left: "86%", size: "4.5rem", opacity: 0.13, dur: "50s", delay: "2.4s", dx: "-1.2rem", dy: "-1.6rem", rot: "-4deg" },
  { top: "44%", left: "92%", size: "4.75rem",opacity: 0.14, dur: "52s", delay: "1.2s", dx: "-1.6rem", dy: "1rem",    rot: "-9deg" },
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
