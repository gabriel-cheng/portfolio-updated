import { useProjects } from "../../features/projects/hooks/useProjects";
import type { Project } from "../../features/projects/types/project";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { DividedList } from "../ui/DividedList";
import { ProjectCard } from "../ui/ProjectCard";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export type ProjectItem = Project;

export interface ProjectsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  projects?: ProjectItem[];
  className?: string;
}

export function ProjectsSection({
  id = "projetos",
  eyebrow = ">_ 01 / TRABALHOS",
  title = "Projetos selecionados",
  description = "Aplicações e soluções desenvolvidas utilizando diferentes tecnologias e abordagens.",
  projects: propProjects,
  className,
}: ProjectsSectionProps) {
  const { data: apiProjects = [], isLoading, isError, refetch } = useProjects();

  const isControlled = propProjects !== undefined;
  const projects = isControlled ? propProjects : apiProjects;

  const sortedProjects = [...projects].sort((a, b) => {
    const numA = parseInt(a.number, 10);
    const numB = parseInt(b.number, 10);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return String(a.number ?? "").localeCompare(
      String(b.number ?? ""),
      undefined,
      { numeric: true },
    );
  });

  return (
    <Section id={id} borderTop className={className}>
      <Container className="py-24">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          layout="split"
        />

        <div className="relative">
          {!isControlled && isLoading ? (
            <p className="py-10 text-sm text-[var(--color-muted)]">
              Carregando projetos...
            </p>
          ) : !isControlled && isError ? (
            <div className="py-10">
              <p className="text-sm text-[var(--color-muted)]">
                Não foi possível carregar os projetos.
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
          ) : sortedProjects.length === 0 ? (
            <p className="py-10 text-sm text-[var(--color-muted)]">
              Nenhum projeto disponível no momento.
            </p>
          ) : (
            <DividedList>
              {sortedProjects.map((project) => (
                <ProjectCard
                  key={project.id ?? project.number}
                  {...project}
                />
              ))}
            </DividedList>
          )}
        </div>
      </Container>
    </Section>
  );
}
