import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

export interface DividedListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function DividedList({ children, className, ...props }: DividedListProps) {
  return (
    <div
      className={cn(
        "divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

