"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const notify = () => {
    toast.error("Please Login ");
  };


  return (
    <nav
      className={`flex justify-between items-center p-5 px-65 sticky top-0 left-0 right-0 transition-colors duration-300 ${
        color
          ? "bg-green-950 text-white shadow-lg"
          : "bg-transparent text-black"
      } z-10`}
    >
      <div>
        <Link className="font-extrabold text-3xl" href="/">
          Hotel
        </Link>
      </div>

      <div className="flex gap-10 font-bold items-center">  
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/">
          Home
        </Link>
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/about">
          About Us
        </Link>
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/services">Services</Link>
        <Link className="relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/contact">Contact</Link>
        <Link className="relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/gallery">Gallery</Link>
      </div>

      <div className="flex items-center pr-10">
          <>
            <Link href="/rooms"
                className=" font-bold bg-teal-700 rounded-3xl p-2 px-5 hover:bg-teal-600"
              >
                Book Now
              </Link>

             <img
              src="1.jpg"
              alt="avatar"
              className="w-9 h-9 rounded-full ml-5"
            />
          </>
       
     
      </div>
    </nav>
  );
};

export default Navbar;
