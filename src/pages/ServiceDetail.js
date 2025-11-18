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
  Divider,
} from '@mui/material';
import { useTheme, keyframes } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HandymanIcon from '@mui/icons-material/Handyman';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConstructionIcon from '@mui/icons-material/Construction';
import SettingsIcon from '@mui/icons-material/Settings';

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

const pulsate = keyframes`
  0% { box-shadow: 0 0 5px #00BFFF; }
  50% { box-shadow: 0 0 15px #00BFFF, 0 0 20px rgba(0, 191, 255, 0.4); }
  100% { box-shadow: 0 0 5px #00BFFF; }
`;

const services = [
  {
    image: designConsultingImg,
    title: 'Consulting & Design',
    description:
      'Detailed site assessment and tailored air pollution control system design, integrating wet/dry scrubbers and dust collectors for optimal performance.',
    link: '/services/consulting-design',
    icon: DesignServicesIcon,
  },
  {
    image: manufacturingImg,
    title: 'Manufacturing & Supply',
    description:
      'Production of high-performance equipment: wet scrubbers, dust collectors, and fume extractors engineered for efficient removal of pollutants.',
    link: '/services/manufacturing',
    icon: PrecisionManufacturingIcon,
  },
  {
    image: installationImg,
    title: 'Turnkey Installation',
    description:
      'Certified technicians ensure seamless, on-time setup and strict compliance with environmental regulations across all industrial sectors.',
    link: '/services/installation',
    icon: ConstructionIcon,
  },
  {
    image: maintenanceImg,
    title: 'Maintenance & Support',
    description:
      'Proactive maintenance plans, routine inspections, and rapid troubleshooting to maximize equipment longevity and minimize operational downtime.',
    link: '/services/maintenance',
    icon: SettingsIcon,
  },
];

const products = [
  {
    image: wetScrubberImg,
    title: 'Wet Scrubber',
    description:
      'Uses liquid to remove pollutants, ideal for chemical processing and metal finishing. Includes venturi and odor control variants.',
    link: '/products/wet-scrubber',
  },
  {
    image: dryScrubberImg,
    title: 'Dry Scrubber',
    description:
      'Removes acidic gases and VOCs using dry adsorption, providing economical solutions for hazardous exhaust gases.',
    link: '/products/dry-scrubber',
  },
  {
    image: dustCollectorImg,
    title: 'Dust Collector',
    description:
      'Captures particulates from processes like grinding, enhancing air quality with baghouse and cyclone collector variants.',
    link: '/products/dust-collector',
  },
  {
    image: downdraftTableImg,
    title: 'Down Draft Table',
    description:
      'Captures dust and fumes at the source during welding and grinding, ensuring a cleaner, safer workspace for manufacturing.',
    link: '/products/down-draft-table',
  },
  {
    image: fumeExtractorImg,
    title: 'Fume Extractor',
    description:
      'Utilizes HEPA and carbon filters for hazardous fumes in labs and industrial settings. Customizable for soldering and more.',
    link: '/products/fume-extractor',
  },
];

// --- Flowchart Component (Kept for process clarity) ---
const FlowStep = ({ title, icon: Icon, isLast }) => (
  <Box sx={{ textAlign: 'center', mb: isLast ? 0 : 2 }}>
    <Box
      sx={{
        fontWeight: 600,
        color: '#E0F7FA',
        fontSize: { xs: '1rem', md: '1.2rem' },
        padding: '12px 20px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '1px solid #00BFFF',
        boxShadow: '0 0 10px rgba(0, 191, 255, 0.5)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        '&:hover': {
          transform: 'scale(1.08)',
          boxShadow: '0 0 20px #00BFFF',
          animation: `${pulsate} 1.5s infinite`,
        },
      }}
    >
      <Icon sx={{ color: '#00BFFF', fontSize: '1.5rem' }} />
      <Typography variant="h6" component="span" sx={{ fontSize: 'inherit', color: 'inherit' }}>
        {title}
      </Typography>
    </Box>
    {!isLast && (
      <ArrowDownwardIcon sx={{ color: '#00BFFF', fontSize: '2rem', my: 1, animation: `${fadeIn} 1s infinite alternate` }} />
    )}
  </Box>
);

// --- NEW COMPACT CARD COMPONENT ---
const CompactServiceProductCard = ({ item, isService }) => (
  <Card
    sx={{
      borderRadius: 3,
      background: 'rgba(30, 42, 42, 0.8)',
      border: '1px solid rgba(0, 191, 255, 0.3)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      color: 'white',
      maxWidth: 350, // **Fixed Max Width for a Vertical, Neat Look**
      mx: 'auto', 
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 30px rgba(0, 191, 255, 0.35)',
        border: '1px solid #00BFFF',
      },
      animation: `${fadeIn} 0.5s ease-in forwards`,
    }}
  >
    {/* Image Container with objectFit: 'contain' */}
    <Box 
        sx={{ 
            height: { xs: 150, sm: 180 }, // Taller height for image
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            p: 1, // Padding ensures even small images have space
            background: 'rgba(0, 0, 0, 0.2)', // Dark background behind image
            borderBottom: '1px solid rgba(0, 191, 255, 0.3)'
        }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{
          maxHeight: '100%',
          maxWidth: '100%',
          objectFit: 'contain', // **CRITICAL: Ensure whole image is visible**
          width: 'auto', // Adjust width based on content/container
          height: 'auto', // Adjust height based on content/container
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'scale(1.05)', // Subtle zoom on hover
          },
        }}
      />
    </Box>
    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {isService && item.icon ? (
          <item.icon sx={{ color: '#33FFFF', mr: 1.5, fontSize: '1.5rem' }} />
        ) : (
          <HandymanIcon sx={{ color: '#33FFFF', mr: 1.5, fontSize: '1.5rem' }} />
        )}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#00BFFF',
            fontSize: '1.1rem',
          }}
        >
          {item.title}
        </Typography>
      </Box>
      <Divider sx={{ mb: 1.5, borderColor: 'rgba(0, 191, 255, 0.2)' }} />
      <Typography
        variant="body2"
        sx={{
          color: '#B0BEC5',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          mb: 2,
          flexGrow: 1,
        }}
      >
        {item.description}
      </Typography>
      <MuiLink
        component={RouterLink}
        to={item.link}
        sx={{
          textDecoration: 'none',
          color: '#33FFFF',
          fontWeight: 600,
          fontSize: '0.9rem',
          display: 'inline-flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          padding: '4px 8px',
          borderRadius: '4px',
          border: '1px solid transparent',
          transition: 'all 0.3s ease',
          '&:hover': {
            textDecoration: 'none',
            color: '#E0F7FA',
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            border: '1px solid #00BFFF',
          },
        }}
      >
        {isService ? 'Learn More' : 'Explore Product'}
        <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
      </MuiLink>
    </CardContent>
  </Card>
);

