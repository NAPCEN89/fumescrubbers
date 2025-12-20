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
    name: 'Welding & Fabrication', 
    path: '/industries/welding',
    slug: 'welding',
    title: 'Welding Fume Extraction Systems',
    description: 'High-performance source capture solutions for manual and robotic welding.',
    image: '/assets/images/industries/welding.jpg'
  },
  { 
    name: 'Metalworking', 
    path: '/industries/metalworking',
    slug: 'metalworking',
    title: 'Precision Metalworking Dust Control',
    description: 'Centralized extraction systems for grinding, deburring, and CNC machining.',
    image: '/assets/images/industries/metalworking.jpg'
  },
  { 
    name: 'Pharmaceuticals', 
    path: '/industries/pharmaceuticals',
    slug: 'pharmaceuticals',
    title: 'Pharmaceutical Air Filtration',
    description: 'Cleanroom-grade chemical scrubbers and HEPA filtration systems.',
    image: '/assets/images/industries/pharma.jpg'
  },
  { 
    name: 'Woodworking', 
    path: '/industries/woodworking',
    slug: 'woodworking',
    title: 'Industrial Wood Dust Extraction',
    description: 'Heavy-duty collectors designed for fine sawdust and large chips.',
    image: '/assets/images/industries/woodworking.jpg'
  },
  { 
    name: 'Foundry & Casting', 
    path: '/industries/foundry',
    slug: 'foundry',
    title: 'Heat & Smoke Control for Foundries',
    description: 'Thermal-resistant extraction systems for melting and pouring operations.',
    image: '/assets/images/industries/foundry.jpg'
  },
  { 
    name: 'Food Processing', 
    path: '/industries/food-processing',
    slug: 'food-processing',
    title: 'Sanitary Food Grade Dust Collection',
    description: 'Stainless steel wash-down grade systems built for hygiene.',
    image: '/assets/images/industries/food.jpg'
  },
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
        path: '/products',
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