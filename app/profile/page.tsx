"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  const handleLogOut = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 px-20 py-10 mx-45">
      {/* Sidebar */}
      <div className="bg-white border rounded-2xl shadow-md p-8 w-1/4">
        <h1 className="text-2xl font-bold text-center mb-8">Settings</h1>
        <ul className="space-y-4 mb-10 text-lg">
          <li className="cursor-pointer hover:text-green-600">Personal Details</li>
          <li className="cursor-pointer hover:text-green-600">Payment Information</li>
          <li className="cursor-pointer hover:text-green-600">Safety</li>
          <li className="cursor-pointer hover:text-green-600">Preferences</li>
        </ul>

        <button
          onClick={handleLogOut}
          className="w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-2xl shadow-md p-10 ml-8">
        <h1 className="text-3xl font-semibold mb-6 border-b pb-3">
          Personal Details
        </h1>

        {/* Profile Section */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src="1.jpg"
            className="h-28 w-28 rounded-full object-cover shadow"
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-medium">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
            <button className="mt-3 px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div>
            <p className="text-gray-500">Full Name</p>
            <h3 className="font-medium">Snow John</h3>
          </div>
          <div>
            <p className="text-gray-500">Address</p>
            <h3 className="font-medium">123 Main Street, City</h3>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <h3 className="font-medium">+977 9800000000</h3>
          </div>
          <div>
            <p className="text-gray-500">Date of Birth</p>
            <h3 className="font-medium">01 Jan 1990</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
