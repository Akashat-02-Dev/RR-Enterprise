"use client";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-brand-900">
          <Leaf className={`${scrolled ? "w-6 h-6 text-eco-400" : "w-6 h-6 text-eco-100"}` }/>
          <span className={`font-poppins font-bold text-xl ${scrolled ?"text-eco-400 tracking-tight" : "text-eco-100 tracking-tight"}`}>RR Enterprise</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-poppins text-sm font-medium">
          {["About", "Products", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className={`${scrolled ? "text-eco-400 hover:text-brand-700" : "text-eco-100 hover:text-brand-700"} transition-colors`}>
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-eco-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/20 backdrop-blur-lg shadow-lg py-4 flex flex-col items-center gap-4">
          {["About", "Products", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-poppins text-eco-400 font-medium">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}