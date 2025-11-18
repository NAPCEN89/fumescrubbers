import React from 'react';
import { Box, Typography, Container, Grid, Button, Paper, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled, useTheme, keyframes } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import ScienceIcon from '@mui/icons-material/Science';
import FactoryIcon from '@mui/icons-material/Factory';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Divider from '@mui/material/Divider';
import HandymanIcon from '@mui/icons-material/Handyman';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

// --- Configuration Constants ---
const ACCENT_COLOR = '#33FFFF'; // Cyan/Aqua for high-tech feel
const PRIMARY_BG = 'radial-gradient(ellipse at bottom, #0A1929 0%, #000B15 100%)'; // Deep Dark Blue Radial
const TEXT_LIGHT = '#E0F7FA'; // Pale Cyan
const TEXT_SECONDARY = '#B0BEC5'; // Light Slate Gray
const CARD_BG = 'rgba(255, 255, 255, 0.04)';

// --- Keyframe Animations ---
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulseShadow = keyframes`
  0% { box-shadow: 0 0 10px rgba(51, 255, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(51, 255, 255, 0.6); }
  100% { box-shadow: 0 0 10px rgba(51, 255, 255, 0.2); }
`;

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
  backgroundAttachment: 'fixed', // Parallax-like effect
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(15, 2),
  textAlign: 'center',
  // Sharper clip-path for modern look
  clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)', 
  marginBottom: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 11, 21, 0.85)', // Darker overlay
    backdropFilter: 'blur(3px)', // Subtle blur
    pointerEvents: 'none',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: ACCENT_COLOR,
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '3px',
  position: 'relative',
  zIndex: 2,
  textShadow: `0 0 12px ${ACCENT_COLOR}90`,
  animation: `${fadeIn} 1s ease-out`,
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  color: TEXT_LIGHT,
  fontWeight: 800,
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(8),
  fontSize: '2.5rem',
  textTransform: 'uppercase',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '150px',
    height: '3px',
    background: ACCENT_COLOR,
    borderRadius: '2px',
    boxShadow: `0 0 10px ${ACCENT_COLOR}`,
  },
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: CARD_BG,
  border: `1px solid ${ACCENT_COLOR}30`,
  backdropFilter: 'blur(15px)', // Increased blur for better effect
  borderRadius: '16px',
  padding: theme.spacing(3),
  transition: 'all 0.5s cubic-bezier(0.17, 0.84, 0.44, 1)',
  '&:hover': {
    transform: 'scale(1.03) translateY(-8px)',
    boxShadow: `0 15px 40px ${ACCENT_COLOR}40`,
    background: 'rgba(51, 255, 255, 0.05)',
  },
}));

const ChallengeCard = styled(GlassCard)(({ theme }) => ({
  minHeight: '220px', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: theme.spacing(4),
  // *** NEW: Enforce Max Width for compactness, ensuring they stack beautifully on mobile ***
  maxWidth: 400, // Reduced max width for neatness
  mx: 'auto', // Center card when Grid item is larger
}));

// --- Main Component ---

