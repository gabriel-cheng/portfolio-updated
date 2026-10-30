import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/theme-context";

const themes = [
  { value: "light", label: "Tema claro", icon: Sun },
  { value: "dark", label: "Tema escuro", icon: Moon },
  { value: "system", label: "Tema do sistema", icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-[var(--color-border)] p-1"
      aria-label="Preferência de aparência"
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const active = theme === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`flex size-8 items-center justify-center rounded-full transition-colors ${
              active
                ? "bg-[var(--color-surface)] text-[var(--color-foreground)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            }`}
          >
            <Icon size={15} strokeWidth={1.7} />
          </button>
        );
      })}
    </div>
  );
}
