import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "default" | "narrow" | "full";
  className?: string;
}

const sizeStyles: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "mx-auto max-w-6xl px-6",
  narrow: "mx-auto max-w-4xl px-6",
  full: "w-full px-6",
};

export function Container({
  children,
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={cn(sizeStyles[size], className)} {...props}>
      {children}
    </div>
  );
}

