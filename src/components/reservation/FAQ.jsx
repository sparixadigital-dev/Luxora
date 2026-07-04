import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to reserve in advance?",
    answer:
      "We recommend booking in advance, especially during weekends and holidays, to ensure your preferred dining time.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes. You can modify or cancel your reservation before your scheduled dining time by contacting our team.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "Smart casual or formal attire is recommended to complement the luxury dining experience.",
  },
  {
    question: "Do you offer private dining?",
    answer:
      "Yes. We offer private dining spaces for birthdays, anniversaries, business meetings, and special celebrations.",
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-28"
    >
      <div className="text-center">
        <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37]">
          FAQ
        </span>

        <h2 className="mt-8 font-playfair text-4xl font-bold md:text-5xl">
          Frequently Asked
          <span className="mt-2 block text-[#D4AF37]">
            Questions
          </span>
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111111]"
          >
            <button
              onClick={() =>
                setOpenFAQ(openFAQ === index ? null : index)
              }
              className="flex w-full items-center justify-between px-7 py-6 text-left transition hover:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>

              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${
                  openFAQ === index
                    ? "rotate-180 text-[#D4AF37]"
                    : "text-[#D4AF37]"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openFAQ === index
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-7 pb-6 leading-7 text-[#A1A1AA]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ;