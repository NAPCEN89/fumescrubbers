import { Metadata } from 'next';
import HeroSection from '../components/home/HeroSection'; 
import AboutUs from '@/components/home/AboutUs';
import IndustrialApplicationsSection from '@/components/home/IndustrialApplicationsSection';
import ServiceSection from '@/components/home/ServiceSection';
import OurProductsSection from '@/components/home/OurProductsSection';
import VideoSection from '@/components/home/VideoSection';
import PartnerSection from '@/components/home/PartnerSection';
import AnimatedCounters from '@/components/home/CounterSection';
import FAQSection from '@/components/home/FaqSection';

// 1. ADVANCED SEO METADATA
export const metadata: Metadata = {
  title: 'Napcen | Leader in Industrial Air Pollution Control Systems',
  description: 'Napcen provides high-efficiency Wet Scrubbers, Dust Collectors, and Air Pollution Control solutions globally. ISO 9001:2015 certified industrial engineering.',
  alternates: { canonical: 'https://www.napcen.com' },
  openGraph: {
    title: 'Industrial Air Pollution Control Solutions | Napcen',
    description: 'Expert engineering in Wet Scrubbers, Fume Extractors, and Industrial Ventilation.',
    url: 'https://www.napcen.com',
    siteName: 'Napcen',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Home() {
  // 2. SCHEMA.ORG STRUCTURED DATA (The "Digital Identity")
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Napcen",
    "url": "https://www.napcen.com",
    "logo": "https://www.napcen.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/napcen",
      "https://twitter.com/napcen"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    }
  };

  return (
    <>
      {/* Injecting Schema into the Head for Googlebot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main style={{ marginTop: 0, paddingTop: 0 }}>
        {/* HERO: The H1 is usually inside this component. Ensure it is text, not an image. */}
        <HeroSection /> 

        {/* SEMANTIC SECTIONING: Use IDs for "jump links" and better crawling */}
        <section id="about-napcen">
          <AboutUs />
        </section>

        <section id="industrial-services">
          <ServiceSection />
        </section>

        <section id="pollution-control-products">
          <OurProductsSection />
        </section>

        <section id="industry-applications">
          <IndustrialApplicationsSection activeLink={''} />
        </section>

        {/* TRUST SIGNALS: Partners and Counters prove authority */}
        <VideoSection />
        <PartnerSection />
        <AnimatedCounters />

        {/* FAQ: Crucial for "People Also Ask" rankings */}
        <section id="faq">
          <FAQSection />
        </section>
      </main>
    </>
  );
}