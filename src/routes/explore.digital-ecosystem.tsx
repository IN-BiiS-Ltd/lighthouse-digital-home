import { createFileRoute } from "@tanstack/react-router";
import {
  Users2,
  UserRound,
  BookOpen,
  Monitor,
  FileText,
  CalendarDays,
  Library,
  BookOpenCheck,
  Bus,
  Network,
  Smartphone,
  Cpu,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ServiceCard } from "@/components/service-card";
import type { ServiceStatus } from "@/components/status-pill";

export const Route = createFileRoute("/explore/digital-ecosystem")({
  head: () => ({
    meta: [
      { title: "A Growing Digital Ecosystem — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Connected digital services designed around the learner and the community. A transparent view of what is available today, what is in development and what is planned.",
      },
      { property: "og:title", content: "A Growing Digital Ecosystem" },
      {
        property: "og:description",
        content: "Connected services designed around the learner and the community.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/explore/digital-ecosystem" },
    ],
    links: [{ rel: "canonical", href: "/explore/digital-ecosystem" }],
  }),
  component: DigitalEcosystem,
});

interface Service {
  title: string;
  description: string;
  status: ServiceStatus;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Parent Portal",
    description: "A secure space for families to follow learning, communication and school life.",
    status: "In Development",
    icon: <Users2 className="size-5" />,
  },
  {
    title: "Student Portal",
    description: "A single home for learners to access their work, resources and feedback.",
    status: "In Development",
    icon: <UserRound className="size-5" />,
  },
  {
    title: "Teacher Workspace",
    description: "A calm, integrated workspace for planning, teaching, reflection and communication.",
    status: "In Development",
    icon: <BookOpen className="size-5" />,
  },
  {
    title: "Learning Platform",
    description: "A learning environment that supports inquiry, resources, collaboration and feedback.",
    status: "Planned",
    icon: <Monitor className="size-5" />,
  },
  {
    title: "Online Admissions",
    description: "A guided digital path for families to apply and communicate through every step.",
    status: "In Development",
    icon: <FileText className="size-5" />,
  },
  {
    title: "School Calendar",
    description: "A shared calendar of academic terms, events and community moments.",
    status: "Planned",
    icon: <CalendarDays className="size-5" />,
  },
  {
    title: "Resource Library",
    description: "Curated resources for learning, family reading and educator practice.",
    status: "Planned",
    icon: <Library className="size-5" />,
  },
  {
    title: "Library Services",
    description: "Access to the campus library catalogue, reservations and digital reading.",
    status: "Planned",
    icon: <BookOpenCheck className="size-5" />,
  },
  {
    title: "Transport Services",
    description: "Information and coordination for campus transport, when this service is offered.",
    status: "Planned",
    icon: <Bus className="size-5" />,
  },
  {
    title: "Alumni Network",
    description: "A future home for Lighthouse graduates to stay connected with the community.",
    status: "Planned",
    icon: <Network className="size-5" />,
  },
  {
    title: "Mobile Application",
    description: "A companion application bringing key services into one connected experience.",
    status: "Planned",
    icon: <Smartphone className="size-5" />,
  },
  {
    title: "AI-Supported Services",
    description: "Thoughtful use of AI to support analysis, organisation and insight — always in service of people.",
    status: "In Development",
    icon: <Cpu className="size-5" />,
  },
];

function DigitalEcosystem() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Explore" },
          { label: "Digital Ecosystem" },
        ]}
        eyebrow="A Growing Digital Ecosystem"
        title="Connected services, designed around the learner and the community."
        intro="Lighthouse Campus is building a secure digital environment that will connect learning, communication, admissions, resources and campus services over time. Each service is introduced only when it improves learning, communication or institutional understanding."
      />

      <Section>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeading
            eyebrow="Twelve services"
            title="What is available today — and what is on the way."
          />
          <ul
            className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
            aria-label="Status key"
          >
            <li className="flex items-center gap-2">
              <span aria-hidden className="size-2 rounded-full bg-brand-blue" />
              Available
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="size-2 rounded-full bg-gold" />
              In Development
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="size-2 rounded-full bg-muted-foreground/60" />
              Planned
            </li>
          </ul>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              status={s.status}
              icon={s.icon}
            />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How the ecosystem grows</Eyebrow>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-foreground md:text-3xl">
            The digital ecosystem will grow in stages, with every service
            introduced to improve access, communication, learning or
            institutional understanding.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Continue"
        title="See how technology serves education at Lighthouse"
        body="Discover the institutional model that keeps technology in the service of learning and people."
        primary={{ to: "/our-model/institutional-intelligence", label: "Institutional Intelligence" }}
        secondary={{ to: "/our-model/innovation", label: "Innovation with Purpose" }}
      />
    </>
  );
}
