import { cn } from "./utils";

type LogoProps = {
  as?: "a" | "span";
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
};

export function Logo({
  as = "a",
  href = "#inicio",
  size = "md",
  className,
}: LogoProps) {
  const Component = as;

  return (
    <Component
      {...(as === "a"
        ? { href, "aria-label": "Gabriel Carvalho — início" }
        : {})}
      className={cn(
        "inline-flex flex-col font-mono leading-[1] tracking-tight text-text",
        sizeClasses[size],
        className,
      )}
    >
      <span>
        &gt;
        <span className="animate-cursor-blink">_</span>
        {" gabriel"}
      </span>
      <span className="pl-[6ch]">carvalho</span>
    </Component>
  );
}
