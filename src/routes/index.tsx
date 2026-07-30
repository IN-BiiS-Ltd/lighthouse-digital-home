import { assetUrl } from "@/lib/asset-url";
import { createFileRoute } from "@tanstack/react-router";
import teachersIcon from "@/assets/home-teachers-mentors.png.asset.json";
import studentsIcon from "@/assets/home-students-centre.png.asset.json";
import discoveryIcon from "@/assets/home-discovery-science.png.asset.json";
import creativityIcon from "@/assets/home-creativity-arts.png.asset.json";
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
  BrandLogo,
} from "@/components/blocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NarrativeFlow } from "@/components/page-hero";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { WatermarkFloat } from "@/components/watermark-float";
import { HeroEmblem } from "@/components/hero-emblem";
import { ShareBar } from "@/components/share-bar";
import heroImg from "@/assets/photo-classroom-primary.jpg?w=1600&format=jpg";
import heroAvif from "@/assets/photo-classroom-primary.jpg?w=640;960;1280;1600&format=avif&as=srcset";
import heroWebp from "@/assets/photo-classroom-primary.jpg?w=640;960;1280;1600&format=webp&as=srcset";
import stemImg from "@/assets/photo-teacher-portrait.jpg";
import studentLifeImg from "@/assets/photo-classroom-primary.jpg";
import parentImg from "@/assets/parent-partnership.jpg";
import libraryImg from "@/assets/photo-library.jpg";
import curiosityIcon from "@/assets/value-curiosity.png.asset.json";
import belongingIcon from "@/assets/value-belonging.png.asset.json";
import integrityIcon from "@/assets/value-integrity.png.asset.json";
import excellenceIcon from "@/assets/value-excellence.png.asset.json";
import heroVideo from "@/assets/hero-cinematic.mp4.asset.json";
import { useLang } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lighthouse Campus — Guiding Minds. Inspiring Futures." },
      {
        name: "description",
        content:
          "An independent international learning community in Dokki, Giza. Explore our philosophy, learning journey, campus life and admissions.",
      },
      { property: "og:title", content: "Lighthouse Campus — Guiding Minds. Inspiring Futures." },
      {
        property: "og:description",
        content:
          "Guiding minds. Inspiring futures. Connecting possibilities. An international learning community where students remain at the centre.",
      },
      { property: "og:url", content: "https://lighthousecampus.com/" },
      { property: "og:image", content: "https://lighthousecampus.com/lighthouse-social-card.webp?v=3" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Lighthouse Campus — Dokki, Giza" },
      { property: "og:image:type", content: "image/webp" },
      { name: "twitter:image", content: "https://lighthousecampus.com/lighthouse-social-card.webp?v=3" },
      { name: "twitter:image:alt", content: "Lighthouse Campus — Dokki, Giza" },
    ],
    links: [
      { rel: "canonical", href: "https://lighthousecampus.com/" },
      // Preload the LCP hero image so mobile FCP/LCP kick in earlier.
      // Preload the WebP variant with imagesrcset so the browser picks the smallest source.
      {
        rel: "preload",
        as: "image",
        href: heroImg,
        imagesrcset: heroWebp,
        imagesizes: "100vw",
        fetchpriority: "high",
      } as unknown as { rel: string },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: parentFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const parentFaqs = [
  {
    q: "Is registration open for the 2026 / 2027 academic year?",
    a: "Yes. Registration for the 2026 / 2027 academic year is open for Early Years through Secondary. Families can apply online, or schedule a campus visit in Dokki, Giza before applying.",
  },
  {
    q: "Where is Lighthouse Campus located?",
    a: "Our first operational campus is at 66 El-Zahraa, Ad Doqi, Dokki, Giza Governorate 3751053, Egypt. You can reach the admissions team on +20 110 703 0737.",
  },
  {
    q: "What makes Lighthouse different from other schools?",
    a: "Lighthouse is an independent institution designed around one continuous learning journey — five stages, each built for who a child is becoming. Every student is known by name by their mentors, and families are treated as educational partners rather than recipients of reports.",
  },
  {
    q: "How does the school communicate with parents?",
    a: "Parents receive structured, honest communication through the parent portal, scheduled mentor conversations and clear termly reporting — so you always know how your child is progressing academically, socially and emotionally.",
  },
  {
    q: "How do I visit the campus before deciding?",
    a: "Schedule a visit through the contact page or by phone. You will meet our people, see the learning spaces and ask the questions that matter to your family before any commitment.",
  },
];

const parentPromises = [
  {
    title: "Your child is known by name",
    body: "Mentor-led groups kept deliberately small, so progress, wellbeing and character are followed by a person — not a spreadsheet.",
  },
  {
    title: "Safeguarding without compromise",
    body: "Vetted staff, supervised movement, controlled access and clear health services. Safety is a system on this campus, not a promise.",
  },
  {
    title: "You are never left guessing",
    body: "Transparent reporting and open mentor conversations. You will know how your child is doing before you have to ask.",
  },
  {
    title: "Ambition held with warmth",
    body: "High academic expectations paired with real support — challenge that builds confidence instead of anxiety.",
  },
];


const values = [
  {
    img: assetUrl(curiosityIcon),
    title: "Curiosity",
    body: "We protect the instinct to wonder, question and explore — the engine of lifelong learning.",
  },
  {
    img: assetUrl(belongingIcon),
    title: "Belonging",
    body: "Every child is known by name. A campus is a community before it is anything else.",
  },
  {
    img: assetUrl(integrityIcon),
    title: "Integrity",
    body: "Character is taught the way it is learned — through relationships, example and trust.",
  },
  {
    img: assetUrl(excellenceIcon),
    title: "Excellence",
    body: "High expectations held with warmth. Ambition matched by genuine support.",
  },
];

function Home() {
  const { t, dir } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion — keep the still hero image.
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Skip autoplay on narrow viewports to save data on mobile.
    const narrow = window.matchMedia("(max-width: 640px)").matches;
    if (reduced || narrow) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {/* ignore autoplay rejection */});
  }, []);

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <picture>
          <source type="image/avif" srcSet={heroAvif} sizes="100vw" />
          <source type="image/webp" srcSet={heroWebp} sizes="100vw" />
          <img
            src={heroImg}
            alt="Diverse group of Lighthouse Campus students — Sudanese, Arab and African — exploring an illustrated book together in a warm sunlit classroom"
            width={1600}
            height={1104}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-10 size-full object-cover animate-ken-burns"
          />
        </picture>
        {/* Cinematic video layer — fades in after loadeddata, hidden on reduced-motion / small screens */}
        <video
          ref={videoRef}
          src={heroVideo.url}
          poster={heroImg}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          onLoadedData={() => setVideoReady(true)}
          className={`absolute inset-0 -z-10 size-full object-cover transition-opacity duration-[1200ms] ease-out motion-reduce:hidden ${videoReady ? "opacity-100" : "opacity-0"}`}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklab, var(--navy) 92%, transparent) 0%, color-mix(in oklab, var(--navy) 78%, transparent) 45%, color-mix(in oklab, var(--navy) 30%, transparent) 100%)",
          }}
        />
        <WatermarkFloat side={dir === "rtl" ? "left" : "right"} />
        <BrandAtmosphere density={1.1} />
        <HeroEmblem />
        <Container className="relative flex min-h-[78vh] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <div className="mb-8 animate-[fade-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
              <BrandLogo
                variant="dark"
                className="h-24 w-24 object-contain drop-shadow-[0_10px_40px_color-mix(in_oklab,var(--gold)_35%,transparent)] md:h-32 md:w-32"
                alt=""
              />
            </div>
            <div className="animate-[fade-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
              <Eyebrow onNavy>{t("home.eyebrow")}</Eyebrow>
            </div>
            <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.04] tracking-tight md:text-6xl lg:text-[4.2rem] animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
              {t("home.hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85 md:text-xl animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
              <ButtonLink
                to="https://eduios.lighthousecampus.com/apply/lighthouse-campus"
                variant="gold"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply for admission to Lighthouse Campus"
                data-event="CTA Click"
                data-event-prop-cta="Apply"
                data-event-prop-location="Home Hero"
              >
                {t("home.hero.cta.admissions")}
              </ButtonLink>
              <ButtonLink
                to="/admissions"
                variant="outline-light"
                size="lg"
                data-event="CTA Click"
                data-event-prop-cta="Admissions info"
                data-event-prop-location="Home Hero"
              >
                Admissions overview
              </ButtonLink>
              <ButtonLink
                to="/about"
                variant="outline-light"
                size="lg"
                data-event="CTA Click"
                data-event-prop-cta="About"
                data-event-prop-location="Home Hero"
              >
                {t("home.hero.cta.about")}
              </ButtonLink>
            </div>
          </div>

        </Container>
      </section>

      {/* ------------------------------------------ Admissions spotlight */}
      <section className="border-b border-border bg-sand/60">
        <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-foreground">
              <span aria-hidden className="size-2 rounded-full bg-gold" />
              Registration open — 2026 / 2027
            </span>
            <p className="max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground">
              Early Years through Secondary. Limited places per mentor group, so
              families are encouraged to visit and apply early.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              to="https://eduios.lighthousecampus.com/apply/lighthouse-campus"
              variant="gold"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
              data-event="CTA Click"
              data-event-prop-cta="Apply"
              data-event-prop-location="Home Admissions Band"
            >
              Apply online
            </ButtonLink>
            <ButtonLink to="/admissions/academic-year-announcements" variant="outline" size="md">
              Key dates
            </ButtonLink>
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
              that processes children. Our first campus in Dokki, Giza is the
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
            <div
              key={v.title}
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
              className="cine-card group rounded-xl border border-border bg-card p-7"
            >
              <img
                src={v.img}
                alt=""
                width={112}
                height={112}
                loading="lazy"
                className="mb-5 size-20 object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-[0_10px_20px_color-mix(in_oklab,var(--gold)_45%,transparent)]"
              />
              <h3 className="font-display text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-brand-blue">
                {v.title}
              </h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </div>
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
            imageAlt="A Sudanese teacher mentoring two Lighthouse students — one Arab, one African — through a science experiment with brass instruments"
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
            imageAlt="Lighthouse secondary students reading quietly at long oak tables in the campus library, warm afternoon light through arched windows"
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
            <div className="mt-6">
              <ButtonLink to="/our-model" variant="outline" size="md">
                Explore Our Model
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <FeatureCard title="Students at the centre" icon={<img src={studentsIcon.url} alt="" className="size-10 object-contain" />}>
              Learning is designed around real children — their interests,
              development and wellbeing.
            </FeatureCard>
            <FeatureCard title="Teachers as mentors" icon={<img src={teachersIcon.url} alt="" className="size-10 object-contain" />}>
              Small, trusting relationships where every learner is known,
              challenged and supported.
            </FeatureCard>
            <FeatureCard title="Creativity & the arts" icon={<img src={creativityIcon.url} alt="" className="size-10 object-contain" />}>
              Expression, discipline and joy — from the early years through
              senior performance and studio work.
            </FeatureCard>
            <FeatureCard title="Discovery & science" icon={<img src={discoveryIcon.url} alt="" className="size-10 object-contain" />}>
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
            imageAlt="Lighthouse primary students learning together as a diverse community — belonging is where learning begins"
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
          <Stat value="Dokki, Giza" label="Our first operational campus" />
          <Stat value="∞" label="Designed to grow across future campuses" />
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="eyebrow mb-4 text-muted-foreground">
            How every page unfolds
          </p>
          <NarrativeFlow />
        </div>
      </Section>

      {/* ------------------------------------------ Promise to parents */}
      <Section>
        <SectionHeading
          eyebrow="Our Promise to Families"
          title="What you can expect from us, in plain language"
          description="Choosing a school is a decision about trust. These are the commitments we hold ourselves to every single day."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {parentPromises.map((p, i) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-7">
              <span className="font-display text-3xl text-gold/80">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ FAQ */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Questions Families Ask First"
              title="Clear answers, before you decide"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/admissions/faq" variant="outline" size="md">
                Full admissions FAQ
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" size="md">
                Talk to admissions
              </ButtonLink>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {parentFaqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-start font-display text-lg font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.975rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              would be glad to welcome your family to Lighthouse Campus.
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
      <ShareBar title="Lighthouse Campus — Guiding Minds. Inspiring Futures." path="/" />
    </>
  );
}
