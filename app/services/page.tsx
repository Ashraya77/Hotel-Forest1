import React from "react";

const page = () => {
  const services = [
    { id: 1, img: "/7.jpg", name: "BARBEQUE" },
    { id: 2, img: "/1.jpg", name: "TREKKING SUPPORT" },
    { id: 3, img: "/banner.jpg", name: "LODGING" },
    { id: 4, img: "/6.jpg", name: "CAT" },
    { id: 5, img: "/3.jpg", name: "GOOD ENVIRONMENT" },
    { id: 6, img: "/9.jpg", name: "NATURAL ENVIORNMENT" }
  ];
  return (
    <div>
      <div className="text-justify pt-25 pb-25 w-full pl-100  pr-100 bg-green-200">
        <h1 className="text-7xl font-extrabold">
          Unleash your potential <br /> of the journey with{" "}
          <span className="text-teal-400">
            {" "}
            <br /> our unmatched and <br /> finest services
          </span>{" "}
        </h1>
        <p className="py-10 text-2xl text-gray-500">
          Your Experience, Our Expertise, services that makes the difference
        </p>
      </div>

     {/* Facilities Title */}
      <h2 className="text-3xl md:text-4xl text-center font-extrabold py-10">
        Our Facilities
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-5 md:px-20 pb-20 mx-60">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-80 md:h-96 object-cover"
              src={service.img}
              alt={service.name}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-90 px-6 py-2 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-center">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

{
  /* <div className="flex flex-col gap-10 items-center">
        {facilities.map((facility) => (
          <div key={facility.id} className="relative w-[1200px]">
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-xl shadow-md">
              <h1 className="text-2xl font-bold text-center">{facility.name}</h1>
            </div>
          </div>
        ))}
      </div> */
}
