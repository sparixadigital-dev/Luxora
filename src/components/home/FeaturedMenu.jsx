import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Button from "../ui/Button";

import dish1 from "../../assets/images/dish1.jpeg";
import dish2 from "../../assets/images/dish2.jpeg";
import dish3 from "../../assets/images/dish3.jpeg";

const featuredDish = {
    image: dish1,
    title: "Truffle Steak",
    price: "₹1499",
    description:
        "A perfectly grilled premium steak finished with black truffle butter and served with roasted seasonal vegetables.",
};

const dishes = [
    {
        image: dish2,
        title: "Lobster Pasta",
        price: "₹1199",
        description:
            "Fresh lobster tossed with handmade pasta in a creamy parmesan sauce.",
    },
    {
        image: dish3,
        title: "Signature Dessert",
        price: "₹699",
        description:
            "Luxury handcrafted dessert with dark chocolate and seasonal berries.",
    },
];

const FeaturedMenu = () => {
    return (
        <section
            id="menu"
            className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white"
        >
            {/* Background */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

            <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 xl:px-16">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37] backdrop-blur-md">
                        FEATURED MENU
                    </span>

                    <h2 className="mt-8 font-playfair text-4xl font-bold md:text-5xl xl:text-6xl">

                        Signature Collection

                        <span className="mt-2 block text-[#D4AF37]">
                            Crafted By Our Master Chefs
                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#A1A1AA] md:text-lg">
                        Every dish is prepared with precision, premium ingredients,
                        and timeless culinary artistry.
                    </p>

                </div>

                <div className="mt-20 grid gap-10 lg:grid-cols-3">
                    {/* Chef's Special */}

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="group overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-[#111111] lg:col-span-2"
                    >
                        <div className="flex flex-col h-full">

                            {/* Image */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={featuredDish.image}
                                    alt={featuredDish.title}
                                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <span className="absolute left-6 top-6 rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-black">
                                    Chef's Special
                                </span>

                            </div>

                            {/* Content */}

                            <div className="flex flex-1 flex-col justify-between p-10">

                                <span className="text-sm uppercase tracking-[4px] text-[#D4AF37]">

                                    Signature Dish

                                </span>

                                <h3 className="mt-5 font-playfair text-4xl font-bold">

                                    {featuredDish.title}

                                </h3>

                                <p className="mt-6 text-base leading-8 text-[#A1A1AA]">

                                    {featuredDish.description}

                                </p>

                                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">

                                    <span className="text-4xl font-bold text-[#D4AF37]">

                                        {featuredDish.price}

                                    </span>

                                    <Button>

                                        <span className="flex items-center gap-2">

                                            Explore Dish

                                            <ArrowRight size={18} />

                                        </span>

                                    </Button>

                                </div>

                            </div>

                        </div>

                    </motion.div>
                    {/* Right Side Cards */}

                    <div className="flex flex-col gap-8">

                        {dishes.map((dish, index) => (

                            <motion.div
                                key={dish.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40"
                            >

                                <div className="relative overflow-hidden">

                                    <img
                                        src={dish.image}
                                        alt={dish.title}
                                        className="h-72 w-full object-cover object-center transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                </div>

                                <div className="p-6">

                                    <div className="flex items-center justify-between">

                                        <h3 className="font-playfair text-2xl font-semibold">

                                            {dish.title}

                                        </h3>

                                        <span className="font-bold text-[#D4AF37] text-xl">

                                            {dish.price}

                                        </span>

                                    </div>

                                    <p className="mt-4 text-sm leading-7 text-[#A1A1AA]">

                                        {dish.description}

                                    </p>

                                    <Button className="mt-6 w-full">

                                        <span className="flex items-center justify-center gap-2">

                                            Explore Dish

                                            <ArrowRight size={18} />

                                        </span>

                                    </Button>

                                </div>

                            </motion.div>

                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;