import React from 'react';
import { Box, Typography, Container, Grid, Button, Paper, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled, useTheme } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import ScienceIcon from '@mui/icons-material/Science';
import FactoryIcon from '@mui/icons-material/Factory';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Divider from '@mui/material/Divider';

// --- Configuration Constants ---
const ACCENT_COLOR = '#00BFFF'; // Sky Blue
const PRIMARY_BG = 'linear-gradient(to bottom, #1a2a2aff, #0d1515ff)'; // Deep Dark Blue
const TEXT_LIGHT = '#e6f1ff';
const TEXT_SECONDARY = '#8892b0';
const CARD_BG = 'rgba(255, 255, 255, 0.05)';

// --- Styled Components ---

const PageWrapper = styled(Box)(({ theme }) => ({
  background: PRIMARY_BG,
  color: TEXT_LIGHT,
  minHeight: '100vh',
  padding: theme.spacing(2, 0),
  overflowX: 'hidden',
}));

const HeroSection = styled(Box)(({ theme, image }) => ({
  position: 'relative',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(15, 2),
  textAlign: 'center',
  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    pointerEvents: 'none', // Prevent pseudo-element from blocking clicks
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: ACCENT_COLOR,
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  position: 'relative',
  zIndex: 2,
  textShadow: `0 0 10px ${ACCENT_COLOR}50`,
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  color: TEXT_LIGHT,
  fontWeight: 700,
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(6),
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '2px',
    background: `linear-gradient(to right, transparent, ${ACCENT_COLOR}, transparent)`,
  },
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: CARD_BG,
  border: `1px solid ${ACCENT_COLOR}20`,
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  zIndex: 1, // Ensure card is clickable
  '&:hover': {
    transform: 'scale(1.02) translateY(-5px)',
    boxShadow: `0 0 20px ${ACCENT_COLOR}30`,
    background: 'rgba(255, 255, 255, 0.08)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `radial-gradient(circle at 30% 30%, ${ACCENT_COLOR}10, transparent 70%)`,
    opacity: 0.3,
    transform: 'rotate(45deg)',
    pointerEvents: 'none', // Prevent pseudo-element from blocking clicks
  },
}));

const ChallengeCard = styled(GlassCard)(({ theme }) => ({
  minHeight: '200px', // Consistent height for neat appearance
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto', // Allow flexibility on smaller screens
  },
}));

const ProductCard = styled(GlassCard)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  '& img': {
    borderRadius: '12px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

// --- Main Component ---

const IndustryPageTemplate = ({ industry }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!industry) {
    return (
      <PageWrapper>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Title variant="h3">Error</Title>
          <Typography variant="h5" color="error">Industry not found.</Typography>
        </Container>
      </PageWrapper>
    );
  }

  const challengeIcons = [ScienceIcon, FactoryIcon, GppGoodIcon];

  return (
    <PageWrapper>
      <HeroSection image={industry.heroImage || 'https://via.placeholder.com/1920x600/0a192f/00BFFF?text=Industry+Header'}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Title variant="h6">Solutions for</Title>
          <Typography variant="h2" sx={{ color: TEXT_LIGHT, fontWeight: 900, mb: 2 }}>
            {industry.name} Air Pollution Control
          </Typography>
          <Typography variant="h5" sx={{ color: TEXT_SECONDARY, maxWidth: '700px', margin: 'auto' }}>
            {industry.description || "Advanced air filtration solutions for sustainable operations and regulatory compliance."}
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        {/* --- Challenges Section --- */}
        <Box sx={{ my: 10 }}>
          <SectionHeading variant="h4">Air Quality Challenges</SectionHeading>
          <Grid container spacing={4} justifyContent="center">
            {industry.challenges.map((challenge, index) => {
              const IconComponent = challengeIcons[index % challengeIcons.length];
              const isLeft = index % 2 === 0; // Alternate left/right
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    [theme.breakpoints.down('md')]: {
                      justifyContent: 'center', // Center on mobile
                    },
                  }}
                >
                  <ChallengeCard elevation={0} sx={{ maxWidth: '500px', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <IconComponent sx={{ color: ACCENT_COLOR, fontSize: 40 }} />
                      <Typography variant="h6" sx={{ color: TEXT_LIGHT, fontWeight: 600 }}>
                        {challenge.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: TEXT_SECONDARY, flexGrow: 1 }}>
                      {challenge.description || "Tailored solutions to address specific pollutants and emissions challenges in your industry."}
                    </Typography>
                  </ChallengeCard>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Divider sx={{ my: 8, borderColor: `${ACCENT_COLOR}20`, borderStyle: 'dashed' }} />

        {/* --- Solutions Section --- */}
        <Box sx={{ my: 10 }}>
          <SectionHeading variant="h4">Our Solutions</SectionHeading>
          <Grid container spacing={4}>
            {industry.products.map((product, index) => (
              <Grid item xs={12} key={index}>
                <ProductCard elevation={0}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                      alignItems: 'center',
                      gap: 3,
                      width: '100%',
                      [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image || `https://via.placeholder.com/200/172240/${ACCENT_COLOR.substring(1)}?text=Product`}
                      alt={product.name}
                      sx={{ width: 150, height: 150, flexShrink: 0 }}
                    />
                    <Box sx={{ flex: 1, [theme.breakpoints.down('md')]: { textAlign: 'center' } }}>
                      <Typography variant="h6" sx={{ color: ACCENT_COLOR, fontWeight: 700, mb: 1 }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: TEXT_LIGHT, mb: 2 }}>
                        {product.description || "High-performance systems to neutralize contaminants specific to your industry."}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}>
                        {product.benefits.map((benefit, bIndex) => (
                          <Box key={bIndex} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircleIcon sx={{ color: ACCENT_COLOR, fontSize: 16 }} />
                            <Typography variant="caption" sx={{ color: TEXT_SECONDARY }}>
                              {benefit}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 8, borderColor: `${ACCENT_COLOR}20`, borderStyle: 'dashed' }} />

        {/* --- Call to Action Section --- */}
        <Box sx={{ my: 10, textAlign: 'center' }}>
          <GlassCard sx={{ p: 4, maxWidth: '600px', margin: 'auto' }}>
            <Typography variant="h4" sx={{ color: TEXT_LIGHT, fontWeight: 700, mb: 2 }}>
              Elevate Your Air Quality
            </Typography>
            <Typography variant="h6" sx={{ color: TEXT_SECONDARY, mb: 3 }}>
              Connect with our experts for a tailored solution to meet your compliance needs.
            </Typography>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/contact"
              sx={{
                borderColor: ACCENT_COLOR,
                color: ACCENT_COLOR,
                fontWeight: 600,
                padding: '10px 24px',
                borderRadius: '50px',
                zIndex: 10,
                pointerEvents: 'auto',
                '&:hover': {
                  background: `${ACCENT_COLOR}20`,
                  borderColor: ACCENT_COLOR,
                },
              }}
              onClick={() => console.log("Request Consultation button clicked, navigating to: /contact")}
            >
              Request Consultation
            </Button>
          </GlassCard>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default IndustryPageTemplate;