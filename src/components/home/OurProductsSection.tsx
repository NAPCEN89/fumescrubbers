'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// --- CONFIGURATION: String paths are much faster for Metanet static exports ---
// --- CONFIGURATION: EXACT PATHS matching your public folder structure ---
const PRODUCT_CATEGORIES = [
  { 
    name: 'Wet Scrubbers', 
    // Path updated: 'Wet scrubber' -> 'wet-scrubber'
    image: '/assets/images/Wet-scrubber-chennai.webp', 
    description: 'Efficiently remove pollutants like dust, gases, and chemicals from industrial exhaust using liquid sprays.', 
    link: '/products/wet-scrubbers' 
  },
  { 
    name: 'Dry Scrubbers', 
    // Direct path in assets/images
    image: '/assets/images/Dry-scrubber-pondicherry.webp', 
    description: 'Control emissions using dry reagents to neutralize acidic gases like SO₂ and HCl.', 
    link: '/products/dry-scrubbers' 
  },
  { 
    name: 'Dust Collectors', 
    // Path updated: 'dust collector' -> 'dust-collector'
    image: '/assets/images/products/dust-collector/Baghouse-duct-collector-chennai.webp', 
    description: 'Capture and filter dust particles to maintain clean air in facilities.', 
    link: '/products/dust-collectors' 
  },
  { 
    name: 'Fume Extractor', 
    // Path updated: 'Fume extractor' -> 'fume-extractor'
    image: '/assets/images/products/fume-extractor/Welding-fume-extractor.webp', 
    description: 'Remove harmful fumes and gases from welding, soldering, or chemical processes.', 
    link: '/products/fume-extractors' 
  },
  { 
    name: 'Downdraft Table', 
    // Path updated: 'Downdraft tbale' -> 'downdraft-table'
    image: '/assets/images/products/downdraft-table/welding-downdraft-table.webp', 
    description: 'Capture dust and fumes during cutting, grinding, or welding.', 
    link: '/products/downdraft-tables' 
  },
];
export default function OurProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCT_CATEGORIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  return (
    <section className="py-16 md:py-24 bg-[#0a1111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-cyan-400 uppercase mb-4 tracking-tight">
            Our Core Solutions
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Advanced engineering for industrial air quality and environmental compliance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          
          {/* Nav List */}
          <nav className="w-full lg:w-[320px] space-y-3">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <button
                key={i}
                onMouseEnter={() => { setActiveIndex(i); setIsAutoCycling(false); }}
                onMouseLeave={() => setIsAutoCycling(true)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 
                  ${activeIndex === i 
                    ? 'bg-cyan-500 border-cyan-300 text-black shadow-[0_10px_30px_rgba(0,229,255,0.3)]' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-cyan-500/50'}`}
              >
                <span className="text-lg font-bold uppercase tracking-wide">{cat.name}</span>
                <ArrowForwardIcon className={activeIndex === i ? 'text-black' : 'text-cyan-500'} />
              </button>
            ))}
          </nav>

          {/* Card Area */}
          <div className="w-full lg:max-w-[800px] min-h-[420px] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-[40px] border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative">
            
            <div className="flex-1 space-y-6 text-center md:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest">
                Technical Expertise
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                {PRODUCT_CATEGORIES[activeIndex].name}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {PRODUCT_CATEGORIES[activeIndex].description}
              </p>
              <Link 
                href={PRODUCT_CATEGORIES[activeIndex].link}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all group"
              >
                Explore Details
                <ArrowForwardIcon className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Image Box */}
            <div className="relative w-[280px] h-[280px] flex-shrink-0 group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[40px] rounded-full group-hover:bg-cyan-500/40 transition-all" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl bg-[#111]">
                <Image
                  key={PRODUCT_CATEGORIES[activeIndex].name} 
                  src={PRODUCT_CATEGORIES[activeIndex].image}
                  alt={PRODUCT_CATEGORIES[activeIndex].name}
                  fill
                  sizes="280px"
                  loading="lazy" // High performance: don't load until visible
                  className="object-cover transition-opacity duration-500"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SEO Script */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "NAPCEN Industrial Products",
          "itemListElement": PRODUCT_CATEGORIES.map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": c.name,
              "description": c.description
            }
          }))
        })}} />
      </div>
    </section>
  );
}