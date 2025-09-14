import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Mountain View",
    title: "Cozy & Comfortable",
    image1: "/room1.webp",
    price: "Rs 100/night",
    location: "Pokhara, Nepal",
    rating: 9.4,
    reviews: 62,
    reviewTag: "Exceptional",
    features: ["Pool", "Spa"],
    refundable: true,
  },
  {
    id: 2,
    name: "Ocean Suite",
    title: "Spacious & Luxurious",
    image1: "/room2.webp",
    price: "Rs 200/night",
    location: "Goa, India",
    rating: 9.6,
    reviews: 123,
    reviewTag: "Superb",
    features: ["Pool", "Hot tub"],
    refundable: false,
  },
  {
    id: 3,
    name: "Presidential Suite",
    title: "Luxury with Panoramic Views",
    image1: "/room3.webp",
    price: "Rs 300/night",
    location: "Dubai, UAE",
    rating: 8.8,
    reviews: 87,
    reviewTag: "Excellent",
    features: ["Spa", "Free breakfast"],
    refundable: true,
  },
];

export default function Page() {
  return (
    <div className="bg-green-50 min-h-screen px-6 md:px-20 lg:px-40 py-12 mx-60">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-800">
        Our Exclusive Rooms
      </h1>
    
      <div className="flex flex-col gap-8">
        {rooms.map((room) => (
          <Link
            key={room.id}
            href={`/rooms/${room.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row overflow-hidden cursor-pointer"
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

            <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h2 className="text-2xl font-semibold text-green-800">{room.name}</h2>
                <p className="text-gray-600 mt-1">{room.title}</p>
                <p className="text-gray-500 mt-1">{room.location}</p>

                <div className="flex gap-3 mt-2 text-sm text-gray-700">
                  {room.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>

                {room.refundable && (
                  <p className="text-green-600 mt-2 text-sm font-medium">
                    ✅ Fully refundable
                  </p>
                )}
              </div>

              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-green-700 font-bold">
                    {room.reviewTag} {room.rating}
                  </p>
                  <p className="text-gray-500 text-sm">{room.reviews} reviews</p>
                </div>
                <p className="text-green-700 text-xl font-bold">{room.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
