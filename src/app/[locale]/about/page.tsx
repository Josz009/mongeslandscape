"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Briefcase, Clock, MessageSquare, Award } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Container, Card } from "@/components/ui";
import { SectionHeader } from "@/components/shared";
import { ProcessTimeline, ContactSection } from "@/components/sections";

const valueIcons = [Briefcase, Clock, MessageSquare, Award];

export default function AboutPage() {
  const t = useTranslations("about");
  const tPage = useTranslations("aboutPage");

  const values = [0, 1, 2, 3];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-forest-green mb-6">
                  {t("title")}
                </h1>
                <div className="prose prose-lg">
                  <h2 className="font-heading text-2xl font-semibold text-near-black mb-4">
                    {t("mission.title")}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t("mission.description")}
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/crew-at-estate.jpg"
                  alt="Monge's Landscape crew at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeader title={t("values.title")} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((index) => {
                const Icon = valueIcons[index];
                return (
                  <Card key={index} className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-forest-green" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-near-black mb-2">
                      {t(`values.items.${index}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`values.items.${index}.description`)}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Process */}
        <ProcessTimeline />

        {/* Why We're Different */}
        <section className="py-20 bg-cream">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-6">
                {tPage("whyDifferent")}
              </h2>
              <div className="space-y-6 text-left">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tPage("paragraph1")}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tPage("paragraph2")}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tPage("paragraph3")}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
