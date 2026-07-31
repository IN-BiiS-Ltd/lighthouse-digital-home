import { useMemo, useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, CheckCircle2, Globe2 } from "lucide-react";
import { z } from "zod";
import { Section, SectionHeading, Eyebrow } from "@/components/blocks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Regional network data                                               */
/* ------------------------------------------------------------------ */

export interface Branch {
  id: string;
  country: string;
  countryAr: string;
  city: string;
  status: "Operational" | "Opening" | "Planned";
  /** [longitude, latitude] */
  coords: [number, number];
  body: string;
  email: string;
  phone?: string;
  address?: string;
}

export const branches: Branch[] = [
  {
    id: "egypt",
    country: "Egypt",
    countryAr: "مصر",
    city: "Dokki, Giza · Greater Cairo",
    status: "Operational",
    coords: [31.21, 30.043],
    body:
      "Our founding campus and the institutional headquarters of the Lighthouse network, serving families across Greater Cairo.",
    email: "hello@lighthousecampus.com",
    phone: "+20 110 703 0737",
    address: "66 El-Zahraa, Ad Doqi, Dokki, Giza Governorate 3751053, Egypt",
  },
  {
    id: "sudan",
    country: "Sudan",
    countryAr: "السودان",
    city: "Khartoum region",
    status: "Opening",
    coords: [32.53, 15.5],
    body:
      "A Sudanese campus community carrying the same curriculum, culture and standards of care as our founding campus.",
    email: "sudan@lighthousecampus.com",
  },
  {
    id: "south-sudan",
    country: "South Sudan",
    countryAr: "جنوب السودان",
    city: "Juba",
    status: "Opening",
    coords: [31.58, 4.85],
    body:
      "Serving families in Juba with international pathways, mentored teaching and a connected digital learning ecosystem.",
    email: "southsudan@lighthousecampus.com",
  },
  {
    id: "uganda",
    country: "Uganda",
    countryAr: "يوغندا",
    city: "Kampala",
    status: "Planned",
    coords: [32.58, 0.32],
    body:
      "Our East African gateway, extending the Lighthouse promise to Ugandan and international families in Kampala.",
    email: "uganda@lighthousecampus.com",
  },
];

/* ------------------------------------------------------------------ */
/* Stylised regional map (hand-plotted geo outlines)                   */
/* ------------------------------------------------------------------ */

type Pt = [number, number];

const project = (pts: Pt[]) =>
  pts.map(([lon, lat]) => `${((lon - 20) * 20).toFixed(1)},${((34 - lat) * 20).toFixed(1)}`).join(" ");

const shapes: { id: string; points: string }[] = [
  {
    id: "egypt",
    points: project([
      [25, 31.6], [30, 31.4], [34, 31.2], [34.9, 29.4], [34.2, 27.9],
      [33.2, 28.0], [35.7, 23.9], [36.9, 22], [25, 22],
    ]),
  },
  {
    id: "sudan",
    points: project([
      [25, 22], [36.9, 22], [37.2, 21], [38.6, 18], [37.5, 17.4], [36.9, 14.3],
      [36.4, 12.4], [35, 11.7], [34.3, 10.8], [33.9, 9.5], [33.2, 8.5],
      [29.5, 9.8], [27.8, 9.6], [24.1, 8.7], [23.5, 10.6], [22, 12.6],
      [24, 15.7], [23.9, 19.6],
    ]),
  },
  {
    id: "south-sudan",
    points: project([
      [24.1, 8.7], [27.8, 9.6], [29.5, 9.8], [33.2, 8.5], [33.9, 9.5],
      [34.3, 10.8], [35.3, 5.4], [34.4, 4.6], [33.5, 3.8], [31.2, 3.6],
      [30.8, 4.9], [29.6, 4.6], [27.4, 5.1], [26.5, 6.1], [24.8, 7.7],
    ]),
  },
  {
    id: "uganda",
    points: project([
      [30.8, 4.9], [31.2, 3.6], [33.5, 3.8], [34.0, 1.0], [33.9, -1.0],
      [31.8, -1.0], [29.6, -1.4], [29.6, 0.8], [29.7, 2.3], [30.8, 3.9],
    ]),
  },
];

function RegionalMap({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <svg
      viewBox="20 30 372 700"
      role="img"
      aria-label="Map of the Lighthouse Campus network across Egypt, Sudan, South Sudan and Uganda"
      preserveAspectRatio="xMidYMid meet"
      className="mx-auto mt-4 h-[clamp(320px,52vh,560px)] w-full"

    >
      <defs>
        <linearGradient id="lh-map-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
        <pattern id="lh-map-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="currentColor" opacity="0.18" />
        </pattern>
        <filter id="lh-map-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="text-brand-blue">
        {shapes.map((s) => {
          const isActive = s.id === active;
          const branch = branches.find((b) => b.id === s.id)!;
          return (
            <g key={s.id}>
              <polygon points={s.points} fill="url(#lh-map-grid)" className="text-navy" />
              <polygon
                points={s.points}
                fill="url(#lh-map-fill)"
                stroke="currentColor"
                strokeWidth={isActive ? 3.4 : 1.6}
                strokeOpacity={isActive ? 0.95 : 0.45}
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  isActive ? "text-gold" : "text-brand-blue hover:text-sapphire",
                )}
                tabIndex={0}
                role="button"
                aria-label={`${branch.country} — ${branch.city}`}
                aria-pressed={isActive}
                onClick={() => onSelect(s.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(s.id);
                  }
                }}
              />
            </g>
          );
        })}

        {branches.map((b) => {
          const [x, y] = [((b.coords[0] - 20) * 20), ((34 - b.coords[1]) * 20)];
          const isActive = b.id === active;
          return (
            <g
              key={b.id}
              className="cursor-pointer"
              onClick={() => onSelect(b.id)}
              aria-hidden
            >
              {isActive ? (
                <circle
                  cx={x}
                  cy={y}
                  r={16}
                  className="text-gold"
                  fill="currentColor"
                  fillOpacity="0.18"
                  filter="url(#lh-map-glow)"
                />
              ) : null}
              <circle
                cx={x}
                cy={y}
                r={isActive ? 7 : 5}
                fill="currentColor"
                className={cn("transition-all duration-300", isActive ? "text-gold" : "text-brand-blue")}
              />
              <text
                x={x + 14}
                y={y + 5}
                fontSize="17"
                className={cn(
                  "font-display transition-colors duration-300",
                  isActive ? "fill-gold" : "fill-current text-navy",
                )}
              >
                {b.country}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
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
  const branch = useMemo(
    () => branches.find((b) => b.id === active) ?? branches[0],
    [active],
  );

  return (
    <Section id={id} tone="muted">
      <SectionHeading
        eyebrow="Regional Network"
        title="A connected international presence"
        description="One institution, one philosophy, several homes. Lighthouse Campus is present in Egypt, Sudan, South Sudan and Uganda — each campus sharing the same curriculum architecture, teaching culture and digital learning ecosystem. Select a country on the map to contact that campus directly."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Map */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-2">
            <Globe2 className="size-4 text-sapphire" aria-hidden />
            <Eyebrow>Four countries · one community</Eyebrow>
          </div>
          <RegionalMap active={active} onSelect={setActive} />
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
