import { assetUrl } from "@/lib/asset-url";
import { createFileRoute } from "@tanstack/react-router";
import { Compass, Palette, Sparkles } from "lucide-react";
import {
  Section,
  SectionHeading,
  MediaRow,
  Pullquote,
  Eyebrow,
  BrandLogo,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CrystalField } from "@/components/crystal-field";

import heroLearningImg from "@/assets/hero-learning.jpg";
import libraryImg from "@/assets/campus-library.jpg";
import iconLeadership from "@/assets/principle-leadership.png.asset.json";
import iconInquiry from "@/assets/principle-inquiry.png.asset.json";
import iconGrowth from "@/assets/principle-growth.png.asset.json";
import iconHumanity from "@/assets/principle-humanity.png.asset.json";
import iconTransformation from "@/assets/principle-transformation.png.asset.json";
import iconHarmony from "@/assets/principle-harmony.png.asset.json";
import iconOpportunity from "@/assets/principle-opportunity.png.asset.json";
import iconUnderstanding from "@/assets/principle-understanding.png.asset.json";
import iconStewardship from "@/assets/principle-stewardship.png.asset.json";
import iconExcellence from "@/assets/principle-excellence.png.asset.json";
import logoLighthouse from "@/assets/logo-lighthouse.png.asset.json";
import approvedLogo from "@/assets/lighthouse-approved-logo.png.asset.json";
import logoLight from "@/assets/logo-light.png.asset.json";
import logoBook from "@/assets/logo-book.png.asset.json";
import logoNetwork from "@/assets/logo-network.png.asset.json";
import logoCircle from "@/assets/logo-circle.png.asset.json";
import logoShield from "@/assets/logo-shield.png.asset.json";
import logoStar from "@/assets/logo-star.png.asset.json";
import logoCompass from "@/assets/logo-compass.png.asset.json";
import logoDove from "@/assets/logo-dove.png.asset.json";
import lighthouseFlag from "@/assets/lighthouse-flag.png.asset.json";

