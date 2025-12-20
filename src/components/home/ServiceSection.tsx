"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Your original images — Keeping the require syntax as provided
import designConsultingImg from '../../assets/images/design-consulting.png';
import manufacturingImg from '../../assets/images/manufacturing.png';
import installationImg from '../../assets/images/installation.png';
import maintenanceImg from '../../assets/images/maintenance.png';


// Tailwind Configuration for dynamic styles
const services = [
  { image: designConsultingImg, title: 'Consulting & Design', description: 'Expert site assessment and custom engineering for your air pollution control needs.', link: '/services/consulting-design' },
  { image: manufacturingImg, title: 'Manufacturing & Supply', description: 'High-performance equipment from dust collectors to scrubbers.', link: '/services/manufacturing' },
  { image: installationImg, title: 'Installation', description: 'Certified technicians ensure perfect setup and commissioning.', link: '/services/installation' },
  { image: maintenanceImg, title: 'Maintenance', description: 'Keep your systems running at peak efficiency with our AMC plans.', link: '/services/maintenance' },
];

// --- Custom Tailwind-Ready Animation for the slide-up effect ---
// NOTE: This requires adding a custom utility to your tailwind.config.js file:
// extend: {
//   keyframes: {
//     slideUp: {
//       '0%': { transform: 'translateY(20px)', opacity: '0' },
//       '100%': { transform: 'translateY(0)', opacity: '1' },
//     },
//   },
//   animation: {
//     slideUp: 'slideUp 0.6s ease-out',
//   },
// }
const slideUpClass = 'animate-slideUp';

// Tailwind Equivalent of useMediaQuery('(min-width: 640px)')
const useIsMobile = () => {
  if (typeof window === 'undefined') return true; // Default true during SSR/build
  return window.innerWidth < 640;
};

// Mobile Card Component (Tailwind Refactor)
const MobileBoxCard = memo(({ service, isVisible }) => (
  <Link
    href={service.link}
    className="flex-shrink-0 w-[160px] sm:w-[180px] h-[240px] no-underline rounded-xl overflow-hidden backdrop-blur-md 
               bg-white/10 border border-cyan-500/25 transition-all duration-300 flex flex-col 
               hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-500"
  >
    <div className="flex-none h-[140px] relative overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        fill
        priority={isVisible}
        sizes="(max-width: 640px) 160px, 180px"
        className="object-cover transition-transform duration-400 hover:scale-[1.05] cursor-pointer"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    <div className="flex-1 p-2 flex items-center justify-center text-center">
      <p
        className="text-cyan-400 font-bold text-sm sm:text-base leading-tight 
                   [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
      >
        {service.title}
      </p>
    </div>
  </Link>
));


function ServicesSection() {
  const isMobile = useIsMobile();
  const [activeCard, setActiveCard] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Desktop auto-cycle (unchanged logic)
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => setActiveCard(prev => (prev + 1) % services.length), 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Mobile auto-play (unchanged logic)
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isMobile]);

  const scrollToIndex = useCallback((index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - 16,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    if (isMobile) scrollToIndex(activeIndex);
  }, [activeIndex, isMobile, scrollToIndex]);

  const handleDotClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // --- LOGIC TO DETERMINE TAILWIND GRID SIZE ---
  const getGridClass = useCallback((idx) => {
      // Active card gets 6/12 columns (w-1/2)
      if (activeCard === idx) return 'lg:w-1/2'; 
      // Inactive cards get 2/12 columns (w-1/6). 
      // NOTE: We use w-1/6 for the width equivalent of grid-cols-2 in a 12-column grid.
      return 'lg:w-1/6';
  }, [activeCard]);


  return (
    <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[#1f2525ff] to-[#151d1dff] text-white overflow-hidden relative">
      
      {/* SEO & Schema - unchanged (using Tailwind's hidden utility) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        best wet scrubber design coimbatore, best dust collector installation pondicherry
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Napcean Services",
            "itemListElement": services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": { "@type": "Service", "name": s.title, "url": `https://napcen.in${s.link}` }
            }))
          })
        }}
      />

      <div className="max-w-7xl mx-auto">
        <h3 className="text-cyan-500 font-semibold mb-2 text-center text-lg">Our Services</h3>
        <h2 className="font-bold mb-12 text-2xl sm:text-3xl md:text-4xl text-center uppercase">
          From <span className="text-cyan-500">Concept to Completion</span>
        </h2>

        {/* DESKTOP — FIXED GRID LAYOUT with Tailwind flex-row */}
        {!isMobile && (
          <div className="flex flex-row space-x-6 justify-center items-stretch">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex justify-center transition-all duration-400 ease-in-out ${getGridClass(idx)}`}
              >
                <Link href={service.link} className="w-full no-underline">
                  <div className={`
                    w-full h-[350px] flex flex-col rounded-lg overflow-hidden relative bg-transparent 
                    border-2 border-cyan-500 transition-all duration-400 ease-in-out cursor-pointer
                    ${activeCard === idx 
                      ? 'shadow-3xl shadow-cyan-500/50 z-20' 
                      : 'shadow-md shadow-black/50 z-10'
                    }
                    hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/40
                  `}>
                    
                    {/* IMAGE CONTAINER (FIXED HEIGHT WHEN ACTIVE) */}
                    <div className={`relative w-full flex-none transition-[height] duration-500 ease ${activeCard === idx ? 'h-[220px]' : 'h-full'}`}>
                        <Image 
                            src={service.image} 
                            alt={service.title} 
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover" 
                        />
                    </div>
                    
                    {/* DESCRIPTION BOX FOR ACTIVE CARD */}
                    {activeCard === idx && (
                      <div className={`absolute bottom-0 left-0 w-full h-[130px] bg-neutral-800/85 backdrop-blur-md p-6 z-30 ${slideUpClass}`}>
                        <h4 className="text-cyan-500 font-bold mb-1.5 text-xl">{service.title}</h4>
                        <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
                      </div>
                    )}
                    
                    {/* ROTATED TITLE FOR INACTIVE CARDS */}
                    {activeCard !== idx && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap z-30">
                        <h4 className="text-cyan-500 font-bold text-xl bg-neutral-800/70 backdrop-blur-sm px-6 py-3 rounded-lg border border-cyan-500/40">
                          {service.title}
                        </h4>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* MOBILE — SCROLLING CARDS */}
        {isMobile && (
          <>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4 w-[calc(100%+32px)]"
            >
              {services.map((service, idx) => (
                <MobileBoxCard
                  key={idx}
                  service={service}
                  isVisible={Math.abs(idx - activeIndex) <= 1} 
                />
              ))}
              <div className="flex-shrink-0 w-4" /> {/* Spacer */}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, idx) => (
                <div key={idx} onClick={() => handleDotClick(idx)} className="cursor-pointer">
                  <FiberManualRecordIcon
                    className={`transition-all duration-300 ${
                      activeIndex === idx
                        ? 'text-cyan-500 text-lg filter drop-shadow-lg drop-shadow-cyan-500/50' 
                        : 'text-gray-600 text-xs'
                    }`}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default memo(ServicesSection);