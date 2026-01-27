export interface AudienceData {
  slug: string;
  translationKey: string;
  icon: string;
  image: string;
}

export const audiences: AudienceData[] = [
  {
    slug: "hoas",
    translationKey: "hoas",
    icon: "building",
    image: "/images/services/hoa-common-area.jpg",
  },
  {
    slug: "property-managers",
    translationKey: "propertyManagers",
    icon: "users",
    image: "/images/services/commercial-property.jpg",
  },
  {
    slug: "commercial",
    translationKey: "commercial",
    icon: "store",
    image: "/images/services/commercial-mowing.jpg",
  },
  {
    slug: "residential",
    translationKey: "residential",
    icon: "home",
    image: "/images/services/residential-crew.jpg",
  },
];

export function getAudienceBySlug(slug: string): AudienceData | undefined {
  return audiences.find((audience) => audience.slug === slug);
}

export function getAllAudienceSlugs(): string[] {
  return audiences.map((audience) => audience.slug);
}
