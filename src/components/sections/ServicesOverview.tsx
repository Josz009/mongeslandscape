"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { SectionHeader, ServiceCard } from "@/components/shared";

export function ServicesOverview() {
  const t = useTranslations("services");
  const locale = useLocale();

  const services = [
    {
      key: "landscapeMaintenance",
      icon: "leaf",
      href: `/${locale}/services/landscape-maintenance`,
      image: "/images/services/landscape-maintenance.jpg",
    },
    {
      key: "irrigationSystems",
      icon: "droplet",
      href: `/${locale}/services/irrigation-systems`,
      image: "/images/services/irrigation-sunset.jpg",
      highlight: true,
    },
    {
      key: "landscapeConstruction",
      icon: "shovel",
      href: `/${locale}/services/landscape-construction`,
      image: "/images/services/sod-installation.jpg",
    },
    {
      key: "fenceConstruction",
      icon: "fence",
      href: `/${locale}/services/fence-construction`,
      image: "/images/services/new-construction.jpg",
    },
    {
      key: "trashCleanup",
      icon: "trash",
      href: `/${locale}/services/trash-cleanup`,
      image: "/images/services/tree-removal.jpg",
    },
    {
      key: "emergencyServices",
      icon: "alert",
      href: `/${locale}/services/emergency-services`,
      image: "/images/services/demolition.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              name={t(`${service.key}.name`)}
              description={t(`${service.key}.shortDesc`)}
              href={service.href}
              icon={service.icon}
              image={service.image}
              highlight={service.highlight}
              highlightText={service.highlight ? t(`${service.key}.highlight`) : undefined}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
