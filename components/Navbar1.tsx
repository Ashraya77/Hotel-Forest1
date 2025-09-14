"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar1 = () => {
  const [color, setColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`sticky flex justify-between items-center px-10 top-0 p-3 left-0 right-0 mt-10 transition-colors duration-300 rounded-4xl mx-60 ${
        color ? "bg-green-950 text-white shadow-lg" : "bg-white text-black"
      } z-10`}
    >
      <div>
        <Link className="font-extrabold text-3xl" href="/">
          Hotel
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 font-bold items-center">
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/">
          Home
        </Link>
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/about">
          About Us
        </Link>
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/services">
          Services
        </Link>
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/contact">
          Contact
        </Link>
        <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full" href="/gallery">
          Gallery
        </Link>
      </div>

      <div className="hidden md:flex items-center pr-10">
        <Link
          href="/rooms"
          className="font-bold bg-teal-700 rounded-3xl p-2 px-5 hover:bg-teal-600"
        >
          Book Now
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-green-950 text-white flex flex-col gap-5 p-5 mt-2">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link
            href="/rooms"
            className="font-bold bg-teal-700 rounded-3xl p-2 px-5 hover:bg-teal-600"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;


 <div className="hidden md:flex gap-10 font-bold items-center uppercase tracking-wider">
        {["Home", "About Us", "Services", "Contact", "Gallery"].map((link) => (
          <Link
            key={link}
            href={`/${link === "Home" ? "" : link.toLowerCase().replace(" ", "-")}`}
            className="relative text-gray-800 hover:text-green-700 transition-all after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:w-full"
          >
            {link}
          </Link>
        ))}
      </div>

      const linkClasses = (href: string) =>
    `relative text-gray-800 transition-all after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 after:ease-out
     hover:text-green-700 hover:after:left-0 hover:after:w-full
     ${pathname === href ? "text-green-700" : ""}`;
  return (
    <nav
      className={`flex justify-between items-center p-5 px-5 md:px-65 sticky top-0 left-0 right-0 transition-colors duration-300 ${
        color ? "bg-[#faf7f0] text-black shadow-lg" : "bg-transparent text-black"
      } z-10`}
    >
    
      <div>
        <Link className="font-extrabold text-[#28382C] text-3xl" href="/">
          Hotel
        </Link>
      </div>

      <div className="hidden md:flex gap-10 font-bold items-center uppercase tracking-wider">
       <Link href="/" className={linkClasses("/")}>
        Home
      </Link>
      <Link href="/about" className={linkClasses("/about")}>
        About Us
      </Link>
      <Link href="/services" className={linkClasses("/services")}>
        Services
      </Link>
      <Link href="/contact" className={linkClasses("/contact")}>
        Contact
      </Link>
      <Link href="/gallery" className={linkClasses("/gallery")}>
        Gallery
      </Link>
      </div>