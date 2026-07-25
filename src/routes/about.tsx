import { assetUrl } from "@/lib/asset-url";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading, FeatureCard } from "@/components/blocks";
import lighthouseFlag from "@/assets/lighthouse-flag.png.asset.json";
import readersFlag from "@/assets/readers-international-flag.png.asset.json";
import campusExteriorPhoto from "@/assets/photo-campus-exterior.jpg?w=1600&format=jpg";
import campusExteriorAvif from "@/assets/photo-campus-exterior.jpg?w=640;960;1280;1600&format=avif&as=srcset";
import campusExteriorWebp from "@/assets/photo-campus-exterior.jpg?w=640;960;1280;1600&format=webp&as=srcset";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { PullQuote, StatBand } from "@/components/editorial";
import officialLockupAsset from "@/assets/lighthouse-official-lockup-v2.png.asset.json";
import { ShareBar } from "@/components/share-bar";
const officialLockupSrc = officialLockupAsset.url;
import { CheckCircle } from "lucide-react";
import iconOurStory from "@/assets/about-our-story.png.asset.json";
import iconWhyLighthouse from "@/assets/about-why-lighthouse.png.asset.json";
import iconVision from "@/assets/about-vision.png.asset.json";
import iconCoreValues from "@/assets/about-core-values.png.asset.json";
import iconPhilosophy from "@/assets/about-philosophy.png.asset.json";
import iconLeadership from "@/assets/about-leadership.png.asset.json";
import iconCampusCulture from "@/assets/about-campus-culture.png.asset.json";
import campusEmblem from "@/assets/lighthouse-campus-emblem.png.asset.json";



export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lighthouse Campus | Independent K–12 Institution in Mohandessin, Giza" },
      {
        name: "description",
        content:
          "Discover Lighthouse Campus — an independent K–12 educational institution in Mohandessin, Giza. Explore our story, vision, mission, values, philosophy, leadership and campus culture.",
      },
      {
        name: "keywords",
        content:
          "Lighthouse Campus, about Lighthouse Campus, independent school Mohandessin, Giza international school, K-12 Cairo, educational philosophy, school vision and mission",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:title", content: "About Lighthouse Campus — Where Potential Becomes Purpose" },
      {
        property: "og:description",
        content:
          "An independent institution with its own philosophy, identity and long-term vision. Meet Lighthouse Campus in Mohandessin, Giza.",
      },
      { property: "og:url", content: "https://lighthousecampus.com/about" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Lighthouse Campus" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Lighthouse Campus" },
      {
        name: "twitter:description",
        content:
          "An independent K–12 institution in Mohandessin, Giza — guiding minds, inspiring futures, connecting possibilities.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Lighthouse Campus",
          url: "https://lighthousecampus.com/about",
          description:
            "An independent K–12 educational institution in Mohandessin, Giza — its story, philosophy, values and leadership.",
          mainEntity: {
            "@type": "EducationalOrganization",
            name: "Lighthouse Campus",
            url: "https://lighthousecampus.com",
            slogan: "Guiding Minds. Inspiring Futures. Connecting Possibilities.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mohandessin",
              addressRegion: "Giza",
              addressCountry: "EG",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lighthousecampus.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://lighthousecampus.com/about" },
            ],
          },
        }),
      },
    ],
  }),
  component: About,
});

function PillarIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="size-16 object-contain"
    />
  );
}

function CommunityIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="size-16" aria-hidden="true">
      <circle cx="32" cy="18" r="7" stroke="currentColor" strokeWidth="2" className="text-gold" />
      <circle cx="18" cy="36" r="6" stroke="currentColor" strokeWidth="2" className="text-gold" />
      <circle cx="46" cy="36" r="6" stroke="currentColor" strokeWidth="2" className="text-gold" />
      <path d="M32 25v6M18 30l-5 5M46 30l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-navy" />
      <path d="M26 42c-4 2-6 6-6 10M38 42c4 2 6 6 6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-navy" />
      <path d="M32 31c-8 0-14 6-14 14M32 31c8 0 14 6 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-navy/60" />
      <circle cx="32" cy="31" r="3" fill="currentColor" className="text-gold" />
    </svg>
  );
}

function PathwayIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="size-16" aria-hidden="true">
      <path d="M8 52c8-8 16-16 24-16s16 8 24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="text-navy/40" />
      <path d="M20 52l8-16 8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy" />
      <circle cx="36" cy="36" r="5" stroke="currentColor" strokeWidth="2" className="text-navy" />
      <path d="M42 30l8-8M48 22h6M54 22v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold" />
      <path d="M12 56l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold" />
      <circle cx="54" cy="16" r="5" fill="currentColor" className="text-gold" />
    </svg>
  );
}

const understanding = [
  { icon: <PillarIcon src={iconOurStory.url} alt="" />, title: "Our Story", to: "/about/our-story", body: "The origins, founding purpose and long-term direction of the institution." },
  { icon: <PillarIcon src={iconWhyLighthouse.url} alt="" />, title: "Why Lighthouse?", to: "/about/why-lighthouse", body: "The meaning behind the name, the identity and the educational symbolism." },
  { icon: <PillarIcon src={iconVision.url} alt="" />, title: "Vision and Mission", to: "/about/vision", body: "The future we seek to build and the work that guides us every day." },
  { icon: <PillarIcon src={iconCoreValues.url} alt="" />, title: "Core Values", to: "/about/core-values", body: "The principles that shape learning, relationships and institutional conduct." },
  { icon: <PillarIcon src={iconPhilosophy.url} alt="" />, title: "Educational Philosophy", to: "/about/educational-philosophy", body: "How we understand learning, teaching and student development." },
  { icon: <PillarIcon src={iconLeadership.url} alt="" />, title: "Leadership and Governance", to: "/about/leadership", body: "How responsibility, educational purpose and institutional stewardship guide decisions." },
  { icon: <PillarIcon src={iconCampusCulture.url} alt="" />, title: "Campus Culture", to: "/about/campus-culture", body: "The relationships, expectations and shared experiences that shape daily life." },
];

