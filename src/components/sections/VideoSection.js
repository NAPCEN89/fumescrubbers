
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

// Import the video and poster files
import napcenFullvideo from '../../assets/video/napcenStory.mp4';
import videoPoster from '../../assets/images/bgnap.jpeg';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
});

function VideoSection() {
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false); // Track if we've successfully played
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  /**
   * Attempts to play the video element, handling common browser autoplay errors.
   */
  const attemptPlay = useCallback(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Check if the video is ready enough to play (readyState >= 3 means AT LEAST enough data to play a few frames)
      if (videoElement.readyState >= 3) {
        videoElement.play().then(() => {
          setHasPlayedOnce(true); // Mark as played once for future logic
        }).catch((error) => {
          // This catches errors like 'NotAllowedError: The play() request was interrupted by a new load request'
          // or policy-related autoplay blocks (though muted should prevent most).
          // We log the error but don't halt the app.
          console.error('Error attempting to play video:', error);
        });
      }
    }
  }, []); // Dependencies are empty since videoRef is constant

  // Lazy loading, event handling, and play/pause on scroll
  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;
    let observer;
    
    // ✅ FIX for 'handleCanPlay' is not defined:
    // Define the handler function inside useEffect so it's accessible by both
    // the setup logic and the cleanup return function.
    const handleCanPlay = () => {
        // Trigger play attempt once the browser confirms it can play (data loaded)
        attemptPlay();
    };

    if (sectionElement && videoElement) {
        
        // 1. SETUP: Add the event listener for smooth playback on load
        videoElement.addEventListener('canplay', handleCanPlay);

        // 2. INTERSECTION LOGIC: Decide when to load and play
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Trigger loading if it hasn't played or fully loaded data yet
                    if (!hasPlayedOnce && videoElement.readyState < 3) {
                        videoElement.load(); // Request to load the video data (since preload="none")
                    }
                    
                    // Attempt to play immediately (will succeed if ready, or wait for 'canplay')
                    attemptPlay();
                } else {
                    // Pause video when out of view
                    if (!videoElement.paused) {
                        videoElement.pause();
                    }
                }
            });
        };

        observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.1, // Trigger when 10% of the section is visible
        });
        
        // Start observing the section
        observer.observe(sectionElement);
    }

    // 3. CLEANUP: Remove observer and event listener on component unmount
    return () => {
      if (sectionElement && observer) {
        observer.unobserve(sectionElement);
      }
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay); 
      }
    };
  }, [attemptPlay, hasPlayedOnce]); // hasPlayedOnce is necessary here

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>NAPCEN </title>
        <meta
          name="description"
          content="Watch Napcen's company story video to learn about our innovative air pollution control solutions for a sustainable future."
        />
        <meta
          name="keywords"
          content="napcen, air pollution control, company story, industrial solutions, video"
        />
      </Helmet>
      <Box
        ref={sectionRef}
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
          backgroundColor: '#1C1C1E',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem' },
              color: '#00BFFF',
            }}
          >
            Our Company Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 2, sm: 3, md: 4 },
              maxWidth: { xs: '90%', sm: '800px' },
              mx: 'auto',
              color: '#BFC5DC',
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
              lineHeight: 1.6,
            }}
          >
            Discover how NAPCEN is leading the way in air pollution control with innovative solutions tailored for a sustainable future.
          </Typography>
        </Container>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '100vw',
            aspectRatio: '16/9',
            overflow: 'hidden',
            mx: 'auto',
            px: { xs: 0, sm: 2 },
          }}
        >
          <video
            ref={videoRef}
            loop
            playsInline
            controls
            preload="none" // Lazy loading via JS control
            poster={videoPoster} // Always show poster while video loads
            muted={isMuted}
            aria-label="Napcen company story video showcasing air pollution control solutions"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              backgroundColor: '#000',
              display: 'block',
            }}
          >
            {/* The source tag is now always present */}
            <source src={napcenFullvideo} type="video/mp4" /> 
            Your browser does not support the video tag. Watch our company story at https://yourwebsite.com.
          </video>
          <IconButton
            onClick={toggleMute}
            sx={{
              position: 'absolute',
              bottom: { xs: 8, sm: 16 },
              right: { xs: 8, sm: 16 },
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(0, 191, 255, 0.7)',
              },
              zIndex: 2,
            }}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default VideoSection;
