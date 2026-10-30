import { ArrowUpRight } from "lucide-react";
import { Container, Logo } from "../ui";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo as="span" />

          <p className="mt-1 text-xs text-[var(--color-muted)]">
            Desenvolvido por Gabriel Carvalho usando React.js + Tailwind
          </p>
        </div>

        <div className="flex items-center justify-between gap-6">
          <span className="font-mono text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} Gabriel Carvalho
          </span>

          <a
            href="#inicio"
            className="flex items-center gap-2 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Voltar ao topo
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
