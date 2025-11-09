// src/components/sections/ProductDetail.js
import React from 'react';
import { Box, Typography, Container, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Image paths
import wetScrubberImg from '../../assets/images/Wet-scrubber-chennai.jpg';
import dryScrubberImg from '../../assets/images/Dry-scrubber-pondicherry.jpg';
import bagHouseImg from '../../assets/images/baghouse-filter-chennai.jpg';
import acidFumeScrubberImg from '../../assets/images/Acid-fume-scrubber-india.jpg';
import downdraftTableImg from '../../assets/images/Downdraft-table-india.jpg';
import cartridgeDustCollectorImg from '../../assets/images/Cartridge-dust-collectors-india.jpg';
import grossingStationImg from '../../assets/images/Grossing-station-manufacturers.jpg';
import laserPlasmaFumeExtractorImg from '../../assets/images/Laser-plasma-fume-extractor-india.jpg';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
});

const products = [
  {
    id: 'wet-scrubber',
    name: 'Wet Scrubber',
    image: wetScrubberImg,
    fullDetails: 'NAPCEN offers CPCB-compliant packed bed wet scrubbers in Chennai for H2S, SO2, VOCs, and chemical fume removal. These high-efficiency air pollution control systems achieve up to 99.9% pollutant removal efficiency. Our wet scrubbers are designed for hospital and medical waste incinerators, channeling hot flue gases through a scrubbing liquid (typically water or an alkaline solution) to absorb and neutralize hazardous pollutants. As a leading manufacturer of Venturi scrubbers and water scrubber systems in India, NAPCEN provides robust, corrosion-resistant designs tailored for chemical, metal, and power industries to capture odors, acidic gases, and fine dust.',
  },
  {
    id: 'dry-scrubber',
    name: 'Dry Scrubber',
    image: dryScrubberImg,
    fullDetails: 'NAPCEN manufactures portable dry scrubbers in Pondicherry, offering compact, mobile, water-free systems for VOC, acid gas, and odor removal. Our dry VOC scrubbers in India provide 99% solvent vapor removal, ideal for paint booths, chemical plants, and laboratories. The H2S dry scrubber is an advanced air pollution control solution designed to efficiently remove hydrogen sulfide gas from industrial exhaust streams. NAPCEN also leads in manufacturing ammonia and emergency chlorine scrubbers in Pune, delivering 99%+ removal efficiency with corrosion-resistant systems for power generation and chemical industries.',
  },
  {
    id: 'bag-house-dust-collectors',
    name: 'Bag House Dust Collectors',
    image: bagHouseImg,
    fullDetails: 'NAPCEN offers custom baghouse dust collectors and fabric filter systems in Chennai, designed for high-efficiency, automated, and modular dust control in industries like cement and pharmaceuticals. Our baghouse dust collectors handle air volumes from 500 to 45,000 CMH with 12 to 400 filter bags. We also provide portable dust collectors and fume extractors in Chennai, featuring mobile, plug-and-play units for welding, grinding, and fume removal. Our two-stage dust collectors in Chennai offer coarse and fine dust removal with vertically mounted high-efficiency filter cartridges, ensuring clean air and regulatory compliance.',
  },
  {
    id: 'acid-fume-scrubber',
    name: 'Acid Fume Scrubber',
    image: acidFumeScrubberImg,
    fullDetails: 'NAPCEN is a leading manufacturer of acid fume scrubbers in India, effectively removing HCl, HF, and H2SO4 gases and mist with 99%+ efficiency. Our high-efficiency vent-gas and acid fume scrubbers in Bangalore achieve up to 99.9% removal with corrosion-resistant, fully supported systems. The NAPCEN HCl scrubber is engineered to eliminate hydrogen chloride gas from industrial exhaust streams. We also manufacture caustic fume scrubbers in Chennai to neutralize NaOH/KOH vapors using water or acid-based scrubbing, essential for chemical, battery, and fertilizer industries.',
  },
  {
    id: 'downdraft-tables',
    name: 'Downdraft Tables',
    image: downdraftTableImg,
    fullDetails: 'NAPCEN’s downdraft dust collector tables are advanced air filtration systems designed to capture dust, fumes, and airborne particulates at the source. Constructed from durable materials like powder-coated steel or MDF, our downdraft tables are equipped with high-efficiency filters. Our grinding downdraft tables are specifically designed for dust and fume capture during grinding operations, ideal for metalworking, woodworking, automotive, and general fabrication workshops. NAPCEN’s portable downdraft tables offer flexibility and robust performance for safe and clean operations.',
  },
  {
    id: 'cartridge-dust-collector',
    name: 'Cartridge Dust Collector',
    image: cartridgeDustCollectorImg,
    fullDetails: 'NAPCEN’s cartridge dust collector is a compact, high-efficiency system engineered to remove medium to fine dust particles from industrial air streams. Our portable dust collectors and fume extractors in Chennai provide mobile, plug-and-play solutions for welding, grinding, and fume removal. These systems use advanced filtration media to capture fine dust, ensuring clean air in manufacturing and processing environments like welding and pharmaceuticals. NAPCEN’s cartridge dust collectors are designed for efficiency and ease of maintenance, supporting air volumes from 500 to 45,000 CMH.',
  },
  {
    id: 'grossing-station',
    name: 'Grossing Station',
    image: grossingStationImg,
    fullDetails: 'NAPCEN’s grossing stations are ventilated workstations designed for safe specimen handling in pathology labs, ensuring protection from biohazards and efficient workflow in medical diagnostics. Our systems integrate advanced ventilation to control odors and hazardous fumes, providing a safe environment for laboratory personnel. NAPCEN offers custom designs in Chennai, tailored for medical and research facilities, with high-efficiency filtration and durable construction to meet stringent safety standards.',
  },
  {
    id: 'laser-plasma-fume-extractor',
    name: 'Laser/Plasma Fume Extractor',
    image: laserPlasmaFumeExtractorImg,
    fullDetails: 'The NAPCEN laser fume extractor is a high-efficiency air filtration system designed to capture and remove hazardous fumes and particles generated during laser and plasma cutting operations. It uses HEPA filters, activated carbon, or chemical media to filter airborne pollutants through a high-efficiency suction system. As a leading manufacturer in Chennai, NAPCEN provides robust, reliable systems for metal fabrication industries, ensuring worker safety and regulatory compliance.',
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mt: 4, textAlign: 'center', color: '#333' }}>
          Product Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 8, backgroundColor: '#070431ff' }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: 'center',
              color: '#4CAF50',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            {product.name}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={`${product.name} - NAPCEN Air Pollution Control`}
              sx={{
                width: { xs: '100%', sm: '80%', md: '60%' },
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              textAlign: 'justify',
            }}
          >
            {product.fullDetails}
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ProductDetail;