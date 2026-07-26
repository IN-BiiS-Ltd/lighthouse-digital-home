import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

const STORAGE_KEY = "lh_announcement_dismissed";

export function AnnouncementBar() {
  const { lang, t } = useLang();
  const [dismissed, setDismissed] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setDismissed(stored === "true");
    } catch {
      /* ignore */
    }
  }, []);

  if (!mounted || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      role="region"
      aria-label={t("announcement.label", "Academic year announcement")}
      className={cn(
        "relative z-50 border-b border-gold/40 bg-gradient-to-r from-gold via-gold/95 to-gold/90 px-4 py-2.5 text-navy shadow-sm",
        lang === "ar" && "rtl"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
        <span className="flex shrink-0 items-center justify-center rounded-full bg-navy/10 p-1.5">
          <Megaphone className="size-4 text-navy" aria-hidden="true" />
        </span>
        <p className="text-center text-sm font-medium leading-snug text-navy">
          <span className="hidden sm:inline">
            {t(
              "announcement.full",
              "Registration is now open for the new academic year. Apply early and secure your child's place."
            )}
          </span>
          <span className="sm:hidden">
            {t(
              "announcement.short",
              "Registration is now open for the new academic year."
            )}
          </span>
        </p>
        <Link
          to="/admissions/academic-year-announcements"
          className="shrink-0 rounded-md bg-navy px-3 py-1 text-xs font-semibold text-gold transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
        >
          {t("announcement.cta", "Learn more")}
        </Link>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label={t("announcement.dismiss", "Dismiss announcement")}
          className="absolute end-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-navy/70 transition-colors hover:bg-navy/10 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-gold sm:end-4"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
