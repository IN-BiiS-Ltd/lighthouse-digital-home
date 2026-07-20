import { useEffect, useState } from "react";
import { Facebook, Linkedin, Send, Mail, Link as LinkIcon, Check, Share2 } from "lucide-react";
import { Section, Eyebrow } from "@/components/blocks";

const SITE_ORIGIN = "https://lighthousecampus.lovable.app";

/** X / Twitter glyph (lucide doesn't ship the new X mark). */
function XGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2H21.5l-7.44 8.5L23 22h-6.797l-5.32-6.51L4.8 22H1.54l7.96-9.09L1 2h6.914l4.81 5.96L18.244 2Zm-1.19 18h1.88L7.06 4H5.06l11.994 16Z" />
    </svg>
  );
}

/** WhatsApp glyph. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .04 5.36.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.96 11.96 0 0 0 5.82 1.49h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.21-3.48-8.41ZM12.02 21.3h-.01a9.3 9.3 0 0 1-4.74-1.3l-.34-.2-3.67.96.98-3.58-.22-.37a9.32 9.32 0 0 1-1.42-4.94c0-5.15 4.19-9.34 9.34-9.34 2.5 0 4.84.97 6.6 2.74a9.28 9.28 0 0 1 2.74 6.6c0 5.15-4.19 9.34-9.26 9.34Zm5.36-6.99c-.29-.15-1.73-.85-2-.95s-.46-.15-.66.15-.76.95-.93 1.14c-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.84 1.2 3.03c.15.2 2.07 3.17 5.02 4.44.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z" />
    </svg>
  );
}

/** Instagram glyph — for footer follow (no native share URL). */
function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** YouTube glyph. */
function YouTubeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.5 7.2a3.02 3.02 0 0 0-2.13-2.14C19.47 4.5 12 4.5 12 4.5s-7.47 0-9.37.56A3.02 3.02 0 0 0 .5 7.2C0 9.1 0 12 0 12s0 2.9.5 4.8a3.02 3.02 0 0 0 2.13 2.14c1.9.56 9.37.56 9.37.56s7.47 0 9.37-.56A3.02 3.02 0 0 0 23.5 16.8C24 14.9 24 12 24 12s0-2.9-.5-4.8ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z" />
    </svg>
  );
}

interface ShareBarProps {
  title?: string;
  /** Optional path override — defaults to current location. */
  path?: string;
}

/**
 * ShareBar — appears at the foot of every content page, letting readers
 * share the page across major networks or copy the canonical URL.
 */
export function ShareBar({ title = "Lighthouse Campus", path }: ShareBarProps) {
  const [url, setUrl] = useState(SITE_ORIGIN + (path ?? "/"));
  const [pageTitle, setPageTitle] = useState(title);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = path ?? window.location.pathname + window.location.search;
    setUrl(SITE_ORIGIN + p);
    if (document.title) setPageTitle(document.title);
  }, [path]);

  const enc = encodeURIComponent;
  const shareText = `${pageTitle}`;

  const networks = [
    {
      key: "facebook",
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
      icon: Facebook,
    },
    {
      key: "x",
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(shareText)}`,
      icon: XGlyph,
    },
    {
      key: "linkedin",
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      icon: Linkedin,
    },
    {
      key: "whatsapp",
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${enc(`${shareText} — ${url}`)}`,
      icon: WhatsAppGlyph,
    },
    {
      key: "telegram",
      label: "Share on Telegram",
      href: `https://t.me/share/url?url=${enc(url)}&text=${enc(shareText)}`,
      icon: Send,
    },
    {
      key: "email",
      label: "Share by email",
      href: `mailto:?subject=${enc(shareText)}&body=${enc(`${shareText}\n\n${url}`)}`,
      icon: Mail,
    },
  ] as const;

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  }

  async function onNativeShare() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share({
          title: pageTitle,
          text: shareText,
          url,
        });
      } catch {
        /* user cancelled — no-op */
      }
    }
  }

  const hasNative = typeof navigator !== "undefined" && "share" in navigator;

  return (
    <Section tone="muted" className="border-t border-border/60">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
        <Eyebrow className="justify-center">Share this page</Eyebrow>
        <p className="max-w-xl text-sm text-muted-foreground">
          Help others discover Lighthouse Campus. Share this page across your
          community.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2.5" role="list">
          {networks.map((n) => {
            const Icon = n.icon;
            return (
              <li key={n.key}>
                <a
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={n.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground/80 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <Icon className="size-[1.05rem]" />
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={onCopy}
              aria-label={copied ? "Link copied" : "Copy link"}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground/80 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {copied ? <Check className="size-[1.05rem]" /> : <LinkIcon className="size-[1.05rem]" />}
            </button>
          </li>
          {hasNative ? (
            <li>
              <button
                type="button"
                onClick={onNativeShare}
                aria-label="Share via device"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground/80 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Share2 className="size-[1.05rem]" />
                Share
              </button>
            </li>
          ) : null}
        </ul>
        <p aria-live="polite" className="min-h-[1.25rem] text-xs text-muted-foreground">
          {copied ? "Link copied to clipboard." : ""}
        </p>
      </div>
    </Section>
  );
}

/** Compact set of "Follow us" links — for the site footer. */
export function FollowLinks() {
  const links = [
    { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com/", icon: InstagramGlyph },
    { label: "X (Twitter)", href: "https://x.com/", icon: XGlyph },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
    { label: "YouTube", href: "https://www.youtube.com/", icon: YouTubeGlyph },
  ];
  return (
    <div>
      <h2 className="eyebrow text-gold">Follow us</h2>
      <ul className="mt-5 flex flex-wrap gap-2.5" role="list">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Lighthouse Campus on ${l.label}`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-navy-foreground/20 text-navy-foreground/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                <Icon className="size-[1.05rem]" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
