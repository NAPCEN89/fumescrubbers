export interface Industry {
  name: string;
  slug: string;
  path: string;
  title: string;
  description: string;
  image: string;
  subtypes?: string[];
}

export const industriesData: Industry[] = [
  {
    name: "Chemical Manufacturing",
    slug: "chemical",
    path: "/industries/chemical",
    title: "Chemical Process Fume Scrubbing",
    description: "Corrosion-resistant systems for hazardous gas neutralization.",
    image: "/gallery/Chemical%20Manufacturing.jpg",
    subtypes: ["Acid Gas Scrubbing", "Storage Tank Venting"]
  },
  {
    name: "Electronics & Semi",
    slug: "electronics",
    path: "/industries/electronics",
    title: "Semiconductor Air Filtration",
    description: "Ultra-clean filtration for cleanroom environments.",
    image: "/gallery/Electronic%20and%20Semiconductor%20Manufacturing.jpg",
    subtypes: ["Cleanroom Ventilation", "Acid Mist Control"]
  },
  {
    name: "Food Processing",
    slug: "food-processing",
    path: "/industries/food-processing",
    title: "Sanitary Dust Collection",
    description: "Stainless steel solutions for food-grade safety.",
    image: "/gallery/Food%20Processing.jpg",
    subtypes: ["Odor Control", "Powder Dust Collection"]
  },
  {
    name: "Metal Processing",
    slug: "metal-processing",
    path: "/industries/metal-processing",
    title: "Metalworking Fume Extraction",
    description: "Heavy-duty extraction for welding and grinding.",
    image: "/gallery/Metal%20Processing.jpg",
    subtypes: ["Welding Fume", "Grinding Dust"]
  },
  {
    name: "Mining & Ore",
    slug: "mining",
    path: "/industries/mining",
    title: "Mining Dust & Gas Control",
    description: "Robust systems for ore processing and underground ventilation.",
    image: "/gallery/Mining%20and%20Ore%20Processing.jpg"
  },
  {
    name: "Water Treatment",
    slug: "water-treatment",
    path: "/industries/water-treatment",
    title: "Municipal Wastewater Odor Control",
    description: "H2S and odor neutralizing scrubbers for treatment plants.",
    image: "/gallery/Municipal%20Water%20and%20Wastewater%20Treatment.jpg"
  },
  {
    name: "Oil & Gas",
    slug: "oil-and-gas",
    path: "/industries/oil-and-gas",
    title: "Oil & Gas Emission Control",
    description: "Vapor recovery and gas treatment for refineries.",
    image: "/gallery/Oil%20and%20Gas%20Industry.jpg"
  },
  {
    name: "Paint & Coatings",
    slug: "paint-coatings",
    path: "/industries/paint-coatings",
    title: "VOC & Paint Mist Extraction",
    description: "Filtration for industrial spray booths and coating lines.",
    image: "/gallery/Paint%20and%20Coatings%20Manufacturing.jpg"
  },
  {
  name: "Pharmaceuticals",
  slug: "pharma", // Changed from "pharmaceuticals" to "pharma" to match your error
  path: "/industries/pharma",
  title: "Pharma Clean Air Systems",
  description: "GMP-compliant chemical and particulate filtration.",
  image: "/gallery/Pharmaceutical%20Manufacturing.jpg"
},
  {
    name: "Textile Industry",
    slug: "textile",
    path: "/industries/textile",
    title: "Textile Fiber & Dust Control",
    description: "High-volume lint and particulate extraction.",
    image: "/gallery/Textile%20Industry.jpg"
  },
  {
    name: "Waste Incineration",
    slug: "waste-incineration",
    path: "/industries/waste-incineration",
    title: "Flue Gas Cleaning Systems",
    description: "High-temperature filtration for waste-to-energy plants.",
    image: "/gallery/Waste%20Incineration.jpeg"
  },
  {
    name: "Woodworking",
    slug: "woodworking",
    path: "/industries/woodworking",
    title: "Wood Dust & Particle Collection",
    description: "Fire-safe extraction for sawmills and furniture plants.",
    image: "/gallery/Woodworking%20and%20Furniture%20Manufacturing.jpg"
  }
];