export default function ServicesPage() {
  const theme = useTheme();
  
  const flowchartSteps = services.map(s => ({
    title: s.title.split(' ')[0], 
    icon: s.icon,
  }));

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        background: 'radial-gradient(ellipse at bottom, #0A1929 0%, #000B15 100%)',
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        
        {/* Header Section */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center',
            color: '#33FFFF', 
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '0 0 10px rgba(51, 255, 255, 0.5)',
            animation: `${fadeIn} 1s ease-in`,
          }}
        >
          NAPCEN: Advanced Solutions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 700,
            mx: 'auto',
            color: '#C0C0C0', 
            mb: 8,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            lineHeight: 1.7,
            animation: `${fadeIn} 1.2s ease-in`,
          }}
        >
          Your trusted partner for **complete air quality solutions**, from **expert consultation** and **precision manufacturing** to **seamless installation** and **long-term maintenance**.
        </Typography>

        {/* Services Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.6rem', sm: '2rem' },
            color: '#00BFFF',
            mb: 6,
            textAlign: 'center',
            borderBottom: '3px solid #00BFFF',
            pb: 1.5,
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          🛠️ Our End-to-End Services
        </Typography>

        {/* Services Grid: Flowchart centered, cards on sides, but cards are now compact and vertical */}
        <Grid
          container
          spacing={4}
          alignItems="flex-start" 
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          {/* Service Cards - Left Column (1 & 2) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 2, md: 1 }, 
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {/* Service 1 */}
            <Box sx={{ animation: `${fadeIn} 0.5s ease-in 0.2s forwards`, opacity: 0 }}>
              <CompactServiceProductCard item={services[0]} isService={true} />
            </Box>
            {/* Service 2 */}
            <Box sx={{ animation: `${fadeIn} 0.5s ease-in 0.4s forwards`, opacity: 0 }}>
              <CompactServiceProductCard item={services[1]} isService={true} />
            </Box>
          </Grid>

          {/* Service Flowchart - Center Column (Process) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              order: { xs: 1, md: 2 }, 
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: '#33FFFF', mb: 3, textTransform: 'uppercase' }}
            >
              The NAPCEN Process
            </Typography>
            <Box
              sx={{
                width: '100%',
                maxWidth: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {services.map((step, idx) => (
                <FlowStep
                  key={idx}
                  title={flowchartSteps[idx].title}
                  icon={flowchartSteps[idx].icon}
                  isLast={idx === services.length - 1}
                />
              ))}
            </Box>
          </Grid>
          
          {/* Service Cards - Right Column (3 & 4) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 3, md: 3 }, 
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {/* Service 3 */}
            <Box sx={{ animation: `${fadeIn} 0.5s ease-in 0.6s forwards`, opacity: 0 }}>
              <CompactServiceProductCard item={services[2]} isService={true} />
            </Box>
            {/* Service 4 */}
            <Box sx={{ animation: `${fadeIn} 0.5s ease-in 0.8s forwards`, opacity: 0 }}>
              <CompactServiceProductCard item={services[3]} isService={true} />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, borderColor: 'rgba(0, 191, 255, 0.2)', borderStyle: 'dashed' }} />

        {/* Products Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.6rem', sm: '2rem' },
            color: '#00BFFF',
            mt: 6,
            mb: 4,
            textAlign: 'center',
            borderBottom: '3px solid #00BFFF',
            pb: 1.5,
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          🔬 Innovative Air Control Products
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {products.map((product, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4} // 3 columns on medium screens and up
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                animation: `${fadeIn} 0.5s ease-in ${idx * 0.15}s forwards`,
                opacity: 0,
              }}
            >
              <CompactServiceProductCard item={product} isService={false} />
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ mt: 10, textAlign: 'center', animation: `${fadeIn} 1.5s ease-in forwards`, opacity: 0 }}>
          <Typography
            variant="h5"
            sx={{
              color: '#33FFFF',
              mb: 3,
              fontWeight: 600,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            Ready to enhance your air pollution control systems?
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#00BFFF',
              color: '#121212',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 0 10px #00BFFF',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#0288D1',
                transform: 'scale(1.05)',
                boxShadow: '0 0 20px #00BFFF, 0 0 30px rgba(0, 191, 255, 0.5)',
              },
            }}
          >
            Schedule a Consultation
            <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.2rem' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}