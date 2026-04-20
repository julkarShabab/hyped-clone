export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#E5DDD4" }}
    >
      <div className="px-8 md:px-16 pt-12 pb-6">

        {/* Main grid */}
        <div className="flex justify-end">
          <div className="flex gap-16 md:gap-24 items-start">

            {/* Nav + Follow us stacked */}
            <div className="flex flex-col gap-6">

              {/* Nav pills — white bg with border */}
              <div className="flex gap-3">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-2 rounded-full text-[14px] font-medium text-ink
                      bg-white border border-ink/15 hover:bg-ink hover:text-white
                      hover:border-ink transition-colors whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Follow us — white circle icons with border */}
              <div className="flex items-center gap-3">
                <span className="text-[15px] font-bold text-ink mr-1">Follow us</span>
                {[
                  {
                    label: "LinkedIn", icon: (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                      </svg>
                    )
                  },
                  {
                    label: "TikTok", icon: (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                      </svg>
                    )
                  },
                  {
                    label: "Instagram", icon: (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    )
                  },
                  {
                    label: "YouTube", icon: (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )
                  },
                ].map(({ label, icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-11 h-11 rounded-full bg-white border border-ink/15
                      flex items-center justify-center hover:bg-ink hover:border-ink
                      transition-colors group"
                  >
                    <span className="group-hover:[&_svg]:fill-white">{icon}</span>
                  </a>
                ))}
              </div>

            </div>

            {/* Contact + Adres */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-[15px] mb-1.5 text-ink">Contact</p>
                <a href="mailto:info@gethyped.nl"
                  className="block text-[14px] text-ink hover:opacity-50 transition-opacity">
                  info@gethyped.nl
                </a>
                <a href="tel:+31615337496"
                  className="block text-[14px] text-ink hover:opacity-50 transition-opacity">
                  +31 6 1533 7496
                </a>
              </div>
              <div>
                <p className="font-bold text-[15px] mb-1.5 text-ink">Adres</p>
                <p className="text-[14px] text-ink leading-relaxed">
                  Beltrumsestraat 6,<br />7141 AL Groenlo
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar — full width, 3 items spread out */}
        <div className="mt-10 flex justify-between text-[13px] text-ink/50">
          <span>© 2025 Get Hyped</span>
          <a href="#" className="hover:text-ink transition-colors">© Design by Dylan</a>
          <a href="#" className="hover:text-ink transition-colors">Privacyvoorwaarden</a>
        </div>

      </div>

      {/* Spacer for GETHYPED */}
      <div style={{ height: "170px" }} />

      {/* GET HYPED logo — bottom left, split design */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none p-4">
        <div
          className="inline-flex items-stretch rounded-[14px] overflow-hidden border-[3px] border-ink"
          style={{ transform: "skewX(-8deg)" }}
        >
          {/* GET — cream bg, black text */}
          <div
            className="px-5 py-2 flex items-center"
            style={{ backgroundColor: "#FAF4EC" }}
          >
            <span
              className="font-black italic leading-none text-ink"
              style={{
                fontSize: "clamp(60px, 11vw, 120px)",
                letterSpacing: "-0.02em",
                transform: "skewX(8deg)",
                display: "inline-block",
              }}
            >
              GET
            </span>
          </div>

          {/* HYPED — black bg, cream text */}
          <div
            className="px-5 py-2 flex items-center"
            style={{ backgroundColor: "#0D0D0D" }}
          >
            <span
              className="font-black italic leading-none"
              style={{
                fontSize: "clamp(60px, 11vw, 120px)",
                letterSpacing: "-0.02em",
                color: "#FAF4EC",
                transform: "skewX(8deg)",
                display: "inline-block",
              }}
            >
              HYPED
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}