// src/app/data/navData.ts (or your nav data file)

export interface NavSubItem {
  name: string;
  path: string;
}

export interface NavItem {
  label: string;
  link?: string;
  dropdown?: boolean;
  items?: NavSubItem[];
}

// Sub-menu data (defined first for safety)
const industriesData: NavSubItem[] = [
  { name: 'Welding & Fabrication', path: '/industries/welding' },
  { name: 'Metalworking', path: '/industries/metalworking' },
  { name: 'Pharmaceuticals', path: '/industries/pharmaceuticals' },
  { name: 'Woodworking', path: '/industries/woodworking' },
  { name: 'Foundry & Casting', path: '/industries/foundry' },
  { name: 'Food Processing', path: '/industries/food-processing' },
  // Add more when you create the pages
];

// Final menu items — clean, focused, high-conversion
export const menuItems: NavItem[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Products',
    dropdown: true,
    items: [
      { name: 'All Products', path: '/products' },
      { name: 'Wet Scrubbers', path: '/products/wet-scrubbers' },
      { name: 'Dry Scrubbers', path: '/products/dry-scrubbers' },
      { name: 'Dust Collectors', path: '/products/dust-collectors' },
      { name: 'Fume Extractors', path: '/products/fume-extractors' },
      { name: 'Downdraft Tables', path: '/products/downdraft-tables' },
    ],
  },
  {
    label: 'Industries',
    dropdown: true,
    items: industriesData,
  },
  {
    label: 'Case Studies',
    link: '/case-studies',
  },
  {
    label: 'Services',
    link: '/services', // or '/service' — fix if needed
  },
  {
    label: 'Accessories',
    link: '/accessories',
  },
 
];