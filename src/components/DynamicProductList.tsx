'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Activity, Settings2, ShieldAlert, Cpu } from 'lucide-react';

interface Product {
  label: string;
  slug: string;
  description: string;
  image: any;
  parentCategory?: string;
}

interface DynamicProductListProps {
  title: string;
  products: Product[];
  categorySlug: string;
}

export default function DynamicProductList({ 
  title, 
  products, 
  categorySlug 
}: DynamicProductListProps) {

  // --- 1. SMART PRE-CACHE ENGINE ---
  // Background-loads all 30+ product images during idle time to ensure marquee is flicker-free
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const warmUpCache = () => {
      // Use unique images to avoid redundant downloads
      const uniqueImages = Array.from(new Set(products.map(p => p.image?.src))).filter(Boolean);
      
      uniqueImages.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    };

    // requestIdleCallback prevents the cache-loading from slowing down the marquee animation
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(warmUpCache);
    } else {
      setTimeout(warmUpCache, 2000);
    }
  }, [products]);

  if (products.length === 0) return null;

  const getCategoryH1 = () => {
    const mappings: Record<string, string> = {
      'wet-scrubbers': 'Industrial Wet Scrubber & Fume Neutralization Systems',
      'dust-collectors': 'Industrial Baghouse & Dust Collection Systems',
      'fume-extractors': 'Portable & Fixed Fume Extraction Units',
      'dry-scrubbers': 'Dry Scrubber & VOC Adsorption Technology',
      'downdraft-tables': 'Industrial Downdraft Benches & Dust Tables',
      'all': 'Complete Master Catalog | Air Pollution Control Systems'
    };
    return mappings[categorySlug] || `${title} Systems Manufacturer India`;
  };

  // Logic to ensure the marquee is physically long enough to loop seamlessly
  const marqueeItems = products.length < 5 
    ? [...products, ...products, ...products, ...products] 
    : [...products, ...products];

  return (
    <section 
      className="relative bg-[#0A1F22] py-20 md:py-32 overflow-hidden selection:bg-cyan-500/30"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Aesthetic Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="relative z-10 mb-16 max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <Cpu className="w-5 h-5 text-[#00E5FF] animate-pulse" />
            <p className="text-[#00E5FF] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Industrial Engineering // {categorySlug === 'all' ? 'Master Catalog' : 'Technical Series'}
            </p>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter mb-6">
            {categorySlug === 'all' ? 'Master' : title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-emerald-400">Solutions</span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-400 font-medium border-l-2 border-[#00E5FF] pl-6 py-2 italic">
            {getCategoryH1()}
          </p>
        </div>

        {/* MARQUEE ENGINE */}
        <div className="relative group/marquee mb-24">
          {/* Edge Fades for Seamless Loop Look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A1F22] to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A1F22] to-transparent z-20" />

          <div className="flex overflow-hidden select-none">
            {/* The Animation Container */}
            <div className="flex flex-nowrap shrink-0 gap-6 py-10 animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {marqueeItems.map((product, index) => (
                <div 
                  key={`${product.slug}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]"
                >
                  <ProductCard 
                    product={product} 
                    categorySlug={categorySlug} 
                    priority={index < 5} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TECHNICAL AUTHORITY SECTION */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12 border-t border-white/5 pt-16">
          <div className="group bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-[#00E5FF]/20 transition-colors">
            <Activity className="w-8 h-8 text-cyan-500 mb-4" />
            <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-tight">Performance Ratio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Achieving <strong>99.9% filtration</strong> of particulate and gaseous pollutants using advanced media technologies.
            </p>
          </div>
          <div className="group bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors">
            <Settings2 className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-tight">MOC Excellence</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Constructed from <strong>certified PP-FRP and SS316L</strong>, ensuring operational longevity in corrosive environments.
            </p>
          </div>
          <div className="group bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-colors">
            <ShieldAlert className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-tight">Compliance Ready</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineered to surpass <strong>CPCB / SPCB emission norms</strong>, maintaining outlet concentrations below 50 mg/Nm³.
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind handles the animation, but global CSS ensures smoothness */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product, categorySlug, priority }: { product: Product, categorySlug: string, priority: boolean }) {
  const currentCategory = product.parentCategory || categorySlug;

  return (
    <Link
      href={`/products/${currentCategory}/${product.slug}`}
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/Product"
      className="group block h-full bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-4 transition-all duration-500 hover:border-[#00E5FF]/50 hover:bg-white/[0.07] hover:-translate-y-2"
    >
      <div className="relative h-60 md:h-72 bg-white rounded-[2rem] flex items-center justify-center overflow-hidden shadow-inner">
        <Image
          src={product.image?.src || '/images/placeholder.jpg'}
          alt={product.label}
          itemProp="image"
          fill
          className="object-contain p-10 transition-transform duration-700 group-hover:scale-105"
          priority={priority}
          sizes="(max-width: 768px) 280px, 380px"
          quality={85}
        />
        <div className="absolute bottom-4 left-4 bg-[#0A1F22]/90 backdrop-blur-md text-[#00E5FF] text-[9px] font-black px-3 py-1.5 rounded-full border border-[#00E5FF]/20 uppercase tracking-widest">
            CPCB Approved
        </div>
      </div>

      <div className="pt-8 pb-4 px-4 text-center">
        <h3 
          itemProp="name"
          className="text-white font-black text-lg md:text-xl mb-3 uppercase tracking-tight group-hover:text-[#00E5FF] transition-colors line-clamp-1"
        >
          {product.label}
        </h3>
        <p 
          itemProp="description"
          className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 line-clamp-2 h-10"
        >
          {product.description}
        </p>

        <div className="inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#00E5FF]">
          <span>Technical Profile</span>
          <div className="w-8 h-[1px] bg-[#00E5FF]/30 transition-all group-hover:w-12 group-hover:bg-[#00E5FF]" />
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}