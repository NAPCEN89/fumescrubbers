'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Schedule,
  Security,
  Engineering,
  Build,
  Star,
} from '@mui/icons-material';

// Image in /public folder
const ABOUT_IMAGE_SRC = '/napcenAbout.png';

const features = [
  { icon: <Schedule className="w-6 h-6" />, text: 'On-Time Delivery' },
  { icon: <Security className="w-6 h-6" />, text: 'Safe Workplaces' },
  { icon: <Engineering className="w-6 h-6" />, text: 'Expert Engineers' },
  { icon: <Build className="w-6 h-6" />, text: 'Advanced Technology' },
  { icon: <Star className="w-6 h-6" />, text: 'ISO Certified' },
] as const;

export default function AboutUs() {
  return (
    <>
      {/* Structured Data - JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'NAPCEN Engineering',
            url: 'https://napcen.in',
            logo: 'https://napcen.in/napcen-logo.png',
            description:
              'Leading manufacturer of Wet Scrubbers, Dust Collectors, and Fume Extraction Systems in Pondicherry, India. ISO-certified industrial air pollution control solutions.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '', // Add if available
              addressLocality: 'Puducherry',
              addressRegion: 'PY',
              postalCode: '', // Add if available
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              areaServed: 'IN, AE, SA, MY, LK',
            },
          }),
        }}
      />

      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24"
        aria-labelledby="about-heading"
      >
        {/* Background - Using Tailwind for performance (no custom class needed if defined in globals.css) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bgnap.jpeg)',
            filter: 'brightness(0.4)',
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <h2
            id="about-heading"
            className="text-center font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 md:mb-20 bg-gradient-to-r from-[#00BFFF] to-[#4adeff] bg-clip-text text-transparent"
          >
            About Napcen
          </h2>

          {/* Main Content Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="text-center md:text-left order-2 md:order-1">
                <p className="text-[#00E5FF] font-bold text-xl md:text-2xl mb-3">
                  Innovating for a Cleaner Tomorrow
                </p>

                <h3 className="font-black text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
                  Leading Air Pollution Control Experts
                </h3>

                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                  NAPCEN is a trusted Indian manufacturer delivering world-class industrial air pollution control systems.
                </p>

                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
                  We specialize in high-efficiency{' '}
                  <span className="text-[#00E5FF] font-black">Wet Scrubbers</span>,{' '}
                  <span className="text-[#00E5FF] font-black">Dust Collectors</span>, and{' '}
                  <span className="text-[#00E5FF] font-black">Fume Extractors</span>{' '}
                  built with premium PP-FRP materials.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#00E5FF] text-black font-bold rounded-full hover:bg-[#4adeff] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  prefetch
                >
                  Get Free Quote Today
                </Link>
              </div>

              {/* Image - Optimized with Next/Image */}
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
                  <Image
                    src={ABOUT_IMAGE_SRC}
                    alt="NAPCEN Factory - Manufacturing Wet Scrubbers, Dust Collectors, and Fume Extraction Systems"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover w-full h-full"
                    priority // Important image - load early
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="mt-16 md:mt-24">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-semibold text-sm md:text-base shadow-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-[#00E5FF]">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Countries Served */}
          <p className="text-center mt-16 text-lg md:text-xl text-white/80 italic">
            Proudly Serving India • UAE • Saudi Arabia • Malaysia • Sri Lanka
          </p>
        </div>
      </section>
    </>
  );
}