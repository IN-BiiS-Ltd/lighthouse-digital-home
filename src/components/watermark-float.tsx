import emblem from "@/assets/lighthouse-emblem-watermark.webp.asset.json";
import { cn } from "@/lib/utils";

/**
 * WatermarkFloat — a large, near-invisible institutional mark that drifts
 * slowly behind sovereign hero surfaces. Purposeful atmosphere, not decoration.
 *
 * Constraints:
 *  • opacity ≤ 5% and mix-blend-mode soft-light so it never competes with copy
 *  • 60s+ drift, disabled under prefers-reduced-motion
 *  • decorative only (aria-hidden), inserted behind existing content
 *  • use sparingly — reserved for the 3 most institutional heroes
 */
export function WatermarkFloat({
  className,
  side = "right",
}: {
  className?: string;
  side?: "left" | "right" | "center";
}) {
  const left = side === "left" ? "18%" : side === "center" ? "50%" : "76%";
  return (
    <div aria-hidden="true" className={cn("watermark-float", className)}>
      <img
        src={emblem.url}
        alt=""
        className="watermark-float__img"
        style={{ left, translate: "-50% -50%" }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
