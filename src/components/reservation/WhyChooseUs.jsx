import { motion } from "framer-motion";

const features = [
  {
    title: "Luxury Ambience",
    desc: "Elegant interiors crafted for memorable evenings.",
  },
  {
    title: "World-Class Chefs",
    desc: "Exceptional dishes prepared with premium ingredients.",
  },
  {
    title: "Private Dining",
    desc: "Perfect spaces for family, business and celebrations.",
  },
  {
    title: "Premium Service",
    desc: "Attentive hospitality that exceeds expectations.",
  },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-24"
    >
      <div className="text-center">
        <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37]">
          Why Choose Us
        </span>

        <h2 className="mt-8 font-playfair text-4xl font-bold md:text-5xl">
          More Than Just
          <span className="mt-2 block text-[#D4AF37]">
            A Reservation
          </span>
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-[28px] border border-white/10 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40"
          >
            <h3 className="font-playfair text-2xl font-semibold text-[#D4AF37]">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-[#A1A1AA]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;