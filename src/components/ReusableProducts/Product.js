import React, { useState } from 'react';
import { Box, Typography, Link as MuiLink, Card, CardContent, CardMedia } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

// Import images from src/assets/images
import wetScrubberImg from '../../assets/images/resource/wet-scrubber-home.png';
import dustCollectorImg from '../../assets/images/products/dust collector/Wet-dust-collectors-chennai.jpg';
import downdraftTableImg from '../../assets/images/Downdraft-table-india.jpg';
import fumeExtractorImg from '../../assets/images/Acid-fume-scrubber-india.jpg';
import dryScrubberImg from '../../assets/images/Dry-scrubber-pondicherry.jpg';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

const productData = [
  {
    label: 'Wet Scrubbers',
    link: '/wet-scrubbers',
    image: wetScrubberImg,
    description: 'Efficiently remove pollutants from industrial exhaust streams using liquid.',
  },
  {
    label: 'Dust Collectors',
    link: '/dust-collector',
    image: dustCollectorImg,
    description: 'Capture and filter dust particles for cleaner air in your facility.',
  },
  {
    label: 'Downdraft Table',
    link: '/down-draft',
    image: downdraftTableImg,
    description: 'Ideal for capturing dust and fumes during cutting or grinding.',
  },
  {
    label: 'Fume Extractor',
    link: '/fume-extractor',
    image: fumeExtractorImg,
    description: 'Remove harmful fumes and gases from welding and soldering.',
  },
  {
    label: 'Dry Scrubbers',
    link: '/dry-scrubber',
    image: dryScrubberImg,
    description: 'Control emissions with dry reagents for cleaner exhaust.',
  },
];

function ProductHeroSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Box
        sx={{
          py: 8,
          px: 2,
          background: `linear-gradient(to left, #334746ff, #151d1dff)`,
          color: 'white',
          textAlign: 'center',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Typography
                  variant="h5"
                  component="h2"
                  sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: '#00BFFF' }}
                >
                  All Products
                </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            mb: 4,
            gap: { xs: 2, sm: 4 },
          }}
        >
          
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 2, sm: 4 },
              width: '100%',
            }}
          >
            {productData.map((item, index) => (
              <Card
                key={index}
                sx={{
                  width: { xs: '100%', sm: 220 },
                  maxWidth: 220,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 24px rgba(0, 191, 255, 0.2)',
                  },
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.label}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      mb: 2,
                      textAlign: 'center',
                    }}
                  >
                    {item.description}
                  </Typography>
                  <MuiLink
                    component={RouterLink}
                    to={item.link}
                    underline="none"
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50px',
                      padding: '8px 20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease-in-out',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#00BFFF',
                        backgroundColor: 'rgba(0, 191, 255, 0.1)',
                        borderColor: '#00BFFF',
                      },
                    }}
                  >
                    Learn More
                  </MuiLink>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ProductHeroSection;