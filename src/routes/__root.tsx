import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ScrollProgress } from "../components/scroll-progress";
import { CookieConsent } from "../components/cookie-consent";
import { Analytics } from "../components/analytics";
import { LanguageProvider } from "../lib/i18n";


function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-4 text-navy-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 55%), radial-gradient(ellipse at 80% 90%, color-mix(in oklab, var(--brand-blue, #4a7bd6) 30%, transparent), transparent 55%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold/80">Off the map</p>
        <h1
          className="mt-6 font-display text-[7rem] font-medium italic leading-none md:text-[10rem]"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--gold) 90%, white) 0%, var(--gold) 45%, color-mix(in oklab, var(--gold) 60%, black) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl md:text-3xl">This page has drifted from the harbour.</h2>
        <p className="mx-auto mt-4 max-w-md text-navy-foreground/75">
          The link you followed may be out of date, or the page may have moved as the campus grows.
          Let the lighthouse guide you back.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold/90"
          >
            Return home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-navy-foreground/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
          >
            Contact the campus
          </Link>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.35em] text-navy-foreground/50">
          Lighthouse Campus · Mohandessin, Giza
        </p>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lighthouse Campus — Guiding Minds. Inspiring Futures." },
      {
        name: "description",
        content:
          "Lighthouse Campus is an international learning community in Cairo where students remain at the centre — guiding minds, inspiring futures and connecting possibilities.",
      },
      { name: "author", content: "Lighthouse Campus" },
      { name: "theme-color", content: "#0B1D3A" },
      { property: "og:title", content: "Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "An international learning community where students remain at the centre. Guiding minds. Inspiring futures. Connecting possibilities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Lighthouse Campus" },
      { property: "og:image", content: "https://lighthousecampus.lovable.app/lighthouse-social-card.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Lighthouse Campus — Mohandessin, Giza" },
      { property: "og:image:type", content: "image/webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lighthousecampus.lovable.app/lighthouse-social-card.webp" },
      { name: "twitter:image:alt", content: "Lighthouse Campus — Mohandessin, Giza" },

    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Preload the fonts CSS as a stylesheet so it arrives with high priority
      // and blocks less than a normal <link rel="stylesheet"> would.
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Manrope:wght@400;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Manrope:wght@400;600;700&display=swap",
      },
      // Arabic institutional face — loaded alongside so RTL toggle is instant.
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap",
      },

    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "EducationalOrganization",
              "@id": "https://lighthousecampus.lovable.app/#organization",
              name: "Lighthouse Campus",
              alternateName: "Lighthouse Campus — By Readers International",
              url: "https://lighthousecampus.lovable.app",
              logo: "https://lighthousecampus.lovable.app/icon-512.png",
              image: "https://lighthousecampus.lovable.app/lighthouse-social-card.webp",
              slogan: "Guiding Minds. Inspiring Futures. Connecting Possibilities.",
              description:
                "An international learning community in Cairo where students remain at the centre.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mohandessin, Giza",
                addressRegion: "Greater Cairo",
                addressCountry: "EG",
              },
              areaServed: { "@type": "Country", name: "Egypt" },
              foundingLocation: "Cairo, Egypt",
              parentOrganization: {
                "@type": "Organization",
                name: "Readers International",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://lighthousecampus.lovable.app/#website",
              url: "https://lighthousecampus.lovable.app",
              name: "Lighthouse Campus",
              publisher: { "@id": "https://lighthousecampus.lovable.app/#organization" },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-dvh flex-col">
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy"
          >
            Skip to main content
          </a>
          <SiteHeader />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            <Outlet />
          </main>
          <SiteFooter />
          <CookieConsent />
          <Analytics />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

