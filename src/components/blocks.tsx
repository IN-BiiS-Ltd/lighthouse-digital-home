import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { BrandAtmosphere } from "@/components/brand-atmosphere";
import { CrystalField } from "@/components/crystal-field";
import primaryLogoSrc from "@/assets/lighthouse-campus-logo.webp";

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
        LIGHTHOUSE
      </span>
      <span className="eyebrow mt-1 text-gold tracking-[0.42em]">Campus</span>
    </span>
  );
}

export function BrandLogo({
  className,
  alt = "Lighthouse Campus — official emblem",
}: {
  className?: string;
  /** Pass `""` for decorative use when a nearby heading, aria-label or Wordmark already names the brand. */
  alt?: string;
  /** "dark" — for navy/dark surfaces · "light" — for light surfaces · "legacy" — original mark */
  variant?: "dark" | "light" | "legacy";
}) {
  const src = primaryLogoSrc;
  const decorative = alt === "";
  return (
    <img
      src={src}
      alt={alt}
      {...(decorative ? { "aria-hidden": true, role: "presentation" as const } : {})}
      width={512}
      height={512}
      className={cn("select-none", className)}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

/**
 * BrandLockup — official mark + wordmark, side by side.
 * Use in hero, header, page hero and footer for a consistent institutional signature.
 */
export function BrandLockup({
  className,
  onNavy = true,
  size = "md",
}: {
  className?: string;
  onNavy?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const markSize =
    size === "lg" ? "h-16 w-16 md:h-20 md:w-20" : size === "sm" ? "h-9 w-9" : "h-12 w-12";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <BrandLogo
        variant={onNavy ? "dark" : "light"}
        className={cn(markSize, "shrink-0 object-contain")}
      />
      <Wordmark onNavy={onNavy} />
    </span>
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
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 magnetic",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-navy-foreground hover:bg-navy/90 shadow-e1 hover:shadow-e2",
        gold: "bg-gold text-gold-foreground hover:brightness-105 shadow-e1 hover:shadow-gold-glow",
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
  onPointerMove,
  onPointerLeave,
  ...rest
}: ButtonLinkProps) {
  // Inline magnetic pull — subtle 6px max, disabled under reduced-motion by CSS
  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - (r.left + r.width / 2)) * 0.22);
    const dy = ((e.clientY - (r.top + r.height / 2)) * 0.22);
    el.style.setProperty("--mgx", `${Math.max(-6, Math.min(6, dx))}px`);
    el.style.setProperty("--mgy", `${Math.max(-5, Math.min(5, dy))}px`);
  };
  const handleLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty("--mgx", "0px");
    e.currentTarget.style.setProperty("--mgy", "0px");
  };
  return (
    <SmartLink
      to={to}
      className={cn(buttonVariants({ variant, size }), className)}
      onPointerMove={(e) => {
        handleMove(e as unknown as MouseEvent<HTMLAnchorElement>);
        onPointerMove?.(e);
      }}
      onPointerLeave={(e) => {
        handleLeave(e as unknown as MouseEvent<HTMLAnchorElement>);
        onPointerLeave?.(e);
      }}
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
  const isTinted = tone === "muted" || tone === "sand";
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        (isNavy || isTinted) && "relative isolate overflow-hidden",
        isNavy && "grain",
        sectionTone[tone],
        className,
      )}
    >
      {isNavy ? (
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0 mesh-navy opacity-70" />
          <BrandAtmosphere density={0.55} beam={false} />
          <CrystalField className="opacity-60" count={5} />
        </>
      ) : null}
      {isTinted ? (
        <CrystalField variant="light" count={4} className="opacity-90" />
      ) : null}
      <Container className={cn((isNavy || isTinted) && "relative")}>
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
          "mt-5 text-balance",
          Tag === "h1" ? "text-display-1" : "text-display-2",
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
          "text-display-2 tabular",
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
        className="text-serif-accent mx-auto mb-4 block text-7xl leading-none text-gold italic"
      >
        &ldquo;
      </span>
      <blockquote
        className={cn(
          "text-serif-accent text-balance text-3xl leading-[1.15] md:text-[2.4rem]",
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
  imageAvif,
  imageWebp,
  reverse = false,
  action,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  image: string;
  imageAlt: string;
  imageAvif?: string;
  imageWebp?: string;
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
          <picture>
            {imageAvif ? (
              <source
                type="image/avif"
                srcSet={imageAvif}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : null}
            {imageWebp ? (
              <source
                type="image/webp"
                srcSet={imageWebp}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : null}
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
