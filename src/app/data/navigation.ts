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
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629579/Chemical_Process_Fume_Scrubbing_ecspcn.png",
    subtypes: ["Acid Gas Scrubbing", "Storage Tank Venting"]
  },
  {
    name: "Electronics & Semi",
    slug: "electronics",
    path: "/industries/electronics",
    title: "Semiconductor Air Filtration",
    description: "Ultra-clean filtration for cleanroom environments.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629613/Semiconductor_Air_Filtration_xx2wqr.png",
    subtypes: ["Cleanroom Ventilation", "Acid Mist Control"]
  },
  {
    name: "Food Processing",
    slug: "food-processing",
    path: "/industries/food-processing",
    title: "Sanitary Dust Collection",
    description: "Stainless steel solutions for food-grade safety.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629627/Sanitary_Dust_Collection_fmuvdh.png",
    subtypes: ["Odor Control", "Powder Dust Collection"]
  },
  {
    name: "Metal Processing",
    slug: "metal-processing",
    path: "/industries/metal-processing",
    title: "Metalworking Fume Extraction",
    description: "Heavy-duty extraction for welding and grinding.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629578/Metalworking_Fume_Extraction_pchvts.png",
    subtypes: ["Welding Fume", "Grinding Dust"]
  },
  {
    name: "Mining & Ore",
    slug: "mining",
    path: "/industries/mining",
    title: "Mining Dust & Gas Control",
    description: "Robust systems for ore processing and underground ventilation.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629586/Mining_Dust_Gas_Control_jugjvp.png"
  },
  {
    name: "Water Treatment",
    slug: "water-treatment",
    path: "/industries/water-treatment",
    title: "Municipal Wastewater Odor Control",
    description: "H2S and odor neutralizing scrubbers for treatment plants.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629586/Municipal_Wastewater_Odor_Control_xbyohb.png"
  },
  {
    name: "Oil & Gas",
    slug: "oil-and-gas",
    path: "/industries/oil-and-gas",
    title: "Oil & Gas Emission Control",
    description: "Vapor recovery and gas treatment for refineries.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629583/Oil_Gas_Emission_Control_elhqak.png"
  },
  {
    name: "Paint & Coatings",
    slug: "paint-coatings",
    path: "/industries/paint-coatings",
    title: "VOC & Paint Mist Extraction",
    description: "Filtration for industrial spray booths and coating lines.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629618/VOC_Paint_Mist_Extraction_zdzzxp.png"
  },
  {
  name: "Pharmaceuticals",
  slug: "pharma", // Changed from "pharmaceuticals" to "pharma" to match your error
  path: "/industries/pharma",
  title: "Pharma Clean Air Systems",
  description: "GMP-compliant chemical and particulate filtration.",
  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629623/Pharma_Clean_Air_Systems_g47due.png"
},
  {
    name: "Textile Industry",
    slug: "textile",
    path: "/industries/textile",
    title: "Textile Fiber & Dust Control",
    description: "High-volume lint and particulate extraction.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629610/Textile_Industry_cmamez.png"
  },
  {
    name: "Waste Incineration",
    slug: "waste-incineration",
    path: "/industries/waste-incineration",
    title: "Flue Gas Cleaning Systems",
    description: "High-temperature filtration for waste-to-energy plants.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629579/Flue_Gas_Cleaning_Systems_jm1osy.png"
  },
  {
    name: "Woodworking",
    slug: "woodworking",
    path: "/industries/woodworking",
    title: "Wood Dust & Particle Collection",
    description: "Fire-safe extraction for sawmills and furniture plants.",
    image: "https://res.cloudinary.com/defqgygsf/image/upload/v1789629626/Wood_Dust_Particle_Collection_soejou.png"
  }
];