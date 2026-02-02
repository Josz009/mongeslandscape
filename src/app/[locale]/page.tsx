import { setRequestLocale } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import {
  Hero,
  ServicesOverview,
  WhyChooseUs,
  ProcessTimeline,
  WhoWeServe,
  Testimonials,
  EmergencyBanner,
  ContactSection,
  WhyGetQuote,
} from "@/components/sections";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <ProcessTimeline />
        <WhoWeServe />
        <Testimonials />
        <EmergencyBanner />
        <WhyGetQuote />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
