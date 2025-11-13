import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link as MuiLink,
  Container,
  
} from '@mui/material';
import { useTheme, keyframes } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Images
import designConsultingImg from '../../assets/images/design-consulting.png';
import manufacturingImg from '../../assets/images/manufacturing.png';
import installationImg from '../../assets/images/installation.png';
import maintenanceImg from '../../assets/images/maintenance.png';

// Desktop Animation
const slideUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

// Services Data
const services = [
  { image: designConsultingImg, title: 'Consulting & Design', description: 'Expert site assessment and custom engineering for your air pollution control needs.', link: '/services/consulting-design' },
  { image: manufacturingImg, title: 'Manufacturing & Supply', description: 'High-performance equipment from dust collectors to scrubbers.', link: '/services/manufacturing' },
  { image: installationImg, title: 'Installation', description: 'Certified technicians ensure perfect setup and commissioning.', link: '/services/installation' },
  { image: maintenanceImg, title: 'Maintenance', description: 'Keep your systems running at peak efficiency with our AMC plans.', link: '/services/maintenance' },
];

export default function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeCard, setActiveCard] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const isScrollingProgrammatically = useRef(false); // PREVENT AUTO-JUMP

  // Desktop auto-cycle
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => setActiveCard(prev => (prev + 1) % services.length), 2000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Mobile auto-play
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isMobile]);

  // SMOOTH SCROLL ONLY WHEN NEEDED – NO AUTO-JUMP
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const container = scrollRef.current;
    const cards = container.children;
    const targetCard = cards[activeIndex];

    if (!targetCard) return;

    // Prevent conflict with user scrolling
    if (isScrollingProgrammatically.current) return;
    isScrollingProgrammatically.current = true;

    const scrollLeft = targetCard.offsetLeft - container.offsetLeft - 20; // 20px padding

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });

    // Reset flag after scroll ends
    const handleScrollEnd = () => {
      isScrollingProgrammatically.current = false;
      container.removeEventListener('scroll', handleScrollEnd);
    };
    container.addEventListener('scroll', handleScrollEnd);

    // Fallback timeout
    setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 1000);
  }, [activeIndex, isMobile]);

  // Manual dot click → instant smooth scroll
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, sm: 4, md: 6 }, background: 'linear-gradient(to right, #1f2525ff, #151d1dff)', color: 'white', overflow: 'hidden', position: 'relative' }}>
      {/* SEO */}
      <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        best wet scrubber design coimbatore, best dust collector installation pondicherry
      </Box>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Napcean Services",
          "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": { "@type": "Service", "name": s.title, "url": `https://napcean.in${s.link}` }
          }))
        })}
      </script>

      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ color: '#00BFFF', fontWeight: 600, mb: 1, textAlign: 'center' }}>Our Services</Typography>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 6, fontSize: { xs: '1.9rem', md: '2.6rem' }, textAlign: 'center', textTransform: 'uppercase' }}>
          From <Box component="span" sx={{ color: '#00BFFF' }}>Concept to Completion</Box>
        </Typography>

        {/* DESKTOP: ORIGINAL PERFECT LAYOUT */}
        {!isMobile && (
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {services.map((service, idx) => (
              <Grid key={idx} item xs={12} sm={activeCard === idx ? 6 : 3} sx={{ display: 'flex', justifyContent: 'center', flex: activeCard === idx ? 3 : 1, transition: 'flex 0.4s ease-in-out' }}>
                <MuiLink component={RouterLink} to={service.link} underline="none" sx={{ width: '100%' }} onClick={() => setActiveCard(idx)}>
                  <Card sx={{
                    width: '100%', height: 350, display: 'flex', flexDirection: 'column', borderRadius: 2, overflow: 'hidden',
                    position: 'relative', background: 'transparent', border: '2px solid #00BFFF',
                    transition: 'all 0.4s ease', boxShadow: activeCard === idx ? '0 0 20px rgba(0,191,255,0.5)' : '0 0 10px rgba(0,0,0,0.5)',
                    zIndex: activeCard === idx ? 2 : 1, '&:hover': { transform: 'scale(1.02)', boxShadow: '0 0 25px rgba(0,191,255,0.4)' }
                  }}>
                    <CardMedia component="img" image={service.image} alt={service.title} loading="lazy"
                      sx={{ width: '100%', height: activeCard === idx ? '220px' : '100%', objectFit: 'cover', transition: 'height 0.5s ease' }} />
                    {activeCard === idx && (
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(26,26,26,0.85)', backdropFilter: 'blur(8px)', p: 3, animation: `${slideUp} 0.6s ease-out` }}>
                        <Typography variant="h6" sx={{ color: '#00BFFF', fontWeight: 700, mb: 1.5, fontSize: '1.25rem' }}>{service.title}</Typography>
                        <Typography variant="body2" sx={{ color: '#BFC5DC', fontSize: '1rem', lineHeight: 1.7 }}>{service.description}</Typography>
                      </Box>
                    )}
                    {activeCard !== idx && (
                      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)', whiteSpace: 'nowrap' }}>
                        <Typography variant="h6" sx={{
                          color: '#00BFFF', fontWeight: 700, fontSize: '1.2rem', background: 'rgba(26,26,26,0.7)',
                          px: 3, py: 1.5, borderRadius: 2, border: '1px solid rgba(0,191,255,0.4)', backdropFilter: 'blur(4px)'
                        }}>{service.title}</Typography>
                      </Box>
                    )}
                  </Card>
                </MuiLink>
              </Grid>
            ))}
          </Grid>
        )}

        {/* MOBILE: GORGEOUS CAROUSEL – NO AUTO-JUMP */}
        {isMobile && (
          <>
            <Box
              ref={scrollRef}
              sx={{
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                pb: 4,
                px: '20px',
                mx: '-20px',
                width: 'calc(100% + 40px)',
              }}
            >
              {services.map((service, idx) => (
                <Box
                  key={idx}
                  sx={{
                    flexShrink: 0,
                    width: 'calc(100vw - 80px)',
                    maxWidth: '360px',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <Card
                    component={RouterLink}
                    to={service.link}
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(16px)',
                      border: '2px solid rgba(0, 191, 255, 0.4)',
                      boxShadow: '0 8px 32px rgba(0, 191, 255, 0.2), inset 0 0 20px rgba(0, 191, 255, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: '0 25px 50px rgba(0, 191, 255, 0.4)',
                        border: '2px solid #00BFFF',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 200 }}>
                      <CardMedia component="img" image={service.image} alt={service.title} height="200" loading="lazy" sx={{ objectFit: 'cover', width: '100%' }} />
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', background: 'linear-gradient(to top, rgba(26,26,26,0.9), transparent)' }} />
                    </Box>
                    <CardContent sx={{ p: 3.5, textAlign: 'center', pb: 4 }}>
                      <Typography variant="h5" sx={{ color: '#00BFFF', fontWeight: 800, mb: 2, fontSize: '1.25rem', textShadow: '0 0 10px rgba(0,191,255,0.3)' }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#e0e0e0', fontSize: '0.98rem', lineHeight: 1.7 }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
              <Box sx={{ flexShrink: 0, width: '20px' }} />
            </Box>

            {/* GLOWING DOTS */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
              {services.map((_, idx) => (
                <Box key={idx} onClick={() => handleDotClick(idx)} sx={{ cursor: 'pointer' }}>
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: activeIndex === idx ? 16 : 10,
                      color: activeIndex === idx ? '#00BFFF' : '#444',
                      filter: activeIndex === idx ? 'drop-shadow(0 0 12px #00BFFF)' : 'none',
                      animation: activeIndex === idx ? 'pulse 2s infinite' : 'none',
                      '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.7 } },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}