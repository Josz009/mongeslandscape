"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Building2,
  ClipboardCheck,
  MessageSquare,
  Lightbulb,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { Container } from "@/components/ui";
import { SectionHeader } from "@/components/shared";

const icons = [Building2, ClipboardCheck, MessageSquare, Lightbulb, ShieldCheck, Heart];

export function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");

  const differentiators = [
    { icon: icons[0] },
    { icon: icons[1] },
    { icon: icons[2] },
    { icon: icons[3] },
    { icon: icons[4] },
    { icon: icons[5] },
  ];

  return (
    <section className="py-20 bg-cream">
      <Container>
        <SectionHeader title={t("sectionTitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-forest-green/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-forest-green" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-near-black mb-2">
                    {t(`differentiators.${index}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`differentiators.${index}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
