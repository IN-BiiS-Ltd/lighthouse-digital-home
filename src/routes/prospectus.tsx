import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Stat,
  ButtonLink,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";
import { PageTOC } from "@/components/about-toc";
import { useLang } from "@/lib/i18n";
import { PROSPECTUS_COPY, PROSPECTUS_PDF } from "@/lib/prospectus-content";
import { cn } from "@/lib/utils";
import {
  Download,
  GraduationCap,
  Languages,
  BookOpen,
  Users,
  Building2,
  Cpu,
  ShieldCheck,
  Compass,
  ClipboardList,
  FileText,
  CalendarCheck,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const BASE = "https://lighthousecampus.com/prospectus";
const APPLY = "https://eduios.lighthousecampus.com/apply/lighthouse-campus";

/** Per-language, structured head metadata for the guide. */
const SEO = {
  en: {
    url: BASE,
    locale: "en_US",
    title: "School Guide 2026 / 2027 | Lighthouse Campus Prospectus",
    description:
      "Read the Lighthouse Campus school guide for 2026 / 2027 — three academic programmes, faculty standards, learning environment, EEIOS, and the admissions procedure, with a downloadable PDF.",
    ogTitle: "School Guide 2026 / 2027 | Lighthouse Campus Prospectus",
    ogDescription:
      "Three academic programmes, qualified faculty, a modern learning environment and one education operating system. Admissions open now for 2026 / 2027.",
    headline: "Lighthouse Campus School Guide 2026 / 2027",
    about: "Admissions, academic programmes and learning environment at Lighthouse Campus.",
    org: "Lighthouse Campus",
  },
  ar: {
    url: `${BASE}?lang=ar`,
    locale: "ar_EG",
    title: "دليل المدرسة 2026 / 2027 | لايت هاوس كامبس",
    description:
      "دليل لايت هاوس كامبس للعام الدراسي 2026 / 2027 — ثلاثة مسارات أكاديمية، معايير هيئة التدريس، بيئة الدراسة، نظام الذكاء التعليمي، وإجراءات القبول، مع نسخة PDF للتنزيل.",
    ogTitle: "دليل المدرسة 2026 / 2027 | لايت هاوس كامبس",
    ogDescription:
      "ثلاثة مسارات أكاديمية، هيئة تدريس مؤهلة، بيئة تعليمية حديثة، ونظام تشغيل تعليمي واحد. التسجيل مفتوح الآن للعام 2026 / 2027.",
    headline: "دليل لايت هاوس كامبس للعام الدراسي 2026 / 2027",
    about: "القبول والمسارات الأكاديمية وبيئة الدراسة في لايت هاوس كامبس.",
    org: "لايت هاوس كامبس",
  },
} as const;

type GuideLang = keyof typeof SEO;

const parseLang = (v: unknown): GuideLang => (v === "ar" ? "ar" : "en");

export const Route = createFileRoute("/prospectus")({
  validateSearch: (search: Record<string, unknown>) => ({
    // Only the Arabic variant carries a search param, so the English URL stays clean.
    lang: search.lang === "ar" ? ("ar" as const) : undefined,
  }),
  head: ({ match }) => {
    const l = parseLang(match?.search?.lang);
    const s = SEO[l];
    return {
      meta: [
        { title: s.title },
        { name: "description", content: s.description },
        { property: "og:title", content: s.ogTitle },
        { property: "og:description", content: s.ogDescription },
        { property: "og:url", content: s.url },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: s.locale },
        { property: "og:locale:alternate", content: SEO[l === "ar" ? "en" : "ar"].locale },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: s.ogTitle },
        { name: "twitter:description", content: s.ogDescription },
      ],
      links: [
        { rel: "canonical", href: s.url },
        { rel: "alternate", hrefLang: "en", href: SEO.en.url },
        { rel: "alternate", hrefLang: "ar", href: SEO.ar.url },
        { rel: "alternate", hrefLang: "x-default", href: SEO.en.url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: s.headline,
            inLanguage: l,
            about: s.about,
            mainEntityOfPage: s.url,
            publisher: {
              "@type": "EducationalOrganization",
              name: s.org,
              url: "https://lighthousecampus.com",
            },
          }),
        },
      ],
    };
  },
  component: ProspectusPage,
});

