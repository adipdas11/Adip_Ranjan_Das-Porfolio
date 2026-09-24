import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { asset, links } from "../data/profile";
const navLinks = [
  ["Research", "research"],
  ["Publications", "publications"],
  ["Projects", "projects"],
  ["About", "about"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("portfolio-theme");
      } catch {}
      const next =
        saved === "light" || saved === "dark"
          ? saved
          : media.matches
            ? "dark"
            : "light";
      setTheme(next);
      document.documentElement.dataset.theme = next;
    };
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    window.addEventListener("keydown", close);
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("keydown", close);
    };
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {}
  };
  return (
    <header className="site-header">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <a
          href="#home"
          aria-label="Adip Ranjan Das home"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img src={asset("logo.svg")} width="38" height="38" alt="" />
          <span className="brand-name">
            adip<span className="text-muted">.das</span>
          </span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-5">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a
            href={links.cv}
            download
            className="hidden items-center gap-2 text-sm sm:flex"
          >
            Résumé <ArrowUpRight size={16} />
          </a>
          <a href="#contact" className="small-button hidden sm:flex">
            Let’s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav lg:hidden"
        >
          {[...navLinks, ["Contact", "contact"]].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a href={links.cv} download onClick={() => setOpen(false)}>
            Download résumé <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
