import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  FeatureCard,
  Stat,
  ButtonLink,
  Eyebrow,
} from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ShareBar } from "@/components/share-bar";
import { PageTOC } from "@/components/about-toc";
import {
  Download,
  GraduationCap,
  Languages,
  BookOpen,
  Users,
  Building2,
  Cpu,
  ShieldCheck,
  Compass,
  ClipboardList,
  FileText,
  CalendarCheck,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const URL = "https://lighthousecampus.com/prospectus";
const PDF = "/docs/lighthouse-campus-prospectus-2026-2027-en.pdf";
const APPLY = "https://eduios.lighthousecampus.com/apply/lighthouse-campus";

export const Route = createFileRoute("/prospectus")({
  head: () => ({
    meta: [
      { title: "School Guide 2026 / 2027 | Lighthouse Campus Prospectus" },
      {
        name: "description",
        content:
          "Read the Lighthouse Campus school guide for 2026 / 2027 — three academic programmes, faculty standards, learning environment, EEIOS, and the admissions procedure. Download the PDF.",
      },
      { property: "og:title", content: "School Guide 2026 / 2027 | Lighthouse Campus Prospectus" },
      {
        property: "og:description",
        content:
          "Three academic programmes, qualified faculty, a modern learning environment and one education operating system. Admissions open now for 2026 / 2027.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Lighthouse Campus School Guide 2026 / 2027",
          inLanguage: "en",
          about: "Admissions, academic programmes and learning environment at Lighthouse Campus.",
          mainEntityOfPage: URL,
          publisher: {
            "@type": "EducationalOrganization",
            name: "Lighthouse Campus",
            url: "https://lighthousecampus.com",
          },
        }),
      },
    ],
  }),
  component: ProspectusPage,
});

const SECTIONS = [
  { label: "Welcome", to: "#welcome" },
  { label: "Programmes", to: "#programmes" },
  { label: "Faculty", to: "#faculty" },
  { label: "Environment", to: "#environment" },
  { label: "EEIOS", to: "#eeios" },
  { label: "Philosophy", to: "#philosophy" },
  { label: "Why Lighthouse", to: "#why" },
  { label: "Admissions", to: "#admissions" },
  { label: "Contact", to: "#contact" },
];

function DownloadRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex flex-wrap gap-3" : "mt-8 flex flex-wrap gap-3"}>
      <ButtonLink
        to={PDF}
        variant="gold"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download the school guide 2026 / 2027 as a PDF"
        data-event="Download"
        data-event-prop-asset="Prospectus EN 2026-2027"
      >
        <Download className="mr-2 size-4" aria-hidden />
        Download PDF
      </ButtonLink>
      <ButtonLink
        to={APPLY}
        variant="outline"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Start an application for the 2026 / 2027 academic year"
        data-event="CTA Click"
        data-event-prop-cta="Apply"
        data-event-prop-location="Prospectus"
      >
        Start application →
      </ButtonLink>
    </div>
  );
}

const PROGRAMMES = [
  {
    eyebrow: "International",
    title: "Cambridge International",
    body: "An international programme focused on deep understanding, critical thinking, creativity and problem solving, with academic preparation that qualifies students to continue at respected universities worldwide.",
    stages: ["Grade 1 – Grade 8"],
    language: "English",
  },
  {
    eyebrow: "National — Arabic",
    title: "Sudanese National (Arabic)",
    body: "A complete academic programme delivering the Sudanese national curriculum in a modern learning environment, with emphasis on teaching quality, skills development and academic achievement.",
    stages: ["Grade 6 (Primary)", "Middle school (Years 1–3)", "Secondary school (Years 1–3)"],
    language: "Arabic",
  },
  {
    eyebrow: "National — Translated",
    title: "Sudanese National (Translated)",
    body: "A programme that combines the content of the Sudanese national curriculum with English-language delivery, building a strong academic base while developing language skills and readiness for higher education.",
    stages: ["Sudanese national content delivered in English"],
    language: "Arabic & English",
  },
];

