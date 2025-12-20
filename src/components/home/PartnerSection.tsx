'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

// --- CONFIGURATION: Using string paths for better build performance ---
const PARTNER_LOGOS = [
  '/assets/images/clients/C1.png',
  '/assets/images/clients/C2.png',
  '/assets/images/clients/C10.png',
  '/assets/images/clients/C4.png',
  '/assets/images/clients/C5.png',
];

const REVIEWS = [
  { quote: "Best wet scrubber — zero downtime! The build quality is exceptional, and the air quality reports speak for themselves. Highly recommended for heavy industry use.", name: "Deborah W. Way", title: "Plant Operations Manager" },
  { quote: "Reliable dry scrubbers for tough conditions. We operate 24/7, and these units handle the heat and dust flawlessly with minimal maintenance.", name: "Francis J. Casella", title: "Environmental Compliance Officer" },
];

export default function PartnerSection() {
  // Infinite scroll logic using lightweight string paths
  const infiniteLogos = useMemo(() => [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS], []);

  return (
    <section className="py-20 bg-gradient-to-l from-[#334746] to-[#151d1d] overflow-hidden font-poppins text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- HEADER + COUNTER --- */}
        <div className="text-center mb-16">
          <p className="text-sm font-black uppercase tracking-[0.3em] mb-3 text-cyan-400">
            Global Impact
          </p>
          <h3 className="font-black mb-6 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Partnering for <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Cleaner Air</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Collaborating with India's industrial giants to implement CPCB-compliant pollution control technologies.
          </p>
          
          <div className="mt-10">
            <div className="font-black leading-none text-8xl md:text-[9rem] text-cyan-400 opacity-90">
              <CountUp end={50} duration={3} suffix="+" enableScrollSpy scrollSpyOnce />
            </div>
            <h5 className="font-bold text-gray-200 text-xl tracking-wide uppercase mt-2">
              Industrial Installations
            </h5>
          </div>
        </div>

        {/* --- LOGO MARQUEE --- */}
        <div className="relative mb-24">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#151d1d] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#334746] to-transparent z-10" />
          
          <div className="flex overflow-hidden group">
            {/* The double div strategy ensures a seamless loop without a "jump" */}
            <div className="flex animate-marquee whitespace-nowrap py-10 items-center">
              {infiniteLogos.map((logo, i) => (
                <div key={i} className="mx-12 w-32 md:w-44 transition-all duration-500 hover:scale-110">
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={176} 
                    height={80}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee whitespace-nowrap py-10 items-center" aria-hidden="true">
              {infiniteLogos.map((logo, i) => (
                <div key={`dup-${i}`} className="mx-12 w-32 md:w-44 transition-all duration-500 hover:scale-110">
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={176}
                    height={80}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- REVIEWS --- */}
        <div className="text-center mb-12">
          <h5 className="text-2xl font-black uppercase tracking-widest text-cyan-400">
            Client Testimonials
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {REVIEWS.map((r, i) => (
            <div 
              key={i} 
              className="group p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/10 relative overflow-hidden"
            >
              <div className="absolute -top-4 -left-2 text-9xl text-cyan-500/10 font-serif pointer-events-none">“</div>
              
              <p className="text-gray-300 italic mb-8 leading-relaxed text-lg relative z-10">
                &quot;{r.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-cyan-500" />
                <div>
                  <h6 className="font-bold text-xl text-cyan-400 tracking-tight">
                    {r.name}
                  </h6>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-tighter">
                    {r.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}