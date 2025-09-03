"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookingComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const handleBookNow = () => {
    if (!startDate || !endDate) {
      toast.error("Please select a date range.");
      return;
    }
    router.push("/rooms")
    toast.success(
      `Booking from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} for ${guests} guest(s)`
    );
  };

  return (
    <div className="relative mx-100 px-30 mt-10 p-6 bg-white shadow-lg rounded-4xl flex items-center gap-20 justify-center">
      {/* Date Picker */}
      <div className="flex items-center gap-3">
        <label className="text-lg font-semibold">Dates</label>
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          placeholderText="Select dates"
          className="border p-2 rounded w-48"
        />
      </div>

      {/* Guests */}
      <div className="flex items-center gap-3">
        <label className="text-lg font-semibold">Guests</label>
        <input
          type="number"
          min={1}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="border p-2 rounded w-24"
        />
      </div>

      {/* Book Now */}
      <button
        onClick={handleBookNow}
        className="bg-green-600 text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-700 transition"
      >
        Select Room
      </button>
    </div>
  );
};

export default BookingComponent;
