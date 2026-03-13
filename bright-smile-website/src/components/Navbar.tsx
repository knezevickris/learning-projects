"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { siteConfig } from "@/config/site";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="absolute top-0 w-full z-50 py-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-white dark:bg-dental-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-1.5 border border-dental-100 dark:border-dental-700">
              <Image 
                src="/images/logo.png" 
                alt={siteConfig.name} 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-dental-700 dark:text-white leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-dental-500 font-bold">
                {siteConfig.tagline.split(",")[0]}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-dental-600 ${
                    pathname === link.href
                      ? "text-dental-600"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-dental-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-dental-700 hover:shadow-xl hover:shadow-dental-500/20 transition-all active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white/98 dark:bg-[var(--background)]/98 backdrop-blur-md border-b transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                pathname === link.href
                ? "bg-dental-50 text-dental-600"
                : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full mt-4 bg-dental-600 text-white text-center py-4 rounded-xl font-bold shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
