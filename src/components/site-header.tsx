import { useEffect, useRef, useState } from "react";
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
import { headerNav, type NavSection } from "@/lib/site-nav";
import {
  Container,
  Wordmark,
  BrandLogo,
  ButtonLink,
  SmartLink,
} from "@/components/blocks";
import { useLang, type Lang } from "@/lib/i18n";
import { SiteSearch } from "@/components/site-search";
// import { LanguageToggle } from "@/components/language-toggle"; // disabled — see hero section

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

/** True when the current pathname belongs to this section (overview or child). */
function isPathIn(to: string, pathname: string): boolean {
  return pathname === to || pathname.startsWith(`${to}/`) || pathname.startsWith(`${to}_`);
}

function isSectionActive(section: NavSection, pathname: string): boolean {
  if (isPathIn(section.to, pathname)) return true;
  return (section.children ?? []).some((c) => isPathIn(c.to, pathname));
}

function DesktopDropdown({
  section,
  translatedLabel,
  pathname,
}: {
  section: NavSection;
  translatedLabel: string;
  pathname: string;
}) {
  const active = isSectionActive(section, pathname);
  const panelId = `nav-panel-${section.to.replace(/[^a-z0-9]+/gi, "-")}`;
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const open = pinned || hovered;
  const wrapRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setPinned(false);
    setHovered(false);
  };


  const linkClass = cn(
    "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-gold",
    active ? "text-gold" : "text-navy-foreground/85",
    "after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-gold after:transition-transform after:duration-200",
    active ? "after:scale-x-100" : "after:scale-x-0",
  );

  if (!section.children?.length) {
    return (
      <SmartLink
        to={section.to}
        className={linkClass}
        aria-current={active ? "page" : undefined}
      >
        {translatedLabel}
      </SmartLink>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setPinned(true)}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node | null)) {
          setPinned(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          close();
          toggleRef.current?.focus();
        }
      }}
    >
      <SmartLink
        to={section.to}
        className={linkClass}
        aria-current={active ? "page" : undefined}
      >
        {translatedLabel}
      </SmartLink>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${translatedLabel} — ${open ? "hide" : "show"} submenu`}
        onClick={() => (open ? close() : setPinned(true))}
        className={cn(
          "-ml-2 flex size-7 items-center justify-center rounded-md transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
          active ? "text-gold" : "text-navy-foreground/85",
        )}
      >
        <ChevronDown
          className={cn(
            "size-3.5 opacity-70 transition-transform",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3"
      >
        <div className="rounded-xl border border-border bg-popover p-3 shadow-[0_24px_60px_-24px_rgba(11,29,58,0.45)]">
          {section.summary ? (
            <p className="px-3 pb-2 pt-1 text-xs leading-relaxed text-muted-foreground">
              {section.summary}
            </p>
          ) : null}
          <ul className="grid gap-0.5" aria-label={translatedLabel}>
            {section.children.map((child) => {
              const childActive = pathname === child.to;
              return (
                <li key={child.to}>
                  <SmartLink
                    to={child.to}
                    aria-current={childActive ? "page" : undefined}
                    onClick={close}
                    className={cn(
                      "block rounded-lg border-l-2 px-3 py-2.5 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1",
                      childActive
                        ? "border-gold bg-secondary"
                        : "border-transparent",
                    )}
                  >
                    <span
                      className={cn(
                        "block text-sm font-medium",
                        childActive ? "text-sapphire" : "text-foreground",
                      )}
                    >
                      {child.label}
                    </span>
                    {child.description ? (
                      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                        {child.description}
                      </span>
                    ) : null}
                  </SmartLink>
                </li>
              );
            })}
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
          <ul className="flex items-center">
            {headerNav.map((s) => (
              <li key={s.to} className="flex items-center">
                <DesktopDropdown
                  section={s}
                  pathname={pathname}
                  translatedLabel={sectionLabel(s, lang, t)}
                />
              </li>
            ))}
          </ul>
        </nav>


        <div className="flex items-center gap-1">
          {/* Arabic toggle temporarily disabled — full RTL rollout scheduled with content audit */}
          {/* <LanguageToggle className="hidden sm:inline-flex" /> */}

          <SmartLink
            to="/careers"
            className="hidden px-3 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:text-gold lg:inline-flex"
          >
            Careers
          </SmartLink>
          <SmartLink
            to="/portals"
            className="hidden px-3 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:text-gold sm:inline-flex"
          >
            Portals
          </SmartLink>
          <div className="px-1">
            <SiteSearch />
          </div>
          <ButtonLink
            to="https://eduios.lighthousecampus.com/apply/lighthouse-campus"
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apply for admission to Lighthouse Campus"
            data-event="CTA Click"
            data-event-prop-cta="Apply"
            data-event-prop-location="Header"
          >
            {t("nav.apply")}

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
                {/* <LanguageToggle /> */}
              </div>
              <div className="px-4 py-4">
                <div className="mb-5">
                  <SiteSearch variant="menu" />
                </div>
                <Accordion
                  type="multiple"
                  className="w-full"
                  defaultValue={headerNav
                    .filter((s) => isSectionActive(s, pathname))
                    .map((s) => s.to)}
                >
                  {headerNav.map((s) => {
                    const active = isSectionActive(s, pathname);
                    return (
                    <AccordionItem
                      key={s.to}
                      value={s.to}
                      className="border-navy-foreground/12"
                    >
                      <AccordionTrigger
                        className={cn(
                          "border-l-2 py-3 pl-3 text-left text-base font-medium hover:no-underline",
                          active
                            ? "border-gold text-gold"
                            : "border-transparent text-navy-foreground",
                        )}
                      >
                        {sectionLabel(s, lang, t)}
                        {active ? (
                          <span className="sr-only"> (current section)</span>
                        ) : null}
                      </AccordionTrigger>
                      <AccordionContent className="pb-3">
                        <ul className="space-y-1">
                          <li>
                            <SheetClose asChild>
                              <SmartLink
                                to={s.to}
                                aria-current={pathname === s.to ? "page" : undefined}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm font-medium text-gold hover:bg-navy-foreground/10",
                                  pathname === s.to && "bg-navy-foreground/10",
                                )}
                              >
                                {t("nav.overview")}
                              </SmartLink>
                            </SheetClose>
                          </li>
                          {(s.children ?? []).map((c) => {
                            const childActive = pathname === c.to;
                            return (
                            <li key={c.to}>
                              <SheetClose asChild>
                                <SmartLink
                                  to={c.to}
                                  aria-current={childActive ? "page" : undefined}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-sm hover:bg-navy-foreground/10 hover:text-navy-foreground",
                                    childActive
                                      ? "bg-navy-foreground/10 font-medium text-gold"
                                      : "text-navy-foreground/80",
                                  )}
                                >
                                  {c.label}
                                </SmartLink>
                              </SheetClose>
                            </li>
                            );
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    );
                  })}
                </Accordion>

                <div className="mt-6 grid gap-3">
                  <SheetClose asChild>
                    <ButtonLink
                      to="https://eduios.lighthousecampus.com/apply/lighthouse-campus"
                      variant="gold"
                      size="md"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Apply for admission to Lighthouse Campus"
                    >
                      {t("nav.apply")}
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
