export default function MobileMenu({ open, setOpen }) {
  const links = [
    { label: "Expertises", num: "01", href: "#expertises" },
    { label: "Work",       num: "02", href: "#work"       },
    { label: "About",      num: "03", href: "#about"      },
    { label: "Contact",    num: "04", href: "#contact"    },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 bg-ink text-cream flex flex-col px-5
        pt-[88px] pb-8 overflow-y-auto
        transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      aria-hidden={!open}
    >
      {/* Nav links */}
      <nav className="border-t border-cream/15 mt-5 flex flex-col">
        {links.map(({ label, num, href }, i) => (
          <a
          
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-4 py-5 border-b border-cream/15
              text-[44px] font-semibold tracking-tight leading-none text-cream
              hover:text-pink transition-colors"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${0.12 + i * 0.07}s, transform 0.5s ease ${0.12 + i * 0.07}s`,
            }}
          >
            <span className="text-xs font-normal text-cream/50 tracking-normal">{num}</span>
            {label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div
        className="mt-8"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s",
        }}
      >
        <a
        
          href="#contact"
          onClick={() => setOpen(false)}
          className="inline-flex items-center gap-2 bg-pink text-ink font-medium
            text-[15px] pl-5 pr-3 py-3 rounded-full hover:bg-cream transition-colors group"
        >
          <span>Get Results</span>
          <span className="w-8 h-8 rounded-full bg-ink text-pink flex items-center
            justify-center group-hover:rotate-[-45deg] transition-transform duration-300">
            →
          </span>
        </a>
      </div>

      {/* Footer info */}
      <div
        className="mt-auto pt-12 grid grid-cols-2 gap-6"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease 0.54s, transform 0.5s ease 0.54s",
        }}
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-xs uppercase tracking-widest text-cream/50 mb-1">Contact</span>
          <a href="mailto:info@gethyped.nl" className="text-[15px] hover:text-pink transition-colors">
            info@gethyped.nl
          </a>
          <a href="tel:+31615337496" className="text-[15px] hover:text-pink transition-colors">
            +31 6 1533 7496
          </a>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-xs uppercase tracking-widest text-cream/50 mb-1">Follow us</span>
          <a href="#" className="text-[15px] hover:text-pink transition-colors">Instagram</a>
          <a href="#" className="text-[15px] hover:text-pink transition-colors">LinkedIn</a>
          <a href="#" className="text-[15px] hover:text-pink transition-colors">TikTok</a>
        </div>
      </div>
    </div>
  );
}