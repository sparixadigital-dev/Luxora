import { motion } from "framer-motion";

import gallery1 from "../../assets/images/gallery1.jpeg";
import gallery2 from "../../assets/images/gallery2.jpeg";
import gallery3 from "../../assets/images/gallery3.jpeg";
import gallery4 from "../../assets/images/gallery4.jpeg";
import gallery5 from "../../assets/images/gallery5.jpeg";
import gallery6 from "../../assets/images/gallery6.jpeg";

const galleryItems = [
    {
        image: gallery2,
        title: "Master Chef",
    },
    {
        image: gallery3,
        title: "Private Dining",
        
    },
    {
        image: gallery4,
        title: "Signature Dish",
    },
    {
        image: gallery5,
        title: "Dessert Art",
    },
    {
        image: gallery6,
        title: "Wine Ritual",
    },
    {
        image: gallery1,
        title: "Luxury Experience",
    },
];

const Gallery = () => {
    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white"
        >
            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

            <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 xl:px-16">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs uppercase tracking-[4px] text-[#D4AF37]">
                        GALLERY
                    </span>

                    <h2 className="mt-8 font-playfair text-4xl font-bold md:text-5xl xl:text-6xl">
                        Experience The
                        <span className="mt-2 block text-[#D4AF37]">
                            Art Of Fine Dining
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#A1A1AA]">
                        Every dish, every table and every moment is designed
                        to create an unforgettable luxury dining experience.
                    </p>

                </div>

                {/* Large Hero Image */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="group relative mt-20 overflow-hidden rounded-[40px]"
                >

                    <img
                        src={gallery1}
                        alt="Luxury Interior"
                        className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-10 left-10">

                        <span className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
                            LUXORA
                        </span>

                        <h3 className="mt-3 font-playfair text-5xl font-bold">
                            Elegant Ambience
                        </h3>

                    </div>

                </motion.div>

                {/* Gallery Cards */}

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6">

                                <span className="text-xs uppercase tracking-[3px] text-[#D4AF37]">
                                    Luxora
                                </span>

                                <h3 className="mt-2 font-playfair text-2xl font-semibold">
                                    {item.title}
                                </h3>

                            </div>

                        </motion.div>

                    ))}

                </div>
            </div>

        </section>
    );
};

export default Gallery;