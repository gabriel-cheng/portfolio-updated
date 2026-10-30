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

const experiences = [
  {
    period: "2025 — 2026",
    role: "Desenvolvedor Full-Stack",
    company: "Codes",
    description:
      "Desenvolvimento e manutenção de aplicações web, APIs e integrações.",
  },
  {
    period: "2023 — 2024",
    role: "Analista de TI",
    company: "Citybens",
    description:
      "Atuação com suporte à infraestrutura, sistemas internos e integrações.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <Section
        id="inicio"
        scrollMargin={false}
        className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-32 pt-32"
      >
        <Badge variant="subtle">
          <span className="font-mono text-[var(--color-accent)]">&gt;_</span>{" "}
          DESENVOLVEDOR DE SOFTWARE
        </Badge>

        <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
          Desenvolvendo
          <br />
          soluções digitais
          <span className="text-[var(--color-accent)]">.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-lg text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            Sou desenvolvedor de software e trabalho na construção de aplicações
            web, APIs e soluções que conectam tecnologia e necessidades reais.
          </p>

          <Button href="#projetos" variant="underline">
            Explorar projetos
            <ArrowDown size={15} />
          </Button>
        </div>

        <a
          href="#projetos"
          aria-label="Rolar para a seção de projetos"
          className="scroll-indicator absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span className="font-mono text-[10px] tracking-[0.2em]">
            SCROLL TO EXPLORE
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

      <Section id="experiencia" borderTop>
        <Container className="py-24">
          <SectionHeading
            eyebrow=">_ 02 / TRAJETÓRIA"
            title="Experiência profissional"
          />

          <DividedList>
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                period={experience.period}
                role={experience.role}
                company={experience.company}
                description={experience.description}
              />
            ))}
          </DividedList>
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
