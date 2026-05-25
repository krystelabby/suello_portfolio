import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border-theme bg-bg-card text-text-primary transition hover:bg-soft-pink/25"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="h-[18px] w-[18px]" aria-hidden />
      ) : (
        <Sun className="h-[18px] w-[18px]" aria-hidden />
      )}
    </button>
  );
}
