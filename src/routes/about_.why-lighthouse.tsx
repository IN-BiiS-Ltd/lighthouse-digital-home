import { assetUrl } from "@/lib/asset-url";
import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Users, Shield, Heart, Globe, Palette, Sun, Compass } from "lucide-react";
import {
  Section,
  SectionHeading,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CrystalField } from "@/components/crystal-field";

import lighthouseFlag from "@/assets/lighthouse-flag.png.asset.json";
import lighthouseLogo from "@/assets/lighthouse-campus-approved.png.asset.json";
import logoLighthouse from "@/assets/logo-lighthouse.png.asset.json";
import logoLight from "@/assets/logo-light.png.asset.json";
import logoBook from "@/assets/logo-book.png.asset.json";
import logoNetwork from "@/assets/logo-network.png.asset.json";
import logoCircle from "@/assets/logo-circle.png.asset.json";
import photoClassroom from "@/assets/photo-classroom-primary.jpg";
import photoLibrary from "@/assets/photo-library.jpg";

import principleLeadership from "@/assets/principle-leadership.png.asset.json";
import principleInquiry from "@/assets/principle-inquiry.png.asset.json";
import principleGrowth from "@/assets/principle-growth.png.asset.json";
import principleHumanity from "@/assets/principle-humanity.png.asset.json";
import principleTransformation from "@/assets/principle-transformation.png.asset.json";
import principleHarmony from "@/assets/principle-harmony.png.asset.json";
import principleOpportunity from "@/assets/principle-opportunity.png.asset.json";
import principleUnderstanding from "@/assets/principle-understanding.png.asset.json";
import principleStewardship from "@/assets/principle-stewardship.png.asset.json";
import principleExcellence from "@/assets/principle-excellence.png.asset.json";

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
          "More than a school. A place where futures begin. Explore the five pillars, the meaning behind our name, and the story our identity tells.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/about/why-lighthouse" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/about/why-lighthouse" }],
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
  { icon: Lightbulb, title: "Inspired Learning", body: "Learning that sparks curiosity, creativity, critical thinking, and a lifelong love of discovery." },
  { icon: Users, title: "Exceptional Educators", body: "Passionate teachers who inspire, mentor, and help every learner reach their full potential." },
  { icon: Shield, title: "Character & Leadership", body: "Building integrity, responsibility, resilience, empathy, and the confidence to lead with purpose." },
  { icon: Heart, title: "Safe & Nurturing Environment", body: "A welcoming community where every child feels respected, valued, supported, and encouraged to grow." },
  { icon: Globe, title: "Global Perspective", body: "Preparing learners with the knowledge, skills, and mindset to succeed in an interconnected world while remaining proud of their identity and values." },
];

const lighthouseValues = ["Guidance", "Hope", "Vision", "Leadership", "Trust", "Safety", "Direction"];

const acronym = [
  { letter: "L", title: "Leadership", body: "Developing confident, ethical and responsible leaders.", img: principleLeadership },
  { letter: "I", title: "Inquiry", body: "Encouraging curiosity, exploration and lifelong learning.", img: principleInquiry },
  { letter: "G", title: "Growth", body: "Supporting continuous intellectual, emotional and personal development.", img: principleGrowth },
  { letter: "H", title: "Humanity", body: "Building compassion, kindness and respect for others.", img: principleHumanity },
  { letter: "T", title: "Transformation", body: "Helping every learner become the best version of themselves.", img: principleTransformation },
  { letter: "H", title: "Harmony", body: "Creating balance between academic excellence, wellbeing and character.", img: principleHarmony },
  { letter: "O", title: "Opportunity", body: "Helping every learner discover and develop individual strengths.", img: principleOpportunity },
  { letter: "U", title: "Understanding", body: "Promoting reflection, wisdom and global awareness.", img: principleUnderstanding },
  { letter: "S", title: "Stewardship", body: "Preparing learners to contribute responsibly to their communities and the wider world.", img: principleStewardship },
  { letter: "E", title: "Excellence", body: "Pursuing quality, achievement and continuous improvement in everything we do.", img: principleExcellence },
];

