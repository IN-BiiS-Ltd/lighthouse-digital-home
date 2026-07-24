import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({
  className,
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "plain";
}) {
  const { lang, toggle, t } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("lang.aria")}
      aria-live="polite"
      lang={lang === "ar" ? "en" : "ar"}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        variant === "navy"
          ? "text-navy-foreground/85 hover:text-gold hover:bg-navy-foreground/10 focus-visible:ring-offset-navy"
          : "text-foreground hover:text-gold hover:bg-secondary focus-visible:ring-offset-background",
        className,
      )}
    >
      <Languages className="size-4 opacity-80" aria-hidden />
      <span className={lang === "en" ? "font-ar" : undefined}>
        {t("lang.toggle")}
      </span>
    </button>
  );
}
