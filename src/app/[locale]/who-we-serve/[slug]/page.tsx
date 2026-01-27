import { getAllAudienceSlugs } from "@/data/audiences";
import AudiencePageContent from "@/components/pages/AudiencePageContent";

const locales = ["en", "es"];

export function generateStaticParams() {
  const slugs = getAllAudienceSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

interface AudiencePageProps {
  params: Promise<{ slug: string }>;
}

export default async function AudiencePage({ params }: AudiencePageProps) {
  const { slug } = await params;
  return <AudiencePageContent slug={slug} />;
}
