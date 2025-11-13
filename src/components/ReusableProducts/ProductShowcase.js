import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link as MuiLink,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const solutions = [
  {
    title: 'Wet Scrubber',
    description:
      'High-efficiency wet scrubbers remove acid fumes, chemical gases, SO2, HCl, and odors using water or chemical solutions. Ideal for chemical plants, battery manufacturing, and pickling lines in Chennai & Tamil Nadu.',
    link: '/wet-scrubbers',
    keywords: 'wet scrubber manufacturer chennai, packed bed scrubber tamilnadu, venturi scrubber india, acid fume scrubber chennai',
  },
  {
    title: 'Dry Scrubber',
    description:
      'Dry scrubbers eliminate SO2, HCl, HF without wastewater. Used in cement plants, incinerators, and glass manufacturing across Tamil Nadu with zero liquid discharge.',
    link: '/dry-scrubber',
    keywords: 'dry scrubber manufacturer india, so2 scrubber chennai, lime injection system tamilnadu',
  },
  {
    title: 'Dust Collector',
    description:
      'Baghouse, cyclone, and cartridge dust collectors capture 99.97% of dust from woodworking, metal grinding, pharma, and food processing units in Chennai, Coimbatore, and Madurai.',
    link: '/dust-collector',
    keywords: 'dust collector chennai, bag filter manufacturer tamilnadu, industrial dust collector india, pulse jet dust collector',
  },
  {
    title: 'Downdraft Table',
    description:
      'Self-cleaning downdraft tables for welding fumes, plasma cutting, and grinding. Portable & fixed models used in fabrication shops and engineering colleges across Tamil Nadu.',
    link: '/down-draft',
    keywords: 'downdraft table manufacturer chennai, welding fume extraction table india, grinding dust collector tamilnadu',
  },
  {
    title: 'Fume Extractor',
    description:
      'Portable and centralized fume extractors with flexible arms remove welding fumes, soldering vapors, and laser cutting smoke. Trusted by 500+ factories in Chennai & Pondicherry.',
    link: '/fume-extractor',
    keywords: 'fume extractor chennai, welding fume extractor manufacturer tamilnadu, portable fume extractor india',
  },
];

export default function SolutionSection() {
  return (
    <>
      {/* SEO ROCKET - GOOGLE WILL LOVE THIS PAGE */}
      <Helmet>
        <title>Wet Scrubber, Dust Collector, Fume Extractor Manufacturer in Chennai, Tamil Nadu | NAPCEN</title>
        <meta
          name="description"
          content="NAPCEN - Leading manufacturer of Wet Scrubbers, Dry Scrubbers, Dust Collectors, Downdraft Tables & Fume Extractors in Chennai, Tamil Nadu. Serving 500+ factories across India with CPCB & TNPCB compliant systems."
        />

        {/* HIDDEN KEYWORDS (Google reads, users don't see) */}
        <meta
          name="keywords"
          content="
            wet scrubber manufacturer chennai, dust collector tamilnadu, fume extractor india,
            industrial air pollution control equipment chennai, dry scrubber manufacturer tamilnadu,
            downdraft table chennai, welding fume extractor pondicherry, baghouse dust collector coimbatore,
            centrifugal blower manufacturer chennai, ventilation system tamilnadu, acid fume scrubber india,
            portable dust collector chennai, industrial blower supplier tamilnadu, packed bed scrubber manufacturer,
            venturi scrubber chennai, pulse jet bag filter tamilnadu, cpcb approved scrubber india
          "
        />

        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        <link rel="canonical" href="https://www.napcen.com/" />

        {/* Social Media Boost */}
        <meta property="og:title" content="Best Wet Scrubber & Dust Collector Manufacturer in Chennai | NAPCEN" />
        <meta property="og:description" content="Industrial air pollution control systems made in Chennai. Trusted by factories in Tamil Nadu, Karnataka & Andhra Pradesh." />
        <meta property="og:image" content="https://www.napcen.com/og-solutions.jpg" />
        <meta property="og:url" content="https://www.napcen.com/" />
      </Helmet>

      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: 2,
          background: `linear-gradient(135deg, #1f2525 0%, #151d1d 100%)`,
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ maxWidth: 1300, mx: 'auto' }}>
          {/* Main Heading */}
          <Typography
            variant="h6"
            sx={{
              color: '#00BFFF',
              fontWeight: 700,
              letterSpacing: '2px',
              mb: 1,
              textTransform: 'uppercase',
            }}
          >
            Our Solutions
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              background: 'linear-gradient(90deg, #00BFFF, #00FFD1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Industrial Air Pollution Control Systems
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 8,
              maxWidth: 900,
              mx: 'auto',
              color: '#BFC5DC',
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              lineHeight: 1.7,
            }}
          >
            CPCB & TNPCB Approved Systems | Made in Chennai | Delivered Across India
          </Typography>

          {/* Cards Grid */}
          <Grid container spacing={5} justifyContent="center">
            {solutions.map((solution, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={4}>
                <Card
                  sx={{
                    height: '100%',
                    maxWidth: 420,
                    mx: 'auto',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0, 191, 255, 0.25)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-16px)',
                      boxShadow: '0 25px 50px rgba(0, 191, 255, 0.25)',
                      borderColor: '#00BFFF',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 8,
                      background: 'linear-gradient(90deg, #00BFFF, #00FFD1)',
                    }}
                  />
                  <CardContent
                    sx={{
                      p: 4,
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#00BFFF',
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.4rem',
                      }}
                    >
                      {solution.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#E0E0E0',
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.8,
                        fontSize: '1rem',
                      }}
                    >
                      {solution.description}
                    </Typography>

                    <MuiLink
                      component={RouterLink}
                      to={solution.link}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        mt: 'auto',
                        color: '#00BFFF',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        transition: 'all 0.3s',
                        '&:hover': {
                          color: '#00FFD1',
                          transform: 'translateX(8px)',
                        },
                      }}
                    >
                      Explore Solution <ArrowForwardIcon sx={{ fontSize: 22 }} />
                    </MuiLink>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Trust Line */}
          <Typography
            variant="h6"
            sx={{
              mt: 10,
              color: '#00BFFF',
              fontWeight: 600,
              letterSpacing: '1px',
            }}
          >
            Over 10 Years of Excellence | 500+ Installations | Chennai, Tamil Nadu
          </Typography>
        </Box>
      </Box>
    </>
  );
}