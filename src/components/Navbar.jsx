import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <h1 className="font-semibold text-lg">HYPED</h1>

          {/* Desktop */}
          <div className="hidden md:flex gap-10 text-sm">
            <a>Work</a>
            <a>Services</a>
            <a>About</a>
            <a>Contact</a>
          </div>

          {/* Hamburger */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </div>
        </div>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}