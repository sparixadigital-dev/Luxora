import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import storyImage from "../../assets/images/story.jpeg";
import Button from "../ui/Button";

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const Story = () => {
    return (
        <section
            id="story"
            className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white"
        >
            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-12 xl:px-16">
                {/* Left Content */}

                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full lg:w-1/2"
                >
                    {/* Badge */}

                    <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37] backdrop-blur-md">
                        OUR STORY
                    </span>

                    {/* Heading */}

                    <h2 className="mt-8 font-playfair text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                        Crafting Memorable
                        <span className="mt-2 block text-[#D4AF37]">
                            Dining Experiences
                        </span>
                    </h2>

                    {/* Description */}

                    <p className="mt-8 max-w-xl text-base leading-8 text-[#A1A1AA] md:text-lg">
                        At Luxora, every plate tells a story of passion, precision,
                        and culinary artistry. Our chefs blend timeless recipes with
                        modern techniques to create unforgettable dining moments in
                        an atmosphere of elegance and warmth.
                    </p>

                    {/* Features */}

                    <div className="mt-10 space-y-5">

                        {[
                            "Premium Handpicked Ingredients",
                            "Michelin Inspired Culinary Experience",
                            "Luxury Ambience & Personalized Service",
                        ].map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-4"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-black font-bold">
                                    ✓
                                </div>

                                <p className="text-base text-[#FAFAFA]">
                                    {item}
                                </p>
                            </div>

                        ))}

                    </div>

                    {/* Button */}

                    <div className="mt-12">

                        <Button>

                            <span className="flex items-center gap-2">

                                Discover Our Story

                                <ArrowRight size={18} />

                            </span>

                        </Button>

                    </div>

                </motion.div>
                {/* Right Content */}

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative flex w-full justify-center lg:w-1/2"
                >

                    {/* Experience Card */}

                    <div className="absolute -top-6 left-0 z-20 rounded-3xl border border-white/10 bg-[#111111]/90 px-6 py-5 backdrop-blur-xl shadow-2xl">

                        <h3 className="text-3xl font-bold text-[#D4AF37]">
                            15+
                        </h3>

                        <p className="mt-2 text-sm text-[#A1A1AA]">
                            Years of Culinary Excellence
                        </p>

                    </div>

                    {/* Story Image */}

                    <div className="relative overflow-hidden rounded-[48px] border border-white/10">

                        <img
                            src={storyImage}
                            alt="Executive Chef"
                            className="h-[520px] w-full max-w-[620px] object-cover transition duration-700 hover:scale-105 lg:h-[700px]"
                        />

                        {/* Gradient Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    </div>

                    {/* Bottom Card */}

                    <div className="absolute bottom-8 right-0 rounded-3xl border border-[#D4AF37]/30 bg-[#111111]/90 px-6 py-5 backdrop-blur-xl shadow-2xl">

                        <h3 className="text-lg font-semibold text-[#D4AF37]">
                            Award Winning Chefs
                        </h3>

                        <p className="mt-2 text-sm text-[#A1A1AA]">
                            Passionately crafting every dish with precision and elegance.
                        </p>

                    </div>

                </motion.div>
            </div>
        </section >
    );
};

export default Story;
