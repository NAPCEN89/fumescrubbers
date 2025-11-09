import React, { useState, useEffect, Suspense } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/system';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaDribbble } from 'react-icons/fa';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import stpOdorControlImage from '../assets/images/resource/all type of dry scrubber/20.jpg';
import Logo from '../assets/images/Napcen-logo.png';
import companyCatalogPdf from '../assets/document/details/napcen.pdf';
import productBrochurePdf from '../assets/document/details/baghouse.pdf'; // Adjust path if needed
import ResourcesAndQuote from '../components/sections/ResourcesAndQuote';

// Lazy load components to reduce circular dependency risks
const DryScrubber = React.lazy(() => import('../components/ReusableProducts/DryScrubber'));
const CounterSection = React.lazy(() => import('../components/sections/CounterSection'));

// Footer Styles
const StyledFooter = styled('footer')(({ theme }) => ({
  background: `url(${require('../assets/images/background/2.jpg')}) no-repeat center center`,
  backgroundSize: 'cover',
  backgroundColor: 'rgba(51, 51, 51, 0.5)',
  color: '#ffffff',
  padding: theme.spacing(8, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #808080, #2F2F2F)',
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  color: '#fff',
}));

const PlainCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  color: '#fff',
}));

const PhoneIcon = () => (
  <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);

const MapMarkerIcon = () => (
  <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
  </svg>
);

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h3: {
      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem', lg: '2rem' },
    },
    h4: {
      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' },
    },
    h5: {
      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
    },
    body1: {
      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
    },
    body2: {
      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
    },
    subtitle1: {
      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'white',
          textDecoration: 'none',
          '&:hover': {
            color: '#00BFFF',
          },
        },
      },
    },
  },
});

// Helper component for the list of items
const ProductDetailsList = ({ items }) => (
  <List
    dense
    sx={{
      pl: { xs: 1, sm: 2, md: 3 },
      listStyle: 'disc',
      '& .MuiListItem-root': { display: 'list-item', mb: { xs: 0.5, sm: 1 } },
    }}
  >
    {items.map((item, index) => (
      <ListItem key={index} disableGutters>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
          }}
        >
          {item}
        </Typography>
      </ListItem>
    ))}
  </List>
);

const sections = [
  {
    title: 'Technical Details',
    details: [
      'Dry scrubbing technology',
      'Biofiltration layers',
      'Automated chemical dosing',
      'High-efficiency filters',
      'Odor monitoring sensors',
    ],
  },
  {
    title: 'Applications',
    details: [
      'Municipal sewage plants',
      'Industrial wastewater treatment',
      'Pumping stations',
      'Sludge processing units',
      'Wastewater collection systems',
    ],
  },
  {
    title: 'Materials',
    details: [
      'Stainless steel housing',
      'FRP construction',
      'Activated carbon media',
      'Corrosion-resistant ducting',
      'UV-resistant coatings',
    ],
  },
  {
    title: 'Accessories',
    details: [
      'Odor monitoring sensors',
      'Chemical dosing systems',
      'Biofilter media',
      'Remote control systems',
      'Weatherproof enclosures',
    ],
  },
];

