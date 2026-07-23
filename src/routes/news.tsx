import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/components/internal-page";
import { Newspaper, Lightbulb, Users, GraduationCap, BookOpen, Microscope, CalendarDays, Globe2 } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights | Lighthouse Campus" },
      {
        name: "description",
        content:
          "News, educational insights, stories from students, teachers and families, and reflections on learning at Lighthouse Campus.",
      },
      { property: "og:title", content: "News & Insights | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Stories, articles and educational thinking from Lighthouse Campus.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/news" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/news" }],
  }),
  component: News,
});

function News() {
  return (
    <OverviewPage
      breadcrumb={[{ label: "Home", to: "/" }, { label: "News & Insights" }]}
      eyebrow="News & Insights"
      title="Stories, reflection and thinking from Lighthouse Campus."
      intro="An editorial home for institutional news, educational reflection and stories from across the community."
      paragraphs={[
        "Articles are added as they are ready. Each article is written with care and reflects the values and voice of the institution.",
        "The article model supports category, title, summary, author, publication date, reading time, hero image, body content, related articles, call to action and SEO metadata — ready for future content management.",
      ]}
      cards={[
        { title: "School News", to: "/news/school-news", body: "Institutional announcements and milestones.", icon: <Newspaper className="size-5" /> },
        { title: "Educational Insights", to: "/news/educational-insights", body: "Reflections on learning, teaching and childhood.", icon: <Lightbulb className="size-5" /> },
        { title: "Student Stories", to: "/news/student-stories", body: "Voices from the campus.", icon: <Users className="size-5" /> },
        { title: "Teacher Stories", to: "/news/teacher-stories", body: "The people who teach on campus.", icon: <GraduationCap className="size-5" /> },
        { title: "Parent Guides", to: "/news/parent-guides", body: "Practical guides for families.", icon: <BookOpen className="size-5" /> },
        { title: "Research & Reflection", to: "/news/research-reflection", body: "Longer-form thinking on education.", icon: <Microscope className="size-5" /> },
        { title: "Campus Events", to: "/news/campus-events", body: "Public updates on campus moments.", icon: <CalendarDays className="size-5" /> },
        { title: "Community Stories", to: "/news/community-stories", body: "How the campus meets its community.", icon: <Globe2 className="size-5" /> },
      ]}
      cta={{
        title: "Follow the story.",
        body: "Contact us to be kept in touch as new articles are published.",
        primary: { to: "/contact", label: "Get in touch" },
        secondary: { to: "/about", label: "About Lighthouse Campus" },
      }}
    />
  );
}
