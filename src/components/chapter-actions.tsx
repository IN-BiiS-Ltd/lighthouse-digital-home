import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookOpen, Check, Copy, Share2, Sparkles } from "lucide-react";

const SITE_ORIGIN =
  typeof window !== "undefined" ? window.location.origin : "https://lighthousecampus.lovable.app";

interface ChapterActionsProps {
  hash: string;
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  focus?: string[];
  prose?: string;
  dark?: boolean;
}

/**
 * ChapterActions — the elegant footer strip inside each cinematic chapter.
 * Renders a "Details" trigger (Radix Dialog closes with Escape by default)
 * and a "Share" button that prefers the Web Share API and falls back to a
 * clipboard copy of the deep link (#chapter-id).
 */
export function ChapterActions({
  hash,
  number,
  eyebrow,
  title,
  body,
  focus,
  prose,
  dark = false,
}: ChapterActionsProps) {
  const [copied, setCopied] = useState(false);
  const [hasNative, setHasNative] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHasNative(typeof navigator !== "undefined" && "share" in navigator);
    setUrl(`${SITE_ORIGIN}${window.location.pathname}#${hash}`);
  }, [hash]);

  const onShare = async () => {
    const shareData = { title: `${title} — Lighthouse Campus`, text: eyebrow, url };
    try {
      if (hasNative) {
        await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share(shareData);
        return;
      }
      throw new Error("fallback");
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        /* silently ignore */
      }
    }
  };

  const btnBase =
    "sheen group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const darkBtn =
    "border-gold/40 bg-navy/60 text-navy-foreground hover:border-gold hover:bg-navy/80 focus-visible:ring-gold focus-visible:ring-offset-navy";
  const lightBtn =
    "border-brand-blue/30 bg-white/85 text-foreground hover:border-brand-blue hover:bg-white focus-visible:ring-brand-blue focus-visible:ring-offset-sand";

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className={`${btnBase} ${dark ? darkBtn : lightBtn}`}>
            <BookOpen aria-hidden className="size-3.5" strokeWidth={2} />
            <span>Chapter Details</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl overflow-hidden border-gold/30 bg-navy p-0 text-navy-foreground">
          {/* Atmosphere */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(60% 80% at 15% 10%, color-mix(in oklab, var(--gold) 22%, transparent) 0%, transparent 65%)",
            }}
          />
          <div className="relative p-8 md:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              <Sparkles aria-hidden className="size-3" />
              Chapter {number}
            </div>

            <DialogHeader className="text-left">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/80">
                {eyebrow}
              </div>
              <DialogTitle className="text-balance font-display text-3xl font-medium leading-tight md:text-4xl">
                {title}
              </DialogTitle>
              <DialogDescription className="mt-4 text-base leading-relaxed text-navy-foreground/80">
                {body}
              </DialogDescription>
            </DialogHeader>

            {focus && focus.length > 0 && (
              <>
                <div className="mt-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-foreground/70">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                  Focus
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {focus.map((f, j) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 rounded-lg border border-gold/15 bg-navy/40 px-3 py-2.5 text-sm capitalize text-navy-foreground/90"
                      style={{ animationDelay: `${j * 40}ms` }}
                    >
                      <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {prose && (
              <blockquote className="mt-7 border-l-2 border-gold/70 bg-navy/40 py-3 pl-5 pr-4 text-base italic leading-relaxed text-navy-foreground/90">
                {prose}
              </blockquote>
            )}

            <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-navy-foreground/50">
              Press <kbd className="rounded border border-gold/40 bg-navy/60 px-1.5 py-0.5 text-[10px] font-semibold text-gold">Esc</kbd> to close
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <button
        type="button"
        onClick={onShare}
        aria-label={copied ? "Link copied" : "Share this chapter"}
        className={`${btnBase} ${dark ? darkBtn : lightBtn}`}
      >
        {copied ? (
          <>
            <Check aria-hidden className="size-3.5 text-gold" strokeWidth={2.5} />
            <span>Link Copied</span>
          </>
        ) : hasNative ? (
          <>
            <Share2 aria-hidden className="size-3.5" strokeWidth={2} />
            <span>Share Chapter</span>
          </>
        ) : (
          <>
            <Copy aria-hidden className="size-3.5" strokeWidth={2} />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
