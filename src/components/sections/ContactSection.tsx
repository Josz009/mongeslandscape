"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container, Card } from "@/components/ui";
import { SectionHeader } from "@/components/shared";
import { QuoteForm } from "./QuoteForm";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export function ContactSection() {
  const t = useTranslations("contact");
  const tInfo = useTranslations("contact.info");

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader title={t("sectionTitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="p-8">
              <h3 className="font-heading text-2xl font-bold text-forest-green mb-6">
                {t("formTitle")}
              </h3>
              <QuoteForm />
            </Card>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden bg-cream relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2574&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-heading font-semibold text-lg">
                    Serving Greater Houston
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-cream rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-forest-green mb-6">
                {tInfo("title")}
              </h3>

              <div className="space-y-4">
                <a
                  href={formatPhoneLink(BUSINESS_INFO.phone)}
                  className="flex items-center gap-4 text-near-black hover:text-grass-green transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-forest-green" />
                  </div>
                  <span className="font-medium">{BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-4 text-near-black hover:text-grass-green transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-forest-green" />
                  </div>
                  <span className="font-medium">{BUSINESS_INFO.email}</span>
                </a>

                <div className="flex items-center gap-4 text-near-black">
                  <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-forest-green" />
                  </div>
                  <span className="font-medium">{tInfo("serviceArea")}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-forest-green" />
                  </div>
                  <span className="font-heading font-semibold text-forest-green">
                    {tInfo("hoursTitle")}
                  </span>
                </div>
                <div className="space-y-1 text-gray-600 ml-14">
                  <p>{tInfo("weekdays")}</p>
                  <p>{tInfo("saturday")}</p>
                  <p>{tInfo("sunday")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
