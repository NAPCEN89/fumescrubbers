'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------


export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-screen pt-20 md:pt-24"
    >
      {/* OPTIMIZED BACKGROUND IMAGE 
         Using 'priority' ensures this loads first, fixing your LCP speed score.
      */}
      <div className="absolute inset-0 z-0">
       
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(5,15,35,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <h1
          id="hero-heading"
          className="font-black text-white tracking-tight leading-tight text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Industrial Air<br className="sm:hidden" />{' '}
          <span className="text-cyan-400">Pollution</span>
          <br className="hidden sm:block" /> Control Solutions
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-white/95">
          Wet Scrubber • Dry Scrubber • Dust Collector • Fume Extraction
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
          Leading manufacturer in Pondicherry, India. Factory-direct prices. 
          Trusted air pollution control solutions worldwide.
        </p>

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
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
}