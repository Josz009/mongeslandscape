"use client";

import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { Header, Footer } from "@/components/layout";
import {
  ServiceHero,
  WhatsIncluded,
  ServiceBenefits,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { EmergencyBanner } from "@/components/sections";
import { getServiceBySlug } from "@/data/services";

interface ServicePageContentProps {
  slug: string;
}

// Define how many items each service has
const serviceIncludes: Record<string, number> = {
  landscapeMaintenance: 5,
  irrigationSystems: 5,
  landscapeConstruction: 5,
  fenceConstruction: 4,
  trashCleanup: 5,
  emergencyServices: 4,
};

export default function ServicePageContent({ slug }: ServicePageContentProps) {
  const service = getServiceBySlug(slug);

  const t = useTranslations("services");

  if (!service) {
    notFound();
  }

  const name = t(`${service.translationKey}.name`);
  const description = t(`${service.translationKey}.description`);
  const highlight = service.translationKey === "irrigationSystems"
    ? t(`${service.translationKey}.highlight`)
    : undefined;

  // Get includes array - use predefined count to avoid missing message errors
  const includesCount = serviceIncludes[service.translationKey] || 4;
  const includes: string[] = [];
  for (let i = 0; i < includesCount; i++) {
    includes.push(t(`${service.translationKey}.includes.${i}`));
  }

  // Get benefits array (always 3)
  const benefits: { title: string; description: string }[] = [];
  for (let i = 0; i < 3; i++) {
    benefits.push({
      title: t(`${service.translationKey}.benefits.${i}.title`),
      description: t(`${service.translationKey}.benefits.${i}.description`),
    });
  }

  // Get FAQs array (always 4)
  const faqs: { question: string; answer: string }[] = [];
  for (let i = 0; i < 4; i++) {
    faqs.push({
      question: t(`${service.translationKey}.faqs.${i}.question`),
      answer: t(`${service.translationKey}.faqs.${i}.answer`),
    });
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          name={name}
          description={description}
          image={service.image}
          highlight={highlight}
        />
        <WhatsIncluded items={includes} />
        <ServiceBenefits benefits={benefits} />
        <ServiceFAQ faqs={faqs} />
        <EmergencyBanner />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
