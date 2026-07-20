/**
 * Lighthouse Icons — a custom SVG glyph set designed exclusively for this
 * institution. Each icon is a hand-drawn brand metaphor, NOT a generic
 * library glyph. Shared language: 24×24 grid, 1.5 stroke, round caps &
 * joins, gold accent dot(s), navy line. Every glyph is tuned to speak the
 * campus philosophy — light, orientation, growth, dialogue, structure.
 *
 * Usage:
 *   <LhIcon name="beacon" className="size-6 text-navy" />
 *   <IconBeacon className="size-8 text-gold" />
 */
import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

const base = "shrink-0";

function Svg({ title, className, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn(base, className)}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/* Gold accent — the signature spark that appears in every icon */
const gold = "var(--gold)";

/** Beacon — a lantern casting three tiers of guiding light. Identity of the campus. */
export function IconBeacon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.2 8.6 8h6.8L12 3.2Z" />
      <path d="M9.5 8v3.4h5V8" />
      <path d="M8.2 11.4h7.6l-.6 9.4H8.8l-.6-9.4Z" />
      <path d="M5 6.5l2.2 1.2M19 6.5l-2.2 1.2M12 1.6v1.6" />
      <circle cx="12" cy="9.7" r="1.2" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Compass Rose — orientation, wayfinding, moral direction. */
export function IconCompass(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 6.4 13.6 12 12 17.6 10.4 12Z" />
      <path d="M6.4 12h11.2" strokeDasharray="0 3.2 1.6 0" />
      <circle cx="12" cy="12" r="1.1" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Prism — the ten institutional pillars refracted into a single spectrum. */
export function IconPrism(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 3.8 19h16.4L12 3Z" />
      <path d="M12 3v16" strokeDasharray="1.4 1.6" />
      <path d="M13.6 19 20 12.6" stroke={gold} />
      <path d="M12 19l5 -3.4" stroke={gold} opacity="0.75" />
      <path d="M10.4 19l4 -2.8" stroke={gold} opacity="0.5" />
    </Svg>
  );
}

/** Horizon — the learning journey: sunrise across the sea. */
export function IconHorizon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 14.5h18" />
      <path d="M3 17.5h18" opacity="0.55" />
      <path d="M3 20.2h18" opacity="0.3" />
      <path d="M6.5 14.5a5.5 5.5 0 1 1 11 0" />
      <circle cx="12" cy="14.5" r="1.6" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Lens — inquiry, close observation, evidence. */
export function IconLens(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="10.4" cy="10.4" r="6.6" />
      <path d="m15.2 15.2 5.2 5.2" />
      <path d="M8 10.4a2.4 2.4 0 0 1 2.4-2.4" />
      <circle cx="10.4" cy="10.4" r="1.1" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Root — foundation, family, belonging. A seedling with three roots. */
export function IconRoot(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v9" />
      <path d="M12 8c1.6-.8 2.6-2 2.6-3.6" />
      <path d="M12 8c-1.6-.8-2.6-2-2.6-3.6" />
      <path d="M12 12c-2.8 2.4-4.4 4.6-4.6 8.4" />
      <path d="M12 12c2.8 2.4 4.4 4.6 4.6 8.4" />
      <path d="M12 12v8.4" />
      <circle cx="12" cy="12" r="1.2" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Spark — creativity, ignition, imagination. */
export function IconSpark(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v4.4M12 16.6V21M3 12h4.4M16.6 12H21" />
      <path d="m5.6 5.6 3.1 3.1M15.3 15.3l3.1 3.1M5.6 18.4l3.1-3.1M15.3 8.7l3.1-3.1" opacity="0.55" />
      <circle cx="12" cy="12" r="2.4" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Arc — the bridge between school and world. Connecting possibilities. */
export function IconArc(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 19.4V10a8.4 8.4 0 0 1 16.8 0v9.4" />
      <path d="M3.6 19.4h16.8" />
      <path d="M8.4 19.4V12a3.6 3.6 0 0 1 7.2 0v7.4" />
      <circle cx="12" cy="12" r="1.2" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Keystone — governance, integrity, the piece that holds the arch. */
export function IconKeystone(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9.4 4.4h5.2l2.6 15.2H6.8L9.4 4.4Z" />
      <path d="M8.4 10.6h7.2" />
      <path d="M8 15.6h8" opacity="0.55" />
      <circle cx="12" cy="8.3" r="1.2" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Constellation — network, community, alumni across time. */
export function IconConstellation(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 6 6 4 3-6 5 8-7 2-4 6-3-8Z" opacity="0.35" />
      <circle cx="5" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="20" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="4" r="1.8" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Dialogue — two arcs meeting: student & teacher, family & school. */
export function IconDialogue(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 8.4a3.6 3.6 0 0 1 3.6-3.6h5.6a3.6 3.6 0 0 1 3.6 3.6v2.4a3.6 3.6 0 0 1-3.6 3.6H8.4L5 17.2V8.4Z" />
      <path d="M20.4 20.4 17.6 17h-2.2" opacity="0.75" />
      <circle cx="8.6" cy="9.5" r="0.9" fill={gold} stroke="none" />
      <circle cx="12" cy="9.5" r="0.9" fill={gold} stroke="none" />
    </Svg>
  );
}

/** Ledger — evidence, records, the disciplined memory of the institution. */
export function IconLedger(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5.2 4.4h11.2a2.4 2.4 0 0 1 2.4 2.4v12.8H7.6a2.4 2.4 0 0 1-2.4-2.4V4.4Z" />
      <path d="M5.2 17.2a2.4 2.4 0 0 1 2.4-2.4h11.2" />
      <path d="M9 8.4h6M9 11.4h6" />
      <circle cx="8.4" cy="19.6" r="1.1" fill={gold} stroke="none" />
    </Svg>
  );
}

/* -------- Name registry (for data-driven usage) ---------------------- */

export const lhIcons = {
  beacon: IconBeacon,
  compass: IconCompass,
  prism: IconPrism,
  horizon: IconHorizon,
  lens: IconLens,
  root: IconRoot,
  spark: IconSpark,
  arc: IconArc,
  keystone: IconKeystone,
  constellation: IconConstellation,
  dialogue: IconDialogue,
  ledger: IconLedger,
} as const;

export type LhIconName = keyof typeof lhIcons;

export function LhIcon({ name, ...rest }: IconProps & { name: LhIconName }) {
  const C = lhIcons[name];
  return <C {...rest} />;
}
