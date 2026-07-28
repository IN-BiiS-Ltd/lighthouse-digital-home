import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow, ButtonLink, SmartLink } from "@/components/blocks";
import { ShareBar } from "@/components/share-bar";
import { Download, CheckCircle2, CalendarDays, Search, SlidersHorizontal, ArrowUpDown, ArrowUp, ArrowDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
    size: "PNG 517 KB · 1024 × 1536",
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
    size: "PNG 396 KB · 1024 × 1536",
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
    size: "PNG 357 KB · 1024 × 1536",
    related: { label: "Careers — we are hiring", to: "/careers" },
  },
];

export const Route = createFileRoute("/announcements-library")({
  head: () => ({
    meta: [
      { title: "Announcements Library | Official Posters | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Browse every approved Lighthouse Campus announcement poster with previews, approval dates and full-resolution downloads for print and social media.",
      },
      { property: "og:title", content: "Announcements Library | Official Posters | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "Approved Lighthouse Campus posters — registration and recruitment announcements with preview images, approval dates and downloads.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://lighthousecampus.com/admissions-2026-2027-a.png" },
      { name: "twitter:image", content: "https://lighthousecampus.com/admissions-2026-2027-a.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: AnnouncementsLibrary,
});

function PosterCard({ p }: { p: Poster }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-card">
      <a
        href={`${p.base}.png`}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-navy/5 p-4"
      >
        <picture>
          <source srcSet={`${p.base}.webp`} type="image/webp" />
          <img
            src={`${p.base}.png`}
            alt={`${p.title} — approved Lighthouse Campus announcement poster.`}
            width={1024}
            height={1536}
            loading="lazy"
            className="w-full rounded-xl shadow-sm"
          />
        </picture>
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

function normalizeText(input: string) {
  return input.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function AnnouncementsLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | Poster["category"]>("All");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortField, setSortField] = useState<"title" | "date">("date");
  const [sortAsc, setSortAsc] = useState(false);

  const filtered = useMemo(() => {
    const q = normalizeText(query);
    let list = POSTERS.filter((p) => {
      const matchesQuery =
        q.length === 0 ||
        normalizeText(p.title).includes(q) ||
        normalizeText(p.titleAr).includes(q) ||
        normalizeText(p.summary).includes(q);
      const matchesCategory = category === "All" || p.category === category;
      const matchesDate =
        (!dateFrom || p.approved >= dateFrom) && (!dateTo || p.approved <= dateTo);
      return matchesQuery && matchesCategory && matchesDate;
    });

    list.sort((a, b) => {
      let cmp = 0;
      if (sortField === "date") {
        cmp = a.approved.localeCompare(b.approved);
      } else {
        cmp = a.title.localeCompare(b.title);
      }
      return sortAsc ? cmp : -cmp;
    });

    return list;
  }, [query, category, dateFrom, dateTo, sortField, sortAsc]);

  const hasActiveFilters = query || category !== "All" || dateFrom || dateTo || sortField !== "date" || sortAsc;

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setDateFrom("");
    setDateTo("");
    setSortField("date");
    setSortAsc(false);
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
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          {filtered.length} approved {filtered.length === 1 ? "poster" : "posters"} match your filters.
          Files are supplied at print resolution; the WebP version is lighter for messaging and social channels.
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
                  onClick={() => setSortAsc((prev) => !prev)}
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

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <PosterCard key={p.key} p={p} />
          ))}
        </div>

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
