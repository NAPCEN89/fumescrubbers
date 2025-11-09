import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Link as MuiLink,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Card,
  List,
  ListItem,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DryScrubber from '../components/ReusableProducts/DryScrubber';
import CounterSection from '../components/sections/CounterSection';
import companyCatalogPdf from '../assets/document/details/napcen.pdf';
import productBrochurePdf from '../assets/document/details/baghouse.pdf';
import ResourcesAndQuote from '../components/sections/ResourcesAndQuote';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const VOCScrubber = () => {
  const [activeTab, setActiveTab] = useState(0);
  const muiTheme = useTheme();
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>VOC Scrubber</title>
        <meta
          name="description"
          content="Discover NAPCEN's advanced VOC Scrubber, designed for efficient removal of volatile organic compounds from industrial exhaust, ensuring environmental compliance and safe operations."
        />
      </Helmet>
      {/* Page Title Section */}
      <Box
        sx={{
          background: `linear-gradient(to left, #334746ff, #151d1dff)`,
          py: 10,
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40vh',
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
        <Container>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            All Type Of Dry Scrubbers
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </RouterLink>{' '}
            /{' '}
            <RouterLink to="/dry-scrubbers/voc" style={{ textDecoration: 'none', color: 'inherit' }}>
              VOC Scrubber
            </RouterLink>
          </Typography>
        </Container>
      </Box>

    

      {/* Main Content */}
      <Container sx={{ py: 6, backgroundColor: 'transparent' }}>
        <Grid container spacing={4}>
          {/* Main Content Side */}
          <Grid item xs={12} md={8}>
            <Box>
              <Box
                sx={{
                  position: 'relative',
                  mb: 4,
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: 'auto',
                  border: '1px solid rgba(0, 191, 255, 0.15)',
                }}
              >
                <img
                  src="../assets/images/voc-scrubber.jpg"
                  alt="VOC Scrubber"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                VOC Scrubber
              </Typography>
              <Typography variant="body1" paragraph>
                A <b>VOC Scrubber</b> is a crucial air pollution control system designed to capture and remove volatile organic compounds (VOCs) from industrial exhaust gases, ensuring cleaner air and environmental compliance. Unlike traditional wet scrubbers, dry VOC scrubbers operate without water, making them ideal for moisture-sensitive processes.
              </Typography>
              <Typography variant="body1" paragraph>
                They effectively trap harmful solvent vapors that pose significant risks to human health and the environment. Many industries use highly volatile solvents that emit hazardous fumes during production, creating a pressing need for efficient VOC removal. Dry scrubbing technology minimizes maintenance, avoids water-related issues, and ensures continuous performance in various demanding industrial settings.
              </Typography>
              <Typography variant="body1" paragraph>
                Napcen’s advanced dry VOC scrubber system offers efficient source capture of solvent fumes, eliminating ducting requirements and preventing vapor dispersion. Featuring easily replaceable pre-filters and high-capacity carbon filters, the system provides up to 99% removal efficiency. Designed for long-term performance with low maintenance, Napcen VOC scrubbers ensure reliable VOC emission control for paint booths, laboratories, and chemical processing industries.
              </Typography>
            </Box>
          </Grid>

          {/* Sidebar Side */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: '#1C1C1E',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                height: '100%',
              }}
            >
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#00BFFF' }}>
                Explore Other Dry Scrubbers
              </Typography>
              <List>
                <ListItem sx={{ '&.MuiListItem-root': { py: 0, px: 0 } }}>
                  <MuiLink
                    component={RouterLink}
                    to="/dry-scrubbers/h2s"
                    sx={{
                      width: '100%',
                      py: 1,
                      px: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderLeft: '4px solid #00BFFF',
                      },
                    }}
                  >
                    H2S Scrubber
                  </MuiLink>
                </ListItem>
                <ListItem sx={{ '&.MuiListItem-root': { py: 0, px: 0 } }}>
                  <MuiLink
                    component={RouterLink}
                    to="/dry-scrubbers/voc"
                    sx={{
                      width: '100%',
                      py: 1,
                      px: 2,
                      backgroundColor: 'rgba(0, 191, 255, 0.1)',
                      borderLeft: '4px solid #00BFFF',
                      fontWeight: 'bold',
                    }}
                  >
                    VOC Scrubber
                  </MuiLink>
                </ListItem>
                <ListItem sx={{ '&.MuiListItem-root': { py: 0, px: 0 } }}>
                  <MuiLink
                    component={RouterLink}
                    to="/dry-scrubbers/stp-odor"
                    sx={{
                      width: '100%',
                      py: 1,
                      px: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderLeft: '4px solid #00BFFF',
                      },
                    }}
                  >
                    STP Odor Control System
                  </MuiLink>
                </ListItem>
                <ListItem sx={{ '&.MuiListItem-root': { py: 0, px: 0 } }}>
                  <MuiLink
                    component={RouterLink}
                    to="/dry-scrubbers/portable"
                    sx={{
                      width: '100%',
                      py: 1,
                      px: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderLeft: '4px solid #00BFFF',
                      },
                    }}
                  >
                    Portable Dry Scrubber
                  </MuiLink>
                </ListItem>
              </List>

              {/* Brochure Section */}
              <Box sx={{ mt: 4 }}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    borderRadius: 2,
                    backgroundColor: '#1C1C1E',
                    border: '1px solid rgba(0, 191, 255, 0.15)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', borderColor: '#00BFFF' },
                  }}
                >
                  <FolderIcon sx={{ mr: 2, fontSize: '2rem', color: '#00BFFF' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Download Brochures
                    </Typography>
                    <MuiLink href="../assets/resources/Napcen_brochure.pdf" target="_blank" rel="noopener" underline="none">
                      <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 'medium', color: '#00BFFF' }}>
                        View PDF
                      </Typography>
                    </MuiLink>
                  </Box>
                </Paper>
                <Paper
                  elevation={6}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 2,
                    backgroundColor: '#1C1C1E',
                    border: '1px solid rgba(0, 191, 255, 0.15)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', borderColor: '#00BFFF' },
                  }}
                >
                  <InsertDriveFileIcon sx={{ mr: 2, fontSize: '2rem', color: '#00BFFF' }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Company Presentation
                    </Typography>
                    <MuiLink href="#" underline="none">
                      <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 'medium', color: '#00BFFF' }}>
                        View Presentation
                      </Typography>
                    </MuiLink>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Services Info Tabs */}
      <Container sx={{ py: 6, backgroundColor: 'transparent' }}>
        <Card
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            border: '2px solid #00BFFF',
            boxShadow: '0 6px 20px rgba(0, 191, 255, 0.3)',
          }}
        >
          <Box sx={{ width: '100%', borderBottom: 2, borderColor: '#00BFFF' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="product info tabs"
              variant={isMdScreen ? 'standard' : 'scrollable'}
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  color: 'white',
                  fontWeight: 'bold',
                  '&.Mui-selected': { color: '#151d1d', backgroundColor: '#00BFFF' },
                },
                '& .MuiTabs-indicator': { backgroundColor: '#151d1d' },
              }}
            >
              <Tab label="Technical Details" {...a11yProps(0)} />
              <Tab label="Applications" {...a11yProps(1)} />
              <Tab label="Materials of Construction" {...a11yProps(2)} />
              <Tab label="Accessories" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={activeTab} index={0}>
            <Typography>
              Napcen’s VOC Scrubber utilizes advanced adsorption technology with high-capacity activated carbon or zeolite-based media to capture VOCs effectively. The system is designed for airflow rates ranging from 500 to 50,000 CFM, depending on the application, with a removal efficiency of up to 99%. It features modular pre-filters for larger particulates and replaceable media beds for easy maintenance.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              The scrubber operates without water, reducing corrosion risks and maintenance needs. It includes automated monitoring systems for media saturation levels and optional sensors for real-time VOC detection, ensuring optimal performance in high-demand environments like paint booths and chemical plants.
            </Typography>
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <Typography>
              VOC Scrubbers are ideal for industries requiring stringent air quality control, including:
            </Typography>
            <List dense sx={{ pl: 2, listStyle: 'disc', '& .MuiListItem-root': { display: 'list-item' } }}>
              <ListItem disableGutters><Typography variant="body2">Paint and coating industries</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Chemical manufacturing</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Pharmaceutical production</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Petrochemical processing</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Printing and adhesive application</Typography></ListItem>
            </List>
            <Typography sx={{ mt: 2 }}>
              These systems ensure compliance with environmental regulations such as EPA standards and improve workplace safety by reducing exposure to harmful VOCs.
            </Typography>
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <Typography>
              The VOC Scrubber is constructed with durable materials to withstand harsh industrial conditions:
            </Typography>
            <List dense sx={{ pl: 2, listStyle: 'disc', '& .MuiListItem-root': { display: 'list-item' } }}>
              <ListItem disableGutters><Typography variant="body2">Stainless steel or coated carbon steel for the main housing</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">High-grade activated carbon or zeolite media for adsorption</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Corrosion-resistant ducting and fittings</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Reinforced composite materials for lightweight, portable models</Typography></ListItem>
            </List>
            <Typography sx={{ mt: 2 }}>
              These materials ensure longevity and reliability, even in environments with high VOC concentrations or corrosive gases.
            </Typography>
          </TabPanel>
          <TabPanel value={activeTab} index={3}>
            <Typography>
              Optional accessories enhance the functionality of Napcen’s VOC Scrubber:
            </Typography>
            <List dense sx={{ pl: 2, listStyle: 'disc', '& .MuiListItem-root': { display: 'list-item' } }}>
              <ListItem disableGutters><Typography variant="body2">VOC sensors for real-time monitoring</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Explosion-proof motors for hazardous environments</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Customizable media beds for specific VOC compounds</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Remote control systems for automated operation</Typography></ListItem>
              <ListItem disableGutters><Typography variant="body2">Sound-dampening enclosures for noise reduction</Typography></ListItem>
            </List>
            <Typography sx={{ mt: 2 }}>
              These accessories can be tailored to meet specific operational needs, enhancing both performance and safety.
            </Typography>
          </TabPanel>
        </Card>
      </Container>

      
           <ResourcesAndQuote/>

        {/* Dry Scrubbers List */}
      <DryScrubber activeLink="/voc" />

      {/* Call to Action or Info Section */}
      <CounterSection />
    </ThemeProvider>
  );
};

export default VOCScrubber;