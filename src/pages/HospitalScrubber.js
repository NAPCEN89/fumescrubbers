import React, { useState } from 'react';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WetScrubbersList from '../components/ReusableProducts/WetScrubber';
import CounterSection from '../components/sections/CounterSection';
import hospitalWasteIncineratorScrubberImage from '../assets/images/products/Wet scrubber/Hospital-waste-Incinerator-wet scrubber-manufacturers.jpg';
import ResourcesAndQuote from '../components/sections/ResourcesAndQuote';

// Import PDFs
import companyCatalogPdf from '../assets/document/details/napcen.pdf';
import productBrochurePdf from '../assets/document/details/baghouse.pdf'; // Update to specific PDF when available

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

const HospitalWasteIncineratorWetScrubberPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const muiTheme = useTheme();
  const isXsScreen = useMediaQuery(muiTheme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  // Sections for tabbed content
  const sections = [
    {
      title: 'Applications',
      details: [
        'Hospital waste incineration for emission control.',
        'Medical waste facilities for safe disposal.',
        'Pathological waste treatment to neutralize toxins.',
        'Pharmaceutical incineration for regulatory compliance.',
        'Infectious waste processing for environmental safety.',
      ],
    },
    {
      title: 'Materials of Construction',
      details: [
        'Stainless steel for corrosion resistance.',
        'FRP construction for durability in harsh environments.',
        'Polypropylene materials for chemical compatibility.',
        'Hastelloy components for high-corrosion resistance.',
        'PTFE-lined parts for enhanced chemical protection.',
      ],
    },
    {
      title: 'Accessories',
      details: [
        'Mist eliminator for removing liquid droplets.',
        'Recirculation pumps for efficient liquid flow.',
        'Gas flow meters for accurate monitoring.',
        'High-efficiency packing media for optimal contact.',
        'pH control system for neutralizing solutions.',
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Hospital Waste Incinerator Wet Scrubber Manufacturers in Chennai</title>
        <meta
          name="description"
          content="Discover NAPCEN's Hospital Waste Incinerator Wet Scrubber, a high-performance solution designed to neutralize harmful emissions from medical waste incineration, ensuring compliance and environmental safety."
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
            Hospital Waste Incinerator Wet Scrubber
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
              to="/wet-scrubbers/hospital"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Hospital Waste Incinerator Wet Scrubber
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
                  src={hospitalWasteIncineratorScrubberImage}
                  alt="Hospital Waste Incinerator Wet Scrubber"
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
            <Grid item xs={12} md={6} sx={{ maxWidth: '600px' }}>
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
                    Hospital Waste Incinerator Wet Scrubber
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      wordBreak: 'break-word',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                    }}
                  >
                    NAPCEN's Hospital Waste Incinerator Wet Scrubber uses advanced wet scrubbing technology to neutralize harmful emissions from medical waste incineration, ensuring compliance and environmental safety.
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
                  <List
                    dense
                    sx={{
                      pl: 2,
                      listStyle: 'disc',
                      '& .MuiListItem-root': { display: 'list-item', mb: { xs: 0.5, sm: 1 } },
                    }}
                  >
                    {[
                      'Neutralizes acidic gases and dioxins effectively.',
                      'High-efficiency scrubbing up to 99% removal.',
                      'Corrosion-resistant materials for durability.',
                      'Low-maintenance design for operational efficiency.',
                    ].map((item, index) => (
                      <ListItem key={index} disableGutters>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                          }}
                        >
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/* Key Features and Accordion */}
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
                  How It Works
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  Exhaust gases from hospital waste incineration pass through a packed tower with a neutralizing solution, capturing acidic gases and dioxins to produce clean, compliant emissions.
                </Typography>
                <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
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
                        Common Industries
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        p: { xs: 1, sm: 2 },
                      }}
                    >
                      <List
                        dense
                        sx={{
                          pl: { xs: 1, sm: 2, md: 3 },
                          listStyle: 'disc',
                          '& .MuiListItem-root': { display: 'list-item' },
                        }}
                      >
                        {[
                          'Hospital waste incineration',
                          'Medical waste facilities',
                          'Pathological waste treatment',
                          'Pharmaceutical incineration',
                          'Infectious waste processing',
                        ].map((item, index) => (
                          <ListItem key={index} disableGutters>
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: {
                                  xs: '0.7rem',
                                  sm: '0.75rem',
                                  md: '0.8rem',
                                  lg: '0.875rem',
                                },
                              }}
                            >
                              {item}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
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
                        Explore Other Wet Scrubbers
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        p: { xs: 1, sm: 2 },
                      }}
                    >
                      <List
                        dense
                        sx={{
                          pl: { xs: 1, sm: 2, md: 3 },
                          listStyle: 'disc',
                          '& .MuiListItem-root': { display: 'list-item' },
                        }}
                      >
                        {[
                          { name: 'HCL Scrubber', path: '/wet-scrubbers/hcl' },
                          { name: 'SO2 Scrubber', path: '/wet-scrubbers/so2' },
                          { name: 'NOx Scrubber', path: '/wet-scrubbers/nox' },
                        ].map((item, index) => (
                          <ListItem key={index} disableGutters>
                            <MuiLink
                              component={RouterLink}
                              to={item.path}
                              sx={{
                                color: 'white',
                                textDecoration: 'none',
                                '&:hover': { color: '#00BFFF' },
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: {
                                    xs: '0.7rem',
                                    sm: '0.75rem',
                                    md: '0.8rem',
                                    lg: '0.875rem',
                                  },
                                }}
                              >
                                {item.name}
                              </Typography>
                            </MuiLink>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* Services Info Card */}
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
                          <List
                            dense
                            sx={{
                              pl: { xs: 1, sm: 2, md: 3 },
                              listStyle: 'disc',
                              '& .MuiListItem-root': { display: 'list-item' },
                            }}
                          >
                            {sections[activeTab].details.map((item, index) => (
                              <ListItem key={index} disableGutters>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontSize: {
                                      xs: '0.7rem',
                                      sm: '0.75rem',
                                      md: '0.8rem',
                                      lg: '0.875rem',
                                    },
                                  }}
                                >
                                  {item}
                                </Typography>
                              </ListItem>
                            ))}
                          </List>
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
      <WetScrubbersList activeLink="/hospital" />
    </ThemeProvider>
  );
};

export default HospitalWasteIncineratorWetScrubberPage;