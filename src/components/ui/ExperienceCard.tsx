import type { HTMLAttributes } from "react";
import { Badge } from "./Badge";
import { cn } from "./utils";
import { formatExperiencePeriod } from "../../features/experiences/utils/formatExperiencePeriod";

interface Experience {
  id: string;
  role: string;
  description: string;
  employmentType?: string;
  location?: string | null;
  technologies?: string[];
  startDate: string;
  endDate: string | null;
  current: boolean;
  displayOrder: number;
}

export interface ExperienceCardProps extends HTMLAttributes<HTMLElement> {
  company: string;
  experiences: Experience[];
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
  company,
  experiences,
  className,
  ...props
}: ExperienceCardProps) {
  const orderedExperiences = experiences
    .slice()
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const periods = orderedExperiences.map((experience) =>
    formatExperiencePeriod(
      experience.startDate,
      experience.endDate,
      experience.current,
    ),
  );

  const companyPeriod =
    periods.length > 0
      ? periods.length === 1
        ? periods[0]
        : `${orderedExperiences[0].startDate.slice(0, 4)} — ${
            orderedExperiences.some((experience) => experience.current)
              ? "Atual"
              : (orderedExperiences
                  .map((experience) => experience.endDate)
                  .filter((date): date is string => date !== null)
                  .sort()
                  .at(-1)
                  ?.slice(0, 4) ?? "")
          }`
      : "";

  return (
    <article
      className={cn(
        "relative grid gap-4 py-10 sm:grid-cols-[180px_24px_minmax(0,1fr)] sm:gap-6",
        className,
      )}
      {...props}
    >
      {/* Empresa e período */}
      <div className="h-fit sm:sticky sm:top-28">
        <h3 className="font-display text-lg font-medium">{company}</h3>

        <span className="mt-2 block font-mono text-xs text-[var(--color-muted)]">
          {companyPeriod}
        </span>
      </div>

      {/* Um único marcador por empresa */}
      <div className="relative hidden justify-center sm:flex">
        <span className="relative z-10 mt-1 size-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-background)]" />
      </div>

      {/* Experiências da empresa */}
      <div className="sm:pl-2">
        {orderedExperiences.map((experience, index) => {
          const descriptionLines = experience.description
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter(Boolean);

          const isBulletList = descriptionLines.some((line) =>
            line.startsWith("- "),
          );

          return (
            <div
              key={experience.id}
              className={cn(
                index > 0 && "mt-10 border-t border-[var(--color-border)] pt-8",
              )}
            >
              <h4 className="font-display text-xl font-medium">
                {experience.role}
              </h4>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[var(--color-muted)]">
                <span>
                  {formatExperiencePeriod(
                    experience.startDate,
                    experience.endDate,
                    experience.current,
                  )}
                </span>

                {experience.employmentType && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span>
                      {employmentLabels[experience.employmentType] ??
                        experience.employmentType}
                    </span>
                  </>
                )}

                {experience.location && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span>{experience.location}</span>
                  </>
                )}
              </div>

              <div className="mt-5 max-w-2xl">
                {isBulletList ? (
                  <ul className="space-y-3">
                    {descriptionLines.map((line, lineIndex) => (
                      <li
                        key={lineIndex}
                        className="flex gap-3 text-sm leading-7 text-[var(--color-muted)]"
                      >
                        <span className="mt-[11px] size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{line.replace(/^-\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {experience.description}
                  </p>
                )}
              </div>

              {experience.technologies &&
                experience.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <Badge key={technology} variant="subtle">
                        {technology.replace(/\.$/, "")}
                      </Badge>
                    ))}
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </article>
  );
}
