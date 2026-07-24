import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { primaryNav, secondaryNav, allNav, type NavSection } from "@/lib/site-nav";
import {
  Container,
  Wordmark,
  BrandLogo,
  ButtonLink,
  SmartLink,
} from "@/components/blocks";
import { useLang, type Lang } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

/** Map a top-level route to a translation key used by the dictionary. */
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
};

function sectionLabel(
  section: NavSection,
  lang: Lang,
  t: (k: string, fb?: string) => string,
): string {
  if (lang !== "ar") return section.label;
  if (section.label_ar) return section.label_ar;
  const key = NAV_KEY[section.to];
  return key ? t(key, section.label) : section.label;
}

function DesktopDropdown({
  section,
  translatedLabel,
}: {
  section: (typeof allNav)[number];
  translatedLabel: string;
}) {
  if (!section.children?.length) {
    return (
      <SmartLink
        to={section.to}
        className="px-3 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:text-gold"
      >
        {translatedLabel}
      </SmartLink>
    );
  }
  return (
    <div className="group relative">
      <SmartLink
        to={section.to}
        className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:text-gold group-focus-within:text-gold"
        aria-haspopup="true"
      >
        {translatedLabel}
        <ChevronDown className="size-3.5 opacity-70" aria-hidden />
      </SmartLink>
      <div className="invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-xl border border-border bg-popover p-3 shadow-[0_24px_60px_-24px_rgba(11,29,58,0.45)]">
          {section.summary ? (
            <p className="px-3 pb-2 pt-1 text-xs leading-relaxed text-muted-foreground">
              {section.summary}
            </p>
          ) : null}
          <ul className="grid gap-0.5">
            {section.children.map((child) => (
              <li key={child.to}>
                <SmartLink
                  to={child.to}
                  className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
                >
                  <span className="block text-sm font-medium text-foreground">
                    {child.label}
                  </span>
                  {child.description ? (
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                      {child.description}
                    </span>
                  ) : null}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "glass-navy text-navy-foreground border-navy-foreground/12 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]"
          : "bg-navy text-navy-foreground border-transparent",
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          aria-label="Lighthouse Campus — go to homepage"
        >
          <BrandLogo
            variant="dark"
            className="h-10 w-10 object-contain md:h-11 md:w-11"
            alt=""
          />
          <span aria-hidden="true">
            <Wordmark />
          </span>
        </Link>

        <nav aria-label={t("nav.primary")} className="hidden items-center xl:flex">
          {primaryNav.map((s) => (
            <DesktopDropdown
              key={s.to}
              section={s}
              translatedLabel={sectionLabel(s, lang, t)}
            />
          ))}
          <DesktopDropdown
            translatedLabel={t("nav.explore")}
            section={{
              label: "Explore",
              to: "/community",
              summary: t("nav.explore-summary"),
              children: secondaryNav.flatMap((s) => s.children ?? []),
            }}
          />
        </nav>

        <div className="flex items-center gap-1">
          {/* Arabic toggle temporarily disabled — full RTL rollout scheduled with content audit */}
          {/* <LanguageToggle className="hidden sm:inline-flex" /> */}

          <ButtonLink
            to="/admissions"
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t("nav.admissions")}
          </ButtonLink>

          {/* Mobile / tablet menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-11 items-center justify-center rounded-md text-navy-foreground hover:bg-navy-foreground/10 xl:hidden"
              aria-label={t("nav.open-menu")}
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent
              side={lang === "ar" ? "left" : "right"}
              className="w-[min(88vw,24rem)] overflow-y-auto bg-navy p-0 text-navy-foreground"
            >
              <SheetTitle className="sr-only">{t("nav.site-navigation")}</SheetTitle>
              <div className="flex items-center justify-between border-b border-navy-foreground/15 px-6 py-5">
                <Wordmark />
                <LanguageToggle />
              </div>
              <div className="px-4 py-4">
                <Accordion type="multiple" className="w-full">
                  {allNav.map((s) => (
                    <AccordionItem
                      key={s.to}
                      value={s.to}
                      className="border-navy-foreground/12"
                    >
                      <AccordionTrigger className="py-3 text-left text-base font-medium text-navy-foreground hover:no-underline">
                        {sectionLabel(s, lang, t)}
                      </AccordionTrigger>
                      <AccordionContent className="pb-3">
                        <ul className="space-y-1">
                          <li>
                            <SheetClose asChild>
                              <SmartLink
                                to={s.to}
                                className="block rounded-md px-3 py-2 text-sm font-medium text-gold hover:bg-navy-foreground/10"
                              >
                                {t("nav.overview")}
                              </SmartLink>
                            </SheetClose>
                          </li>
                          {(s.children ?? []).map((c) => (
                            <li key={c.to}>
                              <SheetClose asChild>
                                <SmartLink
                                  to={c.to}
                                  className="block rounded-md px-3 py-2 text-sm text-navy-foreground/80 hover:bg-navy-foreground/10 hover:text-navy-foreground"
                                >
                                  {c.label}
                                </SmartLink>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6 grid gap-3">
                  <SheetClose asChild>
                    <ButtonLink to="/admissions" variant="gold" size="md">
                      {t("nav.admissions")}
                    </ButtonLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <ButtonLink to="/contact" variant="outline-light" size="md">
                      {t("nav.contact")}
                    </ButtonLink>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
