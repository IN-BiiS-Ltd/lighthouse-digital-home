import campusTransparent from "@/assets/lighthouse-transparent-logo.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * HeroEmblem — the unified floating institutional mark that sits in every
 * hero, opposite the site-header logo. Tuned to the same restraint as the
 * other floating watermarks (WatermarkFloat / CrystalField): visible enough
 * to register, muted enough never to compete with the H1.
 *
 * Design tokens are shared across pages so brightness/contrast is uniform:
 *   • opacity ~0.5 with a soft breathing gold aura
 *   • soft blur halo instead of the previous hard gold rim
 *   • hidden on small screens (< md) to protect mobile hierarchy
 *   • respects prefers-reduced-motion via the shared halo-breathe keyframe
 */
export function HeroEmblem({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 hidden md:block",
        className,
      )}
    >
      <div className="absolute right-[6%] top-[16%] md:right-[8%] lg:right-[10%]">
        <div className="relative h-20 w-20 lg:h-24 lg:w-24">
          {/* Soft gold aura — matches the muted register of WatermarkFloat */}
          <span
            className="absolute inset-0 rounded-full bg-gold/20 blur-[26px] animate-[halo-breathe_6s_ease-in-out_infinite]"
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 rounded-full bg-gold/10 blur-[40px] animate-[halo-breathe_6s_ease-in-out_infinite_reverse]"
            aria-hidden="true"
          />
          <img
            src={campusTransparent.url}
            alt=""
            className="relative h-full w-full object-contain opacity-[0.55] drop-shadow-[0_0_18px_color-mix(in_oklab,var(--gold)_45%,transparent)] animate-[campus-emblem-float_6s_ease-in-out_infinite]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
