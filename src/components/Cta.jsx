export default function Cta() {
  return (
    <section
      className="px-8 md:px-16 py-32 flex flex-col items-center text-center"
      style={{
        background: "linear-gradient(160deg, #FAF4EC 55%, #F0D6F0 100%)",
      }}
    >
      <h2 className="font-black italic text-[clamp(52px,8vw,96px)] leading-none tracking-[-0.03em] text-ink mb-12">
        Let's Get Hyped!
      </h2>

      <div className="flex items-center gap-4">
        {/* Mail button — bordered */}
        <a
          href="mailto:info@gethyped.nl"
          className="inline-flex items-center gap-3 border-2 border-ink/20 bg-white/60
            px-6 py-3.5 rounded-full text-[15px] font-semibold text-ink
            hover:border-ink transition-colors group"
        >
          Mail ons direct
          <span className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-sm">
            ✉
          </span>
        </a>

        {/* Get Results — orange */}
        <a
          href="#"
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full
            text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#FF4D1C" }}
        >
          Get Results
          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-base">
            🔥
          </span>
        </a>
      </div>
    </section>
  );
}