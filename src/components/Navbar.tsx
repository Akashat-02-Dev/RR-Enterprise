"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 

const navLinks = [
  { name: "About", path: "/#about" },
  { name: "Products", path: "/shop" }, 
  { name: "Contact", path: "/#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-eco-200/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
<Link href="/" className="flex items-center gap-2">
          {/* The parent div controls the size transitions */}
          <div className={`relative transition-all duration-300 ${scrolled ? 'w-[200px] h-14' : 'w-[320px] h-20'}`}>
            <Image 
              src="/R&R Enterprise Logo.png" 
              alt="R&R Enterprise Logo" 
              fill
              priority
              // Updated sizes to reflect the new larger maximum width
              sizes="(max-width: 768px) 300px, 320px"
              /* Removed style={{ width: "auto" }} to fix the crash. object-contain handles the aspect ratio instead! */
              className="object-contain drop-shadow-md"
            />
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-montserrat text-sm font-semibold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`${scrolled ? "text-eco-400 hover:text-eco-300" : "text-white hover:text-eco-400"} transition-colors drop-shadow-sm`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={`w-6 h-6 ${scrolled ? 'text-eco-200' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-eco-200' : 'text-white'}`} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-eco-500/95 backdrop-blur-lg shadow-lg py-4 flex flex-col items-center gap-4 border-t border-eco-200/20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsOpen(false)} 
              className="font-montserrat text-eco-200 hover:text-eco-300 font-semibold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}