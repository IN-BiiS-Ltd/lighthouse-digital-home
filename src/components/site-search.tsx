"use client";

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, FileText, Users, HelpCircle, Shield, Cookie, Globe, Compass } from "lucide-react";

import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { allNav, type NavSection } from "@/lib/site-nav";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

interface SearchItem {
  label: string;
  label_ar?: string;
  to: string;
  description?: string;
  description_ar?: string;
  section: string;
  section_ar?: string;
  keywords?: string;
}

const UTILITY_PAGES: SearchItem[] = [
  {
    label: "Portals",
    label_ar: "البوابات",
    to: "/portals",
    description: "Sign-in portals for board, staff, parents and students.",
    description_ar: "بوابات تسجيل الدخول للمجلس والموظفين وأولياء الأمور والطلاب.",
    section: "Quick links",
    section_ar: "روابط سريعة",
    keywords: "login signin sign in apply eduios portal",
  },
  {
    label: "Contact",
    label_ar: "تواصل معنا",
    to: "/contact",
    description: "Reach the Lighthouse Campus team.",
    description_ar: "تواصل مع فريق لايتهاوس كامبس.",
    section: "Quick links",
    section_ar: "روابط سريعة",
  },
  {
    label: "Careers",
    label_ar: "الوظائف",
    to: "/careers",
    description: "Working at Lighthouse Campus.",
    description_ar: "العمل في لايتهاوس كامبس.",
    section: "Quick links",
    section_ar: "روابط سريعة",
  },
  {
    label: "Privacy Policy",
    label_ar: "سياسة الخصوصية",
    to: "/privacy",
    description: "How we collect and protect your data.",
    description_ar: "كيف نجمع ونحمي بياناتك.",
    section: "Legal",
    section_ar: "قانوني",
  },
  {
    label: "Terms of Use",
    label_ar: "شروط الاستخدام",
    to: "/terms",
    description: "Terms and conditions for using the site.",
    description_ar: "الشروط والأحكام لاستخدام الموقع.",
    section: "Legal",
    section_ar: "قانوني",
  },
  {
    label: "Accessibility",
    label_ar: "إمكانية الوصول",
    to: "/accessibility",
    description: "Our commitment to inclusive digital access.",
    description_ar: "التزامنا بالوصول الرقمي الشامل.",
    section: "Legal",
    section_ar: "قانوني",
  },
  {
    label: "Cookie Settings",
    label_ar: "إعدادات الكوكيز",
    to: "/cookie-settings",
    description: "Manage your cookie preferences.",
    description_ar: "إدارة تفضيلات ملفات الارتباط.",
    section: "Legal",
    section_ar: "قانوني",
  },
];

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const section of allNav) {
    items.push({
      label: section.label,
      label_ar: section.label_ar,
      to: section.to,
      description: section.summary,
      description_ar: section.summary_ar,
      section: "Overview",
      section_ar: "نظرة عامة",
    });

    for (const child of section.children ?? []) {
      items.push({
        label: child.label,
        label_ar: child.label_ar,
        to: child.to,
        description: child.description,
        description_ar: child.description_ar,
        section: section.label,
        section_ar: section.label_ar,
      });
    }
  }

  items.push(...UTILITY_PAGES);
  return items;
}

const sectionIcon: Record<string, React.ReactNode> = {
  About: <Compass className="size-4" aria-hidden />,
  "Our Model": <Globe className="size-4" aria-hidden />,
  "Learning Journey": <Compass className="size-4" aria-hidden />,
  Academics: <FileText className="size-4" aria-hidden />,
  "Student Life": <Users className="size-4" aria-hidden />,
  Campus: <Globe className="size-4" aria-hidden />,
  Admissions: <HelpCircle className="size-4" aria-hidden />,
  Parents: <Users className="size-4" aria-hidden />,
  "News & Insights": <FileText className="size-4" aria-hidden />,
  Campuses: <Globe className="size-4" aria-hidden />,
  Community: <Users className="size-4" aria-hidden />,
  "Digital Ecosystem": <Globe className="size-4" aria-hidden />,
  "Quick links": <Compass className="size-4" aria-hidden />,
  Legal: <Shield className="size-4" aria-hidden />,
  Overview: <Globe className="size-4" aria-hidden />,
};

function groupBySection(items: SearchItem[], lang: "en" | "ar") {
  const groups = new Map<string, SearchItem[]>();
  for (const item of items) {
    const key = lang === "ar" && item.section_ar ? item.section_ar : item.section;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(item);
  }
  return groups;
}

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { lang, t } = useLang();
  const allItems = useMemo(() => buildIndex(), []);

  // Global keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const groups = useMemo(() => groupBySection(allItems, lang), [allItems, lang]);

  const handleSelect = (to: string) => {
    const [path, hash] = to.split("#");
    navigate({
      to: (path || "/") as never,
      hash,
      search: {},
    } as never);
    setOpen(false);
  };

  const isMac =
    typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex items-center gap-2 rounded-md text-sm transition-colors",
          "text-navy-foreground/85 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        )}
        aria-label={t("search.trigger", "Open search")}
      >
        <Search className="size-5" aria-hidden />
        <span className="hidden lg:inline">{t("search.placeholder", "Search pages...")}</span>
        <kbd className="hidden items-center gap-1 rounded border border-navy-foreground/30 bg-navy-foreground/10 px-1.5 py-0.5 text-[0.7rem] font-sans text-navy-foreground/70 lg:inline-flex">
          <span>{isMac ? "⌘" : "Ctrl"}</span>
          <span>K</span>
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder={t("search.placeholder", "Search pages...")}
          aria-label={t("search.placeholder", "Search pages...")}
        />
        <CommandList>
          <CommandEmpty>{t("search.empty", "No pages found.")}</CommandEmpty>
          {Array.from(groups.entries()).map(([section, items]) => (
            <CommandGroup
              key={section}
              heading={
                <span className="flex items-center gap-2">
                  {sectionIcon[section] ?? <Globe className="size-4" aria-hidden />}
                  {section}
                </span>
              }
            >
              {items.map((item) => {
                const label = lang === "ar" && item.label_ar ? item.label_ar : item.label;
                const description =
                  lang === "ar" && item.description_ar
                    ? item.description_ar
                    : item.description;
                const value = [item.label, item.label_ar, item.keywords, item.to]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <CommandItem
                    key={item.to}
                    value={value}
                    onSelect={() => handleSelect(item.to)}
                    className="flex-col items-start gap-0.5 py-2.5"
                    aria-label={label}
                  >
                    <span className="flex w-full items-center justify-between">
                      <span className="font-medium">{label}</span>
                      <CommandShortcut className="text-[0.65rem] opacity-0 transition-opacity group-data-[selected=true]:opacity-100">
                        ↵
                      </CommandShortcut>
                    </span>
                    {description ? (
                      <span className="line-clamp-1 text-xs text-muted-foreground">{description}</span>
                    ) : null}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
        <div className="flex items-center justify-between border-t px-3 py-2 text-xs text-muted-foreground">
          <span>{t("search.hint", "Press ↑↓ to navigate, ↵ to open")}</span>
          <span>{t("search.shortcut", "{{modifier}} + K to toggle")}</span>
        </div>
      </CommandDialog>
    </>
  );
}
