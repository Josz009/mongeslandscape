"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";
import { Button, Container } from "@/components/ui";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("cta");
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center group"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Monge's Landscape Services"
              width={140}
              height={47}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Phone - Desktop */}
            <a
              href={formatPhoneLink(BUSINESS_INFO.phone)}
              className="hidden md:flex items-center gap-2 text-forest-green hover:text-grass-green transition-colors font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Language Toggle - Desktop */}
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            {/* CTA Button - Desktop */}
            <Link href={`/${locale}/contact`} className="hidden sm:block">
              <Button size="sm">{t("getQuote")}</Button>
            </Link>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
