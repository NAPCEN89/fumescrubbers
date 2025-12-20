"use client";

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const services = [
  { 
    image: '/assets/images/design-consulting.png', 
    title: 'Consulting & Design', 
    description: 'Expert site assessment and custom engineering.', 
    link: '/services/consulting-design' 
  },
  { 
    image: '/assets/images/manufacturing.png', 
    title: 'Manufacturing & Supply', 
    description: 'High-performance equipment from scrubbers to collectors.', 
    link: '/services/manufacturing' 
  },
  { 
    image: '/assets/images/installation.png', 
    title: 'Installation', 
    description: 'Certified technicians ensure perfect commissioning.', 
    link: '/services/installation' 
  },
  { 
    image: '/assets/images/maintenance.png', 
    title: 'Maintenance', 
    description: 'Keep systems at peak efficiency with AMC plans.', 
    link: '/services/maintenance' 
  },
];

const GlassButton = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider transition-all hover:bg-cyan-600 group/btn">
    {text}
    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
  </div>
);

const MobileBoxCard = memo(({ service }: { service: any }) => (
  <Link
    href={service.link}
    className="flex-shrink-0 w-[150px] h-[210px] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex flex-col snap-center"
  >
    <div className="flex-none h-[120px] relative">
      <Image src={service.image} alt={service.title} fill sizes="150px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1414] to-transparent" />
    </div>
    <div className="flex-1 p-3 flex flex-col justify-between">
      <p className="text-white font-bold text-[11px] leading-tight uppercase tracking-tight">
        {service.title}
      </p>
      <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-tighter">View Link</span>
    </div>
  </Link>
));

function ServicesSection() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const desktopInterval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(desktopInterval);
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-[#0a0f0f] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-cyan-500 font-bold mb-2 text-[11px] uppercase tracking-[0.4em]">Our Core Services</h3>
          <h2 className="font-black text-2xl md:text-4xl uppercase tracking-tighter">
            Seamless <span className="text-cyan-400">Execution</span>
          </h2>
        </div>

        {/* Desktop Accordion - Height reduced to 380px */}
        <div className="hidden md:flex flex-row gap-3 justify-center items-stretch h-[380px]">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`relative transition-all duration-500 ease-in-out cursor-pointer
                ${activeCard === idx ? 'w-[45%]' : 'w-[14%]'}`}
              onMouseEnter={() => setActiveCard(idx)}
            >
              <Link href={service.link} className="block h-full w-full">
                <div className={`
                  relative w-full h-full rounded-2xl overflow-hidden border transition-all duration-500
                  ${activeCard === idx ? 'border-cyan-500/40 shadow-xl' : 'border-white/5 grayscale opacity-50'}
                `}>
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  
                  {/* Expanded Content */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6
                    ${activeCard === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="text-white font-bold text-xl mb-2 uppercase tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-xs max-w-xs mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <GlassButton text="Details" />
                  </div>

                  {/* Vertical Title for small state */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                    ${activeCard === idx ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="rotate-90 whitespace-nowrap text-white/50 font-bold uppercase tracking-[0.2em] text-[10px]">
                      {service.title}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Scroller - Compact size */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {services.map((service, idx) => (
            <MobileBoxCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesSection);