import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Eyebrow,
  ButtonLink,
  SmartLink,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import exteriorImg from "@/assets/campus-exterior.jpg?w=1600&format=jpg";
import exteriorImgAvif from "@/assets/campus-exterior.jpg?w=640;960;1280;1600&format=avif&as=srcset";
import exteriorImgWebp from "@/assets/campus-exterior.jpg?w=640;960;1280;1600&format=webp&as=srcset";
import { ShareBar } from "@/components/share-bar";

export const Route = createFileRoute("/campuses_/mohandessin")({
  head: () => ({
    meta: [
      { title: "Mohandessin Campus — Lighthouse Campus" },
      {
        name: "description",
        content:
          "The first operational Lighthouse campus in Mohandessin, Giza: overview, leadership, facilities, academic programmes, admissions and contact.",
      },
      { property: "og:title", content: "Mohandessin Campus — Lighthouse Campus" },
      {
        property: "og:description",
        content: "The first operational Lighthouse campus, in Mohandessin, Giza.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/campuses/mohandessin" },
      { property: "og:type", content: "place" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/campuses/mohandessin" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "School",
              "@id": "https://lighthousecampus.lovable.app/campuses/mohandessin#school",
              name: "Lighthouse Campus — Mohandessin",
              alternateName: "Lighthouse Mohandessin Campus",
              url: "https://lighthousecampus.lovable.app/campuses/mohandessin",
              logo: "https://lighthousecampus.lovable.app/icon-512.png",
              image: "https://lighthousecampus.lovable.app/lighthouse-social-card.webp",
              slogan: "Guiding Minds. Inspiring Futures. Connecting Possibilities.",
              description:
                "The first operational Lighthouse Campus, located in Mohandessin, Giza — an international K-12 learning community in Greater Cairo.",
              telephone: "+20-00-000-0000",
              email: "hello@lighthousecampus.edu",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mohandessin",
                addressLocality: "Giza",
                addressRegion: "Greater Cairo Governorate",
                postalCode: "12411",
                addressCountry: "EG",
              },
              geo: { "@type": "GeoCoordinates", latitude: 30.055, longitude: 31.205 },
              hasMap:
                "https://www.google.com/maps/search/?api=1&query=Mohandessin%2C%20Giza%2C%20Egypt",
              areaServed: { "@type": "AdministrativeArea", name: "Greater Cairo" },
              foundingLocation: "Cairo, Egypt",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "07:30",
                  closes: "16:00",
                },
              ],
              educationalLevel: ["Early Years", "Primary", "Preparatory", "Secondary"],
              inLanguage: ["en", "ar"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "admissions",
                  email: "admissions@lighthousecampus.edu",
                  areaServed: "EG",
                  availableLanguage: ["English", "Arabic"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "general",
                  email: "hello@lighthousecampus.edu",
                  areaServed: "EG",
                  availableLanguage: ["English", "Arabic"],
                },
              ],
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "Lighthouse Campus",
                url: "https://lighthousecampus.lovable.app",
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://lighthousecampus.lovable.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Campuses",
                  item: "https://lighthousecampus.lovable.app/campuses",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Mohandessin",
                  item: "https://lighthousecampus.lovable.app/campuses/mohandessin",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Mohandessin,
});

function Mohandessin() {
  return (
    <>
      <PageHero
        eyebrow="Campuses · Mohandessin"
        title="Mohandessin Campus"
        intro="Our first operational campus and the foundation of the Lighthouse community — in the heart of Giza, Greater Cairo."
        sections={[
          { label: "Overview", to: "/campuses/mohandessin#overview" },
          { label: "Leadership", to: "/campuses/mohandessin#leadership" },
          { label: "Facilities", to: "/campuses/mohandessin#facilities" },
          { label: "Programmes", to: "/campuses/mohandessin#programmes" },
          { label: "Contact", to: "/campuses/mohandessin#contact" },
        ]}
      />

      <Section id="overview">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_24px_70px_-36px_rgba(11,29,58,0.4)]">
            <picture>
              <source type="image/avif" srcSet={exteriorImgAvif} sizes="(min-width: 1024px) 50vw, 100vw" />
              <source type="image/webp" srcSet={exteriorImgWebp} sizes="(min-width: 1024px) 50vw, 100vw" />
              <img
                src={exteriorImg}
                alt="Mohandessin campus building exterior with courtyard"
                loading="lazy"
                decoding="async"
                width={1600}
                height={1008}
                className="aspect-[4/3] w-full object-cover"
              />
            </picture>
          </div>
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
              A calm, purposeful home for learning
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              The Mohandessin campus brings the Lighthouse philosophy to life in
              a welcoming, well-designed environment. Here, students across the
              full learning journey are known, challenged and cared for.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              As our founding campus, Mohandessin sets the standard for every
              location that will follow.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" id="leadership">
        <SectionHeading
          eyebrow="Leadership"
          title="Guided by experienced educators"
          description="The Mohandessin campus is led by a dedicated team responsible for teaching, wellbeing and community — committed to every learner's growth."
        />
      </Section>

      <Section id="facilities">
        <SectionHeading eyebrow="Facilities" title="Purposeful spaces" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Classrooms", "Bright, flexible learning spaces."],
            ["Library", "The quiet heart of the campus."],
            ["Laboratories", "Safe, well-equipped science labs."],
            ["Creative & innovation spaces", "Studios and maker areas."],
            ["Sports facilities", "For movement, health and teamwork."],
            ["Health, safety & transport", "Care and peace of mind for families."],
          ].map(([t, b]) => (
            <FeatureCard key={t} title={t}>
              {b}
            </FeatureCard>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          Explore our{" "}
          <SmartLink
            to="/campus-experience"
            className="font-semibold text-brand-blue hover:underline"
          >
            full campus experience
          </SmartLink>
          .
        </p>
      </Section>

      <Section tone="sand" id="programmes">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Academic Programmes</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
              The full learning journey
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From Early Years through Secondary and Graduation Pathways, the
              Mohandessin campus offers a coherent, ambitious academic
              experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/learning-journey" variant="primary" size="md">
                The learning journey
              </ButtonLink>
              <ButtonLink to="/academic-experience" variant="outline" size="md">
                Academic experience
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Early Years", "Primary", "Preparatory", "Secondary", "Graduation Pathways", "Learning support"].map(
              (p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium"
                >
                  <span aria-hidden className="size-1.5 rounded-full bg-gold" />
                  {p}
                </li>
              ),
            )}
          </ul>
        </div>
      </Section>

      <Section id="contact">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Admissions & Contact</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
              Visit the Mohandessin campus
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We would be glad to welcome your family. Get in touch to arrange a
              visit or begin the admissions conversation.
            </p>
            <ul className="mt-7 space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                Mohandessin, Giza, Greater Cairo, Egypt
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                <a href="tel:+20000000000" className="hover:text-brand-blue">
                  +20 00 000 0000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                <a
                  href="mailto:hello@lighthousecampus.edu"
                  className="hover:text-brand-blue"
                >
                  hello@lighthousecampus.edu
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/admissions" variant="primary" size="md">
                Admissions
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" size="md">
                Contact & enquiry
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
            <iframe
              title="Map of Mohandessin, Giza"
              src="https://www.openstreetmap.org/export/embed.html?bbox=31.19%2C30.04%2C31.22%2C30.07&layer=mapnik"
              className="h-full min-h-[22rem] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Begin your journey at Mohandessin"
        body="Our founding campus is ready to welcome your family."
      />
      <ShareBar title="Mohandessin Campus — Lighthouse Campus" />
    </>
  );
}
