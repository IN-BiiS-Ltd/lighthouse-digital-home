import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  Container,
  Wordmark,
  SmartLink,
  BrandLogo,
} from "@/components/blocks";
import { primaryNav, secondaryNav } from "@/lib/site-nav";
import officialLockup from "@/assets/lighthouse-official-lockup.png.asset.json";
import { FollowLinks } from "@/components/share-bar";

const footerColumns = [
  { title: "Explore", items: primaryNav.slice(0, 5) },
  {
    title: "Community",
    items: [
      { label: "Admissions", to: "/admissions" },
      ...secondaryNav,
    ],
  },
];

import { LhIcon, type LhIconName } from "@/components/lighthouse-icons";

const futureEcosystem: { label: string; icon: LhIconName }[] = [
  { label: "Parent Portal", icon: "dialogue" },
  { label: "Student Portal", icon: "root" },
  { label: "Learning Platform", icon: "lens" },
  { label: "Online Admissions", icon: "arc" },
  { label: "Resource Library", icon: "ledger" },
  { label: "Alumni Network", icon: "constellation" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Lighthouse Campus — go to homepage"
              className="inline-block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <BrandLogo variant="dark" className="h-24 w-24 object-contain" alt="" />
            </Link>
            <div className="mt-4" aria-hidden="true">
              <Wordmark />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Guiding minds. Inspiring futures. Connecting possibilities. A
              living learning community where students remain at the centre.
            </p>
            <div className="mt-8">
              <FollowLinks />
            </div>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow text-gold">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.to}>
                    <SmartLink
                      to={item.to}
                      className="text-sm text-navy-foreground/75 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h2 className="eyebrow text-gold">Mohandessin Campus</h2>
            <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
                <span>Mohandessin, Giza, Greater Cairo, Egypt</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
                <a href="tel:+20000000000" className="hover:text-gold">
                  +20 00 000 0000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
                <a
                  href="mailto:hello@lighthousecampus.edu"
                  className="hover:text-gold"
                >
                  hello@lighthousecampus.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Future ecosystem note — with custom Lighthouse glyphs */}
        <div className="ambient-stage mt-14 rounded-2xl border border-navy-foreground/12 bg-navy-foreground/[0.03] p-6">
          <p className="eyebrow text-navy-foreground/60">
            A growing digital ecosystem
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futureEcosystem.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 text-sm text-navy-foreground/80"
              >
                <span className="lh-chip on-navy size-9 rounded-lg" aria-hidden>
                  <LhIcon name={f.icon} className="size-4" />
                </span>
                <span className="font-medium">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Official institutional signature */}
        <div className="mt-12 flex justify-center">
          <figure className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_25px_70px_-25px_rgba(0,0,0,0.6)] ring-2 ring-gold">
            <img
              src={officialLockup.url}
              alt="Lighthouse Campus — Readers International School. Guiding Minds. Inspiring Futures. Connecting Possibilities."
              width={800}
              height={800}
              className="mx-auto block h-auto w-full max-w-xs object-contain"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <figcaption className="mt-3 text-center text-[0.7rem] uppercase tracking-[0.28em] text-navy/70">
              Official Institutional Lockup
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-foreground/12 pt-8 text-sm text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Lighthouse Campus. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <SmartLink to="/parents#resources" className="hover:text-gold">
              Policies
            </SmartLink>
            <SmartLink to="/contact" className="hover:text-gold">
              Contact
            </SmartLink>
            <SmartLink to="/careers" className="hover:text-gold">
              Careers
            </SmartLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
