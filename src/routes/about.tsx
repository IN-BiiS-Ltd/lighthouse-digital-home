import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, FeatureCard } from "@/components/blocks";
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
      { title: "About Lighthouse Campus | Our Purpose, People and Educational Philosophy" },
      {
        name: "description",
        content:
          "Discover the story, purpose, values, educational philosophy, leadership and culture that shape Lighthouse Campus.",
      },
      { property: "og:title", content: "About Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "The story, purpose, values, philosophy, leadership and culture that shape Lighthouse Campus.",
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
        title="An educational institution shaped by purpose, relationships and a lasting commitment to learning."
        intro="Lighthouse Campus brings together learners, educators, families and communities within one coherent educational experience. Our identity is expressed through what students learn, how teachers guide them, how families participate and how the institution continues to grow with clarity and responsibility."
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
          eyebrow="An Institution Built Around Learning"
          title="A learning community where knowledge, character, curiosity, confidence and belonging develop together."
        />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Lighthouse Campus was created with a clear purpose: to establish a learning community where knowledge, character, curiosity, confidence and belonging develop together.</p>
          <p>Students remain at the centre of the institution. Teachers act as mentors and learning designers. Families participate as educational partners. Leadership creates the conditions in which learning and human development can flourish.</p>
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
        <SectionHeading eyebrow="One Identity Across Every Campus" title="Growth that preserves quality, culture and educational purpose" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Mohandessin Campus is the founding operational campus of Lighthouse Campus.</p>
          <p>As the institution grows, every future campus will share one educational philosophy, institutional voice and commitment to learners while remaining connected to its own local community.</p>
          <p>Growth will be thoughtful. Quality, culture and educational purpose will remain constant.</p>
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
