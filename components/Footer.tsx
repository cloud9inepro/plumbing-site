"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold tracking-tight">
              MR Cheap <span className="text-orange-400">Plumber</span>
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Affordable, fast, and reliable plumbing services across Dallas, TX.
              Available nearly 24/7 for all your plumbing needs.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-9 h-9 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Drain Cleaning",
                "Pipe Repair",
                "Water Heater Repair",
                "Fixture Installation",
                "Emergency Plumbing",
                "Leak Detection",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm">
                  37.37 Frankford Rd #287, Dallas, TX 75287
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+14699667347"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  (469) 966-7347
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm">
                  Open Daily · Closes 12:00 AM
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+14699667347"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-all"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} MR Cheap Plumber Dallas. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs">
            Serving Dallas, TX · Deep Ellum · Uptown · Pleasant Grove
          </p>
        </div>
      </div>
    </footer>
  );
}