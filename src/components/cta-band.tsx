import type { ReactNode } from "react";
import { Container, Eyebrow, ButtonLink } from "@/components/blocks";

/** Closing "Invitation" band used at the foot of interior pages. */
export function CtaBand({
  eyebrow = "Invitation",
  title,
  body,
  primary = { to: "/admissions", label: "Admissions overview" },
  secondary = { to: "/contact", label: "Schedule a visit" },
}: {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="ambient-stage bg-navy text-navy-foreground grain">
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh-navy opacity-60" />
      <Container className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onNavy className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-navy-foreground/80">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink to={primary.to} variant="gold" size="lg">
              {primary.label}
            </ButtonLink>
            <ButtonLink to={secondary.to} variant="outline-light" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
