import React from 'react';
import { Container, Box, Typography, Link as MuiLink, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import images from src/assets/images
import packedBedImg from '../../assets/images/products/Wet scrubber/Packed-Bed-Scrubbers.jpg';
import venturiImg from '../../assets/images/products/Wet scrubber/venturi-scrubbers.jpg';
import ammoniaScrubberImg from '../../assets/images/products/Wet scrubber/Ammonia-scrubber-manufacturers.jpg';
import hclScrubberImg from '../../assets/images/products/Wet scrubber/HCL-Scrubber-manufacturer.jpg';
import nitricAcidImg from '../../assets/images/products/Wet scrubber/Nitric-Acid-Scrubber-manufacturer.jpg';
import chromicAcidImg from '../../assets/images/products/Wet scrubber/Chromic-Acid-Scrubber-manufacturer.jpg';
import acidFumeImg from '../../assets/images/products/Wet scrubber/Acid-fume-scrubber-chennai.jpg';
import alkaliFumeImg from '../../assets/images/products/Wet scrubber/Alkali-fume-scrubber-manufacturers.jpg';
import hospitalWasteImg from '../../assets/images/products/Wet scrubber/Hospital-waste-Incinerator-wet scrubber-manufacturers.jpg';
import chlorineScrubberImg from '../../assets/images/products/Wet scrubber/Chlorine-Scrubber-india.jpg';
import ventGasImg from '../../assets/images/products/Wet scrubber/vent-gas-scrubber-manufacturers.jpg';
import boilerFlueImg from '../../assets/images/products/Wet scrubber/Boiler -flue-gas-scrubber.jpg';
import sulfuricAcidImg from '../../assets/images/products/Wet scrubber/sulfuric-acid-scrubber-manufacturers.jpg';
import co2ScrubberImg from '../../assets/images/products/Wet scrubber/CO2-Scrubber-manufacturer.jpg';
import foundryExhaustImg from '../../assets/images/products/Wet scrubber/Foundry-Exhaust-Scrubber-manufacturer.jpg';
import glueVapourImg from '../../assets/images/products/Wet scrubber/Glue-Vapor-Scrubber-manufacturer.jpg';
import causticImg from '../../assets/images/products/Wet scrubber/caustic.jpg';
import plasticFumeImg from '../../assets/images/products/Wet scrubber/Plastic-Fume-Scrubber-manufacturer.jpg';

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

const wetScrubberProducts = [
  { 
    label: 'Packed Bed Wet Scrubber', 
    link: '/packed-bed', 
    image: packedBedImg, 
    description: 'Removes pollutants using packed media for high-efficiency scrubbing.' 
  },
  { 
    label: 'Venturi Scrubber', 
    link: '/venturi', 
    image: venturiImg, 
    description: 'High-velocity gas cleaning for fine particulate removal.' 
  },
  { 
    label: 'Ammonia Scrubber', 
    link: '/ammonia-scrubber', 
    image: ammoniaScrubberImg, 
    description: 'Neutralizes ammonia gases in industrial exhaust.' 
  },
  { 
    label: 'HCL Scrubber', 
    link: '/hcl-scrubber', 
    image: hclScrubberImg, 
    description: 'Removes hydrochloric acid fumes effectively.' 
  },
  { 
    label: 'Nitric Acid Scrubber', 
    link: '/nitric', 
    image: nitricAcidImg, 
    description: 'Controls nitric acid emissions in chemical processes.' 
  },
  { 
    label: 'Chromic Acid Scrubber', 
    link: '/chromic', 
    image: chromicAcidImg, 
    description: 'Handles chromic acid fumes for safe exhaust.' 
  },
  { 
    label: 'Acid Fume Scrubber', 
    link: '/acid-fume', 
    image: acidFumeImg, 
    description: 'Captures and neutralizes acid fumes from processes.' 
  },
  { 
    label: 'Alkali Fume Scrubber', 
    link: '/alkali-fume', 
    image: alkaliFumeImg, 
    description: 'Manages alkali vapors for cleaner emissions.' 
  },
  { 
    label: 'Hospital Waste Incinerator Wet Scrubber', 
    link: '/hospital', 
    image: hospitalWasteImg, 
    description: 'Scrubs emissions from hospital waste incineration.' 
  },
  { 
    label: 'Chlorine Scrubber', 
    link: '/chlorine', 
    image: chlorineScrubberImg, 
    description: 'Removes chlorine gas from industrial exhaust.' 
  },
  { 
    label: 'Vent Gas Scrubber', 
    link: '/vent-gas-scrubber', 
    image: ventGasImg, 
    description: 'Treats vent gases for environmental compliance.' 
  },
  { 
    label: 'Boiler Flue Gas Scrubber', 
    link: '/boiler', 
    image: boilerFlueImg, 
    description: 'Reduces pollutants from boiler flue gases.' 
  },
  { 
    label: 'Sulfuric Acid Scrubber', 
    link: '/sulfuric-acid', 
    image: sulfuricAcidImg, 
    description: 'Controls sulfuric acid emissions efficiently.' 
  },
  { 
    label: 'CO2 Scrubber', 
    link: '/Co2', 
    image: co2ScrubberImg, 
    description: 'Captures CO2 from industrial processes.' 
  },
  { 
    label: 'Foundry Exhaust Scrubber', 
    link: '/Foundry', 
    image: foundryExhaustImg, 
    description: 'Manages foundry exhaust for cleaner air.' 
  },
  { 
    label: 'Glue Vapour Scrubber', 
    link: '/glue', 
    image: glueVapourImg, 
    description: 'Removes glue vapors from manufacturing processes.' 
  },
  { 
    label: 'Caustic', 
    link: '/caustic', 
    image: causticImg, 
    description: 'Handles caustic fumes for safe emissions.' 
  },
  { 
    label: 'Plastic Fume Scrubber', 
    link: '/plastic', 
    image: plasticFumeImg, 
    description: 'Controls plastic-related fumes in production.' 
  },
];

const WetScrubbersList = ({ activeLink }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 4, backgroundColor: 'transparent', overflow: 'hidden' }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: '#00BFFF' }}
        >
          Wet Scrubber Products
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: { xs: 2, sm: 4 },
            animation: 'marquee 30s linear infinite',
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            '&:hover': {
              animationPlayState: 'paused',
            },
            width: 'fit-content',
            minWidth: '200%', // Ensures enough content for seamless looping
          }}
        >
          {[...wetScrubberProducts, ...wetScrubberProducts].map((product, index) => (
            <Card
              key={`${product.label}-${index}`}
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
                flexShrink: 0, // Prevents cards from shrinking
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
                  View product
                </MuiLink>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default WetScrubbersList;