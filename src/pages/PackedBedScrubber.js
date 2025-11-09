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
import packedBedScrubberImage from '../assets/images/products/Wet scrubber/Packed-Bed-Scrubbers.jpg'; // Updated path
import ResourcesAndQuote from '../components/sections/ResourcesAndQuote';
// Import PDFs
import companyCatalogPdf from '../assets/document/details/napcen.pdf';
import productBrochurePdf from '../assets/document/details/baghouse.pdf'; // Update to specific PDF when available

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h3: { fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem', lg: '2rem' } },
    h4: { fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' } },
    h5: { fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' } },
    body1: { fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' } },
    body2: { fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' } },
    subtitle1: { fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' } },
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
);

const PackedBedScrubberPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const muiTheme = useTheme();
  const isXsScreen = useMediaQuery(muiTheme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.down('md'));

  const sections = [
    {
      title: 'Applications',
      details: [
        'Chemical processing for acid gas removal.',
        'Pharmaceutical industries for VOC control.',
        'Petrochemical plants for emission compliance.',
        'Pulp and paper industries for odor elimination.',
        'Fertilizer production for ammonia scrubbing.',
        'Steel manufacturing for fume control.',
        'Waste incineration for pollutant removal.',
        'Wastewater treatment for odor control.',
        'Electronics manufacturing for chemical vapor capture.',
        'Food and beverage processing for gas purification.',
        'Biogas and landfill gas treatment.',
        'Metal finishing for acid fume neutralization.',
      ],
    },
    {
      title: 'Features & Benefits',
      details: [
        'High removal efficiency (>99%) for gaseous pollutants.',
        'Customizable packing media for specific contaminants.',
        'Corrosion-resistant materials for durability.',
        'Automated pH control for consistent performance.',
        'Low-pressure drop for energy efficiency.',
        'Compliance with EPA and OSHA standards.',
        'Low maintenance with easy-access components.',
      ],
    },
    {
      title: 'Materials of Construction',
      details: [
        'Fiberglass-reinforced plastic (FRP) for corrosion resistance.',
        'Stainless steel for structural integrity.',
        'Mild steel with epoxy coating for cost-effectiveness.',
        'PVC and CPVC for chemical compatibility.',
        'Polypropylene for lightweight construction.',
        'Nickel alloys for high-corrosion environments.',
        'Titanium for extreme chemical resistance.',
      ],
    },
    {
      title: 'Accessories',
      details: [
        'High-efficiency mist eliminator for moisture removal.',
        'Recirculation liquid distribution system for efficiency.',
        'Recirculation pumps for consistent liquid flow.',
        'Gas flow meters for performance monitoring.',
        'Plastic or ceramic packing media for enhanced contact.',
        'Packing support grid for stability.',
        'Corrosion-resistant spray nozzles.',
        'Automated pH control system for neutralization.',
        'Recirculation tank for liquid management.',
        'Packing removal portal for easy maintenance.',
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Packed Bed Wet Scrubber Manufacturers in Chennai</title>
        <meta
          name="description"
          content="NAPCEN's Packed Bed Wet Scrubbers, with high-efficiency packing media and corrosion-resistant materials, effectively remove gaseous and particulate pollutants, ensuring compliance in chemical, pharmaceutical, and petrochemical industries."
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
            Packed Bed Wet Scrubber
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
              to="/wet-scrubbers/packed-bed"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Packed Bed Wet Scrubber
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
                  src={packedBedScrubberImage}
                  alt="Packed Bed Wet Scrubber"
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
                    Packed Bed Wet Scrubber
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      wordBreak: 'break-word',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
                    }}
                  >
                    NAPCEN's Packed Bed Wet Scrubbers are advanced air pollution control systems designed to remove gaseous and particulate pollutants from industrial exhaust streams. With high-efficiency packing media and corrosion-resistant materials, they ensure compliance with environmental regulations and a safe working environment.
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
                      'High removal efficiency (>99%) for pollutants.',
                      'Customizable packing media for specific applications.',
                      'Corrosion-resistant materials for durability.',
                      'Automated pH control for consistent performance.',
                    ]}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/* Working Principles and Accordion */}
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
                  Pollutant-laden gas enters the scrubber tower, flowing through high-surface-area packing media. A scrubbing liquid (e.g., water or sodium hydroxide) is sprayed counter-currently, absorbing or neutralizing pollutants. A mist eliminator removes liquid droplets, and the cleaned gas is released. The scrubbing liquid is recirculated with automated pH control for efficiency.
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
                      <ProductDetailsList
                        items={[
                          'Chemical processing',
                          'Pharmaceutical industries',
                          'Petrochemical plants',
                          'Pulp and paper industries',
                          'Fertilizer production',
                        ]}
                      />
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
                          { name: 'Nitric Acid Scrubber', path: '/wet-scrubbers/nitric-acid' },
                          { name: 'H2S Scrubber', path: '/wet-scrubbers/h2s' },
                          { name: 'HCL Scrubber', path: '/wet-scrubbers/hcl' },
                          { name: 'Glue Vapor Scrubber', path: '/wet-scrubbers/glue-vapor' },
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
      <WetScrubbersList activeLink="/packed-bed" />
    </ThemeProvider>
  );
};

export default PackedBedScrubberPage;