"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

interface ServiceHeroProps {
  name: string;
  description: string;
  image: string;
  highlight?: string;
}

export function ServiceHero({
  name,
  description,
  image,
  highlight,
}: ServiceHeroProps) {
  const tCta = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="relative min-h-[60vh] flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-near-black/80 via-near-black/60 to-near-black/40" />
      </div>

      <Container className="relative z-10 py-16">
        <div className="max-w-2xl">
          {highlight && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-block bg-grass-green text-white text-sm font-medium px-4 py-1.5 rounded-full">
                {highlight}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href={`/${locale}/contact`}>
              <Button size="lg">{tCta("getQuote")}</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
