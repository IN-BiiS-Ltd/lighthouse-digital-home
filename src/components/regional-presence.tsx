import { lazy, useMemo, useState, type FormEvent } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { MapPin, Phone, Mail, CheckCircle2, Globe2, Info, List, Map as MapIcon } from "lucide-react";
import { z } from "zod";
import { Section, SectionHeading, Eyebrow } from "@/components/blocks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { branches, type Branch } from "@/lib/regional-branches";

export { branches, type Branch };

const RegionalMapLeaflet = lazy(() => import("@/components/regional-map-leaflet"));

function RegionalMap({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ClientOnly
      fallback={
        <div className="mt-4 h-[clamp(340px,52vh,560px)] w-full animate-pulse rounded-xl border border-border bg-secondary" />
      }
    >
      <RegionalMapLeaflet active={active} onSelect={onSelect} />
    </ClientOnly>
  );
}


/* ------------------------------------------------------------------ */
/* Per-branch enquiry form                                             */
/* ------------------------------------------------------------------ */

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(5, "Please add a short message.").max(1000),
});

function BranchForm({ branch }: { branch: Branch }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = enquirySchema.safeParse({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please review your details.");
      return;
    }
    const v = parsed.data;
    const subject = `Enquiry — ${branch.country} campus (${branch.city})`;
    const body = [
      `Campus: ${branch.country} — ${branch.city}`,
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      v.phone ? `Phone: ${v.phone}` : null,
      "",
      v.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${branch.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setError(null);
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-center gap-4 py-14 text-center">
        <CheckCircle2 className="size-11 text-gold" aria-hidden />
        <h3 className="font-display text-xl font-medium">
          Thank you — your message to our {branch.country} campus is ready to send.
        </h3>
        <p className="max-w-sm text-muted-foreground">
          If your email client did not open, write to us directly at{" "}
          <a className="font-semibold text-brand-blue hover:underline" href={`mailto:${branch.email}`}>
            {branch.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-1 font-semibold text-brand-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${branch.id}-name`}>Full name</Label>
          <Input id={`${branch.id}-name`} name="name" autoComplete="name" maxLength={100} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${branch.id}-email`}>Email address</Label>
          <Input
            id={`${branch.id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${branch.id}-phone`}>Phone (optional)</Label>
          <Input id={`${branch.id}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${branch.id}-campus`}>Campus</Label>
          <Input
            id={`${branch.id}-campus`}
            value={`${branch.country} — ${branch.city}`}
            readOnly
            aria-readonly
            className="bg-secondary"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${branch.id}-message`}>Message</Label>
        <Textarea id={`${branch.id}-message`} name="message" rows={5} maxLength={1000} required />
      </div>
      {error ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-md bg-navy px-8 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
      >
        Send to {branch.country} campus
      </button>
      <p className="text-xs text-muted-foreground">
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Public section                                                      */
/* ------------------------------------------------------------------ */

export function RegionalPresence({ id = "network" }: { id?: string }) {
  const [active, setActive] = useState<string>("egypt");
  const [view, setView] = useState<"map" | "list">("map");
  const branch = useMemo(
    () => branches.find((b) => b.id === active) ?? branches[0],
    [active],
  );
  const instructionsId = `${id}-map-instructions`;
  const listId = `${id}-branch-list`;

  return (
    <Section id={id} tone="muted">
      <SectionHeading
        eyebrow="Regional Network"
        title="A connected international presence"
        description="One institution, one philosophy, several homes. Lighthouse Campus is present in Egypt, Sudan, South Sudan and Uganda — each campus sharing the same curriculum architecture, teaching culture and digital learning ecosystem. Select a country on the map or the list below to contact that campus directly."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Map / list */}
        <div className="relative flex flex-col justify-start overflow-hidden rounded-2xl border border-border bg-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Globe2 className="size-4 text-sapphire" aria-hidden />
              <Eyebrow>Four countries · one community</Eyebrow>
            </div>
            <div className="flex items-center rounded-full border border-border bg-background p-1">
              <button
                type="button"
                onClick={() => setView("map")}
                aria-pressed={view === "map"}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  view === "map"
                    ? "bg-navy text-navy-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <MapIcon className="size-3.5" aria-hidden />
                Map
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                aria-pressed={view === "list"}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  view === "list"
                    ? "bg-navy text-navy-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <List className="size-3.5" aria-hidden />
                List
              </button>
            </div>
          </div>

          {view === "map" ? (
            <>
              <div
                id={instructionsId}
                className="mt-4 flex items-start gap-2.5 rounded-xl border border-gold/30 bg-gold/10 p-3 text-sm text-foreground"
              >
                <Info className="mt-0.5 size-4 shrink-0 text-sapphire" aria-hidden />
                <div>
                  <p className="font-semibold">How to use the map</p>
                  <p className="mt-0.5 text-muted-foreground">
                    Click an emblem marker to open that campus, or use the List view below for a
                    keyboard-friendly text alternative. Drag to pan and use +/− to zoom.
                  </p>
                </div>
              </div>
              <RegionalMap active={active} onSelect={setActive} />

            </>
          ) : (
            <div id={listId} className="mt-5 space-y-3">
              <p className="sr-only">
                Text list of all Lighthouse campuses. Each card includes the country, city, status, and a button to select the campus and show its contact form.
              </p>
              {branches.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => {
                    setActive(b.id);
                    setView("map");
                  }}
                  className={cn(
                    "w-full rounded-xl border p-4 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                    b.id === active
                      ? "border-gold/60 bg-navy text-navy-foreground"
                      : "border-border bg-card hover:border-navy/40",
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className={cn("eyebrow text-xs", b.id === active ? "text-gold" : "text-sapphire")}>
                        {b.country}
                        <span className="mx-1.5 opacity-60">·</span>
                        {b.countryAr}
                      </span>
                      <h4 className="mt-1 font-display text-lg font-medium">
                        {b.city}
                      </h4>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-semibold",
                        b.id === active ? "bg-gold/20 text-white" : "bg-gold/15 text-gold-foreground",
                      )}
                    >
                      {b.status}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-2 line-clamp-2 text-sm",
                      b.id === active ? "text-navy-foreground/90" : "text-muted-foreground",
                    )}
                  >
                    {b.body}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sapphire">
                    <Mail className="size-3.5" aria-hidden />
                    {b.email}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Branch detail + form */}
        <div>
          <div
            role="tablist"
            aria-label="Lighthouse campuses by country"
            className="flex flex-wrap gap-2"
          >
            {branches.map((b) => (
              <button
                key={b.id}
                role="tab"
                type="button"
                aria-selected={b.id === active}
                onClick={() => setActive(b.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  b.id === active
                    ? "border-gold/60 bg-navy text-navy-foreground shadow-e1"
                    : "border-border bg-card text-foreground hover:border-navy/40",
                )}
              >
                {b.country}
                <span className="ms-2 text-xs font-normal opacity-80">{b.countryAr}</span>
              </button>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-border bg-card p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <Eyebrow>{branch.country}</Eyebrow>
                <h3 className="mt-1 font-display text-2xl font-medium">
                  {branch.city}
                </h3>
              </div>
              <span className="eyebrow rounded-full bg-gold/15 px-3 py-1 text-gold-foreground">
                {branch.status}
              </span>
            </div>
            <p className="mt-4 text-muted-foreground">{branch.body}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sapphire" aria-hidden />
                <span>{branch.address ?? branch.city}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-sapphire" aria-hidden />
                <a href={`mailto:${branch.email}`} className="hover:text-brand-blue">
                  {branch.email}
                </a>
              </li>
              {branch.phone ? (
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-sapphire" aria-hidden />
                  <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-brand-blue">
                    {branch.phone}
                  </a>
                </li>
              ) : null}
            </ul>

            <div className="mt-8 border-t border-border pt-8">
              <Eyebrow>Contact this campus</Eyebrow>
              <div className="mt-5">
                <BranchForm key={branch.id} branch={branch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
