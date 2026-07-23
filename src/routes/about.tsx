import { assetUrl } from "@/lib/asset-url";
import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, FeatureCard } from "@/components/blocks";
import lighthouseFlag from "@/assets/lighthouse-flag.png.asset.json";
import campusExteriorPhoto from "@/assets/photo-campus-exterior.jpg";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { PullQuote, StatBand } from "@/components/editorial";
import officialLockupAsset from "@/assets/lighthouse-official-lockup-v2.png.asset.json";
const officialLockupSrc = officialLockupAsset.url;
import {
  BookOpen,
  CheckCircle,
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
      { title: "About Lighthouse Campus | An Independent Institution for Modern Learning" },
      {
        name: "description",
        content:
          "Lighthouse Campus is an independent educational institution in Mohandessin, Giza — a modern learning community built around curiosity, character and belonging.",
      },
      { property: "og:title", content: "About Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "An independent institution with its own philosophy, identity and long-term vision. Discover Lighthouse Campus in Mohandessin, Giza.",
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
          eyebrow="Our Purpose"
          title="Where Potential Becomes Purpose"
        />
        <div className="mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Every family dreams of a future where their children are confident, compassionate, and prepared to succeed in an ever-changing world.</p>
          <p className="font-medium text-foreground">LIGHTHOUSE CAMPUS exists to help make that future possible.</p>
          <p>Through exceptional teaching, meaningful relationships, and an inspiring learning environment, we empower every learner to discover their strengths, develop their character, and pursue excellence with confidence.</p>
          <p>We are not simply preparing students for examinations.</p>
          <p className="font-medium text-foreground">We are preparing them for life, leadership, and the opportunities of tomorrow.</p>
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
          { value: "1", label: "Founding Campus", caption: "Mohandessin, Giza — the first campus of a growing institution." },
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
        <SectionHeading eyebrow="Mohandessin, Giza" title="A new campus in the heart of Greater Cairo" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Lighthouse Campus is located in Mohandessin, Giza, Greater Cairo — the founding campus of an institution designed to grow thoughtfully across the region.</p>
          <p>Here, the strengths of a modern educational institution meet a forward-looking vision for learning, leadership and global readiness.</p>
          <p>Every learner is known, challenged and supported — academically, personally and as a future citizen of the world.</p>
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
            LIGHTHOUSE CAMPUS was established through a strategic partnership that brings together two institutions with complementary strengths and a shared commitment to educational excellence.
          </p>
          <p>
            This partnership was formed around a simple principle: when each institution contributes what it does best, students benefit from a richer, stronger, and more future-ready learning experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_-20px_rgba(11,29,58,0.25)] ring-1 ring-gold/40">
            <h3 className="font-display text-xl text-navy">Readers International School</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Contributes its educational license and institutional presence as the founding strategic educational partner for the first campus.
            </p>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-navy-foreground shadow-[0_20px_60px_-20px_rgba(11,29,58,0.35)] ring-1 ring-gold/40">
            <h3 className="font-display text-xl text-gold">LIGHTHOUSE CAMPUS</h3>
            <p className="mt-3 text-base leading-relaxed text-navy-foreground/90">
              Contributes its educational vision, institutional operating model, academic leadership, governance framework, digital transformation, operational excellence, and continuous innovation.
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
    </>
  );
}
