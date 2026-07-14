import { cn } from "@/lib/utils";

const nodes = [
  { key: "learning", label: "Learning", angle: 270 },
  { key: "teachers", label: "Teachers", angle: 315 },
  { key: "families", label: "Families", angle: 0 },
  { key: "leadership", label: "Leadership", angle: 45 },
  { key: "community", label: "Community", angle: 90 },
  { key: "technology", label: "Technology", angle: 135 },
  { key: "intelligence", label: "Institutional Intelligence", angle: 180 },
  { key: "wellbeing", label: "Wellbeing", angle: 225 },
];

/**
 * Accessible connected-network diagram: the learner at the centre with
 * subtle gold lines extending to eight surrounding pillars. Simplifies to a
 * stacked list on very small screens for readability.
 */
export function EcosystemDiagram({ className }: { className?: string }) {
  const cx = 300;
  const cy = 300;
  const r = 210;

  return (
    <figure className={cn("relative", className)}>
      {/* Visual SVG — hidden from AT; the list below is the semantic view */}
      <div className="hidden sm:block" aria-hidden>
        <svg
          viewBox="0 0 600 600"
          role="img"
          className="mx-auto w-full max-w-xl"
        >
          <title>The Lighthouse Learning Ecosystem</title>
          <desc>
            The learner sits at the centre, connected by subtle lines to eight
            surrounding pillars: Learning, Teachers, Families, Leadership,
            Community, Technology, Institutional Intelligence and Wellbeing.
          </desc>
          <defs>
            <radialGradient id="lh-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.9" />
              <stop offset="60%" stopColor="var(--brand-blue)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--navy)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lh-line" x1="0" x2="1">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Faint outer ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.08"
          />

          {/* Connectors */}
          {nodes.map((n) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = cx + Math.cos(rad) * r;
            const y = cy + Math.sin(rad) * r;
            return (
              <g key={n.key}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="url(#lh-line)"
                  strokeWidth="1"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={7}
                  fill="var(--card)"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                />
                <text
                  x={x}
                  y={y - 16}
                  textAnchor="middle"
                  className="fill-current"
                  style={{
                    font: "500 13px var(--font-display, ui-sans-serif)",
                  }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}

          {/* Learner core */}
          <circle cx={cx} cy={cy} r={72} fill="url(#lh-core)" />
          <circle
            cx={cx}
            cy={cy}
            r={38}
            fill="var(--navy)"
            stroke="var(--gold)"
            strokeWidth="1.5"
          />
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fill="var(--navy-foreground)"
            style={{
              font: "500 15px var(--font-display, ui-sans-serif)",
              letterSpacing: "0.02em",
            }}
          >
            Learner
          </text>
        </svg>
      </div>

      {/* Mobile / a11y semantic view */}
      <ul className="grid gap-2 sm:sr-only">
        <li className="rounded-lg bg-navy px-4 py-3 text-center font-display text-navy-foreground">
          Learner <span className="text-gold">— at the centre</span>
        </li>
        {nodes.map((n) => (
          <li
            key={n.key}
            className="rounded-lg border border-border bg-card px-4 py-3 text-center text-sm text-foreground"
          >
            {n.label}
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-center text-xs text-muted-foreground">
        People, knowledge and intelligence connected around every learner.
      </figcaption>
    </figure>
  );
}
