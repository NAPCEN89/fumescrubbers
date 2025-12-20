'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Package, FilterX, Settings2 } from 'lucide-react';
import { AccesoriesData } from '@/lib/accessories-data';

// Component defined as a clear function
export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState(AccesoriesData[0].category);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    const categoryData = AccesoriesData.find((cat) => cat.category === selectedCategory);
    if (!categoryData) return [];
    
    return categoryData.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-[#0a0f0f] text-white selection:bg-cyan-500 selection:text-black">
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-cyan-900/20 blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <Settings2 className="w-3 h-3" /> Industrial Grade Spares
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Accessory <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Catalogue</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            High-precision components engineered for Napcen air pollution control systems.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-500 transition-colors" />
            <input 
              type="text"
              placeholder="Filter by part name..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="border-y border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3">
          {AccesoriesData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                setSelectedCategory(cat.category);
                setSearchTerm('');
              }}
              className={`whitespace-nowrap px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
                cat.category === selectedCategory
                  ? 'bg-cyan-600 border-cyan-500 text-white'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 opacity-30">
              <FilterX className="w-12 h-12 mx-auto mb-4" />
              <p>No components found matching your search.</p>
            </motion.div>
          ) : (
            <motion.div 
              layout 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group bg-[#111818] border border-white/5 rounded-[2rem] p-3 transition-all hover:border-cyan-500/40"
                >
                  <div className="relative aspect-square rounded-[1.5rem] bg-black/40 overflow-hidden mb-4">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill 
                      className="object-contain p-6 transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="text-sm font-bold mb-1 line-clamp-1">{product.title}</h3>
                    <p className="text-[9px] text-cyan-500 uppercase tracking-tighter font-black mb-4">Part No: {product.id}</p>
                    
                    <Link href="/contact">
                      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest group-hover:bg-cyan-500 group-hover:text-black transition-all">
                        Get Quote <Send className="w-3 h-3" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}