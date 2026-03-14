"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = ["Services", "About", "Gallery", "Reviews", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-extrabold text-xl tracking-tight">
            MR Cheap <span className="text-orange-500">Plumber</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+14699667347"
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
        >
          <Phone size={15} />
          (469) 966-7347
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg px-4 pb-4"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left py-3 text-gray-700 font-medium border-b border-gray-100 hover:text-blue-600 transition-colors"
              >
                {link}
              </button>
            ))}
            <a
              href="tel:+14699667347"
              className="mt-4 flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold py-3 rounded-full"
            >
              <Phone size={15} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}