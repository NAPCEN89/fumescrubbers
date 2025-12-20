'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const VIDEO_SRC = '/napcenBg.mp4';
const FALLBACK_IMAGE = '/napcen-hero-fallback.jpg';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Handle Mounting (Fixes Hydration Mismatch)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Logic to detect if we should play video (Client-only)
  const getShouldPlay = () => {
    if (typeof window === 'undefined' || !isMounted) return false;
    const conn = (navigator as any).connection;
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
    const slow = conn?.saveData || ['slow-2g', '2g', '3g'].includes(conn?.effectiveType ?? '');
    return !slow && !reducedData;
  };

  const shouldPlay = getShouldPlay();

  // 3. Manual Playback Trigger
  useEffect(() => {
    if (shouldPlay && videoRef.current) {
      const video = videoRef.current;
      
      const onCanPlay = () => setVideoReady(true);
      const onError = () => setVideoError(true);

      video.addEventListener('canplaythrough', onCanPlay);
      video.addEventListener('error', onError);

      // Fallback: If event doesn't fire, show video anyway after 1.8s
      const timeout = setTimeout(() => setVideoReady(true), 1800);

      return () => {
        video.removeEventListener('canplaythrough', onCanPlay);
        video.removeEventListener('error', onError);
        clearTimeout(timeout);
      };
    }
  }, [shouldPlay]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center overflow-hidden min-h-[80vh] sm:min-h-[85vh] md:min-h-screen pt-20 md:pt-24"
    >
      {/* Background Fallback Image (Always visible first) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${FALLBACK_IMAGE})`,
          filter: 'brightness(0.65)',
        }}
        role="img"
        aria-label="NAPCEN industrial facility"
      />

      {/* Video Container */}
      <video
        ref={videoRef}
        autoPlay={shouldPlay}
        muted
        loop
        playsInline
        poster={FALLBACK_IMAGE}
        className={`
          absolute inset-0 w-full h-full object-cover z-10
          transition-opacity duration-1000 ease-in-out
          ${isMounted && shouldPlay && videoReady && !videoError ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      >
        {/* The Source is ONLY rendered on the client after mounting */}
        {isMounted && shouldPlay && (
          <source src={VIDEO_SRC} type="video/mp4" />
        )}
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(5,15,35,0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-30 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <h1
          id="hero-heading"
          className="font-black text-white drop-shadow-2xl tracking-tight leading-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Industrial Air<br className="sm:hidden" />{' '}
          <span className="block sm:inline">Pollution</span>
          <br className="hidden sm:block" /> Control Solutions
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white/95 drop-shadow-xl">
          Wet Scrubber • Dry Scrubber • Dust Collector • Fume Extraction
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
          >
            Explore Products
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white border-2 border-white/70 rounded-full hover:bg-white/10 transition-all shadow-xl hover:-translate-y-1"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
}