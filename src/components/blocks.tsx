import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import logo from "@/assets/lighthouse-logo.png.asset.json";

/* ------------------------------------------------------------------ */
/* SmartLink — internal (TanStack) or external, with hash support     */
/* ------------------------------------------------------------------ */

export interface SmartLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  to: string;
  children: ReactNode;
}

export function SmartLink({ to, children, ...rest }: SmartLinkProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(to);
  if (isExternal) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    );
  }
  const [path, hash] = to.split("#");
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={(path || "/") as any}
      hash={hash}
      hashScrollIntoView={hash ? { behavior: "smooth", block: "start" } : undefined}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(rest as any)}
    >
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Wordmark + official logo                                            */
/* ------------------------------------------------------------------ */

export function Wordmark({
  className,
  onNavy = true,
}: {
  className?: string;
  onNavy?: boolean;
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-[0.14em]",
          onNavy ? "text-navy-foreground" : "text-foreground",
        )}
      >
        LIGHTHAUSE
      </span>
      <span className="eyebrow mt-1 text-gold tracking-[0.42em]">Campus</span>
    </span>
  );
}

export function BrandLogo({
  className,
  alt = "Lighthouse Campus",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={logo.url}
      alt={alt}
      width={512}
      height={512}
      className={cn("select-none", className)}
      loading="lazy"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Layout container                                                    */
/* ------------------------------------------------------------------ */

export function Container({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("container-page", className)} {...rest}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons (design-system variants)                                    */
/* ------------------------------------------------------------------ */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-navy-foreground hover:bg-navy/90 shadow-sm hover:shadow",
        gold: "bg-gold text-gold-foreground hover:brightness-105 shadow-sm",
        outline:
          "border border-navy/25 text-foreground hover:border-navy hover:bg-secondary",
        "outline-light":
          "border border-navy-foreground/40 text-navy-foreground hover:bg-navy-foreground/10",
        ghost: "text-foreground hover:bg-secondary",
        link: "text-brand-blue underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonLinkProps
  extends Omit<SmartLinkProps, "className">,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export function ButtonLink({
  to,
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <SmartLink
      to={to}
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {children}
    </SmartLink>
  );
}

/* ------------------------------------------------------------------ */
/* Section band + heading                                              */
/* ------------------------------------------------------------------ */

const sectionTone = {
  default: "bg-background text-foreground",
  muted: "bg-secondary text-foreground",
  sand: "bg-sand text-foreground",
  navy: "bg-navy text-navy-foreground",
} as const;

export function Section({
  tone = "default",
  className,
  children,
  id,
}: {
  tone?: keyof typeof sectionTone;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const isNavy = tone === "navy";
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        isNavy && "relative isolate overflow-hidden",
        sectionTone[tone],
        className,
      )}
    >
      {isNavy ? <BrandAtmosphere density={0.55} beam={false} /> : null}
      <Container className={cn(isNavy && "relative")}>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  onNavy = false,
}: {
  children: ReactNode;
  className?: string;
  onNavy?: boolean;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        onNavy ? "text-gold" : "text-brand-blue",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("h-px w-8", onNavy ? "bg-gold" : "bg-brand-blue")}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onNavy = false,
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  onNavy?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Eyebrow onNavy={onNavy}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <Tag
        className={cn(
          "mt-5 text-balance font-display font-medium tracking-tight",
          Tag === "h1"
            ? "text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05]"
            : "text-3xl md:text-4xl leading-[1.1]",
          onNavy ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            onNavy ? "text-navy-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content primitives                                                  */
/* ------------------------------------------------------------------ */

export function FeatureCard({
  title,
  children,
  icon,
  className,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        "cine-card group rounded-xl border border-border bg-card p-7",
        className,
      )}
    >
      {icon ? (
        <div className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-secondary text-brand-blue transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-gold/15 group-hover:text-gold group-hover:shadow-[0_10px_24px_-14px_color-mix(in_oklab,var(--gold)_70%,transparent)]">
          <span className="transition-transform duration-500 group-hover:scale-110">
            {icon}
          </span>
        </div>
      ) : null}
      <h3 className="font-display text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-brand-blue">
        {title}
      </h3>
      <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

export function Stat({
  value,
  label,
  onNavy = false,
}: {
  value: string;
  label: string;
  onNavy?: boolean;
}) {
  return (
    <div>
      <p
        className={cn(
          "font-display text-4xl font-medium md:text-5xl",
          onNavy ? "text-gold" : "text-brand-blue",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-sm leading-snug",
          onNavy ? "text-navy-foreground/75" : "text-muted-foreground",
        )}
      >
        {label}
      </p>
    </div>
  );
}

export function Pullquote({
  quote,
  attribution,
  onNavy = false,
}: {
  quote: ReactNode;
  attribution?: string;
  onNavy?: boolean;
}) {
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <span
        aria-hidden
        className="mx-auto mb-4 block font-display text-6xl leading-none text-gold"
      >
        &ldquo;
      </span>
      <blockquote
        className={cn(
          "text-balance font-display text-2xl font-medium leading-snug md:text-[2rem]",
          onNavy ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {quote}
      </blockquote>
      {attribution ? (
        <figcaption
          className={cn(
            "mt-6 eyebrow",
            onNavy ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* Editorial media + text row (documentary style) */
export function MediaRow({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  action,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2 md:gap-16"
    >
      <div className={cn(reverse && "md:order-2")}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h3 className="mt-4 font-display text-3xl font-medium leading-tight text-foreground md:text-[2.4rem]">
          {title}
        </h3>
        <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-muted-foreground">
          {children}
        </div>
        {action ? <div className="mt-7">{action}</div> : null}
      </div>
      <div className={cn(reverse && "md:order-1")}>
        <div className="overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_-30px_rgba(11,29,58,0.4)]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
