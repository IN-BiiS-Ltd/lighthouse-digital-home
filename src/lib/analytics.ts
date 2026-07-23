/**
 * Thin, privacy-friendly analytics helper around Plausible.
 *
 * - `track(event, props?)` — safe no-op when consent has not been granted
 *   or the script has not yet loaded. Never throws.
 * - `trackPageview(url?)` — used by the SPA router bridge in Analytics.tsx
 *   to record client-side navigations as separate pageviews.
 * - `installClickTracking()` — event delegation for `[data-event]` clicks,
 *   letting any element (button, link, card) opt in to a named event with
 *   `data-event="Name"` and optional `data-event-prop-*="value"` props.
 *
 * We never capture PII, URLs with query strings that identify a user,
 * or free-text input. Only the event name and declared props are sent.
 */

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: ((
      event: string,
      options?: { u?: string; props?: Props; callback?: () => void },
    ) => void) & {
      q?: unknown[];
    };
  }
}

function plausible() {
  if (typeof window === "undefined") return undefined;
  return window.plausible;
}

export function track(event: string, props?: Props) {
  const p = plausible();
  if (!p) return;
  try {
    p(event, props ? { props } : undefined);
  } catch {
    // never let analytics break the app
  }
}

export function trackPageview(url?: string) {
  const p = plausible();
  if (!p) return;
  try {
    p("pageview", url ? { u: url } : undefined);
  } catch {
    /* noop */
  }
}

const CLICK_LISTENER_KEY = "__lhClickTracker__";

function readEventProps(el: HTMLElement): Props | undefined {
  const props: Props = {};
  for (const attr of Array.from(el.attributes)) {
    if (attr.name.startsWith("data-event-prop-")) {
      const key = attr.name.slice("data-event-prop-".length);
      if (key) props[key] = attr.value;
    }
  }
  return Object.keys(props).length ? props : undefined;
}

export function installClickTracking() {
  if (typeof window === "undefined") return () => {};
  const w = window as unknown as Record<string, unknown>;
  if (w[CLICK_LISTENER_KEY]) return () => {};
  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const node = target.closest<HTMLElement>("[data-event]");
    if (!node) return;
    const name = node.getAttribute("data-event");
    if (!name) return;
    track(name, readEventProps(node));
  };
  document.addEventListener("click", handler, { capture: true });
  w[CLICK_LISTENER_KEY] = handler;
  return () => {
    document.removeEventListener("click", handler, { capture: true } as EventListenerOptions);
    delete w[CLICK_LISTENER_KEY];
  };
}
