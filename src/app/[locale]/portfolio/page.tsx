"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";
import { SectionHeader } from "@/components/shared";
import { ContactSection } from "@/components/sections";

const portfolioItems = [
  {
    id: 1,
    category: "maintenance",
    image: "/images/portfolio/IMG_1857.jpg",
    title: "Residential Landscape Maintenance",
    description: "Complete lawn care and tree ring maintenance",
  },
  {
    id: 2,
    category: "irrigation",
    image: "/images/services/irrigation-sunset.jpg",
    title: "Commercial Irrigation System",
    description: "Large-scale sprinkler system installation",
  },
  {
    id: 3,
    category: "irrigation",
    image: "/images/services/irrigation-residential.jpg",
    title: "Residential Irrigation",
    description: "Custom irrigation design for home landscape",
  },
  {
    id: 4,
    category: "construction",
    image: "/images/services/sod-installation.jpg",
    title: "New Sod Installation",
    description: "Fresh sod installation for new construction",
  },
  {
    id: 5,
    category: "maintenance",
    image: "/images/services/commercial-property.jpg",
    title: "Commercial Property Care",
    description: "Ongoing maintenance for office complex",
  },
  {
    id: 6,
    category: "construction",
    image: "/images/services/new-construction.jpg",
    title: "New Construction Landscaping",
    description: "Complete landscape installation for new build",
  },
  {
    id: 7,
    category: "maintenance",
    image: "/images/portfolio/IMG_6961.jpg",
    title: "Tree Service",
    description: "Professional tree trimming and removal",
  },
  {
    id: 8,
    category: "irrigation",
    image: "/images/portfolio/DA63D023-DDA3-43AC-8FA6-DF37534E8186.jpg",
    title: "Irrigation at Sunset",
    description: "Commercial irrigation system in action",
  },
  {
    id: 9,
    category: "maintenance",
    image: "/images/portfolio/IMG_5658.jpg",
    title: "Residential Crew at Work",
    description: "Our team maintaining a beautiful home",
  },
  {
    id: 10,
    category: "construction",
    image: "/images/portfolio/IMG_3950.jpg",
    title: "Flower Bed Installation",
    description: "Custom flower bed and stone border",
  },
  {
    id: 11,
    category: "maintenance",
    image: "/images/hero/lakehouse-sunset.jpg",
    title: "Lakefront Property",
    description: "Premium lakefront landscape maintenance",
  },
  {
    id: 12,
    category: "irrigation",
    image: "/images/portfolio/IMG_9600.jpg",
    title: "Irrigation Controller Setup",
    description: "Smart controller installation and programming",
  },
  {
    id: 13,
    category: "maintenance",
    image: "/images/portfolio/IMG_1858.jpg",
    title: "Lawn Striping",
    description: "Professional mowing with clean stripe patterns",
  },
  {
    id: 14,
    category: "maintenance",
    image: "/images/portfolio/FD7C9851-E76C-4749-916E-70E5756DC4DC.jpg",
    title: "Estate Tree Service",
    description: "Tree trimming at luxury estate",
  },
  {
    id: 15,
    category: "maintenance",
    image: "/images/portfolio/IMG_5933.jpg",
    title: "Tree Removal",
    description: "Safe and efficient tree removal service",
  },
  {
    id: 16,
    category: "irrigation",
    image: "/images/portfolio/653E4D85-41DA-450F-BD04-DBE64F5BA4FD.jpg",
    title: "Sunset Sprinklers",
    description: "Irrigation system at golden hour",
  },
  {
    id: 17,
    category: "maintenance",
    image: "/images/portfolio/07891DDE-0687-4946-B9EE-C39AC2DCEA4E.jpg",
    title: "Commercial Lawn Care",
    description: "Large commercial property maintenance",
  },
  {
    id: 18,
    category: "construction",
    image: "/images/portfolio/IMG_3930.jpg",
    title: "Landscape Construction",
    description: "New landscape bed installation",
  },
  {
    id: 19,
    category: "maintenance",
    image: "/images/portfolio/IMG_6279.jpg",
    title: "Crew in Action",
    description: "Our professional team at work",
  },
  {
    id: 20,
    category: "maintenance",
    image: "/images/portfolio/IMG_2919.jpg",
    title: "HOA Common Area",
    description: "Community property maintenance",
  },
  {
    id: 21,
    category: "irrigation",
    image: "/images/portfolio/IMG_4533.jpg",
    title: "Irrigation Layout",
    description: "Precise sprinkler head placement",
  },
  {
    id: 22,
    category: "maintenance",
    image: "/images/portfolio/IMG_5660.jpg",
    title: "Residential Service",
    description: "Complete home landscape care",
  },
  {
    id: 23,
    category: "construction",
    image: "/images/portfolio/IMG_3949.jpg",
    title: "Planting Project",
    description: "New plant and flower installation",
  },
  {
    id: 24,
    category: "maintenance",
    image: "/images/portfolio/IMG_6969.jpg",
    title: "Emergency Tree Service",
    description: "Storm damage cleanup and removal",
  },
  {
    id: 25,
    category: "fencing",
    image: "/images/services/demolition.jpg",
    title: "Residential Fence Installation",
    description: "New wood fence construction for residential property",
  },
  {
    id: 26,
    category: "fencing",
    image: "/images/portfolio/IMG_2528.jpg",
    title: "Property Boundary Fencing",
    description: "Complete fence line along residential property",
  },
  {
    id: 27,
    category: "fencing",
    image: "/images/portfolio/IMG_2526.jpg",
    title: "Backyard Fence Project",
    description: "Wood fence installation for backyard enclosure",
  },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "maintenance", label: t("categories.maintenance") },
    { key: "irrigation", label: t("categories.irrigation") },
    { key: "construction", label: t("categories.construction") },
    { key: "fencing", label: t("categories.fencing") },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-cream">
          <Container>
            <SectionHeader title={t("title")} subtitle={t("subtitle")} />
          </Container>
        </section>

        {/* Filter */}
        <section className="py-8 bg-white border-b">
          <Container>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === category.key
                      ? "bg-forest-green text-white"
                      : "bg-cream text-near-black hover:bg-grass-green hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-heading text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </Container>
        </section>

        <ContactSection />

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
