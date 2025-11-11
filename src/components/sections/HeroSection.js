import React, { useState, useLayoutEffect } from 'react';
import { Box, Typography, Button, Container, Stack, Fade } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom'; // ← ADDED FOR LINKS
import heroBackground from '../../assets/images/bgnap.jpeg';
import heroVideo from '../../assets/images/napcenBg.mp4';

const theme = createTheme({
  typography: { fontFamily: ['"Poppins"', 'sans-serif'].join(',') },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '50px',
          padding: { xs: '8px 16px', sm: '10px 24px' },
          fontSize: { xs: '0.85rem', sm: '0.95rem' },
          transition: 'all 0.4s ease-in-out',
        },
      },
    },
  },
});

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = React.useRef(null);

  const handleVideoReady = () => setVideoLoaded(true);

  useLayoutEffect(() => {
    if (videoRef.current) {
      videoRef.current.loading = 'eager';
      videoRef.current.fetchPriority = 'high';
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* ============ MAXIMIZED HIDDEN SEO FOR GOOGLE CRAWLERS ============ */}
      <Helmet>
        <title>Leading Air Pollution Control Equipment Manufacturer in India | Napcean</title>
        <meta
          name="description"
          content="India's trusted manufacturer of Wet Scrubbers, Dry Scrubbers, Dust Collectors, Downdraft Tables, and Fume Extractors. ISO Certified. Serving India, Tamil Nadu, and global clients."
        />
        <link rel="canonical" href="https://napcean.in/" />

        <meta property="og:title" content="Napcean — Air Pollution Control Systems Expert" />
        <meta property="og:description" content="High-quality, factory-direct air pollution control equipment for industrial use." />
        <meta property="og:image" content="https://napcean.in/og-home.jpg" />
        <meta property="og:url" content="https://napcean.in/" />

        <meta name="keywords" content="top wet scrubber manufacturer india, leading dust collector supplier india, best dry scrubber price tamil nadu, largest downdraft table manufacturer pondicherry, top fume extractor manufacturer, largest pp frp wet scrubber, top venturi scrubber manufacturer india, leading packed bed scrubber india, top cyclone dust collector, leading cartridge dust collector price india, largest welding downdraft table, top portable fume extractor, high capacity dust collector price, largest air pollution control equipment india, top wet scrubber cost in india, manufacturer Pondicherry, supplier Tamil Nadu, exporter UAE, exporter Saudi, exporter Malaysia" />

        {/* ALL YOUR POWERFUL SCHEMA & KEYWORDS – UNTOUCHED */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Napcean Engineering - Global Air Pollution Control Solutions",
            "url": "https://napcean.in",
            "keywords": [
              "acid fume scrubber manufacturer india", "hcl scrubber supplier", "chlorine scrubber emergency", "ammonia scrubber price", "packed tower scrubber", "venturi scrubber for dust", "jet venturi scrubber", "pp frp wet scrubber manufacturer", "chemical processing scrubber", "pharmaceutical scrubber system", "odour control scrubber ETP STP", "boiler exhaust wet scrubber",
              "dry scrubber for so2 removal", "activated carbon scrubber", "bicarb dry scrubber", "catalytic dry scrubber price", "dry scrubber system supplier india",
              "pulse jet bag filter manufacturer", "reverse air dust collector", "shaker dust collector", "cartridge dust collector manufacturer", "cyclone dust collector for grinding", "portable dust collector for welding", "industrial dust collection system cost", "high volume dust collector 10000 CFM", "pharmaceutical dust collector", "foundry dust collector", "woodworking dust collector india", "cement dust collector",
              "welding fume extractor arm", "mobile fume extractor price", "fume extraction hood", "laser cutting fume extractor", "downdraft table for grinding and polishing", "plasma cutting downdraft table", "bench downdraft table", "wet downdraft table supplier",
              "best air pollution control equipment india", "top scrubber exporter", "ISO 9001 scrubber manufacturer pondicherry", "wet scrubber installation service tamil nadu"
            ],
            "description": "Leading manufacturer and global exporter of Wet Scrubber, Dry Scrubber, Dust Collector, Downdraft Table & Fume Extractor systems from Pondicherry, India.",
            "address": { "@type": "PostalAddress", "addressLocality": "Puducherry", "addressRegion": "PY", "addressCountry": "IN" }
          })}
        </script>

        {/* ALL OTHER SCHEMA (FAQ, ItemList, VideoObject) – KEPT 100% SAME */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Napcean Engineering",
            "url": "https://napcean.in",
            "description": "Manufacturer of wet scrubbers, dry scrubbers, dust collectors, downdraft tables and fume extractors. Based in Pondicherry, serving Tamil Nadu, India and worldwide.",
            "address": { "@type": "PostalAddress", "addressLocality": "Puducherry", "addressRegion": "PY", "addressCountry": "IN" },
            "areaServed": ["Puducherry", "Tamil Nadu", "India", "Worldwide"]
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you supply outside Tamil Nadu and India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are a global exporter. We install and support across India, UAE, Saudi Arabia, Malaysia, and other international locations." } },
              { "@type": "Question", "name": "What is the price of a wet scrubber?", "acceptedAnswer": { "@type": "Answer", "text": "Our PP FRP systems start from competitive factory-direct pricing. Contact us for a quote tailored to your flow rate and application within 2 hours." } },
              { "@type": "Question", "name": "What are your core air pollution control products?", "acceptedAnswer": { "@type": "Answer", "text": "We manufacture Wet Scrubbers (Packed Bed, Venturi), Dry Scrubbers, Pulse Jet Dust Collectors (Cartridge & Bag Filter), Downdraft Tables, and Fume Extractors." } }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Industrial Air Pollution Control Products by Napcean",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "Product", "name": "Wet Scrubbers (Packed Bed & Venturi)" } },
              { "@type": "ListItem", "position": 2, "item": { "@type": "Product", "name": "Dry Scrubbers (SO2 Removal)" } },
              { "@type": "ListItem", "position": 3, "item": { "@type": "Product", "name": "Dust Collectors (Pulse Jet & Cartridge)" } },
              { "@type": "ListItem", "position": 4, "item": { "@type": "Product", "name": "Downdraft Tables (Grinding & Welding)" } },
              { "@type": "ListItem", "position": 5, "item": { "@type": "Product", "name": "Fume Extractors (Portable & Arm)" } }
            ]
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Napcean Factory Video: Wet Scrubber & Dust Collector Manufacturing",
            "description": "Footage of high-quality PP FRP Wet Scrubber and Dust Collector manufacturing process in our Pondicherry factory.",
            "thumbnailUrl": "https://napcean.in/og-home.jpg",
            "uploadDate": "2025-11-11",
            "contentUrl": heroVideo
          })}
        </script>

        <link rel="preload" href={heroVideo} as="video" type="video/mp4" fetchpriority="high" crossorigin="anonymous" />
      </Helmet>

      {/* ============ HERO CONTENT WITH CLICKABLE BUTTONS ============ */}
      <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%', zIndex: 1,
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%', zIndex: 2,
              background: 'linear-gradient(rgba(15,15,15,0.18), rgba(21,20,20,0.5))',
            },
          }}
        >
          <Fade in={videoLoaded} timeout={1000}>
            <video
              ref={videoRef}
              autoPlay muted loop playsInline
              preload="auto" fetchPriority="high"
              poster={heroBackground}
              onCanPlay={handleVideoReady}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, position: 'absolute', top: 0, left: 0 }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </Fade>
        </Box>

        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, zIndex: 3, textAlign: 'center', px: { xs: 2, sm: 3, md: 4 }, py: { xs: 8, sm: 12, md: 16 } }}>
          <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
            <Fade in timeout={1500}>
              <Typography variant="h1" component="h1" sx={{ fontWeight: 900, lineHeight: 1.1, fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' }, textShadow: '4px 4px 12px rgba(0,0,0,0.9)' }}>
                Industrial Air Pollution Control Solutions
              </Typography>
            </Fade>
          </Box>

          <Fade in timeout={1800} style={{ transitionDelay: '0.5s' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, mb: { xs: 1, sm: 2 }, textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              Wet Scrubber • Dry Scrubber • Dust Collector • Fume Extraction
            </Typography>
          </Fade>

          <Fade in timeout={2100} style={{ transitionDelay: '0.7s' }}>
            <Typography variant="h5" component="p" sx={{ fontSize: { xs: '0.95rem', sm: '1.15rem', md: '1.35rem' }, maxWidth: { xs: '92%', sm: '780px' }, margin: '0 auto', mb: { xs: 3, sm: 4, md: 6 }, textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              "Trusted manufacturer in Pondicherry, offering factory-direct prices across India and to clients worldwide."
            </Typography>
          </Fade>

          {/* <Fade in timeout={2400} style={{ transitionDelay: '0.9s' }}>
            <Typography variant="h6" component="p" sx={{ fontSize: { xs: '0.85rem', sm: '1rem' }, mb: { xs: 3, sm: 4 }, textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              ISO Certified • Quotes in 2 hours • Installation & AMC support
            </Typography>
          </Fade> */}

          {/* CLICKABLE BUTTONS WITH LINKS */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 2 }} sx={{ mt: 2, justifyContent: 'center' }}>
            <Button
              component={RouterLink}
              to="/products"
              variant="contained"
              sx={{
                width: { xs: '90%', sm: 'auto' },
                minWidth: 200,
                backgroundColor: 'rgba(0, 191, 255, 0.8)',
                '&:hover': { backgroundColor: '#00BFFF', transform: 'scale(1.05)' },
              }}
            >
              Explore Products
            </Button>

            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              sx={{
                width: { xs: '90%', sm: 'auto' },
                minWidth: 200,
                color: 'white',
                borderColor: 'rgba(255,255,255,0.5)',
                '&:hover': { borderColor: 'white', transform: 'scale(1.05)' },
              }}
            >
              Get a Quote
            </Button>
          </Stack>

          <Typography component="p" sx={{ mt: 3, opacity: 0.9, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
            Serving Puducherry • Tamil Nadu • Pan-India • Worldwide
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default HeroSection;