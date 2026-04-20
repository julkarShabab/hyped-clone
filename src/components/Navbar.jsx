import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY]   = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (!open) {
        if (y > 180 && y > lastY + 4) setHidden(true);
        else if (y < lastY - 4 || y < 120) setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY, open]);

  // never hide navbar when menu is open
  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-3
          transition-transform duration-500
          ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div
          className={`flex items-center justify-between px-4 py-2.5 rounded-full
            transition-all duration-300
            ${open
              ? "bg-ink"
              : scrolled
                ? "bg-[#FAF4EC]/80 backdrop-blur-md shadow-sm"
                : "bg-transparent"
            }`}
        >
          {/* Logo */}
          <a
            href="#"
            className={`font-bold text-xl tracking-tight leading-none
              ${open ? "text-cream" : "text-ink"}`}
          >
            Get Hyped
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {["Expertises", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:opacity-60 transition-opacity
                  ${open ? "text-cream" : "text-ink"}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-cream
              text-sm font-medium pl-4 pr-2 py-2 rounded-full hover:opacity-80
              transition-opacity"
          >
            <span>Get Results</span>
            <span className="w-7 h-7 rounded-full bg-cream text-ink flex items-center justify-center">
              →
            </span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`md:hidden w-11 h-11 rounded-full border flex flex-col
              items-center justify-center gap-[5px] transition-colors
              ${open
                ? "border-cream"
                : "border-ink"
              }`}
          >
            <span
              className={`block w-4 h-[1.8px] rounded-full transition-all duration-300
                ${open ? "bg-cream rotate-45 translate-y-[3.4px]" : "bg-ink"}`}
            />
            <span
              className={`block w-4 h-[1.8px] rounded-full transition-all duration-300
                ${open ? "bg-cream -rotate-45 -translate-y-[3.4px]" : "bg-ink"}`}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}