import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  MediaRow,
  Eyebrow,
  ButtonLink,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ApplyToTeachDialog } from "@/components/apply-to-teach-dialog";
import leadershipImg from "@/assets/leadership.jpg?w=1200&format=jpg";
import leadershipImgAvif from "@/assets/leadership.jpg?w=480;800;1200&format=avif&as=srcset";
import leadershipImgWebp from "@/assets/leadership.jpg?w=480;800;1200&format=webp&as=srcset";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Teachers Wanted 2026/2027 — Careers at Lighthouse Campus" },
      {
        name: "description",
        content:
          "Lighthouse Campus is hiring teachers for 2026/2027 — Science, Maths, English, Arabic, Social Studies, Arts, PE, ICT and Music. Apply now.",
      },
      { property: "og:title", content: "Teachers Wanted 2026/2027 — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Join the Lighthouse Campus teaching team. Open teaching roles across nine subjects for the 2026/2027 academic year.",
      },
      { property: "og:url", content: "https://lighthousecampus.com/careers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://lighthousecampus.com/teachers-hiring-2026-2027.png",
      },
      {
        property: "og:image:secure_url",
        content: "https://lighthousecampus.com/teachers-hiring-2026-2027.png",
      },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1536" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Lighthouse Campus teacher recruitment 2026/2027" },
      {
        name: "twitter:image",
        content: "https://lighthousecampus.com/teachers-hiring-2026-2027.png",
      },
    ],

    links: [{ rel: "canonical", href: "https://lighthousecampus.com/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: "Teachers — Academic Year 2026/2027",
          description:
            "Lighthouse Campus is hiring teachers across Science, Mathematics, English Language, Arabic Language, Social Studies, Arts, Physical Education, ICT and Music for the 2026/2027 academic year.",
          employmentType: "FULL_TIME",
          datePosted: "2026-07-01",
          validThrough: "2027-12-31",
          hiringOrganization: {
            "@type": "EducationalOrganization",
            name: "Lighthouse Campus",
            sameAs: "https://lighthousecampus.com",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: "66 El-Zahraa, Ad Doqi, Dokki",
              addressLocality: "Giza",
              postalCode: "3751053",
              addressCountry: "EG",
            },
          },
          directApply: true,
          url: "https://lighthousecampus.com/careers",
        }),
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a community of mentors and lifelong learners."
        intro="Working at Lighthouse Campus means shaping an institution built to last — where educators are trusted, supported and given room to grow."
        sections={[
          { label: "We are hiring", to: "/careers#hiring" },
          { label: "Working here", to: "/careers" },
          { label: "Professional growth", to: "/careers#growth" },
          { label: "Opportunities", to: "/careers#opportunities" },
          { label: "Process", to: "/careers#process" },
        ]}
      />

      <Section tone="sand" id="hiring">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="order-2 lg:order-1">
            <Eyebrow>Teacher recruitment — 2026 / 2027</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight md:text-4xl">
              We are hiring passionate teachers.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lighthouse Campus is looking for inspiring, creative and committed
              teachers to help shape the leaders of the future — across three
              curricula: Cambridge Assessment International Education, the South
              Sudan National Curriculum and the Sudan National Curriculum.
            </p>

            <h3 className="mt-8 font-display text-lg font-medium">
              Subjects required
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                "Science",
                "Mathematics",
                "English Language",
                "Arts",
                "Social Studies",
                "Arabic Language",
                "Physical Education",
                "ICT",
                "Music",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-lg font-medium">
              What we look for
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                "A university qualification in the relevant subject.",
                "Teaching experience — international curricula preferred.",
                "Excellent communication skills and a genuine passion for education.",
                "The ability to inspire learners and lead a classroom with care.",
                "Commitment to the values and educational mission of the institution.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ApplyToTeachDialog />

              <ButtonLink
                to="tel:+201107030737"
                variant="outline"
                size="lg"
                aria-label="Call the recruitment team on +20 110 703 0737"
              >
                +20 110 703 0737
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Applications by email: <a href="mailto:ceo@lighthousecampus.com" className="underline underline-offset-4">ceo@lighthousecampus.com</a> · 66 El-Zahraa, Ad Doqi, Dokki, Giza Governorate 3751053, Egypt
            </p>
          </div>

          <figure className="order-1 lg:order-2">
            <a
              href="/teachers-hiring-2026-2027.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-lg transition hover:shadow-xl"
            >
              <img
                src="/teachers-hiring-2026-2027.png"
                alt="Teacher recruitment announcement for Lighthouse Campus, academic year 2026-2027, listing required subjects and contact details"
                width={1024}
                height={1536}
                loading="lazy"
                className="h-auto w-full"
              />
            </a>
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Open the poster in full size to read or share the announcement.
            </figcaption>
          </figure>
        </div>
      </Section>


      <Section>
        <MediaRow
          eyebrow="Working at Lighthouse"
          title="Educators, not employees"
          image={leadershipImg}
          imageAvif={leadershipImgAvif}
          imageWebp={leadershipImgWebp}
          imageAlt="Colleagues collaborating around a whiteboard"
        >
          <p>
            We hire people who love learning and love young people. Our teachers
            are mentors first, trusted to shape their craft within a shared
            culture of excellence and care.
          </p>
          <p>
            If you believe in a humane, ambitious education, you will find
            colleagues who share that belief.
          </p>
        </MediaRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Growth & Opportunity"
          title="Invested in the people who teach"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <div id="growth" className="scroll-mt-24">
            <FeatureCard title="Professional Growth">
              Ongoing development, mentorship and time to reflect — because great
              teaching is always evolving.
            </FeatureCard>
          </div>
          <div id="opportunities" className="scroll-mt-24">
            <FeatureCard title="Opportunities">
              Roles across teaching, leadership, wellbeing and campus operations
              as the community grows.
            </FeatureCard>
          </div>
          <div id="process" className="scroll-mt-24">
            <FeatureCard title="Recruitment Process">
              A thoughtful, respectful process designed to find genuine fit — for
              you and for the community.
            </FeatureCard>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="rounded-2xl border border-dashed border-gold/50 bg-card p-9 text-center">
          <Eyebrow className="justify-center">Now welcoming interest</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-medium md:text-3xl">
            No current vacancy that fits? Introduce yourself.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We are always glad to hear from exceptional educators and staff. Send
            us a note and tell us how you would contribute.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get in touch"
        title="Build something that lasts, with us"
        body="Reach out to our team to explore current and future opportunities at Lighthouse Campus."
        primary={{ to: "/contact", label: "Contact our team" }}
        secondary={{ to: "/about", label: "About the campus" }}
      />
    </>
  );
}
