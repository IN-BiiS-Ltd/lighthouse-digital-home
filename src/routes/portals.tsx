import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section, ButtonLink, Eyebrow } from "@/components/blocks";
import portalBoard from "@/assets/portal-board.png.asset.json";
import portalExecutive from "@/assets/portal-executive.png.asset.json";
import portalSchool from "@/assets/portal-school.png.asset.json";
import portalTeacher from "@/assets/portal-teacher.png.asset.json";
import portalStaff from "@/assets/portal-staff.png.asset.json";
import portalParent from "@/assets/portal-parent.png.asset.json";
import portalStudent from "@/assets/portal-student.png.asset.json";

const EDUIOS_SIGNIN = "https://eduios.lighthousecampus.com/";
const EDUIOS_APPLY = "https://eduios.lighthousecampus.com/apply/lighthouse-campus";

type Portal = {
  title: string;
  description: string;
  image?: string;
};

const portals: Portal[] = [
  {
    title: "Board Portal",
    description: "Governance, board resolutions and executive oversight.",
    image: portalBoard.url,
  },
  {
    title: "Executive Portal",
    description: "Executive intelligence and institutional decisions.",
    image: portalExecutive.url,
  },
  {
    title: "School Portal",
    description:
      "Administration, admissions review, learners and the institutional model.",
    image: portalSchool.url,
  },
  {
    title: "Teacher Portal",
    description: "Classes, attendance, homework and learners.",
    image: portalTeacher.url,
  },
  {
    title: "Staff Portal",
    description: "Operations, tasks and day-to-day workflows.",
    image: portalStaff.url,
  },
  {
    title: "Parent Portal",
    description:
      "Your child's learning, attendance, messages and payments.",
    image: portalParent.url,
  },
  {
    title: "Student Portal",
    description: "Timetable, homework and learning.",
    image: portalStudent.url,
  },
];

export const Route = createFileRoute("/portals")({
  head: () => ({
    meta: [
      { title: "Portals — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Portals are secure windows into EDUIOS — the operating system running Lighthouse Campus. One sign-in opens the right portal for your role.",
      },
      { property: "og:title", content: "Portals — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "One sign-in opens the right EDUIOS portal for board, executive, school, teacher, staff, parent or student.",
      },
      {
        property: "og:url",
        content: "https://lighthousecampus.lovable.app/portals",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://lighthousecampus.lovable.app/portals" },
    ],
  }),
  component: PortalsPage,
});

function PortalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portals"
        title={
          <>
            Lighthouse Campus <span className="text-gold">·</span> Portals
          </>
        }
        intro="Portals are secure windows into EDUIOS — the operating system running Lighthouse Campus. One sign-in opens the right portal for your role."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Portals" }]}
      />

      <Section>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            to={EDUIOS_SIGNIN}
            variant="gold"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sign in to Lighthouse Campus portals"
            data-event="Portal CTA"
            data-event-prop-cta="Sign in"
          >
            Sign in · Portals
          </ButtonLink>
          <ButtonLink
            to={EDUIOS_APPLY}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apply for admission to Lighthouse Campus"
            data-event="Portal CTA"
            data-event-prop-cta="Apply"
          >
            New family? Apply for admission
          </ButtonLink>
        </div>

        <div className="mt-14">
          <Eyebrow>Seven portals · one door</Eyebrow>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portals.map((p) => (
              <li key={p.title}>
                <a
                  href={EDUIOS_SIGNIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title} — sign in to Lighthouse Campus portals`}
                  className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-e2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  data-event="Portal Card Click"
                  data-event-prop-portal={p.title}
                >
                  <span
                    className="flex size-28 items-center justify-center rounded-2xl bg-navy/95 ring-1 ring-gold/30 shadow-e2"
                    aria-hidden
                  >
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="size-24 object-contain"
                    />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium text-foreground group-hover:text-brand-blue">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-4 text-xs font-medium tracking-wide text-brand-blue/80 group-hover:text-gold">
                    Open portal →
                  </span>
                </a>
              </li>
            ))}
            <li className="lg:col-span-2">
              <div className="flex h-full flex-col justify-center rounded-2xl border border-gold/30 bg-card p-7 text-center sm:col-span-2 lg:col-span-2">
                <p className="eyebrow text-brand-blue">Digital Heart</p>
                <h2 className="mt-3 font-display text-balance text-2xl leading-tight text-foreground md:text-3xl">
                  Welcome to the Digital Heart of Lighthouse Campus
                </h2>
                <p className="mt-3 text-base font-medium text-gold">
                  One Institution. Seven Portals. One Exceptional Journey.
                </p>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    At Lighthouse Campus, every learner, parent, educator, staff member,
                    executive, and board member is connected through one trusted
                    gateway—creating a unified digital experience that empowers learning,
                    leadership, collaboration, and academic excellence.
                  </p>
                  <p>
                    More than a collection of portals, this is the digital heart of our
                    community: a secure, connected environment where every role has a
                    personalized journey, every interaction strengthens our community, and
                    every experience supports growth, innovation, and lifelong success.
                  </p>
                </div>
                <p className="mt-4 text-xs font-semibold tracking-wide text-foreground">
                  Secure • Connected • Intelligent • Designed for Excellence
                </p>
                <p className="mt-2 text-xs font-medium tracking-wide text-gold">
                  Guiding Minds. Inspiring Futures. Connecting Possibilities.
                </p>
              </div>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Sign-in resolves the right portal for your role automatically.
          </p>

          <div className="mt-10 rounded-2xl border border-gold/40 bg-sand/60 p-6 md:p-8 md:flex md:items-center md:justify-between md:gap-6">
            <div className="text-center md:text-left">
              <p className="eyebrow text-brand-blue">New to Lighthouse Campus?</p>
              <h3 className="mt-2 font-display text-xl leading-snug text-foreground md:text-2xl">
                You don't need an account to apply.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Admissions is open to new families. Start your application — no sign-in required.
              </p>
            </div>
            <div className="mt-4 flex justify-center md:mt-0 md:shrink-0">
              <ButtonLink
                to={EDUIOS_APPLY}
                variant="gold"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply for admission to Lighthouse Campus"
                data-event="Portal CTA"
                data-event-prop-cta="Apply callout"
              >
                Apply for admission
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onNavy className="justify-center">EDUIOS</Eyebrow>
          <p className="mt-6 text-balance text-2xl font-display leading-snug text-navy-foreground md:text-3xl">
            Powered by EDUIOS at eduios.lighthousecampus.com — the institutional operating system for the whole school.
          </p>
        </div>
      </Section>
    </>
  );
}
