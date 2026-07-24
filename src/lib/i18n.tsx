import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
export type Dir = "ltr" | "rtl";

const STORAGE_KEY = "lh_lang";

/**
 * Institutional translation dictionary.
 * Scope: header, footer, primary CTAs and universally-visible chrome.
 * Deeper editorial content remains in English (add keys here to extend).
 */
const dict: Record<string, { en: string; ar: string }> = {
  // ─── Language toggle
  "lang.toggle": { en: "العربية", ar: "English" },
  "lang.aria": { en: "Switch to Arabic", ar: "التبديل إلى الإنجليزية" },

  // ─── Skip link
  "a11y.skip": { en: "Skip to main content", ar: "تخطَّ إلى المحتوى الرئيسي" },

  // ─── Nav — top level
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.our-model": { en: "Our Model", ar: "نموذجنا" },
  "nav.learning-journey": { en: "Learning Journey", ar: "الرحلة التعليمية" },
  "nav.academics": { en: "Academics", ar: "الأكاديمي" },
  "nav.student-life": { en: "Student Life", ar: "حياة الطلاب" },
  "nav.campus": { en: "Campus", ar: "الحرم" },
  "nav.parents": { en: "Parents", ar: "أولياء الأمور" },
  "nav.news": { en: "News & Insights", ar: "الأخبار والرؤى" },
  "nav.campuses": { en: "Campuses", ar: "الفروع" },
  "nav.community": { en: "Community", ar: "المجتمع" },
  "nav.digital-ecosystem": { en: "Digital Ecosystem", ar: "المنظومة الرقمية" },
  "nav.explore": { en: "Explore", ar: "استكشف" },
  "nav.admissions": { en: "Admissions", ar: "التسجيل" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.overview": { en: "Overview", ar: "نظرة عامة" },
  "nav.open-menu": { en: "Open menu", ar: "افتح القائمة" },
  "nav.site-navigation": { en: "Site navigation", ar: "قائمة الموقع" },
  "nav.primary": { en: "Primary", ar: "التنقل الرئيسي" },

  // ─── Nav summaries (Explore dropdown)
  "nav.explore-summary": {
    en: "Parents, news, campuses, community and careers.",
    ar: "أولياء الأمور، الأخبار، الفروع، المجتمع والوظائف.",
  },

  // ─── Footer
  "footer.explore": { en: "Explore", ar: "استكشف" },
  "footer.community": { en: "Community", ar: "المجتمع" },
  "footer.mohandessin": { en: "Mohandessin Campus", ar: "فرع المهندسين" },
  "footer.digital-ecosystem": { en: "A growing digital ecosystem", ar: "منظومة رقمية متنامية" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.privacy": { en: "Privacy", ar: "الخصوصية" },
  "footer.terms": { en: "Terms", ar: "الشروط" },
  "footer.cookies": { en: "Cookies", ar: "ملفات الارتباط" },
  "footer.cookie-settings": { en: "Cookie settings", ar: "إعدادات الكوكيز" },
  "footer.accessibility": { en: "Accessibility", ar: "إمكانية الوصول" },
  "footer.careers": { en: "Careers", ar: "الوظائف" },
  "footer.address": { en: "Mohandessin, Giza, Greater Cairo, Egypt", ar: "المهندسين، الجيزة، القاهرة الكبرى، مصر" },
  "footer.official-lockup": { en: "Official Institutional Lockup", ar: "الشعار المؤسسي الرسمي" },
  "footer.brand-tagline": {
    en: "Guiding minds. Inspiring futures. Connecting possibilities. A living learning community where students remain at the centre.",
    ar: "نُرشد العقول. نُلهم المستقبل. نربط الإمكانيات. مجتمع تعلّم حيّ يبقى فيه الطالب في القلب.",
  },

  // ─── Ecosystem chips
  "eco.parent-portal": { en: "Parent Portal", ar: "بوابة أولياء الأمور" },
  "eco.student-portal": { en: "Student Portal", ar: "بوابة الطلاب" },
  "eco.learning-platform": { en: "Learning Platform", ar: "منصة التعلّم" },
  "eco.online-admissions": { en: "Online Admissions", ar: "التسجيل الإلكتروني" },
  "eco.resource-library": { en: "Resource Library", ar: "مكتبة الموارد" },
  "eco.alumni-network": { en: "Alumni Network", ar: "شبكة الخريجين" },

  // ─── Home hero
  "home.eyebrow": { en: "Lighthouse Campus · Mohandessin", ar: "لايتهاوس كامبس · المهندسين" },
  "home.hero.title": {
    en: "A place where learning leads and every student is seen.",
    ar: "مكان يقود فيه التعلّم، ويُرى فيه كل طالب.",
  },
  "home.hero.subtitle": {
    en: "Guiding minds. Inspiring futures. Connecting possibilities. An international learning community built around curiosity, character and belonging.",
    ar: "نُرشد العقول. نُلهم المستقبل. نربط الإمكانيات. مجتمع تعلّم دولي يقوم على الفضول والشخصية والانتماء.",
  },
  "home.hero.cta.admissions": { en: "Begin the admissions journey", ar: "ابدأ رحلة التسجيل" },
  "home.hero.cta.about": { en: "Discover our story", ar: "اكتشف قصتنا" },
};

interface Ctx {
  lang: Lang;
  dir: Dir;
  t: (key: string, fallback?: string) => string;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "en" on the server so hydration matches; switch after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ar" || stored === "en") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const dir: Dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.classList.toggle("lang-ar", lang === "ar");
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  }, []);

  const toggle = useCallback(() => setLang(lang === "ar" ? "en" : "ar"), [lang, setLang]);

  const t = useCallback((key: string, fallback?: string) => {
    const entry = dict[key];
    if (!entry) return fallback ?? key;
    return entry[lang] ?? entry.en ?? fallback ?? key;
  }, [lang]);

  const value = useMemo<Ctx>(() => ({ lang, dir, t, setLang, toggle }), [lang, dir, t, setLang, toggle]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for isolated component previews / pre-provider render.
    return {
      lang: "en",
      dir: "ltr",
      t: (_k, fb) => fb ?? _k,
      setLang: () => {},
      toggle: () => {},
    };
  }
  return ctx;
}

/** Pick an Arabic label off a nav-item if present, else fall back to `label`. */
export function localizedLabel<T extends { label: string; label_ar?: string }>(
  item: T,
  lang: Lang,
): string {
  if (lang === "ar" && item.label_ar) return item.label_ar;
  return item.label;
}
