"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export function TestimonialCard({
  quote,
  name,
  title,
  rating,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-full flex flex-col"
    >
      <Quote className="w-10 h-10 text-grass-green/20 mb-4" />

      <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div>
        <p className="font-heading font-semibold text-near-black">{name}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </motion.div>
  );
}
