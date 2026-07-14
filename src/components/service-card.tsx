import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { StatusPill, type ServiceStatus } from "@/components/status-pill";

export interface ServiceCardProps {
  title: string;
  description: string;
  status: ServiceStatus;
  icon?: ReactNode;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  status,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors",
        status !== "Available" && "bg-secondary/40",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        {icon ? (
          <div className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-brand-blue">
            {icon}
          </div>
        ) : null}
        <StatusPill status={status} className="ms-auto" />
      </div>
      <h3 className="mt-5 font-display text-lg font-medium text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
