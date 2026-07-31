import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

import { useLang } from "@/lib/i18n";

/**
 * RouteFocusReset — after a client-side route change, sequential focus must
 * restart at the top of the document (as it does on a full page load), so the
 * skip links are always the first Tab stop on every page.
 */
export function RouteFocusReset() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const sentinel = document.getElementById("route-focus-start");
    const active = document.activeElement as HTMLElement | null;
    // Don't steal focus from an open dialog / input the user is typing in.
    if (
      active &&
      active !== document.body &&
      !active.closest("[role='dialog']") &&
      !["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)
    ) {
      // Blur alone keeps the browser's sequential-focus starting point mid-page,
      // so move focus to a hidden sentinel that sits before the skip links.
      active.blur();
      sentinel?.focus({ preventScroll: true });
    }
  }, [pathname]);

  return (
    <div
      id="route-focus-start"
      tabIndex={-1}
      className="sr-only"
      // Not announced as content; it only resets the focus starting point.
      aria-hidden={false}
    />
  );
}


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
    if (!trigger) {
      document.dispatchEvent(new CustomEvent("lighthouse:open-search"));
      return;
    }
    trigger.focus();
    // Opening via event avoids click/focus races; the dialog then moves
    // focus into the search input, and closing returns it to this button.
    document.dispatchEvent(new CustomEvent("lighthouse:open-search"));
  };

  return (
    <div
      className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:z-[100] focus-within:flex focus-within:gap-2"
      style={{ insetInlineStart: "1rem", top: "1rem" }}
      dir={dir}
    >
      <a
        href="#main"
        onClick={(event) => {
          // Focus the landmark explicitly: hash targets are unreliable during
          // client-side navigation, and this guarantees focus lands on <main>.
          const main = document.getElementById("main");
          if (main) {
            event.preventDefault();
            main.focus();
            window.history.replaceState(null, "", "#main");
            main.scrollIntoView({ block: "start", behavior: "auto" });
          }
        }}
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
