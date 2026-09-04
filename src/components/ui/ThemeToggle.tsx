"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getPreferredTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme");

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const preferredTheme = getPreferredTheme();
      applyTheme(preferredTheme);
      setTheme(preferredTheme);
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        style={{
          background: "transparent",
          border: "none",
          padding: "8px",
          color: "var(--text-muted)",
        }}
        aria-label="Toggle theme"
      >
        <div style={{ width: 20, height: 20 }} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "none",
        padding: "8px",
        color: "var(--text-muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.2s ease",
      }}
      aria-label="Toggle theme"
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
    >
      {theme === "dark" ? (
        <Sun size={20} strokeWidth={1.5} />
      ) : (
        <Moon size={20} strokeWidth={1.5} />
      )}
    </button>
  );
}
