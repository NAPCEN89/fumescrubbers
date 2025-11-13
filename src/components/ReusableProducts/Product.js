import React, { useState } from 'react';
import { Box, Typography, Link as MuiLink, Card, CardContent, CardMedia } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

// Import images
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
      styleOverrides: { root: { color: 'white' } },
    },
  },
});

const productData = [
  {
    label: 'Wet Scrubbers',
    link: '/wet-scrubbers',
    image: wetScrubberImg,
    description: 'High-efficiency wet scrubbers for acid fumes, chemical gases & odor control',
    keywords: 'wet scrubber manufacturer chennai, packed bed scrubber tamilnadu, industrial wet scrubber india'
  },
  {
    label: 'Dust Collectors',
    link: '/dust-collector',
    image: dustCollectorImg,
    description: 'Baghouse, cyclone & cartridge dust collectors for all industries',
    keywords: 'dust collector chennai, bag filter manufacturer tamilnadu, industrial dust collector india'
  },
  {
    label: 'Downdraft Table',
    link: '/down-draft',
    image: downdraftTableImg,
    description: 'Self-cleaning downdraft tables for welding, grinding & plasma cutting',
    keywords: 'downdraft table manufacturer india, welding fume extraction table chennai'
  },
  {
    label: 'Fume Extractor',
    link: '/fume-extractor',
    image: fumeExtractorImg,
    description: 'Portable & centralized fume extraction systems for welding & soldering',
    keywords: 'fume extractor chennai, welding fume extractor tamilnadu, portable fume extractor india'
  },
  {
    label: 'Dry Scrubbers',
    link: '/dry-scrubber',
    image: dryScrubberImg,
    description: 'Dry scrubbers for SO2, HCl & chemical gas removal without water',
    keywords: 'dry scrubber manufacturer india, venturi scrubber chennai, industrial dry scrubber tamilnadu'
  },
];

function ProductHeroSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);

  return (
    <ThemeProvider theme={theme}>
      {/* SEO ROCKET FUEL - Google LOVES this */}
      <Helmet>
        <title>Wet Scrubber, Dust Collector, Fume Extractor Manufacturer in Chennai, Tamil Nadu | NAPCEN</title>
        <meta name="description" content="Leading industrial air pollution control equipment manufacturer in Chennai, Tamil Nadu. Wet Scrubbers, Dust Collectors, Fume Extractors, Downdraft Tables, Dry Scrubbers for factories across India." />
        
        {/* Hidden SEO Keywords (Google reads, users don't see) */}
        <meta name="keywords" content="
          wet scrubber manufacturer chennai, dust collector tamilnadu, fume extractor india,
          industrial wet scrubber chennai, bag filter manufacturer tamilnadu, downdraft table india,
          welding fume extractor chennai, dry scrubber manufacturer pondicherry, centrifugal blower chennai,
          air pollution control equipment tamilnadu, ventilation system manufacturer india,
          packed bed scrubber chennai, venturi scrubber tamilnadu, acid fume scrubber india,
          portable dust collector chennai, industrial blower manufacturer tamilnadu
        " />

        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        
        <link rel="canonical" href="https://www.napcen.com/" />
        
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Best Air Pollution Control Equipment Manufacturer in Chennai | NAPCEN" />
        <meta property="og:description" content="Wet Scrubbers, Dust Collectors & Fume Extractors made in Chennai, Tamil Nadu. Trusted by 500+ factories across India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.napcen.com/" />
        <meta property="og:image" content="https://www.napcen.com/og-image.jpg" />
      </Helmet>

      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 2,
          background: `linear-gradient(135deg, #334746 0%, #151d1d 100%)`,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Main Title */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 6,
            fontWeight: 800,
            background: 'linear-gradient(90deg, #00BFFF, #00FFD1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', md: '3rem' },
            letterSpacing: '1px',
          }}
        >
          Our Industrial Air Pollution Control Systems
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 8,
            maxWidth: '900px',
            mx: 'auto',
            color: '#BFC5DC',
            fontWeight: 300,
            fontSize: { xs: '1rem', md: '1.3rem' },
          }}
        >
          Trusted by <strong>500+ factories</strong> across Tamil Nadu, Karnataka, Andhra Pradesh & India
        </Typography>

        {/* Product Cards Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4 },
            maxWidth: '1400px',
            mx: 'auto',
            px: { xs: 2, md: 0 },
          }}
        >
          {productData.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 260, md: 280 },
                maxWidth: 300,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.05)',
                  boxShadow: '0 20px 40px rgba(0, 191, 255, 0.3)',
                  borderColor: '#00BFFF',
                },
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={`${item.label} Manufacturer in Chennai - NAPCEN`}
                sx={{ objectFit: 'cover', transition: '0.4s', '&:hover': { transform: 'scale(1.08)' } }}
              />
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.2rem' }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E0E0', mb: 3, lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {item.description}
                </Typography>
                <MuiLink
                  component={RouterLink}
                  to={item.link}
                  sx={{
                    display: 'inline-block',
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(90deg, #00BFFF, #00FFD1)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '50px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 15px rgba(0, 191, 255, 0.4)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(0, 191, 255, 0.6)',
                    },
                  }}
                >
                  Explore →
                </MuiLink>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Trust Badge */}
        <Typography
          variant="body2"
          sx={{
            mt: 8,
            color: '#00BFFF',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '1px',
          }}
        >
          Made in Pondicherry • Delivered Across India • 10+ Years of Excellence
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default ProductHeroSection;

