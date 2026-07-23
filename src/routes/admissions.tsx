import { createFileRoute } from "@tanstack/react-router";
import { ArchitecturalPage } from "@/components/architectural-page";
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
        content: "A considered, welcoming path into the Lighthouse Campus community.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/admissions" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/admissions" }],
  }),
  component: Admissions,
});

function Admissions() {
  return (
    <ArchitecturalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Admissions" }],
        eyebrow: "Admissions",
        title: "A considered, welcoming path into the community.",
        intro:
          "Joining Lighthouse Campus is a deliberate process built around understanding each family and each learner — not a transaction, but the beginning of a partnership.",
        sections: [
          { label: "Journey", to: "#journey" },
          { label: "Practicalities", to: "#practicalities" },
          { label: "Assurances", to: "#assurances" },
        ],
        modules: [
          {
            kind: "pillars",
            id: "journey",
            eyebrow: "The five steps",
            title: "The admissions journey.",
            description:
              "A clear, respectful sequence — designed so families and school can come to know one another well.",
            pillars: [
              { numeral: "01", title: "Enquire", body: "First contact, a considered conversation about your family, your child and the school." },
              { numeral: "02", title: "Visit", body: "See the campus, meet the team and observe learning in daily practice." },
              { numeral: "03", title: "Apply", body: "Submit the application with the documents that help us know your child." },
              { numeral: "04", title: "Assessment & Meeting", body: "A friendly, age-appropriate conversation with the learner and parents." },
              { numeral: "05", title: "Offer & Enrolment", body: "An offer, a place, and a welcome into the Lighthouse community." },
            ],
          },
          {
            kind: "bento",
            id: "practicalities",
            eyebrow: "What families explore",
            title: "The practical information families need.",
            description: "Clear, transparent detail — shared honestly, without pressure.",
            tiles: [
              { title: "Application Process", body: "The five-step admissions journey explained in detail.", icon: <ClipboardList className="size-5" /> },
              { title: "Requirements", body: "What we invite families to prepare.", icon: <FileText className="size-5" /> },
              { title: "Tuition & Fees", body: "Clear, transparent fee information on request.", icon: <Wallet className="size-5" /> },
              { title: "Scholarships", body: "Support developed under a considered policy.", icon: <GraduationCap className="size-5" /> },
              { title: "Frequently Asked Questions", body: "Common questions from families.", icon: <HelpCircle className="size-5" /> },
              { title: "Schedule a Visit", body: "See the campus in person.", icon: <CalendarCheck className="size-5" /> },
              { title: "Apply Online", body: "Online application, in development.", icon: <MonitorSmartphone className="size-5" /> },
            ],
          },
          {
            kind: "principles",
            id: "assurances",
            eyebrow: "Our assurances",
            title: "What families can expect from us.",
            principles: [
              "Every enquiry receives a considered response.",
              "Every family is met, not merely processed.",
              "Fee information is transparent and shared directly.",
              "Assessment is age-appropriate and never adversarial.",
              "Decisions are communicated with respect and clarity.",
              "The relationship begins before enrolment, not on the first day.",
            ],
          },
          {
            kind: "related",
            eyebrow: "Next",
            title: "Begin at your pace.",
            links: [
              { title: "Schedule a Visit", to: "/admissions/schedule-a-visit", body: "The most natural way to begin the conversation." },
              { title: "Application Process", to: "/admissions/application-process", body: "The five-step admissions journey." },
              { title: "Requirements", to: "/admissions/requirements", body: "What we invite families to prepare." },
            ],
          },
        ],
        cta: {
          title: "Take the first step.",
          body: "Contact the admissions team and we will guide you from there.",
          primary: { to: "/contact", label: "Contact admissions" },
          secondary: { to: "/admissions/schedule-a-visit", label: "Schedule a visit" },
        },
      }}
    />
  );
}
