'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Schedule,
  Security,
  Engineering,
  Build,
  Star,
  Handshake,
  VerifiedUser,
} from '@mui/icons-material';

const ABOUT_IMAGE_SRC = '/napcenAbout.webp';
const BG_IMAGE_SRC = '/bgnap.jpeg';

// ── Trust badges shown below the about card ──
const features = [
  { icon: <Schedule className="w-6 h-6" />,     text: 'On-Time Delivery' },
  { icon: <Security className="w-6 h-6" />,     text: 'Safe Workplaces' },
  { icon: <Engineering className="w-6 h-6" />,  text: 'Expert Engineers' },
  { icon: <Build className="w-6 h-6" />,        text: 'Advanced Technology' },
  { icon: <Star className="w-6 h-6" />,         text: 'ISO Certified' },
  { icon: <VerifiedUser className="w-6 h-6" />, text: 'CPCB / TNPCB Compliant' },
  { icon: <Handshake className="w-6 h-6" />,    text: 'AMC & After-Sales Service' },
] as const;

// ── Key stats shown in the about card ──
const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '10+', label: 'Countries Served' },
] as const;

// ── All product lines — rendered as visible SEO text ──
const PRODUCTS = [
  // Scrubbers
  'Wet Scrubbers', 'Dry Scrubbers', 'Packed Bed Scrubbers', 'Venturi Scrubbers',
  'Ammonia Scrubbers', 'HCL Scrubbers', 'Multi-Stage Scrubbers', 'PP FRP Scrubbers',
  // Dust Collectors
  'Pulse Jet Dust Collectors', 'Cyclone Dust Collectors', 'Cartridge Dust Collectors',
  'Baghouse Dust Collectors', 'Wet Dust Collectors',
  // Fume & Extraction
  'Welding Fume Extractors', 'Portable Fume Extractors', 'Centralized Fume Extraction Systems',
  'Downdraft Tables', 'Fume Hoods',
  // Mechanical
  'Industrial Blowers', 'FRP Blowers', 'Heat Exchangers', 'Oil Mist Collectors',
  // Other
  'Grossing Stations', 'Ducting Systems', 'FRP Lining Services', 'Industrial Ventilation Systems',
] as const;

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE_SRC}
          alt="NAPCEN Industrial Air Pollution Control Manufacturing Facility Puducherry"
          fill
          className="object-cover brightness-[0.35]"
          quality={70}
          priority
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Heading ── */}
        <h2
          id="about-heading"
          className="text-center font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-[#00BFFF] to-[#4adeff] bg-clip-text text-transparent"
          itemProp="name"
        >
          About NAPCEN
        </h2>
        <p className="text-center text-white/60 text-base md:text-lg mb-12 md:mb-20">
          Industrial Air Pollution Control Equipment Manufacturer — Puducherry, India
        </p>

        {/* ── Main About Card ── */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── Text Content ── */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-[#00E5FF] font-bold text-xl md:text-2xl mb-3">
                Innovating for a Cleaner Tomorrow
              </p>

              <h3 className="font-black text-3xl md:text-4xl lg:text-5xl mb-6 text-white leading-tight">
                India's Trusted Air Pollution{' '}
                <span className="text-[#00E5FF]">Control Experts</span>
              </h3>

              {/* Primary description with keyword-rich content */}
              <p
                className="text-gray-200 text-base md:text-lg leading-relaxed mb-4"
                itemProp="description"
              >
                NAPCEN is a leading manufacturer and supplier of industrial air pollution control
                equipment based in <strong className="text-white">Puducherry (Pondicherry), India</strong>.
                We design, fabricate, install, and maintain high-performance air filtration systems
                for industries across <strong className="text-white">Chennai, Tamil Nadu</strong>, and
                all of India.
              </p>

              {/* Product keyword paragraph */}
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                Our product range includes{' '}
                <span className="text-[#00E5FF] font-bold">Wet Scrubbers</span> (Packed Bed, Venturi,
                Ammonia, HCL),{' '}
                <span className="text-[#00E5FF] font-bold">Dry Scrubbers</span>,{' '}
                <span className="text-[#00E5FF] font-bold">PP FRP Scrubbers</span>,{' '}
                <span className="text-[#00E5FF] font-bold">Dust Collectors</span> (Pulse Jet, Cyclone,
                Cartridge, Baghouse),{' '}
                <span className="text-[#00E5FF] font-bold">Fume Extractors</span>,{' '}
                <span className="text-[#00E5FF] font-bold">Downdraft Tables</span>,{' '}
                <span className="text-[#00E5FF] font-bold">Fume Hoods</span>,{' '}
                <span className="text-[#00E5FF] font-bold">Industrial Blowers</span>,{' '}
                <span className="text-[#00E5FF] font-bold">Heat Exchangers</span>, and{' '}
                <span className="text-[#00E5FF] font-bold">Oil Mist Collectors</span>.
              </p>

              {/* Services paragraph */}
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
                We offer complete turnkey solutions — from design consultation and custom fabrication
                to on-site installation, commissioning, and{' '}
                <span className="text-[#00E5FF] font-bold">Annual Maintenance Contracts (AMC)</span>.
                All systems are <strong className="text-white">CPCB and TNPCB compliant</strong> with
                guaranteed performance certificates.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center bg-white/5 rounded-2xl p-3 border border-white/10">
                    <p className="text-[#00E5FF] font-black text-2xl md:text-3xl">{s.value}</p>
                    <p className="text-white/70 text-xs mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#00E5FF] text-black font-bold rounded-full hover:bg-[#4adeff] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                aria-label="Get a free quote from NAPCEN for air pollution control equipment"
              >
                Get Free Quote Today
              </Link>
            </div>

            {/* ── Factory Image ── */}
            <div className="order-1 md:order-2">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700 aspect-[3/2] bg-white/10"
              >
                <Image
                  src={ABOUT_IMAGE_SRC}
                  alt="NAPCEN manufacturing facility producing wet scrubbers dust collectors and fume extractors in Puducherry India"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                  priority
                  loading="eager"
                  quality={85}
                  itemProp="image"
                />
              </div>

              {/* Caption below image — adds crawlable location + product text */}
              <p className="text-center text-white/50 text-xs mt-3 italic">
                NAPCEN Manufacturing Facility — Villianur, Puducherry, India
              </p>
            </div>
          </div>
        </div>

        {/* ── Trust Feature Badges ── */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-semibold text-sm md:text-base shadow-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-[#00E5FF]" aria-hidden="true">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Full Product List — SEO keyword text block ──
            Visible to Google, styled subtly so it doesn't clutter the UI */}
        <div className="mt-14 text-center">
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
            Our Complete Product Range
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {PRODUCTS.map((product, i) => (
              <React.Fragment key={product}>
                <span className="text-white/50 text-xs sm:text-sm">{product}</span>
                {i < PRODUCTS.length - 1 && (
                  <span className="text-cyan-400/30 text-xs" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Export Markets ── */}
        <p className="text-center mt-10 text-base md:text-lg text-white/70 italic" itemProp="areaServed">
          Proudly Serving India &bull; UAE &bull; Saudi Arabia &bull; Malaysia &bull; Sri Lanka
        </p>

        {/* ── Hidden SEO block for all keyword variants ── */}
        <div className="sr-only">
          <p>
            NAPCEN — Air pollution control equipment manufacturer in Puducherry Pondicherry India.
            Manufacturer and supplier of wet scrubbers, dry scrubbers, packed bed scrubbers,
            venturi scrubbers, ammonia scrubbers, HCL scrubbers, PP FRP scrubbers,
            pulse jet bag filter dust collectors, cyclone dust collectors, cartridge dust collectors,
            baghouse dust collectors, welding fume extractors, downdraft tables, grinding downdraft tables,
            fume hoods, industrial fume hoods, laboratory fume hoods, centrifugal blowers, FRP blowers,
            heat exchangers, oil mist collectors, grossing stations, industrial ventilation systems,
            ducting fabrication, FRP lining services in Chennai, Coimbatore, Madurai, Trichy,
            Bengaluru, Hyderabad, Mumbai, Delhi and across India. Installation, commissioning
            and annual maintenance contracts (AMC) for all pollution control equipment.
            CPCB compliant, TNPCB compliant systems with performance guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}