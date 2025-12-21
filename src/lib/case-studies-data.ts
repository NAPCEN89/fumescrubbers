// src/lib/case-studies-data.ts

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: string;
  quoteAuthor?: string;
  image: string; // Main hero image
  thumbnail: string; // Card thumbnail
  date: string;
  products: string[]; // For related product links
};

// Base path for case study images
const CASE_STUDY_IMG_BASE = '/assets/images/case-studies';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'hcl-scrubber-pharma-chennai',
    title: '99.9% HCl Fume Removal for Pharmaceutical Plant in Chennai',
    client: 'Leading Pharma Manufacturer',
    industry: 'Pharmaceuticals',
    location: 'Chennai, Tamil Nadu',
    challenge: 'High HCl fumes from reactor vents exceeding CPCB limits, causing equipment corrosion and worker health risks.',
    solution: 'Custom-designed 15,000 CMH PP-FRP Packed Bed Scrubber with automated pH dosing, multi-stage mist elimination, and corrosion-resistant internals.',
    results: [
      'Achieved 99.9% HCl removal efficiency',
      'Full compliance with CPCB/TNPCB standards',
      'Zero corrosion incidents after installation',
      '40% reduction in annual maintenance costs',
      'Improved worker safety and air quality',
    ],
    quote: 'NAPCEN delivered a turnkey solution that exceeded our expectations. Compliance achieved with zero production downtime.',
    quoteAuthor: 'Plant Manager',
    image: `${CASE_STUDY_IMG_BASE}/hcl-pharma-main.webp`,
    thumbnail: `${CASE_STUDY_IMG_BASE}/hcl-pharma-thumb.webp`,
    date: 'October 2025',
    products: ['HCl Scrubber', 'Packed Bed Scrubber'],
  },
  {
    id: 2,
    slug: 'venturi-dust-collector-foundry',
    title: 'High-Temperature Foundry Dust Control with Hybrid Venturi System',
    client: 'Major Iron Foundry',
    industry: 'Foundry & Metal Casting',
    location: 'Coimbatore, Tamil Nadu',
    challenge: 'Sub-micron silica dust and hot gases (400°C+) from melting furnaces causing frequent filter failures and non-compliance.',
    solution: 'Hybrid Venturi Scrubber + Cyclone Separator with quench section, high-temperature resistant lining, and spark arrestor.',
    results: [
      '98% capture efficiency down to 0.5 micron',
      'Filter life extended by 3x',
      '25% reduction in energy consumption',
      'Safe handling of combustible dust',
      'Passed stringent emission audits',
    ],
    quote: 'Best investment for our foundry — production uptime and air quality dramatically improved.',
    quoteAuthor: 'Production Head',
    image: `${CASE_STUDY_IMG_BASE}/foundry-main.webp`,
    thumbnail: `${CASE_STUDY_IMG_BASE}/foundry-thumb.webp`,
    date: 'September 2025',
    products: ['Venturi Scrubber', 'Foundry Exhaust Scrubber'],
  },
  {
    id: 3,
    slug: 'welding-fume-extractor-auto',
    title: 'Centralized Welding Fume Extraction for Automotive Supplier in Chennai',
    client: 'Tier-1 Automotive Component Manufacturer',
    industry: 'Automotive',
    location: 'Sriperumbudur, Chennai',
    challenge: 'Welding fumes in large fabrication bay affecting 50+ workers and failing international buyer air quality audits.',
    solution: 'Centralized high-vacuum fume extraction system with 20 flexible arms, HEPA filtration, and explosion-proof design.',
    results: [
      'Air quality below OSHA & CPCB limits',
      '90% reduction in worker health complaints',
      'Successfully passed global buyer audits',
      'ROI achieved within 18 months',
    ],
    quote: 'NAPCEN transformed our welding bay into a safe, compliant workspace. Highly recommended.',
    quoteAuthor: 'EHS Manager',
    image: `${CASE_STUDY_IMG_BASE}/welding-auto-main.webp`,
    thumbnail: `${CASE_STUDY_IMG_BASE}/welding-auto-thumb.webp`,
    date: 'August 2025',
    products: ['Mobile Welding Fume Extractor', 'Centralized Fume Extraction'],
  },
];