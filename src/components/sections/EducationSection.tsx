import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEducations } from "../../features/educations/hooks/useEducations";
import { formatEducationPeriod } from "../../features/educations/utils/formatEducationPeriod";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { DividedList } from "../ui/DividedList";
import { EducationCard, type EducationItem } from "../ui/EducationCard";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export interface EducationSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  educations?: EducationItem[];
  className?: string;
}

export function EducationSection({
  id = "formacao",
  eyebrow = ">_ 03 / FORMAÇÃO",
  title = "Formação acadêmica",
  educations: propEducations,
  className,
}: EducationSectionProps) {
  const {
    data: apiEducations = [],
    isLoading,
    isError,
    refetch,
  } = useEducations();

  const isControlled = propEducations !== undefined;
  const educations = isControlled ? propEducations : apiEducations;

  const diplomasList = educations.filter((edu) =>
    Boolean(edu.diplomaImage && edu.diplomaImage.trim().length > 0),
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const isLightboxOpen = selectedIndex !== null;
  const selectedDiploma =
    selectedIndex !== null ? diplomasList[selectedIndex] : null;

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + diplomasList.length) % diplomasList.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % diplomasList.length,
    );
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const handleOpenDiploma = (education: EducationItem) => {
    const index = diplomasList.findIndex((item) => item.id === education.id);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  const getDiplomaPeriod = (item: EducationItem) => {
    if (item.period) return item.period;
    return formatEducationPeriod(item.startYear, item.endYear);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + diplomasList.length) % diplomasList.length,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % diplomasList.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, diplomasList.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;

    const distance = event.changedTouches[0].clientX - touchStart;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }

    setTouchStart(null);
  };

  return (
    <>
      <Section id={id} borderTop className={className}>
        <Container className="py-24">
          <SectionHeading eyebrow={eyebrow} title={title} layout="stacked" />

          <div className="relative">
            {!isControlled && isLoading ? (
              <p className="py-10 text-sm text-[var(--color-muted)]">
                Carregando formações acadêmicas...
              </p>
            ) : !isControlled && isError ? (
              <div className="py-10">
                <p className="text-sm text-[var(--color-muted)]">
                  Não foi possível carregar as formações acadêmicas.
                </p>

                <Button
                  variant="underline"
                  size="sm"
                  onClick={() => refetch()}
                  className="mt-3"
                >
                  Tentar novamente
                </Button>
              </div>
            ) : educations.length === 0 ? (
              <p className="py-10 text-sm text-[var(--color-muted)]">
                Nenhuma formação acadêmica disponível.
              </p>
            ) : (
              <DividedList>
                {educations.map((education) => (
                  <EducationCard
                    key={education.id}
                    education={education}
                    onOpenDiploma={handleOpenDiploma}
                  />
                ))}
              </DividedList>
            )}
          </div>
        </Container>
      </Section>

      {/* Lightbox com carrossel para visualização ampliada do diploma */}
      {selectedDiploma &&
        selectedIndex !== null &&
        selectedDiploma.diplomaImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Diploma ampliado"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            {/* Fechar */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Fechar visualização"
              className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} />
            </button>

            {/* Carrossel */}
            <div
              className="relative flex w-full max-w-5xl flex-col items-center gap-5"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Navegação anterior */}
              {diplomasList.length > 1 && (
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Diploma anterior"
                  className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition-colors hover:bg-white/20 sm:-left-12 sm:p-3"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Imagem atual */}
              <div
                key={selectedDiploma.diplomaImage}
                className="flex w-full items-center justify-center animate-in fade-in zoom-in-95 duration-200"
              >
                <img
                  src={selectedDiploma.diplomaImage}
                  alt={
                    selectedDiploma.diplomaAlt ??
                    `Diploma de ${selectedDiploma.degree} - ${selectedDiploma.institution}`
                  }
                  className="max-h-[75vh] max-w-full rounded-sm object-contain shadow-2xl"
                />
              </div>

              {/* Navegação próxima */}
              {diplomasList.length > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Próximo diploma"
                  className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition-colors hover:bg-white/20 sm:-right-12 sm:p-3"
                >
                  <ChevronRight size={24} />
                </button>
              )}

              {/* Informações da imagem */}
              <div className="flex flex-col items-center gap-2 text-white">
                <p className="font-display text-base font-medium">
                  {selectedDiploma.degree}
                </p>

                <span className="font-mono text-xs text-white/50">
                  {selectedDiploma.institution} —{" "}
                  {getDiplomaPeriod(selectedDiploma)}
                </span>

                {diplomasList.length > 1 && (
                  <span className="font-mono text-xs text-white/50">
                    {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                    {String(diplomasList.length).padStart(2, "0")}
                  </span>
                )}

                {/* Indicadores */}
                {diplomasList.length > 1 && (
                  <div className="mt-1 flex items-center gap-2">
                    {diplomasList.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        aria-label={`Ir para ${item.degree}`}
                        aria-current={
                          selectedIndex === index ? "true" : undefined
                        }
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          selectedIndex === index
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
    </>
  );
}
