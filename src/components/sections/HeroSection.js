import React, { useState, useRef, useLayoutEffect } from 'react';
import { Box, Typography, Button, Container, Stack, Fade } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import heroBackground from '../../assets/images/bgnap.jpeg';
import heroVideo from '../../assets/images/napcenBg.mp4';

const theme = createTheme({
  typography: { fontFamily: '"Poppins", sans-serif' },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '50px',
          padding: '12px 28px',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Prioritize loading
    video.loading = 'eager';
    video.fetchPriority = 'high';
    video.preload = 'auto';

    const handleLoaded = () => setVideoLoaded(true);
    video.addEventListener('canplaythrough', handleLoaded);

    // Fallback: if not loaded in 3s, show poster
    const timeout = setTimeout(() => setVideoLoaded(true), 3000);

    return () => {
      video.removeEventListener('canplaythrough', handleLoaded);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Leading Air Pollution Control Equipment Manufacturer in India | Napcean</title>
        <meta
          name="description"
          content="India's trusted manufacturer of Wet Scrubbers, Dry Scrubbers, Dust Collectors, Downdraft Tables, and Fume Extractors. ISO Certified. Serving India, Tamil Nadu, and global clients."
        />
        <link rel="canonical" href="https://napcean.in/" />
        <meta name="keywords" content="wet scrubber manufacturer india, dust collector supplier tamil nadu, dry scrubber price, downdraft table pondicherry, fume extractor india, air pollution control equipment" />

        {/* Preload critical assets */}
        <link rel="preload" href={heroVideo} as="video" type="video/mp4" />
        <link rel="preload" href={heroBackground} as="image" fetchpriority="high" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Napcean Engineering",
            "url": "https://napcean.in",
            "description": "Leading manufacturer of air pollution control systems from Pondicherry, India.",
            "address": { "@type": "PostalAddress", "addressLocality": "Puducherry", "addressRegion": "PY", "addressCountry": "IN" }
          })}
        </script>
      </Helmet>

      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Background Video + Fallback Image */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          {/* Fallback Image (shows instantly) */}
          <Box
            component="img"
            src={heroBackground}
            alt="Napcean Factory"
            loading="eager"
            fetchPriority="high"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              inset: 0,
              filter: 'brightness(0.7)',
            }}
          />

          {/* Video Overlay */}
          <Fade in={videoLoaded} timeout={800}>
            <Box
              component="video"
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={heroBackground}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
                opacity: videoLoaded ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                filter: 'brightness(0.75)',
              }}
            >
              <source src={heroVideo} type="video/mp4" />
            </Box>
          </Fade>

          {/* Dark Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(10,10,30,0.6) 100%)',
            }}
          />
        </Box>

        {/* Hero Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            px: { xs: 3, sm: 4 },
            py: { xs: 8, md: 12 },
          }}
        >
          <Fade in timeout={1200}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', sm: '3.8rem', md: '5rem' },
                lineHeight: 1.1,
                mb: 2,
                textShadow: '3px 3px 15px rgba(0,0,0,0.8)',
                letterSpacing: '-0.5px',
              }}
            >
              Industrial Air Pollution<br />Control Solutions
            </Typography>
          </Fade>

          <Fade in timeout={1500} style={{ transitionDelay: '300ms' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                fontSize: { xs: '1.1rem', sm: '1.4rem' },
                mb: 3,
                opacity: 0.95,
                textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              }}
            >
              Wet Scrubber • Dry Scrubber • Dust Collector • Fume Extraction
            </Typography>
          </Fade>

          <Fade in timeout={1800} style={{ transitionDelay: '600ms' }}>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '720px',
                mx: 'auto',
                mb: 5,
                fontSize: { xs: '1rem', sm: '1.15rem' },
                opacity: 0.9,
                textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
              }}
            >
              Trusted manufacturer in Pondicherry. Factory-direct prices. Serving India & worldwide.
            </Typography>
          </Fade>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              component={RouterLink}
              to="/products"
              variant="contained"
              size="large"
              sx={{
                minWidth: 220,
                bgcolor: '#00BFFF',
                '&:hover': { bgcolor: '#00A3E0', transform: 'translateY(-2px)' },
                boxShadow: '0 8px 20px rgba(0,191,255,0.4)',
              }}
            >
              Explore Products
            </Button>

            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                minWidth: 220,
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.6)',
                '&:hover': {
                  borderColor: '#fff',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get Quote Now
            </Button>
          </Stack>

          <Typography
            variant="body2"
            sx={{ mt: 4, opacity: 0.8, fontSize: '0.9rem' }}
          >
            Serving Puducherry • Tamil Nadu • India • Worldwide
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default HeroSection;