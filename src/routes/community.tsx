import { createFileRoute } from "@tanstack/react-router";
import { ArchitecturalPage } from "@/components/architectural-page";
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
      { property: "og:description", content: "The Lighthouse Campus community — families, partners, future alumni and colleagues." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/community" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/community" }],
  }),
  component: Community,
});

function Community() {
  return (
    <ArchitecturalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Community" }],
        eyebrow: "Community",
        title: "One considered community, growing thoughtfully.",
        intro:
          "Lighthouse Campus is built through relationships — with families, partners, future alumni and colleagues. Community extends beyond the daily life of the school into considered partnerships and contribution to the wider community.",
        sections: [
          { label: "Circles", to: "#circles" },
          { label: "Domains", to: "#domains" },
          { label: "Commitments", to: "#commitments" },
        ],
        modules: [
          {
            kind: "pillars",
            id: "circles",
            eyebrow: "Three concentric circles",
            title: "How community is understood at Lighthouse.",
            description:
              "The Lighthouse community is layered — the campus, its partners and the world it belongs to.",
            pillars: [
              { numeral: "01", title: "The Campus Community", body: "Learners, families, teachers and colleagues who share the daily life of the school." },
              { numeral: "02", title: "The Partner Community", body: "Organisations, institutions and initiatives that share our values and extend our reach." },
              { numeral: "03", title: "The Wider Community", body: "The neighbourhoods, cities and society that Lighthouse contributes to and learns from." },
            ],
          },
          {
            kind: "bento",
            id: "domains",
            eyebrow: "Five domains",
            title: "Where community is practised.",
            description:
              "Considered relationships and contributions — announced as they are formalised, not promised in advance.",
            tiles: [
              { title: "Partnerships", body: "Considered relationships with organisations that share our values.", icon: <Handshake className="size-5" /> },
              { title: "Alumni", body: "The future Lighthouse alumni community.", icon: <GraduationCap className="size-5" /> },
              { title: "Community Programmes", body: "How the campus contributes beyond its walls.", icon: <HandHeart className="size-5" /> },
              { title: "Events", body: "Public moments that bring the community together.", icon: <CalendarDays className="size-5" /> },
              { title: "Careers", body: "Working at Lighthouse Campus.", icon: <Briefcase className="size-5" /> },
            ],
          },
          {
            kind: "principles",
            id: "commitments",
            eyebrow: "Our commitments",
            title: "How we work with partners and neighbours.",
            principles: [
              "Partnerships are considered, not opportunistic.",
              "Contribution precedes announcement.",
              "Alumni remain part of the community for life.",
              "Community programmes serve real needs, not appearances.",
              "Every partner is treated as an educational collaborator.",
              "Public events are hospitable — the campus is a good neighbour.",
            ],
          },
          {
            kind: "related",
            eyebrow: "Explore",
            title: "Continue into community.",
            links: [
              { title: "Partnerships", to: "/community/partnerships", body: "Considered relationships that shape our reach." },
              { title: "Alumni", to: "/community/alumni", body: "The future Lighthouse alumni community." },
              { title: "Careers", to: "/community/careers", body: "Working at Lighthouse Campus." },
            ],
          },
        ],
        cta: {
          title: "Get in touch.",
          body: "Contact us to explore partnership, contribution or careers at Lighthouse Campus.",
          primary: { to: "/contact", label: "Get in touch" },
          secondary: { to: "/careers", label: "Careers area" },
        },
      }}
    />
  );
}
