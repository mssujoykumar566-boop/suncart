"use client";

import Link from "next/link";
import { IoSunnySharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="summer"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
        <div className="text-white px-4">
            <div className="flex items-center gap-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Summer Sale 50% OFF 
          </h1>
          <IoSunnySharp className="text-yellow-400 w-14 h-14" />
            </div>

          <p className="mb-6 text-lg md:text-xl">
            Upgrade your summer style with hot deals
          </p>

          <Link href="/products">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-semibold transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
