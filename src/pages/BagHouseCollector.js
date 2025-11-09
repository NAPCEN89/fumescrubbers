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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DustCollectorsList from '../components/ReusableProducts/DustCollector';
import CounterSection from '../components/sections/CounterSection';

// Import PDFs (current files, can be updated in the future)
import companyCatalogPdf from '../assets/document/details/napcen.pdf'; // Company catalog PDF
import productBrochurePdf from '../assets/document/details/baghouse.pdf'; // Product-specific brochure (Baghouse Dust Collector)

// Import image
import baghouseDustCollectorImage from '../assets/images/products/dust collector/Baghouse-duct-collector-chennai.jpg';

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

const BaghouseDustCollector = () => {
  const [activeTab, setActiveTab] = useState(0);
  const muiTheme = useTheme();
  const isXsScreen = useMediaQuery(muiTheme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  // Sections for tabbed content
  const sections = [
    {
      title: 'Precautions',
      details: [
        'Regularly inspect and replace filter bags to prevent clogging and maintain efficiency.',
        'Ensure proper sealing of the baghouse to avoid dust leakage.',
        'Monitor pressure drop to detect blockages or bag failures.',
        'Implement fire and explosion prevention measures for combustible dusts.',
      ],
    },
    {
      title: 'Intelligence',
      details: [
        'Advanced control systems for automated cleaning cycles.',
        'Real-time monitoring of differential pressure and airflow.',
        'Integration with IoT for predictive maintenance alerts.',
        'Customizable cleaning mechanisms (pulse-jet, shaker, or reverse air).',
      ],
    },
    {
      title: 'Specializations',
      details: [
        'High-temperature baghouses for processes like asphalt production.',
        'Corrosion-resistant materials for chemical processing environments.',
        'Custom baghouse designs for specific dust types (e.g., sticky or abrasive).',
        'Modular systems for easy scalability and maintenance.',
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Baghouse Dust Collector</title>
        <meta
          name="description"
          content="Explore high-efficiency Baghouse Dust Collectors from NAPCEN, utilizing fabric filter bags to capture fine particulate matter and improve air quality in various industrial applications."
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
            Baghouse Dust Collector
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
              to="/dust-collectors/baghouse"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Baghouse Dust Collector
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
                  src={baghouseDustCollectorImage}
                  alt="Baghouse Dust Collector"
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
                    Baghouse Dust Collector
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      wordBreak: 'break-word',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                    }}
                  >
                    A Baghouse Dust Collector is an air pollution control device that uses fabric filter bags to capture fine particulate matter from industrial air streams. It is one of the most effective and widely used types of dust collectors, capable of achieving over 99.9% efficiency in filtering a wide range of dust types, including very fine and sub-micron particles.
                  </Typography>
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
                  Key Features
                </Typography>
                <List
                  dense
                  sx={{
                    pl: { xs: 1, sm: 2, md: 3 },
                    listStyle: 'disc',
                    '& .MuiListItem-root': { display: 'list-item', mb: { xs: 0.5, sm: 1 } },
                  }}
                >
                  <ListItem disableGutters>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                      }}
                    >
                      <b>High Efficiency:</b> Capable of achieving over 99.9% collection efficiency for a broad range of particle sizes.
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                      }}
                    >
                      <b>Versatile:</b> Suitable for many different industrial applications and dust types, from fine powders to sticky materials.
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                      }}
                    >
                      <b>Customizable:</b> Can be designed with various filter bag materials and cleaning mechanisms to suit specific needs.
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                      }}
                    >
                      <b>Effective for Fine Dust:</b> Particularly well-suited for capturing fine dust that other collectors might miss.
                    </Typography>
                  </ListItem>
                </List>
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
                        How It Works
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        p: { xs: 1, sm: 2 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                        }}
                      >
                        Dust-laden gas flows into the baghouse chamber. The gas is drawn through the fabric bags, which act as filters. The dust particles accumulate on the surface of the bags, forming a "dust cake" that aids in further filtration. The clean gas exits the baghouse. Periodically, the bags are cleaned, and the collected dust falls into a hopper for disposal or recycling.
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
                          'Cement and concrete manufacturing',
                          'Chemical and pharmaceutical processing',
                          'Food and beverage production',
                          'Metal fabrication and foundries',
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

      {/* Download Section */}
      <Container>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          sx={{ mt: { xs: 2, sm: 3, md: 4 } }}
        >
          {/* Product Brochure */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 1, sm: 1.5, md: 2 },
                display: 'flex',
                alignItems: 'center',
                mb: { xs: 1, sm: 2 },
                borderRadius: 2,
                backgroundColor: '#1C1C1E',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: { xs: 'none', sm: 'translateY(-4px)' },
                  boxShadow: { sm: '0 4px 20px rgba(0,0,0,0.5)' },
                  borderColor: '#00BFFF',
                },
              }}
            >
              <FolderIcon
                sx={{
                  mr: { xs: 1, sm: 2 },
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  color: '#00BFFF',
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  Product Brochure (Baghouse Dust Collector)
                </Typography>
                <MuiLink
                  href={productBrochurePdf}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  aria-label="View NAPCEN Baghouse Dust Collector brochure PDF"
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 0.5,
                      fontWeight: 'medium',
                      color: '#00BFFF',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                    }}
                  >
                    View PDF
                  </Typography>
                </MuiLink>
                <MuiLink
                  href={productBrochurePdf}
                  download="Napcen_Baghouse_Dust_Collector_Brochure.pdf"
                  underline="none"
                  aria-label="Download NAPCEN Baghouse Dust Collector brochure PDF"
                  sx={{ display: 'block', mt: 0.5 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'medium',
                      color: '#FFD700',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                    }}
                  >
                    Download Brochure
                  </Typography>
                </MuiLink>
              </Box>
            </Paper>
          </Grid>
          {/* Company Catalog */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 1, sm: 1.5, md: 2 },
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                backgroundColor: '#1C1C1E',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: { xs: 'none', sm: 'translateY(-4px)' },
                  boxShadow: { sm: '0 4px 20px rgba(0,0,0,0.5)' },
                  borderColor: '#00BFFF',
                },
              }}
            >
              <InsertDriveFileIcon
                sx={{
                  mr: { xs: 1, sm: 2 },
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  color: '#00BFFF',
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                  }}
                >
                  Company Catalog
                </Typography>
                <MuiLink
                  href={companyCatalogPdf}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  aria-label="View NAPCEN company catalog PDF"
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 0.5,
                      fontWeight: 'medium',
                      color: '#00BFFF',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                    }}
                  >
                    View PDF
                  </Typography>
                </MuiLink>
                <MuiLink
                  href={companyCatalogPdf}
                  download="Napcen_Company_Catalog.pdf"
                  underline="none"
                  aria-label="Download NAPCEN company catalog PDF"
                  sx={{ display: 'block', mt: 0.5 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'medium',
                      color: '#FFD700',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                    }}
                  >
                    Download Catalog
                  </Typography>
                </MuiLink>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <CounterSection />
      <DustCollectorsList activeLink="/baghouse" />
    </ThemeProvider>
  );
};

export default BaghouseDustCollector;