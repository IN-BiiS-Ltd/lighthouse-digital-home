import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * useReveal — reveals an element once as it scrolls into view.
 * Honours prefers-reduced-motion (shows immediately, no animation).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string; once?: boolean },
) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (options?.once !== false) io.disconnect();
        } else if (options?.once === false) {
          setShown(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -8% 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.once]);

  return { ref, shown };
}

/**
 * Reveal — wraps content in a smooth, cinematic rise-and-fade as it enters.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: ElementType;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealGroup — orchestrated cascade. Direct children enter one-by-one with
 * a stagger. Uses CSS custom properties (`--i`, `--stagger`) so the timing
 * curve stays in the design system, not scattered across components.
 */
export function RevealGroup({
  children,
  className,
  stagger = 90,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** ms between each child */
  stagger?: number;
  as?: ElementType;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const items = Children.toArray(children);

  return (
    <Tag
      ref={ref}
      className={cn("reveal-cascade", shown && "reveal-in", className)}
      style={{ ["--stagger" as string]: `${stagger}ms` } as CSSProperties}
    >
      {items.map((child, i) => {
        if (isValidElement(child)) {
          const el = child as ReactElement<{ style?: CSSProperties }>;
          const prev = (el.props.style ?? {}) as CSSProperties;
          return cloneElement(el, {
            key: el.key ?? i,
            style: { ...prev, ["--i" as string]: i } as CSSProperties,
          });
        }
        return (
          <span key={i} style={{ ["--i" as string]: i } as CSSProperties}>
            {child}
          </span>
        );
      })}
    </Tag>
  );
}
