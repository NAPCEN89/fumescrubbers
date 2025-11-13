import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Grid,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// CHANGE THIS TO YOUR REAL VIDEO LATER
const YOUTUBE_ID = "M7lc1UVf-VE"; // Works perfectly

const theme = createTheme({
  typography: { fontFamily: ['"Poppins"', 'sans-serif'].join(',') },
});

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>NAPCEN - Air Pollution Control Experts</title>
        <meta name="description" content="NAPCEN provides industrial air pollution control systems." />
      </Helmet>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#1C1C1E', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 6,
              color: '#00BFFF',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Why Choose NAPCEN?
          </Typography>

          <Grid container spacing={4} alignItems="center">
            {/* VIDEO SECTION - NOW 100% VISIBLE */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={8}
                sx={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
                }}
              >
                {/* YouTube Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: 'rgba(255,0,0,0.95)',
                    borderRadius: '50%',
                    padding: '10px',
                    zIndex: 20,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.7)',
                  }}
                >
                  <YouTubeIcon sx={{ fontSize: 36, color: 'white' }} />
                </Box>

                {/* THUMBNAIL + PLAY BUTTON (ALWAYS VISIBLE) */}
                {!isPlaying && (
                  <Box
                    onClick={handlePlay}
                    sx={{
                      cursor: 'pointer',
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '56.25%',
                      backgroundImage: `ur[](https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0,191,255,0.9)',
                        borderRadius: '50%',
                        width: 80,
                        height: 80,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(0,191,255,0.6)',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { boxShadow: '0 0 0 0 rgba(0,191,255,0.7)' },
                          '70%': { boxShadow: '0 0 0 20px rgba(0,191,255,0)' },
                          '100%': { boxShadow: '0 0 0 0 rgba(0,191,255,0)' },
                        },
                      }}
                    >
                      <PlayArrowIcon sx={{ fontSize: 50, color: 'white', ml: 0.5 }} />
                    </Box>
                  </Box>
                )}

                {/* REAL VIDEO - ONLY AFTER CLICK */}
                {isPlaying && (
                  <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${YOUTUBE_ID}&controls=1&modestbranding=1&rel=0&playsinline=1`}
                      title="NAPCEN Video"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                      }}
                    />
                  </Box>
                )}

                {/* MUTE BUTTON */}
                {isPlaying && (
                  <IconButton
                    onClick={toggleMute}
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: '#fff',
                      backdropFilter: 'blur(10px)',
                      zIndex: 20,
                      '&:hover': { backgroundColor: '#00BFFF' },
                    }}
                  >
                    {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                  </IconButton>
                )}
              </Paper>
            </Grid>

            {/* TEXT POINTS - VISIBLE */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                {[
                  "Custom Designed Wet Scrubbers for Acid Fumes",
                  "High-Efficiency Dust Collectors & Bag Filters",
                  "Fume Extraction Systems for Welding & Painting",
                  "Centrifugal Blowers & Ventilation Solutions",
                  "Complete Turnkey Projects with Installation",
                ].map((point, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <CheckCircleOutlineIcon
                      sx={{ color: '#00BFFF', fontSize: 28, mr: 2, mt: 0.5, flexShrink: 0 }}
                    />
                    <Typography variant="body1" sx={{ color: '#E0E0E0', fontSize: '1.1rem', lineHeight: 1.6 }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default VideoSection;