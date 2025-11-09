import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link as MuiLink,
  Button,
} from '@mui/material';
import { useTheme, keyframes } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Image paths for services
import designConsultingImg from '../assets/images/design-consulting.png';
import manufacturingImg from '../assets/images/manufacturing.png';
import installationImg from '../assets/images/installation.png';
import maintenanceImg from '../assets/images/maintenance.png';

// Image paths for products
import wetScrubberImg from '../assets/images/Wet-scrubber-chennai.jpg';
import dryScrubberImg from '../assets/images/Dry-scrubber-pondicherry.jpg';
import dustCollectorImg from '../assets/images/Cartridge-dust-collectors-india.jpg';
import downdraftTableImg from '../assets/images/Downdraft-table-india.jpg';
import fumeExtractorImg from '../assets/images/Acid-fume-scrubber-india.jpg';

// Define keyframes for animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const services = [
  {
    image: designConsultingImg,
    title: 'Consulting & Design',
    description:
      'At NAPCEN, we start with a detailed site assessment to tailor air pollution control systems, integrating wet and dry scrubbers, dust collectors, and more for optimal performance and compliance.',
    link: '/services/consulting-design',
  },
  {
    image: manufacturingImg,
    title: 'Manufacturing & Supply',
    description:
      'We produce high-performance equipment like wet scrubbers, dust collectors, and fume extractors, engineered to remove dust, fumes, and toxic vapors efficiently.',
    link: '/services/manufacturing',
  },
  {
    image: installationImg,
    title: 'Installation',
    description:
      'Our certified technicians provide turnkey installation, ensuring seamless setup and compliance with environmental regulations across industries.',
    link: '/services/installation',
  },
  {
    image: maintenanceImg,
    title: 'Maintenance',
    description:
      'NAPCEN offers maintenance plans with inspections and troubleshooting to ensure equipment longevity and minimal downtime.',
    link: '/services/maintenance',
  },
];

const products = [
  {
    image: wetScrubberImg,
    title: 'Wet Scrubber',
    description:
      'Wet scrubbers use liquid to remove pollutants, ideal for chemical processing and metal finishing, with variants like venturi and odor control scrubbers.',
    link: '/products/wet-scrubber',
  },
  {
    image: dryScrubberImg,
    title: 'Dry Scrubber',
    description:
      'Dry scrubbers remove acidic gases and VOCs using dry adsorption, offering economical solutions for hazardous exhaust gases.',
    link: '/products/dry-scrubber',
  },
  {
    image: dustCollectorImg,
    title: 'Dust Collector',
    description:
      'Dust collectors capture particulates from processes like grinding, enhancing air quality with variants like baghouse and cyclone collectors.',
    link: '/products/dust-collector',
  },
  {
    image: downdraftTableImg,
    title: 'Down Draft Table',
    description:
      'Downdraft tables capture dust and fumes during welding, ensuring a cleaner, safer workspace for manufacturing.',
    link: '/products/down-draft-table',
  },
  {
    image: fumeExtractorImg,
    title: 'Fume Extractor',
    description:
      'Fume extractors use HEPA and carbon filters for hazardous fumes in labs and industrial settings, customizable for soldering and more.',
    link: '/products/fume-extractor',
  },
];

