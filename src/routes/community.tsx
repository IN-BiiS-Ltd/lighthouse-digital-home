import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/components/internal-page";
import { Handshake, GraduationCap, HandHeart, CalendarDays, Briefcase } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community | Partnerships, Alumni, Programmes and Careers | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Considered partnerships, a future alumni community, community programmes, events and careers at Lighthouse Campus.",
      },
      { property: "og:title", content: "Community | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "The Lighthouse Campus community — families, partners, future alumni and colleagues.",
      },
      { property: "og:url", content: "/community" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: Community,
});

function Community() {
  return (
    <OverviewPage
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Community" }]}
      eyebrow="Community"
      title="One considered community, growing thoughtfully."
      intro="Lighthouse Campus is built through relationships with families, partners, future alumni and colleagues."
      paragraphs={[
        "Community at Lighthouse Campus extends beyond the daily life of the school. It includes considered partnerships, contribution to the wider community and the long-term relationship with graduates.",
        "The alumni community is being prepared for the first graduating cohort. Partnerships and programmes are announced as they are formalised.",
      ]}
      cards={[
        { title: "Partnerships", to: "/community/partnerships", body: "Considered relationships with organisations that share our values.", icon: <Handshake className="size-5" /> },
        { title: "Alumni", to: "/community/alumni", body: "The future Lighthouse alumni community.", icon: <GraduationCap className="size-5" /> },
        { title: "Community Programmes", to: "/community/community-programmes", body: "How the campus contributes beyond its walls.", icon: <HandHeart className="size-5" /> },
        { title: "Events", to: "/community/events", body: "Public moments that bring the community together.", icon: <CalendarDays className="size-5" /> },
        { title: "Careers", to: "/community/careers", body: "Working at Lighthouse Campus.", icon: <Briefcase className="size-5" /> },
      ]}
      cta={{
        title: "Get in touch.",
        body: "Contact us to explore partnership, contribution or careers at Lighthouse Campus.",
        primary: { to: "/contact", label: "Get in touch" },
        secondary: { to: "/careers", label: "Careers area" },
      }}
    />
  );
}
