import { assetUrl } from "@/lib/asset-url";
import { createFileRoute } from "@tanstack/react-router";
import {
  Lightbulb,
  Users,
  Shield,
  Heart,
  Globe,
  Compass,
  Sparkles,
  BookOpen,
  Network,
  CircleDot,
  Palette,
  Sun,
  Shapes,
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
      { title: "Why Lighthouse? | Lighthouse Campus" },
      {
        name: "description",
        content:
          "More than a campus, Lighthouse Campus is a new educational experience — designed to prepare students for academic success, leadership, innovation and responsible global citizenship.",
      },
      { property: "og:title", content: "Why Lighthouse? | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "The meaning behind LIGHTHOUSE, the story of our logo, and the promise that shapes daily life on campus.",
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
          name: "Why Lighthouse?",
          description:
            "The identity, philosophy and promise of Lighthouse Campus.",
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

const lighthouseValues = [
  "Guidance",
  "Hope",
  "Vision",
  "Leadership",
  "Trust",
  "Safety",
  "Direction",
];

const acronym = [
  { letter: "L", word: "Leadership", body: "Developing confident, ethical and responsible leaders." },
  { letter: "I", word: "Inquiry", body: "Encouraging curiosity, exploration and lifelong learning." },
  { letter: "G", word: "Growth", body: "Supporting continuous intellectual, emotional and personal development." },
  { letter: "H", word: "Humanity", body: "Building compassion, kindness and respect for others." },
  { letter: "T", word: "Transformation", body: "Helping every learner become the best version of themselves." },
  { letter: "H", word: "Harmony", body: "Creating balance between academic excellence, wellbeing and character." },
  { letter: "O", word: "Opportunity", body: "Helping every learner discover and develop individual strengths." },
  { letter: "U", word: "Understanding", body: "Promoting reflection, wisdom and global awareness." },
  { letter: "S", word: "Stewardship", body: "Preparing learners to contribute responsibly to their communities and the wider world." },
  { letter: "E", word: "Excellence", body: "Pursuing quality, achievement and continuous improvement in everything we do." },
];

const logoElements = [
  {
    icon: Compass,
    title: "The Lighthouse",
    body: "A symbol of guidance and purposeful leadership. The lighthouse represents the role of education in illuminating the path ahead. Rather than determining a learner's destination, it provides direction, confidence, and the clarity needed to navigate an ever-changing world.",
    represents: ["Guidance", "Leadership", "Vision", "Direction"],
  },
  {
    icon: Sparkles,
    title: "The Light",
    body: "A symbol of knowledge, intelligence and possibility. The light reflects the transformative power of education. It illuminates understanding, nurtures intelligence, inspires curiosity, and empowers learners to explore new ideas with confidence and purpose.",
    represents: ["Knowledge", "Intelligence", "Discovery", "Hope", "Inspiration"],
  },
  {
    icon: BookOpen,
    title: "The Open Book",
    body: "A symbol of learning without limits. The open book celebrates curiosity and the lifelong pursuit of knowledge. It reminds every learner that education is an ongoing journey of exploration, reflection and intellectual growth.",
    represents: ["Learning", "Curiosity", "Education", "Wisdom"],
  },
  {
    icon: Network,
    title: "The Connected Network",
    body: "A symbol of innovation, intelligence and connected learning. The interconnected network reflects the relationships that enrich education — connecting learners, educators, ideas, technology and the wider world. It represents an educational ecosystem where collaboration, innovation and collective intelligence prepare learners for the opportunities of tomorrow.",
    represents: ["Innovation", "Intelligence", "Technology", "Collaboration", "Future Learning", "Global Connection"],
  },
  {
    icon: CircleDot,
    title: "The Circle",
    body: "A symbol of belonging and lifelong community. The circle represents unity, continuity and the enduring strength of a learning community. It reflects the belief that every learner belongs, every voice matters and every journey contributes to the shared life of the campus.",
    represents: ["Belonging", "Continuity", "Unity", "Lifelong Learning", "Institutional Community"],
  },
];

const palette = [
  { name: "Executive Blue", swatch: "#0B1D3A", note: "A symbol of trust, wisdom, confidence, stability and thoughtful leadership.", ink: "text-white" },
  { name: "Lighthouse Gold", swatch: "#C9A24B", note: "A symbol of excellence, aspiration, achievement and the transformative power of education.", ink: "text-navy" },
  { name: "Silver", swatch: "#C7CDD3", note: "A symbol of clarity, precision, balance and modern thinking.", ink: "text-navy" },
  { name: "White", swatch: "#FFFFFF", note: "A symbol of openness, integrity, transparency and new beginnings.", ink: "text-navy" },
];

const detailAxes = [
  { icon: Palette, title: "Colour", body: "A restrained institutional palette — Executive Blue, Lighthouse Gold, Silver and White — chosen to signal trust, aspiration, clarity and openness." },
  { icon: Sun, title: "Light", body: "Light is a recurring motif across every element of our identity — a quiet reminder that education illuminates rather than directs." },
  { icon: Shapes, title: "Form", body: "Every curve, proportion and line is composed with intent — legible, enduring and unmistakably Lighthouse." },
];

const pillars = [
  { icon: Lightbulb, title: "Inspired Learning", body: "Learning that sparks curiosity, creativity, critical thinking and a lifelong love of discovery." },
  { icon: Users, title: "Exceptional Educators", body: "Passionate teachers who inspire, mentor and help every learner reach their full potential." },
  { icon: Shield, title: "Character & Leadership", body: "Building integrity, responsibility, resilience, empathy and the confidence to lead with purpose." },
  { icon: Heart, title: "Safe & Nurturing Environment", body: "A welcoming community where every child feels respected, valued, supported and encouraged to grow." },
  { icon: Globe, title: "Global Perspective", body: "Preparing learners with the knowledge, skills and mindset to succeed in an interconnected world while remaining proud of their identity and values." },
];

function WhyLighthouse() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About Lighthouse Campus", to: "/about" },
          { label: "Why Lighthouse?" },
        ]}
        eyebrow="Our Identity"
        title={
          <>
            Why Lighthouse?
            <span className="block mt-2 text-navy-foreground/80 font-display text-2xl md:text-3xl">
              More than a campus — a new educational experience.
            </span>
          </>
        }
        intro="Lighthouse Campus is designed to prepare students for academic success, leadership, innovation and responsible global citizenship."
        sections={[
          { label: "A New Educational Experience", to: "/about/why-lighthouse#experience" },
          { label: "Why a Lighthouse?", to: "/about/why-lighthouse#symbol" },
          { label: "The Meaning of LIGHTHOUSE", to: "/about/why-lighthouse#acronym" },
          { label: "Understanding Our Logo", to: "/about/why-lighthouse#logo" },
          { label: "Our Promise", to: "/about/why-lighthouse#promise" },
        ]}
      />

      {/* Section 1 — A new educational experience */}
      <Section id="experience">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>More Than a Campus</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
            A new educational experience
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Lighthouse Campus is not simply another school campus. It is a purposefully designed learning community that prepares students not only for academic success but also for leadership, innovation and responsible global citizenship.
            </p>
            <p>
              Every aspect of the campus — from learning spaces to educational programmes — has been created to inspire curiosity, confidence, creativity and excellence.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 2 — Why a lighthouse */}
      <Section tone="muted" id="symbol">
        <SectionHeading
          align="center"
          eyebrow="Why a Lighthouse?"
          title="A light that never controls the journey — it illuminates the way."
        />
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {lighthouseValues.map((v) => (
            <li
              key={v}
              className="rounded-full border border-gold/40 bg-card px-5 py-2 text-sm font-medium text-navy shadow-sm"
            >
              {v}
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Throughout history, the lighthouse has stood for guidance, hope, vision, leadership, trust, safety and direction. It watches over the horizon so that others can travel with confidence.
          </p>
          <p>
            Yet a lighthouse never steers the ship. It does not control the journey — it simply shows what is possible and lets each traveller find their own way.
          </p>
          <p>
            This is exactly how we understand education. Lighthouse Campus does not aim to give students every answer. We help them develop the confidence and understanding to discover answers for themselves.
          </p>
        </div>
      </Section>

      {/* Section 3 — The Meaning behind LIGHTHOUSE */}
      <Section id="acronym">
        <SectionHeading
          align="center"
          eyebrow="The Meaning Behind LIGHTHOUSE"
          title="Ten principles, held within a single word"
          description="Every letter of LIGHTHOUSE names a principle that shapes daily life on campus — a quiet promise about the kind of learners, and people, we help form."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {acronym.map((a, i) => (
            <li
              key={`${a.letter}-${i}`}
              className="cine-card group rounded-xl border border-border bg-card p-6 text-center outline-none focus-visible:ring-2 focus-visible:ring-gold"
              tabIndex={0}
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-navy font-display text-3xl font-semibold text-gold shadow-[0_10px_28px_-16px_rgba(11,29,58,0.5)] transition-transform duration-500 group-hover:scale-110">
                {a.letter}
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                {a.word}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 4 — Understanding our logo */}
      <Section tone="sand" id="logo" className="relative isolate overflow-hidden">
        <CrystalField />
        <div className="relative">
          <SectionHeading
            align="center"
            eyebrow="Understanding Our Logo"
            title="Every element tells part of the story"
            description="Our visual identity is more than a logo. It is a reflection of our educational philosophy. Every shape, line, colour and symbol has been intentionally designed to express the values that define Lighthouse Campus."
          />

          <div className="mx-auto mt-12 flex max-w-sm flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-[0_20px_60px_-30px_rgba(11,29,58,0.4)]">
            <BrandLogo className="h-auto w-56" alt="The official Lighthouse Campus logo" />
            <p className="mt-6 eyebrow text-brand-blue">Lighthouse Campus</p>
          </div>

          <ul className="mt-14 grid gap-6 lg:grid-cols-2">
            {logoElements.map((el) => {
              const Icon = el.icon;
              return (
                <li key={el.title}>
                  <article className="cine-card group h-full rounded-xl border border-border bg-card/95 p-8 backdrop-blur-sm">
                    <div className="inline-flex size-14 items-center justify-center rounded-xl bg-navy text-gold shadow-[0_10px_28px_-16px_rgba(11,29,58,0.5)] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="size-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                      {el.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {el.body}
                    </p>
                    <div className="mt-5">
                      <p className="eyebrow text-brand-blue">Represents</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {el.represents.map((r) => (
                          <li
                            key={r}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-navy"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* Palette */}
          <div className="mt-16">
            <h3 className="text-center font-display text-2xl font-medium text-foreground md:text-3xl">
              An institutional palette
            </h3>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {palette.map((c) => (
                <li key={c.name} className="cine-card overflow-hidden rounded-xl border border-border bg-card">
                  <div
                    className={`flex h-28 items-end p-4 font-display text-lg font-medium ${c.ink}`}
                    style={{ backgroundColor: c.swatch }}
                  >
                    {c.name}
                  </div>
                  <p className="p-4 text-sm leading-relaxed text-muted-foreground">
                    {c.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Together they tell one story */}
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <Eyebrow>Together, They Tell One Story</Eyebrow>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Every element of the Lighthouse Campus identity contributes to a single purpose: creating a learning environment where curiosity is encouraged, intelligence is developed, character is nurtured, and every learner is empowered to lead with confidence.
              </p>
              <p className="font-medium text-foreground">Our identity reflects more than who we are.</p>
              <p>It reflects how we learn. How we grow. How we lead. How we belong.</p>
              <p>
                And how we prepare every learner to illuminate the future with knowledge, wisdom, integrity and purpose.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5 — Every detail has meaning */}
      <Section id="detail">
        <SectionHeading
          align="center"
          eyebrow="Every Detail Has Meaning"
          title="Nothing here exists by accident"
          description="Every colour, line, proportion, curve, symbol and beam of light has been considered with care. Each element reflects the educational philosophy of the institution — designed to reinforce learning before branding, so what families recognise first is not a logo, but a way of thinking about education."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailAxes.map((d) => {
            const Icon = d.icon;
            return (
              <li key={d.title}>
                <article className="cine-card h-full rounded-xl border border-border bg-card p-8">
                  <div className="inline-flex size-12 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-foreground">{d.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{d.body}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Section 6 — Our promise / pillars */}
      <Section tone="muted" id="promise">
        <SectionHeading
          align="center"
          eyebrow="Our Promise"
          title="Five pillars that define the Lighthouse Campus experience"
          description="Every aspect of our campus is intentionally designed to help learners grow academically, socially, emotionally and personally."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
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
                  <h3 className="mt-6 font-display text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-brand-blue">
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
      </Section>

      {/* Quote */}
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
            At Lighthouse Campus, learning is more than academic achievement. It is a lifelong journey of discovery — a journey of curiosity, character, responsibility, leadership and confidence.
          </p>
          <p>
            Every learner is encouraged to discover purpose, contribute meaningfully to society and build a future illuminated by knowledge and guided by values.
          </p>
        </div>
      </Section>

      {/* Institutional Flag */}
      <Section id="flag">
        <SectionHeading
          align="center"
          eyebrow="Institutional Presence"
          title="The Lighthouse Campus flag"
          description="The flag gathers our name, our identity and our promise into one enduring emblem — the visible sign of a community with a shared philosophy of learning."
        />
        <figure className="mt-14">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border shadow-[0_40px_120px_-40px_rgba(11,29,58,0.55)]">
            <img
              src={assetUrl(lighthouseFlag)}
              alt="The Lighthouse Campus flag flying above the campus — carrying the institutional emblem and the promise: Guiding minds. Inspiring futures. Connecting possibilities."
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Raised above the campus, the flag is a quiet daily reminder of the institution we are becoming — and of the promise we make to every learner who walks through our gates.
          </figcaption>
        </figure>
      </Section>

      <CtaBand
        title="Discover the community behind the name"
        body="The clearest way to understand Lighthouse Campus is to experience it. We would be glad to welcome your family."
        primary={{ to: "/admissions/schedule-a-visit", label: "Schedule a Visit" }}
        secondary={{ to: "/admissions", label: "Admissions Overview" }}
      />
    </>
  );
}
