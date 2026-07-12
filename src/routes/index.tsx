import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Microscope,
  Palette,
  Users,
} from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  ButtonLink,
  FeatureCard,
  Stat,
  Pullquote,
  MediaRow,
  SmartLink,
} from "@/components/blocks";
import { NarrativeFlow } from "@/components/page-hero";
import heroImg from "@/assets/hero-learning.jpg";
import stemImg from "@/assets/academic-stem.jpg";
import studentLifeImg from "@/assets/student-life.jpg";
import parentImg from "@/assets/parent-partnership.jpg";
import curiosityIcon from "@/assets/value-curiosity.png.asset.json";
import belongingIcon from "@/assets/value-belonging.png.asset.json";
import integrityIcon from "@/assets/value-integrity.png.asset.json";
import excellenceIcon from "@/assets/value-excellence.png.asset.json";
import libraryImg from "@/assets/campus-library.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lighthouse Campus — Guiding Minds. Inspiring Futures." },
      {
        name: "description",
        content:
          "An international learning community in Cairo where students remain at the centre. Discover our educational philosophy, learning journey, campus life and admissions.",
      },
      { property: "og:title", content: "Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Guiding minds. Inspiring futures. Connecting possibilities. An international learning community where students remain at the centre.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const values = [
  {
    icon: <Lightbulb className="size-5" />,
    title: "Curiosity",
    body: "We protect the instinct to wonder, question and explore — the engine of lifelong learning.",
  },
  {
    icon: <HeartHandshake className="size-5" />,
    title: "Belonging",
    body: "Every child is known by name. A campus is a community before it is anything else.",
  },
  {
    icon: <Compass className="size-5" />,
    title: "Integrity",
    body: "Character is taught the way it is learned — through relationships, example and trust.",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Excellence",
    body: "High expectations held with warmth. Ambition matched by genuine support.",
  },
];

