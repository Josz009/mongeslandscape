"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Building, Users, Store, Home, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { SectionHeader } from "@/components/shared";

const audienceIcons = {
  hoas: Building,
  propertyManagers: Users,
  commercial: Store,
  residential: Home,
};

const audienceImages = {
  hoas: "/images/services/hoa-common-area.jpg",
  propertyManagers: "/images/services/commercial-property.jpg",
  commercial: "/images/services/commercial-mowing.jpg",
  residential: "/images/services/residential-crew.jpg",
};

export function WhoWeServe() {
  const t = useTranslations("whoWeServe");
  const tAudiences = useTranslations("whoWeServe.audiences");
  const tCta = useTranslations("cta");
  const locale = useLocale();

  const audiences = [
    { key: "hoas", href: `/${locale}/who-we-serve/hoas` },
    { key: "propertyManagers", href: `/${locale}/who-we-serve/property-managers` },
    { key: "commercial", href: `/${locale}/who-we-serve/commercial` },
    { key: "residential", href: `/${locale}/who-we-serve/residential` },
  ];

  return (
    <section className="py-20 bg-cream">
      <Container>
        <SectionHeader title={t("sectionTitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audienceIcons[audience.key as keyof typeof audienceIcons];
            const image = audienceImages[audience.key as keyof typeof audienceImages];
            return (
              <motion.div
                key={audience.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={audience.href} className="block h-full">
                  <motion.div
                    className="h-full bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] group"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={image}
                        alt={tAudiences(`${audience.key}.name`)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/90 group-hover:bg-forest-green flex items-center justify-center transition-colors duration-300">
                        <Icon
                          className="w-5 h-5 text-forest-green group-hover:text-white transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-near-black mb-2">
                        {tAudiences(`${audience.key}.name`)}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {tAudiences(`${audience.key}.shortDesc`)}
                      </p>

                      <span className="inline-flex items-center gap-2 text-grass-green font-medium text-sm group-hover:gap-3 transition-all duration-300">
                        {tCta("learnMore")}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
