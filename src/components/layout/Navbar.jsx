const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="max-w-[1400px] mx-auto px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wider text-yellow-500">
          LUXORA
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          <li className="cursor-pointer hover:text-yellow-500 transition">Home</li>
          <li className="cursor-pointer hover:text-yellow-500 transition">About</li>
          <li className="cursor-pointer hover:text-yellow-500 transition">Menu</li>
          <li className="cursor-pointer hover:text-yellow-500 transition">Gallery</li>
          <li className="cursor-pointer hover:text-yellow-500 transition">Reservation</li>
          <li className="cursor-pointer hover:text-yellow-500 transition">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block border border-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
          Book a Table
        </button>

      </div>
    </nav>
  );
};

export default Navbar;