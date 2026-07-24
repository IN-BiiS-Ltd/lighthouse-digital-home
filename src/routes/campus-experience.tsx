import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/components/internal-page";
import campusTransparent from "@/assets/lighthouse-transparent-logo.png.asset.json";
import { Building2, BookOpen, FlaskConical, Lightbulb, Dumbbell, UtensilsCrossed, Stethoscope, ShieldCheck, Bus, Compass, Trees, Users } from "lucide-react";

export const Route = createFileRoute("/campus-experience")({
  head: () => ({
    meta: [
      { title: "Campus | Purposeful Spaces at Lighthouse Campus" },
      {
        name: "description",
        content:
          "Every space serves the learner. Classrooms, library, laboratories, creative spaces, sports, dining, health, safety and transportation at Lighthouse Campus.",
      },
      { property: "og:title", content: "Campus | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Environments designed to support learning, relationships, safety and wellbeing at Lighthouse Campus.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience" }],
  }),
  component: Campus,
});

function Campus() {
  return (
    <OverviewPage
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Campus" }]}
      eyebrow="Campus Experience"
      title="Every space serves the learner."
      intro="Environments at Lighthouse Campus are designed to support learning, relationships, safety and wellbeing — deliberately, and with care."
      paragraphs={[
        "The campus is one of the most important educators in the school. Each space is planned so that daily life supports focused work, dialogue, safety and community.",
        "Photography on this website may include conceptual imagery. Official campus photography is added as spaces are completed.",
      ]}
      cards={[
        { title: "Campus Overview", to: "/campus-experience/overview", body: "How the campus is organised around learning.", icon: <Compass className="size-5" /> },
        { title: "Classrooms", to: "/campus-experience/classrooms", body: "Where daily learning happens.", icon: <Building2 className="size-5" /> },
        { title: "Library", to: "/campus-experience/library", body: "A place for reading, thinking and quiet.", icon: <BookOpen className="size-5" /> },
        { title: "Laboratories", to: "/campus-experience/laboratories", body: "Where inquiry becomes practice.", icon: <FlaskConical className="size-5" /> },
        { title: "Innovation & Creative Spaces", to: "/campus-experience/innovation-creative-spaces", body: "Where ideas are made.", icon: <Lightbulb className="size-5" /> },
        { title: "Sports Facilities", to: "/campus-experience/sports-facilities", body: "Spaces for healthy, purposeful movement.", icon: <Dumbbell className="size-5" /> },
        { title: "Dining", to: "/campus-experience/dining", body: "A daily rhythm of shared meals.", icon: <UtensilsCrossed className="size-5" /> },
        { title: "Health Services", to: "/campus-experience/health-services", body: "Care available on campus.", icon: <Stethoscope className="size-5" /> },
        { title: "Safety", to: "/campus-experience/safety", body: "A safe and orderly campus.", icon: <ShieldCheck className="size-5" /> },
        { title: "Transportation", to: "/campus-experience/transportation", body: "Safe, considered journeys.", icon: <Bus className="size-5" /> },
        { title: "Outdoor Learning & Gardens", to: "/campus-experience/outdoor-learning", body: "Courtyards, gardens and open-air learning.", icon: <Trees className="size-5" /> },
        { title: "Assembly & Community Hall", to: "/campus-experience/assembly-hall", body: "Where the whole campus comes together.", icon: <Users className="size-5" /> },
      ]}
      cta={{
        title: "Come and see the campus.",
        body: "A visit is the clearest way to understand how spaces support learning.",
        primary: { to: "/contact", label: "Schedule a visit" },
        secondary: { to: "/admissions", label: "Admissions overview" },
      }}
      floatingMark={
        <div className="pointer-events-none absolute right-[24%] top-[16%] md:right-[28%] md:top-[16%] lg:right-[32%] lg:top-[16%]">
          <div className="relative h-24 w-24 lg:h-28 lg:w-28">
            <span className="absolute inset-0 rounded-full bg-gold/40 blur-[20px] animate-[halo-breathe_3s_ease-in-out_infinite]" aria-hidden="true" />
            <span className="absolute inset-0 rounded-full bg-gold/15 blur-[34px] animate-[halo-breathe_3s_ease-in-out_infinite_reverse]" aria-hidden="true" />
            <img
              src={campusTransparent.url}
              alt=""
              className="relative h-full w-full object-contain opacity-100 drop-shadow-[0_0_28px_rgba(212,175,55,0.95)] animate-[campus-emblem-float_4s_ease-in-out_infinite]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      }
    />
  );
}
