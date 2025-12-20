// 1. Interfaces first
export interface NavSubItem { name: string; path: string; }
// ... (rest of your interfaces)

// 2. Define sub-data FIRST
const industriesData: NavSubItem[] = [
  { name: 'Welding Fume Extraction', path: '/industries/welding' },
  { name: 'Metalworking', path: '/industries/metalworking' },
  { name: 'Pharmaceuticals', path: '/industries/pharmaceuticals' },
  { name: 'Woodworking', path: '/industries/woodworking' },
];

// 3. Now you can use it in menuItems safely
export const menuItems: NavItem[] = [
  { label: 'Home', link: '/', dropdown: false },
  {
    label: 'Products',
    dropdown: true,
    items: [
      { name: 'All Products', path: '/products' },
      { name: 'Wet Scrubber', path: '/products/wet-scrubbers' },
      { name: 'Dry Scrubber', path: '/products/dry-scrubbers' },
      { name: 'Downdraft Table', path: '/products/downdraft-tables' },
      { name: 'Fume Extractor', path: '/products/fume-extractors' },
      { name: 'Dust Collector', path: '/products/dust-collectors' },
    ],
  },
  { label: 'Services', link: '/service', dropdown: false },
  { 
    label: 'Industries', 
    dropdown: true, 
    items: industriesData // ✅ Now this is defined!
  },
  { label: 'Accessories', link: '/accessories', dropdown: false },
  { label: 'Blog', link: '/blogs', dropdown: false },
];

