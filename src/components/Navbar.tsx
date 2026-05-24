"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-eco-500/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo integrated with responsive sizing */}
          <img 
            src="/R&R Enterprise Logo.png" 
            alt="R&R Enterprise Logo" 
            className={`transition-all duration-300 object-contain ${scrolled ? 'h-10' : 'h-14 drop-shadow-md'}`}
          />
        </Link>

        {/* Desktop Nav using Montserrat */}
        <div className="hidden md:flex gap-8 font-montserrat text-sm font-semibold">
          {["About", "Products", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className={`${scrolled ? "text-eco-200 hover:text-eco-300" : "text-white hover:text-eco-200"} transition-colors drop-shadow-sm`}>
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-eco-200' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-eco-200' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-eco-500/95 backdrop-blur-lg shadow-lg py-4 flex flex-col items-center gap-4 border-t border-eco-200/20">
          {["About", "Products", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-montserrat text-eco-200 hover:text-eco-300 font-semibold transition-colors">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}