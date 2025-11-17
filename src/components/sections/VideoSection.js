import React from 'react';
import {
  Box,
  Typography,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

const theme = createTheme({
  typography: { fontFamily: ['"Poppins"', 'sans-serif'].join(',') },
});

// Your REAL video ID (Rick Astley - Never Gonna Give You Up)
const YOUTUBE_ID = "M7lc1UVf-VE";

function VideoSection() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>NAPCEN - Air Pollution Control Experts</title>
        <meta name="description" content="NAPCEN provides industrial air pollution control systems." />
      </Helmet>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#1C1C1E', color: 'white' }}>
        
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            color: '#00BFFF',
            fontSize: { xs: '1.9rem', md: '2.6rem' },
            px: 2,
          }}
        >
          NAPCEN: Industrial Air Pollution Control
        </Typography>

        {/* This Box controls the video size - small on desktop, full on mobile */}
        <Box
          sx={{
            maxWidth: { xs: '95vw', sm: '90vw', md: '800px', lg: '900px' }, // Small & perfect on desktop
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 0 },
          }}
        >
          <Paper
            elevation={20}
            sx={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
              backgroundColor: '#000',
            }}
          >
            {/* 16:9 Responsive Wrapper */}
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe  style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                width="560" height="315" src="https://www.youtube.com/embed/U-Zg3fyy2cQ?si=hCykTESzwz1FSOgl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>


            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default VideoSection;