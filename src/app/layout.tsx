import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto } from 'next/font/google'; // ← CHANGE THIS TO YOUR ACTUAL FONT

// === UPDATE THIS FONT TO MATCH YOUR SITE ===
// Common options: Inter, Poppins, Montserrat, Roboto, Open_Sans, etc.
// Check your globals.css or site inspector for font-family
const primaryFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

// Replace above with e.g.:
// import { Inter } from 'next/font/google';
// const primaryFont = Inter({ subsets: ['latin'], display: 'swap' });

// Dynamic JSON-LD (kept exactly as you had — excellent for SEO)
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
  description: 'NAPCEN: Leading wet scrubber manufacturer in Puducherry. High-efficiency industrial dust collectors, fume extractors, venturi & packed bed scrubbers serving Chennai, Tamil Nadu & India-wide. CPCB compliant air pollution control systems.',
  keywords: [
    'wet scrubber manufacturer Chennai', 'wet scrubber manufacturer Tamil Nadu', 'wet scrubber manufacturer India',
    'wet scrubber manufacturer Puducherry', 'industrial dust collector Chennai', 'fume extractor manufacturer Chennai',
    'venturi scrubber Puducherry', 'packed bed scrubber manufacturer India', 'air pollution control equipment Chennai',
    'pulse jet dust collector Tamil Nadu', 'fume extraction system Puducherry', 'CPCB compliant scrubber India',
    'PP FRP wet scrubber manufacturer', 'industrial air filtration Puducherry', 'downdraft table manufacturer India'
  ],
  authors: [{ name: 'NAPCEN Team', url: 'https://fumescrubbers.com/about' }],
  creator: 'NAPCEN',
  publisher: 'NAPCEN',
  metadataBase: new URL('https://fumescrubbers.com'),
  openGraph: {
    title: 'NAPCEN | Wet Scrubber Manufacturer Puducherry | Dust Collector Chennai',
    description: 'High-efficiency industrial air pollution control systems from Puducherry: Wet Scrubbers, Dust Collectors, Fume Extractors serving Chennai, Tamil Nadu & exports.',
    url: 'https://fumescrubbers.com',
    siteName: 'NAPCEN Industrial Air Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NAPCEN Wet Scrubber and Dust Collector Manufacturing in Puducherry', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAPCEN | Wet Scrubber Manufacturer Puducherry | Chennai & Tamil Nadu',
    description: 'Top industrial air pollution control equipment manufacturer in Puducherry serving Chennai. Custom wet scrubbers & dust collectors.',
    images: ['/og-image.jpg'],
    site: '@napcen',
    creator: '@napcen',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'your-google-verification-code-here' },
  alternates: { canonical: 'https://fumescrubbers.com' },
  other: { 'geo.region': 'IN-PY', 'geo.placename': 'Villianur, Puducherry', 'geo.position': '11.916;79.755', 'ICBM': '11.916, 79.755' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00E5FF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={primaryFont.className}>
      <head>
        <JsonLdScript />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical hero image — update path when ready */}
        <link rel="preload" as="image" href="/napcen-hero-optimized.webp" />
      </head>
      <body className="bg-[#0A1F22] text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}