import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  MediaRow,
  Pullquote,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import studentLifeImg from "@/assets/student-life.jpg";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Community, clubs, athletics, arts, leadership, service, wellbeing and events — belonging beyond the classroom at Lighthouse Campus.",
      },
      { property: "og:title", content: "Student Life — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Belonging beyond the classroom at Lighthouse Campus.",
      },
      { property: "og:url", content: "/student-life" },
    ],
    links: [{ rel: "canonical", href: "/student-life" }],
  }),
  component: StudentLife,
});

const pillars = [
  { id: "clubs", title: "Clubs & Activities", body: "A wide range of student-led and staff-guided clubs where interests become passions and friendships form." },
  { id: "athletics", title: "Athletics", body: "Sport for all — building fitness, teamwork, discipline and the joy of playing together." },
  { id: "arts", title: "Arts & Performance", body: "Studios, stages and ensembles where students create, perform and find their voice." },
  { id: "leadership", title: "Leadership & Service", body: "Student councils, mentoring and community service that grow responsibility and empathy." },
  { id: "wellbeing", title: "Wellbeing", body: "Pastoral care, counselling and a culture of kindness that keeps students healthy and whole." },
  { id: "events", title: "Events", body: "Celebrations, exhibitions and gatherings that bring the whole community together." },
];

function StudentLife() {
  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="A campus is a community before it is anything else."
        intro="Clubs, athletics, the arts, service and leadership give every student a place to contribute and grow. Wellbeing runs through all of it."
        sections={[
          { label: "Community", to: "/student-life#community" },
          { label: "Clubs", to: "/student-life#clubs" },
          { label: "Athletics", to: "/student-life#athletics" },
          { label: "Leadership", to: "/student-life#leadership" },
          { label: "Wellbeing", to: "/student-life#wellbeing" },
        ]}
      />

      <Section id="community">
        <MediaRow
          eyebrow="Community & Belonging"
          title="Where every student is known"
          image={studentLifeImg}
          imageAlt="Children exploring and creating together with a teacher"
        >
          <p>
            Belonging is the foundation of everything we do. When students feel
            safe, valued and connected, they take the risks that real learning
            requires — and they look out for one another.
          </p>
          <p>
            From the youngest years, our community is intentionally warm,
            inclusive and welcoming to families of every background.
          </p>
        </MediaRow>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Life Beyond the Classroom"
          title="Room to explore, contribute and lead"
          description="A rich programme of activities ensures that every child can find where they belong and what they love."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.id} id={p.id} className="scroll-mt-24">
              <FeatureCard title={p.title}>{p.body}</FeatureCard>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <Pullquote
          onNavy
          quote="Students who feel they belong are free to become who they are capable of being."
        />
      </Section>

      <CtaBand
        title="See student life in full swing"
        body="Visit during a school day to feel the energy, warmth and focus of our community."
      />
    </>
  );
}
