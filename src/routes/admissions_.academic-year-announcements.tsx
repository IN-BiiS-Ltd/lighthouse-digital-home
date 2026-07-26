import { createFileRoute } from "@tanstack/react-router";
import { ArchitecturalPage } from "@/components/architectural-page";
import { Section, ButtonLink, Eyebrow } from "@/components/blocks";
import { CalendarDays, Clock, Bell, FileText, Users, MailOpen } from "lucide-react";

const APPLY = "https://eduios.lighthousecampus.com/apply/lighthouse-campus";
const SIGN_IN = "https://eduios.lighthousecampus.com/sign-in";

export const Route = createFileRoute("/admissions_/academic-year-announcements")({
  head: () => ({
    meta: [
      { title: "Academic Year Announcements | Admissions | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Open registration dates and new academic year announcements for Lighthouse Campus. Enquire early and secure your child's place.",
      },
      { property: "og:title", content: "Academic Year Announcements | Admissions | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Open registration dates and new academic year announcements for Lighthouse Campus. Enquire early and secure your child's place.",
      },
      { property: "og:url", content: "https://lighthousecampus.com/admissions/academic-year-announcements" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://lighthousecampus.com/admissions/academic-year-announcements" },
    ],
  }),
  component: Page,
});

function RegistrationStrip() {
  return (
    <Section tone="sand">
      <div className="rounded-2xl border border-gold/40 bg-card p-6 md:flex md:items-center md:justify-between md:gap-6 md:p-8">
        <div className="text-center md:text-left">
          <Eyebrow>Registration is open</Eyebrow>
          <h2 className="mt-3 font-display text-2xl leading-snug text-foreground md:text-3xl">
            Apply for the new academic year now.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            New families can apply directly. Returning families, sign in to continue.
          </p>
        </div>
        <div className="mt-4 flex flex-col justify-center gap-2 md:mt-0 md:shrink-0 md:flex-row">
          <ButtonLink
            to={APPLY}
            variant="gold"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apply for the new academic year"
            data-event="CTA Click"
            data-event-prop-cta="Apply"
            data-event-prop-location="Academic Year Announcements Strip"
          >
            Start application →
          </ButtonLink>
          <ButtonLink
            to={SIGN_IN}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sign in to an existing applicant account"
          >
            Sign in
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

function Page() {
  return (
    <>
      <RegistrationStrip />
      <ArchitecturalPage
        config={{
          breadcrumb: [
            { label: "Home", to: "/" },
            { label: "Admissions", to: "/admissions" },
            { label: "Academic Year Announcements" },
          ],
          eyebrow: "Admissions / Announcements",
          title: "Open registration and new academic year announcements.",
          intro:
            "Each year we share clear, timely information about admissions openings, application windows and key dates for the next academic year.",
          sections: [
            { label: "Timeline", to: "#timeline" },
            { label: "How to apply", to: "#how-to-apply" },
            { label: "Stay informed", to: "#stay-informed" },
          ],
          modules: [
            {
              kind: "pillars",
              id: "timeline",
              eyebrow: "Key dates",
              title: "The academic year calendar families need.",
              description:
                "Important milestones for new and returning families. Dates are updated as each phase opens.",
              pillars: [
                {
                  numeral: "01",
                  title: "Early interest opens",
                  body: "Families may submit an initial enquiry and join the early-notification list.",
                },
                {
                  numeral: "02",
                  title: "Registration opens",
                  body: "Formal applications open for the new academic year. Places are offered in sequence.",
                },
                {
                  numeral: "03",
                  title: "Assessment & meetings",
                  body: "Friendly, age-appropriate conversations and visits are arranged with shortlisted families.",
                },
                {
                  numeral: "04",
                  title: "Offers & enrolment",
                  body: "Offers are released and confirmed places are prepared for the new school year.",
                },
              ],
            },
            {
              kind: "bento",
              id: "how-to-apply",
              eyebrow: "How to apply",
              title: "Three ways to begin.",
              description:
                "Choose the path that suits your family. Every step is designed to be clear and welcoming.",
              tiles: [
                {
                  title: "Apply online",
                  body: "New families can start the application directly through the admissions portal.",
                  icon: <FileText className="size-5" />,
                },
                {
                  title: "Schedule a visit",
                  body: "See the campus and meet the team before you apply.",
                  icon: <Users className="size-5" />,
                },
                {
                  title: "Contact admissions",
                  body: "Send a question and a member of the team will respond personally.",
                  icon: <MailOpen className="size-5" />,
                },
                {
                  title: "Track your application",
                  body: "Sign in to review your application status and next steps.",
                  icon: <Clock className="size-5" />,
                },
              ],
            },
            {
              kind: "principles",
              id: "stay-informed",
              eyebrow: "Stay informed",
              title: "Never miss a key date.",
              principles: [
                "This page is updated whenever new dates or announcements are released.",
                "Families on the early-interest list receive priority notification of opening dates.",
                "All dates are published in both English and Arabic for the Lighthouse community.",
                "Admissions events and open mornings are announced through the same channel.",
              ],
            },
          ],
          related: [
            {
              title: "Application Process",
              to: "/admissions/application-process",
              body: "The five-step admissions journey.",
            },
            {
              title: "Requirements",
              to: "/admissions/requirements",
              body: "What we invite families to prepare.",
            },
            {
              title: "Schedule a Visit",
              to: "/admissions/schedule-a-visit",
              body: "See the campus in person.",
            },
            {
              title: "Apply Online",
              to: "/admissions/apply-online",
              body: "Submit your application through the portal.",
            },
          ],
          cta: {
            title: "Ready to take the first step?",
            body: "Applications for the new academic year are open. We would be glad to welcome your family.",
            primary: {
              to: APPLY,
              label: "Apply now",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            secondary: {
              to: "/contact",
              label: "Contact admissions",
            },
          },
        }}
      />
    </>
  );
}
