"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
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

 
 
  const toggleMenu = () => setMenuOpen(!menuOpen);

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

      <div className="hidden md:flex items-center pr-10">
        <Link
          href="/rooms"
          className="font-bold bg-green-700 text-white rounded-3xl p-2 px-5 hover:bg-green-900"
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

export default Navbar;
