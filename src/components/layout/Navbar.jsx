import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () =>
      window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ESC key support
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
  }, []);

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2"
            >
              <span className="text-2xl text-[#D4AF37]">✦</span>

              <div className="flex flex-col items-start leading-none">
                <h2 className="font-playfair text-2xl font-bold tracking-wide text-white">
                  LUXORA
                </h2>

                <span className="text-[10px] uppercase tracking-[4px] text-[#A1A1AA]">
                  Fine Dining
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (

                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative text-sm uppercase tracking-[2px] text-[#FAFAFA] transition duration-300 hover:text-[#D4AF37] group"
                >
                  {link.label}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>

                </button>

              ))}

            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-4">

              {/* Desktop CTA */}

              <button
                className="hidden lg:flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
              >
                Reserve Table

                <ArrowRight size={18} />
              </button>

              {/* Mobile Menu Button */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] lg:hidden"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

            </div>

          </div>
        </div>
      </motion.header>
      {/* Mobile Overlay */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden"
          >

            <div className="flex h-full flex-col items-center justify-center">

              {/* Logo */}

              <div className="mb-14 text-center">

                <h2 className="font-playfair text-4xl font-bold text-white">
                  LUXORA
                </h2>

                <p className="mt-2 text-xs uppercase tracking-[6px] text-[#D4AF37]">
                  Fine Dining
                </p>

              </div>

              {/* Menu Links */}

              <div className="flex flex-col items-center gap-8">

                {navLinks.map((link, index) => (

                  <motion.button
                    key={link.id}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                    className="text-3xl font-playfair text-white transition duration-300 hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </motion.button>

                ))}

              </div>

              {/* CTA */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="mt-14 flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-black font-semibold hover:scale-105 transition-all duration-300"
              >

                Reserve Table

                <ArrowRight size={20} />

              </motion.button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;