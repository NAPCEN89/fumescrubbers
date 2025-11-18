import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography, Container, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import CountUp from 'react-countup';
import { useTheme } from '@mui/material/styles';

// Logos (Assuming these paths are correct)
import PartnerLogo1 from '../../assets/images/clients/C1.png';
import PartnerLogo2 from '../../assets/images/clients/C2.png';
import PartnerLogo3 from '../../assets/images/clients/C10.png';
import PartnerLogo4 from '../../assets/images/clients/C4.png';
import PartnerLogo5 from '../../assets/images/clients/C5.png';

const partnerLogos = [PartnerLogo1, PartnerLogo2, PartnerLogo3, PartnerLogo4, PartnerLogo5];
const infiniteLogos = [...partnerLogos, ...partnerLogos];

const reviews = [
  { quote: "Best wet scrubber — zero downtime! The build quality is exceptional, and the air quality reports speak for themselves. Highly recommended for heavy industry use, which demands top reliability.", name: "Deborah W. Way", title: "Plant Operations Manager, Chemical Industry" },
  { quote: "Reliable dry scrubbers for tough conditions. We operate 24/7, and these units handle the heat and dust flawlessly with minimal maintenance. A true workhorse that never quits on us.", name: "Francis J. Casella", title: "Environmental Compliance Officer, Power Plant" },
];

const LogoItem = styled('img')({
  height: '68px',
  width: 'auto',
  maxWidth: '155px',
  objectFit: 'contain',
  filter: 'grayscale(70%) brightness(1.1)',
  transition: 'all 0.4s ease',
  '&:hover': {
    filter: 'grayscale(0%) brightness(1.3)',
    transform: 'scale(1.15)',
  },
});

function PartnerSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollRef = useRef(null);
  
  // Infinite scroll for logos (mobile only)
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    let pos = 0;
    let animationId;
    const scroll = () => {
      if (!scrollRef.current) return;
      pos += 0.8;
      if (pos >= scrollRef.current.scrollWidth / 2) pos = 0;
      scrollRef.current.scrollLeft = pos;
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isMobile]);

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, color: 'white' }}>
      <Container maxWidth="lg">

        {/* Header + Counter (Omitted for brevity) */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="h6" sx={{ color: '#00BFFF', fontWeight: 700, mb: 2 }}>
            Trusted Partners
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.8rem' }, mb: 3 }}>
            Partnering for <Box component="span" sx={{ color: '#00BFFF' }}>Cleaner Air</Box> Worldwide
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720, mx: 'auto', opacity: 0.9, fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.8 }}>
            We collaborate with leading industries across India to deliver high-performance wet scrubbers, dust collectors, and fume extraction systems.
          </Typography>
          <Box sx={{ mt: 6 }}>
            <Typography variant="h1" sx={{ color: '#00BFFF', fontWeight: 900, fontSize: { xs: '5.5rem', md: '7.5rem' }, lineHeight: 1 }}>
              <CountUp end={50} duration={3} suffix="+" enableScrollSpy />
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.9 }}>
              Trusted Industries & Growing
            </Typography>
          </Box>
        </Box>

        {/* Partner Logos Section (Omitted for brevity) */}
        <Typography variant="h6" align="center" sx={{ color: '#00BFFF', fontWeight: 600, mb: 5 }}>
          Our Trusted Partners
        </Typography>

        {/* Desktop Logos */}
        {!isMobile && (
          <Grid container spacing={6} justifyContent="center" alignItems="center" sx={{ mb: 10 }}>
            {partnerLogos.map((logo, i) => (
              <Grid item key={i}>
                <LogoItem src={logo} alt="Partner" loading="lazy" decoding="async" />
              </Grid>
            ))}
          </Grid>
        )}

        {/* Mobile Logos */}
        {isMobile && (
          <Box sx={{ 
            overflow: 'hidden', 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            mb: 8
          }}>
            <Box ref={scrollRef} sx={{ display: 'flex', gap: 6, py: 2 }}>
              {infiniteLogos.map((logo, i) => (
                <Box key={i} sx={{ flexShrink: 0 }}>
                  <LogoItem src={logo} alt="Partner" loading="lazy" decoding="async" />
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Client Reviews - With improved mobile spacing */}
        <Typography variant="h5" align="center" sx={{ color: '#00BFFF', fontWeight: 700, mb: 5, mt: 8 }}>
          What Our Clients Say
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {reviews.map((r, i) => (
            <Grid 
              item 
              xs={12}      
              sm={10}    
              md={6}       
              key={i} 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                // --- FIX: Add bottom margin to the first card only on mobile (xs) ---
                mb: i === 0 ? { xs: 3, md: 0 } : 0, 
              }}
            >
              <Box
                sx={{
                  maxWidth: 450, 
                  p: 3,
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 191, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 191, 255, 0.15)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-8px)' },
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', 
                }}
              >
                {/* Review Quote */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#E0E0E0', 
                    fontStyle: 'italic', 
                    mb: 2, 
                    fontSize: { xs: '0.95rem', md: '1rem' }, 
                    lineHeight: 1.6 
                  }}
                >
                  "{r.quote || r.text}"
                </Typography>
                
                {/* Name and Title (Role) */}
                <Box>
                  <Typography variant="h6" sx={{ color: '#00BFFF', fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                    {r.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B0B0B0', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                    {r.title || r.role}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        
      </Container>
    </Box>
  );
}

export default PartnerSection;