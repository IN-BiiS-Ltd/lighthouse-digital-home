import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Lighthouse Campus" },
      {
        name: "description",
        content:
          "How Lighthouse Campus collects, uses, protects and shares personal information from families, students, staff and website visitors.",
      },
      { property: "og:title", content: "Privacy Policy — Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Our commitments on personal data, children's privacy, retention and family rights.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <InternalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Privacy Policy" }],
        eyebrow: "Legal",
        title: "Privacy Policy",
        intro:
          "This page describes how Lighthouse Campus handles personal information. It is maintained by the school and will be updated as our practices evolve. It is not a legal certification.",
        blocks: [
          {
            eyebrow: "Scope",
            title: "Who this policy applies to",
            body: [
              "This policy applies to prospective and current families, students, staff, alumni, partners and visitors to lighthousecampus.lovable.app. It covers information collected through the website, admissions enquiries, campus visits and day-to-day school operations.",
            ],
          },
          {
            eyebrow: "Information we collect",
            title: "What we collect and why",
            bullets: [
              "Identity and contact details submitted through enquiry, admissions or contact forms.",
              "Student information provided during the admissions journey, held only for admissions and educational purposes.",
              "Website analytics: aggregated, non-identifying usage data used to improve the site.",
              "Communications you send us by email or phone, retained for follow-up and record-keeping.",
            ],
          },
          {
            eyebrow: "How we use it",
            title: "Purposeful, minimal, proportionate",
            body: [
              "We use personal information only for the purpose for which it was provided — responding to enquiries, running admissions, supporting learning and communicating with families.",
              "We do not sell personal information. We do not share it with third parties for marketing.",
            ],
          },
          {
            eyebrow: "Children's privacy",
            title: "Special care for student information",
            body: [
              "Student information is handled with additional care. Only staff with a legitimate educational reason access student records, and only for the duration required by their role.",
            ],
          },
          {
            eyebrow: "Retention",
            title: "How long we keep information",
            body: [
              "We retain personal information only as long as needed to fulfil the purpose for which it was collected, or as required by Egyptian law and applicable regulations.",
            ],
          },
          {
            eyebrow: "Security",
            title: "How we protect information",
            body: [
              "We use reasonable technical and organisational measures — encrypted transport, access controls and staff training — to protect the information entrusted to us. No online system is perfectly secure, and we do not guarantee absolute security.",
            ],
          },
          {
            eyebrow: "Your rights",
            title: "Access, correction and deletion",
            body: [
              "Families and individuals may request access to the personal information we hold about them, ask that it be corrected, or request deletion where it is no longer required. Contact hello@lighthousecampus.edu to make a request.",
            ],
          },
          {
            eyebrow: "Cookies",
            title: "Cookies and analytics",
            body: [
              "The site uses only the cookies necessary for it to function and, where enabled, aggregate analytics. See the Cookie Policy for detail.",
            ],
          },
          {
            eyebrow: "Contact",
            title: "Questions about privacy",
            body: [
              "For any question about this policy, or to exercise a right, please write to hello@lighthousecampus.edu with the subject line \"Privacy\".",
            ],
          },
        ],
        related: [
          { title: "Terms of Use", to: "/terms", body: "The terms that govern use of this website." },
          { title: "Cookie Policy", to: "/cookies", body: "How and why the site uses cookies." },
          { title: "Accessibility", to: "/accessibility", body: "Our commitment to an accessible experience." },
        ],
        cta: {
          title: "Questions about your information?",
          body: "We are happy to answer any question about how we handle personal data.",
          primary: { to: "/contact", label: "Contact the school" },
          secondary: { to: "/parents/school-policies", label: "School policies" },
        },
      }}
    />
  );
}
