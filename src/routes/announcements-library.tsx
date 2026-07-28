import { createFileRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useEffect, useMemo, useRef, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow, ButtonLink, SmartLink } from "@/components/blocks";
import { ShareBar } from "@/components/share-bar";
import { Download, CheckCircle2, CalendarDays, Search, SlidersHorizontal, ArrowUp, ArrowDown, X, ChevronLeft, ChevronRight, LayoutGrid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const URL = "https://lighthousecampus.com/announcements-library";

type Poster = {
  key: string;
  base: string;
  title: string;
  titleAr: string;
  summary: string;
  category: "Admissions" | "Careers";
  approved: string;
  approvedLabel: string;
  size: string;
  related: { label: string; to: string };
};

const POSTERS: Poster[] = [
  {
    key: "admissions-a",
    base: "/admissions-2026-2027-a",
    title: "Registration 2026 / 2027 — official campus edition",
    titleAr: "إعلان التسجيل ٢٠٢٦ / ٢٠٢٧ — النسخة الرسمية",
    summary:
      "The primary registration announcement for the new academic year, showing curricula, stages and enquiry details.",
    category: "Admissions",
    approved: "2026-07-28",
    approvedLabel: "28 July 2026",
    size: "PNG 309 KB · 1024 × 1536",
    related: { label: "Academic year announcements", to: "/admissions/academic-year-announcements" },
  },
  {
    key: "admissions-b",
    base: "/admissions-2026-2027-b",
    title: "Registration 2026 / 2027 — international edition",
    titleAr: "إعلان التسجيل ٢٠٢٦ / ٢٠٢٧ — نسخة التنوع الدولي",
    summary:
      "An alternate composition of the same registration announcement, reflecting the international character of the campus community.",
    category: "Admissions",
    approved: "2026-07-28",
    approvedLabel: "28 July 2026",
    size: "PNG 495 KB · 1024 × 1536",
    related: { label: "Admissions overview", to: "/admissions" },
  },
  {
    key: "admissions-c",
    base: "/admissions-2026-2027-c",
    title: "Registration 2026 / 2027 — recruitment edition",
    titleAr: "إعلان التسجيل ٢٠٢٦ / ٢٠٢٧ — نسخة التوظيف والتسجيل",
    summary:
      "A professional recruitment and admissions variant featuring a diverse student group and combined curriculum details.",
    category: "Admissions",
    approved: "2026-07-28",
    approvedLabel: "28 July 2026",
    size: "PNG 531 KB · 1024 × 1536",
    related: { label: "Admissions overview", to: "/admissions" },
  },
  {
    key: "teachers",
    base: "/teachers-hiring-2026-2027",
    title: "Teacher recruitment 2026 / 2027",
    titleAr: "إعلان التعيينات — معلمون ٢٠٢٦ / ٢٠٢٧",
    summary:
      "Open teaching vacancies for the 2026 / 2027 academic year, with subject areas and application instructions.",
    category: "Careers",
    approved: "2026-07-28",
    approvedLabel: "28 July 2026",
    size: "PNG 331 KB · 1024 × 1536",
    related: { label: "Careers — we are hiring", to: "/careers" },
  },
];

const librarySearchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "All").default("All"),
  from: fallback(z.string(), "").default(""),
  to: fallback(z.string(), "").default(""),
  sort: fallback(z.string(), "date").default("date"),
  dir: fallback(z.string(), "desc").default("desc"),
  size: fallback(z.number().int(), 6).default(6),
  page: fallback(z.number().int(), 1).default(1),
  view: fallback(z.string(), "grid").default("grid"),
});

type LibrarySearch = z.infer<typeof librarySearchSchema>;

