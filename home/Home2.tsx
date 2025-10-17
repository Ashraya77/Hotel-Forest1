"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Home2 = () => {
  return (
    <div className=" px-60 py-12 text-justify ">
       {/* <img
        src="bgg.png"
        className="absolute top-580 left-395 right-0 z-0 h-134 w-80"
        alt=""
      />  */}

      <div className=" relative">
        <motion.h1
          className="text-4xl pb-10 font-bold mb-6 text-center"
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          All our room types include complementary breakfast
        </motion.h1>
        <div
          className="grid md:grid-cols-2 gap-10 items-center"
         
        >
          <motion.div className="border-l-4 border-green-500 pl-6"
           initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl text-[#28382C] font-extrabold mb-4">
              Luxury Refined
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our hotel is dedicated to providing guests with the highest level
              of comfort and convenience. Every room is carefully designed to
              combine modern elegance with practical amenities, ensuring a
              relaxing stay whether you are traveling for business or leisure.
              From in-room dining to personalized housekeeping, we make sure
              that every detail of your stay is taken care of.
            </p>
            <Link
              href="/rooms"
              className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
            >
              Explore
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/13.jpg"
              alt="Luxury Room"
              className="rounded-xl shadow-lg w-150 h-90 "
            />
          </motion.div>
        </div>

        {/* Second Section */}
        <div
          className="grid md:grid-cols-2 gap-8 items-center mt-16 shadow-xl rounded-3xl pb-6"
        >
          {/* Image */}
          <motion.div className="flex justify-center"
           initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/4.jpg"
              alt="Luxury Banner"
              className="rounded-xl shadow-lg w-150 h-90"
            />
          </motion.div>

          {/* Text */}
          <motion.div className="border-r-4 border-green-500 pr-6"
           initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-[#28382C] mb-4">
              Experience Elegance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Daily housekeeping services are included with all rooms, ensuring
              your space remains fresh and welcoming throughout your stay. Our
              professional staff provides room cleaning, bed linen changes, and
              towel replacements at your convenience. Laundry and dry-cleaning
              services are also available for guests who want their clothes
              perfectly cared for during longer stays.
            </p>
            <Link
              href="/rooms"
              className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
            >
              Explore
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
