// src/lib/blog-data.ts

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string; // Path to image in /public/images/blog/
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'how-to-choose-wet-scrubber-india',
    title: 'How to Choose the Right Wet Scrubber for Your Industry in India (2025 Guide)',
    excerpt: 'Comprehensive buyer guide covering packed bed vs venturi scrubbers, efficiency ratings, material selection, CPCB compliance, and real-world cost factors for Indian industries.',
    category: 'Buyers Guide',
    image: '/images/blog/wet-scrubber-selection-guide.jpg',
    date: 'December 20, 2025',
    readTime: '12 Min Read',
  },
  {
    id: 2,
    slug: 'cpcb-air-pollution-norms-2025',
    title: 'CPCB Guidelines 2025: Latest Air Pollution Control Norms for Industries',
    excerpt: 'Complete breakdown of updated emission standards, compliance deadlines, monitoring requirements, and penalties under the National Clean Air Programme (NCAP).',
    category: 'Compliance',
    image: '/images/blog/cpcb-norms-2025.jpg',
    date: 'December 15, 2025',
    readTime: '9 Min Read',
  },
  {
    id: 3,
    slug: 'venturi-vs-packed-bed-scrubber',
    title: 'Venturi Scrubber vs Packed Bed Scrubber: Which is Best for Your Plant?',
    excerpt: 'Detailed technical comparison of pressure drop, efficiency, maintenance, and ideal applications to help you make the right choice for particulate and gas removal.',
    category: 'Technical Comparison',
    image: '/images/blog/venturi-vs-packed-bed.jpg',
    date: 'December 10, 2025',
    readTime: '10 Min Read',
  },
  {
    id: 4,
    slug: 'dust-collector-price-india-2025',
    title: 'Industrial Dust Collector Price in India: 2025 Updated Cost Guide',
    excerpt: 'Current pricing for pulse jet baghouse, cartridge, and cyclone collectors including factors affecting cost, ROI calculation, and budget planning tips.',
    category: 'Cost & Pricing',
    image: '/images/blog/dust-collector-price.jpg',
    date: 'December 5, 2025',
    readTime: '8 Min Read',
  },
  {
    id: 5,
    slug: 'welding-fume-extractor-safety',
    title: 'How Fume Extractors Improve Worker Safety in Welding Shops',
    excerpt: 'Health risks of welding fumes, OSHA/CPCB exposure limits, and how proper extraction systems protect workers and ensure regulatory compliance.',
    category: 'Health & Safety',
    image: '/images/blog/welding-fume-safety.jpg',
    date: 'November 28, 2025',
    readTime: '7 Min Read',
  },
  {
    id: 6,
    slug: 'common-scrubber-installation-mistakes',
    title: '7 Common Mistakes When Installing Air Pollution Control Equipment',
    excerpt: 'Real-world pitfalls in scrubber and dust collector installation that lead to poor performance, higher costs, and compliance issues — and how to avoid them.',
    category: 'Installation Tips',
    image: '/images/blog/scrubber-mistakes.jpg',
    date: 'November 20, 2025',
    readTime: '9 Min Read',
  },
  {
    id: 7,
    slug: 'pp-frp-vs-stainless-steel-scrubbers',
    title: 'PP-FRP vs Stainless Steel Scrubbers: Material Selection Guide 2025',
    excerpt: 'Corrosion resistance, cost, lifespan, and application suitability comparison to help you choose the right construction material.',
    category: 'Materials',
    image: '/images/blog/pp-frp-vs-ss.jpg',
    date: 'November 15, 2025',
    readTime: '8 Min Read',
  },
  {
    id: 8,
    slug: 'pulse-jet-dust-collector-maintenance',
    title: 'Maintenance Tips for Pulse Jet Dust Collectors (Extend Filter Life)',
    excerpt: 'Proven strategies to reduce filter replacement costs, maintain efficiency, and prevent downtime in baghouse systems.',
    category: 'Maintenance',
    image: '/images/blog/pulse-jet-maintenance.jpg',
    date: 'November 10, 2025',
    readTime: '10 Min Read',
  },
];