export default function ServicesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const flowchartTitles = [
    'Consulting',
    'Design',
    'Manufacturing',
    'Installation',
    'Maintenance',
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        background: 'linear-gradient(to bottom, #1a2a2aff, #0d1515ff)',
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        {/* Header Section */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            textAlign: 'center',
            color: '#00BFFF',
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            animation: `${fadeIn} 0.8s ease-in`,
          }}
        >
          NAPCEN Services & Products
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 600,
            mx: 'auto',
            color: '#B0BEC5',
            mb: 6,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
          }}
        >
          Comprehensive air pollution control solutions from design to maintenance, with innovative products tailored to your industry.
        </Typography>

        {/* Services Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
            color: '#00BFFF',
            mb: 4,
            textAlign: 'center',
            borderBottom: '2px solid #00BFFF',
            pb: 1,
          }}
        >
          Our Services
        </Typography>
        {isMobile ? (
          // Mobile Layout: Stack flowchart and cards vertically
          <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 4,
                animation: `${fadeIn} 0.5s ease-in`,
              }}
            >
              {flowchartTitles.map((title, idx) => (
                <Box key={idx} sx={{ textAlign: 'center', mb: idx < flowchartTitles.length - 1 ? 1 : 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#00BFFF',
                      fontSize: { xs: '1rem', sm: '1.2rem' },
                      padding: '8px 16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(5px)',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 191, 255, 0.3)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  {idx < flowchartTitles.length - 1 && (
                    <ArrowDownwardIcon sx={{ color: '#00BFFF', fontSize: '1.5rem', my: 1 }} />
                  )}
                </Box>
              ))}
            </Box>
            {services.map((service, idx) => (
              <Grid item xs={12} key={idx} sx={{ width: '100%', maxWidth: 350, mb: 2 }}>
                <Card
                  sx={{
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(0, 191, 255, 0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 20px rgba(0, 191, 255, 0.15)',
                    },
                    animation: `${fadeIn} 0.5s ease-in ${idx * 0.2}s forwards`,
                    opacity: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      height: 100,
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <ArrowForwardIcon sx={{ color: '#00BFFF', mr: 1, fontSize: '1.2rem' }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#00BFFF',
                          fontSize: '1rem',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#B0BEC5',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        mb: 1.5,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <MuiLink
                      component={RouterLink}
                      to={service.link}
                      sx={{
                        textDecoration: 'none',
                        color: '#00BFFF',
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Learn More <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '0.9rem' }} />
                    </MuiLink>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Box>
        ) : (
          // Desktop/Tablet Layout: Three-column grid centered
          <Grid
            container
            spacing={4}
            alignItems="stretch"
            justifyContent="center"
            sx={{ minHeight: '600px' }}
          >
            <Grid item xs={12} md={4}>
              {services.map((service, idx) => (
                (idx === 1 || idx === 2) && (
                  <Box
                    key={idx}
                    sx={{
                      mb: idx === 1 ? 4 : 0,
                      mt: idx === 2 ? 4 : 0,
                      animation: `${fadeIn} 0.5s ease-in ${idx * 0.2}s forwards`,
                      opacity: 0,
                    }}
                  >
                    <Card
                      sx={{
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(0, 191, 255, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 6px 20px rgba(0, 191, 255, 0.15)',
                        },
                        maxWidth: 350,
                        mx: 'auto',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        sx={{
                          height: 100,
                          objectFit: 'cover',
                          width: '100%',
                        }}
                      />
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <ArrowForwardIcon sx={{ color: '#00BFFF', mr: 1, fontSize: '1.2rem' }} />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: '#00BFFF',
                              fontSize: '1rem',
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#B0BEC5',
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            mb: 1.5,
                          }}
                        >
                          {service.description}
                        </Typography>
                        <MuiLink
                          component={RouterLink}
                          to={service.link}
                          sx={{
                            textDecoration: 'none',
                            color: '#00BFFF',
                            fontWeight: 500,
                            fontSize: '0.85rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          Learn More <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '0.9rem' }} />
                        </MuiLink>
                      </CardContent>
                    </Card>
                  </Box>
                )
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  animation: `${fadeIn} 0.5s ease-in`,
                }}
              >
                {flowchartTitles.map((title, idx) => (
                  <Box key={idx} sx={{ textAlign: 'center', mb: idx < flowchartTitles.length - 1 ? 1 : 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#00BFFF',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '8px',
                        border: '1px solid rgba(0, 191, 255, 0.3)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      {title}
                    </Typography>
                    {idx < flowchartTitles.length - 1 && (
                      <ArrowDownwardIcon sx={{ color: '#00BFFF', fontSize: '1.5rem', my: 1 }} />
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              {services.map((service, idx) => (
                (idx === 0 || idx === 3) && (
                  <Box
                    key={idx}
                    sx={{
                      mb: idx === 0 ? 4 : 0,
                      mt: idx === 3 ? 4 : 0,
                      animation: `${fadeIn} 0.5s ease-in ${idx * 0.2}s forwards`,
                      opacity: 0,
                    }}
                  >
                    <Card
                      sx={{
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(0, 191, 255, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 6px 20px rgba(0, 191, 255, 0.15)',
                        },
                        maxWidth: 350,
                        mx: 'auto',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        sx={{
                          height: 100,
                          objectFit: 'cover',
                          width: '100%',
                        }}
                      />
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <ArrowForwardIcon sx={{ color: '#00BFFF', mr: 1, fontSize: '1.2rem' }} />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: '#00BFFF',
                              fontSize: '1rem',
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#B0BEC5',
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            mb: 1.5,
                          }}
                        >
                          {service.description}
                        </Typography>
                        <MuiLink
                          component={RouterLink}
                          to={service.link}
                          sx={{
                            textDecoration: 'none',
                            color: '#00BFFF',
                            fontWeight: 500,
                            fontSize: '0.85rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          Learn More <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '0.9rem' }} />
                        </MuiLink>
                      </CardContent>
                    </Card>
                  </Box>
                )
              ))}
            </Grid>
          </Grid>
        )}

        {/* Products Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
            color: '#00BFFF',
            mt: 6,
            mb: 4,
            textAlign: 'center',
            borderBottom: '2px solid #00BFFF',
            pb: 1,
          }}
        >
          Our Products
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {products.map((product, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={idx}
              sx={{ maxWidth: { xs: 350, sm: 400 } }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(0, 191, 255, 0.2)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 6px 20px rgba(0, 191, 255, 0.15)',
                  },
                  animation: `${fadeIn} 0.5s ease-in ${idx * 0.2}s forwards`,
                  opacity: 0,
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 100,
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <ArrowForwardIcon sx={{ color: '#00BFFF', mr: 1, fontSize: '1.2rem' }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#00BFFF',
                        fontSize: '1rem',
                      }}
                    >
                      {product.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#B0BEC5',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      mb: 1.5,
                      flexGrow: 1,
                    }}
                  >
                    {product.description}
                  </Typography>
                  <MuiLink
                    component={RouterLink}
                    to={product.link}
                    sx={{
                      textDecoration: 'none',
                      color: '#00BFFF',
                      fontWeight: 500,
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Explore Product <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '0.9rem' }} />
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#B0BEC5',
              mb: 2,
              fontSize: { xs: '1rem', sm: '1.2rem' },
            }}
          >
            Ready to enhance your air pollution control systems?
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: '#00BFFF',
              color: '#121212',
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#0288D1',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            Contact Us <ArrowForwardIcon sx={{ ml: 1, fontSize: '1rem' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}