import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Contact Lighthouse Campus, find us in Mohandessin, schedule a visit or send an enquiry to our admissions team.",
      },
      { property: "og:title", content: "Contact & Visit — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Get in touch, find us, or schedule a visit to Lighthouse Campus.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [yearGroup, setYearGroup] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setYearGroup("");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact & Visit"
        title="We would be glad to hear from you."
        intro="Whether you have a question, would like to visit, or are ready to begin admissions, our team is here to help."
        sections={[
          { label: "Enquiry", to: "/contact#enquiry" },
          { label: "Visit", to: "/contact#visit" },
          { label: "Find us", to: "/contact#find" },
        ]}
      />

      <Section id="enquiry">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Contact details */}
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium">
              Mohandessin Campus
            </h2>
            <ul className="mt-7 space-y-5 text-muted-foreground">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                <span>Mohandessin, Giza, Greater Cairo, Egypt</span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                <a href="tel:+20000000000" className="hover:text-brand-blue">
                  +20 00 000 0000
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                <a
                  href="mailto:hello@lighthousecampus.edu"
                  className="hover:text-brand-blue"
                >
                  hello@lighthousecampus.edu
                </a>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                <span>Sunday–Thursday, 8:00–16:00</span>
              </li>
            </ul>

            <div id="visit" className="mt-10 scroll-mt-24 rounded-2xl border border-border bg-secondary p-7">
              <Eyebrow>Schedule a Visit</Eyebrow>
              <p className="mt-4 text-muted-foreground">
                The best way to understand Lighthouse is to experience it. Use the
                form to request a visit and choose “Schedule a visit” as your
                reason — we will find a time that suits your family.
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
            {submitted ? (
              <div
                role="status"
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle2 className="size-12 text-gold" aria-hidden />
                <h2 className="font-display text-2xl font-medium">
                  Thank you — your enquiry has been received.
                </h2>
                <p className="max-w-sm text-muted-foreground">
                  A member of our team will be in touch shortly. We look forward
                  to welcoming your family.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 font-semibold text-brand-blue hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <SectionHeading
                  as="h2"
                  eyebrow="Enquiry Form"
                  title="Send us a message"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year-group">Year group of interest</Label>
                    <Select value={yearGroup} onValueChange={setYearGroup}>
                      <SelectTrigger id="year-group">
                        <SelectValue placeholder="Select a stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="early-years">Early Years</SelectItem>
                        <SelectItem value="primary">Primary</SelectItem>
                        <SelectItem value="preparatory">Preparatory</SelectItem>
                        <SelectItem value="secondary">Secondary</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for enquiry</Label>
                  <Select name="reason" defaultValue="general">
                    <SelectTrigger id="reason">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General enquiry</SelectItem>
                      <SelectItem value="visit">Schedule a visit</SelectItem>
                      <SelectItem value="admissions">Admissions</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-navy px-8 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
                >
                  Send enquiry
                </button>
                <p className="text-xs text-muted-foreground">
                  We will only use your details to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>

      <Section tone="muted" id="find">
        <SectionHeading eyebrow="Find Us" title="Mohandessin, Giza" />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Map showing Mohandessin, Giza"
            src="https://www.openstreetmap.org/export/embed.html?bbox=31.19%2C30.04%2C31.22%2C30.07&layer=mapnik"
            className="h-[26rem] w-full"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
