import React, { useState, useCallback, memo } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';

const images = {
  chemicalImg: require('../../assets/images/gallery/Chemical Manufacturing.jpg'),
  electronicImg: require('../../assets/images/gallery/Electronic and Semiconductor Manufacturing.jpg'),
  foodProcessingImg: require('../../assets/images/gallery/Food Processing.jpg'),
  miningImg: require('../../assets/images/gallery/Mining and Ore Processing.jpg'),
  metalProcessingImg: require('../../assets/images/gallery/Metal Processing.jpg'),
  pharmaImg: require('../../assets/images/gallery/Pharmaceutical Manufacturing.jpg'),
  paintImg: require('../../assets/images/gallery/Paint and Coatings Manufacturing.jpg'),
  oilGasImg: require('../../assets/images/gallery/Oil and Gas Industry.jpg'),
  textileImg: require('../../assets/images/gallery/Textile Industry.jpg'),
  woodworkingImg: require('../../assets/images/gallery/Woodworking and Furniture Manufacturing.jpg'),
};

const theme = createTheme({
  typography: { fontFamily: ['"Poppins"', 'sans-serif'].join(',') },
  components: { MuiTypography: { styleOverrides: { root: { color: 'white' } } } },
});

const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
    best wet scrubber chemical coimbatore, best dust collector pharma tamil nadu
  </Box>
);

const industrialApplications = [
  { name: 'Chemical Industries', image: images.chemicalImg, description: 'Advanced scrubbers for VOCs and corrosive gases.', slug: 'chemical' },
  { name: 'Electronics Manufacturing', image: images.electronicImg, description: 'Cleanroom-grade filtration systems.', slug: 'electronics' },
  { name: 'Food Processing', image: images.foodProcessingImg, description: 'Odor control and hygiene compliance.', slug: 'food-processing' },
  { name: 'Mining and Ore Processing', image: images.miningImg, description: 'Heavy-duty dust and SO₂ control.', slug: 'mining' },
  { name: 'Metal Processing', image: images.metalProcessingImg, description: 'Fume extraction for welding & cutting.', slug: 'metal-processing' },
  { name: 'Pharma Industries', image: images.pharmaImg, description: 'GMP-compliant solvent recovery.', slug: 'pharma' },
  { name: 'Paint Manufacturing', image: images.paintImg, description: 'VOC capture and safe disposal.', slug: 'paint-manufacturing' },
  { name: 'Oil and Gas Industries', image: images.oilGasImg, description: 'H₂S and methane control systems.', slug: 'oil-gas' },
  { name: 'Textile Industries', image: images.textileImg, description: 'Dye exhaust and lint collection.', slug: 'textile' },
  { name: 'Wood Working Industries', image: images.woodworkingImg, description: 'Fine dust extraction for safety.', slug: 'woodworking' },
];

const IndustryCard = memo(({ app, isActive }) => (
  <Card
    elevation={6}
    sx={{
      width: '100%',
      height: 400,
      borderRadius: 3,
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(12px)',
      border: isActive ? '2px solid #00BFFF' : '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.4s ease',
      '&:hover': {
        transform: 'translateY(-12px)',
        boxShadow: '0 20px 40px rgba(0,191,255,0.3)',
      },
    }}
  >
    <CardMedia component="img" height={140} image={app.image} alt={app.name} loading="lazy" sx={{ objectFit: 'cover' }} />
    <CardContent sx={{ p: 2.5, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: isActive ? '#00BFFF' : 'white' }}>
        {app.name}
      </Typography>
      <Typography variant="body2" sx={{ color: '#ccc', my: 2, fontSize: '0.9rem' }}>
        {app.description}
      </Typography>
      <Button
        component={RouterLink}
        to={`/industries/${app.slug}`}
        sx={{
          mt: 2,
          px: 3,
          py: 1,
          background: 'rgba(0,191,255,0.2)',
          borderRadius: 50,
          fontWeight: 600,
          color: 'white',
          '&:hover': { background: '#00BFFF' },
        }}
      >
        Learn More
      </Button>
    </CardContent>
  </Card>
));

function IndustrialApplicationsSection({ activeLink }) {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const isMedium = useMediaQuery('(min-width:480px)');
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          py: { xs: 7, md: 10 },
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/Home-air-pollution-control.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.78)',
          },
        }}
      >
        <HiddenSEO />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Napcean Industrial Applications",
            "itemListElement": industrialApplications.map((app, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": { "@type": "Thing", "name": app.name, "url": `https://napcean.in/industries/${app.slug}` }
            }))
          })}
        </script>

        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#00BFFF',
            }}
          >
            Industrial Applications
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: '#ddd',
              mb: 6,
              maxWidth: 800,
              mx: 'auto',
              fontSize: '1.05rem',
            }}
          >
            Trusted air pollution control solutions across industries
          </Typography>
        </Container>

        {/* DESKTOP: YOUR ORIGINAL MARQUEE – 100% UNCHANGED */}
        {isDesktop && (
          <Box sx={{ position: 'relative', zIndex: 1, px: 4, pb: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '32px',
                animation: 'marquee 50s linear infinite',
                '&:hover': { animationPlayState: 'paused' },
                width: 'fit-content',
                minWidth: '200%',
                '@keyframes marquee': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
              }}
            >
              {[...industrialApplications, ...industrialApplications].map((app, i) => (
                <Box key={`${app.slug}-${i}`} sx={{ flexShrink: 0, width: 250 }}>
                  <IndustryCard app={app} isActive={activeLink === `/industries/${app.slug}`} />
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* MOBILE: SAME CARDS, RESPONSIVE GRID */}
        {!isDesktop && (
          <Box sx={{ px: 3, pb: 6 }}>
            <Grid container spacing={3} justifyContent="center">
              {industrialApplications.slice(0, isMedium ? 4 : 2).map((app) => (
                <Grid item xs={12} sm={6} key={app.slug}>
                  <Box sx={{ maxWidth: 350, mx: 'auto' }}>
                    <IndustryCard app={app} isActive={activeLink === `/industries/${app.slug}`} />
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Button
                onClick={handleOpen}
                sx={{
                  px: 6,
                  py: 1.8,
                  background: 'rgba(0,191,255,0.2)',
                  color: '#00BFFF',
                  border: '2px solid #00BFFF',
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  '&:hover': {
                    background: '#00BFFF',
                    color: 'white',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                Explore All 10 Industries
              </Button>
            </Box>
          </Box>
        )}

        {/* POPUP – SAME CARD STYLE */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
          <DialogTitle sx={{ bgcolor: '#0f1b3a', color: '#00BFFF', textAlign: 'center', fontWeight: 800 }}>
            All Industrial Applications
            <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ bgcolor: '#16213e', p: 4 }}>
            <Grid container spacing={4}>
              {industrialApplications.map((app) => (
                <Grid item xs={6} sm={4} md={3} key={app.slug}>
                  <IndustryCard app={app} isActive={activeLink === `/industries/${app.slug}`} />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default memo(IndustrialApplicationsSection);