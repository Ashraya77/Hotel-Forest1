"use client"
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"

const Home2 = () => {
  return (
    <div className=" mx-60 px-6 py-12 text-justify">
     <h1 className="text-2xl font-bold mb-6 text-center">
        All our room types include complementary breakfast
      </h1>
      <motion.div className="grid md:grid-cols-2 gap-10 items-center"
       initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <div className="border-l-4 border-green-700 pl-6">
          <h2 className="text-3xl font-extrabold mb-4">Luxury Refined</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
           Our hotel is dedicated to providing guests with the highest level of comfort and convenience. Every room is carefully designed to combine modern elegance with practical amenities, ensuring a relaxing stay whether you are traveling for business or leisure. From in-room dining to personalized housekeeping, we make sure that every detail of your stay is taken care of.
          </p>
          <Link
            href="/rooms"
            className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            Explore
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/room1.webp"
            alt="Luxury Room"
            className="rounded-xl shadow-lg w-150 "
          />
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div className="grid md:grid-cols-2 gap-8 items-center mt-16"
      initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
       
        {/* Text */}
        <div className="border-l-4 border-green-700 pl-6">
          <h2 className="text-3xl font-extrabold mb-4">Experience Elegance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Daily housekeeping services are included with all rooms, ensuring your space remains fresh and welcoming throughout your stay. Our professional staff provides room cleaning, bed linen changes, and towel replacements at your convenience. Laundry and dry-cleaning services are also available for guests who want their clothes perfectly cared for during longer stays.
          </p>
          <Link
            href="/rooms"
            className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            Explore
          </Link>
        </div>

         {/* Image */}
        <div className="flex justify-center order-1 ">
          <img
            src="/banner.jpg"
            alt="Luxury Banner"
            className="rounded-xl shadow-lg w-150"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home2;
