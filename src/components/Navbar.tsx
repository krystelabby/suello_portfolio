import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 md:top-6 md:px-6">
      <header className="nav-pill container-main flex w-full items-center justify-between gap-4 rounded-none border-x-0 border-t-0 py-3 pl-5 pr-2.5 max-md:shadow-[0_2px_12px_rgba(41,39,39,0.08)] md:rounded-full md:border md:py-3 md:pl-6 md:pr-3 dark:max-md:shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="shrink-0 text-lg font-bold tracking-tight text-text-primary"
        >
          Irish<span className="text-highlight">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={label}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  activeId === id
                    ? "bg-soft-pink/35 text-text-primary dark:bg-soft-pink/25"
                    : "text-text-body hover:text-text-primary"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-theme bg-bg-card text-text-primary lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="nav-pill container-main mt-0 rounded-none border-x-0 border-t-0 p-4 shadow-none lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ id, label }) => (
                <li key={label}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(id);
                    }}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                      activeId === id
                        ? "bg-soft-pink/30 text-text-primary"
                        : "text-text-body"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              className="btn-primary mt-3 w-full"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
