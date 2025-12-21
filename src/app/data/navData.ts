export interface NavSubItem {
  name: string;
  path: string;
  slug?: string;
  title?: string;
  description?: string;
  image?: string;
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
    image: '/gallery/Chemical%20Manufacturing.jpg'
  },
  { 
    name: 'Electronics & Semi', 
    slug: 'electronics',
    path: '/industries/electronics',
    title: 'Semiconductor Air Filtration',
    description: 'Ultra-clean filtration for cleanroom environments.',
    image: '/gallery/Electronic%20and%20Semiconductor%20Manufacturing.jpg'
  },
  { 
    name: 'Food Processing', 
    slug: 'food-processing',
    path: '/industries/food-processing',
    title: 'Sanitary Dust Collection',
    description: 'Stainless steel solutions for food-grade safety.',
    image: '/gallery/Food%20Processing.jpg'
  },
  { 
    name: 'Metal Processing', 
    slug: 'metal-processing',
    path: '/industries/metal-processing',
    title: 'Metalworking Fume Extraction',
    description: 'Heavy-duty extraction for welding and grinding.',
    image: '/gallery/Metal%20Processing.jpg'
  },
  { 
    name: 'Mining & Ore', 
    slug: 'mining',
    path: '/industries/mining',
    title: 'Mining Dust & Gas Control',
    description: 'Robust systems for ore processing and underground ventilation.',
    image: '/gallery/Mining%20and%20Ore%20Processing.jpg'
  },
  { 
    name: 'Water Treatment', 
    slug: 'water-treatment',
    path: '/industries/water-treatment',
    title: 'Municipal Wastewater Odor Control',
    description: 'H2S and odor neutralizing scrubbers for treatment plants.',
    image: '/gallery/Municipal%20Water%20and%20Wastewater%20Treatment.jpg'
  },
  { 
    name: 'Oil & Gas', 
    slug: 'oil-and-gas',
    path: '/industries/oil-and-gas',
    title: 'Oil & Gas Emission Control',
    description: 'Vapor recovery and gas treatment for refineries.',
    image: '/gallery/Oil%20and%20Gas%20Industry.jpg'
  },
  { 
    name: 'Paint & Coatings', 
    slug: 'paint-coatings',
    path: '/industries/paint-coatings',
    title: 'VOC & Paint Mist Extraction',
    description: 'Filtration for industrial spray booths and coating lines.',
    image: '/gallery/Paint%20and%20Coatings%20Manufacturing.jpg'
  },
  { 
    name: 'Pharmaceuticals', 
    slug: 'pharmaceuticals',
    path: '/industries/pharmaceuticals',
    title: 'Pharma Clean Air Systems',
    description: 'GMP-compliant chemical and particulate filtration.',
    image: '/gallery/Pharmaceutical%20Manufacturing.jpg'
  },
  { 
    name: 'Textile Industry', 
    slug: 'textile',
    path: '/industries/textile',
    title: 'Textile Fiber & Dust Control',
    description: 'High-volume lint and particulate extraction.',
    image: '/gallery/Textile%20Industry.jpg'
  },
  { 
    name: 'Waste Incineration', 
    slug: 'waste-incineration',
    path: '/industries/waste-incineration',
    title: 'Flue Gas Cleaning Systems',
    description: 'High-temperature filtration for waste-to-energy plants.',
    image: '/gallery/Waste%20Incineration.jpeg'
  },
  { 
    name: 'Woodworking', 
    slug: 'woodworking',
    path: '/industries/woodworking',
    title: 'Wood Dust & Particle Collection',
    description: 'Fire-safe extraction for sawmills and furniture plants.',
    image: '/gallery/Woodworking%20and%20Furniture%20Manufacturing.jpg'
  }
];

export const menuItems: NavItem[] = [
  { label: 'Home', link: '/' },
  {
    label: 'Products',
    dropdown: true,
    items: [
      { 
        name: 'Wet Scrubbers', 
        path: '/products/wet-scrubbers',
        image: '/assets/images/products/Wet scrubber/Wet-scrubber-chennai.jpg' 
      },
      { 
        name: 'Dust Collectors', 
        path: '/products/dust-collectors',
        image: '/assets/images/products/dust collector/Baghouse-duct-collector-chennai.jpg'
      },
      { 
        name: 'Fume Extractors', 
        path: '/products/fume-extractors',
        image: '/assets/images/products/Fume extractor/Welding-fume-extractor.jpg'
      },
      { 
        name: 'Downdraft Tables', 
        path: '/products/downdraft-tables',
        image: '/assets/images/products/Downdraft tbale/Downdraft-table-dust-collector.jpg'
      },
      { 
        name: 'Dry Scrubbers', 
        path: '/products/dry-scrubbers',
        image: '/assets/images/resource/all type of dry scrubber/20.jpg'
      },
      { 
        name: 'All Products', 
        path: '/products/',
        image: '/assets/images/resource/Home page product/coming-soon.jpg'
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
  { label: 'Accessories', link: '/accessories' },
  { label: 'Contact', link: '/contact' },
];