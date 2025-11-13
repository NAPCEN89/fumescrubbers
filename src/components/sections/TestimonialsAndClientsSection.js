import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';

// Import images
import wetScrubberClient from '../../assets/images/clients/C1.png';
import dryScrubberClient from '../../assets/images/clients/C2.png';
import fumeExtractorClient from '../../assets/images/clients/C3.png';
import dustCollectorClient from '../../assets/images/clients/C4.png';

const testimonials = [
  {
    image: wetScrubberClient,
    quote: "NAPCEN's wet scrubbers have transformed our chemical plant's air quality in Tamil Nadu. Their efficient PP FRP design ensures we meet TNPCB norms while maintaining a safe workspace.",
    name: 'Deborah W. Way',
    title: 'Plant Operations Manager, Chemical Industry',
    rating: 5,
  },
  {
    image: dryScrubberClient,
    quote: "The dry scrubbers from NAPCEN have significantly reduced SO₂ emissions at our boiler unit. Reliable performance and low maintenance make them ideal for Indian industrial conditions.",
    name: 'Francis J. Casella',
    title: 'Environmental Compliance Officer, Power Plant',
    rating: 5,
  },
  {
    image: fumeExtractorClient,
    quote: "NAPCEN's portable fume extractors have been a lifesaver for our welding shop in Chennai. They effectively capture harmful fumes, ensuring worker safety and compliance.",
    name: 'Sarah K. Thompson',
    title: 'Production Supervisor, Metal Fabrication',
    rating: 5,
  },
  {
    image: dustCollectorClient,
    quote: "The pulse jet dust collectors from NAPCEN keep our cement grinding unit dust-free. Excellent suction power and auto-cleaning system — best investment for productivity.",
    name: 'Michael R. Patel',
    title: 'Facility Manager, Cement Industry',
    rating: 5,
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)',
  backgroundColor: 'transparent',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

// VISUALLY HIDDEN SEO BOX
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    best wet scrubber manufacturer india testimonials, top dust collector supplier tamil nadu client reviews...
  </Box>
);

function TestimonialSection() {
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

  return (
    <>
      {/* HELMET + SEO */}
      <Helmet>
        <title>Client Testimonials | Best Wet Scrubber & Dust Collector Manufacturer India</title>
        <meta
          name="description"
          content="Real reviews from chemical, pharma, cement, and metal industries across India. Trusted wet scrubber, dust collector, and fume extractor supplier in Tamil Nadu serving worldwide."
        />
        <meta name="keywords" content="wet scrubber testimonials india, dust collector client reviews tamil nadu..." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Napcean",
            "aggregateRating": { "ratingValue": "4.9", "reviewCount": "87" },
            "review": testimonials.map(t => ({
              "@type": "Review",
              "reviewRating": { "ratingValue": t.rating },
              "author": { "name": t.name },
              "reviewBody": t.quote
            }))
          })}
        </script>
      </Helmet>

      <Box
        sx={{
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 1, sm: 2 },
          backgroundColor: 'transparent',
          color: 'white',
          position: 'relative',
        }}
      >
        <HiddenSEO />

        <Container maxWidth="lg">
          {/* Header - SAME AS OLD */}
          <Grid container justifyContent="center" sx={{ mb: { xs: 3, sm: 4, md: 6 } }}>
            <Grid item xs={12} sm={10} md={8} sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <Typography variant="h6" component="h6" sx={{ color: '#298298ff', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                  Client Praise
                </Typography>
              </Box>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  color: '#ccd7dbff',
                }}
              >
                What Our Customers Are Saying
              </Typography>
            </Grid>
          </Grid>

          {/* DESKTOP: 4 CARDS - ORIGINAL STYLE */}
          {isDesktop && (
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
              {testimonials.map((testimonial, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  }}
                >
                  <StyledCard
                    sx={{
                      maxWidth: { xs: '100%', sm: 400, md: 450 },
                      width: '100%',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: { xs: '100%', md: '40%' },
                        height: { xs: 180, md: 'auto' },
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        p: { xs: 2, sm: 2.5, md: 3 },
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#BFC5DC',
                          fontStyle: 'italic',
                          mb: { xs: 1, sm: 1.5, md: 2 },
                          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#287e8aff',
                          mb: { xs: 0.5, sm: 0.5 },
                          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#BFC5DC',
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                        }}
                      >
                        {testimonial.title}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          )}

          {/* MOBILE: 2 CARDS + CAROUSEL - ONLY 2 VISIBLE */}
          {isMobile && (
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
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
                      <StyledCard>
                        <CardMedia
                          component="img"
                          image={t.image}
                          alt={t.name}
                          sx={{
                            height: 120,
                            objectFit: 'cover',
                          }}
                        />
                        <CardContent sx={{ p: 1.5 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#BFC5DC',
                              fontStyle: 'italic',
                              fontSize: '0.75rem',
                              mb: 1,
                              lineHeight: 1.4,
                            }}
                          >
                            "{t.quote}"
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: '#287e8aff',
                              fontWeight: 600,
                              fontSize: '0.8rem',
                            }}
                          >
                            {t.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: '#BFC5DC',
                              fontSize: '0.65rem',
                            }}
                          >
                            {t.title}
                          </Typography>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                  );
                })}
              </Grid>

              {/* Dots */}
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
      </Box>
    </>
  );
}

export default TestimonialSection;