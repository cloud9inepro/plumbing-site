"use client";

import { motion } from "framer-motion";
import { CheckCircle, MapPin, Phone, Clock } from "lucide-react";

const highlights = [
  "Licensed and insured plumbing professionals",
  "Serving all Dallas neighborhoods including Deep Ellum, Uptown & Pleasant Grove",
  "Transparent pricing — no hidden fees",
  "Same-day service available for urgent issues",
  "Advanced diagnostic tools for accurate repairs",
  "4.8 star rated with 44 verified reviews",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Dallas&apos; Trusted <br />
              <span className="text-blue-600">Affordable Plumber</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              MR Cheap Plumber Dallas is your go-to plumbing service for fast,
              reliable, and budget-friendly solutions. Based in Dallas, TX, we
              serve homeowners and businesses across the city — from Deep Ellum
              to Uptown and everywhere in between.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our team of skilled plumbers brings professionalism and care to
              every job, big or small. We believe quality plumbing shouldn&apos;t
              cost a fortune — and we prove it every day.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-blue-600 mt-0.5 shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1!2d-96.8!3d32.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU0JzAwLjAiTiA5NsKwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus&q=37.37+Frankford+Rd+%23287,+Dallas,+TX+75287"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Address</p>
                  <p className="text-sm text-gray-500">
                    37.37 Frankford Rd #287, Dallas, TX 75287
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Phone</p>
                  <a
                    href="tel:+14699667347"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    (469) 966-7347
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Hours</p>
                  <p className="text-sm text-gray-500">
                    Open Daily · Closes 12:00 AM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}