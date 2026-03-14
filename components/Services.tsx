"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Wrench,
  Flame,
  ShowerHead,
  AlertTriangle,
  Search,
} from "lucide-react";

const services = [
  {
    icon: <Droplets size={32} className="text-blue-600" />,
    title: "Drain Cleaning",
    description:
      "Fast and effective drain unclogging for kitchens, bathrooms, and main lines across Dallas.",
  },
  {
    icon: <Wrench size={32} className="text-blue-600" />,
    title: "Pipe Repair & Replacement",
    description:
      "Expert repair of burst, leaking, or corroded pipes with minimal disruption to your home.",
  },
  {
    icon: <Flame size={32} className="text-blue-600" />,
    title: "Water Heater Repair",
    description:
      "Diagnosis and repair of all water heater types — gas, electric, and tankless units.",
  },
  {
    icon: <ShowerHead size={32} className="text-blue-600" />,
    title: "Fixture Installation",
    description:
      "Professional installation of faucets, toilets, showers, and other plumbing fixtures.",
  },
  {
    icon: <AlertTriangle size={32} className="text-blue-600" />,
    title: "Emergency Plumbing",
    description:
      "Urgent plumbing issues handled fast. We respond quickly to minimize water damage.",
  },
  {
    icon: <Search size={32} className="text-blue-600" />,
    title: "Leak Detection",
    description:
      "Advanced diagnostic tools to accurately locate hidden leaks inside walls and floors.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Our Plumbing Services
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            From minor fixes to major repairs, we handle it all at prices that
            won&apos;t break the bank.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}