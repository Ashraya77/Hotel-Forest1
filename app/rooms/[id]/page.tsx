"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BookingComponent from "@/components/BookingComponent";

interface Rooms {
  name: string;
  title: string;
  image1: string;
  image2: string;
  price: string;
  desc: string;
}

const rooms: Record<string, Rooms> = {
  1: {
    name: "Mountain View Room",
    title: "Cozy and Relaxing",
    image1: "/room1.webp",
    image2: "/room1.webp",
    price: "Rs 140/night",
    desc: "The Standard Forest View Room is a warm and welcoming retreat designed for travelers who value both comfort and simplicity. With a queen-sized bed, soft lighting, and modern amenities, this room offers the perfect base to unwind after a long day of exploring. Large windows frame calming views of the surrounding greenery, bringing a sense of peace and tranquility indoors.",
  },
  2: {
    name: "Deluxe Twin Room",
    title: "Spacious and Bright",
    image1: "/room2.webp",
    image2: "/room2.webp",
    price: "Rs 200/night",
    desc: "Our Deluxe Twin Room is ideal for friends or family who prefer separate beds without compromising on style. Bright and spacious, the room features two plush single beds, a private bathroom, and earthy décor inspired by the natural beauty outside. With plenty of daylight and fresh air, it’s the perfect space to relax and recharge.",
  },
  3: {
    name: "Luxury Suite",
    title: "Elegant & Luxurious",
    image1: "/room3.webp",
    image2: "/room3.webp",
    price: "Rs 300/night",
    desc: "For those seeking a little more luxury, the Superior King Room provides the perfect blend of elegance and comfort. The centerpiece is a soft king-sized bed complemented by warm wooden finishes, a private balcony, and sweeping views of the forest. Whether you’re enjoying a quiet evening or catching the morning sunrise, this room offers a memorable stay.",
  },
};

export default function Page() {
  const { id } = useParams();
  const room = rooms[id as keyof typeof rooms];

  if (!room) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Room not found.
      </div>
    );
  }

  return (
    <>
         <BookingComponent/>

    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8">
            <h1 className="text-4xl font-bold text-gray-800">{room.name}</h1>
            <p className="mt-2 text-lg text-gray-500 italic">{room.title}</p>
            <p className="mt-4 text-2xl font-semibold text-green-700">{room.price}</p>
            <p className="mt-6 text-gray-700 leading-relaxed">{room.desc}</p>

            <div className="mt-8 flex gap-4">
              <button className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600 transition">
                Book Now
              </button>
              <Link
                href="/rooms"
                className="px-6 py-3 border border-green-700 text-green-700 rounded-xl hover:bg-green-700 hover:text-white transition"
              >
                Back to Rooms
              </Link>
            </div>

            <div className="mt-6 flex gap-4">
              <Image
                src={room.image1}
                alt={room.name}
                width={120}
                height={80}
                className="object-cover rounded-lg shadow"
              />
              <Image
                src={room.image2}
                alt={room.name}
                width={120}
                height={80}
                className="object-cover rounded-lg shadow"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-96 md:h-full">
            <Image
              src={room.image1}
              alt={room.name}
              fill
              className="object-cover rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </div>

    </>
    

  );
}
