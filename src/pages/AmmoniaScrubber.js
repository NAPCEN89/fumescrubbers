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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WetScrubbersList from '../components/ReusableProducts/WetScrubber';
import CounterSection from '../components/sections/CounterSection';
import ResourcesAndQuote from '../components/sections/ResourcesAndQuote';
// Import PDFs (current files, can be updated in the future)
import companyCatalogPdf from '../assets/document/details/napcen.pdf'; // Company catalog PDF
import productBrochurePdf from '../assets/document/details/baghouse.pdf'; // Product-specific brochure (Ammonia Scrubber, can be updated later)

// Import image
import ammoniaScrubberImage from '../assets/images/products/Fume extractor/Laboratory-fume-extractor.jpg'; // Placeholder path

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

const AmmoniaScrubberPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const muiTheme = useTheme();
  const isXsScreen = useMediaQuery(muiTheme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  // Sections for tabbed content
  const sections = [
    {
      title: 'Application',
      details: [
        'Fertilizer production',
        'Pharmaceuticals Industries',
        'Chemical Industries',
        'Silicone production',
      ],
    },
    {
      title: 'Materials of Construction',
      details: [
        'FRP',
        'Stainless steel',
        'Mild steel',
        'M.S with Epoxy coated',
        'PVC and CPVC',
        'Polypropylene and polyethylene',
        'FRP-lined mild steel',
        'Nickel alloys and Titanium',
      ],
    },
    {
      title: 'Accessories',
      details: [
        'Scrubber body',
        'Mist eliminator',
        'Recirculation liquid distribution nozzle system',
        'Recirculation piping system',
        'Recirculation pumps',
        'Liquid flow meter',
        'Packing media',
        'Packing support grid',
        'Scrubber inlet',
        'Recirculation tank',
        'Recirculation sump level control system',
        'Packing removal portal',
        'Packing fill door',
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
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
            Ammonia Scrubber
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
              to="/ammonia-scrubber"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Ammonia Scrubber
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
                  src={ammoniaScrubberImage}
                  alt="Ammonia Scrubber"
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
                    Ammonia Scrubber
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      wordBreak: 'break-word',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                    }}
                  >
                    Ammonia ({`NH₃`}) is naturally formed in small quantities and is widely used in various applications. While 90% of ammonia is utilized for fertilizer production, it is also found in food, pharmaceuticals, and cleaning products. When released into the air, ammonia gas emits a strong, pungent odor that can be hazardous to inhale. To address this, odor control scrubbers are employed to capture and treat ammonia emissions, ensuring safety and compliance with air quality standards.
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
                  Sulfuric acid ({`H₂SO₄`}) solutions are used to neutralize ammonia ({`NH₃`}) in gas streams, while caustic solutions adjust the pH of waste streams before disposal. In a vertical packed tower design, ammonia-laden gas enters from the bottom, and air flows upward through the column. A sulfuric acid ({`H₂SO₄`}) solution is recycled, introduced at the top via a specialized distribution system, and cascades through a polypropylene media bed resistant to low pH solutions.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  As the gas rises, it interacts with the acidic solution, neutralizing the ammonia ({`NH₃`}). High removal efficiencies, often exceeding 99%, are achievable with advanced control and automation, ensuring compliance with environmental and safety standards.
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
                minHeight: { xs: 'auto', sm: 300, md: 350, lg: 400 },
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
                  NAPCEN: A Leading Ammonia Scrubber Manufacturer
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: '#e9e9f0ff',
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  NAPCEN is a pioneer in air pollution control solutions, recognized as one of India's top ammonia scrubber manufacturers. With a strong commitment to innovation and quality, we design and produce high-performance ammonia scrubbers that meet stringent environmental standards.
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
                      Expertise in Ammonia Scrubber Technology
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: '#e9e9f0ff',
                      p: { xs: 1, sm: 2 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'black',
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                      }}
                    >
                      NAPCEN's team of skilled engineers specializes in designing and manufacturing advanced ammonia scrubbers, employing state-of-the-art technology to ensure superior performance and durability.
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
                      Tailored Solutions for Various Industries
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: '#e9e9f0ff',
                      p: { xs: 1, sm: 2 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'black',
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                      }}
                    >
                      Recognizing the unique emission control needs of each industry, NAPCEN offers bespoke ammonia scrubbers that are custom-engineered to handle specific pollutants and flow rates, providing optimal efficiency for sectors like fertilizers, pharmaceuticals, and more.
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
                  <AccordionDetails
                    sx={{
                      backgroundColor: '#e9e9f0ff',
                      p: { xs: 1, sm: 2 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'black',
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                      }}
                    >
                      NAPCEN prioritizes eco-friendly, cost-effective solutions. Our ammonia scrubbers are designed for low energy consumption and minimal maintenance, helping businesses reduce operational costs while meeting their environmental responsibilities.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
          {/* Main Info Card with Tabs */}
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
                            {activeTab === 0 &&
                              sections[0].details.map((item, index) => (
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
                            {activeTab === 1 &&
                              sections[1].details.map((item, index) => (
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
                            {activeTab === 2 &&
                              sections[2].details.map((item, index) => (
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
      <WetScrubbersList activeLink="/ammonia-scrubber" />
    </ThemeProvider>
  );
};

export default AmmoniaScrubberPage;