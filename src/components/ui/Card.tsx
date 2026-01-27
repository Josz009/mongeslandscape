"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  if (hover) {
    return (
      <motion.div
        className={cn(
          "bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          "transition-shadow duration-300",
          onClick && "cursor-pointer",
          className
        )}
        whileHover={{
          y: -8,
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
