import type { HTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./Badge";
import { cn } from "./utils";

export interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  href?: string;
  className?: string;
}

export function ProjectCard({
  number,
  title,
  description,
  technologies,
  href,
  className,
  ...props
}: ProjectCardProps) {
  const titleContent = (
    <div className="flex items-center gap-3">
      <h3 className="font-display text-2xl font-medium">{title}</h3>
      <ArrowUpRight
        size={18}
        className="text-[var(--color-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </div>
  );

  return (
    <article
      className={cn(
        "group grid gap-6 py-9 sm:grid-cols-[80px_1fr_auto] sm:items-start",
        className
      )}
      {...props}
    >
      <span className="font-mono text-xs text-[var(--color-muted)]">
        {number}
      </span>

      <div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-colors hover:text-[var(--color-accent)]"
          >
            {titleContent}
          </a>
        ) : (
          titleContent
        )}

        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

