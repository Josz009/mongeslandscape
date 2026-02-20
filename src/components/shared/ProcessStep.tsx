"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-grass-green to-cream" />
      )}

      {/* Number Badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative z-10 w-16 h-16 rounded-full bg-forest-green text-white flex items-center justify-center font-heading text-2xl font-bold mb-4 shadow-lg"
      >
        {number}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-heading text-xl font-semibold text-near-black mb-2">
          {title}
        </h3>
        <p className="text-gray-600 md:max-w-[200px]">{description}</p>
      </motion.div>
    </div>
  );
}
