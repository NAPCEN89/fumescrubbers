'use client';

import React from 'react';
import Link from 'next/link';

// ─────────────────────────────────────────────────────────────
// SEO KEYWORD TARGETS (for reference):
// Wet Scrubber, Dry Scrubber, PP FRP Scrubber, Venturi Scrubber,
// Packed Bed Scrubber, Ammonia Scrubber, HCL Scrubber,
// Dust Collector, Pulse Jet Bag Filter, Cyclone Dust Collector,
// Cartridge Dust Collector, Downdraft Table,
// Fume Extractor, Welding Fume Extractor, Fume Hood,
// Industrial Blower, Heat Exchanger, Oil Mist Collector,
// Installation, Maintenance, AMC, Pondicherry, Chennai, Tamil Nadu, India
// ─────────────────────────────────────────────────────────────

// All products shown in the rotating keyword ticker
const PRODUCT_KEYWORDS = [
  'Wet Scrubbers',
  'Dry Scrubbers',
  'PP FRP Scrubbers',
  'Venturi Scrubbers',
  'Packed Bed Scrubbers',
  'Ammonia Scrubbers',
  'HCL Scrubbers',
  'Pulse Jet Dust Collectors',
  'Cyclone Dust Collectors',
  'Cartridge Dust Collectors',
  'Downdraft Tables',
  'Welding Fume Extractors',
  'Fume Hoods',
  'Industrial Blowers',
  'Oil Mist Collectors',
  'Heat Exchangers',
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-screen pt-20 md:pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Place your background image here */}
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(5,15,35,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── MAIN HERO CONTENT ── */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
          <span className="text-cyan-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            CPCB / TNPCB Compliant Manufacturer — Puducherry, India
          </span>
        </div>

        {/* ── H1: Primary SEO Heading ── */}
        {/* Contains top keywords: product names + location + action */}
        <h1
          id="hero-heading"
          className="font-black text-white tracking-tight leading-tight text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Industrial{' '}
          <span className="text-cyan-400">Air Pollution</span>
          <br />
          Control Solutions
        </h1>

        {/* ── H2-level subheading: Secondary SEO keywords ── */}
        <p className="mt-5 text-lg sm:text-xl md:text-2xl font-bold text-white/95 tracking-wide">
          Wet Scrubber &bull; Dry Scrubber &bull; Dust Collector &bull; Fume Extractor &bull; Downdraft Table
        </p>

        {/* ── Description: Long-tail keywords, USPs, location ── */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
          NAPCEN is a trusted manufacturer &amp; supplier of industrial air pollution control equipment in{' '}
          <strong className="text-white">Puducherry (Pondicherry)</strong>, serving{' '}
          <strong className="text-white">Chennai, Tamil Nadu &amp; all of India</strong>. We design, manufacture,
          install, and maintain PP FRP Scrubbers, Venturi Scrubbers, Packed Bed Scrubbers, Pulse Jet Dust Collectors,
          Cyclone Dust Collectors, Welding Fume Extractors, Downdraft Tables, Industrial Blowers, Fume Hoods,
          Oil Mist Collectors, and Heat Exchangers — factory-direct with guaranteed performance.
        </p>

        {/* ── USP Chips: Services + Compliance ── */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
          {[
            '✅ Design & Manufacturing',
            '✅ Supply & Installation',
            '✅ Annual Maintenance (AMC)',
            '✅ CPCB / TNPCB Compliant',
            '✅ Custom Fabrication',
            '✅ FRP Lining Services',
          ].map((chip) => (
            <span
              key={chip}
              className="bg-white/10 border border-white/20 text-white/90 rounded-full px-3 py-1 font-medium"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-cyan-600 rounded-full hover:bg-cyan-500 transition-all shadow-lg hover:-translate-y-1"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white border-2 border-white/50 rounded-full hover:bg-white/10 transition-all shadow-lg hover:-translate-y-1"
          >
            Get Free Quote
          </Link>
        </div>

        {/* ── SEO Product Keyword Ticker ──
            Renders all product names as visible text for crawlers.
            Hidden visually (overflow) but fully readable by Google bots. */}
        <div
          className="mt-10 overflow-hidden"
          aria-label="Products we manufacture"
        >
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
            Products We Manufacture &amp; Service
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {PRODUCT_KEYWORDS.map((kw, i) => (
              <React.Fragment key={kw}>
                <span className="text-white/60 text-xs sm:text-sm font-medium">{kw}</span>
                {i < PRODUCT_KEYWORDS.length - 1 && (
                  <span className="text-cyan-400/50 text-xs" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>

      {/* ── HIDDEN SEO TEXT BLOCK ──
          Fully visible to Google, but blends into background.
          Covers all long-tail keyword combinations Google crawls. */}
      <div className="sr-only">
        <h2>Industrial Air Pollution Control Equipment Manufacturer in Puducherry India</h2>
        <p>
          NAPCEN manufactures and supplies: Industrial Wet Scrubbers, Packed Bed Scrubbers, Venturi Scrubbers,
          Ammonia Scrubbers, HCL Scrubbers, Multi-Stage Scrubbers, PP FRP Scrubbers, Dry Scrubbers,
          Pulse Jet Bag Filter Dust Collectors, Cyclone Dust Collectors, Cartridge Dust Collectors,
          Baghouse Dust Collectors, Wet Dust Collectors, Welding Fume Extractors, Portable Fume Extractors,
          Centralized Fume Extraction Systems, Downdraft Tables, Welding Downdraft Tables, Grinding Downdraft Tables,
          Fume Hoods, Industrial Fume Hoods, Laboratory Fume Hoods, Industrial Blowers, Centrifugal Blowers,
          FRP Blowers, Heat Exchangers, Oil Mist Collectors, Grossing Stations, Ducting Systems,
          Industrial Ventilation Systems, FRP Lining Services in Chennai, Tamil Nadu, Puducherry,
          Bengaluru, Hyderabad, Mumbai, Delhi and all India. Installation, commissioning, and annual
          maintenance contracts (AMC) available pan India.
        </p>
      </div>
    </section>
  );
}