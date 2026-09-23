'use client';

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ----------------------------------------------------------------------
// CONFIGURATION: EXACT PATHS matching your public folder structure
// ----------------------------------------------------------------------
const PRODUCT_CATEGORIES = [
  { 
    name: 'Wet Scrubbers', 
    image: '/assets/images/Wet-scrubber-chennai.webp', 
    description: 'Efficiently remove pollutants like dust, gases, and chemicals from industrial exhaust using liquid sprays.', 
    link: '/products/wet-scrubbers' 
  },
  { 
    name: 'Dry Scrubbers', 
    image: '/assets/images/Dry-scrubber-pondicherry.webp', 
    description: 'Control emissions using dry reagents to neutralize acidic gases like SO₂, and HCl.', 
    link: '/products/all' 
  },
  { 
    name: 'Dust Collectors', 
    image: '/assets/images/products/dust-collector/Baghouse-duct-collector-chennai.webp', 
    description: 'Capture and filter dust particles to maintain clean air in facilities.', 
    link: '/products/dust-collectors' 
  },
  { 
    name: 'Fume Extractor', 
    image: '/assets/images/products/fume-extractor/Welding-fume-extractor.webp', 
    description: 'Remove harmful fumes and gases from welding, soldering, or chemical processes.', 
    link: '/products/fume-extractors' 
  },
  { 
    name: 'Downdraft Table', 
    image: '/assets/images/products/downdraft-table/welding-downdraft-table.webp', 
    description: 'Capture dust and fumes during cutting, grinding, or welding.', 
    link: '/products/downdraft-tables' 
  },
];

export default function OurProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  // Auto-cycle effect
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCT_CATEGORIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      
      {/* 1. INSTANT LOAD PRELOADER (Hidden from view)
          This renders all images at 1px size to force the browser to cache them. 
          This is why the images will feel "instant" when you click the buttons. */}
      <div className="hidden" aria-hidden="true">
        {PRODUCT_CATEGORIES.map((cat) => (
          <Image 
            key={`preload-${cat.name}`} 
            src={cat.image} 
            alt="preload" 
            width={1} 
            height={1} 
            priority={true} 
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-text-main uppercase mb-4 tracking-tight">
            Our Core Solutions
          </h2>
          <div className="w-24 h-1 bg-primary-blue mx-auto mb-4" />
          <p className="text-text-muted max-w-xl mx-auto">
            Advanced engineering for industrial air quality and environmental compliance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          
          {/* Navigation Menu */}
          <nav className="w-full lg:w-[320px] space-y-3">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <button
                key={i}
                onMouseEnter={() => { setActiveIndex(i); setIsAutoCycling(false); }}
                onMouseLeave={() => setIsAutoCycling(true)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 
                  ${activeIndex === i 
                    ? 'bg-primary-blue border-primary-blue text-white shadow-lg' 
                    : 'bg-white border-primary-blue/10 text-text-muted hover:border-primary-blue/50 shadow-sm hover:shadow-md'}`}
              >
                <span className="text-lg font-bold uppercase tracking-wide">{cat.name}</span>
                <ArrowForwardIcon className={activeIndex === i ? 'text-white' : 'text-primary-blue'} />
              </button>
            ))}
          </nav>

          {/* Active Product Content Card */}
          <div className="w-full lg:max-w-[800px] min-h-[420px] bg-white rounded-[40px] border border-primary-blue/10 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative">
            
            <div className="flex-1 space-y-6 text-center md:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-black uppercase tracking-widest">
                Technical Expertise
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-text-main transition-all duration-300">
                {PRODUCT_CATEGORIES[activeIndex].name}
              </h3>
              <p className="text-text-muted leading-relaxed text-lg min-h-[100px]">
                {PRODUCT_CATEGORIES[activeIndex].description}
              </p>
              <Link 
                href={PRODUCT_CATEGORIES[activeIndex].link}
                className="inline-flex items-center gap-3 bg-primary-blue text-white px-8 py-4 rounded-full font-bold hover:bg-primary-blue/90 transition-all group shadow-lg"
              >
                Explore Details
                <ArrowForwardIcon className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Product Image Box */}
            <div className="relative w-[280px] h-[280px] flex-shrink-0 group">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-primary-blue/10 blur-[40px] rounded-full group-hover:bg-primary-blue/20 transition-all duration-700" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-primary-blue/10 shadow-xl bg-bg-light">
                <Image
                  // KEY is vital here to trigger the transition effect when the index changes
                  key={PRODUCT_CATEGORIES[activeIndex].image} 
                  src={PRODUCT_CATEGORIES[activeIndex].image}
                  alt={PRODUCT_CATEGORIES[activeIndex].name}
                  fill
                  sizes="280px"
                  priority={true} // Priority loading for the active product
                  className="object-cover animate-in fade-in zoom-in-95 duration-500"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- SEO STRUCTURED DATA --- */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "NAPCEN Industrial Air Solutions",
          "itemListElement": PRODUCT_CATEGORIES.map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": c.name,
              "description": c.description,
              "url": `https://fumescrubbers.com${c.link}`
            }
          }))
        })}} />
      </div>
    </section>
  );
}