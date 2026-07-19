import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/campus-culture")({
  head: () => ({
    meta: [
      { title: "Campus Culture | Lighthouse Campus" },
      { name: "description", content: "Discover a welcoming campus culture where students, teachers and families build confidence, celebrate diversity, inspire achievement and cultivate lifelong values." },
      { property: "og:title", content: "Campus Culture | Lighthouse Campus" },
      { property: "og:description", content: "A community where everyone belongs. Confidence, achievement, diversity and lifelong values." },
      { property: "og:url", content: "/about/campus-culture" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/campus-culture" }],
  }),
  component: CampusCulture,
});

const sections = [
  { eyebrow: "A Community Where Everyone Belongs", title: "More than classrooms and curriculum", body: [
    "Lighthouse Campus is more than classrooms and curriculum.",
    "It is a welcoming community where students, teachers, and families work together to build confidence, inspire achievement, celebrate diversity, and cultivate lifelong values.",
  ] },
  { eyebrow: "Every Learner Known", title: "Students recognised as individuals", body: [
    "Teachers understand their strengths, interests, needs and development.",
    "Being known creates trust. Trust creates the confidence to participate, question and grow.",
  ] },
  { eyebrow: "Warmth and High Expectations", title: "Care and ambition strengthen one another", body: [
    "Learners experience encouragement, clear boundaries, meaningful challenge and genuine support.",
    "The community believes that every learner can continue developing.",
  ] },
  { eyebrow: "Discover Strengths and Embrace Opportunities", title: "Culture encourages growth and contribution", body: [
    "Our culture encourages every learner to discover their strengths, embrace new opportunities, and contribute positively to the community around them.",
  ] },
  { eyebrow: "Responsibility and Respect", title: "Every member contributes to community life", body: [
    "Students learn to care for shared spaces, honour commitments, listen to others and take responsibility for their actions.",
  ] },
  { eyebrow: "Diversity and Belonging", title: "A shared community through mutual respect", body: [
    "Families and learners bring different experiences, languages and cultural perspectives.",
    "The campus creates a shared community through mutual respect, inclusion and meaningful participation.",
  ] },
  { eyebrow: "Celebration and Reflection", title: "Recognising effort, growth, creativity, leadership and contribution", body: [
    "Celebration gives value to achievement.",
    "Reflection gives experience meaning.",
  ] },
];

function CampusCulture() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Campus Culture" }]}
        eyebrow="About / Campus Culture"
        title="A community where everyone belongs."
        intro="Lighthouse Campus is a welcoming community where students, teachers, and families work together to build confidence, inspire achievement, celebrate diversity, and cultivate lifelong values."
      />

      {sections.map((s, i) => (
        <Section key={s.eyebrow} tone={i % 2 === 1 ? "muted" : "default"}>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {s.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>
      ))}

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-snug text-navy-foreground md:text-[1.9rem]">
            A strong campus culture allows learners to feel secure enough to explore, supported enough to persevere and responsible enough to contribute.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Explore Student Life"
        body="Community, wellbeing and belonging beyond the classroom."
        primary={{ to: "/student-life", label: "Explore Student Life" }}
        secondary={{ to: "/campus-experience", label: "Visit the Campus" }}
      />
    </>
  );
}
