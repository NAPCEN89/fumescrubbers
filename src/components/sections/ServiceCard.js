import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link as MuiLink,
} from '@mui/material';
import { useTheme, keyframes } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

// Images
import designConsultingImg from '../../assets/images/design-consulting.png';
import manufacturingImg from '../../assets/images/manufacturing.png';
import installationImg from '../../assets/images/installation.png';
import maintenanceImg from '../../assets/images/maintenance.png';

// Keyframes
const slideUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideLeft = keyframes`
  0% { transform: translateX(20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

// Services
const services = [
  {
    image: designConsultingImg,
    title: 'Consulting & Design',
    description: 'We provide expert site assessment and custom engineering to design the perfect air pollution control system for your needs.',
    link: '/services/consulting-design',
  },
  {
    image: manufacturingImg,
    title: 'Manufacturing & Supply',
    description: 'We manufacture and supply a full range of high-performance air pollution control equipment, from dust collectors to scrubbers.',
    link: '/services/manufacturing',
  },
  {
    image: installationImg,
    title: 'Installation',
    description: 'Our certified technicians handle the complete installation and commissioning of all systems to ensure proper setup and functionality.',
    link: '/services/installation',
  },
  {
    image: maintenanceImg,
    title: 'Maintenance',
    description: 'We offer comprehensive maintenance plans and field servicing to keep your equipment running efficiently and extend its lifespan.',
    link: '/services/maintenance',
  },
];

export default function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (!isMobile) {
      const intervalId = setInterval(() => {
        setActiveCard((prevCard) => (prevCard + 1) % services.length);
      }, 2000);
      return () => clearInterval(intervalId);
    } else {
      setActiveCard(null);
    }
  }, [isMobile]);

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 6, md: 8 },
        background: `linear-gradient(to right, #1f2525ff, #151d1dff)`,
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* 250+ BEST-IN-CLASS HIDDEN KEYWORDS – Google LOVES THIS */}
      <Box
        sx={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          zIndex: '-1',
        }}
        aria-hidden="true"
      >
        best wet scrubber manufacturer coimbatore, best dust collector manufacturer pondicherry,
        best pp frp scrubber manufacturer tamil nadu, best venturi scrubber supplier india,
        best packed bed scrubber manufacturer coimbatore, best dry scrubber manufacturer pondicherry,
        best fume extractor manufacturer tamil nadu, best downdraft table manufacturer india,
        best pulse jet dust collector manufacturer coimbatore, best baghouse filter supplier pondicherry,
        best cyclone dust collector manufacturer tamil nadu, best cartridge dust collector coimbatore,
        best welding fume extractor manufacturer india, best portable fume extractor supplier pondicherry,
        best industrial vacuum cleaner manufacturer coimbatore, best grinding downdraft table tamil nadu,
        best plasma cutting downdraft bench manufacturer india, best woodworking dust collector coimbatore,
        best foundry dust collector manufacturer pondicherry, best pharmaceutical dust collector tamil nadu,
        best chemical scrubber manufacturer coimbatore, best so2 scrubber supplier india,
        best activated carbon scrubber manufacturer pondicherry, best emergency chlorine scrubber coimbatore,
        best biodiesel scrubber manufacturer tamil nadu, best etp odour control scrubber pondicherry,
        best stp wet scrubber manufacturer coimbatore, best air pollution control equipment manufacturer india,
        best wet scrubber design consulting coimbatore, best dust collector installation pondicherry,
        best fume extractor installation service tamil nadu, best downdraft table installation coimbatore,
        best wet scrubber commissioning service pondicherry, best dust collector amc coimbatore,
        best scrubber maintenance service tamil nadu, best pp frp scrubber fabrication pondicherry,
        best pulse jet filter supply coimbatore, best venturi scrubber installation india,
        best fume extractor maintenance pondicherry, best downdraft table amc tamil nadu,
        best air quality testing service coimbatore, best ducting design and installation pondicherry,
        best exhaust system repair coimbatore, best scrubber refurbishment service tamil nadu,
        best spare parts for dust collector pondicherry, best technical support dust collector coimbatore,
        best turnkey apc project india, best wet scrubber annual maintenance contract tamil nadu,
        best dry scrubber service provider coimbatore, best cyclone dust collector installation pondicherry,
        best cartridge filter replacement service tamil nadu, best welding fume extractor amc coimbatore,
        best portable dust collector maintenance pondicherry, best centralized fume extraction system installation,
        best grinding downdraft table service coimbatore, best plasma cutting table maintenance india,
        best woodworking dust collector amc pondicherry, best foundry dust collector service tamil nadu,
        best pharmaceutical dust collector maintenance coimbatore, best chemical scrubber installation pondicherry,
        best so2 scrubber commissioning service india, best activated carbon scrubber replacement coimbatore,
        best emergency chlorine scrubber service pondicherry, best biodiesel scrubber maintenance tamil nadu,
        best etp odour control service coimbatore, best stp wet scrubber amc pondicherry,
        best iso certified scrubber installation company tamil nadu, best air pollution control equipment service provider coimbatore,
        top wet scrubber manufacturer pondicherry, leading dust collector manufacturer tamil nadu,
        trusted fume extractor supplier coimbatore, no.1 downdraft table manufacturer india,
        high efficiency wet scrubber manufacturer coimbatore, low cost dust collector manufacturer pondicherry,
        reliable fume extractor installation service tamil nadu, professional scrubber maintenance coimbatore,
        best turnkey air pollution control project india, fast quote wet scrubber design pondicherry,
        24/7 support dust collector service coimbatore, certified engineers for scrubber installation tamil nadu,
        factory direct wet scrubber supply pondicherry, pp frp scrubber manufacturing coimbatore,
        10000 cfm dust collector installation tamil nadu, 50000 m3/hr wet scrubber commissioning india,
        best wet scrubber service coimbatore, best dust collector amc pondicherry,
        best fume extractor installation tamil nadu, best downdraft table maintenance coimbatore,
        best industrial air filtration system manufacturer india, best air pollution control equipment exporter uae saudi malaysia
      </Box>

      {/* Rich Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Napcean Air Pollution Control Services",
          "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Service",
              "name": s.title,
              "description": s.description,
              "url": `https://napcean.in${s.link}`,
              "areaServed": "Coimbatore, Pondicherry, Tamil Nadu, India, UAE, Saudi Arabia, Malaysia"
            }
          }))
        })}
      </script>

      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h6" sx={{ color: '#00BFFF', fontWeight: 600, mb: 1 }}>
          Our Services
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 6,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            maxWidth: 800,
            mx: 'auto',
            textTransform: 'uppercase',
            '&:hover': { color: '#00BFFF' },
          }}
        >
          <span>From</span>{' '}
          <Box component="span" sx={{ color: '#00BFFF' }}>
            Concept to Completion
          </Box>
        </Typography>

        <Grid
          container
          spacing={isMobile ? 2 : 4}
          direction={isMobile ? 'column' : 'row'}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={activeCard === idx ? 6 : 3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flex: isMobile ? '1 0 auto' : activeCard === idx ? 3 : 1,
                transition: isMobile ? 'none' : 'flex 0.4s ease',
              }}
            >
              <MuiLink
                component={RouterLink}
                to={service.link}
                underline="none"
                sx={{ width: '100%', textDecoration: 'none' }}
                onClick={() => !isMobile && setActiveCard(idx)}
              >
                <Card
                  sx={{
                    width: '100%',
                    height: isMobile ? 'auto' : 350,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'transparent',
                    border: '2px solid #00BFFF',
                    transition: 'all 0.4s ease',
                    boxShadow:
                      activeCard === idx && !isMobile
                        ? '0 0 20px rgba(0, 191, 255, 0.5)'
                        : '0 0 10px rgba(0, 0, 0, 0.5)',
                    zIndex: activeCard === idx ? 2 : 1,
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 0 25px rgba(0, 191, 255, 0.4)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    sx={{
                      width: '100%',
                      height: isMobile ? '200px' : activeCard === idx ? '220px' : '100%',
                      objectFit: 'cover',
                      transition: 'height 0.5s ease',
                      flexShrink: 0,
                    }}
                  />

                  {/* Desktop Active Overlay */}
                  {activeCard === idx && !isMobile && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'rgba(26, 26, 26, 0.85)',
                        backdropFilter: 'blur(8px)',
                        p: 3,
                        boxSizing: 'border-box',
                        zIndex: 3,
                        animation: `${slideUp} 0.6s ease-out`,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#00BFFF',
                          fontWeight: 700,
                          mb: 1.5,
                          fontSize: '1.25rem',
                          animation: `${slideLeft} 0.5s ease-out forwards`,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#BFC5DC',
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          animation: `${slideUp} 0.6s ease-out forwards`,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  )}

                  {/* Desktop Inactive Rotated Title */}
                  {activeCard !== idx && !isMobile && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotate(-90deg)',
                        whiteSpace: 'nowrap',
                        zIndex: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#00BFFF',
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          background: 'rgba(26, 26, 26, 0.7)',
                          px: 3,
                          py: 1.5,
                          borderRadius: 2,
                          border: '1px solid rgba(0, 191, 255, 0.4)',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  )}

                  {/* Mobile View */}
                  {isMobile && (
                    <CardContent
                      sx={{
                        p: 3,
                        background: 'rgba(26, 26, 26, 0.9)',
                        flexGrow: 1,
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#00BFFF', fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ddd', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  )}
                </Card>
              </MuiLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}