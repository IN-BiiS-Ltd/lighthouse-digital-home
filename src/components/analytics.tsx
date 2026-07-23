import { useEffect } from "react";
import { useConsent } from "@/lib/consent";

/**
 * Privacy-respecting analytics loader.
 *
 * - Reads the shared consent store. When choice === "accepted",
 *   loads Plausible's script (privacy-friendly, no cookies of its
 *   own — safe to include under either bucket, but we gate it on
 *   consent anyway for clarity).
 * - Does nothing until the user has made a choice, and unloads
 *   the script if consent is later revoked.
 * - No PII, no cross-site tracking, no advertising tags.
 *
 * The domain is derived from the current host so it works in both
 * preview and published environments without configuration.
 */
const SCRIPT_ID = "lh-analytics";

export function Analytics() {
  const [choice] = useConsent();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const existing = document.getElementById(SCRIPT_ID);

    if (choice !== "accepted") {
      if (existing) existing.remove();
      return;
    }
    if (existing) return;

    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.defer = true;
    s.src = "https://plausible.io/js/script.js";
    s.setAttribute("data-domain", window.location.hostname);
    document.head.appendChild(s);
  }, [choice]);

  return null;
}
