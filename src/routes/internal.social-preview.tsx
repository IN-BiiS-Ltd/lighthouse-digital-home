import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Container, Section, Eyebrow } from "@/components/blocks";
import { RefreshCw, Check, ExternalLink, Link as LinkIcon } from "lucide-react";
import { SOCIAL_CARD_URL } from "@/lib/social-card";

const SITE_ORIGIN = "https://lighthousecampus.com";
const CARD_PATHS = [
  SOCIAL_CARD_URL.replace(SITE_ORIGIN, ""),
];

export const Route = createFileRoute("/internal/social-preview")({
  head: () => ({
    meta: [
      { title: "Social Preview Cache — Lighthouse Campus Internal Tools" },
      {
        name: "description",
        content:
          "Internal tool to purge the CDN and image cache for the Lighthouse Campus share card and re-scrape link previews on WhatsApp, Facebook, LinkedIn and X.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Social Preview Cache — Internal Tools" },
      {
        property: "og:description",
        content:
          "Purge the share-card CDN cache and force social platforms to fetch the newest preview image.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SocialPreviewTool,
});

function SocialPreviewTool() {
  const [path, setPath] = useState("/");
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const target = SITE_ORIGIN + (path.startsWith("/") ? path : `/${path}`);
  const enc = encodeURIComponent;

  const inspectors = [
    {
      label: "Facebook / WhatsApp debugger",
      href: `https://developers.facebook.com/tools/debug/?q=${enc(target)}`,
    },
    {
      label: "LinkedIn post inspector",
      href: `https://www.linkedin.com/post-inspector/inspect/${enc(target)}`,
    },
    { label: "X card validator", href: "https://cards-dev.twitter.com/validator" },
    {
      label: "Telegram preview refresh",
      href: "https://t.me/WebpageBot",
    },
  ];

  async function purge() {
    setBusy(true);
    const stamp = Date.now();
    const lines: string[] = [];
    for (const p of [...CARD_PATHS, path.startsWith("/") ? path : `/${path}`]) {
      const url = `${SITE_ORIGIN}${p}${p.includes("?") ? "&" : "?"}cb=${stamp}`;
      try {
        const res = await fetch(url, { cache: "reload", mode: "no-cors" });
        lines.push(`✓ Re-fetched ${p} (${res.type === "opaque" ? "edge refreshed" : res.status})`);
      } catch {
        lines.push(`⚠ Could not reach ${p} — try again after publishing`);
      }
    }
    try {
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
        lines.push(`✓ Cleared ${keys.length} local browser cache bucket(s)`);
      }
    } catch {
      /* ignore */
    }
    lines.push(`Done at ${new Date().toLocaleTimeString()}`);
    setLog(lines);
    setBusy(false);
  }

  async function copyTarget() {
    try {
      await navigator.clipboard.writeText(target);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Internal tools"
        title="Social preview cache"
        intro="Purge the CDN and image cache for the share card, then re-scrape the link on WhatsApp, Facebook, LinkedIn and X so the newest preview appears immediately after publishing."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Social preview cache" }]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Step 1 — choose the link</Eyebrow>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <label htmlFor="preview-path" className="sr-only">
                Page path to refresh
              </label>
              <input
                id="preview-path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                placeholder="/admissions"
                className="min-w-[16rem] flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              />
              <button
                type="button"
                onClick={copyTarget}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition hover:border-gold hover:text-gold"
              >
                {copied ? <Check className="size-4" /> : <LinkIcon className="size-4" />}
                {copied ? "Copied" : "Copy URL"}
              </button>
            </div>
            <p className="mt-2 break-all text-xs text-muted-foreground">{target}</p>

            <div className="mt-10">
              <Eyebrow>Step 2 — purge the cache</Eyebrow>
              <button
                type="button"
                onClick={purge}
                disabled={busy}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm transition hover:-translate-y-0.5 disabled:opacity-60"
              >
                <RefreshCw className={`size-4 ${busy ? "animate-spin" : ""}`} />
                {busy ? "Purging…" : "Purge CDN & image cache"}
              </button>
              {log.length > 0 ? (
                <ul
                  aria-live="polite"
                  className="mt-5 space-y-1.5 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground"
                >
                  {log.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="mt-10">
              <Eyebrow>Step 3 — re-scrape the platforms</Eyebrow>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2" role="list">
                {inspectors.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground/85 transition hover:border-gold hover:text-gold"
                    >
                      {i.label}
                      <ExternalLink className="size-4 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                On the Facebook debugger press “Scrape Again” — WhatsApp uses the same
                cache, so the new card appears in chats right after.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
