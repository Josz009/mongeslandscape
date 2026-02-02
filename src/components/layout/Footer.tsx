"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Container } from "@/components/ui";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tServices = useTranslations("services");
  const tAudiences = useTranslations("whoWeServe.audiences");
  const tContact = useTranslations("contact.info");
  const locale = useLocale();

  const services = [
    {
      label: tServices("landscapeMaintenance.name"),
      href: `/${locale}/services/landscape-maintenance`,
    },
    {
      label: tServices("irrigationSystems.name"),
      href: `/${locale}/services/irrigation-systems`,
    },
    {
      label: tServices("landscapeConstruction.name"),
      href: `/${locale}/services/landscape-construction`,
    },
    {
      label: tServices("fenceConstruction.name"),
      href: `/${locale}/services/fence-construction`,
    },
    {
      label: tServices("trashCleanup.name"),
      href: `/${locale}/services/trash-cleanup`,
    },
    {
      label: tServices("emergencyServices.name"),
      href: `/${locale}/services/emergency-services`,
    },
  ];

  const audiences = [
    { label: tAudiences("hoas.name"), href: `/${locale}/who-we-serve/hoas` },
    {
      label: tAudiences("propertyManagers.name"),
      href: `/${locale}/who-we-serve/property-managers`,
    },
    {
      label: tAudiences("commercial.name"),
      href: `/${locale}/who-we-serve/commercial`,
    },
    {
      label: tAudiences("residential.name"),
      href: `/${locale}/who-we-serve/residential`,
    },
  ];

  return (
    <footer className="bg-near-black text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Link href={`/${locale}`} className="inline-block mb-4">
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-bold text-white">
                    Monge&apos;s
                  </span>
                  <span className="font-heading text-lg font-semibold text-grass-green -mt-1">
                    Landscape Services
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t("description")}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-grass-green transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-grass-green transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">
                {t("servicesTitle")}
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-grass-green transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">
                {t("audiencesTitle")}
              </h3>
              <ul className="space-y-3">
                {audiences.map((audience) => (
                  <li key={audience.href}>
                    <Link
                      href={audience.href}
                      className="text-gray-400 hover:text-grass-green transition-colors"
                    >
                      {audience.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={`/${locale}/portfolio`}
                  className="text-gray-400 hover:text-grass-green transition-colors"
                >
                  {tNav("portfolio")}
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-grass-green transition-colors"
                >
                  {tNav("about")}
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">
                {t("contactTitle")}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={formatPhoneLink(BUSINESS_INFO.phone)}
                    className="flex items-center gap-3 text-gray-400 hover:text-grass-green transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-grass-green transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    {BUSINESS_INFO.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{tContact("serviceArea")}</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-medium mb-2">{tContact("hoursTitle")}</h4>
                <p className="text-gray-400 text-sm">{tContact("weekdays")}</p>
                <p className="text-gray-400 text-sm">{tContact("saturday")}</p>
                <p className="text-gray-400 text-sm">{tContact("sunday")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">{t("copyright")}</p>
            <div className="flex items-center gap-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-400 text-sm hover:text-grass-green transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-400 text-sm hover:text-grass-green transition-colors"
              >
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
