import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, Eyebrow } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/about_/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Discover how Lighthouse Campus began and the long-term educational purpose guiding the institution from its founding campus in Mohandessin.",
      },
      { property: "og:title", content: "Our Story | Lighthouse Campus" },
      {
        property: "og:description",
        content:
          "How Lighthouse Campus began and the long-term educational purpose guiding the institution.",
      },
      { property: "og:url", content: "/about/our-story" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about/our-story" }],
  }),
  component: OurStory,
});

const constants = [
  "learning at the centre",
  "students at the heart",
  "teachers as mentors",
  "families as partners",
  "character alongside knowledge",
  "leadership through responsibility",
  "continuous institutional learning",
  "growth without losing identity",
];

function OurStory() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Our Story" },
        ]}
        eyebrow="About / Our Story"
        title="An institution built to last, and to matter."
        intro="Lighthouse Campus began with a clear conviction: a school should feel like a living learning community rather than an institution that simply processes children through stages and examinations."
      />

      <Section>
        <SectionHeading eyebrow="The Beginning" title="A campus conceived as a place where ambition and human development belong together" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Our first operational campus in Mohandessin represents the beginning
            of a long-term educational journey.
          </p>
          <p>Learning remains central. Students remain visible. Teachers build meaningful relationships. Families participate in the educational journey.</p>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="A Living Learning Community" title="A school becomes meaningful through the quality of its relationships" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Students learn through interaction with teachers, peers, ideas, experiences and the wider community.</p>
          <p>Teachers guide, question, encourage and model lifelong learning.</p>
          <p>Families bring knowledge of their children and become trusted partners in their development.</p>
          <p>The campus becomes a community before it becomes a collection of buildings or systems.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Built to Grow Thoughtfully" title="Growth as an educational ecosystem, not as reproduction of buildings" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Lighthouse Campus is designed to grow. Future campuses will become integrated destinations within the same educational ecosystem.</p>
          <p>Growth will not mean reproducing buildings alone. It will mean extending a shared educational philosophy, a coherent institutional culture and a commitment to quality across every location.</p>
        </div>
      </Section>

      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>What Remains Constant</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight md:text-4xl">
            As the institution develops, the central commitments remain unchanged.
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {constants.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                <span className="capitalize">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The Founding Campus" title="Mohandessin — the founding expression of the Lighthouse Campus vision" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>It establishes the first living community from which the institution will learn, develop and grow.</p>
          <p>Its experience will contribute to the continuing development of the Lighthouse educational model and future campuses.</p>
          <p className="text-foreground font-medium">The Lighthouse Campus story is still being written. Its direction is clear: to build an educational institution that remains human, ambitious, thoughtful and valuable across generations.</p>
        </div>
      </Section>

      <CtaBand
        title="Continue the Story"
        body="Explore the philosophy behind our name and the ideas that guide daily life on campus."
        primary={{ to: "/about/why-lighthouse", label: "Why Lighthouse?" }}
        secondary={{ to: "/about/educational-philosophy", label: "Explore Our Educational Philosophy" }}
      />
    </>
  );
}
