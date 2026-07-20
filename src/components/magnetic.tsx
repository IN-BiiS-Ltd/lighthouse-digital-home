import { useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Magnetic — subtle pointer-pull for primary CTAs and hero anchors.
 * Motion is intentional: max 6px translation, disabled under
 * prefers-reduced-motion (handled by the .magnetic base class in styles.css).
 */
export function Magnetic({
  children,
  className,
  strength = 0.25,
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  /** 0..0.5 — pointer displacement multiplier */
  strength?: number;
  as?: "span" | "div";
}) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.setProperty("--mgx", `${Math.max(-8, Math.min(8, dx))}px`);
    el.style.setProperty("--mgy", `${Math.max(-6, Math.min(6, dy))}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mgx", "0px");
    el.style.setProperty("--mgy", "0px");
  };

  const Component = Tag as "span";
  return (
    <Component
      ref={ref as React.RefObject<HTMLSpanElement>}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("magnetic inline-block", className)}
      style={{ ["--mgx" as string]: "0px", ["--mgy" as string]: "0px" } as CSSProperties}
    >
      {children}
    </Component>
  );
}

/**
 * Beacon — attach to a navy surface to enable the cursor-tracked soft-light
 * spot. Pairs with `.beacon-surface` in styles.css.
 */
export function useBeaconHandlers() {
  return {
    onPointerMove: (e: React.PointerEvent<HTMLElement>) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--bx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--by", `${((e.clientY - r.top) / r.height) * 100}%`);
    },
  };
}
