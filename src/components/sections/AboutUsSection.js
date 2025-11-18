import React from 'react';
import {
  Box,
  Typography,
  Container,
  Fade,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
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

// Your existing images
import aboutImage from '../../assets/images/napcenAbout.png';
import aboutBg from '../../assets/images/bgnap.jpeg';

const AboutUsSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  overflow: 'hidden',
  background: `linear-gradient(135deg, rgba(51, 71, 70, 0.92), rgba(21, 29, 29, 0.96)), url(${aboutBg}) center/cover no-repeat`,
  backgroundAttachment: theme.breakpoints.up('md') ? 'fixed' : 'scroll',
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: 'rgba(21, 29, 29, 0.70)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '24px',
  border: '1px solid rgba(0, 191, 255, 0.25)',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
  padding: theme.spacing(4),
  transition: 'all 0.4s ease',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 50px rgba(0, 191, 255, 0.3)',
    },
  },
}));

const HighlightedText = styled('span')({
  color: '#00BFFF',
  fontWeight: 800,
});

const GlassButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.12)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '30px',
  color: '#fff',
  fontWeight: 700,
  fontSize: '0.9rem',
  padding: theme.spacing(1.4, 3),
  textTransform: 'none',
  '&:hover': {
    background: 'rgba(0, 191, 255, 0.25)',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0, 191, 255, 0.4)',
  },
}));

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Fixed: added missing colon after "addressCountry"
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Napcen Engineering",
    url: "https://napcen.in",
    description: "Best wet scrubber, dust collector, fume extractor manufacturer in Pondicherry, India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressRegion: "PY",
      addressCountry: "IN",   // This was the bug!
    },
  };

  return (
    <AboutUsSection id="about">
      {/* Hidden SEO keywords */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        best wet scrubber manufacturer india, best dust collector pondicherry, best fume extractor tamil nadu
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }}>
        {/* Title */}
        <Fade in timeout={800}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: { xs: 6, md: 8 },
              fontWeight: 900,
              fontSize: { xs: '2.6rem', md: '4rem' },
              background: 'linear-gradient(90deg, #00BFFF, #4adeff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Napcen
          </Typography>
        </Fade>

        {/* Main Card */}
        <Fade in timeout={1200}>
          <GlassCard>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 8 }} alignItems="center">
              {/* Text Content */}
              <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" sx={{ color: '#00BFFF', fontWeight: 700, mb: 2 }}>
                  Innovating for a Cleaner Tomorrow
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                  Leading Air Pollution Control Experts
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.1rem' }}>
                  NAPCEN is a trusted Indian manufacturer delivering world-class industrial air pollution control systems.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.9 }}>
                  We specialize in high-efficiency <HighlightedText>Wet Scrubbers</HighlightedText>,{' '}
                  <HighlightedText>Dust Collectors</HighlightedText>, and{' '}
                  <HighlightedText>Fume Extractors</HighlightedText> using premium PP-FRP materials.
                </Typography>
                <GlassButton component={RouterLink} to="/contact" size="large">
                  Get Free Quote Today
                </GlassButton>
              </Box>

              {/* Factory Image */}
              <Box
                component="img"
                src={aboutImage}
                alt="Napcen Factory - Air Pollution Control Systems"
                loading="lazy"
                sx={{
                  width: { xs: '100%', sm: '340px', md: '460px' },
                  maxWidth: 460,
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                  transition: 'transform 0.5s ease',
                  '&:hover': { transform: isMobile ? 'none' : 'scale(1.05)' },
                }}
              />
            </Stack>
          </GlassCard>
        </Fade>

        {/* Feature Pills */}
        <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Fade in timeout={1600}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" flexWrap="wrap" gap={2}>
              {[
                { icon: <Schedule fontSize="small" />, text: 'On-Time Delivery' },
                { icon: <Security fontSize="small" />, text: 'Safe Workplaces' },
                { icon: <Engineering fontSize="small" />, text: 'Expert Engineers' },
                { icon: <Build fontSize="small" />, text: 'Advanced Technology' },
                { icon: <Star fontSize="small" />, text: 'ISO Certified' },
              ].map((item) => (
                <GlassButton key={item.text}>
                  {item.icon}
                  <Typography sx={{ ml: 1, fontWeight: 600 }}>{item.text}</Typography>
                </GlassButton>
              ))}
            </Stack>
          </Fade>
        </Box>

        {/* Footer Text */}
        <Fade in timeout={2000}>
          <Typography align="center" sx={{ mt: 8, opacity: 0.85, fontStyle: 'italic', fontSize: '1.1rem' }}>
            Proudly Serving India • UAE • Saudi Arabia • Malaysia • Sri Lanka
          </Typography>
        </Fade>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;