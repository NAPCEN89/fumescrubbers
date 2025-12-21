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
  { 
    title: 'Consulting & Design', 
    description: 'Site assessment and tailored air pollution control system blueprints.', 
    link: '/services/consulting-design', 
    Icon: PenTool, 
    image: '/assets/images/design-consulting.webp' 
  },
  { 
    title: 'Manufacturing', 
    description: 'Precision-engineered hardware built for maximum pollutant removal.', 
    link: '/services/manufacturing', 
    Icon: Factory, 
    image: '/assets/images/manufacturing.webp' 
  },
  { 
    title: 'Turnkey Installation', 
    description: 'On-time setup and strict environmental compliance by certified techs.', 
    link: '/services/installation', 
    Icon: Construction, 
    image: '/assets/images/installation.webp' 
  },
  { 
    title: 'Support & AMC', 
    description: 'Proactive maintenance plans to maximize equipment longevity.', 
    link: '/services/maintenance', 
    Icon: Settings, 
    image: '/assets/images/maintenance.webp' 
  },
];
const products = [
  { 
    title: 'Wet Scrubber', 
    description: 'Industrial gas cleaning using liquid absorption.', 
    link: '/products/wet-scrubbers', 
    // Updated: lowercase and hyphenated
    image: '/assets/images/products/wet-scrubber/Packed-Bed-Scrubbers.webp' 
  },
  { 
    title: 'Dust Collector', 
    description: 'High-volume particulate filtration systems.', 
    link: '/products/dust-collectors', 
    // Updated: lowercase and hyphenated
    image: '/assets/images/products/dust-collector/Baghouse-duct-collector-chennai.webp' 
  },
  { 
    title: 'Fume Extractor', 
    description: 'Portable units for hazardous vapors.', 
    link: '/products/fume-extractors', 
    // Updated: lowercase and hyphenated
    image: '/assets/images/products/fume-extractor/Welding-fume-extractor.webp' 
  },
];
const ActionCard = ({ item, type }: { item: any, type: 'service' | 'product' }) => (
  <div className="group relative flex flex-col bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/[0.07] hover:-translate-y-2 w-full max-w-[380px]">
    <div className="relative h-56 w-full bg-white/5 overflow-hidden flex items-center justify-center p-8">
      {/* Decorative background for the image */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(0,229,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="relative w-full h-full">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          className="object-contain transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
    </div>

    <div className="p-8 flex flex-col items-center text-center">
      <div className="p-3 rounded-2xl bg-cyan-500/10 mb-4 border border-cyan-500/20">
        {item.Icon ? <item.Icon className="w-6 h-6 text-cyan-400" /> : <ShieldCheck className="w-6 h-6 text-cyan-400" />}
      </div>
      
      <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">{item.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden">{item.description}</p>
      
      <Link href={item.link} className="w-full">
        <button className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500">
          {type === 'service' ? 'Service Details' : 'View Specs'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A1F22] text-white selection:bg-cyan-500/30">
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        {/* HERO */}
        <div className="text-center mb-32">
          <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <span className="text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase">Expert Engineering</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] uppercase tracking-tighter">
            Precision <br /> 
            <span className="text-cyan-400">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium">
            Complete lifecycle support for industrial air filtration systems, from initial site audit to turnkey installation.
          </p>
        </div>

        {/* SERVICES WORKFLOW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-40">
          <div className="space-y-12 flex flex-col items-center">
            <ActionCard item={services[0]} type="service" />
            <ActionCard item={services[1]} type="service" />
          </div>

          <div className="hidden lg:flex flex-col items-center py-20 sticky top-24">
            <div className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em] mb-8 px-6 py-2 rounded-full border border-cyan-500/20 bg-black">The Process</div>
            {services.map((s, i) => (
              <React.Fragment key={i}>
                <div className="w-40 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                  {s.title.split(' ')[0]}
                </div>
                {i !== services.length - 1 && <ChevronDown className="w-5 h-5 text-cyan-500/30 my-2" />}
              </React.Fragment>
            ))}
          </div>

          <div className="space-y-12 flex flex-col items-center">
            <ActionCard item={services[2]} type="service" />
            <ActionCard item={services[3]} type="service" />
          </div>
        </div>

        {/* PRODUCTS MINI-GRID */}
        <section className="pt-32 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Core <span className="text-cyan-400">Systems</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Explore our industrial hardware lineup</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {products.map((p, idx) => (
              <ActionCard key={idx} item={p} type="product" />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}