const ENVIRONMENT = [
  { title: "Modern classrooms", body: "Controlled class sizes and equipment that supports group work and interactive presentation.", icon: <BookOpen className="size-5" /> },
  { title: "Labs and applied activity", body: "Science and computer labs with practical work tied directly to curriculum content.", icon: <Compass className="size-5" /> },
  { title: "Sport, culture and arts", body: "A weekly activity programme and student clubs built into the school timetable.", icon: <Users className="size-5" /> },
  { title: "Continuous academic follow-up", body: "Regular performance tracking and early identification of students who need subject support.", icon: <ClipboardList className="size-5" /> },
  { title: "Integrated student care", body: "A published behaviour policy, health care provision, and individual follow-up where support is needed.", icon: <ShieldCheck className="size-5" /> },
  { title: "Participation and inquiry", body: "Research tasks and classroom projects that build thinking and independent learning.", icon: <Building2 className="size-5" /> },
];

const WHY = [
  { title: "Diverse academic programmes", body: "Three programmes serving different family needs within one school." },
  { title: "Qualified teachers", body: "Selected against written criteria, with continuous professional development." },
  { title: "Safe, motivating environment", body: "Structure, supervision, and integrated pastoral and health care." },
  { title: "Modern learning technology", body: "Digital resources and one unified education operating system." },
  { title: "Active family partnership", body: "Documented communication, periodic reports and scheduled meetings." },
  { title: "Continuous growth tracking", body: "Academic and personal follow-up throughout the school year." },
];

const STEPS = [
  { n: "01", label: "Submit application" },
  { n: "02", label: "Complete documents" },
  { n: "03", label: "Interview & placement" },
  { n: "04", label: "Programme & grade set" },
  { n: "05", label: "Enrolment confirmed" },
];