const ENV_ICONS = [
  <BookOpen className="size-5" key="a" />,
  <Compass className="size-5" key="b" />,
  <Users className="size-5" key="c" />,
  <ClipboardList className="size-5" key="d" />,
  <ShieldCheck className="size-5" key="e" />,
  <Building2 className="size-5" key="f" />,
];

const ADMISSION_ICONS = [
  <FileText className="size-5" key="a" />,
  <ClipboardList className="size-5" key="b" />,
  <CalendarCheck className="size-5" key="c" />,
  <MapPin className="size-5" key="d" />,
];

/** Segmented AR / EN switch — updates the URL (?lang=) and the site-wide language. */
function GuideLangSwitch({
  onNavy = false,
  className,
}: {
  onNavy?: boolean;
  className?: string;
}) {
  const { setLang } = useLang();
  const navigate = Route.useNavigate();
  const lang = parseLang(Route.useSearch().lang);
  const c = PROSPECTUS_COPY[lang];
  const options: { value: GuideLang; label: string }[] = [
    { value: "en", label: c.actions.langEn },
    { value: "ar", label: c.actions.langAr },
  ];


  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.16em]",
          onNavy ? "text-navy-foreground/75" : "text-muted-foreground",
        )}
      >
        {c.actions.langLabel}
      </span>
      <div
        role="group"
        aria-label={c.actions.langLabel}
        className={cn(
          "inline-flex rounded-full border p-1",
          onNavy ? "border-gold/40 bg-navy-foreground/5" : "border-border bg-card",
        )}
      >
        {options.map((o) => {
          const active = lang === o.value;
          return (
            <button
              key={o.value}
              type="button"
              lang={o.value}
              aria-pressed={active}
              onClick={() => {
                setLang(o.value);
                navigate({
                  search: { lang: o.value === "ar" ? ("ar" as const) : undefined },
                  replace: true,
                });
              }}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                active
                  ? "bg-gold text-navy"
                  : onNavy
                    ? "text-navy-foreground/80 hover:text-gold"
                    : "text-sapphire hover:text-navy",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DownloadRow({ compact = false }: { compact?: boolean }) {
  const lang = parseLang(Route.useSearch().lang);
  const c = PROSPECTUS_COPY[lang];
  return (
    <div className={compact ? "flex flex-wrap gap-3" : "mt-8 flex flex-wrap gap-3"}>
      <ButtonLink
        to={PROSPECTUS_PDF[lang]}
        variant="gold"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={c.actions.downloadAria}
        data-event="Download"
        data-event-prop-asset={`Prospectus ${lang.toUpperCase()} 2026-2027`}
      >
        <Download className="mr-2 size-4" aria-hidden />
        {c.actions.download}
      </ButtonLink>
      <ButtonLink
        to={APPLY}
        variant="outline"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={c.actions.applyAria}
        data-event="CTA Click"
        data-event-prop-cta="Apply"
        data-event-prop-location="Prospectus"
      >
        {c.actions.apply}
      </ButtonLink>
    </div>
  );
}

function ProspectusPage() {
  const { lang: siteLang, setLang } = useLang();
  const lang = parseLang(Route.useSearch().lang);
  const dir = lang === "ar" ? "rtl" : "ltr";
  const c = PROSPECTUS_COPY[lang];

  // Keep the site-wide language in step with the URL (crawlable source of truth).
  useEffect(() => {
    if (siteLang !== lang) setLang(lang);
  }, [lang, siteLang, setLang]);


  return (
    <div lang={lang} dir={dir}>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        intro={c.hero.intro}
        sections={c.sections}
        breadcrumb={[
          { label: c.hero.breadcrumbHome, to: "/" },
          { label: c.hero.breadcrumbAdmissions, to: "/admissions" },
          { label: c.hero.breadcrumbCurrent },
        ]}
        watermark
      />

      <Section id="welcome">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div>
            <GuideLangSwitch className="mb-8" />
            <SectionHeading
              eyebrow={c.welcome.eyebrow}
              title={c.welcome.title}
              description={c.welcome.description}
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.welcome.body}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.welcome.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
            <DownloadRow />
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">{c.welcome.note}</p>
          </div>
          <PageTOC items={c.sections} />
        </div>
      </Section>

      <Section id="programmes" tone="sand">
        <SectionHeading eyebrow={c.programmes.eyebrow} title={c.programmes.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.programmes.items.map((p) => (
            <article key={p.title} className="rounded-xl border border-border bg-card p-7">
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">{p.title}</h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">{p.body}</p>
              <p className="mt-5 text-sm font-semibold text-foreground">
                {c.programmes.stagesLabel}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground" role="list">
                {p.stages.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="mt-4 flex items-center gap-2 text-sm text-sapphire">
                <Languages className="size-4" aria-hidden />
                {p.language}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[40rem] text-start text-sm">
            <caption className="sr-only">{c.programmes.tableCaption}</caption>
            <thead className="bg-navy text-navy-foreground">
              <tr>
                {c.programmes.th.map((h) => (
                  <th key={h} scope="col" className="px-5 py-4 text-start font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.programmes.items.map((p) => (
                <tr key={p.title} className="border-t border-border">
                  <th scope="row" className="px-5 py-4 text-start font-medium text-foreground">
                    {p.title}
                  </th>
                  <td className="px-5 py-4 text-muted-foreground">{p.language}</td>
                  <td className="px-5 py-4 text-muted-foreground">{p.stages.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FeatureCard title={c.programmes.extras[0].title} icon={<Compass className="size-5" />}>
            {c.programmes.extras[0].body}
          </FeatureCard>
          <FeatureCard title={c.programmes.extras[1].title} icon={<Languages className="size-5" />}>
            {c.programmes.extras[1].body}
          </FeatureCard>
        </div>
      </Section>

      <Section id="faculty">
        <SectionHeading
          eyebrow={c.faculty.eyebrow}
          title={c.faculty.title}
          description={c.faculty.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FeatureCard title={c.faculty.cards[0].title} icon={<GraduationCap className="size-5" />}>
            {c.faculty.cards[0].body}
          </FeatureCard>
          <FeatureCard title={c.faculty.cards[1].title} icon={<ClipboardList className="size-5" />}>
            {c.faculty.cards[1].body}
          </FeatureCard>
        </div>
      </Section>

      <Section id="environment" tone="muted">
        <SectionHeading
          eyebrow={c.environment.eyebrow}
          title={c.environment.title}
          description={c.environment.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.environment.cards.map((card, i) => (
            <FeatureCard key={card.title} title={card.title} icon={ENV_ICONS[i]}>
              {card.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section id="wellbeing">
        <SectionHeading
          eyebrow={c.wellbeing.eyebrow}
          title={c.wellbeing.title}
          description={c.wellbeing.description}
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div className="rounded-2xl border border-border bg-card p-7">
            <Eyebrow>{c.wellbeing.roleLabel}</Eyebrow>
            <ul className="mt-5 space-y-3" role="list">
              {c.wellbeing.role.map((r) => (
                <li key={r} className="flex gap-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                  <HeartPulse className="mt-0.5 size-4 shrink-0 text-sapphire" aria-hidden />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            {c.wellbeing.cards.map((card) => (
              <FeatureCard key={card.title} title={card.title} icon={<ShieldCheck className="size-5" />}>
                {card.body}
              </FeatureCard>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {c.wellbeing.note}
        </p>
      </Section>

      <Section id="activities" tone="sand">
        <SectionHeading
          eyebrow={c.activities.eyebrow}
          title={c.activities.title}
          description={c.activities.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.activities.groups.map((g, i) => (
            <article key={g.title} className="rounded-xl border border-border bg-card p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-gold">
                {ACTIVITY_ICONS[i]}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">{g.title}</h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">{g.body}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground" role="list">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-gold" aria-hidden>
                      •
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {c.activities.note}
        </p>
      </Section>

      <Section id="eeios">
        <SectionHeading
          eyebrow={c.eeios.eyebrow}
          title={c.eeios.title}
          description={c.eeios.description}
        />
        <div className="mt-10 rounded-2xl border border-gold/30 bg-navy p-8 text-navy-foreground">
          <Eyebrow onNavy>{c.eeios.connectsLabel}</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-3" role="list">
            {c.eeios.roles.map((r) => (
              <li
                key={r}
                className="rounded-full border border-gold/40 px-4 py-2 text-sm text-gold"
              >
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy-foreground/80">
            {c.eeios.platformNote}
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FeatureCard title={c.eeios.cards[0].title} icon={<Users className="size-5" />}>
            {c.eeios.cards[0].body}
          </FeatureCard>
          <FeatureCard title={c.eeios.cards[1].title} icon={<Cpu className="size-5" />}>
            {c.eeios.cards[1].body}
          </FeatureCard>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {c.eeios.disclaimer}
        </p>
      </Section>

      <Section id="philosophy" tone="sand">
        <SectionHeading eyebrow={c.philosophy.eyebrow} title={c.philosophy.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.philosophy.traits.map((t) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-medium text-foreground">{t}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.philosophy.cards.map((card) => (
            <FeatureCard key={card.title} title={card.title}>
              {card.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section id="why">
        <SectionHeading eyebrow={c.why.eyebrow} title={c.why.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.why.cards.map((card) => (
            <FeatureCard key={card.title} title={card.title}>
              {card.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section id="admissions" tone="muted">
        <SectionHeading
          eyebrow={c.admissions.eyebrow}
          title={c.admissions.title}
          description={c.admissions.description}
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
          {c.admissions.steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="font-display text-sm tracking-[0.2em] text-gold">{s.n}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {c.admissions.cards.map((card, i) => (
            <FeatureCard key={card.title} title={card.title} icon={ADMISSION_ICONS[i]}>
              {card.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-gold/30 bg-navy p-8 text-navy-foreground">
          <Eyebrow onNavy>{c.admissions.limitedEyebrow}</Eyebrow>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85">
            {c.admissions.limitedBody}
          </p>
          <GuideLangSwitch onNavy className="mt-6" />
          <div className="mt-6">
            <DownloadRow compact />
          </div>
        </div>
      </Section>

      <Section id="contact">
        <SectionHeading
          eyebrow={c.contact.eyebrow}
          title={c.contact.title}
          description={c.contact.description}
        />
        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="size-4 text-sapphire" aria-hidden /> {c.contact.addressLabel}
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground">{c.contact.address}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="size-4 text-sapphire" aria-hidden /> {c.contact.contactLabel}
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground">
              <a className="hover:text-sapphire" href="tel:+201107030737" dir="ltr">
                +20 110 703 0737
              </a>
              <br />
              <a
                className="inline-flex items-center gap-1 hover:text-sapphire"
                href="mailto:ceo@lighthousecampus.com"
                dir="ltr"
              >
                <Mail className="size-3.5" aria-hidden /> ceo@lighthousecampus.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Globe className="size-4 text-sapphire" aria-hidden /> {c.contact.websiteLabel}
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground" dir="ltr">
              www.lighthousecampus.com
            </dd>
          </div>
        </dl>
      </Section>

      <ShareBar title={c.share} path="/prospectus" />

      <CtaBand
        title={c.cta.title}
        body={c.cta.body}
        primary={{
          to: APPLY,
          label: c.cta.primary,
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        secondary={{ to: "/contact", label: c.cta.secondary }}
      />
    </div>
  );
}