function normalizeText(input: string) {
  return input.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function selectPosters(search: LibrarySearch) {
  const q = normalizeText(search.q);
  const category = search.category === "Admissions" || search.category === "Careers" ? search.category : "All";
  const sortField = search.sort === "title" ? "title" : "date";
  const sortAsc = search.dir === "asc";

  const list = POSTERS.filter((p) => {
    const matchesQuery =
      q.length === 0 ||
      normalizeText(p.title).includes(q) ||
      normalizeText(p.titleAr).includes(q) ||
      normalizeText(p.summary).includes(q);
    const matchesCategory = category === "All" || p.category === category;
    const matchesDate =
      (!search.from || p.approved >= search.from) && (!search.to || p.approved <= search.to);
    return matchesQuery && matchesCategory && matchesDate;
  });

  list.sort((a, b) => {
    const cmp =
      sortField === "date" ? a.approved.localeCompare(b.approved) : a.title.localeCompare(b.title);
    return sortAsc ? cmp : -cmp;
  });

  return list;
}

// Canonical URLs intentionally omit `view` (grid/list): both views render the
// same posters in the same order, so they must collapse to one indexed URL.
function pagedUrl(page: number) {
  return page <= 1 ? URL : `${URL}?page=${page}`;
}

export const Route = createFileRoute("/announcements-library")({
  validateSearch: zodValidator(librarySearchSchema),
  head: ({ match }) => {
    const search = match.search as LibrarySearch;
    const isFiltered =
      Boolean(search.q) ||
      (search.category && search.category !== "All") ||
      Boolean(search.from) ||
      Boolean(search.to) ||
      search.sort !== "date" ||
      search.dir !== "desc" ||
      search.size !== 6;


    const pageSize = [3, 6, 9, 12].includes(search.size) ? search.size : 6;
    const list = selectPosters(search);
    const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    const page = Math.min(Math.max(1, search.page), totalPages);
    const start = (page - 1) * pageSize;
    const visible = list.slice(start, start + pageSize);

    const pageSuffix = page > 1 ? ` — page ${page} of ${totalPages}` : "";
    const title = `Announcements Library | Official Posters | Lighthouse Campus${pageSuffix}`;

    const links: Array<{ rel: string; href: string }> = [
      { rel: "canonical", href: isFiltered ? URL : pagedUrl(page) },
    ];
    if (!isFiltered) {
      if (page > 1) links.push({ rel: "prev", href: pagedUrl(page - 1) });
      if (page < totalPages) links.push({ rel: "next", href: pagedUrl(page + 1) });
    }

    const meta: Array<Record<string, string>> = [
      { title },
      {
        name: "description",
        content:
          "Browse every approved Lighthouse Campus announcement poster with previews, approval dates and full-resolution downloads for print and social media.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content:
          "Approved Lighthouse Campus posters — registration and recruitment announcements with preview images, approval dates and downloads.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: isFiltered ? URL : pagedUrl(page) },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://lighthousecampus.com/admissions-2026-2027-a.png" },
      { name: "twitter:image", content: "https://lighthousecampus.com/admissions-2026-2027-a.png" },
    ];
    if (isFiltered) meta.push({ name: "robots", content: "noindex,follow" });

    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: title,
            url: isFiltered ? URL : pagedUrl(page),
            isPartOf: { "@type": "WebSite", name: "Lighthouse Campus", url: "https://lighthousecampus.com" },
            mainEntity: {
              "@type": "ItemList",
              name: "Approved Lighthouse Campus announcement posters",
              numberOfItems: list.length,
              itemListOrder:
                search.dir === "asc" ? "https://schema.org/ItemListOrderAscending" : "https://schema.org/ItemListOrderDescending",
              itemListElement: visible.map((p, i) => ({
                "@type": "ListItem",
                position: start + i + 1,
                url: `https://lighthousecampus.com${p.base}.png`,
                item: {
                  "@type": "CreativeWork",
                  name: p.title,
                  description: p.summary,
                  datePublished: p.approved,
                  image: `https://lighthousecampus.com${p.base}.png`,
                  genre: p.category,
                },
              })),
            },
          }),
        },
      ],
    };
  },

  component: AnnouncementsLibrary,
});

