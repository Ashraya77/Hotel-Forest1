"use client";
import LocationMap from "@/components/LocationMap";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Form Submitted!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="h-410 bg-gray-50 text-gray-800">
      <header className="text-center text-white py-12 bg-linear-to-r from-green-500 to-green-900 h-100 pt-25 absolute top-20 right-0 left-0 ">
        <h1 className="text-5xl font-extrabold">Contact Us</h1>
        <p className="text-gray-200 mt-2">
          We’d love to hear from you! Get in touch with us today.
        </p>
      </header>

    
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 relative top-70 bg-white rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center justify-center">
          <img
            src="/13.jpg"
            alt="Contact illustration"
            className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
          />
        </div>

        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-green-800 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-green-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
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
                className="w-full border border-green-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
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
                className="w-full border border-green-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-all shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-16 px-6 relative top-70">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <MapPin className="mx-auto mb-3 text-green-700 w-8 h-8" />
          <h3 className="text-lg font-bold text-green-700 mb-2">Visit Us</h3>
          <p className="text-gray-700">Pokhara, Kaski, Hotel Forest</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <Phone className="mx-auto mb-3 text-green-700 w-8 h-8" />
          <h3 className="text-lg font-bold text-green-700 mb-2">Call Us</h3>
          <p className="text-gray-700">+977 981123343</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <Mail className="mx-auto mb-3 text-green-700 w-8 h-8" />
          <h3 className="text-lg font-bold text-green-700 mb-2">Email Us</h3>
          <p className="text-gray-700">forest_hotel@gmail.com</p>
        </div>
      </section>

      <div className="mt-16 relative top-70 left-0 right-0 bottom-0">
        <LocationMap />
      </div>
    </div>
  );
};

export default ContactPage;
