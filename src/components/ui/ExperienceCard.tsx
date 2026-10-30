import type { HTMLAttributes } from "react";
import { cn } from "./utils";

export interface ExperienceCardProps extends HTMLAttributes<HTMLElement> {
  period: string;
  role: string;
  company: string;
  description: string;
  className?: string;
}

export function ExperienceCard({
  period,
  role,
  company,
  description,
  className,
  ...props
}: ExperienceCardProps) {
  return (
    <article
      className={cn("grid gap-4 py-8 sm:grid-cols-[180px_1fr]", className)}
      {...props}
    >
      <span className="font-mono text-xs text-[var(--color-muted)]">
        {period}
      </span>

      <div>
        <h3 className="font-display text-xl font-medium">{role}</h3>

        <p className="mt-1 text-sm text-[var(--color-accent)]">{company}</p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      </div>
    </article>
  );
}

