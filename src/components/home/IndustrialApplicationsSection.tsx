"use client";

import React, { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery'; 

interface Application {
  name: string;
  imagePath: string; 
  description: string;
  slug: string;
}

const industrialApplications: Application[] = [
  { 
    name: 'Chemical Industries', 
    imagePath: '/gallery/Chemical%20Manufacturing.webp', 
    description: 'Advanced scrubbers for VOCs and corrosive gases.', 
    slug: 'chemical' 
  },
  { 
    name: 'Electronics & Semi', 
    imagePath: '/gallery/Electronic%20and%20Semiconductor%20Manufacturing.webp', 
    description: 'Cleanroom-grade air filtration systems.', 
    slug: 'electronics' 
  },
  { 
    name: 'Food Processing', 
    imagePath: '/gallery/Food%20Processing.webp', 
    description: 'Odor control and hygiene compliance.', 
    slug: 'food-processing' 
  },
  { 
    name: 'Metal Processing', 
    imagePath: '/gallery/Metal%20Processing.webp', 
    description: 'Fume extraction for welding and cutting.', 
    slug: 'metal-processing' 
  },
  { 
    name: 'Mining & Ore', 
    imagePath: '/gallery/Mining%20and%20Ore%20Processing.webp', 
    description: 'Heavy-duty dust and SO2 control.', 
    slug: 'mining' 
  },
  { 
    name: 'Pharma Industries', 
    imagePath: '/gallery/Pharmaceutical%20Manufacturing.webp', 
    description: 'GMP-compliant solvent recovery.', 
    slug: 'pharma' 
  },
  { 
    name: 'Oil & Gas', 
    imagePath: '/gallery/Oil%20and%20Gas%20Industry.webp', 
    description: 'H2S and methane control systems.', 
    slug: 'oil-gas' 
  },
  { 
    name: 'Wood Working', 
    imagePath: '/gallery/Woodworking%20and%20Furniture%20Manufacturing.webp', 
    description: 'Fine dust extraction for safety.', 
    slug: 'wood-working' 
  }
];

// --- SUB-COMPONENT ---
const IndustryCard = memo(({ app, isActive }: { app: Application; isActive: boolean }) => {
  return (
    <div className={`group relative w-full h-[280px] rounded-xl overflow-hidden bg-[#111] border transition-all duration-500 ${isActive ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'border-white/10 hover:border-cyan-500/50'}`}>
      <Image
        src={app.imagePath}
        alt={app.name}
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 flex flex-col justify-end">
        <h6 className="font-bold text-lg text-white mb-1 uppercase tracking-tight">{app.name}</h6>
        <Link 
          href={`/industries/${app.slug}`} 
          className="inline-block py-2 bg-cyan-500/10 border border-cyan-500/30 rounded text-[10px] font-bold text-white text-center uppercase tracking-widest hover:bg-cyan-600 transition-all"
        >
          View Solution
        </Link>
      </div>
    </div>
  );
});
IndustryCard.displayName = "IndustryCard";

// --- MAIN SECTION ---
const IndustrialApplicationsSection = memo(({ activeLink = "" }: { activeLink?: string }) => {
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-16 bg-[#050808]">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-cyan-500 font-bold mb-1 text-[10px] uppercase tracking-[0.4em]">Sector Expertise</h3>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Global <span className="text-cyan-400">Applications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industrialApplications.slice(0, isDesktop ? 8 : 4).map((app) => (
            <IndustryCard 
              key={app.slug} 
              app={app} 
              isActive={typeof activeLink === 'string' && activeLink.includes(app.slug)} 
            />
          ))}
        </div>

        {!isDesktop && (
          <div className="mt-10 text-center">
            <button 
              onClick={() => setOpen(true)} 
              className="px-10 py-4 border-2 border-cyan-500 text-cyan-500 font-bold uppercase rounded-full text-xs hover:bg-cyan-500 hover:text-white transition-all"
            >
              Explore All {industrialApplications.length} Sectors
            </button>
          </div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/95 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Industrial Directory</h2>
              <button onClick={() => setOpen(false)} className="text-white">
                <CloseIcon sx={{ fontSize: 40 }} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industrialApplications.map(app => (
                <IndustryCard key={app.slug} app={app} isActive={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
});
IndustrialApplicationsSection.displayName = "IndustrialApplicationsSection";

export default IndustrialApplicationsSection;