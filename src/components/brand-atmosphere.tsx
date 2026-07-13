import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * BrandAtmosphere — the cinematic, brand-driven ambient layer used behind
 * navy sections. It expresses the Lighthouse identity literally:
 *
 *   • a slow, sweeping lighthouse beam (rotating conic light)
 *   • a field of golden "light motes" drifting upward like carried light
 *
 * The layer is purely decorative (aria-hidden, pointer-events-none), honours
 * `prefers-reduced-motion`, and pauses when off-screen or when the tab is
 * hidden to protect performance.
 */

type Mote = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  a: number;
  tw: number;
  ph: number;
};

const GOLD: [number, number, number] = [212, 175, 55]; // #D4AF37
const SKY: [number, number, number] = [77, 166, 255]; // #4DA6FF

export function BrandAtmosphere({
  className,
  density = 1,
  beam = true,
}: {
  className?: string;
  /** relative particle density (1 = default) */
  density?: number;
  /** show the rotating lighthouse beam */
  beam?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let motes: Mote[] = [];
    let raf = 0;
    let running = true;

    const parent = canvas.parentElement as HTMLElement;

    const build = () => {
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(
        Math.min(120, (width * height) / 14000) * density,
      );
      motes = Array.from({ length: count }, () => spawn(true));
    };

    function spawn(anywhere: boolean): Mote {
      return {
        x: Math.random() * width,
        y: anywhere ? Math.random() * height : height + Math.random() * 40,
        r: 0.6 + Math.random() * 1.9,
        vy: -(0.08 + Math.random() * 0.28),
        vx: (Math.random() - 0.5) * 0.12,
        a: 0.15 + Math.random() * 0.5,
        tw: 0.006 + Math.random() * 0.014,
        ph: Math.random() * Math.PI * 2,
      };
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const m of motes) {
        if (!reduce) {
          m.y += m.vy;
          m.x += m.vx;
          m.ph += m.tw;
        }
        if (m.y < -10 || m.x < -10 || m.x > width + 10) {
          Object.assign(m, spawn(false));
        }
        const flicker = reduce ? 0.5 : 0.5 + 0.5 * Math.sin(m.ph);
        const alpha = m.a * (0.35 + 0.65 * flicker);
        const [rr, gg, bb] = m.r > 1.6 ? GOLD : Math.random() > 0.5 ? GOLD : SKY;
        const glow = ctx.createRadialGradient(
          m.x,
          m.y,
          0,
          m.x,
          m.y,
          m.r * 4,
        );
        glow.addColorStop(0, `rgba(${rr},${gg},${bb},${alpha})`);
        glow.addColorStop(1, `rgba(${rr},${gg},${bb},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,248,225,${alpha})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    build();
    draw();
    if (reduce) running = false;

    const onResize = () => build();
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        if (visible && !running && !reduce) {
          running = true;
          raf = requestAnimationFrame(draw);
        } else if (!visible) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(parent);

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, [density]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-0 overflow-hidden",
        className,
      )}
    >
      {beam ? <span className="lighthouse-beam" /> : null}
      <canvas ref={canvasRef} className="absolute inset-0 block size-full" />
    </div>
  );
}
