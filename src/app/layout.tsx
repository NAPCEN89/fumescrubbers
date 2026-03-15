import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto } from 'next/font/google';

const primaryFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

// ─────────────────────────────────────────────────────────────
// GLOBAL JSON-LD: Organization + LocalBusiness
// Placed here so every page inherits it without duplication
// ─────────────────────────────────────────────────────────────
const JsonLdScript = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "name": "NAPCEN",
        "legalName": "Napcen Industrial Air Filtration Systems",
        "description": "Leading manufacturer of wet scrubbers, dust collectors, fume extractors, PP FRP scrubbers, industrial blowers, heat exchangers, fume hoods, and air pollution control equipment in Puducherry, India. CPCB/TNPCB compliant systems for pharma, chemical, foundry, automotive, and textile industries.",
        "url": "https://fumescrubbers.com",
        "logo": "https://fumescrubbers.com/logo-napcen.png",
        "image": "https://fumescrubbers.com/og-image.jpg",
        "foundingDate": "2010",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No.1, North Street, SMV Puram",
          "addressLocality": "Villianur",
          "addressRegion": "Puducherry",
          "postalCode": "605110",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.916,
          "longitude": 79.755
        },
        "telephone": "+91-7904469219",
        "email": "sales@napcen.com",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "areaServed": [
          "India", "Tamil Nadu", "Chennai", "Puducherry", "Coimbatore",
          "Madurai", "Salem", "Trichy", "Bengaluru", "Hyderabad",
          "Mumbai", "Delhi", "UAE", "Saudi Arabia", "Malaysia", "Sri Lanka"
        ],
        "sameAs": [
          "https://www.linkedin.com/company/napcen",
          "https://www.facebook.com/napcen"
        ],
        "makesOffer": {
          "@type": "OfferCatalog",
          "name": "Industrial Air Pollution Control Equipment",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Industrial Wet Scrubber",
                "description": "Packed Bed, Venturi, Ammonia, HCL, and Multi-Stage Wet Scrubbers for industrial fume & gas control"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Industrial Dust Collector",
                "description": "Pulse Jet Bag Filter, Cartridge, Cyclone, and Reverse Air Dust Collectors"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Fume Extraction System",
                "description": "Welding fume extractors, portable and centralized fume extraction units"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "PP FRP Scrubber",
                "description": "Corrosion-resistant Polypropylene and Fibre Reinforced Plastic scrubbers for chemical & acid fumes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Industrial Blower",
                "description": "Centrifugal and axial blowers for ventilation and air pollution control systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Fume Hood",
                "description": "Laboratory and industrial fume hoods for safe handling of hazardous chemicals"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Heat Exchanger",
                "description": "Industrial heat exchangers for process cooling and heat recovery applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Dry Scrubber",
                "description": "Dry sorbent injection and dry scrubbing systems for acid gas control"
              }
            }
          ]
        }
      })
    }}
  />
);

