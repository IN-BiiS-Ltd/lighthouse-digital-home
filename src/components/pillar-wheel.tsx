import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export type Pillar = {
  to: string;
  title: string;
  body: string;
  short?: string;
};

/**
 * Radial 10-pillar visualization for /our-model.
 * SVG-based. Hover a node to raise it; click to navigate.
 * Center label reflects the focused pillar. Fully keyboard-accessible.
 */
export function PillarWheel({ pillars }: { pillars: Pillar[] }) {
  const [active, setActive] = useState<number | null>(null);
  const count = pillars.length;
  const size = 720;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 250;
  const nodeR = 44;

  const focused = active !== null ? pillars[active] : null;

  return (
    <div className="relative mx-auto w-full max-w-[720px]">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full"
        role="img"
        aria-label="Ten institutional pillars, arranged as a connected system"
      >
        <defs>
          <radialGradient id="wheel-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.35)" />
            <stop offset="55%" stopColor="rgba(11,29,58,0.6)" />
            <stop offset="100%" stopColor="rgba(11,29,58,0)" />
          </radialGradient>
          <linearGradient id="wheel-spoke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(212,175,55,0.55)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.05)" />
          </linearGradient>
        </defs>

        {/* Ambient core */}
        <circle cx={cx} cy={cy} r={radius + 40} fill="url(#wheel-core)" />

        {/* Concentric guides */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="rgba(212,175,55,0.22)"
          strokeDasharray="2 6"
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius - 90}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
        />

        {/* Spokes */}
        {pillars.map((_, i) => {
          const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          return (
            <line
              key={`spoke-${i}`}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="url(#wheel-spoke)"
              strokeWidth={active === i ? 1.8 : 1}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Center hub */}
        <circle
          cx={cx}
          cy={cy}
          r={78}
          fill="rgba(11,29,58,0.85)"
          stroke="rgba(212,175,55,0.55)"
          strokeWidth={1}
        />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          className="fill-gold text-[11px] uppercase tracking-[0.25em]"
        >
          Lighthouse
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-white text-[15px] font-medium"
        >
          Model
        </text>

        {/* Nodes */}
        {pillars.map((p, i) => {
          const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          const isActive = active === i;
          return (
            <g
              key={p.to}
              className="cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            >
              <Link
                to={p.to}
                aria-label={`${p.title}: ${p.body}`}
                className="focus:outline-none"
              >
                <circle
                  cx={x}
                  cy={y}
                  r={nodeR + (isActive ? 6 : 0)}
                  fill={isActive ? "rgb(212,175,55)" : "rgba(255,255,255,0.06)"}
                  stroke={
                    isActive
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(212,175,55,0.55)"
                  }
                  strokeWidth={isActive ? 2 : 1}
                  className="transition-all duration-300"
                  style={{
                    filter: isActive
                      ? "drop-shadow(0 8px 22px rgba(212,175,55,0.55))"
                      : "drop-shadow(0 2px 8px rgba(11,29,58,0.4))",
                  }}
                />
                <text
                  x={x}
                  y={y - 2}
                  textAnchor="middle"
                  className={cn(
                    "text-[13px] font-semibold transition-colors",
                    isActive ? "fill-navy" : "fill-white",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </text>
                <text
                  x={x}
                  y={y + 14}
                  textAnchor="middle"
                  className={cn(
                    "text-[9px] uppercase tracking-[0.18em] transition-colors",
                    isActive ? "fill-navy/80" : "fill-white/70",
                  )}
                >
                  {p.short ?? p.title.split(" ")[0]}
                </text>
              </Link>
            </g>
          );
        })}
      </svg>

      {/* Focus caption */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 mx-auto -translate-y-[calc(50%+140px)] px-6 text-center opacity-95">
        {focused ? (
          <div className="mx-auto max-w-md">
            <p className="eyebrow text-gold/90">{`Pillar ${String(
              (active ?? 0) + 1,
            ).padStart(2, "0")}`}</p>
            <p className="mt-2 text-serif-accent text-2xl leading-snug text-white">
              {focused.title}
            </p>
          </div>
        ) : (
          <p className="text-sm text-white/60">
            Hover a node to explore each pillar
          </p>
        )}
      </div>
    </div>
  );
}
