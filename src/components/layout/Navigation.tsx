"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export function Navigation() {
  const t = useTranslations("nav");
  const tServices = useTranslations("services");
  const tAudiences = useTranslations("whoWeServe.audiences");
  const locale = useLocale();

  const navItems: NavItem[] = [
    { label: t("home"), href: `/${locale}` },
    {
      label: t("services"),
      href: `/${locale}/services`,
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
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <NavItemComponent key={item.href} item={item} />
      ))}
    </nav>
  );
}

function NavItemComponent({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-4 py-2 text-near-black font-medium hover:text-grass-green transition-colors duration-200 rounded-lg hover:bg-cream"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 px-4 py-2 text-near-black font-medium hover:text-grass-green transition-colors duration-200 rounded-lg hover:bg-cream"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full pt-2 z-50"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2.5 text-near-black hover:bg-cream hover:text-grass-green transition-colors duration-150"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
