'use client';

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// SEO KEYWORD TARGETS:
// consulting, design, custom engineering, site assessment,
// manufacturing, wet scrubber, dry scrubber, dust collector,
// PP FRP scrubber, fume extractor, downdraft table, blower,
// installation, commissioning, turnkey, CPCB, TNPCB,
// maintenance, AMC, annual maintenance contract, service India
// ─────────────────────────────────────────────────────────────

const services = [
  {
    image: '/assets/images/design-consulting.webp',
    title: 'Consulting & Design',
    // Short card description (UI)
    description: 'Custom engineering and site assessment for air pollution control systems.',
    // Full SEO description (hidden text block)
    seoDescription:
      'NAPCEN provides expert consulting and custom engineering design for industrial air pollution control systems. Our engineers conduct detailed site assessments and select the right equipment — wet scrubbers, dry scrubbers, PP FRP scrubbers, dust collectors, fume extractors, downdraft tables, or ventilation systems — based on your industry, pollutant type, and CPCB/TNPCB compliance requirements.',
    link: '/services/consulting-design',
    keywords: ['Air pollution control design', 'Custom scrubber engineering', 'Industrial ventilation design India', 'CPCB compliance consulting'],
  },
  {
    image: '/assets/images/manufacturing.webp',
    title: 'Manufacturing & Supply',
    description: 'Factory-direct wet scrubbers, dust collectors, fume extractors & more from Puducherry.',
    seoDescription:
      'NAPCEN manufactures and supplies a complete range of industrial air pollution control equipment from our facility in Puducherry, India. Products include wet scrubbers (packed bed, venturi, ammonia, HCL), dry scrubbers, PP FRP scrubbers, pulse jet dust collectors, cyclone dust collectors, cartridge dust collectors, welding fume extractors, downdraft tables, fume hoods, industrial blowers, heat exchangers, oil mist collectors, and grossing stations. Factory-direct pricing with guaranteed performance certificates.',
    link: '/services/manufacturing',
    keywords: ['Wet scrubber manufacturer India', 'Dust collector manufacturer Puducherry', 'PP FRP scrubber manufacturer', 'Industrial blower manufacturer Tamil Nadu'],
  },
  {
    image: '/assets/images/installation.webp',
    title: 'Installation & Commissioning',
    description: 'Certified technicians for on-site installation and commissioning across India.',
    seoDescription:
      'NAPCEN\'s experienced installation team handles complete on-site setup and commissioning of all air pollution control equipment including wet scrubbers, dust collectors, fume extraction systems, downdraft tables, industrial blowers, and ducting systems. We serve Chennai, Tamil Nadu, Puducherry, Bengaluru, Hyderabad, Mumbai, and all India with turnkey installation services. All installations include performance testing and CPCB/TNPCB compliance documentation.',
    link: '/services/installation',
    keywords: ['Wet scrubber installation India', 'Dust collector installation Tamil Nadu', 'Air pollution control installation', 'Turnkey pollution control project India'],
  },
  {
    image: '/assets/images/maintenance.webp',
    title: 'Maintenance & AMC',
    description: 'Annual Maintenance Contracts (AMC) to keep your pollution control systems at peak efficiency.',
    seoDescription:
      'NAPCEN offers comprehensive Annual Maintenance Contracts (AMC) and breakdown service for all industrial air pollution control equipment. Our maintenance services cover wet scrubbers, dry scrubbers, dust collectors, fume extractors, downdraft tables, industrial blowers, and complete ventilation systems. Regular preventive maintenance ensures CPCB/TNPCB compliance, extends equipment life, and prevents costly shutdowns. Service available pan India.',
    link: '/services/maintenance',
    keywords: ['Wet scrubber AMC India', 'Dust collector maintenance service', 'Air pollution control AMC', 'Industrial scrubber service contract India'],
  },
] as const;

// ── UI Components ──

const GlassButton = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider transition-all hover:bg-cyan-600 group/btn">
    {text}
    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
  </div>
);

const MobileBoxCard = memo(({ service }: { service: typeof services[number] }) => (
  <Link
    href={service.link}
    className="flex-shrink-0 w-[150px] h-[210px] rounded-xl overflow-hidden bg-[#111] border border-white/10 flex flex-col snap-center"
    aria-label={service.title}
  >
    <div className="flex-none h-[120px] relative">
      <Image
        src={service.image}
        alt={`NAPCEN ${service.title} - ${service.keywords[0]}`}
        fill
        sizes="150px"
        className="object-cover"
        loading="eager"
        quality={60}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1414] to-transparent" />
    </div>
    <div className="flex-1 p-3 flex flex-col justify-between">
      <p className="text-white font-bold text-[11px] leading-tight uppercase tracking-tight">
        {service.title}
      </p>
      <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-tighter">Learn More</span>
    </div>
  </Link>
));
MobileBoxCard.displayName = 'MobileBoxCard';

