'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';  // ← Optimized images

// ----------------------------------------------------------------------
// CONFIGURATION - UPDATE THESE
// ----------------------------------------------------------------------
const VIDEO_SRC = '/napcenBg.mp4';  // Must be in /public, compressed <10MB
const FALLBACK_IMAGE = '/napcen-hero-fallback.webp';  // WebP, <400KB, in /public

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only attempt video on fast connections
  const shouldAttemptVideo = () => {
    if (!isMounted || typeof window === 'undefined') return false;
    const conn = (navigator as any).connection;
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
    const slow = conn?.saveData || ['slow-2g', '2g', '3g'].includes(conn?.effectiveType ?? '');
    return !slow && !reducedData;
  };

  const canPlayVideo = shouldAttemptVideo();

  useEffect(() => {
    if (!canPlayVideo || !videoRef.current) return;

    const video = videoRef.current;
    let timeout: NodeJS.Timeout;

    const handleCanPlay = () => {
      clearTimeout(timeout);
      setVideoReady(true);
    };

    const handleError = () => {
      clearTimeout(timeout);
      setVideoError(true);
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);

    // Safety timeout: give up after 4s if video doesn't load
    timeout = setTimeout(() => {
      setVideoError(true);
    }, 4000);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
      clearTimeout(timeout);
    };
  }, [canPlayVideo]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center overflow-hidden min-h-[80vh] sm:min-h-[85vh] md:min-h-screen pt-24 md:pt-32 pb-16 md:pb-24"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Optimized Fallback Image - Instant LCP, blur placeholder, WebP */}
      <ExportedImage
        src={FALLBACK_IMAGE}
        alt="NAPCEN industrial air pollution control manufacturing facility and wet scrubber systems in Puducherry, India"
        fill
        sizes="100vw"
        priority  // Critical for LCP
        quality={85}
        className="absolute inset-0 object-cover brightness-[0.85] z-0"
        itemProp="image"
      />

      {/* Video Background - Only renders if conditions good */}
      {canPlayVideo && !videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={FALLBACK_IMAGE}
          className={`
            absolute inset-0 w-full h-full object-cover z-10
            transition-opacity duration-3000 ease-in-out
            ${videoReady ? 'opacity-100' : 'opacity-0'}
          `}
          aria-hidden="true"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(5,15,35,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
        <h1
          id="hero-heading"
          className="font-black text-white tracking-tight leading-tight text-4xl xs:text-5xl sm:text-6xl md:text-7xl"
          itemProp="name"
        >
          Leading Industrial
          <br className="hidden sm:block" />
          Air Pollution Control
          <br />
          <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold mt-6 text-cyan-300">
            Manufacturer in Puducherry
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            Serving Chennai & Tamil Nadu
          </span>
        </h1>

        <p
          className="mt-8 md:mt-12 text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed"
          itemProp="description"
        >
          Custom-engineered wet scrubbers, dust collectors, and fume extractors — 
          CPCB compliant, reliable, and built for Indian industries.
        </p>

        {/* Hidden SEO Keywords */}
        <div className="sr-only" aria-hidden="false">
          Wet scrubber manufacturer Chennai, wet scrubber manufacturer Tamil Nadu, 
          wet scrubber manufacturer India, industrial dust collector manufacturer Chennai, 
          fume extractor manufacturer Puducherry, air pollution control equipment manufacturer India
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center">
          <Link
            href="/products"
            className="px-8 py-4 text-base md:text-lg font-semibold text-white bg-cyan-600 rounded-full 
                       hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 
                       hover:-translate-y-0.5"
          >
            Explore Our Solutions
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 text-base md:text-lg font-semibold text-white border-2 border-white/80 
                       rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 
                       shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}