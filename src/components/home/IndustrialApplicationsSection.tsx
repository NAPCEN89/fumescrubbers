"use client";

import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery'; 

// --- IMAGE IMPORTS (FIXED: Removing invalid template literals and using the alias path) ---
// This path is designed to resolve to [project-root]/public/images/gallery/ 
// using the common Next.js alias setup.
import chemicalImg from '@/../public/images/gallery/Chemical Manufacturing.jpg';
import electronicImg from '@/../public/images/gallery/Electronic and Semiconductor Manufacturing.jpg';
import foodProcessingImg from '@/../public/images/gallery/Food Processing.jpg';
import miningImg from '@/../public/images/gallery/Mining and Ore Processing.jpg';
import metalProcessingImg from '@/../public/images/gallery/Metal Processing.jpg';
import pharmaImg from '@/../public/images/gallery/Pharmaceutical Manufacturing.jpg';
import paintImg from '@/../public/images/gallery/Paint and Coatings Manufacturing.jpg';
import oilGasImg from '@/../public/images/gallery/Oil and Gas Industry.jpg';
import textileImg from '@/../public/images/gallery/Textile Industry.jpg';
import woodworkingImg from '@/../public/images/gallery/Woodworking and Furniture Manufacturing.jpg';

// --- TYPESCRIPT INTERFACES ---
interface Application {
  name: string;
  image: StaticImageData;
  description: string;
  slug: string;
}

interface IndustryCardProps {
  app: Application;
  isActive: boolean;
  loading?: 'lazy' | 'eager';
}

interface IndustrialApplicationsSectionProps {
  activeLink?: string;
}

// --- DATA ---
const industrialApplications: Application[] = [
  { name: 'Chemical Industries', image: chemicalImg, description: 'Advanced scrubbers for VOCs and corrosive gases.', slug: 'chemical' },
  { name: 'Electronics Manufacturing', image: electronicImg, description: 'Cleanroom-grade filtration systems.', slug: 'electronics-manufacturing' },
  { name: 'Food Processing', image: foodProcessingImg, description: 'Odor control and hygiene compliance.', slug: 'food-processing' },
  { name: 'Mining and Ore Processing', image: miningImg, description: 'Heavy-duty dust and SO₂ control.', slug: 'mining' },
  { name: 'Metal Processing', image: metalProcessingImg, description: 'Fume extraction for welding & cutting.', slug: 'metal-processing' },
  { name: 'Pharma Industries', image: pharmaImg, description: 'GMP-compliant solvent recovery.', slug: 'pharma' },
  { name: 'Paint Manufacturing', image: paintImg, description: 'VOC capture and safe disposal.', slug: 'paint' },
  { name: 'Oil and Gas Industries', image: oilGasImg, description: 'H₂S and methane control systems.', slug: 'oil-gas' },
  { name: 'Textile Industries', image: textileImg, description: 'Dye exhaust and lint collection.', slug: 'textile' },
  { name: 'Wood Working Industries', image: woodworkingImg, description: 'Fine dust extraction for safety.', slug: 'wood-working' },
];

// --- COMPONENTS ---

const HiddenSEO: React.FC = () => (
  <div className="absolute left-[-9999px] w-0 h-0 overflow-hidden" aria-hidden="true">
    best wet scrubber chemical coimbatore, best dust collector pharma tamil nadu
  </div>
);

const IndustryCard: React.FC<IndustryCardProps> = memo(({ app, isActive, loading = "lazy" }) => (
  <div
    className={`
      w-full h-[300px] sm:h-[340px] rounded-2xl shadow-xl bg-white/5 backdrop-blur-md transition-all duration-300 flex flex-col overflow-hidden 
      ${isActive ? 'border-2 border-cyan-500' : 'border border-white/15'} 
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25
    `}
  >
    <div className="relative w-full h-[120px] flex-none">
      <Image
        src={app.image}
        alt={app.name}
        fill
        sizes="(max-width: 768px) 50vw, 250px"
        loading={loading}
        className="object-cover border-b border-cyan-500/10"
      />
    </div>
    
    <div className="p-4 sm:p-5 text-center flex flex-col justify-between flex-grow">
      <h6 className={`font-bold text-lg ${isActive ? 'text-cyan-500' : 'text-white'} text-shadow-lg`}>
        {app.name}
      </h6>
      <p className="text-gray-300 my-2 text-sm leading-relaxed">
        {app.description}
      </p>
      <Link
        href={`/industries/${app.slug}`}
        className="inline-block mt-3 px-6 py-2 bg-cyan-500/15 rounded-full font-semibold text-xs text-white no-underline transition-all duration-300
                   hover:bg-cyan-500 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/40"
      >
        Learn More
      </Link>
    </div>
  </div>
));

