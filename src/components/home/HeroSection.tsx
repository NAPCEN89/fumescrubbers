'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  tag: string;
  titleLight: string;
  titleBold: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  bgImage: string;
  navLabel: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tag: 'CLEAN AIR SYSTEMS · CPCB / TNPCB COMPLIANT',
    titleLight: 'Industrial Air Pollution:',
    titleBold: 'Engineered For Zero Emissions.',
    description:
      'High-performance PP FRP Scrubbers, Venturi systems, and packed bed absorption units designed to eliminate toxic acid and chemical fumes with guaranteed regulatory compliance across India.',
    ctaText: 'EXPLORE WET SCRUBBERS',
    ctaHref: '/products/wet-scrubbers',
    bgImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    navLabel: 'WET & DRY SCRUBBERS',
  },
  {
    id: 2,
    tag: 'PARTICULATE CAPTURE · ADVANCED FILTRATION',
    titleLight: 'Pulse Jet Filtration:',
    titleBold: 'Continuous Dust Extraction.',
    description:
      'Heavy-duty cyclone dust collectors, cartridge collectors, and downdraft tables engineered to capture fine airborne particles, metallic dust, and welding fumes directly at the source.',
    ctaText: 'VIEW DUST COLLECTORS',
    ctaHref: '/products/dust-collectors',
    bgImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    navLabel: 'DUST EXTRACTION',
  },
  {
    id: 3,
    tag: 'END-TO-END ENGINEERING · FACTORY DIRECT',
    titleLight: 'Turnkey Solutions:',
    titleBold: 'From Blueprint To Commissioning.',
    description:
      'Complete turnkey ventilation, high-efficiency centrifugal blowers, FRP ducting, and long-term annual maintenance contracts (AMC) backed by certified fabrication standards.',
    ctaText: 'REQUEST PROJECT QUOTE',
    ctaHref: '/contact',
    bgImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    navLabel: 'TURNKEY VENTILATION',
  },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-zinc-950 text-white select-none"
    >
      {/* ── BACKGROUND SLIDES WITH CROSSFADE ── */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out scale-105"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.08)',
            }}
          />
          {/* Multi-stage dark gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>
      ))}

      {/* ── LEFT & RIGHT NAVIGATION ARROWS ── */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 border border-white/20 hover:border-white/70 bg-black/40 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 border border-white/20 hover:border-white/70 bg-black/40 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── TOP SPACER FOR NAVBAR ── */}
      <div className="pt-24 sm:pt-28" />

      {/* ── MAIN EDITORIAL SLIDE CONTENT ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-3xl">
          
          {/* Category Tag */}
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
              {SLIDES[currentSlide].tag}
            </span>
          </div>

          {/* Heading with Serif Editorial Styling */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.08] mb-6"
          >
            {SLIDES[currentSlide].titleLight}{' '}
            <span className="block font-semibold text-zinc-100">
              {SLIDES[currentSlide].titleBold}
            </span>
          </h1>

          {/* Detailed Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl mb-8">
            {SLIDES[currentSlide].description}
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={SLIDES[currentSlide].ctaHref}
              className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white hover:text-cyan-400 transition-colors py-2 border-b-2 border-cyan-500 hover:border-white"
            >
              <span>{SLIDES[currentSlide].ctaText}</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-zinc-300 hover:text-white border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Compliance Chips */}
          <div className="mt-10 flex flex-wrap gap-2 text-xs">
            {['CPCB / TNPCB Compliant', 'Pan-India Installation', 'AMC Support', 'Custom Fabrication'].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-sm text-[11px] uppercase tracking-wider"
              >
                <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {chip}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* ── BOTTOM TAB NAVIGATION BAR (MATCHING THE IMAGE) ── */}
      <div className="relative z-20 border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between py-4 gap-4">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`group text-left relative py-2 transition-all ${
                  idx === currentSlide ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                }`}
              >
                <span className="text-[11px] sm:text-xs tracking-[0.2em] font-medium uppercase text-white">
                  {slide.navLabel}
                </span>
                {/* Active Underline */}
                <div
                  className={`mt-1.5 h-[2px] w-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-cyan-400' : 'bg-transparent group-hover:bg-white/30'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Slide Numbers Indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-zinc-400">
            <span className="text-white font-mono font-medium">0{currentSlide + 1}</span>
            <span className="text-zinc-600">/</span>
            <span className="font-mono">0{SLIDES.length}</span>
            
            {/* Circular Progress Accent */}
            <div className="relative w-5 h-5 ml-2">
              <svg className="w-5 h-5 -rotate-90">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" className="text-zinc-800" fill="transparent" />
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-cyan-400 transition-all duration-500"
                  fill="transparent"
                  strokeDasharray={50.2}
                  strokeDashoffset={50.2 - ((currentSlide + 1) / SLIDES.length) * 50.2}
                />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* ── SEO Product Keyword Ticker ── */}
      <div className="sr-only" aria-label="Products we manufacture">
        <p>Products We Manufacture &amp; Service:</p>
        <div>
          {PRODUCT_KEYWORDS.map((kw) => (
            <span key={kw}>{kw}</span>
          ))}
        </div>
      </div>

      {/* ── HIDDEN SEO TEXT BLOCK ── */}
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