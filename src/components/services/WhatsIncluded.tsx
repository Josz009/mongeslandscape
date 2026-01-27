"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui";
import { SectionHeader } from "@/components/shared";

interface WhatsIncludedProps {
  items: string[];
}

export function WhatsIncluded({ items }: WhatsIncludedProps) {
  const t = useTranslations("serviceTemplate");

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader title={t("whatsIncluded")} />

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-cream rounded-xl"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grass-green flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-near-black">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
