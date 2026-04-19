export default function Cta() {
  return (
    <section className="bg-[#FAF4EC] pt-24 pb-48 relative flex flex-col items-center text-center px-6">

      {/* Big title */}
      <h2 className="font-black text-[clamp(48px,8vw,96px)] leading-none tracking-[-0.03em] text-ink mb-10">
        Let's Get Hyped!
      </h2>

      {/* Buttons row */}
      <div className="flex items-center gap-3">
        
        <a
          href="mailto:info@gethyped.nl"
          className="inline-flex items-center gap-3 border-2 border-ink px-5 py-3
            rounded-full text-[15px] font-semibold hover:bg-ink hover:text-white transition-colors group"
        >
          Mail ons direct
          <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center
            justify-center group-hover:bg-white group-hover:text-ink transition-colors text-sm">
            ✉
          </span>
        </a>

        
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full
            text-[15px] font-semibold text-white transition-colors"
          style={{ backgroundColor: "#FF4D1C" }}
        >
          Get Results
          <span className="w-8 h-8 rounded-full bg-white flex items-center
            justify-center text-sm" style={{ color: "#FF4D1C" }}>
            🔥
          </span>
        </a>
      </div>

      {/* Spinning badge — top right */}
      <div className="absolute top-16 right-8 md:right-16 w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: "10s" }}>
          <defs>
            <path id="circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          </defs>
          <circle cx="50" cy="50" r="46" fill="#FCB8FA" />
          <text fontSize="11" fontWeight="700" fill="#0D0D0D" letterSpacing="3">
            <textPath href="#circle">
              GET HYPED • GET RESULTS • GET NOTICED •
            </textPath>
          </text>
        </svg>
        {/* GH in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-black text-[18px] text-ink">GH</span>
        </div>
      </div>

    </section>
  );
}