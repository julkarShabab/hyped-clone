import { useRef } from "react";

function TiltCard({ children, className, style }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -12;
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 12;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out cursor-pointer ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

const cases = [
  {
    brand: "Bullit",
    title: "Van nul naar vol, binnen 3 weken",
    border: "#FF4D1C",
    bannerBg: "#FF4D1C",
    arrowBg: "white",
    arrowColor: "#FF4D1C",
    bg: "bg-[#c0392b]",
    topOffset: 80,
  },
  {
    brand: "Roasta",
    title: "Zacht in smaak, sterk in beeld",
    border: "#1E8CFF",
    bannerBg: "#1E8CFF",
    arrowBg: "white",
    arrowColor: "#1E8CFF",
    bg: "bg-[#a88d5f]",
    topOffset: 0,
  },
  {
    brand: "Loco",
    title: "Content die écht smaakt (en raakt)",
    border: "#2DCE7A",
    bannerBg: "#2DCE7A",
    arrowBg: "white",
    arrowColor: "#2DCE7A",
    bg: "bg-[#2DCE7A]/60",
    topOffset: 40,
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-[#FAF4EC] py-24">
      <div className="flex flex-col lg:flex-row gap-16 px-8 lg:px-16">

        {/* Left — sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start flex-shrink-0 lg:w-[340px]">
          <h2 className="font-black text-[64px] md:text-[72px] leading-[0.88] tracking-[-0.03em] text-ink mb-6">
            Content<br />dat scoort.
          </h2>
          <p className="text-[16px] leading-relaxed text-ink mb-8 max-w-[32ch]">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 border-2 border-ink px-5 py-2.5
              rounded-full text-[14px] font-semibold hover:bg-ink hover:text-white
              transition-colors group"
          >
            Bekijk al ons werk
            <span className="w-7 h-7 rounded-full bg-ink text-white flex items-center
              justify-center group-hover:bg-white group-hover:text-ink transition-colors text-sm">
              →
            </span>
          </a>
        </div>

        {/* Right — cards */}
        <div
          className="flex gap-5 overflow-x-auto pb-8 flex-1"
          style={{ scrollbarWidth: "none", alignItems: "flex-start" }}
        >
          {cases.map(({ brand, title, border, bannerBg, arrowBg, arrowColor, bg, topOffset }) => (
            <TiltCard
              key={brand}
              className="flex-shrink-0"
              style={{ width: "260px", marginTop: `${topOffset}px` }}
            >
              <div
                className={`w-full relative overflow-hidden rounded-[22px] ${bg}`}
                style={{ height: "380px", border: `5px solid ${border}` }}
              >
                {/* Image placeholder — replace with <img> or <video> */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20" />

                {/* Arrow top right */}
                <div
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: arrowBg, color: arrowColor }}
                >
                  <span className="font-bold text-sm">↗</span>
                </div>

                {/* Colored banner at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-4"
                  style={{ backgroundColor: bannerBg }}
                >
                  <p className="text-white font-bold text-[16px] leading-snug mb-2">
                    {title}
                  </p>
                  <span className="inline-block bg-white/25 text-white text-[12px] font-medium px-2.5 py-0.5 rounded-full">
                    {brand}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}