import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export interface SocialLinkItem {
  name: string;
  label: string;
  handle: string;
  href: string;
  icon: "linkedin" | "whatsapp" | "github" | "mail";
}

export interface ContactSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  socials?: SocialLinkItem[];
  className?: string;
  children?: ReactNode;
}

const defaultSocials: SocialLinkItem[] = [
  {
    name: "LinkedIn",
    label: "REDE PROFISSIONAL",
    handle: "in/gabriel-henrique-ita",
    href: "https://www.linkedin.com/in/gabriel-henrique-ita/",
    icon: "linkedin",
  },
  {
    name: "WhatsApp",
    label: "MENSAGEM DIRETA",
    handle: "+55 (18) 99116-3599",
    href: "https://wa.me/5518991163599",
    icon: "whatsapp",
  },
  {
    name: "GitHub",
    label: "CÓDIGO & PROJETOS",
    handle: "gabriel-cheng",
    href: "https://github.com/gabriel-cheng",
    icon: "github",
  },
  {
    name: "E-mail",
    label: "E-MAIL PESSOAL",
    handle: "developer.gabrielcarvalho",
    href: "mailto:developer.gabrielcarvalho@outlook.com",
    icon: "mail",
  },
];

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function renderSocialIcon(icon: SocialLinkItem["icon"]) {
  const iconClass = "size-5";
  switch (icon) {
    case "linkedin":
      return <LinkedinIcon className={iconClass} />;
    case "whatsapp":
      return <WhatsappIcon className={iconClass} />;
    case "github":
      return <GithubIcon className={iconClass} />;
    case "mail":
      return <MailIcon />;
  }
}

export function ContactSection({
  id = "contato",
  eyebrow = ">_ 05 / CONTATO",
  title = "Vamos construir algo interessante?",
  description = "Estou aberto para novas oportunidades em Java, Python e Node.js.",
  socials = defaultSocials,
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
          className="mb-12"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-5 transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-sm border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-muted)] transition-colors group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
                  {renderSocialIcon(social.icon)}
                </div>

                <div>
                  <span className="font-mono text-[10px] tracking-wider text-[var(--color-muted)]">
                    {social.label}
                  </span>
                  <h3 className="font-display text-base font-medium text-[var(--color-foreground)]">
                    {social.name}
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-muted)]">
                    {social.handle}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-[var(--color-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
              />
            </a>
          ))}
        </div>

        {children}
      </Container>
    </Section>
  );
}
