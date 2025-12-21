export const industriesData: NavSubItem[] = [
  { 
    name: 'Chemical Manufacturing', 
    slug: 'chemical',
    path: '/industries/chemical',
    title: 'Chemical Process Fume Scrubbing',
    description: 'Corrosion-resistant systems for hazardous gas neutralization.',
    image: '/gallery/Chemical%20Manufacturing.webp'
  },
  { 
    name: 'Electronics & Semi', 
    slug: 'electronics',
    path: '/industries/electronics',
    title: 'Semiconductor Air Filtration',
    description: 'Ultra-clean filtration for cleanroom environments.',
    image: '/gallery/Electronic%20and%20Semiconductor%20Manufacturing.webp'
  },
  { 
    name: 'Food Processing', 
    slug: 'food-processing',
    path: '/industries/food-processing',
    title: 'Sanitary Dust Collection',
    description: 'Stainless steel solutions for food-grade safety.',
    image: '/gallery/Food%20Processing.webp'
  },
  { 
    name: 'Metal Processing', 
    slug: 'metal-processing',
    path: '/industries/metal-processing',
    title: 'Metalworking Fume Extraction',
    description: 'Heavy-duty extraction for welding and grinding.',
    image: '/gallery/Metal%20Processing.webp'
  },
  { 
    name: 'Mining & Ore', 
    slug: 'mining',
    path: '/industries/mining',
    title: 'Mining Dust & Gas Control',
    description: 'Robust systems for ore processing and underground ventilation.',
    image: '/gallery/Mining%20and%20Ore%20Processing.webp'
  },
  { 
    name: 'Water Treatment', 
    slug: 'water-treatment',
    path: '/industries/water-treatment',
    title: 'Municipal Wastewater Odor Control',
    description: 'H2S and odor neutralizing scrubbers for treatment plants.',
    image: '/gallery/Municipal%20Water%20and%20Wastewater%20Treatment.webp'
  },
  { 
    name: 'Oil & Gas', 
    slug: 'oil-and-gas',
    path: '/industries/oil-and-gas',
    title: 'Oil & Gas Emission Control',
    description: 'Vapor recovery and gas treatment for refineries.',
    image: '/gallery/Oil%20and%20Gas%20Industry.webp'
  },
  { 
    name: 'Paint & Coatings', 
    slug: 'paint-coatings',
    path: '/industries/paint-coatings',
    title: 'VOC & Paint Mist Extraction',
    description: 'Filtration for industrial spray booths and coating lines.',
    image: '/gallery/Paint%20and%20Coatings%20Manufacturing.webp'
  },
  { 
    name: 'Pharmaceuticals', 
    slug: 'pharmaceuticals',
    path: '/industries/pharmaceuticals',
    title: 'Pharma Clean Air Systems',
    description: 'GMP-compliant chemical and particulate filtration.',
    image: '/gallery/Pharmaceutical%20Manufacturing.webp'
  },
  { 
    name: 'Textile Industry', 
    slug: 'textile',
    path: '/industries/textile',
    title: 'Textile Fiber & Dust Control',
    description: 'High-volume lint and particulate extraction.',
    image: '/gallery/Textile%20Industry.webp'
  },
  { 
    name: 'Waste Incineration', 
    slug: 'waste-incineration',
    path: '/industries/waste-incineration',
    title: 'Flue Gas Cleaning Systems',
    description: 'High-temperature filtration for waste-to-energy plants.',
    image: '/gallery/Waste%20Incineration.webp'
  },
  { 
    name: 'Woodworking', 
    slug: 'woodworking',
    path: '/industries/woodworking',
    title: 'Wood Dust & Particle Collection',
    description: 'Fire-safe extraction for sawmills and furniture plants.',
    image: '/gallery/Woodworking%20and%20Furniture%20Manufacturing.webp'
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
        path: '/products/dry-scrubbers',
        image: '/assets/images/resource/all%20type%20of%20dry%20scrubber/20.webp'
      },
      { 
        name: 'All Products', 
        path: '/products/',
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
  { label: 'Accessories', link: '/accessories' },
  { label: 'Contact', link: '/contact' },
];