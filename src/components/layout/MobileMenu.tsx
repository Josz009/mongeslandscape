"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const t = useTranslations("nav");
  const tCta = useTranslations("cta");
  const tServices = useTranslations("services");
  const tAudiences = useTranslations("whoWeServe.audiences");
  const tMobile = useTranslations("mobileMenu");
  const locale = useLocale();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleExpanded = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedItems([]);
  };

  const navItems = [
    { label: t("home"), href: `/${locale}` },
    {
      label: t("services"),
      href: `/${locale}/services`,
      key: "services",
      children: [
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
      ],
    },
    {
      label: t("whoWeServe"),
      href: `/${locale}/who-we-serve`,
      key: "whoWeServe",
      children: [
        {
          label: tAudiences("hoas.name"),
          href: `/${locale}/who-we-serve/hoas`,
        },
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
      ],
    },
    { label: t("portfolio"), href: `/${locale}/portfolio` },
    { label: t("about"), href: `/${locale}/about` },
    { label: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-near-black hover:bg-cream rounded-lg transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85vw] max-w-[300px] bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-xl font-bold text-forest-green">
                    {tMobile("title")}
                  </span>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-near-black hover:bg-cream rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() => toggleExpanded(item.key!)}
                            className="w-full flex items-center justify-between px-4 py-3 text-near-black font-medium hover:bg-cream rounded-lg transition-colors"
                          >
                            {item.label}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-200 ${
                                expandedItems.includes(item.key!)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedItems.includes(item.key!) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-1 space-y-1">
                                  <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block px-4 py-2 text-near-black hover:bg-cream hover:text-grass-green rounded-lg transition-colors"
                                  >
                                    {tMobile("viewAll")}
                                  </Link>
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={closeMenu}
                                      className="block px-4 py-2 text-near-black hover:bg-cream hover:text-grass-green rounded-lg transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-near-black font-medium hover:bg-cream rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200" />

                {/* Language Toggle */}
                <div className="mb-6">
                  <LanguageToggle />
                </div>

                {/* Call Button */}
                <a
                  href={formatPhoneLink(BUSINESS_INFO.phone)}
                  className="flex items-center gap-2 px-4 py-3 text-forest-green font-medium hover:bg-cream rounded-lg transition-colors mb-4"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>

                {/* CTA Button */}
                <Link href={`/${locale}/contact`} onClick={closeMenu}>
                  <Button className="w-full">{tCta("getQuote")}</Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