// === DIALOG COMPONENT (Tailwind Headless Style) ===
const IndustriesDialog: React.FC<{ open: boolean; onClose: () => void; activeLink?: string }> = ({ open, onClose, activeLink }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div 
        className="relative w-full max-w-7xl bg-[#16213e] rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300"
        onClick={e => e.stopPropagation()} // Stop propagation to prevent closing on inner click
      >
        <div className="bg-[#0f1b3a] text-cyan-500 text-center font-extrabold py-4 sm:py-6 text-xl sm:text-2xl relative">
          All Industrial Applications
          <button onClick={onClose} className="absolute right-3 top-3 sm:right-5 sm:top-5 text-white p-1 rounded-full hover:bg-white/10 transition">
            <CloseIcon />
          </button>
        </div>
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industrialApplications.map((app) => (
              <div key={app.slug}>
                <IndustryCard app={app} isActive={activeLink === `/industries/${app.slug}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// === MAIN SECTION COMPONENT ===
const IndustrialApplicationsSection: React.FC<IndustrialApplicationsSectionProps> = memo(({ activeLink }) => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const isMedium = useMediaQuery('(min-width:480px)');
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const visibleApps = industrialApplications.slice(0, isMedium ? 4 : 2);
  
  const marqueeClass = 'animate-marquee hover:animate-pause';
  
  return (
    <section 
      // NOTE: The background image URL path remains correct for public assets
      style={{ backgroundImage: `url('/images/background/Home-air-pollution-control.jpg')` }} 
      className="py-14 md:py-20 bg-cover bg-center bg-no-repeat relative overflow-hidden font-poppins"
    >
      <div className="absolute inset-0 bg-black/80"></div>
      
      <HiddenSEO />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Napcean Industrial Applications",
          "itemListElement": industrialApplications.map((app, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": { "@type": "Thing", "name": app.name, "url": `https://napcean.in/industries/${app.slug}` }
          }))
        })}
      </script>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-extrabold mb-3 text-center text-3xl sm:text-4xl lg:text-5xl text-cyan-500 drop-shadow-[0_0_10px_rgba(0,191,255,0.4)]">
          Industrial Applications
        </h3>
        <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto text-base sm:text-lg">
          Trusted air pollution control solutions across industries
        </p>

        {/* DESKTOP: MARQUEE SCROLLER */}
        {isDesktop && (
          <div className="relative px-8 pb-12 overflow-x-hidden">
            <div className={`flex flex-nowrap gap-8 w-max min-w-[200%] ${marqueeClass}`}>
              {[...industrialApplications, ...industrialApplications].map((app, i) => (
                <div key={`${app.slug}-${i}`} className="flex-none w-[250px]">
                  <IndustryCard app={app} isActive={activeLink === `/industries/${app.slug}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MOBILE: RESPONSIVE GRID + MODAL BUTTON */}
        {!isDesktop && (
          <div className="px-4 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {visibleApps.map((app, idx) => (
                <div key={app.slug} className="max-w-xs w-full">
                  <IndustryCard
                    app={app}
                    isActive={activeLink === `/industries/${app.slug}`}
                    loading={idx < 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Explore All Button (Tailwind Styling) */}
            <div className="text-center mt-8">
              <button
                onClick={handleOpen}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-cyan-500/20 text-cyan-500 border-2 border-cyan-500 
                           rounded-full font-bold text-base transition-all duration-300 shadow-lg shadow-cyan-500/15
                           hover:bg-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Explore All {industrialApplications.length} Industries
              </button>
            </div>
          </div>
        )}
      </div>

      {/* DIALOG/MODAL RENDER */}
      <IndustriesDialog open={open} onClose={handleClose} activeLink={activeLink} />
    </section>
  );
});

export default IndustrialApplicationsSection;