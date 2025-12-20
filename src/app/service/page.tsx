'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Settings, 
  PenTool, 
  Factory, 
  Construction, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

const CYAN = '#00E5FF';

const services = [
  { title: 'Consulting & Design', description: 'Site assessment and tailored air pollution control system blueprints.', link: '/services/consulting-design', Icon: PenTool, image: '/images/design-consulting.png' },
  { title: 'Manufacturing', description: 'Precision-engineered hardware built for maximum pollutant removal.', link: '/services/manufacturing', Icon: Factory, image: '/images/manufacturing.png' },
  { title: 'Turnkey Installation', description: 'On-time setup and strict environmental compliance by certified techs.', link: '/services/installation', Icon: Construction, image: '/images/installation.png' },
  { title: 'Support & AMC', description: 'Proactive maintenance plans to maximize equipment longevity.', link: '/services/maintenance', Icon: Settings, image: '/images/maintenance.png' },
];

const products = [
  { title: 'Wet Scrubber', description: 'Industrial gas cleaning using liquid absorption.', link: '/products/wet-scrubbers', image: '/images/Wet-scrubber-chennai.jpg' },
  { title: 'Dry Scrubber', description: 'Acid gas removal via dry adsorption technology.', link: '/products/dry-scrubber', image: '/images/Dry-scrubber-pondicherry.jpg' },
  { title: 'Dust Collector', description: 'High-volume particulate filtration systems.', link: '/products/dust-collector', image: '/images/dust-collector' },
  { title: 'Down Draft Table', description: 'Source-capture filtration for welding & grinding.', link: '/products/down-draft-table', image: '/images/Downdraft-table-india.jpg' },
  { title: 'Fume Extractor', description: 'Portable HEPA & carbon units for hazardous vapors.', link: '/products/fume-extractor', image: '/images/Acid-fume-scrubber-india.jpg' },
];

// --- REUSABLE COMPACT CARD ---
const ActionCard = ({ item, type }: { item: any, type: 'service' | 'product' }) => (
  <div className="group relative flex flex-col bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/10 hover:-translate-y-2 w-full max-w-[380px]">
    {/* Image Section */}
    <div className="relative h-48 w-full bg-black/40 overflow-hidden">
      <Image 
        src={item.image} 
        alt={item.title} 
        fill 
        className="object-contain p-4 transition-transform duration-700 group-hover:scale-110" 
      />
    </div>

    {/* Content Section */}
    <div className="p-8 flex flex-col items-center text-center">
      <div className="p-3 rounded-2xl bg-cyan-500/10 mb-4">
        {item.Icon ? <item.Icon className="w-6 h-6 text-cyan-400" /> : <ShieldCheck className="w-6 h-6 text-cyan-400" />}
      </div>
      
      <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{item.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
      
      <Link href={item.link} className="w-full">
        <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-cyan-500/30 text-cyan-400 font-bold text-xs uppercase tracking-widest transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500">
          {type === 'service' ? 'Service Details' : 'View Specs'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <section className="bg-gradient-to-l from-[#334746ff] to-[#151d1dff] min-h-screen py-24 font-poppins text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-24">
          <p className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-cyan-400">Total Air Management</p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] uppercase">
            Solutions <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">& Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Engineering high-performance industrial air pollution control systems since 2012. 
            From initial site design to 24/7 technical maintenance.
          </p>
        </div>

        {/* --- WORKFLOW GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-32">
          {/* Left Column Services */}
          <div className="space-y-8 flex flex-col items-center lg:items-end">
            <ActionCard item={services[0]} type="service" />
            <ActionCard item={services[1]} type="service" />
          </div>

          {/* Center Workflow Path (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="text-xs font-black text-cyan-500 uppercase tracking-[0.5em] mb-4 bg-cyan-500/5 px-6 py-2 rounded-full border border-cyan-500/20">Industrial Workflow</div>
            {services.map((s, i) => (
              <React.Fragment key={i}>
                <div className="w-48 py-3 rounded-xl border border-white/10 bg-white/5 text-center text-[10px] font-black uppercase tracking-widest text-gray-300">
                  {s.title.split(' ')[0]}
                </div>
                {i !== services.length - 1 && <ChevronDown className="w-5 h-5 text-cyan-500 animate-bounce" />}
              </React.Fragment>
            ))}
          </div>

          {/* Right Column Services */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <ActionCard item={services[2]} type="service" />
            <ActionCard item={services[3]} type="service" />
          </div>
        </div>

        {/* --- PRODUCTS SECTION --- */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">The <span className="text-cyan-400">Inventory</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((p, idx) => (
              <ActionCard key={idx} item={p} type="product" />
            ))}
          </div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Ready to <span className="text-cyan-400">Clear the Air?</span></h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-10 text-lg">Schedule a technical consultation with our environmental engineering team to evaluate your facility compliance.</p>
            <Link href="/contact">
              <button className="px-12 py-5 bg-cyan-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                Get Custom Quote
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}