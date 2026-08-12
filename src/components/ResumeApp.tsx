"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { Locale, resumes } from "@/src/data/resume";
import { cn } from "@/src/lib/utils";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { KnowledgeSection } from "./sections/KnowledgeSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export function ResumeApp() {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeSection, setActiveSection] = useState("profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hasLoadedPreferences, setHasLoadedPreferences] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLocale = window.localStorage.getItem("locale");
      const saved = window.localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (savedLocale === "en" || savedLocale === "fa") {
        setLocale(savedLocale);
      }
      setIsDark(saved ? saved === "dark" : prefersDark);
      setHasLoadedPreferences(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const currentResume = resumes[locale];
  const navItems = currentResume.sectionNav;
  const isRtl = currentResume.dir === "rtl";
  const nextLocale: Locale = locale === "en" ? "fa" : "en";
  const languageCode = locale === "en" ? "EN" : "فا";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = currentResume.locale;
    document.documentElement.dir = currentResume.dir;
    if (hasLoadedPreferences) {
      window.localStorage.setItem("locale", locale);
    }
  }, [
    currentResume.dir,
    currentResume.locale,
    hasLoadedPreferences,
    locale,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    navItems.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [navItems]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white",
        isRtl && "font-persian",
      )}
      dir={currentResume.dir}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/82 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/78">
        <nav
          className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8"
          aria-label={currentResume.ui.navAria}
        >
          <a
            href="#profile"
            className="group min-w-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
          >
            <span className="block truncate text-sm font-semibold text-slate-950 dark:text-white">
              {currentResume.personal.name}
            </span>
            <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
              {currentResume.personal.title}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
                  activeSection === item.id
                    ? "bg-cyan-500/12 text-cyan-700 dark:text-cyan-200"
                    : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark ? currentResume.ui.themeLight : currentResume.ui.themeDark
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/12 dark:bg-white/8 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
            >
              {isDark ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setLocale(nextLocale)}
              aria-label={`Switch language to ${currentResume.languageToggleLabel}`}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/12 dark:bg-white/8 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              <span
                className={cn(
                  "inline-flex h-6 min-w-7 items-center justify-center rounded bg-slate-100 px-1.5 text-[11px] leading-none text-slate-600 transition group-hover:bg-cyan-500/12 group-hover:text-cyan-700 dark:bg-white/10 dark:text-slate-300 dark:group-hover:text-cyan-100",
                  locale === "fa" && "font-persian",
                )}
              >
                {languageCode}
              </span>
              <span
                className={cn(
                  "leading-none",
                  nextLocale === "fa" && "font-persian",
                )}
              >
                {currentResume.languageToggleLabel}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={currentResume.ui.menuToggle}
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 lg:hidden dark:border-white/12 dark:bg-white/8 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden dark:border-white/10 dark:bg-slate-950"
            >
              <div className="mx-auto grid max-w-7xl gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
                      activeSection === item.id
                        ? "bg-cyan-500/12 text-cyan-700 dark:text-cyan-200"
                        : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <HeroSection resumeData={currentResume} />
        <SkillsSection resumeData={currentResume} />
        <ExperienceSection resumeData={currentResume} />
        <ProjectsSection resumeData={currentResume} />
        <KnowledgeSection resumeData={currentResume} />
        <EducationSection resumeData={currentResume} />
        <ContactSection resumeData={currentResume} />
      </main>
    </div>
  );
}
