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
    // Matches your Directory: ...\public\assets\images\resource
    imagePath: '/assets/images/resource/all type of industrial applications/Chemical-Manufacturing.jpg', 
    description: 'Advanced scrubbers for VOCs and corrosive gases.', 
    slug: 'chemical' 
  },
  { 
    name: 'Metal Processing', 
    imagePath: '/assets/images/resource/all type of industrial applications/Metal-Processing.jpg', 
    description: 'Fume extraction for welding & cutting.', 
    slug: 'metal-processing' 
  },
  { 
    name: 'Wood Working', 
    imagePath: '/assets/images/resource/all type of industrial applications/Woodworking-and-Furniture-Manufacturing.jpg', 
    description: 'Fine dust extraction for safety.', 
    slug: 'wood-working' 
  },
  { 
    name: 'Pharma Industries', 
    imagePath: '/assets/images/resource/all type of industrial applications/Pharmaceutical-Manufacturing.jpg', 
    description: 'GMP-compliant solvent recovery.', 
    slug: 'pharma' 
  },
  { 
    name: 'Food Processing', 
    imagePath: '/assets/images/resource/all type of industrial applications/Food-Processing.jpg', 
    description: 'Odor control and hygiene compliance.', 
    slug: 'food-processing' 
  },
  { 
    name: 'Electronics', 
    imagePath: '/assets/images/resource/all type of industrial applications/Electronic-and-Semiconductor-Manufacturing.jpg', 
    description: 'Cleanroom-grade filtration systems.', 
    slug: 'electronics' 
  }
];

const IndustryCard: React.FC<{ app: Application; isActive: boolean }> = memo(({ app, isActive }) => (
  <div
    className={`group relative w-full h-[260px] rounded-xl overflow-hidden bg-[#111] border transition-all duration-500
      ${isActive ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'border-white/10 hover:border-cyan-500/50'}`}
  >
    <Image
      src={app.imagePath}
      alt={app.name}
      fill
      sizes="(max-width: 768px) 100vw, 300px"
      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-4 flex flex-col justify-end">
      <h6 className="font-bold text-base text-white mb-1 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
        {app.name}
      </h6>
      
      <div className="max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 ease-in-out">
        <p className="text-gray-300 text-[10px] leading-relaxed mb-3">
          {app.description}
        </p>
      </div>
      
      <Link
        href={`/industries/${app.slug}`}
        className="inline-flex items-center justify-center w-full py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[9px] font-bold text-white uppercase tracking-widest transition-all hover:bg-cyan-600 hover:border-cyan-500"
      >
        View Solution
      </Link>
    </div>
  </div>
));

const IndustrialApplicationsSection: React.FC<{ activeLink?: string }> = memo(({ activeLink }) => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-12 md:py-16 bg-[#0a0f0f] overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h3 className="text-cyan-500 font-bold mb-1 text-[10px] uppercase tracking-[0.4em]">Sector Expertise</h3>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Targeted <span className="text-cyan-400">Applications</span>
          </h2>
        </div>

        {isDesktop ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {industrialApplications.map((app) => (
              <IndustryCard key={app.slug} app={app} isActive={activeLink === `/industries/${app.slug}`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {industrialApplications.slice(0, 4).map((app) => (
              <IndustryCard key={app.slug} app={app} isActive={activeLink === `/industries/${app.slug}`} />
            ))}
            <button 
              onClick={() => setOpen(true)} 
              className="col-span-2 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-lg text-[10px] hover:bg-cyan-600"
            >
              Explore All Sectors
            </button>
          </div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-md p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-white uppercase tracking-tight">Industrial Directory</h2>
              <button onClick={() => setOpen(false)} className="text-white hover:text-cyan-500">
                <CloseIcon sx={{ fontSize: 32 }} />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default IndustrialApplicationsSection;