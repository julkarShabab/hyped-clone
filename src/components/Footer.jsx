export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-10 px-8 md:px-16"
      style={{ backgroundColor: "#E8E0D5" }}
    >
      {/* Big GETHYPED logo — bottom left, overlapping */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none">
        <span
          className="font-black italic text-[clamp(72px,14vw,160px)] leading-none tracking-[-0.03em]"
          style={{
            color: "transparent",
            WebkitTextStroke: "3px #0D0D0D",
            display: "block",
            lineHeight: 1,
          }}
        >
          GETHYPED
        </span>
      </div>

      {/* Main footer content — pushed right */}
      <div className="flex flex-col md:flex-row justify-end gap-12 md:gap-20">

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          {["Expertises", "Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="inline-flex px-4 py-2 border border-ink/20 rounded-full
                text-[14px] font-medium hover:bg-ink hover:text-white transition-colors text-center"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Follow us */}
        <div>
          <p className="font-semibold text-[15px] mb-4 text-ink">Follow us</p>
          <div className="flex gap-3">
            {[
              { label: "in", href: "#" },
              { label: "tt", href: "#" },
              { label: "ig", href: "#" },
              { label: "yt", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-full border border-ink/20 flex items-center
                  justify-center text-[13px] font-bold hover:bg-ink hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact + Address */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-bold text-[15px] mb-1">Contact</p>
            <a href="mailto:info@gethyped.nl" className="block text-[14px] hover:underline">info@gethyped.nl</a>
            <a href="tel:+31615337496" className="block text-[14px] hover:underline">+31 6 1533 7496</a>
          </div>
          <div>
            <p className="font-bold text-[15px] mb-1">Adres</p>
            <p className="text-[14px]">Beltrumsestraat 6,<br />7141 AL Groenlo</p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-16 mt-16 text-[13px] text-ink/60">
        <span>© 2025 Get Hyped</span>
        <a href="#" className="hover:text-ink transition-colors">© Design by Dylan</a>
        <a href="#" className="hover:text-ink transition-colors">Privacyvoorwaarden</a>
      </div>

    </footer>
  );
}