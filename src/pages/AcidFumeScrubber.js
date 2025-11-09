import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Link as MuiLink,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ButtonBase, // Added for clickable Paper
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WetScrubbersList from '../components/ReusableProducts/WetScrubber';
import CounterSection from '../components/sections/CounterSection';
import ResourcesAndQuote from '../components/sections/ResourcesAndQuote.js';

// 1. IMPORT *BOTH* ASSETS DIRECTLY FROM SRC/ASSETS
import acidFumeScrubberImage from '../assets/images/products/Wet scrubber/Acid-fume-scrubber-chennai.jpg';
// Product-Specific Brochure (Used for this page only)


// Helper component for the list of items
const ProductDetailsList = ({ items }) => (
  <List
    dense
    sx={{
      pl: { xs: 1, sm: 2, md: 3 },
      listStyle: 'disc',
      '& .MuiListItem-root': { display: 'list-item' },
    }}
  >
    {items.map((item, index) => (
      <ListItem key={index} disableGutters>
        <Typography variant="body2">{item}</Typography>
      </ListItem>
    ))}
  </List>
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

const AcidFumeScrubberPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false); 

  const muiTheme = useTheme();
  const isXsScreen = useMediaQuery(muiTheme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.down('md'));

  const sections = [
    {
      title: 'Applications',
      details: [
        'Chemical and pharmaceutical industries',
        'Metal plating and finishing',
        'Semiconductor manufacturing',
        'Battery manufacturing',
        'Food and beverage processing',
        'Fertilizer production',
        'Waste incineration',
        'Laboratory exhaust systems',
        'Pickling and etching operations',
        'General chemical processing',
      ],
    },
    {
      title: 'Materials of Construction',
      details: [
        'FRP (Fiberglass Reinforced Plastic)',
        'Polypropylene (PP)',
        'Polyethylene (PE)',
        'PVC and CPVC',
        'Stainless steel (SS 316, 304, etc.)',
        'Nickel alloys (for highly corrosive environments)',
      ],
    },
    {
      title: 'Accessories',
      details: [
        'Scrubber body (FRP, PP, etc.)',
        'Chemical recirculation pump',
        'Mist eliminator',
        'Recirculation liquid distribution system',
        'Packing media (plastic or ceramic)',
        'pH control system with chemical dosing pumps',
        'Recirculation tank',
        'Gas flow meters and pressure gauges',
        'Safety interlocks',
        'Fan/Blower unit',
      ],
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % sections.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [sections.length]);

  const handlePresentationClick = () => {
    // Toggle the state for an 'expand' action
    setIsPresentationOpen(prev => !prev); 
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Acid Fume Scrubber Manufacturers in Chennai</title>
        <meta
          name="description"
          content="As a leading Acid Fume Scrubber Manufacturer, NAPCEN offers advanced systems for neutralizing acidic gases and vapors from industrial processes, ensuring compliance and safety."
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
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#00BFFF' }}
          >
            Acid Fume Scrubber
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: { xs: 1, sm: 2 }, mb: { xs: 2, sm: 3 } }}
          >
            <RouterLink
              to="/"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Home
            </RouterLink>{' '}
            /{' '}
            <RouterLink
              to="/wet-scrubbers/acid-fume"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Acid Fume Scrubber
            </RouterLink>
          </Typography>

          
        </Container>
      </Box>
      
      {/* ----------------------------------------------------- */}
      {/* Main Content */}
      {/* ----------------------------------------------------- */}
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
          <Grid container item xs={12} spacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* Image Container */}
            <Grid item xs={12} md={6} sx={{maxWidth:'400px'}}> 
              <Paper
                elevation={8}
                sx={{
                  height: { xs: 150, sm: 200, md: 250, lg: 300 },
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: '#1C1C1E',
                  border: '1px solid rgba(0, 191, 255, 0.15)',
                  mb: 0,
                }}
              >
                <Box
                  component="img"
                  src={acidFumeScrubberImage}
                  alt="Acid Fume Scrubber"
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
            <Grid item xs={12} md={6} sx={{maxWidth:'600px'}}>
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
                  maxWidth: { xs: '100%', md: '600px' },
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
                    Acid Fume Scrubber
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      wordBreak: 'break-word',
                      maxHeight: '100%',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                    }}
                  >
                    An Acid Fume Scrubber is an essential air pollution control system designed specifically to neutralize and remove acidic gases and vapors from industrial exhaust streams. By using a liquid reagent, typically an alkaline solution, these scrubbers convert harmful acidic pollutants into a non-toxic salt, ensuring industrial operations meet strict environmental regulations for air quality.
                  </Typography>
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
                minHeight: { xs: 'auto', md: 250 },
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
                  Acid Fume Scrubbers operate on the principle of **chemical absorption**. Pollutant-laden gas containing acidic fumes (such as HCl, SOx, or NOx) enters the scrubber and flows upward through a packed media bed. An alkaline scrubbing liquid, usually a sodium hydroxide ($NaOH$) solution, is sprayed from the top, flowing downward and reacting with the acidic gases. This neutralization reaction forms a harmless salt. The packing media ensures maximum contact between the gas and liquid phases, facilitating efficient pollutant removal. The cleaned gas exits the top, while the liquid, now containing dissolved salts, is recirculated or treated for disposal.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Accordion Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 1, sm: 2, md: 3 },
                borderRadius: 2,
                backgroundColor: '#1C1C1E',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                height: '100%',
                minHeight: { xs: 'auto', md: 250 },
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mt: 0,
                    mb: { xs: 1, sm: 2 },
                    fontWeight: 'bold',
                    color: '#00BFFF',
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' },
                  }}
                >
                  NAPCEN: A Leading Acid Fume Scrubber Manufacturer
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: '#e9e9f0ff',
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  NAPCEN is a trusted leader in air pollution control, recognized as one of India's premier manufacturers of Acid Fume Scrubbers. Our dedication to innovation and quality delivers high-performance scrubbers that meet global environmental standards.
                </Typography>
                <Accordion
                  defaultExpanded
                  sx={{ '&:before': { display: 'none' }, mb: { xs: 1, sm: 2 } }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: '#00BFFF',
                          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                        }}
                      />
                    }
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 1,
                      minHeight: { xs: 40, sm: 48 },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{
                        color: '#00BFFF',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                      }}
                    >
                      Expertise in Acid Fume Scrubber Technology
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#e9e9f0ff', p: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ color: 'black', fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' } }}>
                      NAPCEN's engineers leverage advanced technology to design Acid Fume Scrubbers that ensure superior performance, durability, and adaptability to diverse industrial applications.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ '&:before': { display: 'none' }, mb: { xs: 1, sm: 2 } }}>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: '#00BFFF',
                          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                        }}
                      />
                    }
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 1,
                      minHeight: { xs: 40, sm: 48 },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{
                        color: '#00BFFF',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                      }}
                    >
                      Tailored Solutions for Industrial Needs
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#e9e9f0ff', p: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ color: 'black', fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' } }}>
                      NAPCEN offers custom-engineered Acid Fume Scrubbers for industries like chemical processing, metal finishing, and battery manufacturing, ensuring optimal pollutant removal and compliance.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ '&:before': { display: 'none' } }}>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: '#00BFFF',
                          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                        }}
                      />
                    }
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 1,
                      minHeight: { xs: 40, sm: 48 },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{
                        color: '#00BFFF',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                      }}
                    >
                      Energy-efficient and Cost-effective Designs
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#e9e9f0ff', p: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ color: 'black', fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' } }}>
                      NAPCEN's Acid Fume Scrubbers are designed for low energy consumption and minimal maintenance, providing cost-effective solutions for sustainable industrial operations.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>

          {/* Main Info Card with Left/Right Sections */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                              onClick={() => setActiveTab(index)}
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
      <CounterSection />
      <WetScrubbersList activeLink="/acid-fume" />
    </ThemeProvider>
  );
};

export default AcidFumeScrubberPage;