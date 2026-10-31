import { ArrowDown } from "lucide-react";
import { useMagnetic } from "../../hooks/useMagnetic";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { cn } from "../ui/utils";

export interface HeroSectionProps {
  id?: string;
  badgeText?: string;
  title?: string;
  description?: string;
  projectsHref?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function HeroSection({
  id = "inicio",
  badgeText = "Desenvolvedor Full-Stack",
  title = "Gabriel Carvalho",
  description = "Há 6 anos construindo aplicações seguras e escaláveis.",
  projectsHref = "#projetos",
  buttonText = "Explorar projetos",
  imageSrc = "/images/default-profile.png",
  imageAlt = "Fotografia de Gabriel",
  className,
}: HeroSectionProps) {
  const { elementRef, handleMouseMove, handleMouseLeave } = useMagnetic(20);

  return (
    <Section
      id={id}
      scrollMargin={false}
      className={cn(
        "relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-28 pt-32",
        className,
      )}
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Apresentação */}
        <div>
          <Badge variant="subtle">
            <span className="font-mono text-[var(--color-accent)]">&gt;_</span>{" "}
            {badgeText}
          </Badge>

          <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {description}
          </p>

          <div className="mt-8">
            <Button href={projectsHref} variant="underline">
              {buttonText}
              <ArrowDown size={15} />
            </Button>
          </div>
        </div>

        {/* Fotografia */}
        <div className="mx-auto w-full max-w-[360px] lg:max-w-[400px]">
          <div
            ref={elementRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="magnetic-image relative aspect-square overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href={projectsHref}
        aria-label="Rolar para a seção de projetos"
        className="scroll-indicator absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        <span className="font-mono text-[10px] tracking-[0.2em]">
          ROLE PARA EXPLORAR...
        </span>

        <span className="mouse-scroll">
          <span className="mouse-scroll-dot" />
        </span>
      </a>
    </Section>
  );
}

