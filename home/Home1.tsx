"use client";
import React from "react";
import { motion } from "framer-motion";

const Home1 = () => {
  return (
    <div className="p-10 mt-25 pt-20 mb-0 bg-[#faf7f0] "
    >
      <img src="bg5.png"
      className="absolute z-0 top-240 left-0 bottom-0 right-0 h-170 w-120"
      alt="" />
      <motion.div
        className="flex justify-around rounded-2xl pb-18 relative "
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className=" py-10 max-w-800 mx-auto pl-50">
          <h1 className="text-4xl text-[#28382C] pb-10 font-bold">
            Welcome to <br /> Hotel Forest Backpackin
          </h1>
          <p className="w-150 text-justify text-black ">
            At Hotel Forest Backpacking, we believe every guest deserves a
            memorable experience. From the moment you step into our welcoming
            lobby, you'll feel the warmth of our service and the charm of our
            nature-inspired design. Our rooms are thoughtfully crafted to
            provide maximum comfort, with soft linens, cozy furniture, and large
            windows offering stunning views of the surrounding forest. Wake up
            to the aroma of freshly brewed coffee and a delicious complimentary
            breakfast that energizes you for the day ahead. Whether you're here
            to explore nearby trails, relax in our serene gardens, or connect
            with fellow travelers, our hotel offers the perfect balance of
            adventure and relaxation. We pride ourselves on attention to detail,
            ensuring that every corner of our property contributes to a seamless
            and enjoyable stay. Experience personalized service, beautiful
            surroundings, and amenities designed to make your visit
            unforgettable. From guided tours to evening events, there's always
            something to enjoy, making Hotel Forest Backpacking the ideal choice
            for both solo travelers and families alike. Your comfort, safety,
            and satisfaction are our top priorities, ensuring that every moment
            spent here leaves lasting memories.
          </p>
        </div>

        <div className="flex relative z-0 w-100 h-80">
          <img
            src="27.jpg"
            alt=""
            className="absolute top-30 right-60 w-90 h-110 object-cover rounded-lg  z-20"
          />
          <img
            src="2.jpg"
            alt=""
            className="absolute top-0 left-0 right-0 w-90 h-110 object-cover rounded-lg z-10"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home1;
