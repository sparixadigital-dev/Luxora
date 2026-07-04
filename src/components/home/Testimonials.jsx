import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Emily Carter",
        role: "Food Critic",
        review:
            "An unforgettable dining experience. Every dish was beautifully presented and the service was exceptional.",
    },
    {
        id: 2,
        name: "James Wilson",
        role: "Business Executive",
        review:
            "Luxora exceeded every expectation. The ambience, flavours and hospitality were simply outstanding.",
    },
    {
        id: 3,
        name: "Sophia Brown",
        role: "Travel Blogger",
        review:
            "One of the finest restaurants I've ever visited. A perfect combination of luxury and taste.",
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white"
        >
            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

            <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 xl:px-16">
                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37]">
                        TESTIMONIALS
                    </span>

                    <h2 className="mt-8 font-playfair text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">

                        Loved By

                        <span className="mt-2 block text-[#D4AF37]">

                            Food Enthusiasts

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]">

                        Every visit at Luxora is crafted to create memorable
                        experiences, exceptional flavours and lasting impressions.

                    </p>

                </div>

                {/* Testimonials Grid */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {testimonials.map((item, index) => (

                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="rounded-[32px] border border-white/10 bg-[#111111] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40"
                        >
                            {/* Stars */}

                            <div className="flex items-center gap-1">

                                {[...Array(5)].map((_, starIndex) => (

                                    <Star
                                        key={starIndex}
                                        size={18}
                                        className="fill-[#D4AF37] text-[#D4AF37]"
                                    />

                                ))}

                            </div>

                            {/* Review */}

                            <p className="mt-8 text-[16px] leading-8 text-[#D6D6D6] italic">

                                "{item.review}"

                            </p>

                            {/* Reviewer */}

                            <div className="mt-10 border-t border-white/10 pt-6">

                                <h3 className="font-playfair text-2xl font-semibold text-white">

                                    {item.name}

                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[2px] text-[#D4AF37]">

                                    {item.role}

                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Bottom Trust Row */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-20 flex flex-col items-center justify-center gap-4 rounded-[32px] border border-[#D4AF37]/20 bg-[#111111] px-8 py-10 text-center"
                >

                    <div className="flex items-center gap-1">

                        {[...Array(5)].map((_, index) => (

                            <Star
                                key={index}
                                size={22}
                                className="fill-[#D4AF37] text-[#D4AF37]"
                            />

                        ))}

                    </div>

                    <h3 className="mt-2 text-4xl font-bold text-[#D4AF37]">

                        4.9 / 5.0

                    </h3>

                    <p className="text-[#A1A1AA]">

                        Based on 2,500+ verified guest reviews

                    </p>

                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;