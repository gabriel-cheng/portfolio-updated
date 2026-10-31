import type { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export interface ContactSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export function ContactSection({
  id = "contato",
  eyebrow = ">_ 03 / CONTATO",
  title = "Vamos construir algo interessante?",
  description = "Estou aberto a conversas sobre desenvolvimento, tecnologia e oportunidades profissionais.",
  className,
  children,
}: ContactSectionProps) {
  return (
    <Section id={id} borderTop className={className}>
      <Container className="py-28">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          titleSize="large"
          className={children ? undefined : "mb-0"}
        />
        {children}
      </Container>
    </Section>
  );
}

