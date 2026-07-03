import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import heroImage from "../../assets/images/hero.jpeg";
import Button from "../ui/Button";
import { heroData } from "../../data/heroData";

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
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
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#0B0B0B] pt-28 text-white"
        >
            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

                <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_35%)]" />

            </div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 lg:flex-row lg:gap-10 lg:px-12 xl:px-16">
                {/* Left Content */}

                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    animate="visible"
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    {/* Premium Badge */}

                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 backdrop-blur-md">

                        <Star
                            size={14}
                            className="fill-[#D4AF37] text-[#D4AF37]"
                        />

                        <span className="text-xs uppercase tracking-[4px] text-[#D4AF37]">
                            {heroData.badge}
                        </span>

                    </div>

                    {/* Heading */}

                    <h1 className="mt-8 font-playfair text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl xl:text-[88px]">

                        {heroData.heading[0]}

                        <span className="mt-4 block text-[#D4AF37]">
                            {heroData.heading[1]}
                        </span>

                        <span className="mt-4 block">
                            {heroData.heading[2]}
                        </span>

                    </h1>

                    {/* Description */}

                    <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-[#A1A1AA] lg:mx-0 lg:text-lg">
                        {heroData.description}
                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">

                        <Button>

                            <span className="flex items-center gap-2">

                                {heroData.primaryButton}

                                <ArrowRight size={18} />

                            </span>

                        </Button>

                        <Button variant="secondary">

                            {heroData.secondaryButton}

                        </Button>

                    </div>

                    {/* Trust Cards */}

                    <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        {heroData.stats.map((item) => (

                            <div
                                key={item.id}
                                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40"
                            >

                                <h3 className="text-2xl font-bold text-[#D4AF37]">
                                    {item.value}
                                </h3>

                                <p className="mt-2 text-sm text-[#A1A1AA]">
                                    {item.label}
                                </p>

                            </div>

                        ))}

                    </div>

                </motion.div>
                {/* Right Content */}

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    animate="visible"
                    className="relative flex w-full items-center justify-center lg:w-1/2"
                >
                    {/* Rating Card */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute left-0 top-6 z-20 rounded-3xl border border-white/10 bg-[#111111]/90 px-6 py-5 backdrop-blur-xl shadow-2xl"
                    >
                        <div className="flex items-center gap-2">
                            <Star
                                size={18}
                                className="fill-[#D4AF37] text-[#D4AF37]"
                            />
                            <span className="text-lg font-semibold text-white">
                                4.9 Rating
                            </span>
                        </div>

                        <p className="mt-2 text-sm text-[#A1A1AA]">
                            Rated by 2,500+ happy guests
                        </p>
                    </motion.div>

                    {/* Hero Image */}

                    <div className="relative">

                        <img
                            src={heroImage}
                            alt="Luxury Restaurant"
                            className="h-[520px] w-full max-w-[650px] rounded-[48px] border border-white/10 object-cover shadow-[0_45px_100px_rgba(0,0,0,0.55)] transition duration-500 hover:scale-[1.02] lg:h-[700px]"
                        />

                        {/* Dark Overlay */}

                        <div className="absolute inset-0 rounded-[48px] bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    </div>

                    {/* Michelin Card */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-8 right-0 rounded-3xl border border-[#D4AF37]/30 bg-[#111111]/90 px-6 py-5 backdrop-blur-xl shadow-2xl"
                    >
                        <h3 className="text-lg font-semibold text-[#D4AF37]">
                            Michelin Inspired
                        </h3>

                        <p className="mt-2 text-sm text-[#A1A1AA]">
                            Crafted by world-class chefs
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;