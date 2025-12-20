'use client';

import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import Link from 'next/link';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------

const VIDEO_SRC = '/napcenBg.mp4';
const FALLBACK_IMAGE = '/napcen-hero-fallback.jpg';

// ----------------------------------------------------------------------
// FIXED HERO SECTION – No Hydration Mismatch
// ----------------------------------------------------------------------

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect good connection (same logic)
  const canPlayVideo = () => {
    if (typeof window === 'undefined') return false;
    const conn = (navigator as any).connection;
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
    const slow = conn?.saveData || ['slow-2g', '2g', '3g'].includes(conn?.effectiveType ?? '');
    return !slow && !reducedData;
  };

  const shouldPlay = canPlayVideo();

  // Mark as mounted after first client render → avoids conditional tag mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Video playback logic (only runs on client)
  useLayoutEffect(() => {
    if (!shouldPlay || !videoRef.current) return;

    const video = videoRef.current;
    video.preload = 'metadata';
    video.loading = 'lazy';
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');

    const onCanPlay = () => setVideoReady(true);
    const onError = () => setVideoError(true);

    video.addEventListener('canplaythrough', onCanPlay);
    video.addEventListener('error', onError);

    const timeout = setTimeout(() => setVideoReady(true), 1800);

    return () => {
      video.removeEventListener('canplaythrough', onCanPlay);
      video.removeEventListener('error', onError);
      clearTimeout(timeout);
    };
  }, [shouldPlay]);

  // Always render the <video> tag on server (empty/opacity-0), show only when conditions met on client
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center overflow-hidden
                 min-h-[80vh] sm:min-h-[85vh] md:min-h-screen pt-20 md:pt-24"
    >
      {/* Fallback Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${FALLBACK_IMAGE})`,
          filter: 'brightness(0.65)',
        }}
        role="img"
        aria-label="NAPCEN industrial air pollution control facility"
      />

      {/* Video – Always present in DOM to avoid tag mismatch */}
      <video
        ref={videoRef}
        autoPlay={shouldPlay && isMounted}
        muted
        loop
        playsInline
        preload="metadata"
        loading="lazy"
        poster={FALLBACK_IMAGE}
        className={`
          absolute inset-0 w-full h-full object-cover z-10
          transition-opacity duration-1200 ease-out
          ${isMounted && shouldPlay && videoReady && !videoError ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      >
        {shouldPlay && <source src={VIDEO_SRC} type="video/mp4" />}
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(5,15,35,0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <h1
          id="hero-heading"
          className="font-black text-white drop-shadow-2xl tracking-tight leading-tight
                     text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Industrial Air<br className="sm:hidden" />{' '}
          <span className="block sm:inline">Pollution</span>
          <br className="hidden sm:block" /> Control Solutions
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white/95 drop-shadow-xl">
          Wet Scrubber • Dry Scrubber • Dust Collector • Fume Extraction System
        </p>

        <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-lg leading-relaxed">
          Leading manufacturer in Pondicherry, India. Factory-direct prices. Trusted air pollution control solutions worldwide.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            href="/products"
            prefetch
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white bg-napcean-blue rounded-full hover:bg-napcean-blue-hover transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Explore Products
          </Link>

          <Link
            href="/contact"
            prefetch
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get Quote Now
          </Link>
        </div>

        <p className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base text-white/70">
          Serving Puducherry • Tamil Nadu • India • Worldwide
        </p>
      </div>
    </section>
  );
}