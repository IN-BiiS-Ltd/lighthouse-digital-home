import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section, ButtonLink, Eyebrow } from "@/components/blocks";
import { LhIcon, type LhIconName } from "@/components/lighthouse-icons";

const EDUIOS_SIGNIN = "https://eduios.zanova.systems/";
const EDUIOS_APPLY = "https://eduios.zanova.systems/apply/lighthouse-campus";

const portals: { title: string; description: string; icon: LhIconName }[] = [
  {
    title: "Board Portal",
    description: "Governance, board resolutions and executive oversight.",
    icon: "constellation",
  },
  {
    title: "Executive Portal",
    description: "Executive intelligence and institutional decisions.",
    icon: "lens",
  },
  {
    title: "School Portal",
    description:
      "Administration, admissions review, learners and the institutional model.",
    icon: "arc",
  },
  {
    title: "Teacher Portal",
    description: "Classes, attendance, homework and learners.",
    icon: "ledger",
  },
  {
    title: "Staff Portal",
    description: "Operations, tasks and day-to-day workflows.",
    icon: "root",
  },
  {
    title: "Parent Portal",
    description:
      "Your child's learning, attendance, messages and payments.",
    icon: "dialogue",
  },
  {
    title: "Student Portal",
    description: "Timetable, homework and learning.",
    icon: "compass",
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
            data-event="Portal CTA"
            data-event-prop-cta="Apply"
          >
            Apply for admission
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
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-e2"
                  data-event="Portal Card Click"
                  data-event-prop-portal={p.title}
                >
                  <span className="lh-chip size-11 rounded-xl" aria-hidden>
                    <LhIcon name={p.icon} className="size-5" />
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
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Sign-in resolves the right portal for your role automatically.
          </p>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onNavy className="justify-center">EDUIOS</Eyebrow>
          <p className="mt-6 text-balance text-2xl font-display leading-snug text-navy-foreground md:text-3xl">
            Powered by EDUIOS at{" "}
            <a
              href={EDUIOS_SIGNIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline-offset-4 hover:underline"
            >
              eduios.zanova.systems
            </a>{" "}
            — the institutional operating system for the whole school.
          </p>
        </div>
      </Section>
    </>
  );
}
