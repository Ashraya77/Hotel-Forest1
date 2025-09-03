"use client";

import React from "react";

interface LocationMapProps {
  title?: string;
  address?: string;
  mapSrc?: string;
  height?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({
  title = "Our Location",
  address = "Pokhara, Kaski, Hotel Forest",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e123456789%3A0xabcdef123456!2sForest%20Hotel!5e0!3m2!1sen!2snp!4v1234567890",
  height = "h-96",
}) => {
  return (
    <div className=" mx-auto mt-12 bg-white rounded-2xl p-6 shadow-md text-center">
      <h2 className="text-xl font-bold text-green-700 mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{address}</p>
      <div className={`${height} w-full rounded-lg overflow-hidden`}>
        <iframe
          title="Hotel Location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
