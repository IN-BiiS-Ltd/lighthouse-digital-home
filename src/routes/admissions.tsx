import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Eyebrow,
  ButtonLink,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Lighthouse Campus" },
      {
        name: "description",
        content:
          "A considered, welcoming path into the community: overview, application process, requirements, tuition, scholarships and frequently asked questions.",
      },
      { property: "og:title", content: "Admissions — Lighthouse Campus" },
      {
        property: "og:description",
        content: "A considered, welcoming path into the Lighthouse community.",
      },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: Admissions,
});

const steps = [
  { n: "01", title: "Enquire", body: "Share a few details about your family and your child. We will be in touch to begin the conversation." },
  { n: "02", title: "Visit", body: "Tour the campus, meet our team and see learning in action. Questions are always welcome." },
  { n: "03", title: "Apply", body: "Submit your application and supporting documents. We will guide you through each requirement." },
  { n: "04", title: "Assessment & Meeting", body: "A friendly, age-appropriate assessment and a conversation to ensure the right fit for your child." },
  { n: "05", title: "Offer & Enrolment", body: "On acceptance, we welcome your family and support a smooth start to campus life." },
];

const faqs = [
  { q: "When can we apply?", a: "Applications are welcomed throughout the year, subject to availability in each year group. We recommend enquiring early to secure a place." },
  { q: "Which year groups do you offer?", a: "The Mohandessin campus welcomes learners across the full journey, from Early Years through Secondary and Graduation Pathways." },
  { q: "Do you offer scholarships?", a: "Yes. We are committed to access and offer a limited number of scholarships. Speak with our admissions team about eligibility and timelines." },
  { q: "What does the assessment involve?", a: "Assessments are age-appropriate and designed to understand your child's needs, not to intimidate. They help us support every learner well." },
  { q: "How do I arrange a visit?", a: "Simply use the contact page to request a visit. We will find a time that suits your family, ideally during a normal school day." },
];

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A considered, welcoming path into the community."
        intro="We take time to understand each family and each child. The process is warm, clear and designed to find the right fit."
        sections={[
          { label: "Overview", to: "/admissions#overview" },
          { label: "Process", to: "/admissions#process" },
          { label: "Requirements", to: "/admissions#requirements" },
          { label: "Tuition", to: "/admissions#tuition" },
          { label: "FAQ", to: "/admissions#faq" },
        ]}
      />

      <Section id="overview">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] md:text-[2.6rem]">
              Joining Lighthouse Campus
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Admissions is the beginning of a partnership. Our goal is not simply
              to fill places, but to welcome families who share our belief in a
              humane, ambitious education.
            </p>
            <p>
              We will guide you through every step, answer your questions
              honestly, and help you decide whether Lighthouse is the right home
              for your child.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" id="process">
        <SectionHeading
          eyebrow="Application Process"
          title="Five clear steps"
          description="You will always know where you are and what comes next."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="font-display text-4xl text-gold/80">{s.n}</span>
              <h3 className="mt-4 font-display text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="requirements">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="scroll-mt-24">
            <Eyebrow>Requirements</Eyebrow>
            <SectionHeading className="mt-4" title="What you'll need" />
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Completed application form",
                "Copy of the child's birth certificate or national ID",
                "Recent school reports (where applicable)",
                "Passport photographs",
                "Any relevant learning or medical records",
              ].map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div id="tuition" className="scroll-mt-24 rounded-2xl border border-border bg-secondary p-9">
            <Eyebrow>Tuition & Scholarships</Eyebrow>
            <h3 className="mt-4 font-display text-2xl font-medium">
              Investing in a lasting education
            </h3>
            <p className="mt-4 text-muted-foreground">
              We provide clear, transparent fee information on request, along with
              flexible payment options. A limited number of scholarships support
              access for exceptional students.
            </p>
            <div className="mt-6">
              <ButtonLink to="/contact" variant="primary" size="md">
                Request fee information
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sand" id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CtaBand
        eyebrow="Apply Online"
        title="Ready to begin?"
        body="Start with an enquiry or schedule a visit. Our admissions team will take it from there."
        primary={{ to: "/contact", label: "Start your enquiry" }}
        secondary={{ to: "/contact", label: "Schedule a visit" }}
      />
    </>
  );
}
