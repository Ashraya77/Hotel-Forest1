"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {words} from "@/data/data"

function Banner1() {
  // const words = [
  //   "for your stay here",
  //   "for your comfort",
  //   "for your memories",
  //   "for your next trip",
  // ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center px-4 lg:px-24 pt-35 pb-10">
      <img
        className="absolute top-0 left-0 right-0 z-0 w-full overflow-hidden object-cover h-full bg-blend-darken" 
        src="banner2.jpg"
        alt=""
      />
      <div className="flex flex-col items-center justify-between w-full gap-12 py-24 md:flex-row pl-40">
        <motion.div
          className="h-full space-y-8 w-1/2"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 className="text-7xl font-extrabold  text-white relative">
            Get Best Experiences <br />
          </motion.h2>

          <div className="h-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                className="text-6xl font-bold text-green-600 absolute"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {words[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="md:w-4/5 text-zinc-100 relative">
            "Experience comfort and elegance at our hotel, where every detail is
            designed for your relaxation. Whether you're here for a getaway or a
            business trip, we make your stay enjoyable, convenient, and
            affordable."
          </p>

          <div className="flex gap-10 relative">
            <Link href="/rooms">
              <button className="px-6 py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-green-800 transition">
                Book Now
              </button>
            </Link>
            <Link href="/about">
              <button className="px-6 py-3 font-bold text-black bg-white rounded-lg hover:bg-gray-200 transition">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner1;
