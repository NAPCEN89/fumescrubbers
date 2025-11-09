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
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WetScrubbersList from '../components/ReusableProducts/WetScrubber'; // This component might need renaming or logic change
import CounterSection from '../components/sections/CounterSection';
import ResourcesAndQuote from '../components/sections/ResourcesAndQuote';
import companyCatalogPdf from '../assets/document/details/napcen.pdf';
import productBrochurePdf from '../assets/document/details/baghouse.pdf';
// Note: You will need to replace this with an image for a welding scrubber
import weldingScrubberImage from '../assets/images/products/Downdraft tbale/welding-downdraft-table.jpg'
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

const WeldingScrubberPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const muiTheme = useTheme();
  const isXsScreen = useMediaQuery(muiTheme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.down('md'));

  const sections = [
    {
      title: 'Applications',
      details: [
        'Welding and Fabrication Shops',
        'Automotive Manufacturing',
        'Aerospace Industry',
        'Metal Finishing and Grinding',
        'Heavy Machinery Production',
        'Shipbuilding and Repair',
        'Foundries and Smelters',
        'General Industrial Fume Control',
      ],
    },
    {
      title: 'Features & Benefits',
      details: [
        'High efficiency in removing fumes and particulates',
        'Compact and modular design for easy installation',
        'Low maintenance and operational costs',
        'Durable construction materials for long service life',
        'Customizable to various airflow requirements',
        'Compliance with environmental regulations',
        'Improved workplace air quality and safety',
      ],
    },
    {
      title: 'Materials of Construction',
      details: [
        'Corrosion-resistant steel (SS 304, SS 316)',
        'Heavy-duty Mild Steel with protective coating',
        'Fiberglass Reinforced Plastic (FRP) for chemical resistance',
        'Galvanized steel',
        'Specific alloys for highly corrosive environments',
      ],
    },
    {
      title: 'Accessories',
      details: [
        'Pre-filters for larger particles',
        'Automatic sludge removal system',
        'Recirculation liquid pumps',
        'Control panel with VFD',
        'pH and ORP monitoring systems',
        'Ducting and hooding for fume capture',
        'Effluent treatment system for spent scrubbing liquid',
      ],
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % sections.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [sections.length]);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Welding Fume Scrubber Manufacturers in Chennai</title>
        <meta
          name="description"
          content="NAPCEN manufactures high-performance Welding Fume Scrubbers to effectively capture and neutralize hazardous fumes and particulates, ensuring a safe and clean working environment."
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
            Welding Fume Scrubber
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
              to="/welding-scrubber"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Welding Scrubber
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
                  src={weldingScrubberImage}
                  alt="Welding Fume Scrubber"
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
            <Grid item xs={12} md={6} sx={{maxWidth:'700px'}}>
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
                    Welding Fume Scrubber
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
                    A Welding Fume Scrubber is an essential air pollution control system designed to protect workers and the environment from the hazardous fumes and particulates generated during welding, soldering, and other metalworking processes. Unlike general-purpose scrubbers, these systems are specifically engineered to capture and neutralize ultrafine metallic particles and gases, ensuring compliance with strict occupational health and safety standards.
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
                  Welding Fume Scrubbers operate by drawing contaminated air through a specialized capture hood and into the scrubber unit. The air passes through a series of stages. In a wet scrubber design, the air is brought into contact with a scrubbing liquid (usually water) in a spray chamber or packed bed. The ultrafine welding particulates and soluble gases are captured by the liquid droplets. The cleaned air, now free of hazardous fumes, is discharged into the atmosphere, while the contaminated liquid is treated and recycled or properly disposed of.
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
                  NAPCEN: A Leading Welding Scrubber Manufacturer
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: '#e9e9f0ff',
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  NAPCEN specializes in the design and manufacturing of high-efficiency Welding Fume Scrubbers. Our systems are built to provide superior performance in controlling hazardous fumes, ensuring compliance with environmental and safety standards.
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
                      Expertise in Fume Control Technology
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#e9e9f0ff', p: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ color: 'black', fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' } }}>
                      Our engineers leverage advanced technology to design Welding Scrubbers that effectively capture and neutralize a wide range of metal fumes and gases, including those from welding, cutting, and grinding operations.
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
                      Customized Solutions for Safety
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#e9e9f0ff', p: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ color: 'black', fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' } }}>
                      We offer custom-engineered Welding Scrubbers tailored to the specific needs of your facility, ensuring optimal fume capture and effective removal of harmful airborne contaminants for a safer workplace.
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
                      Reliable and Low-Maintenance Operation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#e9e9f0ff', p: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ color: 'black', fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' } }}>
                      NAPCEN's Welding Scrubbers are designed for robust, continuous operation with minimal supervision and easy maintenance, providing a cost-effective and reliable solution for industrial air purification.
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
      <WetScrubbersList activeLink="/welding-scrubber" />
    </ThemeProvider>
  );
};

export default WeldingScrubberPage;