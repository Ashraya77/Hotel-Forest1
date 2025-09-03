"use client";
import LocationMap from "@/components/LocationMap";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can send the form data to your backend
    toast.success("Form Submitted!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 border-b-4 border-green-600 inline-block pb-2">
          CONTACT US
        </h1>
      </header>

      {/* Info Section */}
      <section className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">
          WE ARE HERE FOR YOU
        </h2>
        <p className="text-gray-600">
          At <span className="font-semibold text-green-800">Forest Hotel</span>, we
          take our customers seriously. If you have any enquiries, complaints, or
          requests, please forward them to our support desk, and we will get back
          to you as soon as possible.
        </p>
      </section>

      {/* Form & Contact Info */}
      <section className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-6 shadow-md flex-1 text-center">
          <h2 className="text-xl font-bold text-green-700 mb-4">Visit Us</h2>
          <p className="text-gray-700 mb-1">Pokhara, Kaski, Hotel Forest</p>
          <p className="text-gray-700 mb-1">Phone: +977 981123343</p>
          <p className="text-gray-700">Email: forest_hotel@gmail.com</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex-1">
          <h2 className="text-2xl font-extrabold text-green-700 mb-6 text-center">
            Enquiry Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-green-800 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-green-800 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-green-800 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <LocationMap/>
    </div>
  );
};

export default ContactPage;
