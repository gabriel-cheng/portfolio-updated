import { Container } from "../ui/Container";
import { DividedList } from "../ui/DividedList";
import { ProjectCard } from "../ui/ProjectCard";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export interface ProjectItem {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  href?: string;
}

export interface ProjectsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  projects?: ProjectItem[];
  className?: string;
}

const defaultProjects: ProjectItem[] = [
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

export function ProjectsSection({
  id = "projetos",
  eyebrow = ">_ 01 / TRABALHOS",
  title = "Projetos selecionados",
  description = "Aplicações e soluções desenvolvidas utilizando diferentes tecnologias e abordagens.",
  projects = defaultProjects,
  className,
}: ProjectsSectionProps) {
  return (
    <Section id={id} borderTop className={className}>
      <Container className="py-24">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
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
              href={project.href}
            />
          ))}
        </DividedList>
      </Container>
    </Section>
  );
}
