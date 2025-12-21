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

const JsonLdScript = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "name": "NAPCEN",
        "legalName": "Napcen Industrial Air Filtration Systems",
        "description": "Leading manufacturer of wet scrubbers, dust collectors, fume extractors, and industrial air pollution control equipment in Puducherry, serving Chennai, Tamil Nadu & India-wide.",
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
        "geo": { "@type": "GeoCoordinates", "latitude": 11.916, "longitude": 79.755 },
        "telephone": "+91-7904469219",
        "email": "sales@napcen.com",
        "areaServed": ["India", "Tamil Nadu", "Chennai", "Puducherry", "UAE", "Saudi Arabia", "Malaysia", "Sri Lanka"],
        "sameAs": ["https://www.linkedin.com/company/napcen", "https://www.facebook.com/napcen"],
        "makesOffer": {
          "@type": "OfferCatalog",
          "name": "Industrial Air Pollution Control Equipment",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Wet Scrubber", "description": "Packed Bed, Venturi, Ammonia, HCL Scrubbers" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Industrial Dust Collector", "description": "Pulse Jet, Cartridge, Cyclone Dust Collectors" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Fume Extraction System" } }
          ]
        }
      })
    }}
  />
);

export const metadata: Metadata = {
  title: {
    default: 'NAPCEN | Wet Scrubber & Dust Collector Manufacturer in Puducherry | Serving Chennai & Tamil Nadu',
    template: '%s | NAPCEN - Wet Scrubber & Dust Collector Manufacturer',
  },
  description: 'NAPCEN: Leading wet scrubber manufacturer in Puducherry. High-efficiency industrial dust collectors, fume extractors, venturi & packed bed scrubbers serving Chennai, Tamil Nadu & India-wide.',
  keywords: [
    'wet scrubber manufacturer Chennai', 'wet scrubber manufacturer Tamil Nadu', 'wet scrubber manufacturer India',
    'wet scrubber manufacturer Puducherry', 'industrial dust collector Chennai', 'fume extractor manufacturer Chennai',
    'venturi scrubber Puducherry', 'packed bed scrubber manufacturer India', 'air pollution control equipment Chennai'
  ],
  authors: [{ name: 'NAPCEN Team', url: 'https://fumescrubbers.com/about' }],
  creator: 'NAPCEN',
  publisher: 'NAPCEN',
  metadataBase: new URL('https://fumescrubbers.com'),
  openGraph: {
    title: 'NAPCEN | Wet Scrubber Manufacturer Puducherry | Dust Collector Chennai',
    description: 'High-efficiency industrial air pollution control systems from Puducherry: Wet Scrubbers, Dust Collectors, Fume Extractors.',
    url: 'https://fumescrubbers.com',
    siteName: 'NAPCEN Industrial Air Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NAPCEN Manufacturing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAPCEN | Wet Scrubber Manufacturer Puducherry',
    description: 'Top industrial air pollution control equipment manufacturer.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://fumescrubbers.com' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00E5FF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={primaryFont.className}>
      <head>
        <JsonLdScript />
        
        {/* 1. Preconnect to external APIs (EmailJS) */}
        <link rel="preconnect" href="https://api.emailjs.com" />
        
        {/* 2. Critical Image Preloading with High Fetch Priority */}
        {/* This tells the browser to start downloading the Hero image before anything else */}
       {/* PRELOAD ABOUT SECTION IMAGES */}
<link 
  rel="preload" 
  as="image" 
  href="/bgnap.jpeg" 
  // @ts-ignore
  fetchpriority="high" 
/>
<link 
  rel="preload" 
  as="image" 
  href="/napcenAbout.webp" 
  // @ts-ignore
  fetchpriority="high" 
/>

{/* PRELOAD SERVICES IMAGES */}
<link rel="preload" as="image" href="/assets/images/design-consulting.webp" />
<link rel="preload" as="image" href="/assets/images/manufacturing.webp" />
<link rel="preload" as="image" href="/assets/images/installation.webp" />
<link rel="preload" as="image" href="/assets/images/maintenance.webp" />

{/* PRELOAD CORE PRODUCT IMAGES */}
<link rel="preload" as="image" href="/assets/images/Wet-scrubber-chennai.webp" />
<link rel="preload" as="image" href="/assets/images/Dry-scrubber-pondicherry.webp" />
<link rel="preload" as="image" href="/assets/images/products/dust-collector/Baghouse-duct-collector-chennai.webp" />
<link rel="preload" as="image" href="/assets/images/products/fume-extractor/Welding-fume-extractor.webp" />
<link rel="preload" as="image" href="/assets/images/products/downdraft-table/welding-downdraft-table.webp" />

<link rel="preload" as="image" href="/bgnap.jpeg" fetchPriority="high" />
        <link rel="preload" as="image" href="/napcenAbout.webp" fetchPriority="high" />

        {/* PRODUCT CATEGORIES (Pre-cache for instant switching) */}
        <link rel="preload" as="image" href="/assets/images/Wet-scrubber-chennai.webp" />
        <link rel="preload" as="image" href="/assets/images/Dry-scrubber-pondicherry.webp" />

        {/* INDUSTRIAL GALLERY (Pre-cache first row) */}
        <link rel="preload" as="image" href="/gallery/Chemical Manufacturing.webp" />
        <link rel="preload" as="image" href="/gallery/Electronic and Semiconductor Manufacturing.webp" />

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