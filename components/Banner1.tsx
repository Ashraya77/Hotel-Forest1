"use client";
import React from "react";
import BannerCard from "./BannerCard";
import Link from "next/link";
import { motion } from "framer-motion";

function Banner1() {
  return (
    <div className="flex items-center px-4 bg-stone-100 lg:px-24">
      <img
        className="absolute top-0 left-0 right-0 z-0 w-full overflow-hidden h-220"
        src="banner2.jpg"
        alt=""
      />
      <div className="flex flex-col items-center justify-between w-full gap-12 py-24 md:flex-row pl-40">
        <motion.div
          className="h-full space-y-8 md:w-1/2"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-6xl font-bold leading-snug text-white relative">
            Get Best Experiences <br />
            <span className="text-white">for your stay here</span>
          </h2>
          <p className="md:w-4/5 text-zinc-100 relative">
            "Experience comfort and elegance at our hotel, where every detail is
            designed for your relaxation. Whether you're here for a getaway or a
            business trip, we make your stay enjoyable, convenient, and
            affordable."{" "}
          </p>

           <div className="flex gap-4 relative">
            <Link href="/rooms">
              <button className="px-6 py-3 font-bold text-white bg-green-700 rounded-lg hover:bg-green-800 transition">
                Book Now
              </button>
            </Link>
            <Link href="/about">
              <button className="px-6 py-3 font-bold text-green-700 bg-white rounded-lg hover:bg-gray-200 transition">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="pr-70 relative z-0">
          <h1 className="text-2xl text-white text-center font-extrabold relative">
            OUR GALLERY
          </h1>
          <BannerCard />
        </div>
      </div>
      
    </div>
  );
}

export default Banner1;
