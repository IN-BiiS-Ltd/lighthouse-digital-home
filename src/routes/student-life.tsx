import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/components/internal-page";
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
      { property: "og:url", content: "/student-life" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/student-life" }],
  }),
  component: StudentLife,
});

function StudentLife() {
  return (
    <OverviewPage
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Student Life" }]}
      eyebrow="Student Life"
      title="Life beyond lessons is part of a full education."
      intro="Community, character, confidence, creativity, leadership, wellbeing and service are shaped by the everyday life of the campus."
      paragraphs={[
        "Student life at Lighthouse Campus is not a programme of entertainment. It is a deliberate part of how learners develop as people.",
        "Belonging, responsibility and contribution are practised every day — in classrooms, on the field, on stage and in the community.",
      ]}
      cards={[
        { title: "Community & Belonging", to: "/student-life/community-belonging", body: "Relationships and shared responsibility that give the campus its character.", icon: <Users className="size-5" /> },
        { title: "Clubs & Activities", to: "/student-life/clubs-activities", body: "Interests explored beyond the timetable.", icon: <Sparkles className="size-5" /> },
        { title: "Athletics", to: "/student-life/athletics", body: "Discipline, teamwork and joy through movement.", icon: <Trophy className="size-5" /> },
        { title: "Arts & Performance", to: "/student-life/arts-performance", body: "Voice, craft and expression across disciplines.", icon: <Palette className="size-5" /> },
        { title: "Leadership & Service", to: "/student-life/leadership-service", body: "Responsibility exercised in service of others.", icon: <HandHeart className="size-5" /> },
        { title: "Wellbeing", to: "/student-life/wellbeing", body: "Care for the whole learner across school life.", icon: <Heart className="size-5" /> },
        { title: "Events", to: "/student-life/events", body: "Moments that give the school year its rhythm.", icon: <CalendarDays className="size-5" /> },
      ]}
      cta={{
        title: "See the community for yourself.",
        body: "A visit is the clearest way to understand life at Lighthouse Campus.",
        primary: { to: "/contact", label: "Schedule a visit" },
        secondary: { to: "/admissions", label: "Admissions overview" },
      }}
    />
  );
}
