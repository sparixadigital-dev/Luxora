import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 xl:px-16">

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10 py-24 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37]">
            Reserve Your Table
          </span>

          <h2 className="mt-8 font-playfair text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">

            Ready For An

            <span className="mt-2 block text-[#D4AF37]">

              Unforgettable Evening?

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]">

            Experience exceptional cuisine, elegant ambience,
            and impeccable hospitality crafted for memorable moments.

          </p>

          <div className="mt-10 flex justify-center">

            <Button>

              <span className="flex items-center gap-2">

                Reserve Your Table

                <ArrowRight size={18} />

              </span>

            </Button>

          </div>

        </motion.div>

        {/* Footer Content */}

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>

            <h3 className="font-playfair text-4xl font-bold text-[#D4AF37]">
              LUXORA
            </h3>

            <p className="mt-6 leading-8 text-[#A1A1AA]">
              Experience the finest dining with timeless flavours,
              elegant ambience and unforgettable hospitality.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-xl font-semibold">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-4 text-[#A1A1AA]">

              <li className="transition hover:text-[#D4AF37] cursor-pointer">
                Home
              </li>

              <li className="transition hover:text-[#D4AF37] cursor-pointer">
                Our Story
              </li>

              <li className="transition hover:text-[#D4AF37] cursor-pointer">
                Menu
              </li>

              <li className="transition hover:text-[#D4AF37] cursor-pointer">
                Gallery
              </li>

              <li className="transition hover:text-[#D4AF37] cursor-pointer">
                Testimonials
              </li>

            </ul>

          </div>

          {/* Opening Hours */}

          <div>

            <h4 className="text-xl font-semibold">
              Opening Hours
            </h4>

            <div className="mt-6 space-y-5 text-[#A1A1AA]">

              <div>
                <p className="font-medium text-white">
                  Monday – Friday
                </p>
                <p>11:00 AM – 11:00 PM</p>
              </div>

              <div>
                <p className="font-medium text-white">
                  Saturday – Sunday
                </p>
                <p>10:00 AM – 12:00 AM</p>
              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-semibold">
              Contact
            </h4>

            <div className="mt-6 space-y-4 text-[#A1A1AA]">

              <p>Noida, Uttar Pradesh</p>

              <p>+91 98765 43210</p>

              <p>hello@luxora.com</p>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-center md:flex-row">

          <p className="text-sm text-[#A1A1AA]">
            © 2026 Luxora. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:scale-110"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:scale-110"
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>

          <p className="text-sm text-[#A1A1AA]">
            Crafted with ❤️ by <span className="text-[#D4AF37]">Sparixa Digital</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
