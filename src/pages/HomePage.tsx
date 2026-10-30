import { ArrowDown } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import {
  Badge,
  Button,
  Container,
  DividedList,
  ExperienceCard,
  ProjectCard,
  Section,
  SectionHeading,
} from "../components/ui";
import { useMagnetic } from "../hooks/useMagnetic";
import { useCompanies } from "../features/experiences/hooks/useCompanies";

const projects = [
  {
    number: "01",
    title: "VaultaPass",
    description:
      "Gerenciador de credenciais com foco em segurança, organização e experiência de uso.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Portfolio CMS",
    description:
      "Sistema de gerenciamento de conteúdo para projetos e experiências profissionais.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
  },
];

export default function HomePage() {
  const { elementRef, handleMouseMove, handleMouseLeave } = useMagnetic(20);
  const { data: companies = [], isLoading, isError, refetch } = useCompanies();

  return (
    <Layout>
      <Section
        id="inicio"
        scrollMargin={false}
        className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-28 pt-32"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Apresentação */}
          <div>
            <Badge variant="subtle">
              <span className="font-mono text-[var(--color-accent)]">
                &gt;_
              </span>{" "}
              Desenvolvedor Full-Stack
            </Badge>

            <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Gabriel Carvalho
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Há 6 anos construindo aplicações seguras e escaláveis.
            </p>

            <div className="mt-8">
              <Button href="#projetos" variant="underline">
                Explorar projetos
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
                src="/images/profile.png"
                alt="Fotografia de Gabriel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <a
          href="#projetos"
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

      <Section id="projetos" borderTop>
        <Container className="py-24">
          <SectionHeading
            eyebrow=">_ 01 / TRABALHOS"
            title="Projetos selecionados"
            description="Aplicações e soluções desenvolvidas utilizando diferentes tecnologias e abordagens."
            layout="split"
          />

          <DividedList>
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                number={project.number}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </DividedList>
        </Container>
      </Section>

      {/* Experiência */}

      <Section id="experiencia" borderTop>
        <Container className="py-24">
          <SectionHeading
            eyebrow=">_ 02 / TRAJETÓRIA"
            title="Experiência profissional"
            description="Minha trajetória profissional e os desafios que fizeram parte dela."
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

      <Section id="contato" borderTop>
        <Container className="py-28">
          <SectionHeading
            eyebrow=">_ 03 / CONTATO"
            title="Vamos construir algo interessante?"
            description="Estou aberto a conversas sobre desenvolvimento, tecnologia e oportunidades profissionais."
            titleSize="large"
            className="mb-0"
          />
        </Container>
      </Section>
    </Layout>
  );
}
