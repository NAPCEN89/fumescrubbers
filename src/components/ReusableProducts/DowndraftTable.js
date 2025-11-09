import React from 'react';
import { Container, Box, Typography, Link as MuiLink, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import images from src/assets/images
import dustCollectorImg from '../../assets/images/Downdraft-table-india.jpg';
import grindingImg from '../../assets/images/products/Downdraft tbale/Grinding-downdraft-table.jpg';
import polishingImg from '../../assets/images/products/Downdraft tbale/Polishing-downdraft-table.jpg';
import portableImg from '../../assets/images/products/Downdraft tbale/Portable-downdraft -table.jpg';
import weldingImg from '../../assets/images/products/Downdraft tbale/welding-downdraft-table.jpg';
import woodworkingImg from '../../assets/images/products/Downdraft tbale/woodworking-downdraft-table.jpg';

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
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'white',
          textDecoration: 'none',
          '&:hover': {
            color: '#00BFFF',
          },
        },
      },
    },
  },
});

const downdraftTableProducts = [
  { 
    label: 'Down Draft Table Dust Collector', 
    link: '/down-draft', 
    image: dustCollectorImg, 
    description: 'Integrated downdraft table designed for efficient dust collection during various processes.' 
  },
  { 
    label: 'Grinding Downdraft', 
    link: '/grinding', 
    image: grindingImg, 
    description: 'Specialized downdraft table for grinding operations to capture metal and abrasive dust.' 
  },
  { 
    label: 'Polishing Downdraft Table', 
    link: '/polishing', 
    image: polishingImg, 
    description: 'Downdraft system optimized for polishing tasks, removing fine particles and fumes.' 
  },
  { 
    label: 'Portable Downdraft', 
    link: '/portable-down', 
    image: portableImg, 
    description: 'Mobile downdraft table for flexible placement in workshops and production areas.' 
  },
  { 
    label: 'Welding Downdraft', 
    link: '/welding', 
    image: weldingImg, 
    description: 'Downdraft table specifically designed for welding to extract fumes and smoke.' 
  },
  { 
    label: 'Woodworking Downdraft', 
    link: '/wood-work', 
    image: woodworkingImg, 
    description: 'Downdraft solution for woodworking applications to collect wood dust and debris.' 
  },
];

const DowndraftTablesList = ({ activeLink }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 4, backgroundColor: 'transparent' }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: '#00BFFF' }}
        >
          Downdraft Table Products
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 4 },
          }}
        >
          {downdraftTableProducts.map((product, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 220 },
                maxWidth: 220,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: product.link === activeLink ? '1px solid #00BFFF' : '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 24px rgba(0, 191, 255, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.label}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    mb: 1,
                    color: product.link === activeLink ? '#00BFFF' : 'white',
                  }}
                >
                  {product.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 2,
                    textAlign: 'center',
                  }}
                >
                  {product.description}
                </Typography>
                <MuiLink
                  component={RouterLink}
                  to={product.link}
                  underline="none"
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: product.link === activeLink ? '#00BFFF' : 'white',
                    backgroundColor: product.link === activeLink ? 'rgba(0, 191, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50px',
                    padding: '8px 20px',
                    border: product.link === activeLink ? '1px solid #00BFFF' : '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#00BFFF',
                      backgroundColor: 'rgba(0, 191, 255, 0.1)',
                      borderColor: '#00BFFF',
                    },
                  }}
                >
                  Learn More
                </MuiLink>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default DowndraftTablesList;