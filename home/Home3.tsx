"use client";
import React, { useState, useEffect } from "react";
import {motion} from "framer-motion"

const Home3 = () => {
  const reviews = [
    { id: 1, name: "Aarav Sharma", city: "Pokhara", review: "The trip was well-organized, and I loved how friendly everyone was. Definitely coming back!", img: "/1.jpg" },
    { id: 2, name: "Sofia Martinez", city: "Kathmandu", review: "Beautiful views and unforgettable experiences. I enjoyed every single moment.", img: "/2.jpg" },
    { id: 3, name: "Liam Johnson", city: "Chitwan", review: "A perfect blend of adventure and relaxation. Highly recommend to travelers of all ages.", img: "/3.jpg" },
    { id: 4, name: "Maya Thapa", city: "Bhaktapur", review: "The cultural richness of this place was amazing. I felt so connected to the local traditions.", img: "/4.jpg" },
    { id: 5, name: "Ethan Wilson", city: "Butwal", review: "Everything from food to transport was smooth. Super impressed with the planning.", img: "/5.jpg" },
    { id: 6, name: "Isabella Rossi", city: "Dharan", review: "The people here made me feel so welcome. It’s one of the best trips I’ve ever had.", img: "/6.jpg" },
    { id: 7, name: "Noah Kim", city: "Lalitpur", review: "Amazing service, comfortable stay, and wonderful memories. Couldn’t ask for more!", img: "/7.jpg" },
    { id: 8, name: "Aanya Patel", city: "Janakpur", review: "Traveling here was a dream come true. The landscapes were absolutely stunning.", img: "/8.jpg" },
    { id: 9, name: "Oliver Brown", city: "Biratnagar", review: "I was impressed with the attention to detail. Every day felt like a new adventure.", img: "/9.jpg" },
    { id: 10, name: "Hana Suzuki", city: "Hetauda", review: "Such a refreshing experience! I met wonderful people and enjoyed every bit of it.", img: "/10.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  function handleNext() {
    setIndex((prev) => (prev + itemsPerPage) % reviews.length);
  }

  function handleBack() {
    setIndex((prev) => (prev - itemsPerPage + reviews.length) % reviews.length);
  }

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const visibleReviews = reviews
    .slice(index, index + itemsPerPage)
    .concat(
      index + itemsPerPage > reviews.length
        ? reviews.slice(0, (index + itemsPerPage) % reviews.length)
        : []
    );

  return (
    <motion.div className="flex justify-center items-center mt-20 mb-10"
    initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 w-340 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">What People Say</h1>
        <h3 className="text-gray-500 mb-6">
          Showing {index + 1}–{Math.min(index + itemsPerPage, reviews.length)} of {reviews.length}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {visibleReviews.map((r) => (
            <div key={r.id} className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center">
              <p className="text-lg text-gray-700 italic leading-relaxed mb-4">“{r.review}”</p>
              <img
                className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-gray-200 mb-2"
                src={r.img}
                alt={r.name}
              />
              <h2 className="font-semibold text-gray-800">
                <span className="italic">{r.name}</span>{" "}
                <span className="text-gray-500">from {r.city}</span>
              </h2>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <button
            className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-gray-300 transition"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="bg-green-700 text-white font-medium px-4 py-2 rounded-xl hover:bg-green-600 transition"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home3;