function ProspectusPage() {
  return (
    <>
      <PageHero
        eyebrow="School Guide 2026 / 2027"
        title={
          <>
            An education that balances academic excellence, character formation,
            and readiness for the future.
          </>
        }
        intro="A school guide to our academic programmes, teaching faculty, learning environment, and the education operating system we run on. Admissions are open now."
        sections={SECTIONS}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Admissions", to: "/admissions" },
          { label: "School Guide 2026 / 2027" },
        ]}
        watermark
      />

      <Section id="welcome">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Welcome"
              title="Welcome to Lighthouse Campus"
              description="We offer an integrated educational experience that places the student at the centre of learning — accredited curricula, qualified teachers, a supportive learning environment, and modern technology — to develop a confident, responsible learner who can succeed in a fast-changing world."
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We believe real education is not limited to transferring knowledge.
              It shapes character, develops thinking, instils values, and prepares
              students for life, for university, and for the world of work.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Stat value="3" label="Academic programmes" />
              <Stat value="AR / EN" label="Languages of instruction" />
              <Stat value="EEIOS" label="One unified operating system" />
              <Stat value="2026 / 2027" label="Admissions open now" />
            </div>
            <DownloadRow />
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
              This guide describes what is actually in place at the school, without
              exaggeration. Families are welcome to visit the campus, see the
              classrooms and facilities, and meet the administration before making a
              registration decision.
            </p>
          </div>
          <PageTOC items={SECTIONS.map((s) => ({ id: s.to.replace("#", ""), label: s.label }))} />
        </div>
      </Section>

      <Section id="programmes" tone="sand">
        <SectionHeading
          eyebrow="Academic programmes"
          title="Three academic programmes — families choose the pathway that fits their child's future."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROGRAMMES.map((p) => (
            <article key={p.title} className="rounded-xl border border-border bg-card p-7">
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">{p.title}</h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">{p.body}</p>
              <p className="mt-5 text-sm font-semibold text-foreground">Available stages</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground" role="list">
                {p.stages.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="mt-4 flex items-center gap-2 text-sm text-sapphire">
                <Languages className="size-4" aria-hidden />
                {p.language}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Available stages by academic programme</caption>
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th scope="col" className="px-5 py-4 font-medium">Programme</th>
                <th scope="col" className="px-5 py-4 font-medium">Language of instruction</th>
                <th scope="col" className="px-5 py-4 font-medium">Available stages</th>
              </tr>
            </thead>
            <tbody>
              {PROGRAMMES.map((p) => (
                <tr key={p.title} className="border-t border-border">
                  <th scope="row" className="px-5 py-4 font-medium text-foreground">{p.title}</th>
                  <td className="px-5 py-4 text-muted-foreground">{p.language}</td>
                  <td className="px-5 py-4 text-muted-foreground">{p.stages.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FeatureCard title="Choosing the right programme" icon={<Compass className="size-5" />}>
            The admissions office helps each family select the appropriate programme
            and grade based on the student's previous academic record and the
            placement assessment, with a clear explanation of the differences between
            the three programmes.
          </FeatureCard>
          <FeatureCard title="Language and assessment" icon={<Languages className="size-5" />}>
            Continuous assessment runs alongside formal examinations in all
            programmes. Arabic is taught to every student, and language-support
            programmes are available for those who need them at the start of the year.
          </FeatureCard>
        </div>
      </Section>

      <Section id="faculty">
        <SectionHeading
          eyebrow="Our teachers"
          title="Teachers who make a difference"
          description="Learning is led by a team of qualified teachers who combine academic expertise, continuous professional development, and up-to-date teaching strategies that encourage participation, inquiry and active learning."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FeatureCard title="Selection criteria" icon={<GraduationCap className="size-5" />}>
            A subject-specific qualification, documented classroom experience, a
            demonstration lesson before a panel, and an educational interview.
          </FeatureCard>
          <FeatureCard title="Continuous development" icon={<ClipboardList className="size-5" />}>
            A periodic in-house training programme, classroom visits, and review of
            lesson plans and student outcomes.
          </FeatureCard>
        </div>
      </Section>

      <Section id="environment" tone="muted">
        <SectionHeading
          eyebrow="Learning environment"
          title="An inspiring learning environment"
          description="We provide a safe, motivating environment that helps students learn with confidence."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ENVIRONMENT.map((c) => (
            <FeatureCard key={c.title} title={c.title} icon={c.icon}>
              {c.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section id="eeios">
        <SectionHeading
          eyebrow="Education Enterprise Intelligence Operating System"
          title="Education supported by institutional intelligence"
          description="The school runs on a modern education operating system built on the Education Enterprise Intelligence Operating System (EEIOS), providing an integrated digital environment on a single platform that supports communication, follow-up, and management of the educational process with efficiency and transparency."
        />
        <div className="mt-10 rounded-2xl border border-gold/30 bg-navy p-8 text-navy-foreground">
          <Eyebrow onNavy>Who the system connects</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-3" role="list">
            {["Student", "Family", "Teachers", "Academic body", "School administration"].map((r) => (
              <li
                key={r}
                className="rounded-full border border-gold/40 px-4 py-2 text-sm text-gold"
              >
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy-foreground/80">
            All on one platform that supports communication, follow-up, and efficient,
            transparent management of the educational process.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FeatureCard title="An integrated experience for parents" icon={<Users className="size-5" />}>
            Follow academic performance, track attendance and discipline, review
            periodic reports, follow homework and activities, communicate directly with
            the school, and receive important notifications in good time.
          </FeatureCard>
          <FeatureCard title="A learning experience for the student" icon={<Cpu className="size-5" />}>
            Interactive learning, individual follow-up, digital learning resources,
            continuous assessment, activities that build creativity, leadership and
            teamwork, and support to reach their full potential.
          </FeatureCard>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          The system supports — it does not replace — the educational judgement of
          teachers and administration. Every user has permissions defined by their
          role, and data is used for educational and administrative purposes only.
        </p>
      </Section>

      <Section id="philosophy" tone="sand">
        <SectionHeading
          eyebrow="Our educational philosophy"
          title="We focus on developing a student who possesses"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "A strong academic foundation",
            "Firmly held values",
            "A confident character",
            "An authentic identity",
            "Thinking and creative skills",
            "Communication and collaboration",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-medium text-foreground">{t}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard title="From philosophy to daily practice">
            A written scheme of work for every subject, continuous assessment that
            measures understanding rather than memorisation, classroom activities that
            build thinking and cooperation, and individual follow-up for any student
            who needs support.
          </FeatureCard>
          <FeatureCard title="Values and identity">
            We safeguard the student's identity, Arabic language and values alongside
            academic openness to international standards — so they graduate confident
            both in themselves and in where they belong.
          </FeatureCard>
          <FeatureCard title="Partnership with the family">
            Parents are given an up-to-date picture of their child's performance and a
            direct channel to the teacher and administration throughout the year.
          </FeatureCard>
        </div>
      </Section>

      <Section id="why">
        <SectionHeading eyebrow="Why Lighthouse Campus" title="Why Lighthouse Campus?" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((c) => (
            <FeatureCard key={c.title} title={c.title}>
              {c.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section id="admissions" tone="muted">
        <SectionHeading
          eyebrow="Admissions 2026 / 2027"
          title="Admissions are open now"
          description="Lighthouse Campus is pleased to receive applications for the 2026 / 2027 academic year. Begin an educational journey that brings together academic quality, values, innovation and care."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="font-display text-sm tracking-[0.2em] text-gold">{s.n}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FeatureCard title="Required documents" icon={<FileText className="size-5" />}>
            Student's birth certificate or equivalent; the most recent school
            certificate or transcript; passport or national ID copy for student and
            parent; recent personal photographs; and a health record where available.
          </FeatureCard>
          <FeatureCard title="Placement assessment" icon={<ClipboardList className="size-5" />}>
            A short assessment in language and mathematics to place the student in the
            appropriate grade and programme, and to establish whether language or
            academic support is needed at the start of the year. The result is
            explained to the parent.
          </FeatureCard>
          <FeatureCard title="Tuition fees" icon={<CalendarCheck className="size-5" />}>
            Fee schedules are issued in writing for each stage and programme, setting
            out what is and is not included, with instalment payment options.
          </FeatureCard>
          <FeatureCard title="Campus visit" icon={<MapPin className="size-5" />}>
            Families are welcome to visit and view the classrooms and facilities and
            meet the administration before registering. Visits are arranged by phone or
            email.
          </FeatureCard>
        </div>
        <div className="mt-10 rounded-2xl border border-gold/30 bg-navy p-8 text-navy-foreground">
          <Eyebrow onNavy>Limited places per class</Eyebrow>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85">
            We hold to a defined number of students per class to protect the quality of
            follow-up, and registration for a grade closes once it is full. Applying
            early gives families wider choice of programme and grade.
          </p>
          <div className="mt-6">
            <DownloadRow compact />
          </div>
        </div>
      </Section>

      <Section id="contact">
        <SectionHeading
          eyebrow="Contact us"
          title="Begin the registration process for the 2026 / 2027 year"
          description="Contact us to arrange a campus visit, or to request the fee schedule and details of the programme best suited to your child."
        />
        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="size-4 text-sapphire" aria-hidden /> Address
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground">58 El-Zahraa St., Dokki, Cairo</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="size-4 text-sapphire" aria-hidden /> Phone &amp; email
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground">
              <a className="hover:text-sapphire" href="tel:+201107030737">+20 110 703 0737</a>
              <br />
              <a className="inline-flex items-center gap-1 hover:text-sapphire" href="mailto:ceo@lighthousecampus.com">
                <Mail className="size-3.5" aria-hidden /> ceo@lighthousecampus.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Globe className="size-4 text-sapphire" aria-hidden /> Website
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground">www.lighthousecampus.com</dd>
          </div>
        </dl>
      </Section>

      <ShareBar url={URL} title="Lighthouse Campus — School Guide 2026 / 2027" />

      <CtaBand
        title="Admissions are open now for 2026 / 2027"
        body="Read the full guide, or start your application today — places per class are limited."
        primary={{ to: APPLY, label: "Start application", target: "_blank", rel: "noopener noreferrer" }}
        secondary={{ to: "/contact", label: "Schedule a visit" }}
      />
    </>
  );
}
