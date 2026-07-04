import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-[#D4AF37] p-4 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,.5)]"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;