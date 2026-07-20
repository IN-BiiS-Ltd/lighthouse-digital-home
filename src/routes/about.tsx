import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, FeatureCard } from "@/components/blocks";
import lighthouseFlag from "@/assets/lighthouse-flag.png.asset.json";
import readersFlag from "@/assets/readers-international-flag.png.asset.json";
import officialLockup from "@/assets/lighthouse-official-lockup.png.asset.json";
import campusExteriorPhoto from "@/assets/photo-campus-exterior.jpg";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { PullQuote, Marginalia, StatBand } from "@/components/editorial";
import {
  BookOpen,
  Compass,
  Eye,
  Flag,
  Landmark,
  Heart,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lighthouse Campus | A Legacy of Educational Excellence" },
      {
        name: "description",
        content:
          "Lighthouse Campus is a new educational experience built on the trusted legacy of Readers International School in Mohandessin, Giza — combining academic excellence with innovation, leadership and modern practice.",
      },
      { property: "og:title", content: "About Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "A legacy of educational excellence. A vision for the future. Discover the Lighthouse Campus story in Mohandessin, Giza, Greater Cairo.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const understanding = [
  { icon: <BookOpen className="size-5" />, title: "Our Story", to: "/about/our-story", body: "The origins, founding purpose and long-term direction of the institution." },
  { icon: <Sparkles className="size-5" />, title: "Why Lighthouse?", to: "/about/why-lighthouse", body: "The meaning behind the name, the identity and the educational symbolism." },
  { icon: <Eye className="size-5" />, title: "Vision and Mission", to: "/about/vision", body: "The future we seek to build and the work that guides us every day." },
  { icon: <Flag className="size-5" />, title: "Core Values", to: "/about/core-values", body: "The principles that shape learning, relationships and institutional conduct." },
  { icon: <Compass className="size-5" />, title: "Educational Philosophy", to: "/about/educational-philosophy", body: "How we understand learning, teaching and student development." },
  { icon: <Landmark className="size-5" />, title: "Leadership and Governance", to: "/about/leadership", body: "How responsibility, educational purpose and institutional stewardship guide decisions." },
  { icon: <Heart className="size-5" />, title: "Campus Culture", to: "/about/campus-culture", body: "The relationships, expectations and shared experiences that shape daily life." },
];

function About() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="About Lighthouse Campus"
        title="A Legacy of Educational Excellence. A Vision for the Future."
        intro="Lighthouse Campus is a new educational experience built upon the trusted legacy of Readers International School and designed to shape the future of learning."
        sections={[
          { label: "Our Story", to: "/about/our-story" },
          { label: "Why Lighthouse?", to: "/about/why-lighthouse" },
          { label: "Vision", to: "/about/vision" },
          { label: "Mission", to: "/about/mission" },
          { label: "Core Values", to: "/about/core-values" },
          { label: "Philosophy", to: "/about/educational-philosophy" },
          { label: "Leadership", to: "/about/leadership" },
          { label: "Governance", to: "/about/governance" },
          { label: "Campus Culture", to: "/about/campus-culture" },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="Built on Heritage, Designed for Tomorrow"
          title="Academic excellence, innovation, leadership and modern educational practice — together."
        />
        <div className="mt-12">
          <Marginalia
            note={
              <>
                A new campus, rooted in a trusted legacy — where every learner is
                known, challenged and supported.
              </>
            }
          >
            <p>Combining academic excellence with innovation, leadership, and modern educational practices, Lighthouse Campus provides an environment where every learner is challenged to grow, inspired to lead, and prepared to thrive in a rapidly changing world.</p>
            <p>As the newest campus of Readers International School in Mohandessin, Giza, we are committed to creating an exceptional educational journey that empowers students academically, personally, and globally.</p>
          </Marginalia>
        </div>
      </Section>

      <PullQuote
        quote={<>Guiding minds. Inspiring futures. Connecting possibilities.</>}
        attribution="The Lighthouse Promise"
      />

      <StatBand
        eyebrow="The Institutional Footprint"
        tone="navy"
        stats={[
          { value: "Ages 3–18", label: "Learning Journey", caption: "From Early Years foundations through Upper Secondary readiness." },
          { value: "10", label: "Educational Pillars", caption: "The interlocking commitments that shape every classroom decision." },
          { value: "1", label: "Trusted Legacy", caption: "Rooted in Readers International School — a heritage of excellence." },
          { value: "∞", label: "Possibilities", caption: "A learning community designed to open — not to narrow — futures." },
        ]}
      />

      <Section tone="muted">
        <SectionHeading eyebrow="Understanding Lighthouse Campus" title="Explore the ideas, people and principles behind the institution" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {understanding.map((u) => (
            <a key={u.to} href={u.to} className="block group">
              <FeatureCard title={u.title} icon={u.icon}>{u.body}</FeatureCard>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Readers International School — Mohandessin, Giza" title="A new campus in the heart of Greater Cairo" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Lighthouse Campus is the newest campus of Readers International School, located in Mohandessin, Giza, Greater Cairo.</p>
          <p>Rooted in the trusted legacy of Readers International School, this campus combines the strengths of a long-standing educational institution with a forward-looking vision for learning, leadership and global readiness.</p>
          <p>Every learner here is known, challenged and supported — academically, personally and as a future citizen of the world.</p>
        </div>

        <figure className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-2xl bg-navy shadow-[0_50px_120px_-30px_rgba(11,29,58,0.55)] ring-1 ring-gold/30">
            <img
              src={campusExteriorPhoto}
              alt="The Lighthouse Campus building in Mohandessin, Giza — a modern limestone institutional facade framed by mature palm trees under a deep blue sky"
              width={1600}
              height={1008}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">
            The Lighthouse Campus · Mohandessin, Giza — Greater Cairo
          </figcaption>
        </figure>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Institutional Heritage"
          title="Readers International Schools"
          description="Building on a Legacy of Excellence. Advancing Through Lighthouse Campus. Shaping a Future Driven by Learning and Innovation."
        />

        {/* Official lockup — full institutional signature */}
        <figure className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_40px_100px_-30px_rgba(11,29,58,0.55)] ring-2 ring-gold md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/10"
            />
            <img
              src={officialLockup.url}
              alt="Lighthouse Campus — Readers International School. Guiding Minds. Inspiring Futures. Connecting Possibilities."
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
              Lighthouse Campus · Readers International School · Mohandessin, Giza
            </p>
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-8">
          <figure className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_30px_80px_-25px_rgba(11,29,58,0.55)] ring-2 ring-gold">
              <img
                src={readersFlag.url}
                alt="Readers International Schools — institutional flag with official seal (since 2022)"
                width={1536}
                height={1024}
                className="block h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="eyebrow text-brand-blue">Readers International Schools</span>
              <p className="mt-1 text-sm text-muted-foreground">The founding institution · Since 2022</p>
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_30px_80px_-25px_rgba(11,29,58,0.55)] ring-2 ring-gold">
              <img
                src={lighthouseFlag.url}
                alt="Lighthouse Campus — institutional flag: Readers International School. Guiding Minds. Inspiring Futures. Connecting Possibilities."
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
              <p className="mt-1 text-sm text-muted-foreground">By Readers International · Mohandessin, Giza</p>
            </figcaption>
          </figure>
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
    </>
  );
}
