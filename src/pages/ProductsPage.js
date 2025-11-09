// src/pages/Home.js
import React from 'react';
import { Box } from '@mui/material';
import Product from '../components/ReusableProducts/Product';
import ProductShowcase from '../components/ReusableProducts/ProductShowcase';

function ProductPage() {
  return (
    <Box sx={{
      margin:'-8px',
      marginTop:'40px'
    }}>
      <main>
        {/* The HeroSection is now placed directly without the particle container. */}
       <Product/>
       <ProductShowcase/>
      </main>
    </Box>
  );
}

export default ProductPage;