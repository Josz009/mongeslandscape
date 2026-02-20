"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Container, Card } from "@/components/ui";
import { SectionHeader } from "@/components/shared";
import { QuoteForm, EmergencyBanner, WhyGetQuote } from "@/components/sections";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tInfo = useTranslations("contact.info");
  const tPage = useTranslations("contactPage");

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

        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-forest-green" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-near-black mb-2">
                  {tPage("callUs")}
                </h3>
                <a
                  href={formatPhoneLink(BUSINESS_INFO.phone)}
                  className="text-grass-green hover:text-forest-green font-medium text-lg transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </Card>

              <Card className="text-center p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-forest-green" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-near-black mb-2">
                  {tPage("emailUs")}
                </h3>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-grass-green hover:text-forest-green font-medium transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </Card>

              <Card className="text-center p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-forest-green" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-near-black mb-2">
                  {tPage("serviceArea")}
                </h3>
                <p className="text-gray-600">{tInfo("serviceArea")}</p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <Card hover={false} className="p-8">
                  <h2 className="font-heading text-2xl font-bold text-forest-green mb-6">
                    {t("formTitle")}
                  </h2>
                  <QuoteForm />
                </Card>
              </div>

              {/* Map, Hours & Why Get Quote */}
              <div className="space-y-8">
                {/* Why Get a Quote */}
                <WhyGetQuote variant="card" />

                {/* Real Houston Map - OpenStreetMap */}
                <div className="aspect-video rounded-xl overflow-hidden bg-cream relative shadow-lg">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-96.09832763671876%2C29.47772556806015%2C-94.88891601562501%2C30.192148703738967&amp;layer=mapnik&amp;marker=29.7604%2C-95.3698"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    title="Monge's Landscape Service Area - Houston, TX"
                    className="absolute inset-0"
                  />
                </div>

                {/* Hours */}
                <Card hover={false} className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-forest-green" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-forest-green">
                      {tInfo("hoursTitle")}
                    </h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                      <span>{tPage("mondayFriday")}</span>
                      <span className="font-medium">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{tPage("saturday")}</span>
                      <span className="font-medium">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{tPage("sunday")}</span>
                      <span className="font-medium">{tPage("closed")}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {tPage("emergencyNote")}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <EmergencyBanner />
      </main>
      <Footer />
    </>
  );
}