// ── Main Section ──

function ServicesSection() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-16 px-6 md:px-12 bg-[#0a0f0f] text-white relative overflow-hidden"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section Heading ── */}
        <div className="text-center mb-10">
          <p className="text-cyan-500 font-bold mb-2 text-[11px] uppercase tracking-[0.4em]">
            Our Core Services
          </p>
          <h2
            id="services-heading"
            className="font-black text-2xl md:text-4xl uppercase tracking-tighter"
          >
            Design. Build. Install.{' '}
            <span className="text-cyan-400">Maintain.</span>
          </h2>
          {/* SEO subtitle — keywords for service types */}
          <p className="mt-3 text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            End-to-end air pollution control solutions — consulting, manufacturing, installation,
            and AMC for wet scrubbers, dust collectors, fume extractors &amp; more across India.
          </p>
        </div>

        {/* ── Desktop Accordion ── */}
        <div
          className="hidden md:flex flex-row gap-3 justify-center items-stretch h-[380px]"
          role="list"
          aria-label="NAPCEN service categories"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              role="listitem"
              className={`relative transition-all duration-500 ease-in-out cursor-pointer
                ${activeCard === idx ? 'w-[45%]' : 'w-[14%]'}`}
              onMouseEnter={() => setActiveCard(idx)}
            >
              <Link
                href={service.link}
                className="block h-full w-full"
                aria-label={`${service.title} — ${service.description}`}
              >
                <div className={`
                  relative w-full h-full rounded-2xl overflow-hidden border transition-all duration-500
                  ${activeCard === idx ? 'border-cyan-500/40 shadow-xl' : 'border-white/5'}
                  ${activeCard !== idx ? 'md:grayscale md:opacity-50' : ''}
                `}>
                  <Image
                    src={service.image}
                    alt={`NAPCEN ${service.title} — ${service.keywords[0]}`}
                    fill
                    sizes="(max-width: 1200px) 50vw, 400px"
                    className="object-cover"
                    priority={idx === 0}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    quality={75}
                  />

                  {/* Expanded overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6
                    ${activeCard === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-white font-bold text-xl mb-2 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs max-w-xs mb-2 leading-relaxed">
                      {service.description}
                    </p>
                    {/* Keyword chips */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.keywords.slice(0, 2).map((kw) => (
                        <span
                          key={kw}
                          className="text-[9px] text-cyan-300/70 border border-cyan-400/20 rounded-full px-2 py-0.5"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <GlassButton text="Learn More" />
                  </div>

                  {/* Vertical title (collapsed state) */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                    ${activeCard === idx ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="rotate-90 whitespace-nowrap text-white/50 font-bold uppercase tracking-[0.2em] text-[10px]">
                      {service.title}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* ── Mobile Scroller ── */}
        <div
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          role="list"
          aria-label="NAPCEN services"
        >
          {services.map((service, idx) => (
            <MobileBoxCard key={idx} service={service} />
          ))}
        </div>

        {/* ── SEO Text Block: Full service descriptions ──
            Visible to Google crawlers, styled subtly below the cards */}
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3
                className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-2"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p
                className="text-white/60 text-xs sm:text-sm leading-relaxed"
                itemProp="description"
              >
                {service.seoDescription}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] text-white/40 border border-white/10 rounded-full px-2 py-0.5"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Strip ── */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm mb-4">
            Need a complete air pollution control solution? We handle everything —
            from design to installation and annual maintenance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 transition-all shadow-lg hover:-translate-y-1"
            aria-label="Contact NAPCEN for air pollution control services"
          >
            Request a Free Consultation
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* ── Hidden SEO block ── */}
        <div className="sr-only">
          <p>
            NAPCEN industrial air pollution control services in Puducherry India.
            We provide consulting and design for wet scrubbers, dry scrubbers, dust collectors,
            fume extractors, and downdraft tables. Manufacturing and supply of PP FRP scrubbers,
            venturi scrubbers, packed bed scrubbers, pulse jet dust collectors, cyclone dust collectors,
            cartridge dust collectors, welding fume extractors, industrial blowers, heat exchangers,
            oil mist collectors, and fume hoods. On-site installation and commissioning across
            Chennai, Tamil Nadu, Bengaluru, Hyderabad, Mumbai, Delhi, and all India.
            Annual Maintenance Contracts (AMC) and breakdown service for all pollution control systems.
            CPCB and TNPCB compliant systems with performance guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesSection);