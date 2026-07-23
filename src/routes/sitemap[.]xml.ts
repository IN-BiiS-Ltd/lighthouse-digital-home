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
          { path: "/about/our-story", changefreq: "monthly", priority: "0.7" },
          { path: "/about/why-lighthouse", changefreq: "monthly", priority: "0.7" },
          { path: "/about/vision", changefreq: "monthly", priority: "0.7" },
          { path: "/about/mission", changefreq: "monthly", priority: "0.7" },
          { path: "/about/core-values", changefreq: "monthly", priority: "0.7" },
          { path: "/about/educational-philosophy", changefreq: "monthly", priority: "0.7" },
          { path: "/about/leadership", changefreq: "monthly", priority: "0.7" },
          { path: "/about/governance", changefreq: "monthly", priority: "0.7" },
          { path: "/about/campus-culture", changefreq: "monthly", priority: "0.7" },
          { path: "/learning-journey", changefreq: "monthly", priority: "0.9" },
          { path: "/learning-journey/early-years", changefreq: "monthly", priority: "0.8" },
          { path: "/learning-journey/primary", changefreq: "monthly", priority: "0.8" },
          { path: "/learning-journey/preparatory", changefreq: "monthly", priority: "0.8" },
          { path: "/learning-journey/secondary", changefreq: "monthly", priority: "0.8" },
          { path: "/learning-journey/graduation-pathways", changefreq: "monthly", priority: "0.8" },
          { path: "/academic-experience", changefreq: "monthly", priority: "0.9" },
          // Student Life
          { path: "/student-life", changefreq: "monthly", priority: "0.8" },
          { path: "/student-life/community-belonging", changefreq: "monthly", priority: "0.7" },
          { path: "/student-life/clubs-activities", changefreq: "monthly", priority: "0.7" },
          { path: "/student-life/athletics", changefreq: "monthly", priority: "0.7" },
          { path: "/student-life/arts-performance", changefreq: "monthly", priority: "0.7" },
          { path: "/student-life/leadership-service", changefreq: "monthly", priority: "0.7" },
          { path: "/student-life/wellbeing", changefreq: "monthly", priority: "0.7" },
          { path: "/student-life/events", changefreq: "monthly", priority: "0.7" },
          // Campus
          { path: "/campus-experience", changefreq: "monthly", priority: "0.8" },
          { path: "/campus-experience/overview", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/classrooms", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/library", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/laboratories", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/innovation-creative-spaces", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/sports-facilities", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/dining", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/health-services", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/safety", changefreq: "monthly", priority: "0.7" },
          { path: "/campus-experience/transportation", changefreq: "monthly", priority: "0.7" },
          // Admissions
          { path: "/admissions", changefreq: "monthly", priority: "0.9" },
          { path: "/admissions/application-process", changefreq: "monthly", priority: "0.8" },
          { path: "/admissions/requirements", changefreq: "monthly", priority: "0.8" },
          { path: "/admissions/tuition-fees", changefreq: "monthly", priority: "0.8" },
          { path: "/admissions/scholarships", changefreq: "monthly", priority: "0.7" },
          { path: "/admissions/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/admissions/schedule-a-visit", changefreq: "monthly", priority: "0.8" },
          { path: "/admissions/apply-online", changefreq: "monthly", priority: "0.7" },
          // Parents
          { path: "/parents", changefreq: "monthly", priority: "0.7" },
          { path: "/parents/parent-partnership", changefreq: "monthly", priority: "0.6" },
          { path: "/parents/parent-journey", changefreq: "monthly", priority: "0.6" },
          { path: "/parents/communication", changefreq: "monthly", priority: "0.6" },
          { path: "/parents/parent-portal", changefreq: "monthly", priority: "0.6" },
          { path: "/parents/school-calendar", changefreq: "monthly", priority: "0.6" },
          { path: "/parents/family-resources", changefreq: "monthly", priority: "0.6" },
          { path: "/parents/school-policies", changefreq: "monthly", priority: "0.6" },
          { path: "/parents/family-engagement", changefreq: "monthly", priority: "0.6" },
          // News & Insights
          { path: "/news", changefreq: "weekly", priority: "0.7" },
          { path: "/news/school-news", changefreq: "weekly", priority: "0.6" },
          { path: "/news/educational-insights", changefreq: "weekly", priority: "0.6" },
          { path: "/news/student-stories", changefreq: "weekly", priority: "0.6" },
          { path: "/news/teacher-stories", changefreq: "weekly", priority: "0.6" },
          { path: "/news/parent-guides", changefreq: "weekly", priority: "0.6" },
          { path: "/news/research-reflection", changefreq: "weekly", priority: "0.6" },
          { path: "/news/campus-events", changefreq: "weekly", priority: "0.6" },
          { path: "/news/community-stories", changefreq: "weekly", priority: "0.6" },
          // Careers
          { path: "/careers", changefreq: "monthly", priority: "0.6" },
          // Community
          { path: "/community", changefreq: "monthly", priority: "0.6" },
          { path: "/community/partnerships", changefreq: "monthly", priority: "0.6" },
          { path: "/community/alumni", changefreq: "monthly", priority: "0.6" },
          { path: "/community/community-programmes", changefreq: "monthly", priority: "0.6" },
          { path: "/community/events", changefreq: "monthly", priority: "0.6" },
          { path: "/community/careers", changefreq: "monthly", priority: "0.6" },
          // Campuses
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
          // Legal
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/cookies", changefreq: "yearly", priority: "0.3" },
          { path: "/accessibility", changefreq: "yearly", priority: "0.3" },
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
