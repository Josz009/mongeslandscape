"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";

interface WhyGetQuoteProps {
  variant?: "section" | "card";
}

export function WhyGetQuote({ variant = "section" }: WhyGetQuoteProps) {
  const t = useTranslations("whyGetQuote");
  const locale = useLocale();

  const points = [
    t("points.consultation"),
    t("points.customPlan"),
    t("points.noObligation"),
    t("points.promotions"),
  ];

  if (variant === "card") {
    return (
      <div className="bg-forest-green/5 border border-forest-green/15 rounded-2xl p-8">
        <h3 className="font-heading text-xl font-bold text-forest-green mb-3">
          {t("title")}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {t("description")}
        </p>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-grass-green flex-shrink-0" />
              <span className="text-near-black font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-forest-green via-forest-green to-grass-green">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full border border-white/20"
        />
      </div>

      {/* Floating dots */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-grass-green/40"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] w-2 h-2 rounded-full bg-white/20"
      />
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-[20%] w-2 h-2 rounded-full bg-white/15"
      />

      <Container>
        <div className="relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10">
              <span className="w-2 h-2 rounded-full bg-grass-green animate-pulse" />
              {t("points.promotions")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-bold text-white text-center mb-5 leading-tight"
          >
            {t("title")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 text-lg md:text-xl text-center mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* Points as glass cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-4xl mx-auto">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center"
              >
                <CheckCircle className="w-7 h-7 text-grass-green mx-auto mb-3" />
                <span className="text-white font-medium text-sm leading-snug block">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <Link href={`/${locale}/contact`}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-forest-green font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {t("cta")}
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
