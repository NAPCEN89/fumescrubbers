import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Helmet } from 'react-helmet-async';

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

// VISUALLY HIDDEN SEO BOX – 200+ Keywords
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    best wet scrubber manufacturer india testimonials, top dust collector supplier tamil nadu client reviews,
    leading fume extractor india customer feedback, trusted downdraft table manufacturer worldwide success stories,
    best pp frp wet scrubber chemical industry review, top venturi scrubber boiler emissions control testimonial,
    best packed bed scrubber pharma voc removal india, leading pulse jet dust collector cement plant feedback,
    top cartridge dust collector woodworking tamil nadu review, best welding fume extractor metal fabrication success,
    best portable dust collector construction site india, top centralized dust collection system factory testimonial,
    best oil mist collector cnc machining review, leading explosion proof dust collector chemical plant india,
    top wet dust collector foundry emissions feedback, best downdraft table grinding polishing india success,
    best air pollution control equipment manufacturer india client praise, top scrubber exporter worldwide testimonials,
    best iso certified wet scrubber supplier tamil nadu reviews, leading dry scrubber so2 removal power plant feedback,
    top fume extractor with hepa filter clean room india, best downdraft table with spark arrestor welding review,
    best etp odour control scrubber textile industry testimonial, top stp wet scrubber sewage treatment plant india,
    best emergency chlorine scrubber safety review, leading frp blower manufacturer corrosive gas handling,
    top pp pump chemical transfer pharma industry india, best gi ducting dust collection system review,
    best hdpe ducting fume exhaust chemical plant, top ss ducting food processing plant india testimonial,
    best turnkey air pollution control project success story, top epc contractor dust collector installation india,
    best wet scrubber with plc automation review, leading dust collector auto pulse jet cleaning feedback,
    best fume extractor arm welding shop india, top mobile fume extractor price tamil nadu success,
    best laser cutting fume extractor metal fabrication review, top plasma cutting dust collector worldwide,
    best grinding dust collector foundry india testimonial, leading sanding downdraft table furniture manufacturing,
    best roof top dust collector factory india review, top silo vent filter cement silo feedback,
    best bin vent dust collector grain storage india, leading explosion proof equipment supplier tamil nadu,
    best atex certified fume extractor pharma review, top wet scrubber for boiler emissions control india,
    best dry scrubber for incinerator worldwide testimonial, leading thermal oxidizer voc destruction chemical plant,
    best catalytic converter solvent recovery paint industry india, top vapor recovery unit oil storage tank review,
    best activated carbon filter odour control etp stp india, leading hepa filter pharmaceutical dust collector,
    best ulpa filter electronics clean room india testimonial, top bag filter cement kiln dust review,
    best cartridge filter powder coating booth india, leading pulse jet valve dust collector supplier,
    best solenoid valve baghouse filter tamil nadu feedback, top filter bag high temperature manufacturer india,
    best ptfe membrane filter bag supplier review, leading venturi wet scrubber chemical plant india,
    best pp pall ring packed bed scrubber testimonial, top spray nozzle venturi scrubber india success,
    best demister pad gas liquid separation review, leading pp grating scrubber floor chemical industry,
    best frp tank chemical storage tamil nadu testimonial, top magnetic drive pump acid transfer india
  </Box>
);

function TestimonialSection() {
  return (
    <>
      {/* ============ HELMET + POWERFUL SEO ============ */}
      <Helmet>
        <title>Client Testimonials | Best Wet Scrubber & Dust Collector Manufacturer India</title>
        <meta
          name="description"
          content="Real reviews from chemical, pharma, cement, and metal industries across India. Trusted wet scrubber, dust collector, and fume extractor supplier in Tamil Nadu serving worldwide."
        />
        <meta name="keywords" content="wet scrubber testimonials india, dust collector client reviews tamil nadu, fume extractor feedback, downdraft table success stories, best air pollution control equipment reviews india" />

        {/* Structured Data - Aggregate Rating + Reviews */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Napcean",
            "url": "https://napcean.in",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "87",
              "reviewCount": "87"
            },
            "review": testimonials.map((t, i) => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": 5
              },
              "name": `${t.title} - ${t.name}`,
              "author": { "@type": "Person", "name": t.name },
              "reviewBody": t.quote,
              "publisher": { "@type": "Organization", "name": "Napcean" }
            }))
          })}
        </script>

        {/* Individual Review Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Napcean Client Testimonials",
            "itemListElement": testimonials.map((t, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Review",
                "author": { "@type": "Person", "name": t.name },
                "reviewRating": { "@type": "Rating", "ratingValue": t.rating },
                "reviewBody": t.quote
              }
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
          {/* Header */}
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
    </>
  );
}

export default TestimonialSection;