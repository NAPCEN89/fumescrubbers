import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

// Import images from src/assets/images/gallery/
import chemicalImg from '../../assets/images/gallery/Chemical Manufacturing.jpg';
import electronicImg from '../../assets/images/gallery/Electronic and Semiconductor Manufacturing.jpg';
import foodProcessingImg from '../../assets/images/gallery/Food Processing.jpg';
import miningImg from '../../assets/images/gallery/Mining and Ore Processing.jpg';
import metalProcessingImg from '../../assets/images/gallery/Metal Processing.jpg';
import pharmaImg from '../../assets/images/gallery/Pharmaceutical Manufacturing.jpg';
import paintImg from '../../assets/images/gallery/Paint and Coatings Manufacturing.jpg';
import oilGasImg from '../../assets/images/gallery/Oil and Gas Industry.jpg';
import textileImg from '../../assets/images/gallery/Textile Industry.jpg';
import woodworkingImg from '../../assets/images/gallery/Woodworking and Furniture Manufacturing.jpg';

// Images object referencing the imported images
const images = {
  chemicalImg,
  electronicImg,
  foodProcessingImg,
  miningImg,
  metalProcessingImg,
  pharmaImg,
  paintImg,
  oilGasImg,
  textileImg,
  woodworkingImg,
};

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    // Ensuring all Typography defaults to white, matching the WetScrubber's theme setup
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

