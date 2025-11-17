import React, { useState, useCallback, memo } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
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
  components: { MuiTypography: { style: { color: 'white' } } },
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

// === CLEAN MOBILE CARD ===
const IndustryCard = memo(({ app, isActive, loading = "lazy" }) => (
  <Card
    elevation={4}
    sx={{
      width: '100%',
      height: { xs: 300, sm: 340 },
      borderRadius: 3,
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(10px)',
      border: isActive ? '2px solid #00BFFF' : '1px solid rgba(255,255,255,0.15)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 16px 32px rgba(0,191,255,0.25)',
      },
    }}
  >
    <CardMedia
      component="img"
      height={120}
      image={app.image}
      alt={app.name}
      loading={loading}
      sx={{ objectFit: 'cover', borderBottom: '1px solid rgba(0,191,255,0.1)' }}
    />
    <Box sx={{ p: 2.5, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: isActive ? '#00BFFF' : 'white', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
        {app.name}
      </Typography>
      <Typography variant="body2" sx={{ color: '#ccc', my: 1.5, fontSize: '0.85rem', lineHeight: 1.5 }}>
        {app.description}
      </Typography>
      <Button
        component={RouterLink}
        to={`/industries/${app.slug}`}
        size="small"
        sx={{
          mt: 1.5,
          px: 2.5,
          py: 0.8,
          background: 'rgba(0,191,255,0.15)',
          borderRadius: 50,
          fontWeight: 600,
          fontSize: '0.8rem',
          color: 'white',
          textTransform: 'none',
          '&:hover': { background: '#00BFFF', transform: 'scale(1.05)' },
        }}
      >
        Learn More
      </Button>
    </Box>
  </Card>
));

function IndustrialApplicationsSection({ activeLink }) {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const isMedium = useMediaQuery('(min-width:480px)');
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // First 4 cards load eagerly on mobile
  const visibleApps = industrialApplications.slice(0, isMedium ? 4 : 2);

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
              fontSize: { xs: '1.9rem', md: '2.8rem' },
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
              mb: 5,
              maxWidth: 800,
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1rem' },
            }}
          >
            Trusted air pollution control solutions across industries
          </Typography>
        </Container>

        {/* DESKTOP: ORIGINAL MARQUEE – UNCHANGED */}
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

        {/* MOBILE: CLEAN, RESPONSIVE GRID */}
        {!isDesktop && (
          <Box sx={{ px: { xs: 2, sm: 3 }, pb: 5 }}>
            <Grid container spacing={2.5} justifyContent="center">
              {visibleApps.map((app, idx) => (
                <Grid item xs={12} sm={6} key={app.slug}>
                  <Box sx={{ maxWidth: 360, mx: 'auto' }}>
                    <IndustryCard
                      app={app}
                      isActive={activeLink === `/industries/${app.slug}`}
                      loading={idx < 2 ? "eager" : "lazy"} // First two load instantly
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* SMALLER, NEAT BUTTON */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                onClick={handleOpen}
                size="medium"
                sx={{
                  px: { xs: 4, sm: 5 },
                  py: { xs: 1.2, sm: 1.5 },
                  background: 'rgba(0,191,255,0.18)',
                  color: '#00BFFF',
                  border: '1.5px solid #00BFFF',
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(0,191,255,0.15)',
                  '&:hover': {
                    background: '#00BFFF',
                    color: 'white',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(0,191,255,0.3)',
                  },
                }}
              >
                Explore All 10 Industries
              </Button>
            </Box>
          </Box>
        )}

        {/* DIALOG: RESPONSIVE GRID */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" PaperProps={{ sx: { borderRadius: 3 } }}>
          <DialogTitle sx={{ bgcolor: '#0f1b3a', color: '#00BFFF', textAlign: 'center', fontWeight: 800, py: 2.5 }}>
            All Industrial Applications
            <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 12, top: 12, color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ bgcolor: '#16213e', p: { xs: 2, md: 4 } }}>
            <Grid container spacing={3}>
              {industrialApplications.map((app) => (
                <Grid item xs={6} sm={6} md={4} lg={3} key={app.slug}>
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