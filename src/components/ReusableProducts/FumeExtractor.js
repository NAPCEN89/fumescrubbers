// components/sections/FumeExtractorsList.js
import React from 'react';
import { Container, Box, Typography, Link as MuiLink, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import images from src/assets/images
import solderingImg from '../../assets/images/products/Fume extractor/Soldering-fume-Extractor.jpg';
import laserImg from '../../assets/images/products/Fume extractor/Laser-fume-extractor.jpg';
import weldingImg from '../../assets/images/products/Fume extractor/Welding-fume-extractor.jpg';
import goldImg from '../../assets/images/products/Fume extractor/Gold-fume-extractor.jpg';
import laboratoryImg from '../../assets/images/products/Fume extractor/Laboratory-fume-extractor.jpg';
import printingImg from '../../assets/images/products/Fume extractor/Printing-fume-extractor.jpg';

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
          // Note: Text color is handled directly on components for better control against the dark background
          '&:hover': {
            color: '#00BFFF',
          },
        },
      },
    },
  },
});

const fumeExtractorProducts = [
  { 
    label: 'Soldering Fume Extractor', 
    link: '/soldering-fume', 
    image: solderingImg, 
    description: 'Efficiently removes harmful fumes generated during soldering in electronics manufacturing.' 
  },
  { 
    label: 'Laser Fume Extractor', 
    link: '/laser-fume', 
    image: laserImg, 
    description: 'Captures and filters fumes from laser cutting, engraving, and marking processes.' 
  },
  { 
    label: 'Welding Fume Extractor', 
    link: '/welding-fume', 
    image: weldingImg, 
    description: 'Extracts toxic welding fumes to ensure worker safety in fabrication environments.' 
  },
  { 
    label: 'Gold Fume Extractor', 
    link: '/gold-fume', 
    image: goldImg, 
    description: 'Specialized system for extracting fumes during gold refining and jewelry production.' 
  },
  { 
    label: 'Laboratory Fume Extractor', 
    link: '/lab-fume', 
    image: laboratoryImg, 
    description: 'Versatile fume extraction for various laboratory chemical and experimental procedures.' 
  },
  { 
    label: 'Printing Fume Extractor', 
    link: '/printing-fume', 
    image: printingImg, 
    description: 'Handles volatile organic compounds and fumes from 3D printing and screen printing operations.' 
  },
];

// Helper component for the product card
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
        borderRadius: '16px', // Rounded corners
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth transition
        '&:hover': {
          transform: 'translateY(-5px) scale(1.03)', // Lift and scale effect
          boxShadow: '0 12px 30px rgba(0, 191, 255, 0.4)', // Stronger glow on hover
        },
      }}
    >
      <MuiLink
        component={RouterLink}
        to={product.link}
        aria-label={`View ${product.label} product page`}
        sx={{ textDecoration: 'none', display: 'block' }} // Make the whole card area clickable/linkable
      >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.label}
          sx={{
            objectFit: 'cover',
            filter: 'brightness(0.9)', // Slightly darker image for text contrast
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            minHeight: 180, // Ensure uniform card height
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
          <Box // Separate Box for the Button/Link style
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


const FumeExtractorsList = ({ activeLink }) => {
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
          Browse Our Range of Fume Extractor Solutions
        </Typography>
        
        {/* Card Grid Layout */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch', // Ensures all cards have the same height
            flexWrap: 'wrap',
            gap: { xs: 3, sm: 4 }, // Increased gap for better spacing
          }}
        >
          {fumeExtractorProducts.map((product, index) => (
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

export default FumeExtractorsList;