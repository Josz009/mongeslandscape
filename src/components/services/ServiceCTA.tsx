"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Button } from "@/components/ui";

export function ServiceCTA() {
  const t = useTranslations("serviceTemplate");
  const tCta = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="py-20 bg-forest-green relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-grass-green/20" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-grass-green/10" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {t("readyToStart")}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t("ctaDescription")}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-forest-green"
            >
              {tCta("requestQuote")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
