import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/campus-experience_/assembly-hall")({
  head: () => ({
    meta: [
      { title: "Assembly & Community Hall | Campus | Lighthouse Campus" },
      { name: "description", content: "A gathering space for assemblies, performances and moments that bring the campus community together." },
      { property: "og:title", content: "Assembly & Community Hall | Campus | Lighthouse Campus" },
      { property: "og:description", content: "A gathering space for assemblies, performances and moments that bring the campus community together." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campus-experience/assembly-hall" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campus-experience/assembly-hall" }],
  }),
  component: Page,
});

function Page() {
  return <InternalPage config={config} />;
}

const config = {
  breadcrumb: [
    { label: "Home", to: "/" },
    { label: "Campus", to: "/campus-experience" },
    { label: "Assembly & Community Hall" },
  ],
  eyebrow: "Campus / Assembly & Community Hall",
  title: "A space where the whole campus comes together.",
  intro: "The assembly and community hall is the shared heart of the campus — for morning gatherings, celebrations, performances and family events.",
  blocks: [
    {
      eyebrow: "Design Principle",
      title: "A room that holds the community",
      body: [
        "The hall is planned to bring learners, teachers and families into one calm, dignified space when the occasion invites it.",
        "Assemblies, recognitions, cultural evenings and parent gatherings all take place here — reinforcing the sense that the school is one community.",
      ],
    },
  ],
  status: {
    label: "Community spaces develop with the campus",
    body: "The final configuration of the hall — capacity, staging and acoustics — is described accurately as the space is completed.",
  },
  related: [
    { title: "Arts & Performance", to: "/student-life/arts-performance", body: "The joy and discipline of expression." },
    { title: "Events", to: "/student-life/events", body: "Moments that build the community." },
    { title: "Community & Belonging", to: "/student-life/community-belonging", body: "A campus that feels like home." },
  ],
  cta: {
    title: "Come and see the campus.",
    body: "A visit is the clearest way to understand how the community gathers.",
    primary: { to: "/contact", label: "Schedule a visit" },
    secondary: { to: "/campus-experience", label: "Campus overview" },
  },
};