// ─────────────────────────────────────────────────────────────
// METADATA — Global SEO for all pages
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'NAPCEN | Wet Scrubber & Dust Collector Manufacturer in Puducherry | Serving Chennai & Tamil Nadu',
    template: '%s | NAPCEN - Air Pollution Control Equipment Manufacturer',
  },
  description:
    'NAPCEN: Leading wet scrubber & dust collector manufacturer in Puducherry. High-efficiency industrial fume extractors, PP FRP scrubbers, dry scrubbers, industrial blowers, fume hoods & heat exchangers. CPCB/TNPCB compliant. Serving Chennai, Tamil Nadu & India-wide.',
  keywords: [
    // Core product keywords
    'wet scrubber manufacturer India',
    'wet scrubber manufacturer Chennai',
    'wet scrubber manufacturer Tamil Nadu',
    'wet scrubber manufacturer Puducherry',
    'industrial dust collector manufacturer India',
    'industrial dust collector Chennai',
    'fume extractor manufacturer Chennai',
    'fume extractor manufacturer India',
    'air pollution control equipment India',
    'air pollution control equipment Chennai',
    // Specific product keywords
    'venturi scrubber manufacturer India',
    'packed bed scrubber manufacturer India',
    'PP FRP scrubber manufacturer',
    'dry scrubber manufacturer India',
    'pulse jet dust collector India',
    'cyclone dust collector manufacturer',
    'industrial blower manufacturer Puducherry',
    'fume hood manufacturer India',
    'heat exchanger manufacturer Tamil Nadu',
    'industrial ventilation system India',
    // Compliance keywords
    'CPCB compliant air pollution control',
    'TNPCB compliant scrubber system',
    // Industry + location
    'industrial air filtration system India',
    'dust collector manufacturer Tamil Nadu',
    'fume scrubber manufacturer Pondicherry',
    'oil mist collector manufacturer India',
    'welding fume extractor manufacturer India',
    'grossing station manufacturer India',
  ],
  authors: [{ name: 'NAPCEN Team', url: 'https://fumescrubbers.com/about' }],
  creator: 'NAPCEN',
  publisher: 'NAPCEN',
  metadataBase: new URL('https://fumescrubbers.com'),
  openGraph: {
    title: 'NAPCEN | Wet Scrubber & Dust Collector Manufacturer | Puducherry, India',
    description:
      'High-efficiency industrial air pollution control systems: Wet Scrubbers, Dust Collectors, Fume Extractors, PP FRP Scrubbers, Blowers & Fume Hoods. CPCB compliant. Serving Chennai, Tamil Nadu & India.',
    url: 'https://fumescrubbers.com',
    siteName: 'NAPCEN Industrial Air Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NAPCEN Industrial Air Pollution Control Equipment Manufacturer Puducherry India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAPCEN | Wet Scrubber & Dust Collector Manufacturer in Puducherry',
    description:
      'Leading industrial air pollution control equipment manufacturer. Wet Scrubbers, Dust Collectors, Fume Extractors & more. CPCB compliant. Serving all India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fumescrubbers.com',
  },
};

// ─────────────────────────────────────────────────────────────
// VIEWPORT
// ─────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00E5FF',
};

// ─────────────────────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={primaryFont.className}>
      <head>
        {/* Global Organization + LocalBusiness Schema */}
        <JsonLdScript />

        {/* Preconnect to external APIs */}
        <link rel="preconnect" href="https://api.emailjs.com" />

        {/* ── Critical Above-the-Fold Images (High Priority) ── */}
        <link rel="preload" as="image" href="/bgnap.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/napcenAbout.webp" fetchPriority="high" />

        {/* ── Service Section Images ── */}
        <link rel="preload" as="image" href="/assets/images/design-consulting.webp" />
        <link rel="preload" as="image" href="/assets/images/manufacturing.webp" />
        <link rel="preload" as="image" href="/assets/images/installation.webp" />
        <link rel="preload" as="image" href="/assets/images/maintenance.webp" />

        {/* ── Core Product Images ── */}
        <link rel="preload" as="image" href="/assets/images/Wet-scrubber-chennai.webp" />
        <link rel="preload" as="image" href="/assets/images/Dry-scrubber-pondicherry.webp" />
        <link rel="preload" as="image" href="/assets/images/products/dust-collector/Baghouse-duct-collector-chennai.webp" />
        <link rel="preload" as="image" href="/assets/images/products/fume-extractor/Welding-fume-extractor.webp" />
        <link rel="preload" as="image" href="/assets/images/products/downdraft-table/welding-downdraft-table.webp" />

        {/* ── Industry Gallery First Row ── */}
        <link rel="preload" as="image" href="/gallery/Chemical Manufacturing.webp" />
        <link rel="preload" as="image" href="/gallery/Electronic and Semiconductor Manufacturing.webp" />

        {/* Favicons & Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-[#0A1F22] text-white min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}