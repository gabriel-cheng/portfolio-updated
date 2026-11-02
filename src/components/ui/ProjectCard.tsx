import type { HTMLAttributes } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { Badge } from "./Badge";
import { cn } from "./utils";

export interface ProjectCardProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
  id?: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string | null;
  imageAlt?: string | null;
  liveUrl?: string | null;
  githubUrl?: string | null;
  href?: string | null;
  category?: string | null;
  status?: string | null;
  highlights?: string[] | null;
  className?: string;
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function ProjectCard({
  number,
  title,
  description,
  technologies,
  image,
  imageAlt,
  liveUrl,
  githubUrl,
  href,
  category,
  status,
  highlights,
  className,
  ...props
}: ProjectCardProps) {
  const finalLiveUrl =
    liveUrl && liveUrl.trim().length > 0
      ? liveUrl
      : href && href.trim().length > 0
        ? href
        : undefined;

  const finalGithubUrl =
    githubUrl && githubUrl.trim().length > 0 ? githubUrl : undefined;

  const targetUrl = finalLiveUrl ?? finalGithubUrl;
  const hasImage = Boolean(image && image.trim().length > 0);

  const previewContent = (
    <div className="w-full">
      {hasImage && image ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm transition-all duration-300 group-hover:border-[var(--color-accent)]">
          {/* Barra de janela estilo navegador minimalista */}
          <div className="flex h-7 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-3">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[var(--color-border)]" />
              <span className="size-2 rounded-full bg-[var(--color-border)]" />
              <span className="size-2 rounded-full bg-[var(--color-border)]" />
            </div>
            <span className="truncate font-mono text-[10px] text-[var(--color-muted)]">
              {finalLiveUrl
                ? finalLiveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                : `${title.toLowerCase().replace(/\s+/g, "-")}.dev`}
            </span>
            <div className="w-8" />
          </div>

          <div className="relative h-[calc(100%-1.75rem)] w-full overflow-hidden">
            <img
              src={image}
              alt={imageAlt ?? `Screenshot do projeto ${title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      ) : (
        /* Mockup elegante quando a imagem ainda não foi configurada */
        <div className="group/mockup relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-sm border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/30 p-5 transition-colors hover:border-[var(--color-accent)]">
          {/* Top bar mockup */}
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[var(--color-border)]" />
              <span className="size-2 rounded-full bg-[var(--color-border)]" />
              <span className="size-2 rounded-full bg-[var(--color-border)]" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-[var(--color-muted)]">
              PREVIEW DO PROJETO
            </span>
          </div>

          {/* Central mockup */}
          <div className="my-auto flex flex-col items-center justify-center text-center">
            <div className="flex size-11 items-center justify-center rounded-sm border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-muted)] transition-colors group-hover/mockup:border-[var(--color-accent)] group-hover/mockup:text-[var(--color-accent)]">
              <Layers size={22} />
            </div>
            <span className="mt-3 font-display text-sm font-medium text-[var(--color-foreground)]">
              {title}
            </span>
            <span className="mt-1 font-mono text-[10px] text-[var(--color-muted)]">
              Espaço para screenshot (16:10 / 16:9)
            </span>
          </div>

          {/* Bottom mockup */}
          <div className="flex items-center justify-between font-mono text-[10px] text-[var(--color-muted)]">
            <span>&gt;_ {technologies[0] ?? "Software"}</span>
            <span>{status ?? "Ativo"}</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <article
      className={cn(
        "group grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
        className,
      )}
      {...props}
    >
      {/* Informações do projeto */}
      <div>
        {/* Metadados superiores: número, categoria e status */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-medium text-[var(--color-muted)]">
            {number}
          </span>

          {category && <Badge variant="subtle">{category}</Badge>}

          {status && <Badge variant="outline">{status}</Badge>}
        </div>

        {/* Título */}
        <div className="mt-4 flex items-center gap-3">
          {targetUrl ? (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 font-display text-2xl font-medium tracking-tight transition-colors hover:text-[var(--color-accent)] sm:text-3xl"
            >
              <span>{title}</span>
              <ArrowUpRight
                size={20}
                className="text-[var(--color-muted)] transition-transform duration-200 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-[var(--color-accent)]"
              />
            </a>
          ) : (
            <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {title}
            </h3>
          )}
        </div>

        {/* Descrição principal */}
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
          {description}
        </p>

        {/* Destaques técnicos / diferenciais para recrutadores */}
        {highlights && highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs leading-6 text-[var(--color-muted)] sm:text-sm"
              >
                <span className="mt-2.5 size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Badges de tecnologias */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>

        {/* Links de acesso / ações */}
        {(finalLiveUrl || finalGithubUrl) && (
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {finalLiveUrl && (
              <a
                href={finalLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-border)] px-4 py-2 font-display text-xs font-medium text-[var(--color-background)] transition-all hover:opacity-90 hover:shadow-sm"
              >
                <span>Acessar projeto</span>
                <ArrowUpRight size={14} />
              </a>
            )}

            {finalGithubUrl && (
              <a
                href={finalGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-4 py-2 font-display text-xs font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <GithubIcon className="size-3.5" />
                <span>Repositório</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Preview / Screenshot */}
      <div>
        {targetUrl ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar projeto ${title}`}
            className="block cursor-pointer"
          >
            {previewContent}
          </a>
        ) : (
          previewContent
        )}
      </div>
    </article>
  );
}
