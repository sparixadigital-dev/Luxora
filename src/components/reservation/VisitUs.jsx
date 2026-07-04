import { motion } from "framer-motion";
import { MapPin, Phone, Clock3 } from "lucide-react";

const VisitUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-24"
    >
      <div className="text-center">
        <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37]">
          Visit Us
        </span>

        <h2 className="mt-8 font-playfair text-4xl font-bold md:text-5xl">
          Find
          <span className="mt-2 block text-[#D4AF37]">
            Luxora
          </span>
        </h2>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">

        {/* Left Side */}

        <div className="space-y-8">

          {/* Address */}

          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8">

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-[#D4AF37]/10 p-3">

                <MapPin size={22} className="text-[#D4AF37]" />

              </div>

              <h3 className="font-playfair text-2xl font-semibold text-[#D4AF37]">
                Our Address
              </h3>

            </div>

            <p className="mt-5 leading-8 text-[#A1A1AA]">
              Sector 62, Noida,
              <br />
              Uttar Pradesh, India
            </p>

          </div>

          {/* Contact */}

          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8">

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-[#D4AF37]/10 p-3">

                <Phone size={22} className="text-[#D4AF37]" />

              </div>

              <h3 className="font-playfair text-2xl font-semibold text-[#D4AF37]">
                Contact
              </h3>

            </div>

            <p className="mt-5 text-[#A1A1AA]">
              +91 98765 43210
            </p>

            <p className="mt-2 text-[#A1A1AA]">
              hello@luxora.com
            </p>

          </div>

          {/* Hours */}

          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8">

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-[#D4AF37]/10 p-3">

                <Clock3 size={22} className="text-[#D4AF37]" />

              </div>

              <h3 className="font-playfair text-2xl font-semibold text-[#D4AF37]">
                Opening Hours
              </h3>

            </div>

            <div className="mt-5 space-y-4">

              <div>

                <p className="text-[#A1A1AA]">
                  Monday – Friday
                </p>

                <p className="text-white">
                  11:00 AM – 11:00 PM
                </p>

              </div>

              <div>

                <p className="text-[#A1A1AA]">
                  Saturday – Sunday
                </p>

                <p className="text-white">
                  10:00 AM – 12:00 AM
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="overflow-hidden rounded-[32px] border border-white/10">

          <iframe
            title="Luxora Location"
            src="https://www.google.com/maps?q=Noida&output=embed"
            className="h-full min-h-[520px] w-full"
            loading="lazy"
          />

        </div>

      </div>

    </motion.section>
  );
};

export default VisitUs;