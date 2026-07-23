import { createFileRoute } from "@tanstack/react-router";
import { ArchitecturalPage } from "@/components/architectural-page";
import { Users, Sparkles, Trophy, Palette, HandHeart, Heart, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life | Community, Wellbeing and Belonging at Lighthouse Campus" },
      {
        name: "description",
        content:
          "Life beyond lessons at Lighthouse Campus: community, belonging, clubs, athletics, arts, leadership, service, wellbeing and events.",
      },
      { property: "og:title", content: "Student Life | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Community, belonging, clubs, athletics, arts, leadership, service, wellbeing and events at Lighthouse Campus.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/student-life" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/student-life" }],
  }),
  component: StudentLife,
});

function StudentLife() {
  return (
    <ArchitecturalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Student Life" }],
        eyebrow: "Student Life",
        title: "Life beyond lessons is part of a full education.",
        intro:
          "Community, character, confidence, creativity, leadership, wellbeing and service are shaped by the everyday life of the campus — not a programme of entertainment, but a deliberate part of how learners develop as people.",
        sections: [
          { label: "Pillars", to: "#pillars" },
          { label: "Domains", to: "#domains" },
          { label: "Principles", to: "#principles" },
        ],
        modules: [
          {
            kind: "pillars",
            id: "pillars",
            eyebrow: "The four pillars",
            title: "How life on campus takes shape.",
            description:
              "Every activity, club, team and event serves one of four connected pillars of student life.",
            pillars: [
              { numeral: "01", title: "Belonging", body: "Relationships and shared responsibility that give the campus its character and hold every learner well." },
              { numeral: "02", title: "Contribution", body: "Service, leadership and stewardship — the daily practice of caring for something larger than oneself." },
              { numeral: "03", title: "Expression", body: "Voice, craft and performance across arts, writing, movement and public thought." },
              { numeral: "04", title: "Wellbeing", body: "Physical, emotional and social health as foundations for meaningful learning and healthy growth." },
            ],
          },
          {
            kind: "bento",
            id: "domains",
            eyebrow: "Seven domains",
            title: "Where student life is lived.",
            description:
              "Seven interlocking spaces where character, confidence and community are practised every day.",
            tiles: [
              { title: "Community & Belonging", body: "Relationships and shared responsibility that give the campus its character.", icon: <Users className="size-5" /> },
              { title: "Clubs & Activities", body: "Interests explored beyond the timetable.", icon: <Sparkles className="size-5" /> },
              { title: "Athletics", body: "Discipline, teamwork and joy through movement.", icon: <Trophy className="size-5" /> },
              { title: "Arts & Performance", body: "Voice, craft and expression across disciplines.", icon: <Palette className="size-5" /> },
              { title: "Leadership & Service", body: "Responsibility exercised in service of others.", icon: <HandHeart className="size-5" /> },
              { title: "Wellbeing", body: "Care for the whole learner across school life.", icon: <Heart className="size-5" /> },
              { title: "Events", body: "Moments that give the school year its rhythm.", icon: <CalendarDays className="size-5" /> },
            ],
          },
          {
            kind: "principles",
            id: "principles",
            eyebrow: "Principles",
            title: "What we hold to.",
            principles: [
              "Every learner is known by name and story.",
              "Participation is invited, not imposed.",
              "Leadership is practised through responsibility.",
              "Wellbeing is a foundation, not an add-on.",
              "Service is a daily practice, not an occasion.",
              "Community is built through shared care.",
            ],
          },
          {
            kind: "related",
            eyebrow: "Explore",
            title: "Continue through the pillars.",
            links: [
              { title: "Community & Belonging", to: "/student-life/community-belonging", body: "The relational heart of campus life." },
              { title: "Wellbeing", to: "/student-life/wellbeing", body: "Care for the whole learner." },
              { title: "Leadership & Service", to: "/student-life/leadership-service", body: "Responsibility in the service of others." },
            ],
          },
        ],
        cta: {
          title: "See the community for yourself.",
          body: "A visit is the clearest way to understand life at Lighthouse Campus.",
          primary: { to: "/contact", label: "Schedule a visit" },
          secondary: { to: "/admissions", label: "Admissions overview" },
        },
      }}
    />
  );
}
