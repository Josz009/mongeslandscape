"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Building, Users, Store, Home, ArrowRight, Check } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Container, Card } from "@/components/ui";
import { SectionHeader } from "@/components/shared";
import { ContactSection } from "@/components/sections";

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

export default function WhoWeServePage() {
  const t = useTranslations("whoWeServe");
  const tAudiences = useTranslations("whoWeServe.audiences");
  const tCta = useTranslations("cta");
  const locale = useLocale();

  const audiences = [
    { key: "hoas", slug: "hoas" },
    { key: "propertyManagers", slug: "property-managers" },
    { key: "commercial", slug: "commercial" },
    { key: "residential", slug: "residential" },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-cream">
          <Container>
            <SectionHeader title={t("sectionTitle")} />
          </Container>
        </section>

        {/* Audiences */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {audiences.map((audience) => {
                const Icon = audienceIcons[audience.key as keyof typeof audienceIcons];
                const image = audienceImages[audience.key as keyof typeof audienceImages];
                // Each audience has exactly 4 benefits
                const benefits: string[] = [];
                for (let i = 0; i < 4; i++) {
                  benefits.push(tAudiences(`${audience.key}.benefits.${i}`));
                }

                return (
                  <Link
                    key={audience.key}
                    href={`/${locale}/who-we-serve/${audience.slug}`}
                    className="block group"
                  >
                    <Card className="h-full overflow-hidden p-0">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={image}
                          alt={tAudiences(`${audience.key}.name`)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 group-hover:bg-forest-green flex items-center justify-center transition-colors duration-300">
                          <Icon
                            className="w-6 h-6 text-forest-green group-hover:text-white transition-colors duration-300"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-heading text-2xl font-bold text-near-black mb-2">
                          {tAudiences(`${audience.key}.name`)}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {tAudiences(`${audience.key}.shortDesc`)}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                              <Check className="w-4 h-4 text-grass-green flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <span className="inline-flex items-center gap-2 text-grass-green font-medium group-hover:gap-3 transition-all duration-300">
                          {tCta("learnMore")}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
