import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link as MuiLink,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const solutions = [
  {
    title: 'Wet Scrubber',
    description:
      'Wet scrubbers, also known as wet dust collectors, are industrial air pollution control devices that use liquid to remove particulate matter or gases from an exhaust airstream. They work by passing contaminated gas through a liquid solution, typically water, which captures pollutants through absorption or impingement. Wet scrubbers are highly effective for removing soluble gases, fine particulates, and sticky or hazardous dusts that dry scrubbers cannot handle, making them ideal for industries like chemical processing, mining, and metal finishing.',
    link: '/wet-scrubbers',
  },
  {
    title: 'Dry Scrubber',
    description:
      'Dry scrubbers are air pollution control systems that remove acidic gases such as sulfur dioxide (SO2), hydrogen chloride (HCl), and hydrogen fluoride (HF) from exhaust streams without using liquid. They employ dry sorbent injection, where alkaline materials like lime or sodium bicarbonate react with pollutants to form solid waste products. Unlike wet scrubbers, dry systems produce no wastewater, reducing disposal costs and environmental impact. They are commonly used in power plants, cement kilns, and incinerators for reliable emission control.',
    link: '/dry-scrubber',
  },
  {
    title: 'Dust Collector',
    description:
      'Dust collectors are essential systems for capturing and removing fine dust particles from industrial air streams to maintain air quality and equipment efficiency. They use mechanisms like fabric filters (baghouses), cartridge filters, or cyclones to separate dust from the air, preventing health hazards and product contamination. Baghouse dust collectors, in particular, are versatile for high-volume applications in woodworking, metalworking, and pharmaceuticals, ensuring compliance with safety standards while extending the life of machinery.',
    link: '/dust-collector',
  },
  {
    title: 'Downdraft Table',
    description:
      'Downdraft tables are specialized workstations designed for capturing fumes, dust, and smoke at the source during processes like welding, grinding, and sanding. Air is drawn downward through a perforated table top into integrated filters or exhaust systems, containing contaminants directly at the work surface. This portable solution improves worker safety, reduces airborne pollutants, and maintains a clean workspace without the need for extensive ventilation, making it perfect for small to medium fabrication shops and repair facilities.',
    link: '/down-draft',
  },
  {
    title: 'Fume Extractor',
    description:
      'Fume extractors are targeted ventilation systems that capture and filter harmful welding fumes, vapors, and particulate matter before they reach the breathing zone. Equipped with flexible arms or hoods for precise positioning, they use HEPA or activated carbon filters to remove up to 99.97% of contaminants, protecting workers from respiratory issues and toxic exposure. These portable units are vital in automotive, electronics, and laboratory environments, ensuring safe air quality while complying with OSHA and EPA regulations.',
    link: '/fume-extractor',
  },
];

export default function SolutionSection() {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        background: `linear-gradient(to right, #1f2525ff, #151d1dff)`,
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ color: '#00BFFF', fontWeight: 600, mb: 1 }}
        >
          Our Products
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 6,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          Industrial Air Pollution Control Solutions
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {solutions.map((solution, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: 380,
                  height: 420,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'transparent',
                  border: '1px solid rgba(0,191,255,0.15)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.75)',
                  },
                  '&:hover .cardOverlay': {
                    opacity: 1,
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  className="cardOverlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0,0,0,0.28)',
                    opacity: 0,
                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: '#00BFFF', fontWeight: 700, mb: 2 }}
                  >
                    {solution.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#BFC5DC',
                      mb: 3,
                      px: { xs: 1, md: 2 },
                      lineHeight: 1.6,
                    }}
                  >
                    {solution.description}
                  </Typography>

                  <MuiLink
                    component={RouterLink}
                    to={solution.link}
                    underline="none"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontWeight: 700,
                      color: 'white',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      '&:hover': {
                        color: '#00BFFF',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    Read More <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}