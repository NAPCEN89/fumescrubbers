export interface Industry {
  name: string;
  slug: string;
  description: string;
  subtypes: string[];
}

export const industriesData: Industry[] = [
  {
    name: "Air Pollution Control",
    slug: "air-pollution-control",
    description: "Advanced scrubbing and filtration systems.",
    subtypes: ["Wet Scrubbers", "Dust Collectors", "Fume Extractors"]
  },
  {
    name: "Chemical Processing",
    slug: "chemical-processing",
    description: "Corrosion-resistant solutions for hazardous chemicals.",
    subtypes: ["Acid Gas Scrubbing", "Storage Tank Venting"]
  }
];