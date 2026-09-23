'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const PRIMARY_BLUE = '#0D59AA';

// ====== COUNTER ITEM COMPONENT ======
const NumberCounter = ({ end, title, symbol = '', imageSrc }: any) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 group transition-all duration-500"
    >
      {/* Icon with Blue Glow on Hover */}
      <div className="relative w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-primary-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <Image
          src={imageSrc} // Now using standard string path from public folder
          alt={title}
          fill
          className="object-contain z-10 brightness-0 opacity-40 group-hover:opacity-100 transition-all"
          loading="lazy" // Counters are usually lower on the page, lazy load them
        />
      </div>

      {/* Number with CountUp */}
      <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 drop-shadow-sm" style={{ color: PRIMARY_BLUE }}>
        {inView ? <CountUp end={end} duration={2} separator="," /> : '0'}
        <span className="ml-1">{symbol}</span>
      </div>

      {/* Title */}
      <p className="text-text-muted text-sm md:text-base font-bold uppercase tracking-widest leading-tight max-w-[150px]">
        {title}
      </p>
    </div>
  );
};

// ====== MAIN COMPONENT ======
export default function AnimatedCounters() {
  // CONFIGURATION: String paths are much faster than JS imports
  const counters = [
    { end: 13, title: 'Years of Expertise', symbol: '+', imageSrc: '/assets/icons/counter1.svg' },
    { end: 98, title: 'Client Success', symbol: '%', imageSrc: '/assets/icons/counter2.svg' },
    { end: 150, title: 'Systems Active', symbol: '+', imageSrc: '/assets/icons/counter3.svg' },
    { end: 500, title: 'Projects Done', symbol: '+', imageSrc: '/assets/icons/counter4.svg' },
  ];

  return (
    <section className="bg-bg-light py-12 border-y border-primary-blue/10">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="sr-only">
          <h2>Napcen Performance Metrics 2025</h2>
          <p>Over 13 years of experience in air pollution control systems and wet scrubber manufacturing.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-start justify-items-center">
          {counters.map((c, i) => (
            <div key={i} className="w-full relative">
              <NumberCounter {...c} />
              
              {/* Vertical Divider for Desktop */}
              {i !== counters.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-primary-blue/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}