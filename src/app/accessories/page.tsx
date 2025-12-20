'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, FilterX, Settings2, Package } from 'lucide-react';
import { AccesoriesData } from '@/lib/accessories-data';

const DARK_BG = '#0A1F22';

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState(AccesoriesData[0]?.category || '');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    const categoryData = AccesoriesData.find((cat) => cat.category === selectedCategory);
    if (!categoryData) return [];
    
    return categoryData.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen text-white selection:bg-cyan-500 selection:text-black font-sans" style={{ backgroundColor: DARK_BG }}>
      
      {/* 1. MINIMALIST HEADER */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Settings2 className="w-3 h-3" /> Precision Spares & Parts
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            ACCESORY <span className="text-cyan-500">CATALOGUE</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-base md:text-lg font-medium opacity-80">
            High-performance replacement parts and consumables for all Napcen APC systems.
          </p>

          {/* Search Box - Tighter Design */}
          <div className="max-w-lg mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-500 transition-colors" />
            <input 
              type="text"
              placeholder="SEARCH PART NAME OR NO..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-xs font-bold tracking-widest focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS - Sticky & Neat */}
      <section className="border-y border-white/5 bg-[#0D2529]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 overflow-x-auto no-scrollbar justify-start md:justify-center">
          {AccesoriesData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                setSelectedCategory(cat.category);
                setSearchTerm('');
              }}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                cat.category === selectedCategory
                  ? 'bg-cyan-500 border-cyan-500 text-black'
                  : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT GRID - Balanced & Precise */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
              className="text-center py-40 border border-dashed border-white/10 rounded-[3rem]"
            >
              <FilterX className="w-10 h-10 mx-auto mb-4 text-gray-700" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-600">No components found</p>
            </motion.div>
          ) : (
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-4 transition-all hover:border-cyan-500/30 hover:bg-white/[0.04]"
                >
                  {/* Smaller Image Container */}
                  <div className="relative aspect-square rounded-[2rem] bg-white overflow-hidden mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <div className="relative w-full h-full p-8">
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        fill 
                        className="object-contain transition-transform group-hover:scale-110 duration-700"
                        unoptimized // Recommended for industrial assets if they are varied formats
                      />
                    </div>
                  </div>

                  {/* Info Section - Left Aligned & Neat */}
                  <div className="px-2 pb-2 text-center">
                    <p className="text-[9px] text-cyan-500 uppercase tracking-[0.2em] font-black mb-2">
                      ID: {product.id}
                    </p>
                    <h3 className="text-sm font-black uppercase tracking-tight mb-6 line-clamp-2 h-10 leading-tight">
                      {product.title}
                    </h3>
                    
                    <Link href="/contact">
                      <button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 text-[9px] font-black uppercase tracking-[0.2em] group-hover:bg-cyan-500 group-hover:text-black transition-all border border-white/5">
                        Inquiry <Send className="w-3 h-3" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. FOOTER NOTE */}
      <section className="container mx-auto px-6 pb-20 text-center">
        <div className="max-w-2xl mx-auto py-10 border-t border-white/5">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
            Custom component fabrication available on request.
          </p>
        </div>
      </section>
    </div>
  );
}