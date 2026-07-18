import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  Container,
  Wordmark,
  SmartLink,
  BrandLogo,
} from "@/components/blocks";
import { primaryNav, secondaryNav } from "@/lib/site-nav";

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

const futureEcosystem = [
  "Parent Portal",
  "Student Portal",
  "Learning Platform",
  "Online Admissions",
  "Resource Library",
  "Alumni Network",
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Lighthouse Campus — home" className="inline-block">
              <BrandLogo variant="dark" className="h-24 w-24 object-contain" alt="Lighthouse Campus — by Readers International" />
            </Link>
            <div className="mt-4">
              <Wordmark />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Guiding minds. Inspiring futures. Connecting possibilities. A
              living learning community where students remain at the centre.
            </p>
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

        {/* Future ecosystem note */}
        <div className="mt-14 rounded-xl border border-navy-foreground/12 bg-navy-foreground/[0.03] p-6">
          <p className="eyebrow text-navy-foreground/50">
            A growing digital ecosystem
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-foreground/60">
            {futureEcosystem.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-gold/60" />
                {f}
              </li>
            ))}
          </ul>
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
