"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export function EmergencyBanner() {
  const t = useTranslations("emergency");
  const tCta = useTranslations("cta");

  return (
    <section className="py-16 bg-earth-brown relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-white/5" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                {t("title")}
              </h2>
              <p className="text-white/80">{t("description")}</p>
            </div>
          </div>

          <a href={formatPhoneLink(BUSINESS_INFO.phone)}>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-earth-brown whitespace-nowrap"
            >
              <Phone className="w-5 h-5 mr-2" />
              {tCta("callNow")}: {BUSINESS_INFO.phone}
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
