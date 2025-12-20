// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  // Title handling – clean and consistent
  title: {
    default: 'NAPCEN | Industrial Air Pollution Control Systems & Scrubbers',
    template: '%s | NAPCEN', // Automatically applied to all sub-pages
  },
  description:
    'NAPCEN is a leading manufacturer of high-efficiency Wet Scrubbers, Dust Collectors, Fume Extraction Systems, and industrial air pollution control equipment in India. Engineering cleaner air for industries worldwide.',
  keywords: [
    'wet scrubber manufacturer India',
    'industrial dust collector',
    'fume extraction system',
    'air pollution control equipment',
    'venturi scrubber',
    'packed bed scrubber',
    'cyclone separator',
    'baghouse filter India',
  ],
  authors: [{ name: 'NAPCEN' }],
  creator: 'NAPCEN',
  publisher: 'NAPCEN',

  // Base URL – critical for resolving relative paths
  metadataBase: new URL('https://www.napcen.com'),

  // Open Graph / Social Sharing
  openGraph: {
    title: 'NAPCEN | Advanced Industrial Air Pollution Control Solutions',
    description: 'Custom-engineered Wet Scrubbers, Dust Collectors & Fume Extraction Systems for cleaner industrial air.',
    url: 'https://www.napcen.com',
    siteName: 'NAPCEN',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Recommended: 1200x630 optimized JPG/WebP (~100KB)
        width: 1200,
        height: 630,
        alt: 'NAPCEN Industrial Air Pollution Control Equipment',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'NAPCEN | Industrial Air Pollution Control Systems',
    description: 'High-efficiency Wet Scrubbers, Dust Collectors & Fume Extraction Systems',
    images: ['/og-image.jpg'],
    creator: '@napcen', // if you have Twitter/X handle
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (add your actual codes)
  verification: {
    google: 'your-google-site-verification-code',
    // yandex: '...',
    // bing: '...',
  },

  // Alternates (useful for future i18n)
  alternates: {
    canonical: 'https://www.napcen.com',
  },
};

// Optional: Viewport for mobile responsiveness
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00E5FF', // Your cyan brand color
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A1F22] text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}