import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — Lighthouse Campus" },
      {
        name: "description",
        content:
          "News, articles, educational insights, student stories and campus events from the Lighthouse Campus community.",
      },
      { property: "og:title", content: "News & Insights — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Stories, articles and educational thinking from Lighthouse Campus.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

const categories = [
  { id: "news", label: "News", body: "Announcements and updates from across the campus community." },
  { id: "insights", label: "Educational Insights", body: "Thinking on teaching, learning and child development from our educators." },
  { id: "stories", label: "Student Stories", body: "The voices, projects and achievements of our students." },
  { id: "events", label: "Campus Events", body: "Exhibitions, performances, celebrations and gatherings." },
];

const featured = [
  {
    category: "Educational Insights",
    title: "Why belonging is the foundation of achievement",
    excerpt: "How a strong sense of community frees students to take intellectual risks and grow.",
    date: "Coming soon",
  },
  {
    category: "Student Stories",
    title: "From first experiment to genuine understanding",
    excerpt: "A look at how inquiry-led science builds confidence across the learning journey.",
    date: "Coming soon",
  },
  {
    category: "Campus Events",
    title: "A season of exhibitions and performance",
    excerpt: "Celebrating creativity across the arts as our community comes together.",
    date: "Coming soon",
  },
];

function News() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Stories, articles and educational thinking."
        intro="A window into the life of the community — and the ideas that shape how we teach and learn."
        sections={categories.map((c) => ({ label: c.label, to: `/news#${c.id}` }))}
      />

      <Section>
        <SectionHeading
          eyebrow="Featured"
          title="From the community"
          description="Our editorial space is being prepared. These are examples of the stories and insights you will find here."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((a) => (
            <article
              key={a.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7"
            >
              <span className="eyebrow text-brand-blue">{a.category}</span>
              <h3 className="mt-4 font-display text-xl font-medium leading-snug">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <span className="mt-6 text-xs font-medium text-muted-foreground">
                {a.date}
              </span>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.id} id={c.id} className="scroll-mt-24">
              <Eyebrow>{c.label}</Eyebrow>
              <p className="mt-4 text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Stay connected"
        title="Be part of the conversation"
        body="As our news space grows, families and the wider community will find stories, insights and events here."
        primary={{ to: "/contact", label: "Get in touch" }}
        secondary={{ to: "/about", label: "About the campus" }}
      />
    </>
  );
}
