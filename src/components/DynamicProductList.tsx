'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

interface Product {
  label: string;
  slug: string;
  description: string;
  image: any;
}

interface DynamicProductListProps {
  title: string;
  products: Product[];
  categorySlug: string;
  seoDescription?: string;
}

export default function DynamicProductList({ 
  title, 
  products, 
  categorySlug 
}: DynamicProductListProps) {
  if (products.length === 0) return null;

  const getCategoryH1 = () => {
    const mappings: Record<string, string> = {
      'wet-scrubbers': 'Wet Scrubber Manufacturer | Puducherry & Chennai',
      'dust-collectors': 'Dust Collector Manufacturer | Tamil Nadu',
      'fume-extractors': 'Fume Extractor Manufacturer | India',
      'dry-scrubbers': 'Dry Scrubber Manufacturer | CPCB Compliant',
      'downdraft-tables': 'Downdraft Table Manufacturer | NAPCEN',
    };
    return mappings[categorySlug] || `${title} Manufacturer in Puducherry`;
  };

  return (
    <section 
      className="relative bg-[#0A1F22] py-20 md:py-32 overflow-hidden selection:bg-cyan-500/30"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="relative z-10 mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#00E5FF] animate-pulse" />
            <p className="text-[#00E5FF] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Industrial Air Solutions // 2025
            </p>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter mb-6">
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-emerald-400">Systems</span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-400 font-medium border-l-2 border-[#00E5FF] pl-6 py-2">
            {getCategoryH1()}
          </p>
        </div>

        {/* MARQUEE ENGINE */}
        <div className="relative group/marquee">
          {/* Visual Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A1F22] to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A1F22] to-transparent z-20" />

          <div className="flex overflow-hidden select-none">
            <div className="flex flex-nowrap shrink-0 gap-6 py-10 animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {/* Loop twice for perfect continuous scroll */}
              {[...products, ...products].map((product, index) => (
                <div 
                  key={`${product.slug}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]"
                >
                  <ProductCard 
                    product={product} 
                    categorySlug={categorySlug} 
                    priority={index < 4} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product, categorySlug, priority }: { product: Product, categorySlug: string, priority: boolean }) {
  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="group block h-full bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-4 transition-all duration-500 hover:border-[#00E5FF]/50 hover:bg-white/[0.07] hover:-translate-y-2"
    >
      {/* Image Container with Soft Shadow */}
      <div className="relative h-60 md:h-72 bg-white rounded-[2rem] flex items-center justify-center overflow-hidden shadow-inner">
        <Image
          src={product.image?.src || '/images/placeholder.jpg'}
          alt={product.label}
          fill
          className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
          priority={priority}
          sizes="(max-width: 768px) 280px, 380px"
        />
        
        {/* Quality Badge */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
          99.9% Efficiency
        </div>
      </div>

      {/* Textual Info */}
      <div className="pt-8 pb-4 px-4 text-center">
        <h3 className="text-white font-black text-lg md:text-xl mb-3 uppercase tracking-tight group-hover:text-[#00E5FF] transition-colors">
          {product.label}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#00E5FF]">
          <span>Exploration Data</span>
          <div className="w-8 h-[1px] bg-[#00E5FF]/30 transition-all group-hover:w-12 group-hover:bg-[#00E5FF]" />
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}