const logoElements = [
  {
    img: logoLighthouse,
    title: "The Lighthouse",
    body: "A symbol of guidance and purposeful leadership. The lighthouse represents the role of education in illuminating the path ahead. Rather than determining a learner's destination, it provides direction, confidence, and the clarity needed to navigate an ever-changing world.",
    tags: ["Guidance", "Leadership", "Vision", "Direction"],
  },
  {
    img: logoLight,
    title: "The Light",
    body: "A symbol of knowledge, intelligence and possibility. The light reflects the transformative power of education. It illuminates understanding, nurtures intelligence, inspires curiosity, and empowers learners to explore new ideas with confidence and purpose.",
    tags: ["Knowledge", "Intelligence", "Discovery", "Hope", "Inspiration"],
  },
  {
    img: logoBook,
    title: "The Open Book",
    body: "A symbol of learning without limits. The open book celebrates curiosity and the lifelong pursuit of knowledge. It reminds every learner that education is an ongoing journey of exploration, reflection, and intellectual growth.",
    tags: ["Learning", "Curiosity", "Education", "Wisdom"],
  },
  {
    img: logoNetwork,
    title: "The Connected Network",
    body: "A symbol of innovation, intelligence and connected learning. The interconnected network reflects the relationships that enrich education — connecting learners, educators, ideas, technology, and the wider world. It represents an educational ecosystem where collaboration, innovation, and collective intelligence prepare learners for the opportunities of tomorrow.",
    tags: ["Innovation", "Intelligence", "Technology", "Collaboration", "Future Learning", "Global Connection"],
  },
  {
    img: logoCircle,
    title: "The Circle",
    body: "A symbol of belonging and lifelong community. The circle represents unity, continuity, and the enduring strength of a learning community. It reflects the belief that every learner belongs, every voice matters, and every journey contributes to the shared life of the campus.",
    tags: ["Belonging", "Continuity", "Unity", "Lifelong Learning", "Institutional Community"],
  },
];

const palette = [
  { name: "Executive Blue", swatch: "#0B1D3A", ink: "text-white", body: "A symbol of trust, wisdom, confidence, stability, and thoughtful leadership." },
  { name: "Lighthouse Gold", swatch: "#C9A24C", ink: "text-navy", body: "A symbol of excellence, aspiration, achievement, and the transformative power of education." },
  { name: "Silver", swatch: "#C7CBD1", ink: "text-navy", body: "A symbol of clarity, precision, balance, and modern thinking." },
  { name: "White", swatch: "#FFFFFF", ink: "text-navy", body: "A symbol of openness, integrity, transparency, and new beginnings." },
];

