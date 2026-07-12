import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Flag, Heart, Landmark, Users2 } from "lucide-react";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Pullquote,
  MediaRow,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import libraryImg from "@/assets/campus-library.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Our story, vision, mission, core values and educational philosophy — and the leadership stewarding Lighthouse Campus for the long term.",
      },
      { property: "og:title", content: "About — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "The story, philosophy and people behind Lighthouse Campus.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: <Heart className="size-5" />, title: "Belonging", body: "Every child is known. Community comes before everything else." },
  { icon: <Compass className="size-5" />, title: "Integrity", body: "Character formed through relationships, example and trust." },
  { icon: <Eye className="size-5" />, title: "Curiosity", body: "We protect the instinct to wonder, question and explore." },
  { icon: <Flag className="size-5" />, title: "Excellence", body: "High expectations held with genuine warmth and support." },
  { icon: <Users2 className="size-5" />, title: "Partnership", body: "Families and teachers, moving together for each learner." },
  { icon: <Landmark className="size-5" />, title: "Stewardship", body: "Decisions made for the long term, not the moment." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Lighthouse Campus"
        title="An institution designed to guide, to grow, and to endure."
        intro="Lighthouse Campus is the long-term digital and physical home of a learning community rooted in curiosity, character and belonging."
        sections={[
          { label: "Our Story", to: "/about" },
          { label: "Vision", to: "/about#vision" },
          { label: "Core Values", to: "/about#values" },
          { label: "Philosophy", to: "/about#philosophy" },
          { label: "Leadership", to: "/about#leadership" },
        ]}
      />

      {/* Purpose */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
              A school built as a community, not an institution.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Lighthouse Campus began with a question that too many schools stop
              asking: what does it truly mean to educate a young person well? Our
              answer places learning at the centre and students at the heart, and
              treats families as partners and teachers as mentors.
            </p>
            <p>
              Our first operational campus in Mohandessin is the foundation of a
              wider vision — a community designed to expand thoughtfully to
              future locations without losing the culture that makes it feel like
              home.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section tone="muted" id="vision">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-9">
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-5 font-display text-2xl leading-snug text-foreground md:text-[1.9rem]">
              A learning community that guides minds, inspires futures and
              connects possibilities — for generations of students.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-9" id="mission">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-5 font-display text-2xl leading-snug text-foreground md:text-[1.9rem]">
              To develop knowledgeable, confident and compassionate learners who
              are ready for university, work and a meaningful life.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section id="values">
        <SectionHeading
          eyebrow="Core Values"
          title="The principles that shape daily life"
          description="These are not slogans on a wall. They are the tests we apply to every decision, relationship and lesson on campus."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <FeatureCard key={v.title} title={v.title} icon={v.icon}>
              {v.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* Educational Philosophy */}
      <Section tone="sand" id="philosophy">
        <MediaRow
          eyebrow="Educational Philosophy"
          title="How we believe children learn best"
          image={libraryImg}
          imageAlt="Students reading and studying together in the campus library"
        >
          <p>
            Learning is most powerful when it is active, relational and full of
            meaning. We design experiences that invite students to think deeply,
            create with purpose and take ownership of their growth.
          </p>
          <p>
            Knowledge and character are not separate goals. As students master
            content, they also develop the habits — curiosity, resilience,
            empathy and judgement — that make knowledge worth having.
          </p>
        </MediaRow>
      </Section>

      {/* Leadership & Governance */}
      <Section id="leadership">
        <SectionHeading
          eyebrow="Leadership & Governance"
          title="Stewards of a long-term institution"
          description="Lighthouse Campus is guided by educators and leaders committed to careful, principled growth — and to protecting the culture that makes learning thrive."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-medium">Leadership</h3>
            <p className="mt-3 text-muted-foreground">
              Experienced educators lead teaching, wellbeing and campus life with
              a shared commitment to every learner.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium">Governance</h3>
            <p className="mt-3 text-muted-foreground">
              Clear, accountable governance ensures decisions serve students and
              families first, and the institution for the long term.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium">Strategic Direction</h3>
            <p className="mt-3 text-muted-foreground">
              A deliberate roadmap for growth across future campuses — expanding
              access while preserving quality and culture.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <Pullquote
          onNavy
          quote="We are building an institution that will still feel human, still feel like home, long after any single class has graduated."
          attribution="Campus Leadership"
        />
      </Section>

      <CtaBand
        title="Come and see the community for yourself"
        body="The clearest way to understand Lighthouse Campus is to visit. We would be glad to welcome your family."
      />
    </>
  );
}