const IndustryPageTemplate = ({ industry }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!industry) {
    // Placeholder structure for industry data if missing
    industry = {
      name: 'Chemical Processing',
      description: 'Advanced air filtration solutions for sustainable operations and strict regulatory compliance in the Chemical Processing industry.',
      heroImage: 'https://via.placeholder.com/1920x600/0A1929/33FFFF?text=Chemical+Plant+Header',
      challenges: [
        { name: 'Corrosive Fumes & Gases', description: 'Neutralizing highly reactive and dangerous gases like $\\text{HCl}$, $\\text{SO}_x$, and $\\text{NO}_x$ from chemical reactions.' },
        { name: 'Strict $\\text{VOC}$ Compliance', description: 'Capturing and mitigating volatile organic compounds (VOCs) to meet stringent environmental standards.' },
        { name: 'Dust & Particulate Control', description: 'Managing fine particulates generated during powder handling and mixing processes to ensure worker safety.' },
      ],
      products: [
        { 
          name: 'High-Efficiency Wet Scrubber', 
          description: 'Custom-designed FRP and PP scrubbers for neutralizing high-volume acidic or corrosive gas streams. Superior odor control capability.', 
          image: 'https://via.placeholder.com/200/172240/33FFFF?text=Wet+Scrubber',
          benefits: ['$\\text{HCl}$ / $\\text{SO}_2$ removal', 'Low maintenance', 'Custom material build'],
        },
        { 
          name: 'Activated Carbon Adsorber', 
          description: 'Modular systems using specialized media for efficient removal of $\\text{VOCs}$ and trace contaminants. Designed for easy media replacement.', 
          image: 'https://via.placeholder.com/200/172240/33FFFF?text=Carbon+Adsorber',
          benefits: ['$\\text{VOC}$ abatement', 'High surface area filtration', 'Modular design'],
        },
        { 
          name: 'Pulse Jet Dust Collector', 
          description: 'Heavy-duty collectors optimized for fine chemical powders, featuring continuous self-cleaning and high filter efficiency.', 
          image: 'https://via.placeholder.com/200/172240/33FFFF?text=Dust+Collector',
          benefits: ['Continuous operation', 'High-volume handling', 'Safe powder recovery'],
        },
      ],
    };
  }

  const challengeIcons = [ScienceIcon, FactoryIcon, GppGoodIcon, HandymanIcon, LightbulbIcon];

  return (
    <PageWrapper>
      <HeroSection image={industry.heroImage}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Title variant="h6">Industry Focus</Title>
          <Typography variant="h2" sx={{ color: TEXT_LIGHT, fontWeight: 900, mb: 2, fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' } }}>
            {industry.name} Air Solutions
          </Typography>
          <Typography variant="h5" sx={{ color: TEXT_SECONDARY, maxWidth: '700px', margin: 'auto', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            {industry.description}
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        {/* --- Challenges Section --- */}
        <Box sx={{ py: 8 }}>
          <SectionHeading variant="h4">Addressing Specific Challenges</SectionHeading>
          <Grid container spacing={4} justifyContent="center">
            {industry.challenges.map((challenge, index) => {
              const IconComponent = challengeIcons[index % challengeIcons.length];
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4} // *** CRITICAL CHANGE: md={4} ensures 3 cards fit horizontally ***
                  key={index}
                  sx={{ 
                    display: 'flex', // Ensure the card itself is centered within the grid item
                    justifyContent: 'center', // Center the card 
                    animation: `${fadeIn} 0.8s ease-out ${index * 0.2}s forwards`, 
                    opacity: 0 
                  }}
                >
                  <ChallengeCard elevation={0}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                      <IconComponent sx={{ color: ACCENT_COLOR, fontSize: 40, flexShrink: 0 }} />
                      <Typography variant="h6" sx={{ color: TEXT_LIGHT, fontWeight: 700, lineHeight: 1.3 }}>
                        {challenge.name}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 1, borderColor: `${ACCENT_COLOR}30` }} />
                    <Typography variant="body1" sx={{ color: TEXT_SECONDARY, flexGrow: 1, mt: 1 }}>
                      {challenge.description}
                    </Typography>
                  </ChallengeCard>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Divider sx={{ my: 8, borderColor: `${ACCENT_COLOR}40`, borderStyle: 'solid' }} />

        {/* --- Solutions/Products Section --- */}
        <Box sx={{ py: 8 }}>
          <SectionHeading variant="h4">Recommended Equipment</SectionHeading>
          <Grid container spacing={5}>
            {industry.products.map((product, index) => (
              <Grid item xs={12} key={index}>
                <GlassCard
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                    alignItems: 'center',
                    gap: { xs: 3, md: 5 },
                    animation: `${fadeIn} 0.8s ease-out ${index * 0.25}s forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: 250 },
                      height: { xs: 200, md: 250 },
                      flexShrink: 0,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: `2px solid ${ACCENT_COLOR}60`,
                      boxShadow: `0 0 15px ${ACCENT_COLOR}30`,
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Use cover for large product images
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                  </Box>

                  {/* Text Content */}
                  <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                    <Typography variant="h5" sx={{ color: ACCENT_COLOR, fontWeight: 700, mb: 1.5 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: TEXT_LIGHT, mb: 3 }}>
                      {product.description}
                    </Typography>
                    
                    {/* Benefits Section - Grid Layout */}
                    <Grid container spacing={1.5}>
                        {product.benefits.map((benefit, bIndex) => (
                          <Grid item xs={12} sm={6} key={bIndex}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                              <CheckCircleIcon sx={{ color: ACCENT_COLOR, fontSize: 18, mt: '2px', flexShrink: 0 }} />
                              <Typography variant="body2" sx={{ color: TEXT_SECONDARY, fontWeight: 500 }}>
                                {benefit}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                    </Grid>
                    
                    <Button
                        component={RouterLink}
                        to="/products"
                        variant="contained"
                        size="small"
                        sx={{
                            mt: 3,
                            backgroundColor: ACCENT_COLOR,
                            color: '#000B15',
                            fontWeight: 700,
                            borderRadius: '25px',
                            '&:hover': {
                                backgroundColor: '#00D4D4',
                            }
                        }}
                    >
                        View Product Details
                    </Button>
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 8, borderColor: `${ACCENT_COLOR}40`, borderStyle: 'solid' }} />

        {/* --- Call to Action Section --- */}
        <Box sx={{ my: 10, textAlign: 'center' }}>
          <GlassCard sx={{ p: { xs: 4, md: 6 }, maxWidth: '800px', margin: 'auto', animation: `${pulseShadow} 2s infinite ease-in-out` }}>
            <Typography variant="h3" sx={{ color: TEXT_LIGHT, fontWeight: 700, mb: 2, textShadow: `0 0 8px ${ACCENT_COLOR}50` }}>
              Ready for a Tailored Solution?
            </Typography>
            <Typography variant="h6" sx={{ color: TEXT_SECONDARY, mb: 4, maxWidth: '600px', margin: 'auto' }}>
              We custom-engineer systems for your specific industrial pollutants and compliance requirements.
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="/contact"
              size="large"
              sx={{
                backgroundColor: ACCENT_COLOR,
                color: '#000B15',
                fontWeight: 800,
                padding: '12px 30px',
                borderRadius: '50px',
                zIndex: 10,
                transition: 'all 0.3s ease',
                boxShadow: `0 0 15px ${ACCENT_COLOR}`,
                '&:hover': {
                  backgroundColor: '#00D4D4',
                  transform: 'scale(1.05)',
                  boxShadow: `0 0 25px ${ACCENT_COLOR}, 0 0 40px ${ACCENT_COLOR}50`,
                },
              }}
              onClick={() => console.log("Request Consultation button clicked, navigating to: /contact")}
            >
              Request Expert Consultation
            </Button>
          </GlassCard>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default IndustryPageTemplate;