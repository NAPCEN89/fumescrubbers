import React, { useState, useEffect, useLayoutEffect } from 'react'; // Import useLayoutEffect
import { Box, Typography, Button, Container, Stack, Fade } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async'; // Import Helmet for preloading
import heroBackground from '../../assets/images/bgnap.jpeg';
import heroVideo from '../../assets/images/napcenBg.mp4';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '50px',
          padding: { xs: '8px 16px', sm: '10px 24px' },
          fontSize: { xs: '0.85rem', sm: '0.95rem' },
          transition: 'all 0.4s ease-in-out',
        },
      },
    },
  },
});

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = React.useRef(null); // Ref to access the video element directly

  // Handler to set state when the video is ready to start
  const handleVideoReady = () => {
    setVideoLoaded(true);
  };
  
  // Use useLayoutEffect to immediately set the video fetch priority
  useLayoutEffect(() => {
    if (videoRef.current) {
      // Set the video element's loading priority to "high"
      videoRef.current.loading = 'eager'; 
    }
  }, []); 

  return (
    <ThemeProvider theme={theme}>
      {/* 1. Resource Hint via Helmet: Tell the browser to download the video immediately */}
      <Helmet>
        <link 
          rel="preload" 
          href={heroVideo} 
          as="video" 
          type="video/mp4" 
          crossorigin="anonymous" // Important if the video is served from a CDN
        />
      </Helmet>
      
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        {/* Background Fallback (Image) & Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            // Fallback image is crucial while the video loads
            backgroundImage: `url(${heroBackground})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // Overlay gradient
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
              background:
                'linear-gradient(rgba(15, 15, 15, 0.18), rgba(21, 20, 20, 0.5))',
            },
          }}
          aria-label="Industrial air purification background featuring wet scrubber, dust collector, and fume extraction systems"
        >
          {/* Video element wrapped in Fade for smooth transition */}
          <Fade 
            in={videoLoaded} // Fade in when videoLoaded is true
            timeout={1000} 
            easing="ease-in-out"
          >
            <video
              ref={videoRef} // Attach ref for direct access
              autoPlay
              muted
              playsInline
              loop
              preload="auto" // Retain 'auto' to ensure faster data fetch
              poster={heroBackground}
              onCanPlay={handleVideoReady} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 0.8,
                display: 'block',
                position: 'absolute', 
                top: 0,
                left: 0,
              }}
              aria-label="Demo video of industrial wet scrubber and dust collector in action"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Fade>
        </Box>

        {/* Content (Z-index: 3) */}
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            zIndex: 3,
            width: '100%',
            textAlign: 'center',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 8, sm: 12, md: 16 },
          }}
        >
          {/* ... (Title, Subtitle, Quote, Buttons remain unchanged) ... */}
          <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
            <Fade in timeout={1500}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.1,
                  fontSize: {
                    xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem',
                  },
                  letterSpacing: { xs: '-0.01em', md: '-0.02em' },
                  textShadow: '4px 4px 12px rgba(0,0,0,0.9)',
                }}
              >
                Industrial Air Pollution Control Systems
              </Typography>
            </Fade>
          </Box>
          <Fade in timeout={1800} style={{ transitionDelay: '0.5s' }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                lineHeight: 1.4,
                mb: { xs: 1, sm: 2 },
                textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
              }}
            >
              Advanced Wet Scrubbers, Dry Scrubbers, Dust Collectors, Downdraft Tables & Fume Extractors
            </Typography>
          </Fade>
          <Fade in timeout={2100} style={{ transitionDelay: '0.7s' }}>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.4rem' },
                lineHeight: 1.6,
                textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                maxWidth: { xs: '90%', sm: '700px' },
                margin: '0 auto',
                px: { xs: 1, sm: 2 },
                mb: { xs: 3, sm: 4, md: 6 },
              }}
            >
              "Our scrubbers and extractors deliver unmatched efficiency in removing dust, fumes, and pollutants—ensuring a cleaner, safer workplace."
            </Typography>
          </Fade>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
            sx={{
              mt: 2,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xs: '90%', sm: 'auto' },
                minWidth: { xs: '180px', sm: '200px' },
                backgroundColor: 'rgba(0, 191, 255, 0.8)',
                '&:hover': {
                  backgroundColor: '#00BFFF',
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(0, 191, 255, 0.4)',
                },
              }}
              aria-label="Explore industrial air pollution control products"
            >
              Explore Products
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: '90%', sm: 'auto' },
                minWidth: { xs: '180px', sm: '200px' },
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(255, 255, 255, 0.2)',
                },
              }}
              aria-label="Get a free quote for industrial air purification solutions"
            >
              Get a Quote
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Standard <style> tag remains */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>
    </ThemeProvider>
  );
}

export default HeroSection;