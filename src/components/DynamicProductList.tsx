'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

interface Product {
  label: string;
  slug: string;
  description: string;
  image: any; // Supports both static import objects and string URLs
}

interface DynamicProductListProps {
  title: string;
  products: Product[];
  categorySlug: string;
}

export default function DynamicProductList({ title, products, categorySlug }: DynamicProductListProps) {
  if (products.length === 0) return null;

  return (
    <section className="bg-gradient-to-l from-[#334746ff] to-[#151d1dff] py-20 md:py-28 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <p className="text-[#00E5FF] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Premium Solutions
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
              {title} <span className="text-[#00E5FF]">.</span>
            </h2>
          </div>
          <div className="hidden md:block w-40 h-1 bg-[#00E5FF]/50 rounded-full" />
        </div>

        {/* Marquee Container */}
        <div className="relative group">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-[#151d1dff] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-[#151d1dff] to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-8 py-8 hover:[animation-play-state:paused]">
              
              {/* SET 1: Real SEO-visible cards */}
              {products.map((product, index) => (
                <ProductCard
                  key={`real-${product.slug}`}
                  product={product}
                  categorySlug={categorySlug}
                  priority={index < 3}
                />
              ))}

              {/* SET 2: Visual clone (hidden from screen readers) */}
              {products.map((product) => (
                <div key={`clone1-${product.slug}`} aria-hidden="true">
                  <ProductCard product={product} categorySlug={categorySlug} isClone />
                </div>
              ))}

              {/* SET 3: Second visual clone for seamless loop */}
              {products.map((product) => (
                <div key={`clone2-${product.slug}`} aria-hidden="true">
                  <ProductCard product={product} categorySlug={categorySlug} isClone />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

// Product Card Component
function ProductCard({
  product,
  categorySlug,
  isClone = false,
  priority = false,
}: {
  product: Product;
  categorySlug: string;
  isClone?: boolean;
  priority?: boolean;
}) {
  return (
    <div className="flex-shrink-0 w-[290px] sm:w-[340px] md:w-[380px] lg:w-[420px]">
      <Link
        href={`/products/${categorySlug}/${product.slug}`}
        className="block h-full"
        tabIndex={isClone ? -1 : 0}
      >
        <div className="group/card relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#00E5FF]/60 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#00E5FF]/20">
          
          <div className="relative h-64 md:h-72 bg-black/30 overflow-hidden">
            <Image
              src={product.image ?? '/images/placeholder-product.jpg'}  // Safe fallback
              alt={isClone ? "" : `${product.label} Industrial System`}
              fill
              sizes="(max-width: 768px) 290px, 420px"
              className="object-contain p-8 transition-transform duration-700 group-hover/card:scale-110"
              priority={priority}
              placeholder={product.image?.blurDataURL ? 'blur' : 'empty'}  // Blur for static imports
              blurDataURL={product.image?.blurDataURL}
            />
            <div className="absolute top-4 right-4 bg-[#00E5FF] text-black p-2.5 rounded-xl shadow-lg">
              <Zap className="w-5 h-5" />
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-black text-white mb-4 line-clamp-2 group-hover/card:text-[#00E5FF] transition-colors">
              {product.label}
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
              {product.description}
            </p>

            <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all group-hover:bg-[#00E5FF] group-hover:text-black group-hover:border-[#00E5FF]">
              View Details
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}