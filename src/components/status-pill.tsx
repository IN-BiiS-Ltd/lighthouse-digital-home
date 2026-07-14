import { cn } from "@/lib/utils";

export type ServiceStatus = "Available" | "In Development" | "Planned";

const styles: Record<ServiceStatus, string> = {
  Available:
    "bg-brand-blue/10 text-brand-blue ring-1 ring-inset ring-brand-blue/20",
  "In Development":
    "bg-gold/15 text-[color:var(--gold-foreground)] ring-1 ring-inset ring-gold/40",
  Planned:
    "bg-secondary text-muted-foreground ring-1 ring-inset ring-border",
};

export function StatusPill({
  status,
  className,
}: {
  status: ServiceStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em]",
        styles[status],
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          status === "Available" && "bg-brand-blue",
          status === "In Development" && "bg-gold",
          status === "Planned" && "bg-muted-foreground/60",
        )}
      />
      {status}
    </span>
  );
}
