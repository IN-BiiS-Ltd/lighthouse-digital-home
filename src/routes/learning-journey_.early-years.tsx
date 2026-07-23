import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";

export const Route = createFileRoute("/learning-journey_/early-years")({
  head: () => ({
    meta: [
      { title: "Early Years | Lighthouse Campus" },
      { name: "description", content: "Explore the Lighthouse Campus Early Years experience, where play, relationships, language and discovery build the foundations for lifelong learning." },
      { property: "og:title", content: "Early Years | Lighthouse Campus" },
      { property: "og:description", content: "Wonder, security and the first foundations of learning." },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/learning-journey/early-years" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/learning-journey/early-years" }],
  }),
  component: EarlyYears,
});

const priorities = [
  { title: "Communication and Language", body: "Children develop listening, expression, vocabulary and confidence through conversation, story, song and shared experience." },
  { title: "Early Literacy", body: "Books, stories, sound awareness and meaningful mark-making establish a positive relationship with reading and writing." },
  { title: "Early Mathematics", body: "Children explore quantity, pattern, shape, measure and spatial understanding through play and practical experience." },
  { title: "Personal, Social and Emotional Development", body: "Relationships, routines and guided participation help children develop confidence, independence, empathy and self-regulation." },
  { title: "Physical Development", body: "Movement, coordination, fine-motor development and active play strengthen physical confidence and wellbeing." },
  { title: "Understanding the World", body: "Children observe, question, compare and explore people, places, living things and materials." },
  { title: "Creative Expression", body: "Art, music, movement, role play and design create opportunities for imagination, communication and discovery." },
];

const envSupports = ["movement", "play", "reading", "conversation", "creativity", "quiet reflection", "exploration", "safe routines"];

function EarlyYears() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Learning Journey", to: "/learning-journey" }, { label: "Early Years" }]}
        eyebrow="Learning Journey / Early Years"
        title="Wonder, security and the first foundations of learning."
        intro="Young children learn through movement, play, language, imagination, relationships and direct experience. The Early Years environment protects curiosity while building confidence, communication and belonging."
      />

      <Section>
        <SectionHeading eyebrow="Purpose of the Stage" title="The emotional, social, physical and intellectual foundations for later learning" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Children begin to understand themselves, other people and the world through meaningful experiences and consistent relationships.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="The Learning Experience" title="Active, purposeful and developmentally appropriate" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Children explore materials, stories, sounds, movement, nature, patterns, numbers and relationships.</p>
          <p>Educators observe carefully and extend learning through conversation, modelling and thoughtfully designed experiences.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Learning Priorities" title="Seven interconnected areas of development" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Teaching Approach" title="Secure relationships and rich learning environments" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>They guide rather than dominate play.</p>
          <p>They ask questions, introduce language, model thinking and respond to the interests and developmental needs of each child.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Assessment" title="Based on careful observation and professional dialogue" />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>It helps educators understand development and plan appropriate next steps.</p>
          <p>Young children are not reduced to isolated scores.</p>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Environment" title="Spaces that support development" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {envSupports.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm font-medium capitalize text-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />{p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Family Partnership" title="Families bring essential knowledge of each child" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Regular communication helps home and school understand development, routines, interests and emerging needs.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Available Academic Pathways" title="A coherent developmental foundation" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground">
          The Early Years programme provides a coherent developmental foundation designed to support progression into the academic pathways offered in later stages. Specific programme and pathway information will be confirmed with families during admissions.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Transition to Primary" title="Moving forward with stronger language and growing independence" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Transition is gradual and carefully supported. Children move forward with stronger language, growing independence, positive learning habits and confidence within the school community.
        </p>
      </Section>

      <CtaBand
        title="Explore Primary"
        body="Strong foundations for knowledge, character and confident learning."
        primary={{ to: "/learning-journey/primary", label: "Explore Primary" }}
        secondary={{ to: "/admissions", label: "Admissions Overview" }}
      />
      <ShareBar title="Early Years | Lighthouse Campus" />
    </>
  );
}
