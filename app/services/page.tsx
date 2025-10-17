"use client";
import React from "react";
import {
  Wifi,
  Car,
  Utensils,
  ConciergeBell,
  Shirt,
  Briefcase,

} from "lucide-react";

const Page = () => {
  const services = [
    { id: 1, img: "/47.jpg", name: "Barbeque Nights" },
    { id: 2, img: "/1.jpg", name: "Trekking Support" },
    { id: 3, img: "/3.jpg", name: "Cozy Lodging" },
    { id: 4, img: "/6.jpg", name: "Pet-Friendly Stay" },
    { id: 5, img: "/9.jpg", name: "Natural Environment" },
    { id: 6, img: "/44.jpg", name: "Natural Environment" },
  ];

  const amenities = [
    { id: 1, icon: Wifi, name: "Free High-Speed WiFi" },
    { id: 2, icon: Car, name: "Free Parking" },
    { id: 3, icon: ConciergeBell, name: "24/7 Room Service" },
    { id: 4, icon: Utensils, name: "In-House Restaurant" },
    { id: 5, icon: Shirt, name: "Laundry Service" },
    { id: 6, icon: Briefcase, name: "Conference Hall" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="/22.jpg"
          alt="Hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Our Services
          </h2>
          <p className="max-w-2xl text-lg">
            Experience comfort, nature, and modern amenities designed to make
            your stay unforgettable.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <h1 className="text-4xl font-bold text-center pt-12">
        Explore Our Experiences
      </h1>
      <p className="text-center max-w-2xl mx-auto mt-3 text-gray-600">
        From outdoor adventures to cozy stays, enjoy the best of both nature and
        comfort.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20 py-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold text-center px-4">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Amenities Section */}
      <h1 className="text-4xl font-bold text-center pt-12">Basic Facilities</h1>
      <p className="text-center max-w-2xl mx-auto mt-3 text-gray-600">
        Enjoy modern facilities designed to make your stay as comfortable and
        convenient as possible.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-20 py-12">
        {amenities.map((amenity) => {
          const Icon = amenity.icon;
          return (
            <div
              key={amenity.id}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <Icon className="text-green-800 mb-3" size={36} />
              <p className="text-center text-lg font-medium">{amenity.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
