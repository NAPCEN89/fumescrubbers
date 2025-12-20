// app/page.tsx (Homepage - Fully SEO-Optimized for 2025)
import HeroSection from '../components/home/HeroSection'; 
import AboutUs from '@/components/home/AboutUs';
import IndustrialApplicationsSection from '@/components/home/IndustrialApplicationsSection';
import ServiceSection from '@/components/home/ServiceSection';
import OurProductsSection from '@/components/home/OurProductsSection';
import VideoSection from '@/components/home/VideoSection';
import PartnerSection from '@/components/home/PartnerSection';
import AnimatedCounters from '@/components/home/CounterSection';
import FAQSection from '@/components/home/FaqSection';

// Advanced Homepage-Specific Structured Data
// We keep Organization in layout.tsx (global), add FAQPage + BreadcrumbList here for max rich snippet potential
const HomepageSchemas = () => (
  <>
    {/* BreadcrumbList - Helps Google understand site structure */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://fumescrubbers.com"
            }
          ]
        })
      }}
    />

    {/* FAQPage Schema - Critical for "People Also Ask" & rich snippets. 
        Ensure your FAQSection component outputs real FAQs matching this! */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a wet scrubber and how does it work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A wet scrubber is an air pollution control device that removes harmful gases and particulates by passing exhaust through a liquid spray. NAPCEN's packed bed and venturi scrubbers achieve up to 99% efficiency for industrial applications."
              }
            },
            {
              "@type": "Question",
              "name": "Where are NAPCEN wet scrubbers manufactured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All NAPCEN equipment is designed and manufactured in our facility in Villianur, Puducherry, India, serving clients across Chennai, Tamil Nadu, and nationwide."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide CPCB compliant systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our wet scrubbers, dust collectors, and fume extractors are fully CPCB/TNPCB compliant with guaranteed performance certificates."
              }
            },
            {
              "@type": "Question",
              "name": "What industries do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve pharmaceuticals, chemicals, foundries, food processing, textiles, automotive, metal fabrication, and many more across India and exports."
              }
            },
            {
              "@type": "Question",
              "name": "What is the price range for wet scrubbers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Prices start from ₹2.8 Lakh depending on capacity, material (PP-FRP, MS, SS), and customization. Contact us for a free quote."
              }
            }
            // Add 5–10 more real FAQs matching your FAQSection component
          ]
        })
      }}
    />
  </>
);

export default function Home() {
  return (
    <>
      <HomepageSchemas />

      <main>
        {/* HeroSection: Ensure it contains a strong text-based H1 like:
            "Leading Wet Scrubber Manufacturer in Puducherry | Serving Chennai & Tamil Nadu" 
            with keyword-rich subheading and CTA */}
        <HeroSection /> 

        <section id="about-napcen" itemScope itemType="https://schema.org/AboutPage">
          <AboutUs />
        </section>

        <section id="industrial-services">
          <ServiceSection />
        </section>

        <section id="pollution-control-products" itemScope itemType="https://schema.org/Product">
          <OurProductsSection />
        </section>

        <section id="industry-applications">
          <IndustrialApplicationsSection activeLink={''} />
        </section>

        <VideoSection />
        <PartnerSection />
        <AnimatedCounters />

        <section id="faq" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection />
        </section>
      </main>
    </>
  );
}