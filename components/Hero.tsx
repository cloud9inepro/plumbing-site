"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden"
    >
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
        >
          <Star size={14} fill="white" />
          4.8 Rated · 44 Reviews · Dallas, TX
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          Dallas&apos; Most Affordable <br />
          <span className="text-orange-400">Plumbing Service</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10"
        >
          Fast, reliable, and budget-friendly plumbing solutions for homes and
          businesses across Dallas. Available nearly 24/7.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="tel:+14699667347"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:scale-105"
          >
            <Phone size={20} />
            Call Now — (469) 966-7347
          </a>
            <a
            href="#services"
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold px-8 py-4 rounded-full text-lg transition-all"
          >
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: <Star size={24} fill="orange" className="text-orange-400" />, value: "4.8★", label: "Average Rating" },
            { icon: <Clock size={24} className="text-orange-400" />, value: "24/7", label: "Available Daily" },
            { icon: <Phone size={24} className="text-orange-400" />, value: "Same Day", label: "Service Available" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center gap-2"
            >
              {stat.icon}
              <span className="text-2xl font-extrabold">{stat.value}</span>
              <span className="text-blue-200 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80H1440V30C1200 80 960 0 720 30C480 60 240 0 0 30V80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}