function WhyLighthouse() {
  return (
    <>
      <PageHero
        watermark
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About Lighthouse Campus", to: "/about" },
          { label: "Why LIGHTHOUSE CAMPUS?" },
        ]}
        eyebrow="Our Promise"
        title={
          <>
            Why <span className="text-gilded">LIGHTHOUSE CAMPUS</span>
            <span className="block mt-2 text-navy-foreground/80 font-display text-2xl md:text-3xl">
              More Than a School. A Place Where Futures Begin.
            </span>
          </>
        }
        intro="Choosing a school is one of the most important decisions a family will ever make. At LIGHTHOUSE CAMPUS, we believe education should do more than prepare children for examinations — it should prepare them to thrive in life."
        sections={[
          { label: "A New Experience", to: "/about/why-lighthouse#experience" },
          { label: "Five Pillars", to: "/about/why-lighthouse#pillars" },
          { label: "Why a Lighthouse?", to: "/about/why-lighthouse#identity" },
          { label: "The Meaning", to: "/about/why-lighthouse#acronym" },
          { label: "Understanding Our Logo", to: "/about/why-lighthouse#logo" },
          { label: "Every Detail", to: "/about/why-lighthouse#detail" },
          { label: "Institutional Flag", to: "/about/why-lighthouse#flag" },
        ]}
      />

      {/* Section 1 — Our Promise */}
      <Section id="promise" className="section-spotlight">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>More Than a School</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
            A Place Where <span className="text-gilded">Futures Begin</span>
          </h2>
          <div className="ornament-rule mt-8" aria-hidden>
            <span className="ornament-rule__mark" />
          </div>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Choosing a school is one of the most important decisions a family will ever make.</p>
            <p>
              At LIGHTHOUSE CAMPUS, we believe education should do more than prepare children for examinations. It should prepare them to thrive in life — with confidence, character, curiosity, and the ability to lead in a rapidly changing world.
            </p>
            <p>
              Every aspect of our campus is intentionally designed to help learners grow academically, socially, emotionally, and personally.
            </p>
            <p className="font-medium text-foreground">Because we believe every child deserves more than an education.</p>
            <p className="font-medium text-foreground">
              Every child deserves the opportunity to discover their potential and become the best version of themselves.
            </p>
          </div>
        </div>
      </Section>

      {/* Section — A New Educational Experience */}
      <Section tone="muted" id="experience">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>More Than a Campus</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
              A new educational experience
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Lighthouse Campus is not simply another school campus. It is a purposefully designed learning community that prepares students not only for academic success but also for leadership, innovation, and responsible global citizenship.
              </p>
              <p>
                Every aspect of the campus — from learning spaces to educational programs — has been created to inspire curiosity, confidence, creativity, and excellence.
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border shadow-[0_30px_80px_-40px_rgba(11,29,58,0.45)]">
            <img
              src={photoClassroom}
              alt="Lighthouse Campus students in a collaborative classroom discussion"
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </figure>
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

      {/* Section — Why a Lighthouse? */}
      <Section id="identity">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Why a Lighthouse?</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.08] md:text-[2.6rem]">
              A light that never controls the journey —<br />it illuminates the way.
            </h2>
            <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="What the lighthouse represents">
              {lighthouseValues.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
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
        </div>
      </Section>

      {/* Section — LIGHTHOUSE Acronym */}
      <Section tone="sand" id="acronym" className="relative isolate overflow-hidden">
        <CrystalField />
        <div className="relative">
          <Eyebrow>The Meaning Behind LIGHTHOUSE</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight md:text-4xl">
            Ten principles, held within a single word
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every letter of LIGHTHOUSE names a principle that shapes daily life on campus — a quiet promise about the kind of learners, and people, we help form.
          </p>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {acronym.map((p, i) => (
              <li key={`${p.letter}-${i}`}>
                <article className="cine-card group relative h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="relative">
                    <img
                      src={assetUrl(p.img)}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="size-20 rounded-xl object-cover shadow-[0_10px_28px_-16px_rgba(11,29,58,0.55)]"
                    />
                    <span
                      aria-hidden
                      className="absolute right-0 top-1 select-none font-display text-4xl font-medium text-gold/40"
                    >
                      {p.letter}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Section — Understanding Our Logo */}
      <Section id="logo">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Understanding Our Logo</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight md:text-4xl">
            Every element tells part of the story
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Our visual identity is more than a logo. It is a reflection of our educational philosophy. Every shape, every line, every colour, and every symbol has been intentionally designed to express the values that define Lighthouse Campus.
            </p>
            <p>
              Together, these elements tell the story of a learning community where curiosity is encouraged, intelligence is cultivated, character is strengthened, and every learner is prepared to contribute confidently to an evolving world.
            </p>
          </div>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="lg:sticky lg:top-24">
            <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-[0_30px_80px_-40px_rgba(11,29,58,0.45)]">
              <img
                src={assetUrl(lighthouseLogo)}
                alt="The official LIGHTHOUSE CAMPUS logo"
                className="h-auto w-64"
              />
              <p className="mt-6 eyebrow text-brand-blue">LIGHTHOUSE CAMPUS</p>
            </div>
          </div>
          <ul className="space-y-6">
            {logoElements.map((el) => (
              <li key={el.title}>
                <article className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                  <div className="flex items-start gap-5">
                    <img
                      src={assetUrl(el.img)}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="size-16 shrink-0 rounded-xl object-cover shadow-[0_10px_28px_-16px_rgba(11,29,58,0.55)]"
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-medium text-foreground">
                        {el.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {el.body}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-border/70 pt-4">
                    <p className="eyebrow mb-3 text-brand-blue">Represents</p>
                    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      {el.tags.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span aria-hidden className="size-1.5 rounded-full bg-gold" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* Institutional Palette */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Institutional Palette"
            title="Colours chosen for meaning"
            description="Every colour in our palette carries institutional intent — the visual grammar of trust, excellence, clarity, and openness."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((c) => (
              <li key={c.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className={`inline-flex size-14 items-center justify-center rounded-xl border border-border/60 shadow-inner ${c.ink}`}
                    style={{ backgroundColor: c.swatch }}
                  >
                    {c.name === "Executive Blue" ? (
                      <Shield className="size-6" />
                    ) : c.name === "Lighthouse Gold" ? (
                      <Sun className="size-6" />
                    ) : c.name === "Silver" ? (
                      <Compass className="size-6" />
                    ) : (
                      <Palette className="size-6" />
                    )}
                  </span>
                  <h3 className="font-display text-lg font-medium text-foreground">{c.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Section — Together, They Tell One Story */}
      <Section tone="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
            Together, They Tell <span className="text-gilded">One Story</span>
          </h2>
          <div className="ornament-rule mt-8" aria-hidden>
            <span className="ornament-rule__mark" />
          </div>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Every element of the Lighthouse Campus identity contributes to a single purpose: creating a learning environment where curiosity is encouraged, intelligence is developed, character is nurtured, and every learner is empowered to lead with confidence.
            </p>
          </div>
          <div className="mt-10 space-y-2 font-display text-xl leading-relaxed text-foreground md:text-2xl">
            <p>Our identity reflects more than who we are.</p>
            <p>It reflects how we learn.</p>
            <p>How we grow.</p>
            <p>How we lead.</p>
            <p>How we belong.</p>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            And how we prepare every learner to illuminate the future with knowledge, wisdom, integrity, and purpose.
          </p>
        </div>
      </Section>

      {/* Section — Every Detail Has Meaning */}
      <Section id="detail">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="overflow-hidden rounded-2xl border border-border shadow-[0_30px_80px_-40px_rgba(11,29,58,0.45)]">
            <img
              src={photoLibrary}
              alt="Students studying together in the Lighthouse Campus library"
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </figure>
          <div>
            <Eyebrow>Every Detail Has Meaning</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
              Nothing here exists by accident
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Every colour, every line, every proportion, every curve, every symbol and every beam of light has been considered with care. Each element reflects the educational philosophy of the institution.
              </p>
              <p>
                Our visual identity is designed to reinforce learning before branding — so that what families recognise first is not a logo, but a way of thinking about education.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {["Colour", "Light", "Form"].map((t, i) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  {i === 0 ? <Palette className="size-4 text-brand-blue" /> : i === 1 ? <Sun className="size-4 text-brand-blue" /> : <Compass className="size-4 text-brand-blue" />}
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Section — The Lighthouse Campus Flag */}
      <Section tone="sand" id="flag">
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
        <figure className="sheen relative mx-auto my-12 max-w-3xl border-l-2 border-gold pl-8 md:my-20 md:pl-12">
          <span
            aria-hidden
            className="absolute -left-2 -top-8 select-none font-display text-[6rem] leading-none text-gold/30 md:text-[8rem]"
          >
            &ldquo;
          </span>
          <blockquote className="font-display text-2xl italic leading-snug text-navy-foreground md:text-4xl">
            <span className="text-gilded">Guiding Minds.</span>
            <br />
            <span className="text-gilded">Inspiring Futures.</span>
            <br />
            <span className="text-gilded">Connecting Possibilities.</span>
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
