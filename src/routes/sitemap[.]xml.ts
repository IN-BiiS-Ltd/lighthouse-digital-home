import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.9" },
          { path: "/about/why-lighthouse", changefreq: "monthly", priority: "0.7" },
          { path: "/learning-journey", changefreq: "monthly", priority: "0.9" },
          { path: "/academic-experience", changefreq: "monthly", priority: "0.9" },
          { path: "/student-life", changefreq: "monthly", priority: "0.8" },
          { path: "/campus-experience", changefreq: "monthly", priority: "0.8" },
          { path: "/admissions", changefreq: "monthly", priority: "0.9" },
          { path: "/parents", changefreq: "monthly", priority: "0.7" },
          { path: "/news", changefreq: "weekly", priority: "0.7" },
          { path: "/careers", changefreq: "monthly", priority: "0.6" },
          { path: "/community", changefreq: "monthly", priority: "0.6" },
          { path: "/campuses", changefreq: "monthly", priority: "0.8" },
          { path: "/campuses/mohandessin", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
          // Our Model
          { path: "/our-model", changefreq: "monthly", priority: "0.9" },
          { path: "/our-model/educational-model", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/learning-ecosystem", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/learner-profile", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/graduate-profile", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/teaching-framework", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/assessment-framework", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/student-development", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/parent-partnership", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/institutional-intelligence", changefreq: "monthly", priority: "0.8" },
          { path: "/our-model/innovation", changefreq: "monthly", priority: "0.8" },
          // Explore
          { path: "/explore/digital-ecosystem", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
