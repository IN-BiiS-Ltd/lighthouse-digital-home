import { createFileRoute } from "@tanstack/react-router";
import { InternalPage } from "@/components/internal-page";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Lighthouse Campus" },
      {
        name: "description",
        content:
          "How the Lighthouse Campus website uses cookies and similar technologies, and how you can control them.",
      },
      { property: "og:title", content: "Cookie Policy — Lighthouse Campus" },
      {
        property: "og:description",
        content: "A plain-language explanation of the cookies used on lighthousecampus.lovable.app.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/cookies" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <InternalPage
      config={{
        breadcrumb: [{ label: "Home", to: "/" }, { label: "Cookie Policy" }],
        eyebrow: "Legal",
        title: "Cookie Policy",
        intro:
          "This page describes the cookies used on our website and how you can control them. It is written to be short, honest and readable.",
        blocks: [
          {
            eyebrow: "What is a cookie",
            title: "A short definition",
            body: [
              "A cookie is a small text file stored on your device by a website. Cookies allow the site to remember information between pages and visits — for example, your language or session state.",
            ],
          },
          {
            eyebrow: "What we use",
            title: "Cookies on this site",
            bullets: [
              "Essential cookies — required for the site to function correctly.",
              "Preference cookies — remember choices you make, such as language.",
              "Aggregate analytics — where enabled, non-identifying usage statistics that help us improve the site.",
            ],
          },
          {
            eyebrow: "What we do not use",
            title: "No advertising or tracking",
            body: [
              "We do not use advertising cookies. We do not use third-party cookies to build behavioural profiles or to retarget visitors across other sites.",
            ],
          },
          {
            eyebrow: "Your control",
            title: "Managing cookies in your browser",
            body: [
              "You can accept, refuse or delete cookies through your browser settings. Blocking essential cookies may prevent parts of the site from working as intended.",
            ],
          },
          {
            eyebrow: "Changes",
            title: "Updates to this policy",
            body: [
              "As the site evolves, this policy may be updated. Substantive changes will be reflected in the version shown on this page.",
            ],
          },
          {
            eyebrow: "Contact",
            title: "Questions",
            body: [
              "For any question about cookies or privacy, write to hello@lighthousecampus.edu.",
            ],
          },
        ],
        related: [
          { title: "Privacy Policy", to: "/privacy", body: "How we handle personal information." },
          { title: "Terms of Use", to: "/terms", body: "The terms that govern use of this site." },
          { title: "Accessibility", to: "/accessibility", body: "Our commitment to an accessible experience." },
        ],
        cta: {
          title: "Have a question?",
          body: "We are happy to explain anything about how the site works.",
          primary: { to: "/contact", label: "Contact the school" },
          secondary: { to: "/privacy", label: "Privacy policy" },
        },
      }}
    />
  );
}
