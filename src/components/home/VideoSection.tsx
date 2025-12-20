'use client';

import React, { useState } from 'react';

// The YouTube ID from your provided URL (U-Zg3fyy2cQ)
const YOUTUBE_ID = "U-Zg3fyy2cQ"; 

function VideoSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-[#1C1C1E] text-white font-poppins relative overflow-hidden">
      
      {/* Decorative background glow to match your theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <h2 
        className="font-black text-center mb-10 px-4 text-cyan-400 text-3xl md:text-5xl uppercase tracking-tighter"
        style={{ textShadow: '0 0 20px rgba(0, 191, 255, 0.3)' }}
      >
        NAPCEN: Industrial Air Pollution Control
      </h2>

      <div className="mx-auto w-full max-w-[900px] px-4">
        <div 
          className="rounded-[30px] overflow-hidden bg-black relative group"
          style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.95)' }}
        >
          {/* 16:9 Aspect Ratio Container */}
          <div className="relative pt-[56.25%] w-full">
            
            {!isLoaded ? (
              /* THE FACADE: This loads instantly without heavy JS */
              <div 
                className="absolute inset-0 cursor-pointer flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
                onClick={() => setIsLoaded(true)}
              >
                {/* High-Res Thumbnail from YouTube servers */}
                <img 
                  src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
                
                {/* Custom Styled Play Button */}
                <div className="relative z-10 w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.6)] group-hover:bg-white transition-colors duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-2" />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            ) : (
              /* THE ACTUAL PLAYER: Loaded only on click */
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="NAPCEN Industrial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            )}
          </div>
        </div>
        
        <p className="text-center text-gray-500 mt-6 text-sm font-medium uppercase tracking-[0.2em]">
          Click to play our 2025 facility overview
        </p>
      </div>
    </section>
  );
}

export default VideoSection;