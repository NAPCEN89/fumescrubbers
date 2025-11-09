import React from 'react';
import { Box, Typography, Container, Fade, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import { Schedule, Security, Engineering, Build, Star } from '@mui/icons-material';

// Import your local images
import aboutImage from '../../assets/images/napcenAbout.png';
import aboutBg from '../../assets/images/bgnap.jpeg'; // Replace with your actual background image path

const AboutUsSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflowX: 'hidden', // Prevent horizontal scrollbar
  color: '#ffffff',
  background: `linear-gradient(135deg, rgba(51, 71, 70, 0.8), rgba(21, 29, 29, 0.9)), url(${aboutBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  background: 'rgba(21, 29, 29, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: '1px solid rgba(0, 191, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 12px 40px rgba(0, 191, 255, 0.4)',
  },
  maxWidth: { xs: '100%', sm: '90%', md: '1200px' }, // Responsive width
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box', // Include padding in width
}));

const HighlightedText = styled('span')({
  fontWeight: 700,
  color: '#00BFFF',
  textShadow: '0 0 10px rgba(0, 191, 255, 0.5)',
  animation: 'pulse 2s infinite alternate',
  '@keyframes pulse': {
    from: { textShadow: '0 0 5px rgba(0, 191, 255, 0.5)' },
    to: { textShadow: '0 0 15px rgba(0, 191, 255, 0.8)' },
  },
});

const GlassButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '24px',
  color: '#fff',
  fontWeight: 600,
  padding: { xs: '8px 10px', sm: '10px 12px' }, // Responsive padding
  fontSize: { xs: '0.75rem', sm: '0.85rem' },
  width: { xs: '100%', sm: '200px', md: '220px' }, // Larger buttons
  textAlign: 'center',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  '& .MuiTypography-root': {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const AboutUs = () => {
  return (
    <AboutUsSection>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 4 }}>
                    About Napcen
                  </Typography>
        
        <Fade in timeout={1500}>
          <ContentWrapper sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={5}
              alignItems="center"
              justifyContent="space-between"
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              {/* Text Content */}
              <Box
                sx={{
                  flex: { xs: '1 1 100%', md: '1 1 400px' },
                  color: '#bdbdbd',
                  overflowWrap: 'break-word', // Prevent text overflow
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00BFFF',
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.5rem' }, // Reduced for mobile
                  }}
                >
                  Innovating for a Cleaner Tomorrow
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 2,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' }, // Reduced for mobile
                    textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.6,
                    mb: 2,
                    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' }, // Reduced for mobile
                  }}
                >
                  NAPCEN specializes in industrial air filtration and pollution control systems. We design, manufacture, and supply high-performance equipment to remove dust, fumes, and other airborne pollutants, ensuring cleaner and safer work environments.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' }, // Reduced for mobile
                  }}
                >
                  As a trusted name in India for advanced air pollution control, we offer a wide range of solutions including industrial <HighlightedText>Wet Scrubbers</HighlightedText>, <HighlightedText>Dust Collectors</HighlightedText>, and <HighlightedText>Fume Extraction Systems</HighlightedText>, all crafted with the highest standards of engineering.
                </Typography>
                <Fade in timeout={2100} style={{ transitionDelay: '0.9s' }}>
                  <GlassButton
                    variant="contained"
                    component={RouterLink}
                    to="/get-started"
                    aria-label="Get a quote for NAPCEN services"
                    sx={{ width: { xs: '100%', sm: '150px' } }}
                  >
                    Get a Quote
                  </GlassButton>
                </Fade>
              </Box>

              {/* Image */}
              <Box
                sx={{
                  flex: { xs: '1 1 100%', md: '0 0 400px' },
                  maxWidth: { xs: '100%', md: '400px' }, // Prevent stretching
                  maxHeight: { xs: '200px', sm: '250px', md: '300px' },
                  width: '100%', // Ensure image scales to container
                  height: 'auto', // Maintain aspect ratio
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'transform 0.5s ease',
                  '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <img loading="lazy" decoding="async" src={aboutImage} alt="NAPCEN illustration of industrial pollution control" />
              </Box>
            </Stack>
          </ContentWrapper>
        </Fade>

        {/* Key Features Buttons */}
        <Box sx={{ mt: { xs: 3, md: 5 }, textAlign: 'center' }}>
          <Fade in timeout={3000} style={{ transitionDelay: '1.4s' }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.5, sm: 2, md: 3 }}
              justifyContent="space-evenly"
              alignItems="center"
              sx={{ flexWrap: 'wrap', maxWidth: '100%', margin: '0 auto' }}
            >
              {[
                { text: 'On-time Delivery', icon: <Schedule sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem' } }} /> },
                { text: '24/7 Protection', icon: <Security sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem' } }} /> },
                { text: 'Certified Engineers', icon: <Engineering sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem' } }} /> },
                { text: 'Advanced Technology', icon: <Build sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem' } }} /> },
                { text: 'Best-in-Class Quality', icon: <Star sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem' } }} /> },
              ].map((feature) => (
                <GlassButton key={feature.text} sx={{ width: { xs: '100%', sm: '200px', md: '220px' }, padding: { xs: '8px 10px', sm: '10px 12px' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', maxWidth: '100%', flexShrink: 0 }}>
                    <Typography sx={{ color: '#2AE5F9', fontSize: { xs: '1.1rem', sm: '1.3rem' } }}>
                      {feature.icon}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: '#fff',
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '0.75rem', sm: '0.85rem' },
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {feature.text}
                    </Typography>
                  </Box>
                </GlassButton>
              ))}
            </Stack>
          </Fade>
        </Box>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;