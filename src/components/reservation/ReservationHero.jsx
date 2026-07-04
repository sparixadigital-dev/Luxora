import { motion } from "framer-motion";

const ReservationHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37]">
        Reservation
      </span>

      <h1 className="mt-8 font-playfair text-5xl font-bold leading-tight md:text-6xl xl:text-7xl">
        Reserve Your
        <span className="mt-2 block text-[#D4AF37]">
          Perfect Table
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-[#A1A1AA]">
        Enjoy an unforgettable evening with world-class cuisine,
        elegant ambience and exceptional hospitality.
        Reserve your table today and let us craft
        a memorable dining experience.
      </p>

      <div className="mt-10 flex flex-wrap gap-8">

        <div>
          <h3 className="text-3xl font-bold text-[#D4AF37]">
            2500+
          </h3>

          <p className="mt-2 text-sm text-[#A1A1AA]">
            Happy Guests
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#D4AF37]">
            4.9★
          </h3>

          <p className="mt-2 text-sm text-[#A1A1AA]">
            Average Rating
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#D4AF37]">
            7 Days
          </h3>

          <p className="mt-2 text-sm text-[#A1A1AA]">
            Open Every Week
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default ReservationHero;