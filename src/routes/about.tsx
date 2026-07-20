import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, FeatureCard, BrandLogo } from "@/components/blocks";
import readersLogo from "@/assets/readers-international-schools.png.asset.json";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
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
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Combining academic excellence with innovation, leadership, and modern educational practices, Lighthouse Campus provides an environment where every learner is challenged to grow, inspired to lead, and prepared to thrive in a rapidly changing world.</p>
          <p>As the newest campus of Readers International School in Mohandessin, Giza, we are committed to creating an exceptional educational journey that empowers students academically, personally, and globally.</p>
        </div>
      </Section>

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
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Institutional Heritage"
          title="Readers International Schools"
          description="Building on a Legacy of Excellence. Advancing Through Lighthouse Campus. Shaping a Future Driven by Learning and Innovation."
        />
        <div className="mt-14 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
          <figure className="flex flex-col items-center">
            <div className="rounded-full bg-background p-4 shadow-[0_20px_60px_-30px_rgba(11,29,58,0.35)] ring-1 ring-border">
              <img
                src={readersLogo.url}
                alt="Readers International Schools — official seal, since 2022"
                width={220}
                height={220}
                className="h-40 w-40 object-contain md:h-48 md:w-48"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 eyebrow text-brand-blue">Readers International Schools</figcaption>
            <p className="mt-1 text-sm text-muted-foreground">The founding institution · Since 2022</p>
          </figure>

          <span aria-hidden className="hidden text-3xl font-light text-gold md:block">×</span>

          <figure className="flex flex-col items-center">
            <div className="rounded-full bg-navy p-6 shadow-[0_20px_60px_-30px_rgba(11,29,58,0.6)] ring-1 ring-navy/40">
              <BrandLogo
                variant="dark"
                alt="Lighthouse Campus — official emblem"
                className="h-32 w-32 object-contain md:h-40 md:w-40"
              />
            </div>
            <figcaption className="mt-4 eyebrow text-brand-blue">Lighthouse Campus</figcaption>
            <p className="mt-1 text-sm text-muted-foreground">By Readers International · Mohandessin, Cairo</p>
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
