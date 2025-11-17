// src/components/sections/HeroSection.jsx
import React, { useState, useRef, useLayoutEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Fade,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

// Your original video – only one file
import heroVideoMP4 from '../../assets/images/napcenBg.mp4';

const theme = createTheme({
  typography: { fontFamily: '"Poppins", sans-serif' },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '50px',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // --------------------------------------------------------------
  // 1. Detect if we can safely play the video
  // --------------------------------------------------------------
  const canPlay =
    typeof navigator !== 'undefined' &&
    !navigator.connection?.saveData &&
    !['slow-2g', '2g'].includes(navigator.connection?.effectiveType ?? '') &&
    !window.matchMedia('(prefers-reduced-data: reduce)').matches;

  // --------------------------------------------------------------
  // 2. Load only metadata → first frame → try playback
  // --------------------------------------------------------------
  useLayoutEffect(() => {
    if (!canPlay) return;               // <-- nothing to do on bad networks

    const video = videoRef.current;
    if (!video) return;

    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;

    let mounted = true;
    let timer;

    const tryPlay = async () => {
      try {
        await video.play();
        if (mounted) setShowVideo(true);
      } catch {
        if (mounted) setShowVideo(true); // fallback to first frame
      }
    };

    const onMetadata = () => {
      if (mounted) setShowVideo(true);   // first frame is ready
      timer = setTimeout(tryPlay, 400);
    };

    video.addEventListener('loadedmetadata', onMetadata);

    // Fallback: show after 2.5 s even if metadata never fires
    timer = setTimeout(() => {
      if (mounted && !showVideo) setShowVideo(true);
    }, 2500);

    return () => {
      mounted = false;
      video.removeEventListener('loadedmetadata', onMetadata);
      clearTimeout(timer);
    };
  }, [canPlay, showVideo]);   // <-- added `showVideo` → ESLint happy

  // --------------------------------------------------------------
  // 3. Render
  // --------------------------------------------------------------
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Leading Air Pollution Control Equipment Manufacturer in India | Napcean</title>
        <meta
          name="description"
          content="India's trusted manufacturer of Wet Scrubbers, Dry Scrubbers, Dust Collectors, Downdraft Tables, and Fume Extractors. ISO Certified. Serving India, Tamil Nadu, and global clients."
        />
        <link rel="canonical" href="https://napcean.in/" />
        <meta
          name="keywords"
          content="wet scrubber manufacturer india, dust collector supplier tamil nadu, dry scrubber price, downdraft table pondicherry, fume extractor india, air pollution control equipment"
        />
        <link rel="preload" href={heroVideoMP4} as="video" type="video/mp4" />
      </Helmet>

      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '75vh', sm: '80vh', md: '90vh', lg: '100vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Video – first frame is the instant fallback */}
        <Fade in={showVideo} timeout={1000}>
          <Box
            component="video"
            ref={videoRef}
            autoPlay={canPlay}
            muted
            loop
            playsInline
            poster={heroVideoMP4}
            preload="metadata"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: showVideo ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              filter: 'brightness(0.75)',
              zIndex: 1,
            }}
          >
            <source src={heroVideoMP4} type="video/mp4" />
          </Box>
        </Fade>

        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(10,10,30,0.6) 100%)',
            zIndex: 2,
          }}
        />

        {/* Content – fully responsive */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 4, sm: 6, md: 8 },
          }}
        >
          <Fade in timeout={1000}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: '2rem',
                  sm: '2.8rem',
                  md: '3.8rem',
                  lg: '4.5rem',
                  xl: '5rem',
                },
                lineHeight: { xs634: 1.1, md: 1.15 },
                mb: { xs: 1.5, md: 2 },
                textShadow: '2px 2px 12px rgba(0,0,0,0.8)',
                letterSpacing: { xs: '-0.5px', md: '-1px' },
              }}
            >
              Industrial Air Pollution<br />Control Solutions
            </Typography>
          </Fade>

          <Fade in timeout={1300} style={{ transitionDelay: '200ms' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: '1rem',
                  sm: '1.2rem',
                  md: '1.4rem',
                  lg: '1.5rem',
                },
                mb: { xs: 2, md: 3 },
                opacity: 0.95,
                textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
              }}
            >
              Wet Scrubber • Dry Scrubber • Dust Collector • Fume Extraction
            </Typography>
          </Fade>

          <Fade in timeout={1600} style={{ transitionDelay: '400ms' }}>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '720px',
                mx: 'auto',
                mb: { xs: 3, md: 4 },
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.1rem',
                  lg: '1.15rem',
                },
                opacity: 0.9,
                textShadow: '1px 1px 5px rgba(0,0,0,0.7)',
                lineHeight: 1.6,
              }}
            >
              Trusted manufacturer in Pondicherry. Factory-direct prices. Serving India & worldwide.
            </Typography>
          </Fade>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 2.5 }}
            justifyContent="center"
            sx={{ mt: { xs: 2, md: 3 } }}
          >
            <Button
              component={RouterLink}
              to="/products"
              variant="contained"
              size="large"
              sx={{
                minWidth: { xs: 180, sm: 200, md: 220 },
                py: { xs: 1.5, sm: 1.8 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                bgcolor: '#00BFFF',
                '&:hover': {
                  bgcolor: '#00A3E0',
                  transform: 'translateY(-2px)',
                },
                boxShadow: '0 6px 16px rgba(0,191,255,0.3)',
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
                minWidth: { xs: 180, sm: 200, md: 220 },
                py: { xs: 1.5, sm: 1.8 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
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
            variant="caption"
            sx={{
              mt: { xs: 3, md: 4 },
              opacity: 0.8,
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
              display: 'block',
            }}
          >
            Serving Puducherry • Tamil Nadu • India • Worldwide
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}