import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
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

// === MOBILE: TALLER, CLEAN BOX CARD ===
const MobileBoxCard = memo(({ service, isActive }) => (
  <Box
    component={RouterLink}
    to={service.link}
    sx={{
      flexShrink: 0,
      width: { xs: '160px', sm: '180px' },
      height: '240px',
      textDecoration: 'none',
      borderRadius: 3,
      overflow: 'hidden',
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(0, 191, 255, 0.25)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      '&:hover, &:active': {
        transform: 'translateY(-6px)',
        boxShadow: '0 12px 28px rgba(0, 191, 255, 0.22)',
        borderColor: '#00BFFF',
      },
    }}
  >
    {/* Clean, crisp image */}
    <Box sx={{ flex: '0 0 140px', position: 'relative', overflow: 'hidden' }}>
      <CardMedia
        component="img"
        image={service.image}
        alt={service.title}
        loading={isActive ? "eager" : "lazy"}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
          '&:hover': { transform: 'scale(1.05)' },
        }}
      />
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
      }} />
    </Box>

    {/* Title area */}
    <Box sx={{
      flex: 1,
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <Typography
        variant="subtitle1"
        sx={{
          color: '#00BFFF',
          fontWeight: 700,
          fontSize: '0.95rem',
          lineHeight: 1.3,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}
      >
        {service.title}
      </Typography>
    </Box>
  </Box>
));

function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeCard, setActiveCard] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const isScrollingProgrammatically = useRef(false);

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

  // Smooth scroll for mobile
  const scrollToIndex = useCallback((index) => {
    if (!scrollRef.current || isScrollingProgrammatically.current) return;

    const container = scrollRef.current;
    const cards = container.children;
    const targetCard = cards[index];
    if (!targetCard) return;

    isScrollingProgrammatically.current = true;
    const scrollLeft = targetCard.offsetLeft - container.offsetLeft - 16;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });

    const reset = () => {
      isScrollingProgrammatically.current = false;
      container.removeEventListener('scroll', reset);
    };
    container.addEventListener('scroll', reset);
    setTimeout(reset, 1000);
  }, []);

  useEffect(() => {
    if (isMobile) scrollToIndex(activeIndex);
  }, [activeIndex, isMobile, scrollToIndex]);

  const handleDotClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

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

        {/* DESKTOP: 100% UNCHANGED */}
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

        {/* MOBILE: TALLER, CLEAN CARDS */}
        {isMobile && (
          <>
            <Box
              ref={scrollRef}
              sx={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                pb: 3,
                px: '16px',
                mx: '-16px',
                width: 'calc(100% + 32px)',
              }}
            >
              {services.map((service, idx) => (
                <MobileBoxCard
                  key={idx}
                  service={service}
                  isActive={idx === 0}
                />
              ))}
              <Box sx={{ flexShrink: 0, width: '16px' }} />
            </Box>

            {/* GLOWING DOTS */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
              {services.map((_, idx) => (
                <Box key={idx} onClick={() => handleDotClick(idx)} sx={{ cursor: 'pointer' }}>
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: activeIndex === idx ? 14 : 9,
                      color: activeIndex === idx ? '#00BFFF' : '#666',
                      filter: activeIndex === idx ? 'drop-shadow(0 0 10px #00BFFF)' : 'none',
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

export default memo(ServicesSection);