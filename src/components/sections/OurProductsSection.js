import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Link as MuiLink,
  Container,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { createTheme, ThemeProvider, keyframes } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Images
import wetScrubberImg from '../../assets/images/resource/wet-scrubber-home.png';
import dustCollectorImg from '../../assets/images/products/dust collector/Wet-dust-collectors-chennai.jpg';
import downdraftTableImg from '../../assets/images/Downdraft-table-india.jpg';
import fumeExtractorImg from '../../assets/images/Acid-fume-scrubber-india.jpg';
import dryScrubberImg from '../../assets/images/Dry-scrubber-pondicherry.jpg';

// Desktop animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Theme
const theme = createTheme({
  typography: { fontFamily: ['"Poppins"', 'sans-serif'].join(',') },
  components: { MuiTypography: { styleOverrides: { root: { color: 'white' } } } },
});

// Hidden SEO Keywords
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    best wet scrubber manufacturer india, best dry scrubber manufacturer tamil nadu,
    best dust collector manufacturer india, best fume extractor manufacturer worldwide,
    best downdraft table manufacturer india, best pp frp scrubber supplier tamil nadu,
    best venturi scrubber manufacturer india, best packed bed scrubber exporter worldwide,
    best pulse jet dust collector india, best baghouse dust collector tamil nadu,
    best cyclone dust collector manufacturer india, best cartridge dust collector supplier,
    best welding fume extractor manufacturer india, best portable fume extractor tamil nadu,
    best industrial vacuum cleaner manufacturer india, best grinding downdraft table worldwide,
    best plasma cutting downdraft bench india, best woodworking dust collector tamil nadu,
    best foundry dust collector manufacturer india, best pharmaceutical dust collector supplier,
    best chemical scrubber manufacturer india, best so2 scrubber exporter worldwide,
    best activated carbon scrubber tamil nadu, best emergency chlorine scrubber india,
    best biodiesel scrubber manufacturer, best etp odour control scrubber india,
    best stp wet scrubber supplier tamil nadu, best air pollution control equipment manufacturer india
  </Box>
);

function ProductSection({ categories, activeIndex, setActiveIndex, setIsAutoCycling, isDesktop }) {
  const handleTitleClick = useCallback((index) => {
    setActiveIndex(index);
    setIsAutoCycling(false);
    setTimeout(() => setIsAutoCycling(true), 3000);
  }, [setActiveIndex, setIsAutoCycling]);

  return (
    <Box sx={{ animation: isDesktop ? `${fadeIn} 0.6s ease-out` : 'none' }}>
      <HiddenSEO />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Napcean Air Pollution Control Products",
          "itemListElement": categories.filter(c => c.link).map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": c.name,
              "description": c.description,
              "url": `https://napcean.in${c.link}`,
              "image": c.image
            }
          }))
        })}
      </script>

      {/* DESKTOP: YOUR EXACT OLD STYLE */}
      {isDesktop && (
        <Grid container spacing={1.5} justifyContent="center" alignItems="center" sx={{ mt: 6 }}>
          {/* Left Column */}
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
                    borderBottom: index < categories.length - 1 ? '1px solid rgba(0, 191, 255, 0.3)' : 'none',
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
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1.1rem' }, color: '#00BFFF', ml: 2 }}>
                    {category.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={9} lg={10} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
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
                      WebkitLineClamp: 8,
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

              {categories[activeIndex].image && (
                <Box sx={{ flex: '1 1 180px', display: 'flex', justifyContent: 'center', alignItems: 'center', ml: 2 }}>
                  <CardMedia
                    component="img"
                    image={categories[activeIndex].image}
                    alt={categories[activeIndex].name}
                    loading="lazy"
                    decoding="async"
                    sx={{
                      width: 260,
                      height: 260,
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
      )}

      {/* MOBILE: ONLY PRODUCT NAMES – NO IMAGE, NO DESCRIPTION */}
      {!isDesktop && (
        <Box sx={{ mt: 6, px: 2 }}>
          <Typography variant="h6" sx={{ color: '#00BFFF', mb: 3, textAlign: 'center', fontWeight: 700 }}>
            Our Products
          </Typography>
          <List sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 3, py: 2 }}>
            {categories.filter(c => c.link).map((cat, i) => (
              <ListItem
                key={i}
                component={RouterLink}
                to={cat.link}
                sx={{
                  borderBottom: i < categories.length - 2 ? '1px solid rgba(0,191,255,0.2)' : 'none',
                  py: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': { background: 'rgba(0,191,255,0.1)', pl: 3 },
                }}
              >
                <ListItemText
                  primary={cat.name}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: '#ffffff',
                  }}
                />
                <ArrowForwardIcon sx={{ color: '#00BFFF', fontSize: '1.1rem' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default function OurProductsSection() {
  const productCategories = useMemo(() => [
    { name: 'Wet Scrubbers', image: wetScrubberImg, description: 'Efficiently remove pollutants like dust, gases, and chemicals from industrial exhaust using liquid sprays.', link: '/wet-scrubbers' },
    { name: 'Dry Scrubbers', image: dryScrubberImg, description: 'Control emissions using dry reagents to neutralize acidic gases like SO₂ and HCl.', link: '/dry-scrubber' },
    { name: 'Dust Collectors', image: dustCollectorImg, description: 'Capture and filter dust particles to maintain clean air in facilities.', link: '/dust-collector' },
    { name: 'Fume Extractor', image: fumeExtractorImg, description: 'Remove harmful fumes and gases from welding, soldering, or chemical processes.', link: '/fume-extractor' },
    { name: 'Downdraft Table', image: downdraftTableImg, description: 'Capture dust and fumes during cutting, grinding, or welding.', link: '/down-draft' },
    { name: 'Other Products...' },
  ], []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const isDesktop = useMediaQuery('(min-width:900px)');

  useEffect(() => {
    if (!isDesktop || !isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, [isDesktop, isAutoCycling]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
          background: 'linear-gradient(to left, #334746ff, #151d1dff)',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.9rem', md: '2.4rem' },
              color: '#00BFFF',
              mb: { xs: 5, md: 6 },
              textShadow: '0 0 20px rgba(0,191,255,0.4)',
            }}
          >
            Our Products
          </Typography>

          <ProductSection
            categories={productCategories}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsAutoCycling={setIsAutoCycling}
            isDesktop={isDesktop}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}