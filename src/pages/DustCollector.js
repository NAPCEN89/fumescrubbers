// components/sections/DustCollectorHeroSection.js
import React, { useState } from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import SingleStageDustCollector from './SingleStageCollector';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

const productData = [
  {
    label: 'Dust Collectors',
    link: '/dust-collectors',
    subTypes: [
      { label: 'Baghouse Filters', link: '/dust-collectors/baghouse' },
      { label: 'Cartridge Collectors', link: '/dust-collectors/cartridge' },
      { label: 'Cyclone Dust Collectors', link: '/single-collectors' },
      { label: 'Single Stage Collectors', link: '/single-collectors' },
      { label: 'Wet Dust Collectors', link: '/dust-collectors/wet' },
    ],
  },
];

function DustCollectorHeroSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          py: 8,
          px: 2,
          background: `linear-gradient(to left, #334746ff, #151d1dff)`,
          color: 'white',
          textAlign: 'center',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          Dust Collection Solutions
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4, maxWidth: '600px', opacity: 0.8 }}>
          Explore our range of efficient dust collectors designed to improve air quality and safety in industrial environments.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            mb: 4,
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Box
            component="img"
            src="https://etemplates.wdesignkit.com/shieldx/wp-content/uploads/sites/77/2024/05/635f15d4869f8b1f59e2479ae8c5ff3c.svg"
            sx={{
              width: 24,
              height: 24,
            }}
          />
          {productData.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <MuiLink
                component={RouterLink}
                to={item.link}
                underline="none"
                color="inherit"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 600,
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  padding: '8px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  textDecoration: 'none',
                  display: 'inline-block',
                  '&:hover': {
                    color: '#00BFFF',
                    backgroundColor: 'rgba(0, 191, 255, 0.1)',
                    borderColor: '#00BFFF',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {item.label}
              </MuiLink>
              {openIndex === index && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    mt: 1,
                    p: 2,
                    backgroundColor: '#1C1C1E',
                    border: '1px solid rgba(0, 191, 255, 0.15)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    minWidth: '200px',
                    zIndex: 9999,
                  }}
                >
                  {item.subTypes.map((subType, subIndex) => (
                    <MuiLink
                      key={subIndex}
                      component={RouterLink}
                      to={subType.link}
                      underline="none"
                      color="inherit"
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#00BFFF',
                          backgroundColor: 'rgba(0, 191, 255, 0.1)',
                        },
                      }}
                    >
                      {subType.label}
                    </MuiLink>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <SingleStageDustCollector/>
    </ThemeProvider>
  );
}

export default DustCollectorHeroSection;