function About() {
  return (
    <>
      <PageHero
        watermark
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="About Lighthouse Campus"
        title="Where Potential Becomes Purpose"
        intro={
          <>
            <p>Every family dreams of a future where their children are confident, compassionate, and prepared to succeed in an ever-changing world.</p>
            <p className="mt-4 font-medium text-navy-foreground">LIGHTHOUSE CAMPUS exists to help make that future possible.</p>
            <p className="mt-4">Through exceptional teaching, meaningful relationships, and an inspiring learning environment, we empower every learner to discover their strengths, develop their character, and pursue excellence with confidence.</p>
            <p className="mt-4">We are not simply preparing students for examinations.</p>
            <p className="mt-4 font-medium text-navy-foreground">We are preparing them for life, leadership, and the opportunities of tomorrow.</p>
          </>
        }
        sections={[
          { label: "Institutional Footprint", to: "#footprint" },
          { label: "Understanding Lighthouse", to: "#understanding" },
          { label: "Our Location", to: "#location" },
          { label: "Institutional Identity", to: "#identity" },
          { label: "Strategic Partnership", to: "#partnership" },
          { label: "Discover Our Story", to: "#invitation" },
        ]}
      />

      {/* In-page table of contents — sticky quick-navigation for keyboard and screen-reader users */}
      <nav
        aria-label="On this page"
        className="sticky top-[64px] z-30 border-y border-gold/20 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            On this page
          </span>
          <ol className="flex items-center gap-1 text-sm">
            {[
              { label: "Footprint", to: "#footprint" },
              { label: "Understanding", to: "#understanding" },
              { label: "Location", to: "#location" },
              { label: "Identity", to: "#identity" },
              { label: "Partnership", to: "#partnership" },
              { label: "Invitation", to: "#invitation" },
            ].map((s) => (
              <li key={s.to}>
                <a
                  href={s.to}
                  className="inline-flex shrink-0 rounded-full px-3 py-1.5 text-foreground/80 transition-colors hover:bg-gold/10 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <PullQuote
        quote={<>Guiding minds. Inspiring futures. Connecting possibilities.</>}
        attribution="The Lighthouse Promise"
      />

      <div id="footprint" className="scroll-mt-24">
        <StatBand
          eyebrow="The Institutional Footprint"
          tone="navy"
          stats={[
            { value: "Ages 3–18", label: "Learning Journey", caption: "From Early Years foundations through Upper Secondary readiness." },
            { value: "10", label: "Educational Pillars", caption: "The interlocking commitments that shape every classroom decision." },
            { value: "1", label: "Founding Campus", caption: "Mohandessin, Giza — the first campus of a growing institution." },
            { value: "∞", label: "Possibilities", caption: "A learning community designed to open — not to narrow — futures." },
          ]}
        />
      </div>

      <Section id="understanding" tone="muted">
        <SectionHeading eyebrow="Understanding Lighthouse Campus" title="Explore the ideas, people and principles behind the institution" />
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {understanding.map((u) => (
            <Link
              key={u.to}
              to={u.to}
              aria-label={`${u.title} — learn more`}
              className="group block rounded-2xl outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FeatureCard title={u.title} icon={u.icon}>{u.body}</FeatureCard>
            </Link>
          ))}
          <article
            aria-labelledby="shaping-tomorrows-leaders"
            className="relative overflow-hidden rounded-2xl bg-navy p-7 text-navy-foreground shadow-[0_30px_80px_-30px_rgba(11,29,58,0.55)] ring-1 ring-gold/40 sm:col-span-2 sm:p-8 lg:col-span-2"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
            />
            <div className="relative">
              <h3 id="shaping-tomorrows-leaders" className="eyebrow text-gold">Shaping Tomorrow's Leaders</h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-foreground/90 md:text-lg">
                <p>
                  At Lighthouse Campus, education extends far beyond the classroom. It is a carefully designed journey that inspires curiosity, builds character, nurtures leadership, and empowers every learner to discover their purpose and unlock their full potential.
                </p>
                <p>
                  Our educational philosophy brings together exceptional teaching, meaningful relationships, and a future-focused learning environment to cultivate confident, compassionate, and responsible global citizens. Every experience is intentionally designed to strengthen knowledge, integrity, resilience, and a lifelong passion for learning — preparing learners not only for academic success, but for meaningful lives of leadership and service in an ever-changing world.
                </p>
              </div>
              <p className="mt-6 font-display text-xl text-gold md:text-2xl">
                Guided by Purpose. Inspired by Excellence.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/80 md:text-base">
                Every step is guided by excellence. Every learner is valued. Every future begins with purpose.
              </p>
            </div>
          </article>

          {/* Institutional emblem — fills the grid cell below Campus Culture */}
          <figure className="relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-[0_30px_80px_-30px_rgba(11,29,58,0.55)] ring-1 ring-gold/40">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative flex flex-1 flex-col items-center justify-center text-center">
              <img
                src={campusEmblem.url}
                alt="Lighthouse Campus — official institutional emblem: lighthouse, book and star beneath the LIGHTHOUSE CAMPUS wordmark and promise."
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="block h-auto w-full max-w-[220px] object-contain drop-shadow-[0_8px_30px_rgba(212,175,55,0.25)]"
              />
              <figcaption className="mt-4">
                <span className="eyebrow text-gold">Lighthouse Campus</span>
                <p className="mt-1 text-sm text-navy-foreground/80">
                  Guiding Minds. Inspiring Futures. Connecting Possibilities.
                </p>
              </figcaption>
            </div>
          </figure>

          {/* Premium content cards — fill the remaining empty space beside the emblem */}
          <article className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-[0_20px_60px_-20px_rgba(11,29,58,0.2)] ring-1 ring-gold/30 transition-shadow hover:shadow-[0_30px_80px_-25px_rgba(11,29,58,0.25)]">
            <div className="mb-5 inline-flex rounded-2xl bg-navy/5 p-3 ring-1 ring-gold/20">
              <CommunityIcon />
            </div>
            <h3 className="font-display text-xl text-navy">A Community Built on Trust</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              At Lighthouse Campus, every learner is known, supported, and encouraged to grow. We build strong relationships between students, families, and educators to create a safe, respectful, and inspiring community where every child feels a true sense of belonging.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-[0_20px_60px_-20px_rgba(11,29,58,0.2)] ring-1 ring-gold/30 transition-shadow hover:shadow-[0_30px_80px_-25px_rgba(11,29,58,0.25)]">
            <div className="mb-5 inline-flex rounded-2xl bg-navy/5 p-3 ring-1 ring-gold/20">
              <PathwayIcon />
            </div>
            <h3 className="font-display text-xl text-navy">Preparing Learners for Life</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Our purpose extends beyond academic achievement. We develop confident thinkers, responsible citizens, and compassionate leaders equipped with the knowledge, character, and adaptability to contribute meaningfully in a changing world.
            </p>
          </article>
        </div>
      </Section>

      <Section id="location" tone="sand">
        <SectionHeading eyebrow="Mohandessin, Giza" title="A new campus in the heart of Greater Cairo" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Lighthouse Campus is located in Mohandessin, Giza, Greater Cairo — the founding campus of an institution designed to grow thoughtfully across the region.</p>
          <p>Here, the strengths of a modern educational institution meet a forward-looking vision for learning, leadership and global readiness.</p>
          <p>Every learner is known, challenged and supported — academically, personally and as a future citizen of the world.</p>
        </div>

        <figure className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-2xl bg-navy shadow-[0_50px_120px_-30px_rgba(11,29,58,0.55)] ring-1 ring-gold/30">
            <picture>
              <source type="image/avif" srcSet={campusExteriorAvif} sizes="(min-width: 1024px) 1024px, 100vw" />
              <source type="image/webp" srcSet={campusExteriorWebp} sizes="(min-width: 1024px) 1024px, 100vw" />
              <img
                src={campusExteriorPhoto}
                alt="The Lighthouse Campus building in Mohandessin, Giza — a modern limestone institutional facade framed by mature palm trees under a deep blue sky"
                width={1600}
                height={1008}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">
            The Lighthouse Campus · Mohandessin, Giza — Greater Cairo
          </figcaption>
        </figure>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Institutional Identity"
          title="Lighthouse Campus"
          description="Guiding Minds. Inspiring Futures. Connecting Possibilities."
        />

        {/* Official lockup — full institutional signature */}
        <figure className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_40px_100px_-30px_rgba(11,29,58,0.55)] ring-2 ring-gold md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/10"
            />
            <img
              src={officialLockupSrc}
              alt="Lighthouse Campus — Guiding Minds. Inspiring Futures. Connecting Possibilities."
              width={1200}
              height={1200}
              className="mx-auto block h-auto w-full max-w-xl object-contain"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
          <figcaption className="mt-5 text-center">
            <span className="eyebrow text-brand-blue">Official Institutional Lockup</span>
            <p className="mt-2 text-sm text-muted-foreground">
              Lighthouse Campus · Mohandessin, Giza
            </p>
          </figcaption>
        </figure>

        <div className="mt-16 mx-auto max-w-2xl">
          <figure className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_30px_80px_-25px_rgba(11,29,58,0.55)] ring-2 ring-gold">
              <img
                src={assetUrl(lighthouseFlag)}
                alt="Lighthouse Campus — institutional flag carrying the emblem and promise: Guiding minds. Inspiring futures. Connecting possibilities."
                width={1536}
                height={1024}
                className="block h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="eyebrow text-brand-blue">Lighthouse Campus</span>
              <p className="mt-1 text-sm text-muted-foreground">Mohandessin, Giza</p>
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Strategic Educational Partnership"
          title="Building on Shared Strengths"
        />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Great educational institutions are built not only on vision, but also on meaningful partnerships that amplify excellence.
          </p>
          <p>
            The strategic partnership between LIGHTHOUSE CAMPUS and Readers International School reflects a shared commitment to educational quality, innovation, and continuous growth. By bringing together complementary strengths, diverse experience, and a common purpose, the partnership creates an environment where learners benefit from the best of both institutions.
          </p>
          <p>
            Together, we are shaping an educational experience that inspires curiosity, develops character, promotes academic excellence, and prepares every learner for the opportunities of tomorrow.
          </p>
        </div>

        {/* Partnership flags — both institutions side by side */}
        <div className="mt-14 grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <figure className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_30px_80px_-25px_rgba(11,29,58,0.55)] ring-2 ring-gold">
              <img
                src={assetUrl(lighthouseFlag)}
                alt="Lighthouse Campus institutional flag — blue field carrying the gold and silver emblem and promise: Guiding minds. Inspiring futures. Connecting possibilities."
                width={1536}
                height={1024}
                className="block h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="eyebrow text-brand-blue">Lighthouse Campus</span>
              <p className="mt-1 text-sm text-muted-foreground">Mohandessin, Giza</p>
            </figcaption>
          </figure>

          <div className="hidden text-gold sm:flex" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          <figure className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_30px_80px_-25px_rgba(11,29,58,0.55)] ring-2 ring-gold">
              <img
                src={assetUrl(readersFlag)}
                alt="Readers International School flag — white field with the school emblem and name, representing the founding strategic educational partner."
                width={1536}
                height={1024}
                className="block h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="eyebrow text-brand-blue">Readers International School</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_-20px_rgba(11,29,58,0.25)] ring-1 ring-gold/40">
            <h3 className="font-display text-xl text-navy">Readers International School</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              The partnership between LIGHTHOUSE CAMPUS and Readers International School reflects a shared belief that lasting educational excellence is achieved when institutions combine their experience, expertise, and vision to create greater value for learners and their families.
            </p>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-navy-foreground shadow-[0_20px_60px_-20px_rgba(11,29,58,0.35)] ring-1 ring-gold/40">
            <h3 className="font-display text-xl text-gold">LIGHTHOUSE CAMPUS</h3>
            <p className="mt-3 text-base leading-relaxed text-navy-foreground/90">
              Shapes the educational experience through visionary leadership, academic excellence, institutional innovation, and a commitment to continuous growth. Every aspect of the campus is intentionally designed to inspire curiosity, develop character, and prepare learners for a lifetime of success.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Rather than duplicating capabilities, the partnership enables each institution to build upon the strengths of the other while maintaining a shared commitment to quality, integrity, and long-term educational impact.
          </p>
          <p>
            The result is an institution designed not only to deliver excellent education today, but to continuously evolve to meet the needs of tomorrow's learners.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl text-navy">Our Shared Commitment</h3>
          <p className="mt-4 text-lg text-muted-foreground">Together, the partnership is committed to:</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Delivering high-quality, student-centered education.",
              "Building a culture of excellence, integrity, and innovation.",
              "Creating a safe, inclusive, and inspiring learning environment.",
              "Developing future-ready learners equipped with knowledge, character, and leadership.",
              "Pursuing continuous institutional improvement through collaboration and shared expertise.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gold/20">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 rounded-2xl bg-white p-8 md:p-10 shadow-[0_30px_80px_-30px_rgba(11,29,58,0.25)] ring-1 ring-gold/40">
          <h3 className="font-display text-2xl text-navy">A Partnership for Long-Term Impact</h3>
          <div className="mt-5 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              This partnership represents more than operational collaboration.
            </p>
            <p>
              It reflects a shared belief that sustainable educational excellence is achieved when institutions work together, respect each other's strengths, and remain committed to continuous improvement for the benefit of every learner.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-snug text-navy-foreground md:text-[1.9rem]">
            Discover the story behind Lighthouse Campus, explore our educational philosophy, meet the people who lead our community, and learn why families choose Lighthouse as the place where futures begin.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Discover the Lighthouse Story"
        body="Explore the ideas, people and principles that shape the institution."
        primary={{ to: "/about/our-story", label: "Read Our Story" }}
        secondary={{ to: "/about/why-lighthouse", label: "Why Lighthouse?" }}
      />
      <ShareBar title="About Lighthouse Campus | An Independent Institution for Modern Learning" />
    </>
  );
}
