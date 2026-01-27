import { getAllServiceSlugs } from "@/data/services";
import ServicePageContent from "@/components/pages/ServicePageContent";

const locales = ["en", "es"];

export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  return <ServicePageContent slug={slug} />;
}
