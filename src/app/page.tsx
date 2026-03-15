// app/page.tsx — NAPCEN Homepage (SEO Optimized)
import HeroSection from '../components/home/HeroSection';
import AboutUs from '@/components/home/AboutUs';
import IndustrialApplicationsSection from '@/components/home/IndustrialApplicationsSection';
import ServiceSection from '@/components/home/ServiceSection';
import OurProductsSection from '@/components/home/OurProductsSection';
import VideoSection from '@/components/home/VideoSection';
import PartnerSection from '@/components/home/PartnerSection';
import AnimatedCounters from '@/components/home/CounterSection';
import FAQSection from '@/components/home/FaqSection';

// ─────────────────────────────────────────────────────────────
// HOMEPAGE-SPECIFIC STRUCTURED DATA
// Note: Organization + LocalBusiness schema lives in layout.tsx (global).
// This file only adds page-specific schemas: BreadcrumbList + FAQPage.
// ─────────────────────────────────────────────────────────────
const HomepageSchemas = () => (
  <>
    {/* BreadcrumbList — helps Google understand site hierarchy */}
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

    {/* FAQPage Schema — powers "People Also Ask" rich snippets on Google.
        These FAQs match the content rendered in <FAQSection />.
        Do NOT also add itemType="FAQPage" to the section tag — that causes duplication. */}
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
                "text": "A wet scrubber is an air pollution control device that removes harmful gases, toxic vapors, and particulates by passing exhaust air through a liquid spray or packed media. NAPCEN's packed bed and venturi scrubbers achieve up to 99% removal efficiency for HCl, ammonia, SO2, and other industrial gases."
              }
            },
            {
              "@type": "Question",
              "name": "Where are NAPCEN wet scrubbers and dust collectors manufactured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All NAPCEN equipment is designed and manufactured at our facility in Villianur, Puducherry, India. We supply industrial wet scrubbers, dust collectors, fume extractors, and PP FRP scrubbers to clients across Chennai, Tamil Nadu, Bengaluru, Hyderabad, and all of India, as well as exports to UAE, Saudi Arabia, Malaysia, and Sri Lanka."
              }
            },
            {
              "@type": "Question",
              "name": "Are NAPCEN air pollution control systems CPCB and TNPCB compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All NAPCEN wet scrubbers, dust collectors, fume extractors, and dry scrubbers are fully CPCB (Central Pollution Control Board) and TNPCB (Tamil Nadu Pollution Control Board) compliant. We provide guaranteed performance certificates and assist clients with pollution board approvals."
              }
            },
            {
              "@type": "Question",
              "name": "What industries do NAPCEN air pollution control systems serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NAPCEN serves a wide range of industries including pharmaceuticals, chemical processing, metal foundries, automotive, food processing, textiles, electronics manufacturing, semiconductor fabrication, electroplating, plastic processing, and hospital pathology labs across India and export markets."
              }
            },
            {
              "@type": "Question",
              "name": "What is the price of a wet scrubber or dust collector?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wet scrubber prices at NAPCEN start from ₹2.8 Lakh depending on capacity, material (PP-FRP, MS, SS304/316), and customization requirements. Dust collectors and fume extractors are priced based on airflow volume and filtration media. Contact us at sales@napcen.com or +91-7904469219 for a free quote."
              }
            },
            {
              "@type": "Question",
              "name": "What is a PP FRP scrubber and when is it used?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A PP FRP scrubber (Polypropylene Fibre Reinforced Plastic scrubber) is a corrosion-resistant air pollution control system used to handle highly corrosive acids, chlorine gas, and chemical fumes that would damage standard metal equipment. NAPCEN manufactures custom PP FRP scrubbers for chemical, electroplating, semiconductor, and pharmaceutical industries."
              }
            },
            {
              "@type": "Question",
              "name": "What types of dust collectors does NAPCEN manufacture?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NAPCEN manufactures a full range of industrial dust collectors including pulse jet bag filter dust collectors, cartridge dust collectors, cyclone separators, reverse air bag houses, and wet dust collectors. These are used for wood dust, metal dust, cement dust, chemical powder, and other industrial particulate control applications."
              }
            },
            {
              "@type": "Question",
              "name": "Does NAPCEN provide installation and after-sales service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. NAPCEN provides end-to-end services including design consulting, manufacturing, supply, installation, commissioning, and annual maintenance contracts (AMC) for all air pollution control equipment. Our service team supports clients across Tamil Nadu, Puducherry, and all India."
              }
            },
            {
              "@type": "Question",
              "name": "What is a fume hood and does NAPCEN supply them?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A fume hood is a ventilated enclosure used in laboratories and industrial settings to safely contain and exhaust hazardous chemical vapors, fumes, and gases. NAPCEN manufactures both laboratory fume hoods and industrial fume hoods as part of its comprehensive air pollution control product range."
              }
            },
            {
              "@type": "Question",
              "name": "Can NAPCEN handle large-scale industrial ventilation and ducting projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. NAPCEN has extensive experience designing and installing complete industrial ventilation systems including ductwork, industrial blowers, dampers, and control panels for factories, manufacturing plants, and processing units across India. We offer turnkey air pollution control project solutions."
              }
            }
          ]
        })
      }}
    />
  </>
);

// ─────────────────────────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* Page-specific structured data */}
      <HomepageSchemas />

      <main>
        {/* H1 in HeroSection should read something like:
            "Leading Wet Scrubber & Dust Collector Manufacturer in Puducherry | Serving Chennai & Tamil Nadu"
            Keep it text-based (not just an image) so Google can crawl it. */}
        <HeroSection />

        {/* About NAPCEN */}
        <section id="about-napcen" aria-label="About NAPCEN">
          <AboutUs />
        </section>

        {/* Services: Design, Manufacturing, Installation, Maintenance */}
        <section id="industrial-services" aria-label="NAPCEN Industrial Services">
          <ServiceSection />
        </section>

        {/* Products: Wet Scrubbers, Dust Collectors, FRP Scrubbers, Blowers, etc. */}
        <section id="pollution-control-products" aria-label="Air Pollution Control Products">
          <OurProductsSection />
        </section>

        {/* Industry Applications: Pharma, Chemical, Foundry, Automotive, etc. */}
        <section id="industry-applications" aria-label="Industries We Serve">
          <IndustrialApplicationsSection activeLink={''} />
        </section>

        {/* Video: NAPCEN facility / product demo */}
        <VideoSection />

        {/* Clients & Partners */}
        <PartnerSection />

        {/* Stats: Years, Projects, Clients, Countries */}
        <AnimatedCounters />

        {/* FAQ — content must match HomepageSchemas FAQPage above */}
        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQSection />
        </section>
      </main>
    </>
  );
}