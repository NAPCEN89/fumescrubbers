import React from 'react';
import Head from 'next/head'; // Use Next.js Head for meta tags

// The REAL video ID (Rick Astley - Never Gonna Give You Up)
// NOTE: I've used the original video ID you defined (M7lc1UVf-VE) 
// but kept the embedded URL from the original code (U-Zg3fyy2cQ) for reference/replacement.
const YOUTUBE_ID = "M7lc1UVf-VE"; 
const EMBED_URL = "https://www.youtube.com/embed/U-Zg3fyy2cQ?si=hCykTESzwz1FSOgl";

function VideoSection() {
  return (
    <>
      <Head>
        <title>NAPCEN - Air Pollution Control Experts</title>
        <meta name="description" content="NAPCEN provides industrial air pollution control systems." />
        {/* Optional: Add Poppins font link if not already in your global CSS or _document.js */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" /> */}
      </Head>

      {/* Outer Box equivalent: 
        bg-[#1C1C1E] (MUI's background color)
        text-white 
        py-8 / py-12 (padding top/bottom) 
      */}
      <section className="py-8 md:py-12 bg-[#1C1C1E] text-white font-poppins">
        
        {/* Typography H3/H2 equivalent */}
        <h2 
          className="font-bold text-center mb-6 px-2 
                     text-[#00BFFF] 
                     text-[1.9rem] md:text-[2.6rem]" 
          // Custom class for exact font size and color matching
          style={{ color: '#00BFFF', fontWeight: 700 }}
        >
          NAPCEN: Industrial Air Pollution Control
        </h2>

        {/* Main Content Box equivalent: 
          maxWidth/width/mx/px
        */}
        <div 
          className="mx-auto w-full px-4 md:px-0"
          style={{ 
            maxWidth: '900px', // Replicates md: '800px', lg: '900px'
          }}
        >
          {/* Paper equivalent: 
            shadow-2xl (elevation 20) 
            rounded-3xl (borderRadius 20px) 
            overflow-hidden 
            bg-black 
          */}
          <div 
            className="rounded-[20px] overflow-hidden bg-black"
            style={{ 
              boxShadow: '0 25px 60px rgba(0,0,0,0.95)', // Replicates the strong, custom box shadow
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* 16:9 Responsive Wrapper (padding-top: 56.25%) */}
            <div className="relative pt-[56.25%]">
              <iframe
                // Using the video ID from the `EMBED_URL`
                src={EMBED_URL}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                // Tailwind classes for absolute positioning
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoSection;