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
    <div className={`group relative w-full h-[280px] rounded-xl overflow-hidden bg-white border transition-all duration-500 ${isActive ? 'border-primary-blue shadow-lg' : 'border-primary-blue/10 hover:border-primary-blue/50'}`}>
      <Image
        src={app.imagePath}
        alt={app.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        priority={true} // Changed to true for instant visibility in the grid
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent p-5 flex flex-col justify-end">
        <h6 className="font-black text-lg text-text-main mb-1 uppercase tracking-tight">{app.name}</h6>
        <Link 
          href={`/industries/${app.slug}`} 
          className="inline-block py-2 bg-primary-blue/10 border border-primary-blue/30 rounded text-[10px] font-bold text-primary-blue text-center uppercase tracking-widest hover:bg-primary-blue hover:text-white transition-all backdrop-blur-sm"
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
    <section className="relative py-16 bg-bg-light">
      
      {/* HIDDEN PRE-CACHE LAYER: Forces browser to fetch all gallery images instantly */}
      <div className="hidden" aria-hidden="true">
        {industrialApplications.map((app) => (
          <Image 
            key={`preload-${app.slug}`} 
            src={app.imagePath} 
            alt="preload" 
            width={1} 
            height={1} 
            priority={true} 
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-primary-blue font-bold mb-1 text-[10px] uppercase tracking-[0.4em]">Sector Expertise</h3>
          <h2 className="text-3xl md:text-5xl font-black text-text-main uppercase tracking-tighter">
            Global <span className="text-primary-blue">Applications</span>
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
              className="px-10 py-4 border-2 border-primary-blue text-primary-blue font-bold uppercase rounded-full text-xs hover:bg-primary-blue hover:text-white transition-all"
            >
              Explore All {industrialApplications.length} Sectors
            </button>
          </div>
        )}
      </div>

      {/* Full Directory Overlay */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md p-6 overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-black text-text-main uppercase tracking-tight">Industrial Directory</h2>
              <button onClick={() => setOpen(false)} className="text-text-muted hover:text-primary-blue transition-colors">
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