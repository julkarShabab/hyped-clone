import { useRef, useEffect, useState } from "react";

const brands = [
  {
    name: "Bullit",
    logo: (
      <span className="font-black text-[32px] tracking-tight" style={{ color: "#FF1F6B" }}>
        &#x222B;Bullit
      </span>
    ),
  },
  {
    name: "morssinkhof-rymoplast",
    logo: (
      <span className="font-bold text-[13px] text-center px-4" style={{ color: "#0057A8" }}>
        morssinkhof-rymoplast
      </span>
    ),
  },
  {
    name: "Salontopper",
    logo: (
      <span className="font-semibold text-[22px]" style={{ color: "#C97B5A" }}>
        ✦ Salontopper
      </span>
    ),
  },
  {
    name: "seesing flex",
    logo: (
      <span className="font-black text-[22px]" style={{ color: "#1B2B6B" }}>
        seesing flex
      </span>
    ),
  },
  {
    name: "Graafschap College",
    logo: (
      <span className="font-bold text-[18px] text-center" style={{ color: "#1B2B6B" }}>
        G Graafschap<br />College
      </span>
    ),
  },
  {
    name: "fides",
    logo: (
      <span className="font-black text-[32px] italic" style={{ color: "#1B2B6B" }}>
        fides
      </span>
    ),
  },
  {
    name: "SRHK",
    logo: (
      <span className="font-black text-[28px]" style={{ color: "#0057A8" }}>
        SRHK
      </span>
    ),
  },
  {
    name: "KNLTB",
    logo: (
      <span className="font-black text-[26px]" style={{ color: "#FF6B00" }}>
        KNLTB
      </span>
    ),
  },
  {
    name: "THO",
    logo: (
      <span className="font-black text-[28px]" style={{ color: "#2DCE7A" }}>
        THO
      </span>
    ),
  },
  {
    name: "De Talententuin",
    logo: (
      <span className="font-bold text-[18px] text-center" style={{ color: "#FF4D1C" }}>
        De Talententuin
      </span>
    ),
  },
  {
    name: "ZCLV",
    logo: (
      <span className="font-black text-[28px]" style={{ color: "#1B2B6B" }}>
        ZCLV
      </span>
    ),
  },
];

export default function Brands() {
  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    const step = () => {
      if (!dragging) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [dragging]);

  const onMouseDown = (e) => {
    setDragging(true);
    startX.current = e.clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };
  const onMouseMove = (e) => {
    if (!dragging) return;
    scrollRef.current.scrollLeft = scrollLeftRef.current - (e.clientX - startX.current);
  };
  const onMouseUp = () => setDragging(false);

  const onTouchStart = (e) => {
    setDragging(true);
    startX.current = e.touches[0].clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };
  const onTouchMove = (e) => {
    scrollRef.current.scrollLeft = scrollLeftRef.current - (e.touches[0].clientX - startX.current);
  };
  const onTouchEnd = () => setDragging(false);

  const doubled = [...brands, ...brands];

  return (
    <section className="bg-[#FAF4EC] py-16 overflow-hidden">

      <h2 className="text-center font-bold text-[22px] leading-snug text-ink mb-10">
        These brands<br />got hyped.
      </h2>

      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="flex gap-4 overflow-x-scroll px-8"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: dragging ? "grabbing" : "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {doubled.map(({ name, logo }, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center
              border border-ink/10 rounded-[20px] bg-[#FAF4EC]"
            style={{
              width: "320px",
              height: "220px",
              pointerEvents: dragging ? "none" : "auto",
            }}
          >
            {logo}
          </div>
        ))}
      </div>

    </section>
  );
}