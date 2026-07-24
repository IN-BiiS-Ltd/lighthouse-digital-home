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

const DOWNLOAD_EXT = /\.(pdf|docx?|xlsx?|pptx?|csv|zip|rtf|txt|epub)(\?|#|$)/i;

function findAnchor(el: HTMLElement | null): HTMLAnchorElement | null {
  return el ? (el.closest("a[href]") as HTMLAnchorElement | null) : null;
}

function isDownloadAnchor(a: HTMLAnchorElement): boolean {
  if (a.hasAttribute("download")) return true;
  const href = a.getAttribute("href") || "";
  return DOWNLOAD_EXT.test(href);
}

function fileNameFromHref(href: string): string {
  try {
    const url = new URL(href, window.location.href);
    const last = url.pathname.split("/").filter(Boolean).pop();
    return decodeURIComponent(last || href);
  } catch {
    return href;
  }
}

function placementFor(el: HTMLElement): string | undefined {
  const scoped = el.closest<HTMLElement>("[data-track-placement]");
  if (scoped?.dataset.trackPlacement) return scoped.dataset.trackPlacement;
  const section = el.closest<HTMLElement>("section[id], [data-section-id]");
  return section?.id || section?.dataset.sectionId || undefined;
}

export function installClickTracking() {
  if (typeof window === "undefined") return () => {};
  const w = window as unknown as Record<string, unknown>;
  if (w[CLICK_LISTENER_KEY]) return () => {};
  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // 1) Explicit named events via [data-event]
    const node = target.closest<HTMLElement>("[data-event]");
    if (node) {
      const name = node.getAttribute("data-event");
      if (name) track(name, readEventProps(node));
    }

    // 2) Automatic download tracking on any anchor pointing to a file
    const anchor = findAnchor(target);
    if (anchor && isDownloadAnchor(anchor)) {
      const href = anchor.getAttribute("href") || "";
      const explicit = anchor.getAttribute("data-file-title");
      const title =
        explicit ||
        anchor.getAttribute("aria-label") ||
        (anchor.textContent || "").trim() ||
        fileNameFromHref(href);
      const ext = (href.match(DOWNLOAD_EXT)?.[1] || "").toLowerCase();
      track("Resource Download", {
        file: fileNameFromHref(href),
        title,
        href,
        type: ext,
        placement: placementFor(anchor) || "unknown",
        page: window.location.pathname,
      });
    }
  };
  document.addEventListener("click", handler, { capture: true });
  w[CLICK_LISTENER_KEY] = handler;
  return () => {
    document.removeEventListener("click", handler, { capture: true } as EventListenerOptions);
    delete w[CLICK_LISTENER_KEY];
  };
}

