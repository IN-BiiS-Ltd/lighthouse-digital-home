import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/components/internal-page";
import { ClipboardList, FileText, Wallet, GraduationCap, HelpCircle, CalendarCheck, MonitorSmartphone } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Join Lighthouse Campus" },
      {
        name: "description",
        content:
          "A considered, welcoming path into the Lighthouse Campus community. Enquire, visit, apply, meet and enrol.",
      },
      { property: "og:title", content: "Admissions | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "A considered, welcoming path into the Lighthouse Campus community.",
      },
      { property: "og:url", content: "/admissions" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: Admissions,
});

function Admissions() {
  return (
    <OverviewPage
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Admissions" }]}
      eyebrow="Admissions"
      title="A considered, welcoming path into the community."
      intro="Joining Lighthouse Campus is a deliberate process built around understanding each family and each learner."
      paragraphs={[
        "The journey follows five steps: Enquire, Visit, Apply, Assessment & Meeting, and Offer & Enrolment.",
        "Fee information is clear and transparent, and is shared directly with enquiring families. Scholarship information is developed under an approved institutional policy.",
      ]}
      cards={[
        { title: "Application Process", to: "/admissions/application-process", body: "The five-step admissions journey.", icon: <ClipboardList className="size-5" /> },
        { title: "Requirements", to: "/admissions/requirements", body: "What we invite families to prepare.", icon: <FileText className="size-5" /> },
        { title: "Tuition & Fees", to: "/admissions/tuition-fees", body: "Clear, transparent fee information on request.", icon: <Wallet className="size-5" /> },
        { title: "Scholarships", to: "/admissions/scholarships", body: "Support developed under a considered policy.", icon: <GraduationCap className="size-5" /> },
        { title: "Frequently Asked Questions", to: "/admissions/faq", body: "Common questions from families.", icon: <HelpCircle className="size-5" /> },
        { title: "Schedule a Visit", to: "/admissions/schedule-a-visit", body: "See the campus in person.", icon: <CalendarCheck className="size-5" /> },
        { title: "Apply Online", to: "/admissions/apply-online", body: "Online application, in development.", icon: <MonitorSmartphone className="size-5" /> },
      ]}
      cta={{
        title: "Take the first step.",
        body: "Contact the admissions team and we will guide you from there.",
        primary: { to: "/contact", label: "Contact admissions" },
        secondary: { to: "/admissions/schedule-a-visit", label: "Schedule a visit" },
      }}
    />
  );
}
