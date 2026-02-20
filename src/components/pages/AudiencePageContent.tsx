"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Container, Button } from "@/components/ui";
import { ServicesOverview, ContactSection } from "@/components/sections";
import { getAudienceBySlug } from "@/data/audiences";

interface AudiencePageContentProps {
  slug: string;
}

export default function AudiencePageContent({ slug }: AudiencePageContentProps) {
  const locale = useLocale();
  const audience = getAudienceBySlug(slug);

  const t = useTranslations("whoWeServe.audiences");
  const tCta = useTranslations("cta");
  const tPage = useTranslations("audiencePage");

  if (!audience) {
    notFound();
  }

  const name = t(`${audience.translationKey}.name`);
  const description = t(`${audience.translationKey}.description`);

  // Get benefits array (always 4 benefits per audience)
  const benefits: string[] = [];
  for (let i = 0; i < 4; i++) {
    benefits.push(t(`${audience.translationKey}.benefits.${i}`));
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${audience.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-near-black/80 via-near-black/60 to-near-black/40" />
          </div>

          <Container className="relative z-10 py-16">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {name}
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {description}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button size="lg">{tCta("getQuote")}</Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl font-bold text-forest-green mb-8 text-center">
                {tPage("whyChooseUs", { name })}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grass-green flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-near-black">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <ServicesOverview />

        {/* CTA */}
        <section className="py-20 bg-forest-green">
          <Container>
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                {tPage("readyToWork")}
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {tPage("ctaDescription")}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-forest-green"
                >
                  {tCta("contactUs")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
