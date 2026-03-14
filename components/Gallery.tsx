"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    alt: "Pipe repair work",
    caption: "Pipe Repair",
  },
  {
    src: "https://images.unsplash.com/photo-1585704032915-c3400305e979?w=800&q=80",
    alt: "Drain cleaning",
    caption: "Drain Cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    alt: "Water heater installation",
    caption: "Water Heater Repair",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Bathroom plumbing",
    caption: "Fixture Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    alt: "Kitchen sink repair",
    caption: "Kitchen Plumbing",
  },
  {
    src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
    alt: "Emergency plumbing",
    caption: "Emergency Response",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Photo Gallery
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A glimpse of the quality work we deliver across Dallas every day.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md"
              onClick={() => setSelected(i)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={36}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh]">
                <Image
                  src={images[selected].src}
                  alt={images[selected].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white px-6 py-4">
                <p className="text-gray-800 font-semibold">
                  {images[selected].caption}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}