const industrialApplications = [
  {
    name: 'Chemical Industries',
    image: images.chemicalImg,
    description:
      'Chemical manufacturing processes release pollutants like VOCs, hazardous air pollutants, and greenhouse gases. Our solutions mitigate these impacts.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Electronics Manufacturing',
    image: images.electronicImg,
    description:
      'Pollutants such as VOCs, heavy metals, and greenhouse gases are emitted. We provide air pollution control systems to manage these emissions.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Food Processing',
    image: images.foodProcessingImg,
    description:
      'Food processing activities can release organic matter, ammonia, and VOCs. Our systems minimize these emissions and reduce environmental impact.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Mining and Ore Processing',
    image: images.miningImg,
    description:
      'Mining releases pollutants like sulfur dioxide, mercury, and particulate matter. We offer dust control measures and scrubbers to minimize environmental impact.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Metal Processing',
    image: images.metalProcessingImg,
    description:
      'Metal processing emissions, including particulate matter and VOCs, impact the environment. Our solutions are designed to control these pollutants.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Pharma Industries',
    image: images.pharmaImg,
    description:
      'Pharmaceutical processes emit VOCs and hazardous air pollutants. We utilize scrubbers, catalytic converters, and thermal oxidizers for effective control.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Paint Manufacturing',
    image: images.paintImg,
    description:
      'Paint manufacturing generates VOCs, particulate matter, and fumes. Our equipment ensures compliance and maintains a safe working environment.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Oil and Gas Industries',
    image: images.oilGasImg,
    description:
      'This industry releases pollutants like methane and sulfur dioxide. Our technologies, like vapor recovery units, manage these emissions.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Textile Industries',
    image: images.textileImg,
    description:
      'Textile production can release dyes and solvents. Our solutions include air pollution control devices to promote sustainable production.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
  {
    name: 'Wood Working Industries',
    image: images.woodworkingImg,
    description:
      'Woodworking generates significant dust and fumes. Our equipment plays a vital role in ensuring workplace safety and improved air quality.',
    link: '/Applications-wet-scrubber-manufacturers.html',
  },
];

function IndustrialApplicationsSection({ activeLink }) {
  // Define card dimensions consistent with a marquee layout
  const CARD_WIDTH = 250;
  const CARD_HEIGHT = 400; // Increased height to accommodate content
  const IMAGE_HEIGHT = 140;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          py: { 
            xs: 4, 
            sm: 5, 
            md: 6, 
            lg: 8 
          },
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/Home-air-pollution-control.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden', 
          minHeight: { 
            xs: 'auto', 
            sm: '550px',
            md: '600px',
            lg: '650px'
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
          },
        }}
      >
        <Container
          sx={{
            position: 'relative',
            zIndex: 1,
            // ... container styling ...
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { 
                xs: 3, 
                sm: 4, 
                md: 5 
              },
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              fontSize: {
                xs: '1.75rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '2.75rem',
                xl: '3rem',
              },
            }}
          >
            Industrial Applications
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: '#ddd',
              mb: { 
                xs: 4, 
                sm: 5, 
                md: 6 
              },
              maxWidth: { 
                xs: '95%', 
                sm: '90%', 
                md: '85%', 
                lg: '800px' 
              },
              mx: 'auto', 
              fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem',
                lg: '1.15rem',
              },
              lineHeight: { 
                xs: 1.5, 
                sm: 1.6 
              },
            }}
          >
            We provide specialized air pollution control solutions to a wide range of industries,
            addressing their unique environmental challenges.
          </Typography>
        </Container>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            px: { xs: 0, sm: 0 }, 
            pb: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: { 
                xs: '16px', 
                sm: '24px', 
                md: '32px'  
              },
              // ⭐️ MARQUEE ANIMATION ⭐️
              animation: 'marquee 40s linear infinite', 
              '@keyframes marquee': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
              '&:hover': {
                animationPlayState: 'paused',
              },
              width: 'fit-content',
              minWidth: '200%',
              pl: { xs: 2, sm: 4, md: 6 }, 
            }}
          >
            {[...industrialApplications, ...industrialApplications].map((application, index) => (
              <Box
                key={`${application.name}-${index}`}
                sx={{
                  flexShrink: 0, 
                  width: CARD_WIDTH, 
                  maxWidth: CARD_WIDTH,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Card
                  component={Paper}
                  elevation={4}
                  sx={{
                    width: '100%',
                    minHeight: CARD_HEIGHT,
                    borderRadius: '12px',
                    // ⭐️ WETSCRUBBER STYLE: Transparent/Blur Background ⭐️
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)', 
                    
                    // ⭐️ WETSCRUBBER STYLE: Border based on active link ⭐️
                    border: application.link === activeLink ? '1px solid #00BFFF' : '1px solid rgba(255, 255, 255, 0.2)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    
                    // ⭐️ WETSCRUBBER STYLE: Hover Effect ⭐️
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 24px rgba(0, 191, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height={IMAGE_HEIGHT}
                    image={application.image}
                    alt={application.name}
                    onError={(e) => {
                      console.error(`Failed to load image: ${application.image}`);
                      e.target.src = `https://via.placeholder.com/${CARD_WIDTH}x${IMAGE_HEIGHT}/2c3e50/ffffff?text=${encodeURIComponent(application.name)}`;
                    }}
                    sx={{ 
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: { 
                        xs: 1.5, 
                        sm: 2 
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center', // Center content horizontally
                      justifyContent: 'space-between',
                    }}
                  >
                    <MuiLink 
                      component={RouterLink}
                      to={application.link}
                      sx={{ 
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'none',
                        }
                      }}
                    >
                      <Typography
                        variant="h6" // Changed to h6 for size consistency with WetScrubber
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          // ⭐️ WETSCRUBBER STYLE: Title color ⭐️
                          color: application.link === activeLink ? '#00BFFF' : 'white',
                          transition: 'color 0.3s',
                          '&:hover': { 
                            color: '#00BFFF'
                          },
                          fontSize: '1rem', // Specific size for H6
                          textAlign: 'center',
                          lineHeight: 1.3,
                        }}
                      >
                        {application.name}
                      </Typography>
                    </MuiLink>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)', // Lighter text color
                        lineHeight: 1.4,
                        fontSize: '0.85rem', // Specific size for description
                        flexGrow: 1,
                        textAlign: 'center',
                        display: '-webkit-box',
                        WebkitLineClamp: 3, // Max 3 lines for description
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        mb: 2,
                      }}
                    >
                      {application.description}
                    </Typography>
                    <MuiLink
                        component={RouterLink}
                        to={application.link}
                        underline="none"
                        sx={{
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            // ⭐️ WETSCRUBBER STYLE: Button appearance ⭐️
                            color: application.link === activeLink ? '#00BFFF' : 'white',
                            backgroundColor: application.link === activeLink ? 'rgba(0, 191, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '50px',
                            padding: '8px 20px',
                            border: application.link === activeLink ? '1px solid #00BFFF' : '1px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease-in-out',
                            textDecoration: 'none',
                            textAlign: 'center',
                            '&:hover': {
                                color: '#00BFFF',
                                backgroundColor: 'rgba(0, 191, 255, 0.15)',
                                borderColor: '#00BFFF',
                            },
                        }}
                    >
                      Learn More 
                    </MuiLink>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Additional spacing */}
        <Box sx={{ 
          mt: { 
            xs: 3, 
            sm: 4, 
            md: 5 
          } 
        }} />
      </Box>
    </ThemeProvider>
  );
}

export default IndustrialApplicationsSection;