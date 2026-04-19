import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY]   = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 180 && y > lastY + 4) setHidden(true);
      else if (y < lastY - 4 || y < 120) setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between
          bg-[#FAF4EC] transition-transform duration-500
          ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <svg viewBox="0 0 160 48" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="158" height="46" rx="4" stroke="black" strokeWidth="2.5" fill="white"/>
            <text x="12" y="35" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28"
              fill="black" letterSpacing="-1" style={{fontStyle: "italic"}}>
              GETHYPED
            </text>
          </svg>
        </a>

        {/* Desktop nav — pill shaped */}
        <nav className="hidden md:flex items-center gap-1 bg-white border border-black/10 rounded-full px-2 py-1.5 shadow-sm">
          {["Expertises", "Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-ink hover:bg-black/5 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Get Results CTA — pink pill with fire icon */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-pink text-ink font-semibold text-sm
            px-5 py-2.5 rounded-full hover:bg-pink-strong transition-colors"
        >
          <span>Get Results</span>
          <span className="text-base">🔥</span>
        </a>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className="block w-5 h-[2px] bg-ink rounded-full" />
          <span className="block w-5 h-[2px] bg-ink rounded-full" />
        </button>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}