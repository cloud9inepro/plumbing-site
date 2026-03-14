"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "River Prince",
    date: "1 week ago",
    review:
      "A damaged shut-off valve in Pleasant Grove was replaced quickly by MR Cheap Plumber Dallas during an urgent visit. Super fast and professional!",
    rating: 5,
  },
  {
    name: "Zion Jamir",
    date: "3 weeks ago",
    review:
      "A major drain clog in Deep Ellum was cleared efficiently by MR Cheap Plumber Dallas the same day we called. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jakobe Tyler",
    date: "3 weeks ago",
    review:
      "Hidden wall leakage in Uptown was detected accurately by MR Cheap Plumber Dallas using proper diagnostic tools. Meticulous work!",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    date: "1 month ago",
    review:
      "I can't say enough good things about the plumbing service I received. Affordable, fast, and they left everything clean.",
    rating: 5,
  },
  {
    name: "Marcus Cole",
    date: "1 month ago",
    review:
      "Called them for an emergency late at night and they showed up within the hour. Fixed the burst pipe quickly and at a fair price.",
    rating: 5,
  },
  {
    name: "Diane Watson",
    date: "2 months ago",
    review:
      "Water heater repair was done same day. The technician was knowledgeable, polite, and explained everything clearly. Great service!",
    rating: 5,
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-orange-400" : "text-gray-300"}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
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
            What Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-gray-700 font-bold text-lg">4.8</span>
            <span className="text-gray-400 text-sm">· 44 reviews on Google</span>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
            >
              {/* Top */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                &ldquo;{review.review}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
            <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-4 rounded-full transition-all"
          >
            See All 44 Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}