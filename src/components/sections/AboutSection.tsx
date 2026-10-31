import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SpotifyEmbed } from "../layout/SpotifyEmbed";

export interface InterestItem {
  title: string;
  image: string;
  alt: string;
}

export interface AboutSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  interests?: InterestItem[];
  playlistId?: string;
  className?: string;
}

const defaultParagraphs = [
  "Fora do mundo do código, sou alguém que gosta de aproveitar as pequenas coisas. Gosto de ouvir música, tirar fotografias, de dias chuvosos e daquela sensação de ficar em casa enquanto a chuva cai lá fora.",
  "Também gosto de manter uma rotina de academia, jogar videogame e sair com meus amigos. Nos jogos, tenho uma queda especial por Soulslikes — e Dark Souls III é, sem dúvidas, meu favorito.",
  "No geral, gosto de experimentar coisas novas, descobrir novos interesses e aproveitar um pouco de cada coisa. Acho que são esses pequenos hobbies e momentos que tornam a vida mais interessante.",
];

const defaultInterests: InterestItem[] = [
  {
    title: "Mood",
    image: "/images/mood.jpeg",
    alt: "Clima perfeito",
  },
  {
    title: "Música",
    image: "/images/music.jpeg",
    alt: "Meu momento ouvindo música",
  },
  {
    title: "Academia",
    image: "/images/gym.jpeg",
    alt: "Minha rotina de academia",
  },
  {
    title: "Gaming",
    image: "/images/game.jpeg",
    alt: "Meu interesse por videogames",
  },
  {
    title: "Amigos",
    image: "/images/party.jpeg",
    alt: "Momentos com meus amigos",
  },
];

export function AboutSection({
  id = "sobre",
  eyebrow = ">_ 03 / SOBRE MIM",
  title = "Além do código.",
  paragraphs = defaultParagraphs,
  interests = defaultInterests,
  playlistId = "6FwXoaZaJPSbT9BuxvPsIC",
  className,
}: AboutSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const isLightboxOpen = selectedIndex !== null;
  const selectedImage =
    selectedIndex !== null ? interests[selectedIndex] : null;

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + interests.length) % interests.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % interests.length,
    );
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
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
            : (current - 1 + interests.length) % interests.length,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % interests.length,
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
  }, [isLightboxOpen, interests.length]);

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
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            {/* Apresentação textual */}
            <div>
              <Badge variant="label">{eyebrow}</Badge>

              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
                {title}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-8 text-[var(--color-muted)]">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Grid de interesses */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {interests.map((interest, index) => (
                <figure key={interest.title} className="group space-y-3">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Ampliar foto: ${interest.title}`}
                    className="block w-full cursor-zoom-in text-left"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
                      <img
                        src={interest.image}
                        alt={interest.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                        <span className="rounded-full border border-white/70 bg-black/30 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                          Ampliar foto
                        </span>
                      </div>
                    </div>
                  </button>

                  <figcaption>
                    <h3 className="font-display text-base font-medium">
                      {interest.title}
                    </h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Sugestão de playlist */}
          <div className="mt-20 border-t border-[var(--color-border)] pt-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <Badge variant="label">&gt;_ SUGESTÃO</Badge>

                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  Minha playlist favorita
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-[var(--color-muted)]">
                  Esta é a minha playlist favorita, talvez você também goste
                  :&#x29;
                </p>
              </div>

              <div className="w-full">
                <SpotifyEmbed playlistId={playlistId} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lightbox com carrossel */}
      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotografias"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Fechar */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fechar galeria"
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
            {interests.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Fotografia anterior"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition-colors hover:bg-white/20 sm:-left-12 sm:p-3"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Imagem atual */}
            <div
              key={selectedImage.image}
              className="flex w-full items-center justify-center animate-in fade-in zoom-in-95 duration-200"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-h-[75vh] max-w-full rounded-sm object-contain shadow-2xl"
              />
            </div>

            {/* Navegação próxima */}
            {interests.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                aria-label="Próxima fotografia"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition-colors hover:bg-white/20 sm:-right-12 sm:p-3"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Informações da imagem */}
            <div className="flex flex-col items-center gap-2 text-white">
              <p className="font-display text-base font-medium">
                {selectedImage.title}
              </p>

              <span className="font-mono text-xs text-white/50">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(interests.length).padStart(2, "0")}
              </span>

              {/* Indicadores */}
              <div className="mt-1 flex items-center gap-2">
                {interests.map((interest, index) => (
                  <button
                    key={interest.title}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Ir para ${interest.title}`}
                    aria-current={selectedIndex === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      selectedIndex === index
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
