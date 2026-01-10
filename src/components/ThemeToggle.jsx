import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Initialize from localStorage or default to dark
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || true;
    }
    return true;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-md bg-bg-tertiary text-text-primary dark:bg-bg-secondary dark:text-text-primary transition-colors duration-300"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
