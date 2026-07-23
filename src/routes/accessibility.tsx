import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Our commitment to WCAG 2.1 AA-aligned accessibility on the Lighthouse Campus website, and how to reach us if a barrier remains.",
      },
      { property: "og:title", content: "Accessibility Statement — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Design, colour, keyboard, screen-reader and structural commitments across the site.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/accessibility" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <InternalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Accessibility" }],
        eyebrow: "Commitment",
        title: "Accessibility Statement",
        intro:
          "Lighthouse Campus believes that a school's public voice should be open to everyone. This site is designed and audited to align with the WCAG 2.1 AA guidelines. This statement describes our commitments and how to reach us.",
        blocks: [
          {
            eyebrow: "Our commitment",
            title: "An accessible experience for every visitor",
            body: [
              "We design and build the site to be usable by people with a wide range of abilities, on a wide range of devices, and in a wide range of conditions — including low bandwidth, reduced motion and assistive technology.",
            ],
          },
          {
            eyebrow: "What we do",
            title: "Design and engineering practices",
            bullets: [
              "Semantic HTML: one main landmark per page, correct heading order and descriptive links.",
              "Colour: institutional palette tested for WCAG AA contrast on light and dark surfaces.",
              "Keyboard: every interactive element is reachable and has a visible focus indicator.",
              "Screen readers: icon-only buttons carry ARIA labels; decorative imagery is hidden from assistive tech.",
              "Motion: animations are subtle and respect the operating system's reduced-motion preference.",
              "Images: meaningful alt text on content images; empty alt on decorative imagery.",
              "Language: pages declare the primary language; text remains readable at 200% zoom.",
              "Forms: labelled fields, clear error messages and generous tap targets on touch devices.",
            ],
          },
          {
            eyebrow: "Ongoing work",
            title: "Continuous improvement",
            body: [
              "Accessibility is not a checkbox — it is a practice. We audit new pages before release and revisit older pages as we learn. If you encounter a barrier, we would like to know so we can address it.",
            ],
          },
          {
            eyebrow: "Feedback",
            title: "Contact us about accessibility",
            body: [
              "Please write to hello@lighthousecampus.edu with the subject line \"Accessibility\", describing the page and the issue. We aim to respond within five working days.",
            ],
          },
        ],
        related: [
          { title: "Privacy Policy", to: "/privacy", body: "How we handle personal information." },
          { title: "Terms of Use", to: "/terms", body: "The terms that govern use of this site." },
          { title: "Cookie Policy", to: "/cookies", body: "How the site uses cookies." },
        ],
        cta: {
          title: "Tell us about a barrier",
          body: "Your feedback helps us make the site better for everyone.",
          primary: { to: "/contact", label: "Contact the school" },
          secondary: { to: "/parents/school-policies", label: "School policies" },
        },
      }}
    />
  );
}
