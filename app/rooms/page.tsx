import Image from "next/image";
import Link from "next/link";

const rooms = [
  { id: 1, name: "Mountain View", title: "Cozy & Comfortable", image1: "/room1.webp", price: "Rs 100/night" },
  { id: 2, name: "Ocean Suite", title: "Spacious & Luxurious", image1: "/room2.webp", price: "Rs 200/night" },
  { id: 3, name: "Presidential Suite", title: "Luxury with Panoramic Views", image1: "/room3.webp", price: "Rs 300/night" },
];

export default function Page() {
  return (
    <div className="bg-green-50 min-h-screen px-6 md:px-20 lg:px-40 py-12 mx-60">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-800">
        Our Exclusive Rooms
      </h1>

      <div className="flex flex-col gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Left: Image */}
            <div className="relative w-full md:w-1/3 h-64 md:h-auto">
              <Image
                src={room.image1}
                alt={room.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h2 className="text-2xl font-semibold text-green-800">{room.name}</h2>
                <p className="text-gray-600 mt-1">{room.title}</p>
              </div>

              <p className="text-green-700 text-xl font-bold mt-4">{room.price}</p>

              <div className="flex gap-4 mt-6">
                <Link
                  href={`/rooms/${room.id}`}
                  className="flex-1 text-center px-6 py-3 bg-green-600 hover:bg-green-800 text-white rounded-xl font-semibold hover:from-green-500 hover:to-green-700 transition-colors"
                >
                  Book Now
                </Link>
                <Link
                  href={`/rooms/${room.id}`}
                  className="flex-1 text-center px-6 py-3 border border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