const STPOdorControl = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  // Auto-cycle through tabs every 4 seconds
  useEffect(() => {
    if (isMobile || !isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveTab((prevIndex) => (prevIndex + 1) % sections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile, isAutoCycling]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setIsAutoCycling(false);
    // Resume auto-cycling after 10 seconds
    setTimeout(() => {
      setIsAutoCycling(true);
    }, 10000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>STP Odor Control System Manufacturers in Chennai</title>
        <meta
          name="description"
          content="Explore NAPCEN's STP Odor Control System, designed to neutralize foul odors from sewage treatment plants, ensuring clean air and regulatory compliance."
        />
      </Helmet>

      {/* Page Title Section */}
      <Box
        sx={{
          background: `linear-gradient(to left, #334746ff, #151d1dff)`,
          py: { xs: 4, sm: 6, md: 8, lg: 10 },
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: 'auto', sm: '30vh', md: '35vh', lg: '40vh' },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
          '> *': {
            zIndex: 2,
            position: 'relative',
          },
        }}
      >
        <Container sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#00BFFF' }}
          >
            STP Odor Control System
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: { xs: 1, sm: 2 },
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
            }}
          >
            <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </RouterLink>{' '}
            /{' '}
            <RouterLink
              to="/dry-scrubbers/stp-odor"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              STP Odor Control System
            </RouterLink>
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container
        sx={{
          py: { xs: 2, sm: 3, md: 4, lg: 6 },
          backgroundColor: 'transparent',
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          sx={{ justifyContent: 'center' }}
        >
          {/* Image and Description in a Single Row */}
          <Grid container item xs={12} spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
            {/* Image Container */}
            <Grid item xs={12} md={6} sx={{ maxWidth: '400px' }}>
              <Paper
                elevation={8}
                sx={{
                  height: { xs: 150, sm: 200, md: 250, lg: 300 },
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 500, md: 600, lg: 700 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: '#1C1C1E',
                  border: '1px solid rgba(0, 191, 255, 0.15)',
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                <Box
                  component="img"
                  src={stpOdorControlImage}
                  alt="STP Odor Control System"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 1,
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </Paper>
            </Grid>
            {/* Description Card */}
            <Grid item xs={12} md={6} sx={{ maxWidth: '700px' }}>
              <Card
                sx={{
                  p: { xs: 1, sm: 2, md: 3 },
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(0, 191, 255, 0.15)',
                  height: { xs: 'auto', sm: 200, md: 250, lg: 300 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  boxSizing: 'border-box',
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 500, md: 600, lg: 700 },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                <CardContent sx={{ p: 0, overflowY: 'auto' }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      color: 'rgba(20, 77, 157, 1)',
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' },
                    }}
                  >
                    STP Odor Control System
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      wordBreak: 'break-word',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                    }}
                  >
                    NAPCEN's STP Odor Control System neutralizes foul odors from sewage treatment plants, ensuring clean air and regulatory compliance.
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mt: { xs: 1, sm: 2 },
                      mb: { xs: 1, sm: 2 },
                      borderLeft: '4px solid',
                      borderColor: '#00BFFF',
                      pl: 1,
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
                    }}
                  >
                    Key Features
                  </Typography>
                  <ProductDetailsList
                    items={[
                      'Dry scrubbing technology',
                      'Biofiltration integration',
                      'Automated chemical dosing',
                      'High-efficiency filters',
                    ]}
                  />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mt: { xs: 1, sm: 2 },
                      mb: { xs: 1, sm: 2 },
                      borderLeft: '4px solid',
                      borderColor: '#00BFFF',
                      pl: 1,
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
                    }}
                  >
                    Key Applications
                  </Typography>
                  <ProductDetailsList
                    items={[
                      'Municipal sewage plants',
                      'Industrial wastewater facilities',
                      'Pumping stations',
                      'Sludge processing units',
                    ]}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/* Working Principles Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 1, sm: 2, md: 3 },
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                height: '100%',
                minHeight: { xs: 'auto', sm: 200, md: 250, lg: 300 },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mt: 0,
                    mb: { xs: 1, sm: 2 },
                    borderLeft: '4px solid',
                    borderColor: '#00BFFF',
                    pl: 1,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
                  }}
                >
                  Working Principles
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  Air is drawn through dry scrubbers and biofilters, neutralizing odor-causing gases like H2S.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Services Info Card with Auto-Cycling Tabs */}
          <Grid item xs={12} md={8}>
            <Grid
              container
              spacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  sx={{
                    p: { xs: 1, sm: 2, md: 3 },
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 191, 255, 0.1)',
                    border: '2px solid #00BFFF',
                    mt: { xs: 1, sm: 2, md: 3 },
                    boxShadow: '0 6px 20px rgba(0, 191, 255, 0.3)',
                    minHeight: { xs: 'auto', sm: 200, md: 250, lg: 300 },
                    width: '100%',
                  }}
                  onMouseEnter={() => setIsAutoCycling(false)}
                  onMouseLeave={() => setTimeout(() => setIsAutoCycling(true), 10000)}
                >
                  <CardContent>
                    <Grid container spacing={{ xs: 1, sm: 2 }}>
                      {/* Left Column: Titles */}
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            borderRight: {
                              xs: 'none',
                              sm: '2px solid #00BFFF',
                            },
                            pb: { xs: 1, sm: 0 },
                            pr: { xs: 0, sm: 2 },
                          }}
                        >
                          {sections.map((section, index) => (
                            <Box
                              key={index}
                              onClick={() => handleTabClick(index)}
                              sx={{
                                cursor: 'pointer',
                                py: { xs: 0.5, sm: 1 },
                                px: { xs: 1, sm: 2 },
                                mb: { xs: 0.5, sm: 1 },
                                borderRadius: 1,
                                backgroundColor: activeTab === index ? '#00BFFF' : 'transparent',
                                color: activeTab === index ? '#151d1d' : 'white',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                  backgroundColor: '#00BFFF',
                                  color: '#151d1d',
                                },
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontSize: {
                                    xs: '0.75rem',
                                    sm: '0.85rem',
                                    md: '0.9rem',
                                    lg: '1rem',
                                  },
                                }}
                              >
                                {section.title}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Grid>
                      {/* Right Column: Details */}
                      <Grid item xs={12} sm={7}>
                        <Box sx={{ pl: { xs: 0, sm: 2 }, pt: { xs: 1, sm: 0 } }}>
                          <ProductDetailsList items={sections[activeTab].details} />
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <ResourcesAndQuote/>
      {/* Lazy-loaded Components */}
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <DryScrubber activeLink="/stp-odor" />
        <CounterSection />
      </Suspense>

   
    </ThemeProvider>
  );
};

export default STPOdorControl;