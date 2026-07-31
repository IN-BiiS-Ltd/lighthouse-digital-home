import { useLang } from "@/lib/i18n";

/**
 * SkipLinks — the first focusable elements on every page.
 *
 * Visually hidden until focused, then let keyboard users jump past the
 * announcement bar, header and navigation either to the <main id="main">
 * landmark or straight to the site search, saving many tab presses.
 */
export function SkipToContent() {
  const { t, dir } = useLang();

  // Opens the header command palette without hunting through the nav.
  const jumpToSearch = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.preventDefault();
    const trigger = document.getElementById(
      "site-search-trigger",
    ) as HTMLButtonElement | null;
    if (!trigger) return;
    trigger.focus();
    // Click opens the dialog, which moves focus into the search input.
    trigger.click();
  };

  return (
    <div
      className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:z-[100] focus-within:flex focus-within:gap-2"
      style={{ insetInlineStart: "1rem", top: "1rem" }}
      dir={dir}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:rounded-md focus:bg-gold focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]"
        aria-label={t("a11y.skip", "Skip to main content")}
      >
        {t("a11y.skip", "Skip to main content")}
      </a>
      <a
        href="#site-search-trigger"
        onClick={jumpToSearch}
        className="sr-only focus:not-sr-only focus:rounded-md focus:bg-gold focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]"
        aria-label={t("a11y.skipSearch", "Skip to search")}
      >
        {t("a11y.skipSearch", "Skip to search")}
      </a>
    </div>
  );
}
