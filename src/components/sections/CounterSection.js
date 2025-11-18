import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
} from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';

// Icons
import yearsIcon from '../../assets/icons/counter1.svg';
import satisfactionIcon from '../../assets/icons/counter2.svg';
import systemsIcon from '../../assets/icons/counter3.svg';
import projectsIcon from '../../assets/icons/counter4.svg';

// ====== COUNTER COMPONENT ======
const NumberCounter = ({
  start = 0,
  end,
  duration = 2.5,
  title,
  symbol = '',
  imageSrc,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) setHasAnimated(true);
  }, [inView, hasAnimated]);

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: 'center',
        p: 2,
        borderRadius: 2,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { transform: 'translateY(-10px)' },
      }}
    >
      <Box sx={{ mb: 1 }}>
        <img
          src={imageSrc}
          alt={`${title} icon`}
          style={{
            // --- REDUCED ICON SIZE (from 81px/80px) ---
            width: '60px', 
            height: '60px', 
            objectFit: 'contain',
          }}
          loading="lazy"
        />
      </Box>
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 'bold', 
          color: '#00BFFF',
          fontSize: { xs: '1.5rem', md: '2rem' } // Slightly reduced number size
        }}
      >
        {hasAnimated && <CountUp start={start} end={end} duration={duration} separator="," />}
        {symbol}
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: 'white', 
          mt: 1,
          fontSize: { xs: '0.9rem', md: '1.1rem' } // Slightly reduced title size
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

// ====== HIDDEN SEO ======
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    india's fastest growing air pollution control brand 2025, most awarded wet scrubber factory tamil nadu...
  </Box>
);

const AnimatedCounters = () => {
  const theme = useTheme();
  // isMobile and isDesktop are no longer strictly needed for counters, but keeping them doesn't hurt.
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); 

  const counters = [
    { end: 13, title: 'Years in Air Pollution Solutions', symbol: '+', imageSrc: yearsIcon },
    { end: 98, title: 'Client Satisfaction Rate', symbol: '%', imageSrc: satisfactionIcon },
    { end: 150, title: 'Air Filtration Systems Installed', symbol: '+', imageSrc: systemsIcon },
    { end: 500, title: 'Pollution Control Projects', symbol: '+', imageSrc: projectsIcon },
  ];

  return (
    <>
      <Helmet>
        <title>13+ Years | 98% Satisfaction | 500+ Projects | India’s Most Trusted APC</title>
        <meta name="description" content="India's fastest growing, most awarded air pollution control company in Tamil Nadu." />
      </Helmet>

      <Box sx={{ bgcolor: 'transparent', position: 'relative' }}>
        <HiddenSEO />

        {/* ====== COUNTER SECTION (ONLY COUNTERS REMAIN) ====== */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, borderTop: '1px solid rgba(0, 191, 255, 0.2)', mt: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            {counters.map((c, i) => (
              <Grid 
                item 
                xs={6}    // Mobile: Two per row (2x2 layout)
                sm={6}    // Tablet: Two per row
                md={3}    // Desktop: Four per row
                key={i}
              >
                <NumberCounter {...c} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AnimatedCounters;