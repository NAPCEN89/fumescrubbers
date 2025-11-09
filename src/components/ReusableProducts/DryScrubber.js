import React from 'react';
import { Container, Box, Typography, Link as MuiLink, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import images from src/assets/images
import h2sImg from '../../assets/images/resource/all type of dry scrubber/21.jpg';
import vocImg from '../../assets/images/resource/all type of dry scrubber/20.jpg';
// Placeholder comments for missing images:
// import stpOdorImg from '../assets/images/stp-odor-control-system.jpg'; 
// import portableImg from '../assets/images/portable-dry-scrubber.jpg';

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
    // Removed global MuiTypography styleOverrides to handle white color locally for flexibility
  },
});

const dryScrubberProducts = [
  { 
    label: 'H2S Scrubber', 
    link: '/h2s', 
    image: h2sImg, 
    description: 'Removes hydrogen sulfide (H2S) gases using dry media for odor and corrosion control.' 
  },
  { 
    label: 'VOC Scrubber', 
    link: '/voc', 
    image: vocImg, 
    description: 'Captures and neutralizes volatile organic compounds (VOCs) in industrial exhaust.' 
  },
  { 
    label: 'STP Odor Control System', 
    link: '/stp-odor', 
    image: null, // Image placeholder for products not imported
    description: 'Dry scrubbing solution for sewage treatment plant odor elimination.' 
  },
  { 
    label: 'Portable Dry Scrubber', 
    link: '/portable-dry', 
    image: null, // Image placeholder for products not imported
    description: 'Mobile dry scrubber unit for flexible odor and gas control in various applications.' 
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
          ? '2px solid #00BFFF' // Thicker border for active state
          : '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px', 
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
        {/* Only render CardMedia if an image exists */}
        {product.image && (
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.label}
                sx={{
                    objectFit: 'cover',
                    filter: 'brightness(0.9)', 
                }}
            />
        )}
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            minHeight: product.image ? 180 : 320, // Adjust height if image is missing
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
              flexGrow: 1, 
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

const DryScrubbersList = ({ activeLink }) => {
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
          Browse Our Range of Dry Scrubber Solutions
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
          {dryScrubberProducts.map((product, index) => (
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

export default DryScrubbersList;