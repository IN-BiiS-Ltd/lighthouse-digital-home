import { assetUrl } from "@/lib/asset-url";
import { createFileRoute } from "@tanstack/react-router";
import {
  Lightbulb,
  Users,
  Shield,
  Heart,
  Globe,
} from "lucide-react";
import {
  Section,
  SectionHeading,
  Eyebrow,
  BrandLogo,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

import { CrystalField } from "@/components/crystal-field";

import lighthouseFlag from "@/assets/lighthouse-flag.png.asset.json";

export const Route = createFileRoute("/about_/why-lighthouse")({
  head: () => ({
    meta: [
      { title: "Why LIGHTHOUSE CAMPUS? | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Discover why families choose LIGHTHOUSE CAMPUS — inspired learning, exceptional educators, character and leadership, a safe nurturing environment, and a global perspective.",
      },
      { property: "og:title", content: "Why LIGHTHOUSE CAMPUS? | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "More than a school. A place where futures begin. Explore the five pillars that define the LIGHTHOUSE CAMPUS experience.",
      },
      { property: "og:url", content: "/about/why-lighthouse" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/why-lighthouse" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Why LIGHTHOUSE CAMPUS?",
          description:
            "The value proposition and educational experience behind LIGHTHOUSE CAMPUS.",
          isPartOf: {
            "@type": "EducationalOrganization",
            name: "Lighthouse Campus",
          },
        }),
      },
    ],
  }),
  component: WhyLighthouse,
});

const pillars = [
  {
    icon: Lightbulb,
    title: "Inspired Learning",
    body: "Learning that sparks curiosity, creativity, critical thinking, and a lifelong love of discovery.",
  },
  {
    icon: Users,
    title: "Exceptional Educators",
    body: "Passionate teachers who inspire, mentor, and help every learner reach their full potential.",
  },
  {
    icon: Shield,
    title: "Character & Leadership",
    body: "Building integrity, responsibility, resilience, empathy, and the confidence to lead with purpose.",
  },
  {
    icon: Heart,
    title: "Safe & Nurturing Environment",
    body: "A welcoming community where every child feels respected, valued, supported, and encouraged to grow.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    body: "Preparing learners with the knowledge, skills, and mindset to succeed in an interconnected world while remaining proud of their identity and values.",
  },
];

