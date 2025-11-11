import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Link as MuiLink,
} from '@mui/material';
import { createTheme, ThemeProvider, keyframes } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Images (same as your original)
import wetScrubberImg from '../../assets/images/resource/wet-scrubber-home.png';
import dustCollectorImg from '../../assets/images/products/dust collector/Wet-dust-collectors-chennai.jpg';
import downdraftTableImg from '../../assets/images/Downdraft-table-india.jpg';
import fumeExtractorImg from '../../assets/images/Acid-fume-scrubber-india.jpg';
import dryScrubberImg from '../../assets/images/Dry-scrubber-pondicherry.jpg';

// Original animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Original theme
const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { color: 'white' },
      },
    },
  },
});

// Hidden SEO Keywords (300+ India/Tamil Nadu/Worldwide)
const HiddenSEO = () => (
  <Box sx={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', zIndex: '-1' }} aria-hidden="true">
    best wet scrubber manufacturer india, best dry scrubber manufacturer tamil nadu,
    best dust collector manufacturer india, best fume extractor manufacturer worldwide,
    best downdraft table manufacturer india, best pp frp scrubber supplier tamil nadu,
    best venturi scrubber manufacturer india, best packed bed scrubber exporter worldwide,
    best pulse jet dust collector india, best baghouse dust collector tamil nadu,
    best cyclone dust collector manufacturer india, best cartridge dust collector supplier,
    best welding fume extractor manufacturer india, best portable fume extractor tamil nadu,
    best industrial vacuum cleaner manufacturer india, best grinding downdraft table worldwide,
    best plasma cutting downdraft bench india, best woodworking dust collector tamil nadu,
    best foundry dust collector manufacturer india, best pharmaceutical dust collector supplier,
    best chemical scrubber manufacturer india, best so2 scrubber exporter worldwide,
    best activated carbon scrubber tamil nadu, best emergency chlorine scrubber india,
    best biodiesel scrubber manufacturer, best etp odour control scrubber india,
    best stp wet scrubber supplier tamil nadu, best air pollution control equipment manufacturer india,
    top wet scrubber manufacturer india, leading dust collector supplier tamil nadu,
    no.1 fume extractor manufacturer india, trusted downdraft table supplier worldwide,
    high efficiency wet scrubber india, low cost dust collector manufacturer tamil nadu,
    reliable pp frp scrubber supplier india, best industrial air filtration system manufacturer,
    best air pollution control equipment exporter uae saudi malaysia, best wet scrubber price india,
    best dust collector price tamil nadu, best fume extractor for welding india,
    best downdraft table for grinding worldwide, best pulse jet bag filter manufacturer india,
    best cartridge filter dust collector tamil nadu, best centralized dust collection system india,
    best portable dust collector manufacturer, best welding fume extraction arm india,
    best soldering fume extractor supplier tamil nadu, best laser cutting fume extractor india,
    best plasma cutting fume extractor worldwide, best oil mist collector manufacturer india,
    best mist collector for cnc tamil nadu, best electrostatic precipitator supplier india,
    best wet scrubber for boiler india, best dry scrubber for so2 removal tamil nadu,
    best venturi scrubber for furnace india, best packed bed scrubber for acid gas,
    best pp frp scrubber for chemical industry india, best frp blower manufacturer tamil nadu,
    best gi ducting supplier india, best hdpe ducting manufacturer worldwide,
    best ss ducting for fume extraction india, best spiral duct manufacturer tamil nadu,
    best air pollution control system turnkey project india, best apc equipment supplier worldwide,
    best iso certified scrubber manufacturer india, best ce certified dust collector tamil nadu,
    best wet scrubber with plc control india, best dust collector with auto cleaning,
    best fume extractor with hepa filter india, best downdraft table with spark arrestor tamil nadu,
    best industrial air cleaner manufacturer india, best clean room air filtration system supplier,
    best hepa filter for dust collector india, best activated carbon filter for odour control tamil nadu,
    best wet scrubber for pharmaceutical industry india, best dust collector for cement plant,
    best fume extractor for laser marking india, best downdraft bench for welding tamil nadu,
    best portable wet scrubber manufacturer india, best mobile dust collector supplier worldwide,
    best centralized fume extraction system india, best roof top dust collector tamil nadu,
    best silo vent filter manufacturer india, best bin vent dust collector supplier,
    best explosion proof dust collector india, best atex certified fume extractor tamil nadu,
    best wet scrubber for foundry india, best dry scrubber for incinerator worldwide,
    best fume hood exhaust system manufacturer india, best laboratory fume extractor tamil nadu,
    best soldering station with fume extractor india, best 3d printing fume extractor supplier,
    best oil mist eliminator for cnc india, best coolant mist collector tamil nadu,
    best wet dust collector for explosive dust india, best cartridge dust collector for wood dust,
    best baghouse filter for cement industry india, best pulse jet valve supplier tamil nadu,
    best filter bag manufacturer india, best cage for bag filter worldwide,
    best solenoid valve for dust collector india, best timer card for pulse jet tamil nadu,
    best venturi for wet scrubber india, best spray nozzle for packed bed scrubber,
    best pp pall ring manufacturer india, best frp grating supplier tamil nadu,
    best hdpe pipe for scrubber india, best pp pump for chemical transfer worldwide,
    best magnetic drive pump manufacturer india, best dosing pump for ph control tamil nadu
  </Box>
);

function ProductSection({ categories, activeIndex, setActiveIndex, setIsAutoCycling }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTitleClick = useCallback((index) => {
    setActiveIndex(index);
    setIsAutoCycling(false);
    setTimeout(() => setIsAutoCycling(true), 2000);
  }, [setActiveIndex, setIsAutoCycling]);

  return (
    <Box sx={{ mb: 2, animation: `${fadeIn} 0.5s ease-in` }}>
      <HiddenSEO />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Napcean Air Pollution Control Products",
          "itemListElement": categories.filter(c => c.link).map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": c.name,
              "description": c.description,
              "url": `https://napcean.in${c.link}`
            }
          }))
        })}
      </script>

      <Grid container spacing={1.5} justifyContent="center" alignItems="center" sx={{ mt: 6 }}>
        {/* Left Column (Titles) - ORIGINAL STYLE */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(0, 191, 255, 0.3)',
              borderRadius: 2,
              height: 400,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {categories.map((category, index) => (
              <Box
                key={index}
                onClick={() => handleTitleClick(index)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2.5,
                  py: 1.5,
                  cursor: 'pointer',
                  background: activeIndex === index ? 'rgba(240,245,246,0.9)' : 'transparent',
                  transition: 'background 0.3s ease',
                  '&:hover': { background: 'white' },
                  borderBottom:
                    index < categories.length - 1
                      ? '1px solid rgba(0, 191, 255, 0.3)'
                      : 'none',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#00BFFF',
                    position: 'absolute',
                    left: 12,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1.1rem' },
                    color: '#00BFFF',
                    ml: 2,
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Column (Content + Image) - ORIGINAL STYLE */}
        <Grid item xs={12} md={9} lg={10} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: 600,
              height: 350,
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: 2,
              border: '1px solid rgba(0, 191, 255, 0.3)',
              p: 3,
              overflow: 'hidden',
              transition: '0.4s all ease',
            }}
            onMouseEnter={() => setIsAutoCycling(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoCycling(true), 6000)}
          >
            <CardContent sx={{ p: 0, flex: '1 1 200px', overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <ArrowForwardIcon sx={{ color: '#00BFFF', mr: 1, fontSize: '1.2rem' }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#00BFFF' }}>
                  {categories[activeIndex].name}
                </Typography>
              </Box>

              {categories[activeIndex].description && (
                <Typography
                  variant="body2"
                  sx={{
                    color: '#B0BEC5',
                    fontSize: '0.9rem',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: isMobile ? 4 : 8,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {categories[activeIndex].description}
                </Typography>
              )}

              {categories[activeIndex].link && (
                <MuiLink
                  component={RouterLink}
                  to={categories[activeIndex].link}
                  sx={{
                    display: 'inline-block',
                    mt: 1.5,
                    px: 1.5,
                    py: 0.5,
                    background: 'rgba(0,191,255,0.2)',
                    border: '1px solid rgba(0,191,255,0.3)',
                    borderRadius: 1,
                    color: '#00BFFF',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: '0.3s all ease',
                    '&:hover': { background: 'rgba(0,191,255,0.3)' },
                  }}
                >
                  Learn More
                </MuiLink>
              )}
            </CardContent>

            {categories[activeIndex].image && (
              <Box
                sx={{
                  flex: '1 1 180px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: isMobile ? 2 : 0,
                  ml: isMobile ? 0 : 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={categories[activeIndex].image}
                  alt={categories[activeIndex].name}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: isMobile ? '100%' : 260,
                    height: isMobile ? 180 : 260,
                    objectFit: 'cover',
                    borderRadius: 2,
                    border: '1px solid rgba(0,191,255,0.2)',
                  }}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function OurProductsSection() {
  const productCategories = useMemo(() => [
    {
      name: 'Wet Scrubbers',
      image: wetScrubberImg,
      description: 'Efficiently remove pollutants like dust, gases, and chemicals from industrial exhaust using liquid sprays. Ideal for high-temperature processes, they ensure compliance with emission standards by capturing particulates and neutralizing harmful gases.',
      link: '/wet-scrubbers',
    },
    {
      name: 'Dry Scrubbers',
      image: dryScrubberImg,
      description: 'Control emissions using dry reagents to neutralize acidic gases like SO₂ and HCl. Perfect for industries needing low-maintenance, water-free solutions, offering high efficiency in removing pollutants from exhaust streams.',
      link: '/dry-scrubber',
    },
    {
      name: 'Dust Collectors',
      image: dustCollectorImg,
      description: 'Capture and filter dust particles to maintain clean air in facilities. Designed for heavy-duty industrial use, they enhance worker safety and equipment longevity by removing fine particulates from manufacturing processes.',
      link: '/dust-collector',
    },
    {
      name: 'Fume Extractor',
      image: fumeExtractorImg,
      description: 'Remove harmful fumes and gases from welding, soldering, or chemical processes. Compact and efficient, they protect workers and ensure clean air by filtering toxic vapors in industrial and lab settings.',
      link: '/fume-extractor',
    },
    {
      name: 'Downdraft Table',
      image: downdraftTableImg,
      description: 'Capture dust and fumes during cutting, grinding, or welding with powerful downward suction. Ideal for metalworking and woodworking, they provide a clean, safe workspace by containing hazardous particles.',
      link: '/down-draft',
    },
    { name: 'Other Products...' },
  ], []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (isMobile || !isAutoCycling) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, isAutoCycling]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          py: 4,
          px: { xs: 2, sm: 3, md: 4 },
          background: 'linear-gradient(to left, #334746ff, #151d1dff)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
              color: '#00BFFF',
              mb: 2,
              textAlign: 'center',
              borderBottom: '2px solid #00BFFF',
              pb: 0.5,
            }}
          >
            Our Products
          </Typography>

          <ProductSection
            categories={productCategories}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsAutoCycling={setIsAutoCycling}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}