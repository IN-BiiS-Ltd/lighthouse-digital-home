import { createFileRoute } from "@tanstack/react-router";
import { useConsent } from "@/lib/consent";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { ShareBar } from "@/components/share-bar";
import { Check } from "lucide-react";

export const Route = createFileRoute("/cookie-settings")({
  head: () => ({
    meta: [
      { title: "Cookie Settings — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Manage your cookie preferences on the Lighthouse Campus website. Accept aggregate analytics, or keep only essential cookies.",
      },
      { property: "og:title", content: "Cookie Settings — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Change your cookie preferences at any time.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/cookie-settings" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/cookie-settings" }],
  }),
  component: CookieSettingsPage,
});

function CookieSettingsPage() {
  const [choice, setChoice] = useConsent();

  const options: {
    key: "accepted" | "essential";
    label: string;
    body: string;
    detail: string[];
  }[] = [
    {
      key: "essential",
      label: "Essential only",
      body: "Only cookies required for the site to function correctly.",
      detail: [
        "Session integrity and preferences",
        "No analytics",
        "No advertising or tracking",
      ],
    },
    {
      key: "accepted",
      label: "Accept aggregate analytics",
      body: "Essential cookies plus non-identifying usage statistics that help us improve the site.",
      detail: [
        "Essential cookies",
        "Privacy-friendly analytics (no personal profiles)",
        "No advertising or tracking",
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal · Preferences"
        title="Cookie settings"
        intro="Choose how Lighthouse Campus may use cookies during your visit. You can change this at any time."
      />
      <Section>
        <SectionHeading
          eyebrow="Your choice"
          title="What you allow"
          description="Both options preserve your privacy. We never use advertising or cross-site tracking cookies on this website."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {options.map((opt) => {
            const active = choice === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setChoice(opt.key)}
                aria-pressed={active}
                className={[
                  "group flex h-full flex-col rounded-2xl border p-8 text-left transition-all",
                  active
                    ? "border-gold bg-gold/[0.06] shadow-[0_20px_60px_-30px_rgba(11,29,58,0.35)]"
                    : "border-border bg-card hover:border-gold/50",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow text-gold">{active ? "Selected" : "Choose"}</span>
                  <span
                    aria-hidden
                    className={[
                      "flex size-8 items-center justify-center rounded-full border transition-colors",
                      active ? "border-gold bg-gold text-navy" : "border-border text-transparent",
                    ].join(" ")}
                  >
                    <Check className="size-4" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium">{opt.label}</h3>
                <p className="mt-2 text-muted-foreground">{opt.body}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {opt.detail.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>
            Current preference:{" "}
            <strong className="text-foreground">
              {choice === "accepted"
                ? "Aggregate analytics"
                : choice === "essential"
                  ? "Essential only"
                  : "Not set"}
            </strong>
          </span>
          {choice !== null ? (
            <button
              type="button"
              onClick={() => setChoice(null)}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold"
            >
              Reset choice
            </button>
          ) : null}
        </div>
      </Section>
      <ShareBar title="Cookie Settings — Lighthouse Campus" />
    </>
  );
}