function PosterCard({ p, priority, layout = "grid" }: { p: Poster; priority?: boolean; layout?: "grid" | "list" }) {
  const webpSrcSet = `${p.base}.256.webp 256w, ${p.base}.512.webp 512w, ${p.base}.webp 1024w`;
  const pngSrcSet = `${p.base}.256.png 256w, ${p.base}.512.png 512w, ${p.base}.png 1024w`;
  const isList = layout === "list";
  const [loaded, setLoaded] = useState(false);
  const sizes = isList
    ? "(max-width: 768px) 40vw, 220px"
    : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px";

  return (
    <article
      className={
        isList
          ? "flex flex-col gap-4 overflow-hidden rounded-2xl border border-gold/30 bg-card sm:flex-row"
          : "flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-card"
      }
    >
      <a
        href={`${p.base}.png`}
        target="_blank"
        rel="noopener noreferrer"
        className={isList ? "block shrink-0 bg-navy/5 p-4 sm:w-56" : "block bg-navy/5 p-4"}
      >
        <div
          className="relative w-full overflow-hidden rounded-xl bg-navy/5"
          style={{ aspectRatio: "1024 / 1536" }}
        >
          {!loaded && (
            <div className="absolute inset-0 animate-pulse rounded-xl bg-gradient-to-b from-navy/10 to-navy/5" aria-hidden />
          )}
        <picture>
          <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" />
          <source srcSet={pngSrcSet} sizes={sizes} type="image/png" />
          <img
            src={`${p.base}.png`}
            alt={`${p.title} — approved Lighthouse Campus announcement poster.`}
            width={1024}
            height={1536}
            srcSet={pngSrcSet}
            sizes={sizes}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding={priority ? "sync" : "async"}
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 size-full rounded-xl object-cover shadow-sm transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </picture>
        </div>
      </a>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-gold/40 px-2.5 py-1 font-medium text-foreground">
            {p.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <CheckCircle2 className="size-3.5 text-gold" aria-hidden />
            Approved
          </span>
        </div>

        <h3 className="font-display text-lg leading-snug text-foreground">{p.title}</h3>
        <p className="text-sm text-foreground/80" dir="rtl">
          {p.titleAr}
        </p>
        <p className="text-sm text-muted-foreground">{p.summary}</p>

        <dl className="mt-1 grid gap-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-3.5 text-gold" aria-hidden />
            <dt className="sr-only">Approval date</dt>
            <dd>
              Approved on{" "}
              <time dateTime={p.approved} className="text-foreground">
                {p.approvedLabel}
              </time>
            </dd>
          </div>
          <div>
            <dt className="sr-only">File</dt>
            <dd>{p.size}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <a
            href={`${p.base}.png`}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy transition hover:opacity-90"
          >
            <Download className="size-4" aria-hidden />
            Download PNG
          </a>
          <a
            href={`${p.base}.webp`}
            download
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm font-medium text-foreground transition hover:border-gold"
          >
            <Download className="size-4" aria-hidden />
            WebP
          </a>
          <SmartLink
            to={p.related.to}
            className="inline-flex items-center rounded-full px-3 py-2 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {p.related.label}
          </SmartLink>
        </div>
      </div>
    </article>
  );
}


function PosterSkeleton({ layout }: { layout: "grid" | "list" }) {
  const isList = layout === "list";
  return (
    <div
      aria-hidden
      className={
        isList
          ? "flex animate-pulse flex-col gap-4 rounded-2xl border border-gold/20 bg-card sm:flex-row"
          : "flex animate-pulse flex-col rounded-2xl border border-gold/20 bg-card"
      }
    >
      <div className={isList ? "shrink-0 p-4 sm:w-56" : "p-4"}>
        <div className="w-full rounded-xl bg-navy/10" style={{ aspectRatio: "1024 / 1536" }} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="h-5 w-24 rounded-full bg-navy/10" />
        <div className="h-5 w-3/4 rounded bg-navy/10" />
        <div className="h-4 w-1/2 rounded bg-navy/10" />
        <div className="h-4 w-full rounded bg-navy/10" />
        <div className="mt-auto flex gap-2 pt-4">
          <div className="h-9 w-32 rounded-full bg-navy/10" />
          <div className="h-9 w-24 rounded-full bg-navy/10" />
        </div>
      </div>
    </div>
  );
}

const VIEW_STORAGE_KEY = "lighthouse:announcements-library:view";

function AnnouncementsLibrary() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });

  const query = search.q;
  const category: "All" | Poster["category"] =
    search.category === "Admissions" || search.category === "Careers" ? search.category : "All";
  const dateFrom = search.from;
  const dateTo = search.to;
  const sortField: "title" | "date" = search.sort === "title" ? "title" : "date";
  const sortAsc = search.dir === "asc";
  const pageSize = [3, 6, 9, 12].includes(search.size) ? search.size : 6;

  const setSearch = (
    next: Partial<{ q: string; category: string; from: string; to: string; sort: string; dir: string; size: number; page: number; view: string }>,
    resetPage = true,
  ) => {
    navigate({
      search: { ...search, ...(resetPage ? { page: 1 } : {}), ...next },
      replace: true,
      resetScroll: false,
    });
  };

  const setQuery = (value: string) => setSearch({ q: value });
  const setCategory = (value: "All" | Poster["category"]) => setSearch({ category: value });
  const setDateFrom = (value: string) => setSearch({ from: value });
  const setDateTo = (value: string) => setSearch({ to: value });
  const setSortField = (value: "title" | "date") => setSearch({ sort: value });
  const setSortAsc = (value: boolean) => setSearch({ dir: value ? "asc" : "desc" });
  const setPageSize = (value: number) => setSearch({ size: value });
  const viewMode: "grid" | "list" = search.view === "list" ? "list" : "grid";

  const filtered = useMemo(() => selectPosters(search), [search]);


  const hasActiveFilters = query || category !== "All" || dateFrom || dateTo || sortField !== "date" || sortAsc;

  const gridRef = useRef<HTMLDivElement>(null);
  const resultsHeadingRef = useRef<HTMLParagraphElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(false);
  const [status, setStatus] = useState("");
  const [isPending, setIsPending] = useState(false);
  const gridViewRef = useRef<HTMLButtonElement>(null);
  const listViewRef = useRef<HTMLButtonElement>(null);
  const [reservedHeight, setReservedHeight] = useState<number | undefined>(undefined);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(Math.max(1, search.page), totalPages);
  const pageStart = (safePage - 1) * pageSize;
  const visible = filtered.slice(pageStart, pageStart + pageSize);

  const setViewMode = (value: "grid" | "list") => {
    if (value === viewMode) return;
    // Keep the user in place: no page reset, no scroll, focus stays on the toggle.
    setSearch({ view: value }, false);
    try {
      window.localStorage.setItem(VIEW_STORAGE_KEY, value);
    } catch {
      /* storage unavailable — preference simply is not persisted */
    }
    setStatus(
      value === "list"
        ? `List view. Showing ${visible.length} of ${filtered.length} posters on page ${safePage} of ${totalPages}.`
        : `Grid view. Showing ${visible.length} of ${filtered.length} posters on page ${safePage} of ${totalPages}.`,
    );
    requestAnimationFrame(() => {
      (value === "list" ? listViewRef : gridViewRef).current?.focus({ preventScroll: true });
    });
  };

  const onViewKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setViewMode("list");
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setViewMode("grid");
    } else if (event.key === "Home") {
      event.preventDefault();
      setViewMode("grid");
    } else if (event.key === "End") {
      event.preventDefault();
      setViewMode("list");
    }
  };

  useEffect(() => {
    if (!shouldScrollRef.current) return;
    shouldScrollRef.current = false;
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    resultsHeadingRef.current?.focus({ preventScroll: true });
  }, [safePage]);

  // Restore the saved view preference only when the URL does not specify one,
  // so shared links keep the view their author chose.
  const restoredViewRef = useRef(false);
  useEffect(() => {
    if (restoredViewRef.current) return;
    restoredViewRef.current = true;
    if (searchStr.includes("view=")) return;
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(VIEW_STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (saved === "list" || saved === "grid") {
      if (saved !== viewMode) {
        navigate({ search: { ...search, view: saved }, replace: true, resetScroll: false });
      }
    }
  }, []);

  const transitionKey = `${search.q}|${search.category}|${search.from}|${search.to}|${search.sort}|${search.dir}|${search.size}|${search.page}|${search.view}`;
  const firstTransitionRef = useRef(true);
  useEffect(() => {
    if (firstTransitionRef.current) {
      firstTransitionRef.current = false;
      return;
    }
    // Freeze the current results height so swapping layouts or pages cannot shift the page.
    setReservedHeight(gridRef.current?.getBoundingClientRect().height);
    setIsPending(true);
    const timer = window.setTimeout(() => {
      setIsPending(false);
      setReservedHeight(undefined);
    }, 260);
    return () => window.clearTimeout(timer);
  }, [transitionKey]);

  const filterKey = `${search.q}|${search.category}|${search.from}|${search.to}|${search.sort}|${search.dir}|${search.size}`;
  const firstRunRef = useRef(true);
  useEffect(() => {
    if (firstRunRef.current) {
      firstRunRef.current = false;
      return;
    }
    setStatus(
      filtered.length === 0
        ? "No posters match the current filters."
        : `${filtered.length} ${filtered.length === 1 ? "poster matches" : "posters match"} the current filters. Showing page 1 of ${Math.max(1, Math.ceil(filtered.length / pageSize))}.`,
    );
  }, [filterKey]);


  const goToPage = (next: number) => {
    const target = Math.max(1, Math.min(totalPages, next));
    if (target === safePage) return;
    shouldScrollRef.current = true;
    setStatus(`Page ${target} of ${totalPages}. Showing posters ${(target - 1) * pageSize + 1} to ${Math.min(target * pageSize, filtered.length)} of ${filtered.length}.`);
    setSearch({ page: target }, false);
  };

  const onPaginationKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight" ? safePage + 1
      : event.key === "ArrowLeft" ? safePage - 1
      : event.key === "Home" ? 1
      : totalPages;
    goToPage(next);
    requestAnimationFrame(() => {
      paginationRef.current
        ?.querySelector<HTMLButtonElement>('button[aria-current="page"]')
        ?.focus();
    });
  };

  const clearFilters = () => {
    navigate({
      search: { q: "", category: "All", from: "", to: "", sort: "date", dir: "desc", size: 6, page: 1 },
      replace: true,
      resetScroll: false,
    });
    setStatus(`Filters cleared. Showing all ${POSTERS.length} approved posters.`);
    requestAnimationFrame(() => searchInputRef.current?.focus());
  };


  return (
    <>
      <PageHero
        eyebrow="Newsroom / Announcements library"
        title="Every approved Lighthouse Campus announcement, in one place."
        intro="Preview, verify and download the official posters we publish for registration and recruitment. Each item shows its approval date and is issued only with the approved institutional logo — unmodified."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Announcements Library" }]}
        sections={[
          { label: "Library", to: "#library" },
          { label: "Usage rules", to: "#usage" },
        ]}
      />

      <Section id="library" tone="default">
        <Eyebrow>Approved posters</Eyebrow>
        <h2 className="mt-3 font-display text-2xl leading-snug text-foreground md:text-3xl">
          Announcement library.
        </h2>
        <p
          ref={resultsHeadingRef}
          tabIndex={-1}
          className="mt-2 max-w-2xl scroll-mt-24 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 md:text-base"
        >
          {filtered.length} approved {filtered.length === 1 ? "poster" : "posters"} match your filters
          {totalPages > 1 ? ` — page ${safePage} of ${totalPages}` : ""}.
          Files are supplied at print resolution; the WebP version is lighter for messaging and social channels.
        </p>

        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {status}
        </p>


        <div className="mt-8 rounded-2xl border border-gold/20 bg-card p-4 shadow-sm md:p-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
            <SlidersHorizontal className="size-4 text-gold" aria-hidden />
            <span>Search and filter</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1.5 lg:col-span-2">
              <Label htmlFor="poster-search" className="text-xs font-medium text-muted-foreground">
                Search by title
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                <Input
                  id="poster-search"
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search title or Arabic title..."
                  className="pl-9"
                />

              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="poster-category" className="text-xs font-medium text-muted-foreground">
                Type
              </Label>
              <select
                id="poster-category"
                value={category}
                onChange={(e) => setCategory(e.target.value as typeof category)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <option value="All">All types</option>
                <option value="Admissions">Admissions</option>
                <option value="Careers">Careers</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="poster-sort" className="text-xs font-medium text-muted-foreground">
                Sort by
              </Label>
              <div className="flex gap-2">
                <select
                  id="poster-sort"
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value as typeof sortField)}
                  className="flex h-9 flex-1 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  <option value="date">Approval date</option>
                  <option value="title">Title</option>
                </select>
                <button
                  type="button"
                  onClick={() => setSortAsc(!sortAsc)}
                  className="inline-flex h-9 items-center justify-center gap-1 rounded-md border border-input px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  aria-label={sortAsc ? "Sort ascending" : "Sort descending"}
                  title={sortAsc ? "Ascending" : "Descending"}
                >
                  {sortAsc ? <ArrowUp className="size-4" /> : <ArrowDown className="size-4" />}
                  <span className="sr-only">{sortAsc ? "Ascending" : "Descending"}</span>
                </button>
              </div>
            </div>

            <div className="space-y-1.5 md:col-span-2 lg:col-span-2">
              <span className="text-xs font-medium text-muted-foreground">Approval date range</span>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <CalendarDays className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                  <Input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    placeholder="From"
                    className="pl-9"
                    aria-label="Approval date from"
                  />
                </div>
                <span className="text-muted-foreground">—</span>
                <div className="relative flex-1">
                  <CalendarDays className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                  <Input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    placeholder="To"
                    className="pl-9"
                    aria-label="Approval date to"
                  />
                </div>
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gold/10 pt-4">
              <span className="text-xs text-muted-foreground">Active filters:</span>
              {query && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 text-xs text-foreground">
                  Title: {query}
                  <button type="button" onClick={() => setQuery("")} aria-label="Clear title filter">
                    <X className="size-3" />
                  </button>
                </span>
              )}
              {category !== "All" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 text-xs text-foreground">
                  Type: {category}
                  <button type="button" onClick={() => setCategory("All")} aria-label="Clear type filter">
                    <X className="size-3" />
                  </button>
                </span>
              )}
              {(dateFrom || dateTo) && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 text-xs text-foreground">
                  Date: {dateFrom || "..."} — {dateTo || "..."}
                  <button type="button" onClick={() => { setDateFrom(""); setDateTo(""); }} aria-label="Clear date filter">
                    <X className="size-3" />
                  </button>
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 text-xs text-foreground">
                Sort: {sortField === "date" ? "Date" : "Title"} {sortAsc ? "↑" : "↓"}
              </span>
              <button
                type="button"
                onClick={clearFilters}
                className="ml-auto inline-flex items-center gap-1 text-xs text-gold hover:underline"
              >
                <X className="size-3" />
                Clear all
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center justify-end gap-2">
          <span className="text-xs font-medium text-muted-foreground">View</span>
          <div
            role="group"
            aria-label="Results view"
            onKeyDown={onViewKeyDown}
            className="inline-flex rounded-full border border-gold/30 p-1"
          >
            <button
              type="button"
              ref={gridViewRef}
              onClick={() => setViewMode("grid")}
              aria-pressed={viewMode === "grid"}
              aria-controls="poster-results"
              tabIndex={viewMode === "grid" ? 0 : -1}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${viewMode === "grid" ? "bg-gold text-navy" : "text-muted-foreground hover:text-foreground"}`}
            >
              <LayoutGrid className="size-4" aria-hidden />
              Grid
            </button>
            <button
              type="button"
              ref={listViewRef}
              onClick={() => setViewMode("list")}
              aria-pressed={viewMode === "list"}
              aria-controls="poster-results"
              tabIndex={viewMode === "list" ? 0 : -1}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${viewMode === "list" ? "bg-gold text-navy" : "text-muted-foreground hover:text-foreground"}`}
            >
              <List className="size-4" aria-hidden />
              List
            </button>
          </div>
        </div>

        <div
          id="poster-results"
          ref={gridRef}
          className={
            viewMode === "list"
              ? "mt-4 flex scroll-mt-24 flex-col gap-4"
              : "mt-4 grid scroll-mt-24 gap-8 md:grid-cols-2 xl:grid-cols-3"
          }
          style={reservedHeight ? { minHeight: reservedHeight } : undefined}
          aria-busy={isPending}
        >
          {isPending
            ? visible.map((p) => <PosterSkeleton key={`sk-${p.key}`} layout={viewMode} />)
            : visible.map((p, i) => (
                <PosterCard
                  key={`${viewMode}-${p.key}`}
                  p={p}
                  layout={viewMode}
                  priority={safePage === 1 && i < 3}
                />
              ))}
        </div>

        {filtered.length > 0 && (
          <nav
            aria-label="Announcements library pagination"
            className="mt-10 flex flex-col gap-4 border-t border-gold/20 pt-6 md:flex-row md:items-center md:justify-between"
          >
            <p className="text-sm text-muted-foreground">
              Showing {pageStart + 1}–{Math.min(pageStart + pageSize, filtered.length)} of{" "}
              {filtered.length} posters
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Label htmlFor="page-size" className="text-xs text-muted-foreground">
                Per page
              </Label>
              <select
                id="page-size"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="h-11 rounded-full border border-gold/30 bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {[3, 6, 9, 12].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>

              <div
                ref={paginationRef}
                className="flex items-center gap-1"
                onKeyDown={onPaginationKeyDown}
              >
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  aria-label={`Go to previous page, page ${Math.max(1, safePage - 1)}`}
                  className="inline-flex h-11 items-center gap-1 rounded-full border border-gold/30 px-3 text-sm text-foreground transition hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" aria-hidden />
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => goToPage(n)}
                    aria-current={n === safePage ? "page" : undefined}
                    aria-label={n === safePage ? `Page ${n}, current page` : `Go to page ${n}`}
                    className={`inline-flex size-11 items-center justify-center rounded-full border text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                      n === safePage
                        ? "border-gold bg-gold font-medium text-navy"
                        : "border-gold/30 text-foreground hover:border-gold"
                    }`}
                  >
                    {n}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  aria-label={`Go to next page, page ${Math.min(totalPages, safePage + 1)}`}
                  className="inline-flex h-11 items-center gap-1 rounded-full border border-gold/30 px-3 text-sm text-foreground transition hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="size-4" aria-hidden />
                </button>
              </div>

              <p className="sr-only">
                Use the left and right arrow keys, or Home and End, to move between pages.
              </p>
            </div>
          </nav>
        )}


        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-gold/20 bg-card p-8 text-center">
            <p className="font-display text-lg text-foreground">No posters match your filters.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search, date range, or type selection.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy transition hover:opacity-90"
            >
              <X className="size-4" />
              Clear filters
            </button>
          </div>
        )}

        <div className="mt-8">
          <ShareBar title="Lighthouse Campus — announcements library" />
        </div>
      </Section>

      <Section id="usage" tone="muted">
        <Eyebrow>Usage rules</Eyebrow>
        <h2 className="mt-3 font-display text-2xl leading-snug text-foreground md:text-3xl">
          How these posters may be used.
        </h2>
        <ul className="mt-6 grid max-w-3xl gap-4 text-sm text-muted-foreground md:text-base">
          <li>
            Share files exactly as published. Cropping, recolouring or altering the institutional
            logo is not permitted.
          </li>
          <li>
            Only posters listed here are approved for circulation; anything older should be
            withdrawn once a newer approval date appears.
          </li>
          <li>
            For a new announcement or a translated edition, contact the communications team at{" "}
            <a className="underline underline-offset-4" href="mailto:ceo@lighthousecampus.com">
              ceo@lighthousecampus.com
            </a>
            .
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/admissions/academic-year-announcements">
            Academic year announcements
          </ButtonLink>
          <ButtonLink to="/careers" variant="ghost">
            Careers
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
