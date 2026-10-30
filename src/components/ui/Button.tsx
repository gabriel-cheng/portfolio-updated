import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

type Variant = "underline" | "outline" | "ghost" | "solid";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  underline:
    "inline-flex w-fit items-center gap-3 border-b border-[var(--color-border)] pb-2 text-sm transition-colors hover:border-[var(--color-accent)]",
  outline:
    "inline-flex items-center justify-center gap-2 border border-[var(--color-border)] text-sm transition-colors hover:border-[var(--color-accent)]",
  ghost:
    "inline-flex items-center justify-center transition-colors text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
  solid:
    "inline-flex items-center justify-center gap-2 font-medium transition-colors bg-[var(--color-foreground)] text-[var(--color-background)] hover:opacity-90",
};

const sizeStyles: Record<Variant, Partial<Record<Size, string>>> = {
  underline: {
    sm: "text-xs gap-2 pb-1",
    md: "text-sm gap-3 pb-2",
    lg: "text-base gap-3 pb-2",
  },
  outline: {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  },
  ghost: {
    sm: "size-8 text-xs",
    md: "size-9 text-sm",
    lg: "size-10 text-base",
  },
  solid: {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  },
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

export type ButtonProps =
  | (BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
      })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

export function Button({
  variant = "underline",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const combinedClassName = cn(
    variantStyles[variant],
    sizeStyles[variant]?.[size],
    className
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}

