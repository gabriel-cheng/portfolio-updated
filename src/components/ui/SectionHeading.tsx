import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { cn } from "./utils";

export interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  layout?: "split" | "stacked";
  titleSize?: "default" | "large";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  layout = "stacked",
  titleSize = "default",
  className,
}: SectionHeadingProps) {
  const titleClass = cn(
    "font-display font-medium tracking-tight",
    titleSize === "large"
      ? "mt-5 max-w-3xl text-4xl sm:text-6xl"
      : "mt-4 text-4xl sm:text-5xl"
  );

  if (layout === "split") {
    return (
      <div
        className={cn(
          "mb-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
          className
        )}
      >
        <div>
          {eyebrow && <Badge variant="label">{eyebrow}</Badge>}
          <h2 className={titleClass}>{title}</h2>
        </div>

        {description && (
          <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("mb-16", className)}>
      {eyebrow && <Badge variant="label">{eyebrow}</Badge>}
      <h2 className={titleClass}>{title}</h2>
      {description && (
        <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}

