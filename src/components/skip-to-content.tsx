import { useLang } from "@/lib/i18n";

/**
 * SkipToContent — first-focusable element on every page.
 *
 * Visually hidden until focused, then jumps keyboard users past the
 * announcement bar, header and navigation straight to the <main id="main">
 * landmark of the current route (Academics or any other page).
 */
export function SkipToContent() {
  const { t, dir } = useLang();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] "
      style={{
        // Keep the link visually anchored to the reading origin in both LTR and RTL.
        insetInlineStart: "1rem",
        top: "1rem",
      }}
      // Translate the label dynamically so Arabic users get the same affordance.
      aria-label={t("a11y.skip", "Skip to main content")}
    >
      {t("a11y.skip", "Skip to main content")}
    </a>
  );
}
