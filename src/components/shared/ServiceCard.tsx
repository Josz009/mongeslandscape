"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Leaf,
  Droplets,
  Shovel,
  Fence,
  Trash2,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
  icon: string;
  image?: string;
  highlight?: boolean;
  highlightText?: string;
}

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  droplet: Droplets,
  shovel: Shovel,
  fence: Fence,
  trash: Trash2,
  alert: AlertTriangle,
};

export function ServiceCard({
  name,
  description,
  href,
  icon,
  image,
  highlight = false,
  highlightText,
}: ServiceCardProps) {
  const t = useTranslations("cta");
  const Icon = iconMap[icon] || Leaf;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className="block h-full">
        <motion.div
          className={cn(
            "relative h-full bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] group",
            highlight && "ring-2 ring-grass-green"
          )}
          whileHover={{
            y: -8,
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {highlight && highlightText && (
            <div className="absolute top-4 left-4 z-10 bg-grass-green text-white text-xs font-medium px-3 py-1 rounded-full">
              {highlightText}
            </div>
          )}

          {/* Image */}
          {image && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div
                className={cn(
                  "absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                  "bg-white/90 group-hover:bg-grass-green"
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6 transition-colors duration-300",
                    "text-forest-green group-hover:text-white"
                  )}
                  strokeWidth={1.5}
                />
              </div>
            </div>
          )}

          <div className={cn("flex flex-col", image ? "p-5" : "p-6 h-full")}>
            {/* Icon for cards without image */}
            {!image && (
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
                  "bg-cream group-hover:bg-grass-green"
                )}
              >
                <Icon
                  className={cn(
                    "w-7 h-7 transition-colors duration-300",
                    "text-forest-green group-hover:text-white"
                  )}
                  strokeWidth={1.5}
                />
              </div>
            )}

            <h3 className="font-heading text-xl font-semibold text-near-black mb-2">
              {name}
            </h3>

            <p className="text-gray-600 mb-4 flex-grow">{description}</p>

            <span className="text-grass-green font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              {t("learnMore")}
              <span className="text-lg">&rarr;</span>
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
