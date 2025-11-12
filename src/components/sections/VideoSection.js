import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

// ONLY KEEP POSTER IF IT'S IN YOUR REPO (optional)
import videoPoster from '../../assets/images/bgnap.jpeg'; // Remove this line if poster is also in Drive

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
});

function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const attemptPlay = useCallback(() => {
    const videoElement = videoRef.current;
    if (videoElement && videoElement.readyState >= 3) {
      videoElement.play().then(() => {
        setHasPlayedOnce(true);
      }).catch((error) => {
        console.error('Play interrupted:', error);
      });
    }
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;
    let observer;

    const handleCanPlay = () => attemptPlay();

    if (sectionElement && videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);

      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasPlayedOnce && videoElement.readyState < 3) {
              videoElement.load();
            }
            attemptPlay();
          } else {
            if (!videoElement.paused) videoElement.pause();
          }
        });
      };

      observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement && observer) observer.unobserve(sectionElement);
      if (videoElement) videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, [attemptPlay, hasPlayedOnce]);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>NAPCEN</title>
        <meta name="description" content="Watch Napcen's company story video..." />
        <meta name="keywords" content="napcen, air pollution control, company story" />
      </Helmet>

      <Box ref={sectionRef} sx={{ py: { xs: 2, sm: 4, md: 6 }, backgroundColor: '#1C1C1E', color: 'white', textAlign: 'center', position: 'relative' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 4, fontSize: { xs: '1.25rem', md: '2.25rem' }, color: '#00BFFF' }}>
            Our Company Story
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', color: '#BFC5DC' }}>
            Discover how NAPCEN is leading the way in air pollution control...
          </Typography>
        </Container>

        <Box sx={{ position: 'relative', width: '100%', maxWidth: '100vw', aspectRatio: '16/9', overflow: 'hidden', mx: 'auto', px: { xs: 0, sm: 2 } }}>
          <video
            ref={videoRef}
            loop
            playsInline
            controls
            preload="none"
            poster={videoPoster} // Remove this prop if poster is also in Drive folder
            muted={isMuted}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', backgroundColor: '#000' }}
            aria-label="Napcen company story video"
          >
            {/* DIRECT LINK TO VIDEO FROM BUILD FOLDER */}
            <source src="/videos/Napcen Web Vedio (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <IconButton
            onClick={toggleMute}
            sx={{
              position: 'absolute',
              bottom: { xs: 8, sm: 16 },
              right: { xs: 8, sm: 16 },
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#fff',
              '&:hover': { backgroundColor: 'rgba(0,191,255,0.7)' },
              zIndex: 2,
            }}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default VideoSection;