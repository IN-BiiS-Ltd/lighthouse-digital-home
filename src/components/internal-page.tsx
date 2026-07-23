import type { ReactNode } from "react";
import { Section, SectionHeading, FeatureCard, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { SmartLink } from "@/components/blocks";
import { ShareBar } from "@/components/share-bar";

export interface InternalBlock {
  eyebrow?: string;
  title: string;
  body?: string[];
  bullets?: string[];
  tone?: "default" | "muted" | "sand";
}

export interface RelatedLink {
  title: string;
  to: string;
  body: string;
}

export interface InternalPageConfig {
  breadcrumb: { label: string; to?: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  heroImage?: { src: string; alt: string; caption?: string };
  blocks: InternalBlock[];
  status?: { label: string; body: string };
  related?: RelatedLink[];
  cta: {
    title: string;
    body: string;
    primary: { to: string; label: string };
    secondary?: { to: string; label: string };
  };
}

/**
 * InternalPage — the shared editorial template used across Phase 3 content
 * pages. Preserves the Lighthouse visual system (compact PageHero,
 * alternating tone sections, calm typography, CTA band).
 */
export function InternalPage({ config }: { config: InternalPageConfig }) {
  const { breadcrumb, eyebrow, title, intro, heroImage, blocks, status, related, cta } = config;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      ...(b.to ? { item: `https://lighthousecampus.lovable.app${b.to}` } : {}),
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
      />


      {heroImage ? (
        <Section>
          <figure className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl bg-navy shadow-[0_40px_100px_-30px_rgba(11,29,58,0.45)] ring-1 ring-gold/25">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                width={1600}
                height={1008}
                sizes="(min-width: 1024px) 1024px, 100vw"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-cover"
              />
            </div>
            {heroImage.caption ? (
              <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                {heroImage.caption}
              </figcaption>
            ) : null}
          </figure>
        </Section>
      ) : null}

      {blocks.map((b, i) => (
        <Section key={`${b.title}-${i}`} tone={b.tone ?? (i % 2 === 1 ? "muted" : "default")}>
          <SectionHeading eyebrow={b.eyebrow} title={b.title} />
          {b.body && b.body.length > 0 ? (
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              {b.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ) : null}
          {b.bullets && b.bullets.length > 0 ? (
            <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              {b.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </Section>
      ))}

      {status ? (
        <Section tone="sand">
          <div className="max-w-3xl">
            <Eyebrow>Implementation Status</Eyebrow>
            <h2 className="mt-5 font-display text-2xl font-medium leading-snug md:text-3xl">
              {status.label}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{status.body}</p>
          </div>
        </Section>
      ) : null}

      {related && related.length > 0 ? (
        <Section tone="muted">
          <SectionHeading eyebrow="Related" title="Continue exploring" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <SmartLink
                key={r.to}
                to={r.to}
                className="block group"
                data-event="Related Link Click"
                data-event-prop-to={r.to}
                data-event-prop-title={r.title}
                data-event-prop-from-section={eyebrow}
              >
                <FeatureCard title={r.title}>{r.body}</FeatureCard>
              </SmartLink>
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
      />
      <ShareBar title={title} />
    </>
  );
}

/**
 * OverviewPage — editorial landing page used for Student Life, Campus,
 * Admissions, Parents, Community and News & Insights section homes.
 * Presents a hero + intro paragraphs + a grid of sub-page cards + CTA.
 */
export function OverviewPage({
  breadcrumb,
  eyebrow,
  title,
  intro,
  paragraphs,
  cards,
  cta,
}: {
  breadcrumb: { label: string; to?: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs?: string[];
  cards: { title: string; to: string; body: string; icon?: ReactNode }[];
  cta: {
    title: string;
    body: string;
    primary: { to: string; label: string };
    secondary?: { to: string; label: string };
  };
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      ...(b.to ? { item: `https://lighthousecampus.lovable.app${b.to}` } : {}),
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        sections={cards.map((c) => ({ label: c.title, to: c.to }))}
      />
      {paragraphs && paragraphs.length > 0 ? (
        <Section>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>
      ) : null}
      <Section tone="muted">
        <SectionHeading eyebrow="Explore" title="Sections in this area" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <SmartLink key={c.to} to={c.to} className="block group">
              <FeatureCard title={c.title} icon={c.icon}>{c.body}</FeatureCard>
            </SmartLink>
          ))}
        </div>
      </Section>
      <CtaBand
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
      />
      <ShareBar title={title} />
    </>
  );
}
