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
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';

// Import icons (for counters only)
import yearsIcon from '../../assets/icons/counter1.svg';
import satisfactionIcon from '../../assets/icons/counter2.svg';
import systemsIcon from '../../assets/icons/counter3.svg';
import projectsIcon from '../../assets/icons/counter4.svg';

// ====== COUNTER COMPONENT ======
const NumberCounter = ({ start, end, duration, title, symbol, imageSrc }) => {
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
            width: '81px',
            height: '80px',
            objectFit: 'contain',
          }}
          loading="lazy"
        />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'green' }}>
        {hasAnimated && <CountUp start={start} end={end} duration={duration} separator="," />}
        {symbol}
      </Typography>
      <Typography variant="h6" sx={{ color: 'white' }}>
        {title}
      </Typography>
    </Box>
  );
};

NumberCounter.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  symbol: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
};

NumberCounter.defaultProps = { duration: 2.5, symbol: '' };

// ====== TESTIMONIALS DATA (TEXT ONLY) ======
const testimonials = [
  {
    quote: "NAPCEN's wet scrubbers have transformed our chemical plant's air quality in Tamil Nadu. Their efficient PP FRP design ensures we meet TNPCB norms while maintaining a safe workspace.",
    name: 'Deborah W. Way',
    title: 'Plant Operations Manager, Chemical Industry',
  },
  {
    quote: "The dry scrubbers from NAPCEN have significantly reduced SO₂ emissions at our boiler unit. Reliable performance and low maintenance make them ideal for Indian industrial conditions.",
    name: 'Francis J. Casella',
    title: 'Environmental Compliance Officer, Power Plant',
  },
  {
    quote: "NAPCEN's portable fume extractors have been a lifesaver for our welding shop in Chennai. They effectively capture harmful fumes, ensuring worker safety and compliance.",
    name: 'Sarah K. Thompson',
    title: 'Production Supervisor, Metal Fabrication',
  },
  {
    quote: "The pulse jet dust collectors from NAPCEN keep our cement grinding unit dust-free. Excellent suction power and auto-cleaning system — best investment for productivity.",
    name: 'Michael R. Patel',
    title: 'Facility Manager, Cement Industry',
  },
];

// ====== HIDDEN SEO ======
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    india's fastest growing air pollution control brand 2025, most awarded wet scrubber factory tamil nadu...
  </Box>
);

const AnimatedCounters = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

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

        {/* ====== TESTIMONIALS SECTION (FIRST) - TEXT ONLY ====== */}
        <Container sx={{ py: { xs: 4, md: 6 } }}>
          <Grid container justifyContent="center" sx={{ mb: { xs: 3, md: 5 } }}>
            <Grid item xs={12} sm={10} md={8} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#298298ff', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                Client Praise
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  color: '#ccd7dbff',
                }}
              >
                What Our Customers Are Saying
              </Typography>
            </Grid>
          </Grid>

          {/* DESKTOP: 4 TESTIMONIALS (TEXT ONLY) */}
          {isDesktop && (
            <Grid container spacing={4} justifyContent="center">
              {testimonials.map((t, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={i}
                  sx={{
                    display: 'flex',
                    justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: { xs: '100%', sm: 400, md: 450 },
                      width: '100%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)',
                      backgroundColor: 'transparent',
                      p: { xs: 2, sm: 2.5, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#BFC5DC',
                        fontStyle: 'italic',
                        mb: { xs: 1, md: 2 },
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      "{t.quote}"
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#287e8aff',
                        fontSize: { xs: '0.95rem', md: '1.2rem' },
                      }}
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#BFC5DC',
                        fontSize: { xs: '0.75rem', md: '0.9rem' },
                      }}
                    >
                      {t.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          {/* MOBILE: 2 TESTIMONIALS + CAROUSEL (TEXT ONLY) */}
          {isMobile && (
            <Box sx={{ overflow: 'hidden' }}>
              <Grid container spacing={2}>
                {[0, 1].map((offset) => {
                  const index = (activeIndex + offset) % testimonials.length;
                  const t = testimonials[index];
                  return (
                    <Grid
                      item
                      xs={6}
                      key={index}
                      sx={{
                        opacity: offset === 0 ? 1 : 0.7,
                        transition: 'all 0.5s ease',
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)',
                          backgroundColor: 'transparent',
                          p: 1.5,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#BFC5DC',
                            fontStyle: 'italic',
                            fontSize: '0.7rem',
                            mb: 0.5,
                            lineHeight: 1.3,
                          }}
                        >
                          "{t.quote}"
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: '#287e8aff',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        >
                          {t.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#BFC5DC',
                            fontSize: '0.6rem',
                          }}
                        >
                          {t.title}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              {/* DOTS */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 0.5 }}>
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: i === activeIndex ? '#00BFFF' : '#555',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Container>

        {/* ====== COUNTER SECTION (LAST) ====== */}
        <Container sx={{ py: { xs: 6, md: 8 }, borderTop: '1px solid rgba(0, 191, 255, 0.2)', mt: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            {counters.map((c, i) => (
              <Grid item xs={6} sm={6} md={3} key={i}>
                <NumberCounter start={0} {...c} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AnimatedCounters;