"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

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
    <section className="py-20 bg-forest-green">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            {t("description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <CheckCircle className="w-5 h-5 text-grass-green flex-shrink-0" />
                <span className="text-white font-medium">{point}</span>
              </motion.div>
            ))}
          </div>

          <Link href={`/${locale}/contact`}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-forest-green hover:bg-cream"
            >
              {t("cta")}
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
