import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "outline" | "label" | "subtle";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  outline:
    "inline-flex items-center border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-muted)]",
  label: "font-mono text-xs tracking-widest text-[var(--color-muted)]",
  subtle: "font-mono text-xs tracking-[0.2em] text-[var(--color-muted)]",
};

export function Badge({
  children,
  variant = "outline",
  className,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </span>
  );
}
