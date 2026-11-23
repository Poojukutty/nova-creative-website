
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-100 bg-white/95 px-6 py-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 md:px-16">

      <h1 className="text-2xl font-extrabold tracking-wider text-slate-950 dark:text-white">
        NOVA<span className="text-blue-600">.</span>
      </h1>

      <div className="hidden items-center gap-9 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="rounded-full border border-slate-200 p-3 text-xl transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <a
          href="#contact"
          className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Let's Talk ↗
        </a>
      </div>
    </nav>
  );
}
