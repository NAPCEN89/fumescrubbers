import React from 'react';
import {
  Box,
  Typography,
  Container,
  Fade,
  Button,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  Schedule,
  Security,
  Engineering,
  Build,
  Star,
} from '@mui/icons-material';

import aboutImage from '../../assets/images/napcenAbout.png';
import aboutBg from '../../assets/images/bgnap.jpeg';

const AboutUsSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, rgba(51, 71, 70, 0.85), rgba(21, 29, 29, 0.92)), url(${aboutBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: '#ffffff',
  overflow: 'hidden',
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: 'rgba(21, 29, 29, 0.65)',
  backdropFilter: 'blur(12px)',
  borderRadius: '24px',
  border: '1px solid rgba(0, 191, 255, 0.25)',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
  padding: theme.spacing(5),
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 50px rgba(0, 191, 255, 0.3)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),  // FIXED: was theme.spacing3) → syntax error
  },
}));

const HighlightedText = styled('span')({
  color: '#00BFFF',
  fontWeight: 800,
  textShadow: '0 0 12px rgba(0, 191, 255, 0.6)',
});

const GlassButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '30px',
  color: '#fff',
  fontWeight: 700,
  fontSize: '0.85rem',
  padding: theme.spacing(1.2, 3),
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 191, 255, 0.2)',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0, 191, 255, 0.4)',
  },
}));

const AboutUs = () => {
  return (
    <AboutUsSection id="about">
      {/* Your SEO + Hidden Keywords */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        best wet scrubber manufacturer india, best dust collector pondicherry, best fume extractor tamil nadu...
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Napcean Engineering",
          url: "https://napcean.in",
          description: "Best wet scrubber, dust collector, fume extractor manufacturer in Pondicherry, India.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Puducherry",
            addressRegion: "PY",
            addressCountry: "IN",
          },
        })}
      </script>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Title */}
        <Fade in timeout={800}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 8,
              fontWeight: 900,
              fontSize: { xs: '2.4rem', md: '3.6rem' },
              color: '#00BFFF',
              textShadow: '0 0 30px rgba(0,191,255,0.7)',
            }}
          >
            About Napcen
          </Typography>
        </Fade>

        {/* MAIN CARD - PERFECT LAYOUT */}
        <Fade in timeout={1200}>
          <GlassCard>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              justifyContent="flex-start"
            >
              {/* LEFT: Content */}
              <Box sx={{ flex: 1, pr: { md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" sx={{ color: '#00BFFF', fontWeight: 700, mb: 2, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  Innovating for a Cleaner Tomorrow
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '2.6rem' } }}>
                  About Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, fontSize: '1.05rem', opacity: 0.95 }}>
                  NAPCEN is a leading manufacturer of industrial air pollution control systems in India.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.05rem', opacity: 0.9 }}>
                  We specialize in high-performance <HighlightedText>Wet Scrubbers</HighlightedText>,{' '}
                  <HighlightedText>Dust Collectors</HighlightedText>, and{' '}
                  <HighlightedText>Fume Extractors</HighlightedText> — all made with premium PP-FRP materials.
                </Typography>
                <GlassButton component={RouterLink} to="/contact">
                  Get Free Quote
                </GlassButton>
              </Box>

              {/* RIGHT: Image */}
              <Box
                component="img"
                src={aboutImage}
                alt="Napcen Factory - Air Pollution Control Equipment"
                loading="lazy"
                sx={{
                  width: { xs: '100%', sm: '320px', md: '420px' },
                  maxWidth: '420px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                  alignSelf: 'center',
                }}
              />
            </Stack>
          </GlassCard>
        </Fade>

        {/* Small Feature Buttons */}
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Fade in timeout={1600}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
            >
              {[
                { icon: <Schedule />, text: 'On-Time Delivery' },
                { icon: <Security />, text: 'Safe Workplaces' },
                { icon: <Engineering />, text: 'Expert Engineers' },
                { icon: <Build />, text: 'Advanced Tech' },
                { icon: <Star />, text: 'ISO Certified' },
              ].map((item) => (
                <GlassButton key={item.text} sx={{ minWidth: 190 }}>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    {item.icon}
                    <Typography fontSize="0.9rem" fontWeight={600}>
                      {item.text}
                    </Typography>
                  </Box>
                </GlassButton>
              ))}
            </Stack>
          </Fade>
        </Box>

        {/* Footer */}
        <Fade in timeout={2000}>
          <Typography align="center" sx={{ mt: 6, opacity: 0.8, fontStyle: 'italic' }}>
            Serving India • UAE • Saudi Arabia • Malaysia
          </Typography>
        </Fade>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;