function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={heroImg}
          alt="Students in discussion with a mentor teacher in a bright classroom"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklab, var(--navy) 92%, transparent) 0%, color-mix(in oklab, var(--navy) 78%, transparent) 45%, color-mix(in oklab, var(--navy) 30%, transparent) 100%)",
          }}
        />
        <Container className="relative flex min-h-[78vh] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <Eyebrow onNavy>Lighthouse Campus · Mohandessin</Eyebrow>
            <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.04] tracking-tight md:text-6xl lg:text-[4.2rem]">
              A place where learning leads and every student is seen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85 md:text-xl">
              Guiding minds. Inspiring futures. Connecting possibilities. An
              international learning community built around curiosity, character
              and belonging.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/admissions" variant="gold" size="lg">
                Begin the admissions journey
              </ButtonLink>
              <ButtonLink to="/about" variant="outline-light" size="lg">
                Discover our story
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Our Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-[1.12] md:text-[2.75rem]">
              An institution built to last, and to matter.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Lighthouse Campus was founded on a simple conviction: that a school
              should feel like a living learning community, not an institution
              that processes children. Our first campus in Mohandessin is the
              beginning of a long-term commitment to education in Egypt and
              beyond.
            </p>
            <p>
              We are designed to grow — thoughtfully, and without losing what
              matters. As new campuses join the community, the promise remains
              constant: learning at the centre, students at the heart, families
              as partners and teachers as mentors.
            </p>
            <SmartLink
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-brand-blue hover:underline"
            >
              Read our full story →
            </SmartLink>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------- Educational values */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Educational Philosophy"
          title="How we believe children learn best"
          description="Every decision on campus is measured against a small set of enduring principles. They shape our classrooms, our conversations and our community."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <FeatureCard key={v.title} title={v.title} icon={v.icon}>
              {v.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------- Learning Journey band */}
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionHeading
            onNavy
            eyebrow="The Learning Journey"
            title="One continuous path, from first wonder to graduation."
            description="A coherent journey through five stages — each designed for who a child is becoming, not only what they need to know."
          />
          <div className="lg:pb-2">
            <ButtonLink to="/learning-journey" variant="gold" size="md">
              Explore the journey
            </ButtonLink>
          </div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-navy-foreground/12 bg-navy-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Early Years", "Wonder & play"],
            ["Primary", "Foundations"],
            ["Preparatory", "Independence"],
            ["Secondary", "Scholarship"],
            ["Graduation", "Readiness"],
          ].map(([stage, note], i) => (
            <SmartLink
              key={stage}
              to="/learning-journey"
              className="group bg-navy p-7 transition-colors hover:bg-navy-foreground/[0.06]"
            >
              <span className="font-display text-4xl text-gold/80">
                0{i + 1}
              </span>
              <p className="mt-4 font-display text-xl text-navy-foreground">
                {stage}
              </p>
              <p className="mt-1 text-sm text-navy-foreground/60">{note}</p>
            </SmartLink>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------- Academic experience rows */}
      <Section>
        <SectionHeading
          eyebrow="Academic Experience"
          title="Rigorous, human, and built for a changing world"
          description="A curriculum that develops deep knowledge and the capabilities that endure — thinking, creating, collaborating and leading."
        />
        <div className="mt-16 space-y-20">
          <MediaRow
            eyebrow="STEM & Innovation"
            title="Curiosity turned into capability"
            image={stemImg}
            imageAlt="Secondary students conducting a science experiment together in a laboratory"
            action={
              <ButtonLink to="/academic-experience" variant="outline" size="md">
                See the academic programme
              </ButtonLink>
            }
          >
            <p>
              Students learn to investigate, test ideas and build. From early
              scientific play to advanced laboratory work, we treat questions as
              the starting point of real understanding.
            </p>
          </MediaRow>
          <MediaRow
            reverse
            eyebrow="Reading & Research"
            title="A culture of depth and discovery"
            image={libraryImg}
            imageAlt="Students reading and collaborating in a bright modern library"
          >
            <p>
              Our library sits at the heart of campus life — a calm space for
              reading, research and quiet collaboration, where independent
              thinking is nurtured and celebrated.
            </p>
          </MediaRow>
        </div>
      </Section>

      {/* --------------------------------------------------- Why Lighthouse */}
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Why Lighthouse Campus"
              title="A calm, ambitious environment for growth"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <FeatureCard title="Students at the centre" icon={<Users className="size-5" />}>
              Learning is designed around real children — their interests,
              development and wellbeing.
            </FeatureCard>
            <FeatureCard title="Teachers as mentors" icon={<BookOpen className="size-5" />}>
              Small, trusting relationships where every learner is known,
              challenged and supported.
            </FeatureCard>
            <FeatureCard title="Creativity & the arts" icon={<Palette className="size-5" />}>
              Expression, discipline and joy — from the early years through
              senior performance and studio work.
            </FeatureCard>
            <FeatureCard title="Discovery & science" icon={<Microscope className="size-5" />}>
              Hands-on inquiry that builds confidence, precision and a habit of
              asking better questions.
            </FeatureCard>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ Pullquote */}
      <Section tone="navy">
        <Pullquote
          onNavy
          quote="A campus is a living learning community. When students feel they belong, they are free to become who they are capable of being."
          attribution="The Lighthouse Educational Philosophy"
        />
      </Section>

      {/* ------------------------------------- Student life + Parent rows */}
      <Section>
        <div className="space-y-20">
          <MediaRow
            eyebrow="Student Life"
            title="Belonging beyond the classroom"
            image={studentLifeImg}
            imageAlt="Young children exploring art materials with a teacher in a bright early-years classroom"
            action={
              <ButtonLink to="/student-life" variant="outline" size="md">
                Explore student life
              </ButtonLink>
            }
          >
            <p>
              Clubs, athletics, the arts, service and leadership give every
              student a place to contribute and grow. Wellbeing is woven through
              everything we do.
            </p>
          </MediaRow>
          <MediaRow
            reverse
            eyebrow="Parent Partnership"
            title="Families as educational partners"
            image={parentImg}
            imageAlt="A parent and teacher reviewing a student's work together"
            action={
              <ButtonLink to="/parents" variant="outline" size="md">
                Discover the partnership
              </ButtonLink>
            }
          >
            <p>
              Learning flourishes when home and school move together. We keep
              communication open, honest and human — and treat parents as
              essential members of the community.
            </p>
          </MediaRow>
        </div>
      </Section>

      {/* --------------------------------------------------------- Stats */}
      <Section tone="muted">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="5" label="Stages across the learning journey" />
          <Stat value="1:1" label="Every student known by their mentors" />
          <Stat value="Mohandessin" label="Our first operational campus" />
          <Stat value="∞" label="Designed to grow across future campuses" />
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="eyebrow mb-4 text-muted-foreground">
            How every page unfolds
          </p>
          <NarrativeFlow />
        </div>
      </Section>

      {/* --------------------------------------------------- Admissions CTA */}
      <section className="bg-navy text-navy-foreground">
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow onNavy className="justify-center">
              Visit the Campus
            </Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight md:text-5xl">
              The best way to understand Lighthouse is to walk through it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-navy-foreground/80">
              Meet our people, see our spaces and imagine your child here. We
              would be glad to welcome your family to Mohandessin Campus.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink to="/contact" variant="gold" size="lg">
                Schedule a visit
              </ButtonLink>
              <ButtonLink to="/admissions" variant="outline-light" size="lg">
                Admissions overview
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
