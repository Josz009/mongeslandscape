export interface ServiceData {
  slug: string;
  translationKey: string;
  icon: string;
  image: string;
  faqs: { questionKey: string; answerKey: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "landscape-maintenance",
    translationKey: "landscapeMaintenance",
    icon: "leaf",
    image: "/images/services/landscape-maintenance.jpg",
    faqs: [
      { questionKey: "frequency", answerKey: "frequencyAnswer" },
      { questionKey: "included", answerKey: "includedAnswer" },
      { questionKey: "pricing", answerKey: "pricingAnswer" },
      { questionKey: "seasons", answerKey: "seasonsAnswer" },
    ],
  },
  {
    slug: "irrigation-systems",
    translationKey: "irrigationSystems",
    icon: "droplet",
    image: "/images/services/irrigation-sunset.jpg",
    faqs: [
      { questionKey: "leakDetection", answerKey: "leakDetectionAnswer" },
      { questionKey: "winterization", answerKey: "winterizationAnswer" },
      { questionKey: "waterSavings", answerKey: "waterSavingsAnswer" },
      { questionKey: "scheduling", answerKey: "schedulingAnswer" },
    ],
  },
  {
    slug: "landscape-construction",
    translationKey: "landscapeConstruction",
    icon: "shovel",
    image: "/images/services/sod-installation.jpg",
    faqs: [
      { questionKey: "timeline", answerKey: "timelineAnswer" },
      { questionKey: "design", answerKey: "designAnswer" },
      { questionKey: "materials", answerKey: "materialsAnswer" },
      { questionKey: "warranty", answerKey: "warrantyAnswer" },
    ],
  },
  {
    slug: "fence-construction",
    translationKey: "fenceConstruction",
    icon: "fence",
    image: "/images/services/new-construction.jpg",
    faqs: [
      { questionKey: "materials", answerKey: "materialsAnswer" },
      { questionKey: "permits", answerKey: "permitsAnswer" },
      { questionKey: "timeline", answerKey: "timelineAnswer" },
      { questionKey: "hoa", answerKey: "hoaAnswer" },
    ],
  },
  {
    slug: "trash-cleanup",
    translationKey: "trashCleanup",
    icon: "trash",
    image: "/images/services/tree-removal.jpg",
    faqs: [
      { questionKey: "types", answerKey: "typesAnswer" },
      { questionKey: "scheduling", answerKey: "schedulingAnswer" },
      { questionKey: "disposal", answerKey: "disposalAnswer" },
      { questionKey: "emergency", answerKey: "emergencyAnswer" },
    ],
  },
  {
    slug: "emergency-services",
    translationKey: "emergencyServices",
    icon: "alert",
    image: "/images/services/demolition.jpg",
    faqs: [
      { questionKey: "availability", answerKey: "availabilityAnswer" },
      { questionKey: "response", answerKey: "responseAnswer" },
      { questionKey: "types", answerKey: "typesAnswer" },
      { questionKey: "pricing", answerKey: "pricingAnswer" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
