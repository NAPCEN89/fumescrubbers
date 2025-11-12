import React, { useState } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const theme = createTheme({
  typography: { fontFamily: ['"Poppins"', 'sans-serif'].join(',') },
});

function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Send mute/unmute to YouTube iframe
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: isMuted ? 'unMute' : 'mute',
        }),
        '*'
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>NAPCEN</title>
        <meta name="description" content="Watch Napcen's company story video..." />
      </Helmet>

      <Box sx={{ py: { xs: 2, sm: 4, md: 6 }, backgroundColor: '#1C1C1E', color: 'white', textAlign: 'center', position: 'relative' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, color: '#00BFFF' }}>
            Our Company Story
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', color: '#BFC5DC' }}>
            Discover how NAPCEN is leading the way in air pollution control...
          </Typography>
        </Container>

        {/* YOUTUBE VIDEO - FASTEST & BEST QUALITY */}
        <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
          <iframe
            src=""
            title="NAPCEN Company Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          ></iframe>

          <IconButton onClick={toggleMute} sx={{ position: 'absolute', bottom: 16, right: 16, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', zIndex: 2 }}>
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default VideoSection;