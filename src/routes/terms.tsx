import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Lighthouse Campus" },
      {
        name: "description",
        content:
          "The terms that govern use of the Lighthouse Campus website, including content, intellectual property and permitted use.",
      },
      { property: "og:title", content: "Terms of Use — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Content ownership, permitted use and disclaimers for lighthousecampus.lovable.app.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <InternalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Terms of Use" }],
        eyebrow: "Legal",
        title: "Terms of Use",
        intro:
          "By using this website you agree to the terms below. They are written to be clear, fair and easy to read. This page is maintained by the school and may be updated over time.",
        blocks: [
          {
            eyebrow: "Purpose",
            title: "About this site",
            body: [
              "The Lighthouse Campus website exists to communicate our educational purpose, programmes and community with prospective and current families, staff and the wider public. It is informational and is not a contract of enrolment.",
            ],
          },
          {
            eyebrow: "Content",
            title: "Intellectual property",
            body: [
              "All text, imagery, logos, marks, illustrations and design elements on this website are the property of Lighthouse Campus or its licensors, and are protected by applicable copyright and trademark law.",
              "You may share links to public pages and quote short passages with attribution. You may not reproduce, redistribute or modify the site's content, imagery or brand assets without written permission.",
            ],
          },
          {
            eyebrow: "Permitted use",
            title: "How you may use the site",
            bullets: [
              "Read, share and reference the site's public content for personal, educational and community purposes.",
              "Submit accurate information through admissions, enquiry and contact forms.",
              "Refrain from attempting to disrupt, probe or misuse the site or its services.",
            ],
          },
          {
            eyebrow: "Accuracy",
            title: "Content is provided in good faith",
            body: [
              "We work to keep the information on this site accurate and up to date. Programme detail, fees, calendars and policies may change; the version communicated to enrolled families through official channels prevails.",
            ],
          },
          {
            eyebrow: "External links",
            title: "Third-party sites",
            body: [
              "The site may link to external resources for context. We are not responsible for the content, practices or availability of third-party websites.",
            ],
          },
          {
            eyebrow: "Liability",
            title: "Reasonable limits",
            body: [
              "To the extent permitted by law, Lighthouse Campus is not liable for indirect or consequential loss arising from use of this website. This does not limit any right that cannot be waived under applicable law.",
            ],
          },
          {
            eyebrow: "Governing law",
            title: "Jurisdiction",
            body: [
              "These terms are governed by the laws of the Arab Republic of Egypt. Any dispute will be handled in the competent courts of Giza, Egypt.",
            ],
          },
          {
            eyebrow: "Contact",
            title: "Questions",
            body: [
              "For any question about these terms, write to hello@lighthousecampus.edu with the subject line \"Terms\".",
            ],
          },
        ],
        related: [
          { title: "Privacy Policy", to: "/privacy", body: "How we handle personal information." },
          { title: "Cookie Policy", to: "/cookies", body: "How the site uses cookies." },
          { title: "Accessibility", to: "/accessibility", body: "Our commitment to an accessible experience." },
        ],
        cta: {
          title: "Need clarification?",
          body: "Our team is happy to answer any question about these terms.",
          primary: { to: "/contact", label: "Contact the school" },
          secondary: { to: "/privacy", label: "Privacy policy" },
        },
      }}
    />
  );
}
