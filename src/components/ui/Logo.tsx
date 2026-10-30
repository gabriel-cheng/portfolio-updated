import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

type LogoBaseProps = {
  accent?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export type LogoProps =
  | (LogoBaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        as?: "a";
        href?: string;
      })
  | (LogoBaseProps &
      HTMLAttributes<HTMLSpanElement> & {
        as: "span";
        href?: undefined;
      });

const sizeStyles = {
  sm: "text-base font-semibold",
  md: "text-xl font-semibold",
  lg: "text-2xl font-bold",
};

export function Logo({
  as = "a",
  accent = ".",
  size = "md",
  className,
  ...props
}: LogoProps) {
  const content = (
    <>
      GH<span className="text-[var(--color-accent)]">{accent}</span>
    </>
  );

  const combinedClassName = cn(
    "font-display tracking-tight inline-block",
    sizeStyles[size],
    className
  );

  if (as === "span") {
    const spanProps = props as HTMLAttributes<HTMLSpanElement>;
    return (
      <span className={combinedClassName} {...spanProps}>
        {content}
      </span>
    );
  }

  const { href = "#inicio", ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
  return (
    <a
      href={href}
      aria-label="Voltar ao início"
      className={combinedClassName}
      {...anchorProps}
    >
      {content}
    </a>
  );
}

