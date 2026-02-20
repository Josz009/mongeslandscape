import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import "../globals.css";

// Import messages directly for static export
import enMessages from "@/messages/en.json";
import esMessages from "@/messages/es.json";

const messages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  es: esMessages,
};

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Monge's Landscape | Professional Landscape Services in Houston",
    template: "%s | Monge's Landscape",
  },
  description:
    "Professional landscape services for Houston properties. Comprehensive solutions for HOAs, property managers, commercial, and residential properties. Bilingual service available.",
  keywords: [
    "landscape",
    "landscaping",
    "Houston",
    "lawn care",
    "irrigation",
    "fence",
    "HOA",
    "property management",
  ],
  authors: [{ name: "Monge's Landscape" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    siteName: "Monge's Landscape",
    url: "https://mongelandscape.com",
    images: [
      {
        url: "https://mongelandscape.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monge's Landscape Services - Professional Landscaping in Houston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monge's Landscape | Professional Landscape Services in Houston",
    description:
      "Professional landscape services for Houston properties. Comprehensive solutions for HOAs, property managers, commercial, and residential properties.",
    images: ["https://mongelandscape.com/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2D5016",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const localeMessages = messages[locale as Locale];

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased bg-white text-near-black`}
      >
        <NextIntlClientProvider messages={localeMessages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