export const Route = createFileRoute("/about_/why-lighthouse")({
  head: () => ({
    meta: [
      { title: "Why Lighthouse? | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Discover the story behind Lighthouse Campus, the meaning of its name, the philosophy behind its identity, the symbolism of its logo and the educational values that guide every learner.",
      },
      { property: "og:title", content: "Why Lighthouse? | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "The story behind our name, the symbolism of the lighthouse, the meaning of our logo, and the educational philosophy expressed in every letter of LIGHTHOUSE.",
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
            "The story, symbolism and educational philosophy behind the name and identity of Lighthouse Campus.",
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

/* The ten institutional principles held in the name LIGHTHOUSE. */
const acrostic = [
  {
    letter: "L",
    title: "Leadership",
    icon: assetUrl(iconLeadership),
    body: "Developing confident, ethical and responsible leaders.",
  },
  {
    letter: "I",
    title: "Inquiry",
    icon: assetUrl(iconInquiry),
    body: "Encouraging curiosity, exploration and lifelong learning.",
  },
  {
    letter: "G",
    title: "Growth",
    icon: assetUrl(iconGrowth),
    body: "Supporting continuous intellectual, emotional and personal development.",
  },
  {
    letter: "H",
    title: "Humanity",
    icon: assetUrl(iconHumanity),
    body: "Building compassion, kindness and respect for others.",
  },
  {
    letter: "T",
    title: "Transformation",
    icon: assetUrl(iconTransformation),
    body: "Helping every learner become the best version of themselves.",
  },
  {
    letter: "H",
    title: "Harmony",
    icon: assetUrl(iconHarmony),
    body: "Creating balance between academic excellence, wellbeing and character.",
  },
  {
    letter: "O",
    title: "Opportunity",
    icon: assetUrl(iconOpportunity),
    body: "Helping every learner discover and develop individual strengths.",
  },
  {
    letter: "U",
    title: "Understanding",
    icon: assetUrl(iconUnderstanding),
    body: "Promoting reflection, wisdom and global awareness.",
  },
  {
    letter: "S",
    title: "Stewardship",
    icon: assetUrl(iconStewardship),
    body: "Preparing learners to contribute responsibly to their communities and the wider world.",
  },
  {
    letter: "E",
    title: "Excellence",
    icon: assetUrl(iconExcellence),
    body: "Pursuing quality, achievement and continuous improvement in everything we do.",
  },
];

/* Symbolic elements represented within the official logo. */
const logoSymbols = [
  {
    img: assetUrl(approvedLogo),
    title: "The Lighthouse",
    description:
      "A symbol of guidance and purposeful leadership. The lighthouse represents the role of education in illuminating the path ahead. Rather than determining a learner's destination, it provides direction, confidence, and the clarity needed to navigate an ever-changing world.",
    represents: ["Guidance", "Leadership", "Vision", "Direction"],
  },
  {
    img: assetUrl(logoLight),
    title: "The Light",
    description:
      "A symbol of knowledge, intelligence and possibility. The light reflects the transformative power of education. It illuminates understanding, nurtures intelligence, inspires curiosity, and empowers learners to explore new ideas with confidence and purpose.",
    represents: ["Knowledge", "Intelligence", "Discovery", "Hope", "Inspiration"],
  },
  {
    img: assetUrl(logoBook),
    title: "The Open Book",
    description:
      "A symbol of learning without limits. The open book celebrates curiosity and the lifelong pursuit of knowledge. It reminds every learner that education is an ongoing journey of exploration, reflection, and intellectual growth.",
    represents: ["Learning", "Curiosity", "Education", "Wisdom"],
  },
  {
    img: assetUrl(logoNetwork),
    title: "The Connected Network",
    description:
      "A symbol of innovation, intelligence and connected learning. The interconnected network reflects the relationships that enrich education—connecting learners, educators, ideas, technology, and the wider world. It represents an educational ecosystem where collaboration, innovation, and collective intelligence prepare learners for the opportunities of tomorrow.",
    represents: [
      "Innovation",
      "Intelligence",
      "Technology",
      "Collaboration",
      "Future Learning",
      "Global Connection",
    ],
  },
  {
    img: assetUrl(logoCircle),
    title: "The Circle",
    description:
      "A symbol of belonging and lifelong community. The circle represents unity, continuity, and the enduring strength of a learning community. It reflects the belief that every learner belongs, every voice matters, and every journey contributes to the shared life of the campus.",
    represents: [
      "Belonging",
      "Continuity",
      "Unity",
      "Lifelong Learning",
      "Institutional Community",
    ],
  },
];

const logoColours = [
  {
    name: "Executive Blue",
    img: assetUrl(logoShield),
    description:
      "A symbol of trust, wisdom, confidence, stability, and thoughtful leadership.",
  },
  {
    name: "Lighthouse Gold",
    img: assetUrl(logoStar),
    description:
      "A symbol of excellence, aspiration, achievement, and the transformative power of education.",
  },
  {
    name: "Silver",
    img: assetUrl(logoCompass),
    description: "A symbol of clarity, precision, balance, and modern thinking.",
  },
  {
    name: "White",
    img: assetUrl(logoDove),
    description: "A symbol of openness, integrity, transparency, and new beginnings.",
  },
];

const lighthouseQualities = [
  "Guidance",
  "Hope",
  "Vision",
  "Leadership",
  "Trust",
  "Safety",
  "Direction",
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
        title="Why Lighthouse?"
        intro="More than a campus, Lighthouse Campus is a new educational experience designed to prepare students for academic success, leadership, innovation and responsible global citizenship."
        sections={[
          { label: "A New Educational Experience", to: "/about/why-lighthouse#a-new-educational-experience" },
          { label: "Why a Lighthouse?", to: "/about/why-lighthouse#why-a-lighthouse" },
          { label: "The Meaning of LIGHTHOUSE", to: "/about/why-lighthouse#meaning" },
          { label: "Understanding Our Logo", to: "/about/why-lighthouse#logo" },
          { label: "Our Promise", to: "/about/why-lighthouse#promise" },
        ]}
      />

      {/* Section 1 — A New Educational Experience */}
      <Section id="a-new-educational-experience">
        <MediaRow
          eyebrow="More Than a Campus"
          title="A new educational experience"
          image={heroLearningImg}
          imageAlt="Students learning together in a bright, purposeful classroom"
        >
          <p>
            Lighthouse Campus is not simply another school campus. It is a purposefully
            designed learning community that prepares students not only for academic
            success but also for leadership, innovation, and responsible global citizenship.
          </p>
          <p>
            Every aspect of the campus — from learning spaces to educational programs —
            has been created to inspire curiosity, confidence, creativity, and excellence.
          </p>
        </MediaRow>
      </Section>

      {/* Section 2 — Why a Lighthouse? */}
      <Section tone="sand" id="why-a-lighthouse">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Why a Lighthouse?</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
              A light that never controls the journey — it illuminates the way.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {lighthouseQualities.map((q) => (
                <li
                  key={q}
                  className="rounded-full border border-navy/15 bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Throughout history, the lighthouse has stood for guidance, hope,
              vision, leadership, trust, safety and direction. It watches over
              the horizon so that others can travel with confidence.
            </p>
            <p>
              Yet a lighthouse never steers the ship. It does not control the
              journey — it simply shows what is possible and lets each traveller
              find their own way.
            </p>
            <p>
              This is exactly how we understand education. Lighthouse Campus does
              not aim to give students every answer. We help them develop the
              confidence and understanding to discover answers for themselves.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — The Meaning Behind LIGHTHOUSE */}
      <Section id="meaning" className="relative isolate overflow-hidden">
        <CrystalField />
        <div className="relative">
        <SectionHeading
          eyebrow="The Meaning Behind LIGHTHOUSE"
          title="Ten principles, held within a single word"
          description="Every letter of LIGHTHOUSE names a principle that shapes daily life on campus — a quiet promise about the kind of learners, and people, we help form."
        />
        <ul
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          aria-label="The ten principles of LIGHTHOUSE"
        >
          {acrostic.map((item, i) => (
            <li key={`${item.letter}-${i}`}>
              <article
                tabIndex={0}
                role="group"
                aria-label={`${item.letter} — ${item.title}. ${item.body}`}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  el.style.setProperty(
                    "--mx",
                    `${((e.clientX - rect.left) / rect.width) * 100}%`,
                  );
                  el.style.setProperty(
                    "--my",
                    `${((e.clientY - rect.top) / rect.height) * 100}%`,
                  );
                }}
                className="cine-card group h-full rounded-xl border border-border bg-card/90 p-7 backdrop-blur-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="mb-1 flex items-center gap-4">
                  <div className="relative overflow-hidden rounded-xl ring-1 ring-navy/10 shadow-[0_10px_28px_-16px_rgba(11,29,58,0.5)]">
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      width={816}
                      height={816}
                      className="size-20 object-cover transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-110"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                  </div>
                  <span
                    aria-hidden
                    className="font-display text-4xl font-semibold text-gold/25 transition-all duration-500 group-hover:scale-110 group-hover:text-gold/70 group-focus-visible:scale-110 group-focus-visible:text-gold/70"
                  >
                    {item.letter}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-brand-blue group-focus-visible:text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
        </div>
      </Section>


      {/* Section 4 — Understanding Our Logo */}
      <Section tone="muted" id="logo">
        <SectionHeading
          align="center"
          eyebrow="Understanding Our Logo"
          title="Every element tells part of the story"
          description="Our visual identity is more than a logo. It is a reflection of our educational philosophy. Every shape, every line, every colour, and every symbol has been intentionally designed to express the values that define Lighthouse Campus."
        />
        <div className="mt-6 max-w-3xl mx-auto text-center text-lg leading-relaxed text-muted-foreground">
          <p>
            Together, these elements tell the story of a learning community where
            curiosity is encouraged, intelligence is cultivated, character is
            strengthened, and every learner is prepared to contribute confidently
            to an evolving world.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-[0_20px_60px_-30px_rgba(11,29,58,0.4)]">
              <BrandLogo
                className="h-auto w-56"
                alt="The official Lighthouse Campus logo"
              />
              <p className="mt-6 eyebrow text-brand-blue">Lighthaus Campus</p>
            </div>
          </div>
          <div className="space-y-4">
            {logoSymbols.map((sym) => (
              <div
                key={sym.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-gold/50"
              >
                <div className="inline-flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-brand-blue">
                  <img
                    src={sym.img}
                    alt={sym.title}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {sym.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {sym.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                    Represents
                  </p>
                  <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    {sym.represents.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span aria-hidden className="text-gold">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              {logoColours.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-gold/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-brand-blue">
                      <img
                        src={c.img}
                        alt={c.name}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </span>
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {c.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Together, They Tell One Story */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl font-medium text-foreground md:text-3xl">
            Together, They Tell One Story
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Every element of the Lighthouse Campus identity contributes to a single
            purpose: creating a learning environment where curiosity is encouraged,
            intelligence is developed, character is nurtured, and every learner is
            empowered to lead with confidence.
          </p>
          <div className="mt-8 space-y-1 text-lg font-medium text-foreground">
            <p>Our identity reflects more than who we are.</p>
            <p>It reflects how we learn.</p>
            <p>How we grow.</p>
            <p>How we lead.</p>
            <p>How we belong.</p>
            <p className="text-muted-foreground">
              And how we prepare every learner to illuminate the future with
              knowledge, wisdom, integrity, and purpose.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 5 — Every Detail Has Meaning */}
      <Section tone="sand" id="detail">
        <MediaRow
          reverse
          eyebrow="Every Detail Has Meaning"
          title="Nothing here exists by accident"
          image={libraryImg}
          imageAlt="Students reading and reflecting together in the campus library"
        >
          <p>
            Every colour, every line, every proportion, every curve, every
            symbol and every beam of light has been considered with care. Each
            element reflects the educational philosophy of the institution.
          </p>
          <p>
            Our visual identity is designed to reinforce learning before
            branding — so that what families recognise first is not a logo, but
            a way of thinking about education.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { icon: <Palette className="size-4" />, label: "Colour" },
              { icon: <Sparkles className="size-4" />, label: "Light" },
              { icon: <Compass className="size-4" />, label: "Form" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                <span className="text-brand-blue">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </MediaRow>
      </Section>

      {/* Section 6 — Our Promise */}
      <Section tone="navy" id="promise">
        <Pullquote
          onNavy
          quote={
            <>
              Guiding Minds.
              <br />
              Inspiring Futures.
              <br />
              Connecting Possibilities.
            </>
          }
        />
        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-center text-lg leading-relaxed text-navy-foreground/80">
          <p>
            At Lighthouse Campus, learning is more than academic achievement. It
            is a lifelong journey of discovery — a journey of curiosity,
            character, responsibility, leadership and confidence.
          </p>
          <p>
            Every learner is encouraged to discover purpose, contribute
            meaningfully to society and build a future illuminated by knowledge
            and guided by values.
          </p>
        </div>
      </Section>

      {/* Section 7 — The Lighthouse Campus Flag */}
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
            Raised above the campus, the flag is a quiet daily reminder of the
            institution we are becoming — and of the promise we make to every
            learner who walks through our gates.
          </figcaption>
        </figure>
      </Section>
      <CtaBand
        title="Discover the community behind the name"
        body="The clearest way to understand Lighthouse Campus is to experience it. We would be glad to welcome your family."
      />
    </>
  );
}
