import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "./utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  borderTop?: boolean;
  scrollMargin?: boolean;
  container?: boolean;
  containerClassName?: string;
  className?: string;
}

export function Section({
  children,
  id,
  borderTop = false,
  scrollMargin = true,
  container = false,
  containerClassName,
  className,
  ...props
}: SectionProps) {
  const content = container ? (
    <Container className={containerClassName}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        scrollMargin && "scroll-mt-20",
        borderTop && "border-t border-[var(--color-border)]",
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}

