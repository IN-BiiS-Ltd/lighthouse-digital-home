import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  MediaRow,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import libraryImg from "@/assets/campus-library.jpg";
import exteriorImg from "@/assets/campus-exterior.jpg";

export const Route = createFileRoute("/campus-experience")({
  head: () => ({
    meta: [
      { title: "Campus Experience — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Purposeful spaces designed for learning and care: classrooms, library, laboratories, innovation and creative spaces, sports facilities, dining, health, safety and transport.",
      },
      { property: "og:title", content: "Campus Experience — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Purposeful spaces designed for learning and care.",
      },
      { property: "og:url", content: "/campus-experience" },
    ],
    links: [{ rel: "canonical", href: "/campus-experience" }],
  }),
  component: CampusExperience,
});

const spaces = [
  { id: "classrooms", title: "Classrooms", body: "Bright, flexible spaces designed for discussion, focus and collaboration." },
  { id: "labs", title: "Laboratories", body: "Well-equipped science labs where students investigate safely and hands-on." },
  { id: "innovation", title: "Innovation & Creative Spaces", body: "Studios and maker spaces for design, coding, art and building." },
  { id: "sports", title: "Sports Facilities", body: "Courts, fields and spaces that make movement and teamwork part of daily life." },
  { id: "dining", title: "Dining", body: "Nutritious, welcoming dining that supports health and community." },
  { id: "care", title: "Health, Safety & Transport", body: "On-site health services, robust safety and reliable transport give families peace of mind." },
];

function CampusExperience() {
  return (
    <>
      <PageHero
        eyebrow="Campus Experience"
        title="Spaces designed with intention, and with care."
        intro="Our environment shapes how students feel and how they learn. Every space is purposeful, calm and made for a living learning community."
        sections={[
          { label: "Classrooms", to: "/campus-experience#classrooms" },
          { label: "Library", to: "/campus-experience#library" },
          { label: "Laboratories", to: "/campus-experience#labs" },
          { label: "Sports", to: "/campus-experience#sports" },
          { label: "Care", to: "/campus-experience#care" },
        ]}
      />

      <Section>
        <MediaRow
          eyebrow="The Campus"
          title="An environment that supports learning"
          image={exteriorImg}
          imageAlt="Modern school campus building exterior with courtyard and trees"
        >
          <p>
            Our Mohandessin campus is designed around light, clarity and calm —
            with spaces that flow naturally between focused study, collaboration
            and rest.
          </p>
          <p>
            Thoughtful architecture and generous common areas help the community
            feel connected while giving each learner room to breathe.
          </p>
        </MediaRow>
      </Section>

      <Section tone="sand" id="library">
        <MediaRow
          reverse
          eyebrow="The Library"
          title="The quiet heart of campus"
          image={libraryImg}
          imageAlt="Students reading and collaborating in a bright library"
        >
          <p>
            More than a room of books, our library is a culture of reading,
            research and reflection — open, welcoming and central to campus life.
          </p>
        </MediaRow>
      </Section>

      <Section tone="muted">
        <div className="mb-12">
          <Eyebrow>Purposeful Spaces</Eyebrow>
          <SectionHeading
            className="mt-4"
            title="Every space serves the learner"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <FeatureCard title={s.title}>{s.body}</FeatureCard>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Walk the campus with us"
        body="Photographs only say so much. Book a visit to experience the spaces where learning happens."
      />
    </>
  );
}