function WhyLighthouse() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About Lighthouse Campus", to: "/about" },
          { label: "Why LIGHTHOUSE CAMPUS?" },
        ]}
        eyebrow="Our Promise"
        title={
          <>
            Why LIGHTHOUSE CAMPUS
            <span className="block mt-2 text-navy-foreground/80 font-display text-2xl md:text-3xl">
              More Than a School. A Place Where Futures Begin.
            </span>
          </>
        }
        intro="Choosing a school is one of the most important decisions a family will ever make. At LIGHTHOUSE CAMPUS, we believe education should do more than prepare children for examinations — it should prepare them to thrive in life."
        sections={[
          { label: "Our Promise", to: "/about/why-lighthouse#promise" },
          { label: "Five Pillars", to: "/about/why-lighthouse#pillars" },
          { label: "Our Identity", to: "/about/why-lighthouse#identity" },
          { label: "Institutional Flag", to: "/about/why-lighthouse#flag" },
        ]}
      />

      {/* Section 1 — Our Promise */}
      <Section id="promise">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>More Than a School</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
            A Place Where Futures Begin
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Choosing a school is one of the most important decisions a family will ever make.
            </p>
            <p>
              At LIGHTHOUSE CAMPUS, we believe education should do more than prepare children for examinations. It should prepare them to thrive in life — with confidence, character, curiosity, and the ability to lead in a rapidly changing world.
            </p>
            <p>
              Every aspect of our campus is intentionally designed to help learners grow academically, socially, emotionally, and personally.
            </p>
            <p className="font-medium text-foreground">
              Because we believe every child deserves more than an education.
            </p>
            <p className="font-medium text-foreground">
              Every child deserves the opportunity to discover their potential and become the best version of themselves.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 2 — Five Pillars */}
      <Section tone="sand" id="pillars" className="relative isolate overflow-hidden">
        <CrystalField />
        <div className="relative">
          <SectionHeading
            align="center"
            eyebrow="The LIGHTHOUSE CAMPUS Experience"
            title="Five pillars that define who we are"
            description="Our educational experience is built on a clear commitment to excellence in every dimension of learning and growth."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.title}>
                  <article
                    className="cine-card group h-full rounded-xl border border-border bg-card/90 p-8 backdrop-blur-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    tabIndex={0}
                    aria-label={`${pillar.title}. ${pillar.body}`}
                  >
                    <div className="inline-flex size-14 items-center justify-center rounded-xl bg-navy text-gold shadow-[0_10px_28px_-16px_rgba(11,29,58,0.5)] transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-110">
                      <Icon className="size-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-brand-blue group-focus-visible:text-brand-blue">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Section 3 — Our Identity */}
      <Section tone="muted" id="identity">
        <SectionHeading
          align="center"
          eyebrow="Understanding Our Identity"
          title="A name that stands for something"
          description="LIGHTHOUSE is more than a name. It is a symbol of guidance, hope, vision, and the quiet confidence that helps every learner find their own way."
        />
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-[0_20px_60px_-30px_rgba(11,29,58,0.4)]">
            <BrandLogo
              className="h-auto w-56"
              alt="The official LIGHTHOUSE CAMPUS logo"
            />
            <p className="mt-6 eyebrow text-brand-blue">LIGHTHOUSE CAMPUS</p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Throughout history, the lighthouse has stood for guidance, hope, vision, leadership, trust, safety, and direction. It watches over the horizon so that others can travel with confidence.
            </p>
            <p>
              Yet a lighthouse never steers the ship. It does not control the journey — it simply shows what is possible and lets each traveller find their own way.
            </p>
            <p>
              This is exactly how we understand education. LIGHTHOUSE CAMPUS does not aim to give students every answer. We help them develop the confidence and understanding to discover answers for themselves.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4 — The Lighthouse Campus Flag */}
      <Section id="flag">
        <SectionHeading
          align="center"
          eyebrow="Institutional Presence"
          title="The LIGHTHOUSE CAMPUS flag"
          description="The flag gathers our name, our identity, and our promise into one enduring emblem — the visible sign of a community with a shared philosophy of learning."
        />
        <figure className="mt-14">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border shadow-[0_40px_120px_-40px_rgba(11,29,58,0.55)]">
            <img
              src={assetUrl(lighthouseFlag)}
              alt="The LIGHTHOUSE CAMPUS flag flying above the campus — carrying the institutional emblem and the promise: Guiding minds. Inspiring futures. Connecting possibilities."
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Raised above the campus, the flag is a quiet daily reminder of the institution we are becoming — and of the promise we make to every learner who walks through our gates.
          </figcaption>
        </figure>
      </Section>

      <Section tone="navy">
        <figure className="relative mx-auto my-12 max-w-3xl border-l-2 border-gold pl-8 md:my-20 md:pl-12">
          <span
            aria-hidden
            className="absolute -left-2 -top-8 select-none font-display text-[6rem] leading-none text-gold/30 md:text-[8rem]"
          >
            &ldquo;
          </span>
          <blockquote className="font-display text-2xl italic leading-snug text-navy-foreground md:text-4xl">
            Guiding Minds.
            <br />
            Inspiring Futures.
            <br />
            Connecting Possibilities.
          </blockquote>
        </figure>
        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-center text-lg leading-relaxed text-navy-foreground/80">
          <p>
            At LIGHTHOUSE CAMPUS, learning is more than academic achievement. It is a lifelong journey of discovery — a journey of curiosity, character, responsibility, leadership, and confidence.
          </p>
          <p>
            Every learner is encouraged to discover purpose, contribute meaningfully to society, and build a future illuminated by knowledge and guided by values.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Discover the LIGHTHOUSE CAMPUS experience"
        body="The clearest way to understand LIGHTHOUSE CAMPUS is to experience it. We would be glad to welcome your family."
        primary={{ to: "/admissions/schedule-a-visit", label: "Schedule a Visit" }}
        secondary={{ to: "/about", label: "About Lighthouse Campus" }}
      />
    </>
  );
}
