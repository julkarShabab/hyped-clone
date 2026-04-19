export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl transition-all duration-500 ${
        open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <button
        className="absolute top-6 right-6 text-4xl"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      {["Work", "Services", "About", "Contact"].map((item) => (
        <a key={item} onClick={() => setOpen(false)} className="cursor-pointer">
          {item}
        </a>
      ))}
    </div>
  );
}