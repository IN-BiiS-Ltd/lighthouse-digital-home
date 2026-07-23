import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { useConsent } from "@/lib/consent";
import { installClickTracking, trackPageview } from "@/lib/analytics";

/**
 * Privacy-respecting analytics loader.
 *
 * - Loads Plausible (with outbound-links + tagged-events extensions) only
 *   after the user grants consent. Removes the script if consent is revoked.
 * - Bridges TanStack Router client-side navigations to Plausible pageviews
 *   so SPA route changes are tracked as separate pages.
 * - Installs a global click delegator so any `[data-event="Name"]` element
 *   emits a custom event (e.g. CTA clicks, cookie consent, share bar).
 *
 * No PII is captured. No advertising cookies. Nothing runs before consent.
 */
const SCRIPT_ID = "lh-analytics";
const SCRIPT_SRC =
  "https://plausible.io/js/script.tagged-events.outbound-links.js";

export function Analytics() {
  const [choice] = useConsent();
  const router = useRouter();

  // Load / unload Plausible according to consent.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const existing = document.getElementById(SCRIPT_ID);

    if (choice !== "accepted") {
      if (existing) existing.remove();
      return;
    }
    if (existing) return;

    // Queue events until the script is ready (matches Plausible's docs).
    window.plausible =
      window.plausible ||
      function (...args: unknown[]) {
        (window.plausible!.q = window.plausible!.q || []).push(args);
      };

    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.defer = true;
    s.src = SCRIPT_SRC;
    s.setAttribute("data-domain", window.location.hostname);
    document.head.appendChild(s);
  }, [choice]);

  // Client-side pageview tracking on SPA route changes.
  useEffect(() => {
    if (choice !== "accepted") return;
    const unsub = router.history.subscribe(() => {
      // Defer one tick so document.title reflects the new route's head().
      window.setTimeout(() => {
        trackPageview(window.location.href);
      }, 0);
    });
    return () => {
      unsub();
    };
  }, [choice, router]);

  // Global click delegation for `[data-event]` elements.
  useEffect(() => {
    if (choice !== "accepted") return;
    const uninstall = installClickTracking();
    return uninstall;
  }, [choice]);

  return null;
}
