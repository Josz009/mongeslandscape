"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Sparkles } from "lucide-react";
import { Container, Card } from "@/components/ui";
import { SectionHeader } from "@/components/shared";

interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

const icons = [TrendingUp, Shield, Sparkles];

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  const t = useTranslations("serviceTemplate");

  return (
    <section className="py-20 bg-cream">
      <Container>
        <SectionHeader title={t("benefits")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-forest-green" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-near-black mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
