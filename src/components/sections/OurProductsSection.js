import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Link as MuiLink,
} from '@mui/material';
import { createTheme, ThemeProvider, keyframes } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ✅ Image paths for products
import wetScrubberImg from '../../assets/images/resource/wet-scrubber-home.png';
import dustCollectorImg from '../../assets/images/products/dust collector/Wet-dust-collectors-chennai.jpg';
import downdraftTableImg from '../../assets/images/Downdraft-table-india.jpg';
import fumeExtractorImg from '../../assets/images/Acid-fume-scrubber-india.jpg';
import dryScrubberImg from '../../assets/images/Dry-scrubber-pondicherry.jpg';

// ✅ Animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// ✅ Theme setup
const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { color: 'white' },
      },
    },
  },
});

// ✅ Product data
const productCategories = [
  {
    name: 'Wet Scrubbers',
    image: wetScrubberImg,
    description:
      'Efficiently remove pollutants like dust, gases, and chemicals from industrial exhaust using liquid sprays. Ideal for high-temperature processes, they ensure compliance with emission standards by capturing particulates and neutralizing harmful gases.',
    link: '/wet-scrubbers',
  },
  {
    name: 'Dry Scrubbers',
    image: dryScrubberImg,
    description:
      'Control emissions using dry reagents to neutralize acidic gases like SO₂ and HCl. Perfect for industries needing low-maintenance, water-free solutions, offering high efficiency in removing pollutants from exhaust streams.',
    link: '/dry-scrubber',
  },
  {
    name: 'Dust Collectors',
    image: dustCollectorImg,
    description:
      'Capture and filter dust particles to maintain clean air in facilities. Designed for heavy-duty industrial use, they enhance worker safety and equipment longevity by removing fine particulates from manufacturing processes.',
    link: '/dust-collector',
  },
  {
    name: 'Fume Extractor',
    image: fumeExtractorImg,
    description:
      'Remove harmful fumes and gases from welding, soldering, or chemical processes. Compact and efficient, they protect workers and ensure clean air by filtering toxic vapors in industrial and lab settings.',
    link: '/fume-extractor',
  },
  {
    name: 'Downdraft Table',
    image: downdraftTableImg,
    description:
      'Capture dust and fumes during cutting, grinding, or welding with powerful downward suction. Ideal for metalworking and woodworking, they provide a clean, safe workspace by containing hazardous particles.',
    link: '/down-draft',
  },
  {
    name: 'Other Products...',
  },
];

// ✅ Product Section Component
function ProductSection({ categories, activeIndex, setActiveIndex, setIsAutoCycling }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTitleClick = useCallback(
    (index) => {
      setActiveIndex(index);
      setIsAutoCycling(false);
      setTimeout(() => setIsAutoCycling(true), 2000);
    },
    [setActiveIndex, setIsAutoCycling]
  );

  return (
    <Box sx={{ mb: 2, animation: `${fadeIn} 0.5s ease-in` }}>
      <Grid container spacing={1.5} justifyContent="center" alignItems="center" sx={{ mt: 6 }}>
        {/* ✅ Left Column (Titles) */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(0, 191, 255, 0.3)',
              borderRadius: 2,
              height: 400,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {categories.map((category, index) => (
              <Box
                key={index}
                onClick={() => handleTitleClick(index)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2.5,
                  py: 1.5,
                  cursor: 'pointer',
                  background: activeIndex === index ? 'rgba(240,245,246,0.9)' : 'transparent',
                  transition: 'background 0.3s ease',
                  '&:hover': { background: 'white' },
                  borderBottom:
                    index < categories.length - 1
                      ? '1px solid rgba(0, 191, 255, 0.3)'
                      : 'none',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#00BFFF',
                    position: 'absolute',
                    left: 12,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1.1rem' },
                    color: '#00BFFF',
                    ml: 2,
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* ✅ Right Column (Content + Image) */}
        <Grid item xs={12} md={9} lg={10} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: 600,
              height: 350,
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: 2,
              border: '1px solid rgba(0, 191, 255, 0.3)',
              p: 3,
              overflow: 'hidden',
              transition: '0.4s all ease',
            }}
            onMouseEnter={() => setIsAutoCycling(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoCycling(true), 6000)}
          >
            {/* Text Content */}
            <CardContent sx={{ p: 0, flex: '1 1 200px', overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <ArrowForwardIcon sx={{ color: '#00BFFF', mr: 1, fontSize: '1.2rem' }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#00BFFF' }}>
                  {categories[activeIndex].name}
                </Typography>
              </Box>

              {categories[activeIndex].description && (
                <Typography
                  variant="body2"
                  sx={{
                    color: '#B0BEC5',
                    fontSize: '0.9rem',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: isMobile ? 4 : 8,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {categories[activeIndex].description}
                </Typography>
              )}

              {categories[activeIndex].link && (
                <MuiLink
                  component={RouterLink}
                  to={categories[activeIndex].link}
                  sx={{
                    display: 'inline-block',
                    mt: 1.5,
                    px: 1.5,
                    py: 0.5,
                    background: 'rgba(0,191,255,0.2)',
                    border: '1px solid rgba(0,191,255,0.3)',
                    borderRadius: 1,
                    color: '#00BFFF',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: '0.3s all ease',
                    '&:hover': { background: 'rgba(0,191,255,0.3)' },
                  }}
                >
                  Learn More
                </MuiLink>
              )}
            </CardContent>

            {/* Product Image */}
            {categories[activeIndex].image && (
              <Box
                sx={{
                  flex: '1 1 180px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: isMobile ? 2 : 0,
                  ml: isMobile ? 0 : 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={categories[activeIndex].image}
                  alt={categories[activeIndex].name}
                  sx={{
                    width: isMobile ? '100%' : 260,
                    height: isMobile ? 180 : 260,
                    objectFit: 'cover',
                    borderRadius: 2,
                    border: '1px solid rgba(0,191,255,0.2)',
                  }}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

// ✅ Main Component
function OurProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Auto-cycle through categories every 4 seconds
  useEffect(() => {
    if (isMobile || !isAutoCycling) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, isAutoCycling]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          py: 4,
          px: { xs: 2, sm: 3, md: 4 },
          background: 'linear-gradient(to left, #334746ff, #151d1dff)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
              color: '#00BFFF',
              mb: 2,
              textAlign: 'center',
              borderBottom: '2px solid #00BFFF',
              pb: 0.5,
            }}
          >
            Our Products
          </Typography>

          <ProductSection
            categories={productCategories}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsAutoCycling={setIsAutoCycling}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default OurProductsSection;
