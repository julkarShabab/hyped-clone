const expertises = [
  {
    num: "01",
    label: "Social strategy",
    heading: "Slimme strategie. Sterke start.",
    desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    link: "Meer over social strategie",
    bg: "bg-white",
    btnBg: "bg-[#FF5C1A] text-white",
    numColor: "text-black/10",
  },
  {
    num: "02",
    label: "Content creation",
    heading: "Content die opvalt en raakt.",
    desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    link: "Meer over content creatie",
    bg: "bg-[#F5A0F0]",
    btnBg: "bg-black text-white",
    numColor: "text-black/10",
  },
  {
    num: "03",
    label: "Activation",
    heading: "Zichtbaar waar en wanneer het telt.",
    desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    link: "Meer over activatie",
    bg: "bg-[#C8F5A0]",
    btnBg: "bg-black text-white",
    numColor: "text-black/10",
  },
  {
    num: "04",
    label: "Data",
    heading: "Inzichten die impact maken.",
    desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    link: "Meer over data",
    bg: "bg-[#0D0D0D] text-white",
    btnBg: "bg-white text-black",
    numColor: "text-white/10",
  },
];

export default function Services() {
  return (
    <section id="expertises" className="relative">
      {expertises.map((e, i) => (
        <div
          key={e.num}
          className={`sticky rounded-[28px] mx-3 mb-3 overflow-hidden ${e.bg}`}
          style={{ top: `${60 + i * 16}px` }}
        >
          <div className="relative min-h-[85vh] px-8 py-10 flex flex-col justify-between">

            {/* Big number — top right */}
            <span className={`absolute top-6 right-8 font-black text-[120px] leading-none select-none ${e.numColor}`}>
              {e.num}
            </span>

            {/* Top — label + title */}
            <div>
              <span className="inline-block px-3 py-1 bg-white/80 text-ink text-sm font-medium rounded-full mb-4">
                Expertise
              </span>
              <h2 className="font-black text-[clamp(48px,7vw,96px)] leading-[0.9] tracking-[-0.03em] max-w-[70%]">
                {e.label}
              </h2>
            </div>

            {/* Bottom — desc + button + tilted image */}
            <div className="flex items-end justify-between gap-8">
              <div className="max-w-[420px]">
                <h3 className="font-bold text-[18px] mb-2">{e.heading}</h3>
                <p className="text-[15px] leading-relaxed opacity-80 mb-6">{e.desc}</p>
                <a
                  href="#"
                  className={`inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold text-sm ${e.btnBg}`}
                >
                  {e.link}
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">→</span>
                </a>
              </div>

              {/* Tilted video/image placeholder */}
              <div
                className="flex-shrink-0 w-[300px] h-[380px] rounded-[20px] overflow-hidden bg-black/20 shadow-2xl"
                style={{ transform: "rotate(4deg)" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-black/30 to-black/10 flex items-center justify-center">
                  <span className="text-white/40 text-sm">Video</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}