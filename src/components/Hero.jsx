import { useRef } from "react";

function TiltCard({ children, className, initialRotate = 0 }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(0deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) rotate(${initialRotate}deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `perspective(900px) rotate(${initialRotate}deg)` }}
      className={`transition-transform duration-300 ease-out cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-16 bg-[#FAF4EC] bg-[radial-gradient(900px_420px_at_100%_0%,rgba(252,184,250,0.45),transparent)]">

      <h1 className="font-bold text-[clamp(44px,8vw,96px)] leading-[0.95] tracking-[-0.04em] text-ink mb-4">
        <span className="block animate-rise line-1">Get Hyped.</span>
        <span className="block animate-rise line-2">Get Noticed.</span>
        <span className="block animate-rise line-3">Get Results.</span>
      </h1>

      <p className="text-base text-muted max-w-[34ch] leading-snug mb-16 animate-rise hero-sub">
        Klaar met gokken op content die niets oplevert?
      </p>

      {/* Cards row */}
      <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory md:overflow-visible items-center">

        {/* Blue — tilted left */}
        <TiltCard
          initialRotate={-4}
          className="flex-shrink-0 snap-start w-[280px] md:w-[320px] min-h-[420px] rounded-[28px] bg-[#1E8CFF] text-ink p-6 flex flex-col justify-between"
        >
          <span className="font-black text-[72px] leading-none tracking-tight">10M+</span>
          <div>
            <hr className="border-ink/20 mb-3" />
            <p className="font-bold text-[17px] mb-1">Organische views</p>
            <p className="text-[14px] text-ink/70">Groei door slimme content</p>
          </div>
        </TiltCard>

        {/* Video 1 — tilted right */}
        <TiltCard
          initialRotate={3}
          className="flex-shrink-0 snap-start w-[280px] md:w-[320px] min-h-[420px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#d4f5c4] via-[#eeffd4] to-[#ffffc0]"
        >
          <div className="w-full h-full flex items-center justify-center min-h-[420px]">
            <span className="text-ink/30 text-sm">Video</span>
          </div>
        </TiltCard>

        {/* Green — tilted left */}
        <TiltCard
          initialRotate={-3}
          className="flex-shrink-0 snap-start w-[280px] md:w-[320px] min-h-[420px] rounded-[28px] bg-[#2DCE7A] text-ink p-6 flex flex-col justify-between"
        >
          <span className="font-black text-[72px] leading-none tracking-tight">30+</span>
          <div>
            <hr className="border-ink/20 mb-3" />
            <p className="font-bold text-[17px] mb-1">Merken geholpen</p>
            <p className="text-[14px] text-ink/70">Van start-up tot multinational</p>
          </div>
        </TiltCard>

        {/* Video 2 — tilted right */}
        <TiltCard
          initialRotate={4}
          className="flex-shrink-0 snap-start w-[280px] md:w-[320px] min-h-[420px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#c8e6f5] via-[#daeef8] to-[#eaf4fb]"
        >
          <div className="w-full h-full flex items-center justify-center min-h-[420px]">
            <span className="text-ink/30 text-sm">Video</span>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}