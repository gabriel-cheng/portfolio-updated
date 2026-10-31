import { useCompanies } from "../../features/experiences/hooks/useCompanies";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { DividedList } from "../ui/DividedList";
import { ExperienceCard } from "../ui/ExperienceCard";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export interface ExperienceSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function ExperienceSection({
  id = "experiencia",
  eyebrow = ">_ 02 / TRAJETÓRIA",
  title = "Experiência profissional",
  description = "Minha trajetória profissional e os desafios que fizeram parte dela.",
  className,
}: ExperienceSectionProps) {
  const { data: companies = [], isLoading, isError, refetch } = useCompanies();

  return (
    <Section id={id} borderTop className={className}>
      <Container className="py-24">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          layout="stacked"
        />

        <div className="relative">
          {isLoading ? (
            <p className="py-10 text-sm text-[var(--color-muted)]">
              Carregando experiências...
            </p>
          ) : isError ? (
            <div className="py-10">
              <p className="text-sm text-[var(--color-muted)]">
                Não foi possível carregar as experiências profissionais.
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
          ) : companies.length === 0 ? (
            <p className="py-10 text-sm text-[var(--color-muted)]">
              Nenhuma experiência profissional disponível.
            </p>
          ) : (
            <>
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[216px] top-0 hidden w-px bg-[var(--color-border)] sm:block"
              />

              <DividedList className="relative divide-y-0 border-y-0">
                {companies.map((company) => (
                  <ExperienceCard
                    key={company.id}
                    company={company.name}
                    experiences={company.experiences}
                  />
                ))}
              </DividedList>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}

