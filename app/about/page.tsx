"use client";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Heading */}
      <div className="text-center py-20 px-5 md:px-40">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-4">
          About Hotel Forest
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A place where comfort meets nature, and every stay feels like home.
        </p>
      </div>

      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5 md:px-40">
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="/gallery/11.jpeg"
            alt="Hotel Forest front view"
            className="rounded-2xl shadow-lg w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Our Story
          </h2>
          <p className="leading-relaxed text-gray-700 mb-4 text-justify">
            Nestled in the heart of nature, Hotel Forest was built with one idea
            in mind: to give travelers a place where they can breathe deeply,
            recharge, and feel inspired. Whether you’re here for a weekend
            escape, a family holiday, or a business trip, we make sure your
            experience is unforgettable.
          </p>
          <p className="leading-relaxed text-gray-700 text-justify">
            With cozy rooms, fresh local cuisine, and views that remind you of
            life’s beauty, Hotel Forest is more than a stay—it’s a journey.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 bg-green-50 py-16 px-5 md:px-40 rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Comfort",
              desc: "From soft beds to warm lighting, we make sure every detail adds to your relaxation."
            },
            {
              title: "Nature",
              desc: "Surrounded by forests and fresh air, our hotel brings you closer to the beauty of the outdoors."
            },
            {
              title: "Hospitality",
              desc: "Our staff treats every guest like family, making your stay warm and memorable."
            }
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center mt-20 px-5 md:px-40 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Come Stay With Us
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg md:text-xl">
          Your adventure starts here. Whether it’s peace, fun, or inspiration
          you’re looking for—Hotel Forest has it all.
        </p>
        <a
          href="/gallery"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-900 transition-colors"
        >
          Explore Our Gallery
        </a>
      </div>
    </div>
  );
};

export default About;
