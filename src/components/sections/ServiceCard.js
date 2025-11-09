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

// Image paths for services
import designConsultingImg from '../../assets/images/design-consulting.png';
import manufacturingImg from '../../assets/images/manufacturing.png';
import installationImg from '../../assets/images/installation.png';
import maintenanceImg from '../../assets/images/maintenance.png';

// Keyframes for animations
const slideUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideLeft = keyframes`
  0% { transform: translateX(20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const services = [
  {
    image: designConsultingImg,
    title: 'Consulting & Design',
    description:
      'We provide expert site assessment and custom engineering to design the perfect air pollution control system for your needs.',
    link: '/services/consulting-design',
  },
  {
    image: manufacturingImg,
    title: 'Manufacturing & Supply',
    description:
      'We manufacture and supply a full range of high-performance air pollution control equipment, from dust collectors to scrubbers.',
    link: '/services/manufacturing',
  },
  {
    image: installationImg,
    title: 'Installation',
    description:
      'Our certified technicians handle the complete installation and commissioning of all systems to ensure proper setup and functionality.',
    link: '/services/installation',
  },
  {
    image: maintenanceImg,
    title: 'Maintenance',
    description:
      'We offer comprehensive maintenance plans and field servicing to keep your equipment running efficiently and extend its lifespan.',
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
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ color: '#00BFFF', fontWeight: 600, mb: 1 }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h2"
          component="h2"
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
                sx={{
                  width: '100%',
                  maxWidth: isMobile ? '100%' : 'auto',
                  textDecoration: 'none',
                }}
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
                    transition: isMobile ? 'none' : 'all 0.4s ease',
                    boxShadow:
                      activeCard === idx && !isMobile
                        ? '0 0 20px rgba(0, 191, 255, 0.5)'
                        : '0 0 10px rgba(0, 0, 0, 0.5)',
                    zIndex: activeCard === idx ? 2 : 1,
                    '&:hover': {
                      transform: isMobile ? 'none' : 'scale(1.02)',
                      boxShadow: isMobile
                        ? '0 0 10px rgba(0, 0, 0, 0.5)'
                        : '0 0 15px rgba(0, 191, 255, 0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: isMobile ? '200px' : activeCard === idx ? '200px' : '100%',
                      objectFit: 'cover',
                      zIndex: 1,
                      transition: isMobile ? 'none' : 'all 0.4s ease',
                    }}
                  />

                  {/* Desktop Active Card Content */}
                  {activeCard === idx && !isMobile && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'rgba(26, 26, 26, 0.7)',
                        padding: theme.spacing(2),
                        zIndex: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#00BFFF',
                          fontWeight: 700,
                          mb: 1,
                          fontSize: { xs: '1rem', md: '1.2rem' },
                          animation: `${slideLeft} 0.5s ease-out forwards`,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#BFC5DC',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          lineHeight: 1.6,
                          animation: `${slideUp} 0.5s ease-out forwards`,
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
                        transform: 'rotate(-90deg) translate(-50%, -50%)',
                        transformOrigin: 'top left',
                        whiteSpace: 'nowrap',
                        zIndex: 3,
                        transition: 'all 0.4s ease',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#151d1dff',
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          padding: theme.spacing(1, 2),
                          background: 'rgba(26, 26, 26, 0.25)',
                          backdropFilter: 'blur(5px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  )}

                  {/* Mobile Card Content */}
                  {isMobile && (
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: 2,
                        background: 'rgba(26, 26, 26, 0.7)',
                        minHeight: '100px',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#00BFFF',
                          fontWeight: 700,
                          mb: 1,
                          fontSize: '1rem',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#BFC5DC',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                        }}
                      >
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
