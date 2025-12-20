"use client";

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import designConsultingImg from '../../assets/images/design-consulting.png';
import manufacturingImg from '../../assets/images/manufacturing.png';
import installationImg from '../../assets/images/installation.png';
import maintenanceImg from '../../assets/images/maintenance.png';

const services = [
  { image: designConsultingImg, title: 'Consulting & Design', description: 'Expert site assessment and custom engineering for your air pollution control needs.', link: '/services/consulting-design' },
  { image: manufacturingImg, title: 'Manufacturing & Supply', description: 'High-performance equipment from dust collectors to scrubbers.', link: '/services/manufacturing' },
  { image: installationImg, title: 'Installation', description: 'Certified technicians ensure perfect setup and commissioning.', link: '/services/installation' },
  { image: maintenanceImg, title: 'Maintenance', description: 'Keep your systems running at peak efficiency with our AMC plans.', link: '/services/maintenance' },
];

const MobileBoxCard = memo(({ service }: { service: any }) => (
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
        sizes="(max-width: 640px) 160px, 180px"
        className="object-cover transition-transform duration-400 hover:scale-[1.05]"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    <div className="flex-1 p-2 flex items-center justify-center text-center">
      <p className="text-cyan-400 font-bold text-sm sm:text-base leading-tight 
                    [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
         style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
        {service.title}
      </p>
    </div>
  </Link>
));

function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mount only on client → avoids hydration mismatch
  useEffect(() => {
    setIsMounted(true);

    // Desktop auto-cycle
    const desktopInterval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % services.length);
    }, 3000);

    // Mobile auto-scroll
    const mobileInterval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length);
    }, 4500);

    return () => {
      clearInterval(desktopInterval);
      clearInterval(mobileInterval);
    };
  }, []);

  const getGridClass = (idx: number) => {
    if (activeCard === idx) return 'lg:w-1/2';
    return 'lg:w-1/6';
  };

  // During SSR or before mount, render a simple static version (no animation)
  if (!isMounted) {
    return (
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[#1f2525ff] to-[#151d1dff] text-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-cyan-500 font-semibold mb-2 text-center text-lg">Our Services</h3>
          <h2 className="font-bold mb-12 text-2xl sm:text-3xl md:text-4xl text-center uppercase">
            From <span className="text-cyan-500">Concept to Completion</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Link key={idx} href={service.link} className="block">
                <div className="h-[350px] rounded-lg overflow-hidden border-2 border-cyan-500/50">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="p-6 bg-gradient-to-t from-black/80">
                    <h4 className="text-cyan-400 font-bold text-xl">{service.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // After mount: Full animated version (only on client)
  return (
    <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[#1f2525ff] to-[#151d1dff] text-white overflow-hidden relative">
      {/* SEO & Schema */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        best wet scrubber design coimbatore, best dust collector installation pondicherry
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Napcen Services",
            "itemListElement": services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": { "@type": "Service", "name": s.title, "url": `https://fumescrubbers.com${s.link}` }
            }))
          })
        }}
      />

      <div className="max-w-7xl mx-auto">
        <h3 className="text-cyan-500 font-semibold mb-2 text-center text-lg">Our Services</h3>
        <h2 className="font-bold mb-12 text-2xl sm:text-3xl md:text-4xl text-center uppercase">
          From <span className="text-cyan-500">Concept to Completion</span>
        </h2>

        {/* Desktop: Your Original Expanding Animation */}
        <div className="hidden md:flex flex-row space-x-6 justify-center items-stretch">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex justify-center transition-all duration-700 ease-in-out ${getGridClass(idx)}`}
            >
              <Link href={service.link} className="w-full no-underline">
                <div className={`
                  w-full h-[350px] flex flex-col rounded-lg overflow-hidden relative bg-transparent 
                  border-2 border-cyan-500 transition-all duration-700 ease-in-out cursor-pointer
                  ${activeCard === idx 
                    ? 'shadow-3xl shadow-cyan-500/50 z-20' 
                    : 'shadow-md shadow-black/50 z-10'
                  }
                  hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/40
                `}>
                  <div className={`relative w-full flex-none transition-[height] duration-700 ease ${activeCard === idx ? 'h-[220px]' : 'h-full'}`}>
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover" 
                    />
                  </div>

                  {activeCard === idx && (
                    <div className="absolute bottom-0 left-0 w-full h-[130px] bg-neutral-800/90 backdrop-blur-md p-6 animate-slideUp">
                      <h4 className="text-cyan-500 font-bold mb-1.5 text-xl">{service.title}</h4>
                      <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
                    </div>
                  )}

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

        {/* Mobile: Horizontal Scroll */}
        <div className="block md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4">
            {services.map((service, idx) => (
              <MobileBoxCard key={idx} service={service} />
            ))}
            <div className="flex-shrink-0 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesSection);