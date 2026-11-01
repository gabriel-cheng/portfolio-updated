import type { HTMLAttributes } from "react";
import { Award } from "lucide-react";
import { Badge } from "./Badge";
import { cn } from "./utils";
import type { Education } from "../../features/educations/types/education";
import { formatEducationPeriod } from "../../features/educations/utils/formatEducationPeriod";

export type EducationItem = Education;

export interface EducationCardProps extends HTMLAttributes<HTMLElement> {
  education: EducationItem;
  onOpenDiploma?: (education: EducationItem) => void;
  className?: string;
}

export function EducationCard({
  education,
  onOpenDiploma,
  className,
  ...props
}: EducationCardProps) {
  const {
    degree,
    institution,
    startYear,
    endYear,
    period,
    status,
    type,
    description,
    skills,
    diplomaImage,
    diplomaAlt,
  } = education;

  const displayPeriod =
    period ?? (startYear ? formatEducationPeriod(startYear, endYear) : "");

  const hasDiploma = Boolean(diplomaImage && diplomaImage.trim().length > 0);

  return (
    <article
      className={cn(
        "grid gap-6 py-10 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8",
        className,
      )}
      {...props}
    >
      {/* Período e Instituição */}
      <div className="h-fit sm:sticky sm:top-28">
        {displayPeriod && (
          <span className="font-mono text-xs text-[var(--color-muted)]">
            {displayPeriod}
          </span>
        )}

        <h3 className="mt-2 font-display text-lg font-medium text-[var(--color-foreground)]">
          {institution}
        </h3>

        {status && (
          <div className="mt-3">
            <Badge variant="outline">{status}</Badge>
          </div>
        )}
      </div>

      {/* Detalhes da Formação + Espaço para foto do Diploma */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        {/* Informações textuais */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-display text-2xl font-medium tracking-tight">
              {degree}
            </h4>
            {type && <Badge variant="subtle">{type}</Badge>}
          </div>

          {description && (
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              {description}
            </p>
          )}

          {skills && skills.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Espaço para foto do diploma (formato horizontal) */}
        <div className="w-full shrink-0 sm:w-[320px] lg:w-[340px]">
          {hasDiploma && diplomaImage ? (
            <button
              type="button"
              onClick={() => onOpenDiploma?.(education)}
              aria-label={`Ampliar foto: ${degree}`}
              className="group/diploma block w-full cursor-zoom-in text-left"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
                <img
                  src={diplomaImage}
                  alt={diplomaAlt ?? `Diploma de ${degree} - ${institution}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/diploma:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/diploma:bg-black/20">
                  <span className="rounded-full border border-white/70 bg-black/30 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/diploma:opacity-100">
                    Ampliar foto
                  </span>
                </div>
              </div>
            </button>
          ) : (
            <div className="group/placeholder relative flex aspect-[16/10] w-full flex-col items-center justify-center rounded-sm border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/30 p-5 text-center transition-colors hover:border-[var(--color-accent)]">
              <div className="flex size-10 items-center justify-center rounded-sm border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-muted)] transition-colors group-hover/placeholder:border-[var(--color-accent)] group-hover/placeholder:text-[var(--color-accent)]">
                <Award size={20} />
              </div>

              <span className="mt-3 font-mono text-[11px] font-medium tracking-wider text-[var(--color-foreground)]">
                FOTO DO DIPLOMA
              </span>
              <span className="mt-1 font-mono text-[10px] text-[var(--color-muted)]">
                Espaço horizontal (16:10 / 16:9)
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
