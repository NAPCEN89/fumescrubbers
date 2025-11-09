import React from 'react';
import { Container, Box, Typography, Link as MuiLink, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import images from src/assets/images
import bagHouseImg from '../../assets/images/products/dust collector/Baghouse-duct-collector-chennai.jpg';
import cartridgeImg from '../../assets/images/products/dust collector/cartridge-duct-collector-manufacturers-pondicherry.jpg';
import cycloneImg from '../../assets/images/products/dust collector/cyclone-duct-collector-chennai.jpg';
import portableImg from '../../assets/images/products/dust collector/Portable-duct-collectors-chennai.jpg';
import singleStageImg from '../../assets/images/products/dust collector/Single-stage-duct-collector-coimbathur.jpg';
import twoStageImg from '../../assets/images/products/dust collector/Two-stage-duct-collector-chennai.jpg';

// Define the theme with global font and link styles
const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            color: '#00BFFF',
          },
        },
      },
    },
  },
});

const dustCollectorProducts = [
  { 
    label: 'BagHouse Dust Collector', 
    link: '/baghouse', 
    image: bagHouseImg, 
    description: 'High-efficiency dust collection using fabric filter bags for industrial applications.' 
  },
  { 
    label: 'Cartridge Dust Collector', 
    link: '/cartridge', 
    image: cartridgeImg, 
    description: 'Compact cartridge filter system for fine dust capture in various industries.' 
  },
  { 
    label: 'Cyclone Dust Collector', 
    link: '/cyclone', 
    image: cycloneImg, 
    description: 'Centrifugal separation technology for efficient removal of larger dust particles.' 
  },
  { 
    label: 'Portable Dust Collector', 
    link: '/portable', 
    image: portableImg, 
    description: 'Mobile dust collection unit for flexible use in workshops and job sites.' 
  },
  { 
    label: 'Single Stage Dust Collector', 
    link: '/single-collector', 
    image: singleStageImg, 
    description: 'Simple one-stage filtration system for basic dust collection needs.' 
  },
  { 
    label: 'Two Stage Dust Collector', 
    link: '/two-stage', 
    image: twoStageImg, 
    description: 'Dual filtration process for enhanced efficiency and cleaner air output.' 
  },
];

// Helper component for the product card with consistent styling
const ProductCard = ({ product, activeLink }) => (
    <Card
      sx={{
        width: { xs: '100%', sm: 220 },
        maxWidth: 220,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: product.link === activeLink 
          ? '2px solid #00BFFF' 
          : '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px', // Consistent rounding
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        '&:hover': {
          transform: 'translateY(-5px) scale(1.03)', // Lift and scale effect
          boxShadow: '0 12px 30px rgba(0, 191, 255, 0.4)', // Strong glow on hover
        },
      }}
    >
      <MuiLink
        component={RouterLink}
        to={product.link}
        aria-label={`View ${product.label} product page`}
        sx={{ textDecoration: 'none', display: 'block' }} // Link the entire card
      >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.label}
          sx={{
            objectFit: 'cover',
            filter: 'brightness(0.9)', // Darker image for contrast
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            minHeight: 180, // Ensures uniform card height
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              mb: 1,
              color: product.link === activeLink ? '#00BFFF' : 'white',
              textAlign: 'center',
            }}
          >
            {product.label}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 2,
              textAlign: 'center',
              flexGrow: 1, // Pushes the link button to the bottom
            }}
          >
            {product.description}
          </Typography>
          <Box // Styled Box for the action link/button
            sx={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: product.link === activeLink ? '#00BFFF' : 'white',
              backgroundColor: product.link === activeLink ? 'rgba(0, 191, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              padding: '6px 16px',
              border: product.link === activeLink ? '1px solid #00BFFF' : '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: '#00BFFF',
                backgroundColor: 'rgba(0, 191, 255, 0.2)',
                borderColor: '#00BFFF',
              },
            }}
          >
            Learn More →
          </Box>
        </CardContent>
      </MuiLink>
    </Card>
);

const DustCollectorsList = ({ activeLink }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container 
        sx={{ 
          py: { xs: 4, md: 8 }, 
          backgroundColor: 'transparent', 
          overflow: 'hidden' 
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{ 
            mb: { xs: 4, md: 6 }, 
            textAlign: 'center', 
            fontWeight: 'bold', 
            color: '#00BFFF' 
          }}
        >
          Browse Our Range of Dust Collector Solutions
        </Typography>
        
        {/* Card Grid Layout */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch', // Ensures all cards have the same height
            flexWrap: 'wrap',
            gap: { xs: 3, sm: 4 }, 
          }}
        >
          {dustCollectorProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              activeLink={activeLink}
            />
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default DustCollectorsList;