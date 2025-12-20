'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Download, PhoneCall, Settings, Target } from 'lucide-react';

const CYAN = '#00E5FF';
const DARK_BG = '#0A1F22';

export default function ProductClient({ 
  product, 
  categoryTitle 
}: { 
  product: any; 
  categoryTitle: string;
}) {
  const [openModal, setOpenModal] = useState(false);

  const imageSrc = typeof product.image === 'string' 
    ? product.image 
    : product.image?.src || '/images/placeholder-product.jpg';

  // Fallback features to maintain perfect layout symmetry if product-specific ones aren't defined
  const displayFeatures = product.features || [
    "CPCB & Industrial Compliance Guaranteed",
    "High-Efficiency Particulate/Gas Filtration",
    "Heavy-Duty Industrial Grade Construction",
    "Low Maintenance Modular Design",
    "Precision Engineered for 24/7 Operation"
  ];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-cyan-500/30" style={{ backgroundColor: DARK_BG }}>
      
      {/* 1. HEADER SECTION - Perfectly Centered Whitespace */}
      <header className="container mx-auto px-6 pt-20 md:pt-28 pb-12 text-center max-w-5xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-cyan-500/20"></div>
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase text-cyan-400">
            {categoryTitle}
          </span>
          <div className="h-[1px] w-12 bg-cyan-500/20"></div>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none italic">
          {product.label}
        </h1>
        
        <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
          {product.description}
        </p>
      </header>

      {/* 2. COMPACT IMAGE CARD - Contained & Focused */}
      <section className="container mx-auto px-6 py-12 flex justify-center">
        <div className="relative w-full max-w-xl aspect-square bg-white rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10 flex items-center justify-center p-14 group transition-all duration-700 hover:shadow-cyan-500/5">
          <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
            <Image
              src={imageSrc}
              alt={product.label}
              fill
              priority
              className="object-contain"
            />
          </div>
          
          {/* Engineering Marker Accents */}
          <div className="absolute top-10 left-10 w-6 h-6 border-t border-l border-cyan-500/30"></div>
          <div className="absolute bottom-10 right-10 w-6 h-6 border-b border-r border-cyan-500/30"></div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECS - Symmetrical Grid */}
      <section className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {Object.entries(product.specs || {}).map(([key, val]: any, i) => (
            <div key={i} className="group text-center p-8 rounded-[32px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3 group-hover:text-cyan-500/50 transition-colors">{key}</p>
              <p className="text-lg md:text-xl font-extrabold text-white tracking-tight">{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DETAIL GRID - Perfectly Aligned Content Blocks */}
      <section className="container mx-auto px-6 py-20 max-w-5xl border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Features Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-2xl">
                <Settings className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest">Key Features</h3>
            </div>
            <ul className="space-y-6">
              {displayFeatures.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-5 group">
                  <ShieldCheck className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <span className="text-gray-400 text-sm md:text-base leading-snug group-hover:text-gray-200 transition-colors">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest">Industrial Scope</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.applications?.map((app: string, i: number) => (
                <span key={i} className="px-6 py-3 text-[10px] font-black border border-white/10 rounded-2xl text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all uppercase tracking-widest bg-white/[0.02]">
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION - Final Balanced Anchor */}
      <section className="container mx-auto px-6 py-24 text-center border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          <button 
            onClick={() => setOpenModal(true)}
            className="w-full py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase tracking-[0.25em] rounded-[24px] transition-all shadow-[0_20px_40px_-10px_rgba(0,229,255,0.3)] flex items-center justify-center gap-3 active:scale-95"
          >
            <Download className="w-4 h-4" /> Get Technical Data
          </button>
          <button 
            onClick={() => setOpenModal(true)}
            className="w-full py-6 border border-white/10 hover:bg-white hover:text-black font-black text-xs uppercase tracking-[0.25em] rounded-[24px] transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <PhoneCall className="w-4 h-4" /> Request Quote
          </button>
        </div>
      </section>

      {/* 6. MODAL - Elegant & Compact Overlay */}
      {openModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/98 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-md p-12 rounded-[48px] border border-white/10 bg-[#0F1719] relative shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] text-center">
            <button 
              onClick={() => setOpenModal(false)} 
              className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors text-xl font-light"
            >
              ✕
            </button>
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-10">Direct Inquiry</h2>
            <div className="space-y-5">
              <div className="text-left space-y-2">
                <label className="text-[9px] font-black text-cyan-500 ml-4 uppercase tracking-[0.2em]">Contact Name</label>
                <input type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[11px] font-bold tracking-widest outline-none focus:border-cyan-500 transition-all" />
              </div>
              <div className="text-left space-y-2">
                <label className="text-[9px] font-black text-cyan-500 ml-4 uppercase tracking-[0.2em]">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[11px] font-bold tracking-widest outline-none focus:border-cyan-500 transition-all" />
              </div>
              <button className="w-full py-6 bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.25em] rounded-2xl mt-4 shadow-lg shadow-cyan-500/20">
                Confirm Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}