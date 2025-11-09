import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import { styled } from '@mui/system';

// Import images and SVG from the assets directory
import wetScrubberClient from '../../assets/images/clients/C1.png';
import dryScrubberClient from '../../assets/images/clients/C2.png';
import fumeExtractorClient from '../../assets/images/clients/C3.png';
import dustCollectorClient from '../../assets/images/clients/C4.png';

const testimonials = [
  {
    image: wetScrubberClient,
    quote: "NAPCEN's wet scrubbers have transformed our facility's air quality. Their efficient design ensures we meet stringent environmental regulations while maintaining a safe workspace.",
    name: 'Deborah W. Way',
    title: 'Plant Operations Manager',
  },
  {
    image: dryScrubberClient,
    quote: "The dry scrubbers from NAPCEN have significantly reduced our emissions. Their reliable performance and low maintenance make them a game-changer for our operations.",
    name: 'Francis J. Casella',
    title: 'Environmental Compliance Officer',
  },
  {
    image: fumeExtractorClient,
    quote: "NAPCEN's fume extractors have been a lifesaver for our manufacturing line. They effectively capture harmful fumes, ensuring a healthier environment for our workers.",
    name: 'Sarah K. Thompson',
    title: 'Production Supervisor',
  },
  {
    image: dustCollectorClient,
    quote: "The dust collectors provided by NAPCEN are top-notch. They keep our facility clean and protect our equipment, boosting overall productivity and safety.",
    name: 'Michael R. Patel',
    title: 'Facility Manager',
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

function TestimonialSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 1, sm: 2 },
        backgroundColor: 'transparent',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        {/* Header and Title Centered */}
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

        {/* Testimonial Cards */}
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
      </Container>
    </Box>
  );
}

export default TestimonialSection;