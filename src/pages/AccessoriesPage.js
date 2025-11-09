
import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h3: {
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '0.2px',
    },
    h6: {
      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
      fontWeight: 600,
      color: '#00BFFF',
    },
    body2: {
      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
      color: '#B0BEC5',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

const HeroBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 3),
  background: 'linear-gradient(to bottom, rgba(26, 42, 42, 0.9), rgba(13, 21, 21, 0.9))',
  borderRadius: '12px',
  border: '1px solid rgba(0, 191, 255, 0.1)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at top center, rgba(0, 191, 255, 0.08), transparent 70%)',
    opacity: 0.6,
  },
}));

const AccessoryCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(0, 191, 255, 0.1)',
  borderRadius: '10px',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 8px 20px rgba(0, 191, 255, 0.15)',
    borderColor: 'rgba(0, 191, 255, 0.3)',
  },
}));

const AccessoriesPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const accessories = [
    { 
      id: 1, 
      name: 'Mist Eliminator', 
      image: 'https://picsum.photos/300/300?random=1',
      description: 'Removes fine mist particles for cleaner emissions.'
    },
    { 
      id: 2, 
      name: 'Recirculation Pump', 
      image: 'https://picsum.photos/300/300?random=2',
      description: 'Ensures efficient liquid flow in scrubber systems.'
    },
    { 
      id: 3, 
      name: 'Packing Media', 
      image: 'https://picsum.photos/300/300?random=3',
      description: 'Enhances gas-liquid contact for better pollutant removal.'
    },
    { 
      id: 4, 
      name: 'Liquid Flow Meter', 
      image: 'https://picsum.photos/300/300?random=4',
      description: 'Accurately measures liquid flow for system optimization.'
    },
    { 
      id: 5, 
      name: 'Nozzle System', 
      image: 'https://picsum.photos/300/300?random=5',
      description: 'Delivers precise spray for effective scrubbing.'
    },
    { 
      id: 6, 
      name: 'Bag Filter', 
      image: 'https://picsum.photos/300/300?random=6',
      description: 'Captures dust particles with high efficiency.'
    },
    { 
      id: 7, 
      name: 'Cartridge Filter', 
      image: 'https://picsum.photos/300/300?random=7',
      description: 'Compact filtration for fine dust collection.'
    },
    { 
      id: 8, 
      name: 'Cyclone Separator', 
      image: 'https://picsum.photos/300/300?random=8',
      description: 'Separates heavy particles using centrifugal force.'
    },
    { 
      id: 9, 
      name: 'Electrostatic Precipitator Plate', 
      image: 'https://picsum.photos/300/300?random=9',
      description: 'Attracts charged particles for superior dust removal.'
    },
    { 
      id: 10, 
      name: 'Wet Collector Nozzle', 
      image: 'https://picsum.photos/300/300?random=10',
      description: 'Optimized for wet scrubbing applications.'
    },
    { 
      id: 11, 
      name: 'Downdraft Table Filter', 
      image: 'https://picsum.photos/300/300?random=11',
      description: 'Filters dust during downdraft operations.'
    },
    { 
      id: 12, 
      name: 'Welding Arm Hood', 
      image: 'https://picsum.photos/300/300?random=12',
      description: 'Captures welding fumes at the source.'
    },
    { 
      id: 13, 
      name: 'Grinding Extraction Nozzle', 
      image: 'https://picsum.photos/300/300?random=13',
      description: 'Extracts grinding dust efficiently.'
    },
    { 
      id: 14, 
      name: 'Plasma Cutting Vent', 
      image: 'https://picsum.photos/300/300?random=14',
      description: 'Vents harmful fumes from plasma cutting.'
    },
    { 
      id: 15, 
      name: 'Fume Arm Extension', 
      image: 'https://picsum.photos/300/300?random=15',
      description: 'Extends reach for flexible fume extraction.'
    },
    { 
      id: 16, 
      name: 'Sanding Filter Media', 
      image: 'https://picsum.photos/300/300?random=16',
      description: 'High-efficiency media for sanding dust.'
    },
    { 
      id: 17, 
      name: 'Activated Carbon Filter', 
      image: 'https://picsum.photos/300/300?random=17',
      description: 'Adsorbs volatile organic compounds effectively.'
    },
    { 
      id: 18, 
      name: 'Chemical Scrubber Packing', 
      image: 'https://picsum.photos/300/300?random=18',
      description: 'Optimizes chemical scrubbing processes.'
    },
    { 
      id: 19, 
      name: 'Catalytic Converter Unit', 
      image: 'https://picsum.photos/300/300?random=19',
      description: 'Reduces harmful emissions through catalysis.'
    },
    { 
      id: 20, 
      name: 'Adsorption Bed Module', 
      image: 'https://picsum.photos/300/300?random=20',
      description: 'Captures pollutants with high-capacity adsorption.'
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          background: 'linear-gradient(to left, #1a2a2aff, #0d1515ff)',
          minHeight: '100vh',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <HeroBox>
            <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ position: 'relative', zIndex: 1 }}>
              Our Accessory Collection
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: '700px', mx: 'auto', color: '#B0BEC5', position: 'relative', zIndex: 1 }}>
              Discover our curated range of 20 accessories designed to enhance the performance and safety of Wet Scrubbers, Dust Collectors, Downdraft Tables, Fume Extractors, and Dry Scrubbers.
            </Typography>
          </HeroBox>
          <Grid container spacing={2}>
            {accessories.map((accessory) => (
              <Grid item xs={12} sm={6} md={3} key={accessory.id}>
                <AccessoryCard>
                  <CardMedia
                    component="img"
                    image={accessory.image}
                    alt={accessory.name}
                    sx={{
                      height: { xs: 200, sm: 240, md: 280 }, // Larger images for full visibility
                      width: '100%',
                      objectFit: 'cover', // Ensures images are fully visible without distortion
                      borderBottom: '1px solid rgba(0, 191, 255, 0.1)',
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image for ${accessory.name}: ${accessory.image}`);
                      e.target.src = 'https://picsum.photos/300/300?text=Accessory+Image';
                    }}
                  />
                  <CardContent sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: '#00BFFF' }}>
                      {accessory.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
                      {accessory.description}
                    </Typography>
                  </CardContent>
                </AccessoryCard>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/contact"
              sx={{
                borderColor: '#00BFFF',
                color: '#00BFFF',
                '&:hover': {
                  background: 'rgba(0, 191, 255, 0.1)',
                  borderColor: '#00BFFF',
                  boxShadow: '0 4px 12px rgba(0, 191, 255, 0.2)',
                },
              }}
            >
              Contact Us for More Details
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AccessoriesPage;