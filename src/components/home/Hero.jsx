const Hero = () => {
    return (
        <section className="min-h-screen bg-[#0B0B0B] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">

                    <p className="text-yellow-500 uppercase tracking-[6px] mb-4">
                        Welcome to Luxora
                    </p>

                    <h1 className="font-serif font-luxury text-5xl md:text-7xl leading-tight font-bold">

                        Experience

                        <span className="text-yellow-500"> Fine Dining </span>

                        <br />

                        Like Never Before

                    </h1>

                    <p className="text-gray-400 mt-8 text-lg leading-8 max-w-lg">
                        Discover an unforgettable dining experience where every dish is
                        crafted with passion, premium ingredients, and timeless elegance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

                        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] duration-300">
                            Book a Table
                        </button>

                        <button className="border-yellow-500
                            text-yellow-500
                            px-8
                            py-4
                            rounded-full
                            hover:bg-yellow-500
                            hover:text-black
                            duration-300">
                            Explore Menu
                        </button>

                    </div>

                </div>

                {/* Right Image */}

                <div className="lg:w-1/2 flex justify-center">

                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
                        alt="Restaurant"
                        className="rounded-3xl w-full max-w-lg object-cover shadow-[0_25px_80px_rgba(0,0,0,0.45)] hover:scale-105 duration-500"
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;