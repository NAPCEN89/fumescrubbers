export interface NavSubItem {
  name: string;
  slug?: string;
  path: string;
  title?: string;
  description?: string;
  image: string;
}

export interface NavItem {
  label: string;
  link?: string;
  dropdown?: boolean;
  items?: NavSubItem[];
}

export const industriesData: NavSubItem[] = [
  { 
    name: 'Chemical Manufacturing', 
    slug: 'chemical',
    path: '/industries/chemical',
    title: 'Chemical Process Fume Scrubbing',
    description: 'Corrosion-resistant systems for hazardous gas neutralization.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629579/Chemical_Process_Fume_Scrubbing_ecspcn.png'
  },
  { 
    name: 'Electronics & Semi', 
    slug: 'electronics',
    path: '/industries/electronics',
    title: 'Semiconductor Air Filtration',
    description: 'Ultra-clean filtration for cleanroom environments.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629613/Semiconductor_Air_Filtration_xx2wqr.png'
  },
  { 
    name: 'Food Processing', 
    slug: 'food-processing',
    path: '/industries/food-processing',
    title: 'Sanitary Dust Collection',
    description: 'Stainless steel solutions for food-grade safety.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629627/Sanitary_Dust_Collection_fmuvdh.png'
  },
  { 
    name: 'Metal Processing', 
    slug: 'metal-processing',
    path: '/industries/metal-processing',
    title: 'Metalworking Fume Extraction',
    description: 'Heavy-duty extraction for welding and grinding.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629578/Metalworking_Fume_Extraction_pchvts.png'
  },
  { 
    name: 'Mining & Ore', 
    slug: 'mining',
    path: '/industries/mining',
    title: 'Mining Dust & Gas Control',
    description: 'Robust systems for ore processing and underground ventilation.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629586/Mining_Dust_Gas_Control_jugjvp.png'
  },
  { 
    name: 'Water Treatment', 
    slug: 'water-treatment',
    path: '/industries/water-treatment',
    title: 'Municipal Wastewater Odor Control',
    description: 'H2S and odor neutralizing scrubbers for treatment plants.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629586/Municipal_Wastewater_Odor_Control_xbyohb.png'
  },
  { 
    name: 'Oil & Gas', 
    slug: 'oil-and-gas',
    path: '/industries/oil-and-gas',
    title: 'Oil & Gas Emission Control',
    description: 'Vapor recovery and gas treatment for refineries.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629583/Oil_Gas_Emission_Control_elhqak.png'
  },
  { 
    name: 'Paint & Coatings', 
    slug: 'paint-coatings',
    path: '/industries/paint-coatings',
    title: 'VOC & Paint Mist Extraction',
    description: 'Filtration for industrial spray booths and coating lines.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629618/VOC_Paint_Mist_Extraction_zdzzxp.png'
  },
  { 
    name: 'Pharmaceuticals', 
    slug: 'pharma',
    path: '/industries/pharma',
    title: 'Pharma Clean Air Systems',
    description: 'GMP-compliant chemical and particulate filtration.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629623/Pharma_Clean_Air_Systems_g47due.png'
  },
  { 
    name: 'Textile Industry', 
    slug: 'textile',
    path: '/industries/textile',
    title: 'Textile Fiber & Dust Control',
    description: 'High-volume lint and particulate extraction.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629610/Textile_Industry_cmamez.png'
  },
  { 
    name: 'Waste Incineration', 
    slug: 'waste-incineration',
    path: '/industries/waste-incineration',
    title: 'Flue Gas Cleaning Systems',
    description: 'High-temperature filtration for waste-to-energy plants.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629579/Flue_Gas_Cleaning_Systems_jm1osy.png'
  },
  { 
    name: 'Woodworking', 
    slug: 'woodworking',
    path: '/industries/woodworking',
    title: 'Wood Dust & Particle Collection',
    description: 'Fire-safe extraction for sawmills and furniture plants.',
    image: 'https://res.cloudinary.com/defqgygsf/image/upload/v1789629626/Wood_Dust_Particle_Collection_soejou.png'
  }
];

export const menuItems: NavItem[] = [
  // { label: 'Home', link: '/' },
  {
    label: 'Products',
    dropdown: true,
    items: [
      { 
        name: 'Wet Scrubbers', 
        path: '/products/wet-scrubbers',
        // Updated path (lowercase and webp)
        image: '/assets/images/products/wet-scrubber/Wet-scrubber-chennai.webp' 
      },
      { 
        name: 'Dust Collectors', 
        path: '/products/dust-collectors',
        // Updated path (lowercase and webp)
        image: '/assets/images/products/dust-collector/Baghouse-duct-collector-chennai.webp'
      },
      { 
        name: 'Fume Extractors', 
        path: '/products/fume-extractors',
        // Updated path (lowercase and webp)
        image: '/assets/images/products/fume-extractor/Welding-fume-extractor.webp'
      },
      { 
        name: 'Downdraft Tables', 
        path: '/products/downdraft-tables',
        // Updated path (lowercase and webp)
        image: '/assets/images/products/downdraft-table/Downdraft-table-dust-collector.webp'
      },
      { 
        name: 'Dry Scrubbers', 
        path: '/products/all',
        image: '/assets/images/resource/all%20type%20of%20dry%20scrubber/20.webp'
      },
      { 
        name: 'All Products', 
        path: '/products/all',
        image: '/assets/images/resource/Home%20page%20product/coming-soon.webp'
      },
    ],
  },
  {
    label: 'Industries',
    dropdown: true,
    items: industriesData,
  },
  { label: 'Case Studies', link: '/case-studies' },
  { label: 'Services', link: '/services' },
  { label: 'Careers', link: '/careers' },
  { label: 'Contact', link: '/contact' },
];