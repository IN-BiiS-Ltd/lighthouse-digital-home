import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  Container,
  Wordmark,
  SmartLink,
  BrandLogo,
} from "@/components/blocks";
import { primaryNav, secondaryNav, type NavSection } from "@/lib/site-nav";
import { FollowLinks } from "@/components/share-bar";
import { CrystalField } from "@/components/crystal-field";
import { useLang, type Lang } from "@/lib/i18n";
import officialLockupAsset from "@/assets/lighthouse-official-lockup-v2.png.asset.json";
const officialLockupSrc = officialLockupAsset.url;

const NAV_KEY: Record<string, string> = {
  "/about": "nav.about",
  "/our-model": "nav.our-model",
  "/learning-journey": "nav.learning-journey",
  "/academic-experience": "nav.academics",
  "/student-life": "nav.student-life",
  "/campus-experience": "nav.campus",
  "/parents": "nav.parents",
  "/news": "nav.news",
  "/campuses": "nav.campuses",
  "/community": "nav.community",
  "/explore/digital-ecosystem": "nav.digital-ecosystem",
  "/admissions": "nav.admissions",
};

function labelFor(
  item: { label: string; label_ar?: string; to: string },
  lang: Lang,
  t: (k: string, fb?: string) => string,
): string {
  if (lang !== "ar") return item.label;
  if ("label_ar" in item && item.label_ar) return item.label_ar;
  const key = NAV_KEY[item.to];
  return key ? t(key, item.label) : item.label;
}

import { LhIcon, type LhIconName } from "@/components/lighthouse-icons";

const futureEcosystem: { key: string; icon: LhIconName }[] = [
  { key: "eco.parent-portal", icon: "dialogue" },
  { key: "eco.student-portal", icon: "root" },
  { key: "eco.learning-platform", icon: "lens" },
  { key: "eco.online-admissions", icon: "arc" },
  { key: "eco.resource-library", icon: "ledger" },
  { key: "eco.alumni-network", icon: "constellation" },
];

export function SiteFooter() {
  const { lang, t } = useLang();

  const footerColumns: { titleKey: string; items: NavSection[] | { label: string; to: string }[] }[] = [
    { titleKey: "footer.explore", items: primaryNav.slice(0, 5) },
    {
      titleKey: "footer.community",
      items: [
        { label: "Admissions", to: "/admissions" } as NavSection,
        ...secondaryNav,
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <CrystalField className="opacity-70" />
      <Container className="relative py-16 md:py-20">
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
              {t("footer.brand-tagline")}
            </p>
            <div className="mt-8">
              <FollowLinks />
            </div>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <nav key={col.titleKey} aria-label={t(col.titleKey)}>
              <h2 className="eyebrow text-gold">{t(col.titleKey)}</h2>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.to}>
                    <SmartLink
                      to={item.to}
                      className="text-sm text-navy-foreground/75 transition-colors hover:text-gold"
                    >
                      {labelFor(item as NavSection, lang, t)}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h2 className="eyebrow text-gold">{t("footer.mohandessin")}</h2>
            <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
                <span>{t("footer.address")}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
                <a href="tel:+20000000000" className="hover:text-gold num-latin" dir="ltr">
                  +20 00 000 0000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
                <a
                  href="mailto:hello@lighthousecampus.edu"
                  className="hover:text-gold num-latin"
                  dir="ltr"
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
            {t("footer.digital-ecosystem")}
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futureEcosystem.map((f) => (
              <li
                key={f.key}
                className="flex items-center gap-3 text-sm text-navy-foreground/80"
              >
                <span className="lh-chip on-navy size-9 rounded-lg" aria-hidden>
                  <LhIcon name={f.icon} className="size-4" />
                </span>
                <span className="font-medium">{t(f.key)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Official institutional signature */}
        <div className="mt-12 flex justify-center">
          <figure className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_25px_70px_-25px_rgba(0,0,0,0.6)] ring-2 ring-gold">
            <img
              src={officialLockupSrc}
              alt="Lighthouse Campus — Guiding Minds. Inspiring Futures. Connecting Possibilities."
              width={800}
              height={800}
              className="mx-auto block h-auto w-full max-w-xs object-contain"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <figcaption className="mt-3 text-center text-[0.7rem] uppercase tracking-[0.28em] text-navy/70">
              {t("footer.official-lockup")}
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-foreground/12 pt-8 text-sm text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            © <span className="num-latin">{new Date().getFullYear()}</span> Lighthouse Campus. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <SmartLink to="/privacy" className="hover:text-gold">{t("footer.privacy")}</SmartLink>
            <SmartLink to="/terms" className="hover:text-gold">{t("footer.terms")}</SmartLink>
            <SmartLink to="/cookies" className="hover:text-gold">{t("footer.cookies")}</SmartLink>
            <SmartLink to="/cookie-settings" className="hover:text-gold">{t("footer.cookie-settings")}</SmartLink>
            <SmartLink to="/accessibility" className="hover:text-gold">{t("footer.accessibility")}</SmartLink>
            <SmartLink to="/contact" className="hover:text-gold">{t("nav.contact")}</SmartLink>
            <SmartLink to="/careers" className="hover:text-gold">{t("footer.careers")}</SmartLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
