import { X } from "lucide-react";
import { navLinks } from "../../data/navLinks";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-[#0B0B0B]/95 backdrop-blur-xl z-[999] transition-all duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="font-luxury text-3xl text-yellow-500 tracking-widest">
          ✦ LUXORA
        </h1>

        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-yellow-500 transition"
        >
          <X size={32} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center justify-center h-[75vh] gap-8">

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-light tracking-wide text-white hover:text-yellow-500 transition duration-300"
          >
            {link.title}
          </a>
        ))}

        <button className="mt-6 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
          Book a Table →
        </button>

      </div>
    </div>
  );
};

export default MobileMenu;