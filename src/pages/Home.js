// src/pages/Home.js

import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/sections/HeroSection';
import AboutUsSection from '../components/sections/AboutUsSection';
import OurProductsSection from '../components/sections/OurProductsSection';
import OurServicesSection from '../components/sections/OurServicesSection';
import TestimonialsAndClientsSection from '../components/sections/TestimonialsAndClientsSection';
import FAQSection from '../components/sections/FAQSection';
// import ProductDetail from '../components/sections/ProductDetail'; // Not used in render, commenting out for cleanliness
import PartnerSection from '../components/sections/PartnerSection';
import CounterSection from '../components/sections/CounterSection';
import VideoSection from '../components/sections/VideoSection';
import ServiceCard from '../components/sections/ServiceCard';
// 1. Import the new RecentBlogs component
import RecentBlogs from '../components/sections/RecentBlogs';


function Home() {
  return (
    <Box sx={{
      margin:'-8px',
      marginTop:'0px'
    }}>
      <main>
        {/* The HeroSection is now placed directly without the particle container. */}
        <HeroSection />

        
        <AboutUsSection />
        
          <ServiceCard/>
          <OurProductsSection />
        <OurServicesSection />
        <VideoSection/>
        
        
        {/* 2. Place the RecentBlogs component here, after Testimonials */}
        <RecentBlogs />

        <PartnerSection/>
        <CounterSection/>
        <FAQSection />
      </main>
    </Box>
  );
}

export default Home;