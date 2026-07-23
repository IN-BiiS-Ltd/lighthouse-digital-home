import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Cookie } from "lucide-react";

const STORAGE_KEY = "lh-cookie-consent-v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      // storage unavailable — do not block the page
    }
  }, []);

  const decide = (choice: "accepted" | "essential") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, at: new Date().toISOString() }),
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-navy-foreground/15 bg-navy text-navy-foreground shadow-[0_25px_70px_-20px_rgba(0,0,0,0.55)] backdrop-blur md:inset-x-auto md:right-6 md:bottom-6 md:left-6"
    >
      <div className="flex flex-col gap-4 p-5 md:flex-row md:items-start md:gap-6 md:p-6">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold" aria-hidden>
          <Cookie className="size-5" />
        </div>
        <div className="flex-1">
          <h2
            id="cookie-consent-title"
            className="font-display text-lg font-medium tracking-tight"
          >
            Cookies at Lighthouse Campus
          </h2>
          <p
            id="cookie-consent-desc"
            className="mt-2 text-sm leading-relaxed text-navy-foreground/75"
          >
            We use essential cookies to make this site work, and — with your
            consent — aggregate analytics to improve it. We do not use
            advertising or tracking cookies. See our{" "}
            <Link to="/cookies" className="underline hover:text-gold">
              Cookie Policy
            </Link>
            {" "}and{" "}
            <Link to="/privacy" className="underline hover:text-gold">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => decide("essential")}
              className="rounded-full border border-navy-foreground/25 px-5 py-2 text-sm font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Essential only
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => decide("essential")}
          aria-label="Dismiss cookie notice"
          className="absolute right-3 top-3 rounded-full p-1.5 text-navy-foreground/60 transition-colors hover:bg-navy-foreground/10 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:static md:self-start"
        >
          <X className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
