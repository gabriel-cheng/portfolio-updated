import type { HTMLAttributes } from "react";
import { Badge } from "./Badge";
import { cn } from "./utils";

export interface ExperienceCardProps extends HTMLAttributes<HTMLElement> {
  period: string;
  role: string;
  company: string;
  description: string;
  employmentType?: string;
  location?: string | null;
  technologies?: string[];
  className?: string;
}

const employmentLabels: Record<string, string> = {
  FREELANCE: "Freelancer",
  CLT: "CLT",
  PJ: "Pessoa jurídica",
  INTERN: "Estágio",
  CONTRACTOR: "Contrato",
  FULL_TIME: "Tempo integral",
  PART_TIME: "Meio período",
};

export function ExperienceCard({
  period,
  role,
  company,
  description,
  employmentType,
  location,
  technologies = [],
  className,
  ...props
}: ExperienceCardProps) {
  const descriptionLines = description
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const isBulletList = descriptionLines.some((line) => line.startsWith("- "));

  return (
    <article
      className={cn(
        "relative grid min-h-[220px] gap-4 py-10 sm:grid-cols-[180px_24px_minmax(0,1fr)] sm:gap-6",
        className,
      )}
      {...props}
    >
      {/* Empresa e período */}
      <div className="h-fit sm:sticky sm:top-28">
        <h3 className="font-display text-lg font-medium">{company}</h3>

        <span className="mt-2 block font-mono text-xs text-[var(--color-muted)]">
          {period}
        </span>
      </div>

      {/* Marcador da timeline */}
      <div className="relative hidden justify-center sm:flex">
        <span className="relative z-10 mt-1 size-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-background)]" />
      </div>

      {/* Conteúdo da experiência */}
      <div className="sm:pl-2">
        <h4 className="font-display text-xl font-medium">{role}</h4>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[var(--color-muted)]">
          {employmentType && (
            <span>{employmentLabels[employmentType] ?? employmentType}</span>
          )}

          {employmentType && location && <span aria-hidden="true">/</span>}

          {location && <span>{location}</span>}
        </div>

        <div className="mt-5 max-w-2xl">
          {isBulletList ? (
            <ul className="space-y-3">
              {descriptionLines.map((line, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-7 text-[var(--color-muted)]"
                >
                  <span className="mt-[11px] size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{line.replace(/^-\s*/, "")}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              {description}
            </p>
          )}
        </div>

        {technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge key={technology} variant="subtle">
                {technology.replace(/\.$/, "")}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
