import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Section, SectionHeading, SmartLink } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";
import exteriorImg from "@/assets/campus-exterior.jpg";

export const Route = createFileRoute("/campuses")({
  head: () => ({
    meta: [
      { title: "Our Campuses — Lighthouse Campus" },
      {
        name: "description",
        content:
          "One community, growing across locations. Mohandessin is our first operational campus, with future campuses planned across Egypt and internationally.",
      },
      { property: "og:title", content: "Our Campuses — Lighthouse Campus" },
      {
        property: "og:description",
        content: "One community, growing across locations.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campuses" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campuses" }],
  }),
  component: Campuses,
});

const campuses = [
  {
    name: "Mohandessin Campus",
    location: "Mohandessin, Giza · Greater Cairo",
    status: "Operational",
    to: "/campuses/mohandessin",
    body: "Our first operational campus and the foundation of the Lighthouse community.",
    active: true,
  },
  {
    name: "Sheikh Zayed Campus",
    location: "Sheikh Zayed City · Greater Cairo",
    status: "Planned",
    body: "Planned as part of our thoughtful, long-term expansion.",
    active: false,
  },
  {
    name: "New Cairo Campus",
    location: "New Cairo · Greater Cairo",
    status: "Planned",
    body: "A future home for the Lighthouse community in eastern Cairo.",
    active: false,
  },
  {
    name: "International Campuses",
    location: "Beyond Egypt",
    status: "Future vision",
    body: "Our architecture is designed to welcome campuses internationally, over time.",
    active: false,
  },
];

function Campuses() {
  return (
    <>
      <PageHero
        eyebrow="Our Campuses"
        title="One community, designed to grow across locations."
        intro="Lighthouse Campus is built for the long term. As we expand, every campus will share the same culture, philosophy and commitment to students."
      />

      <Section>
        <SectionHeading
          eyebrow="Where we are"
          title="Beginning in Mohandessin"
          description="Our first campus is open and thriving. Future campuses will join the community without redesign — the same promise, in new places."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {campuses.map((c) => {
            const Card = (
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-8 transition-all duration-200",
                  c.active
                    ? "border-gold/50 bg-card hover:shadow-[0_16px_50px_-24px_rgba(11,29,58,0.35)]"
                    : "border-border bg-secondary",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      "eyebrow rounded-full px-3 py-1",
                      c.active
                        ? "bg-gold/15 text-gold-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {c.status}
                  </span>
                  {c.active ? (
                    <ArrowRight className="size-5 text-brand-blue" aria-hidden />
                  ) : null}
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium">
                  {c.name}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-sky" aria-hidden />
                  {c.location}
                </p>
                <p className="mt-4 flex-1 text-muted-foreground">{c.body}</p>
                {c.active ? (
                  <span className="mt-6 font-semibold text-brand-blue">
                    View campus →
                  </span>
                ) : (
                  <span className="mt-6 text-sm text-muted-foreground">
                    Details to follow
                  </span>
                )}
              </div>
            );
            return c.active && c.to ? (
              <SmartLink key={c.name} to={c.to} className="block">
                {Card}
              </SmartLink>
            ) : (
              <div key={c.name}>{Card}</div>
            );
          })}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={exteriorImg}
              alt="A modern school campus exterior"
              loading="lazy"
              width={1600}
              height={1008}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Built to scale"
              title="Growth without compromise"
              description="Our institutional platform — physical and digital — is designed so that adding a campus never means diluting quality, culture or care. Each location inherits the same standards and the same heart."
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Visit our Mohandessin campus"
        body="Experience the first Lighthouse campus and imagine what is to come."
        primary={{ to: "/campuses/mohandessin", label: "Explore Mohandessin" }}
        secondary={{ to: "/contact", label: "Schedule a visit" }}
      />
    </>
  );
}
