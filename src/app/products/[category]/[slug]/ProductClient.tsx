'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Modal,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Folder as FolderIcon,
  InsertDriveFile as InsertDriveFileIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// THEME & COLOR CONFIG
const CYAN = '#00E5FF';
const ACCENT_GREEN = '#4CAF50';
const DARK_BG = '#0A1F22';
const GLASS_BG = 'rgba(255, 255, 255, 0.03)';
const MODAL_BG = '#1C1C1E';

const theme = createTheme({
  palette: { primary: { main: ACCENT_GREEN } },
  typography: { fontFamily: '"Poppins", "Segoe UI", sans-serif' },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: 'white',
            '& fieldset': { borderColor: 'rgba(76,175,80,0.4)' },
            '&:hover fieldset': { borderColor: ACCENT_GREEN },
            '&.Mui-focused fieldset': { borderColor: ACCENT_GREEN },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
        },
      },
    },
  },
});

const MODAL_STYLE = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '92%', sm: '480px', md: '520px' },
  maxHeight: '92vh',
  bgcolor: MODAL_BG,
  border: `3px solid ${ACCENT_GREEN}`,
  borderRadius: '28px',
  p: { xs: 4, md: 5 },
  boxShadow: `0 0 70px ${ACCENT_GREEN}60`,
  outline: 'none',
  overflowY: 'auto',
};

export default function ProductClient({ 
  product, 
  category, 
  categoryTitle 
}: { 
  product: any; 
  category: string; 
  categoryTitle: string;
}) {
  const [openBrochure, setOpenBrochure] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);

  const imageSrc = product.image ?? '/images/placeholder-product.jpg';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: DARK_BG, minHeight: '100vh', color: 'white', pb: 10 }}>
        
        {/* Ethical Hidden Keywords – Visible to Google, Hidden from Users */}
        <div className="sr-only" aria-hidden="true">
          {product.label} manufacturer Chennai, {product.label} manufacturer Tamil Nadu, 
          {product.label} manufacturer Puducherry, {product.label} manufacturer India, 
          {product.label} price India, CPCB compliant {product.label.toLowerCase()}, 
          industrial air pollution control equipment Puducherry, NAPCEN {product.label}
        </div>

        {/* Structured Data Markup Wrapper */}
        <section itemScope itemType="https://schema.org/Product">
          <meta itemProp="name" content={`${product.label} - NAPCEN`} />
          <meta itemProp="description" content={product.description} />
          <meta itemProp="brand" content="NAPCEN" />
          <meta itemProp="manufacturer" content="NAPCEN" />
          <meta itemProp="image" content={imageSrc} />

          {/* 1. HERO TITLE SECTION */}
          <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, textAlign: 'center' }}>
            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
              <Typography 
                sx={{ 
                  color: CYAN, 
                  fontWeight: 900, 
                  letterSpacing: 3, 
                  fontSize: '0.9rem', 
                  mb: 2 
                }}
              >
                INDUSTRIAL AIR POLLUTION CONTROL // {categoryTitle.toUpperCase()}
              </Typography>

              <Typography 
                variant="h1" 
                component="h1"
                sx={{ 
                  fontWeight: 900, 
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' }, 
                  lineHeight: 1.1, 
                  mb: 4 
                }}
                itemProp="name"
              >
                {product.label}
                <br />
                <span style={{ color: CYAN, fontSize: '0.7em' }}>
                  Manufacturer in Puducherry | Serving Chennai & Tamil Nadu
                </span>
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255,255,255,0.85)', 
                  fontSize: { xs: '1.1rem', md: '1.3rem' }, 
                  lineHeight: 1.8, 
                  mb: 6,
                  maxWidth: '800px',
                  mx: 'auto'
                }}
                itemProp="description"
              >
                {product.description} NAPCEN delivers CPCB/TNPCB compliant solutions with proven efficiency up to 99.9% for industrial air pollution control across India.
              </Typography>
            </Box>
          </Container>

          {/* 2. MAIN PRODUCT IMAGE */}
          <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
            <Paper
              elevation={16}
              sx={{
                maxWidth: '800px',
                margin: '0 auto',
                borderRadius: '28px',
                bgcolor: 'white',
                p: { xs: 3, md: 6 },
                textAlign: 'center',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                border: `2px solid rgba(0,229,255,0.4)`,
                overflow: 'hidden'
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: { xs: 300, sm: 420, md: 520 } }}>
                <Image
                  src={imageSrc}
                  alt={`${product.label} - High-Efficiency Industrial Air Pollution Control System by NAPCEN, Manufactured in Puducherry, India`}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  itemProp="image"
                />
              </Box>
            </Paper>
          </Container>

          {/* 3. TECHNICAL DETAILS GRID */}
          <Container maxWidth="lg" sx={{ mt: 12 }}>
            <Grid container spacing={8} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: CYAN, 
                    fontWeight: 900, 
                    letterSpacing: 3, 
                    display: 'block', 
                    mb: 4,
                    fontSize: '1.1rem'
                  }}
                >
                  Key Technical Specifications
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                  {Object.entries(product.specs || {}).map(([key, val]: any) => (
                    <Box 
                      key={key} 
                      sx={{ 
                        p: 3, 
                        bgcolor: GLASS_BG, 
                        border: `1px solid rgba(0,229,255,0.2)`, 
                        borderRadius: '12px',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      <Typography variant="caption" sx={{ color: CYAN, fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        {key}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 700, mt: 1, fontSize: '1.1rem' }}>
                        {val}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: CYAN, 
                    fontWeight: 900, 
                    letterSpacing: 3, 
                    display: 'block', 
                    mb: 4,
                    fontSize: '1.1rem'
                  }}
                >
                  Core Features & Benefits
                </Typography>
                <Stack spacing={3}>
                  {product.features?.map((f: string, i: number) => (
                    <Stack key={i} direction="row" spacing={3} alignItems="flex-start">
                      <CheckCircleIcon sx={{ color: CYAN, fontSize: 28, flexShrink: 0, mt: 0.5 }} />
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        {f}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>

          {/* 4. APPLICATIONS SECTION (Added for Topical Depth) */}
          {product.applications && (
            <Container maxWidth="lg" sx={{ mt: 12, pb: 8 }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: CYAN, 
                  fontWeight: 900, 
                  letterSpacing: 3, 
                  display: 'block', 
                  textAlign: 'center',
                  mb: 5,
                  fontSize: '1.1rem'
                }}
              >
                Ideal Applications
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {product.applications.map((app: string, i: number) => (
                  <Paper 
                    key={i}
                    sx={{ 
                      px: 4, 
                      py: 2, 
                      bgcolor: 'rgba(0,229,255,0.1)', 
                      border: '1px solid rgba(0,229,255,0.3)',
                      borderRadius: '50px'
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {app}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Container>
          )}

          {/* 5. PROCUREMENT & RESOURCES */}
          <Box sx={{ mt: 8, py: 12, bgcolor: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Container maxWidth="lg">
              <Typography variant="h3" textAlign="center" fontWeight={900} mb={10} sx={{ color: 'white', fontSize: { xs: '2.2rem', md: '3rem' } }}>
                Get Technical Details & <span style={{ color: ACCENT_GREEN }}>Quote</span>
              </Typography>
              <Grid container spacing={6} justifyContent="center">
                <Grid item xs={12} md={5}>
                  <Paper elevation={20} sx={{ height: '100%', p: { xs: 4, md: 5 }, borderRadius: 6, bgcolor: '#222226', border: `2px solid ${ACCENT_GREEN}40`, transition: '0.4s', '&:hover': { transform: 'translateY(-12px)', boxShadow: `0 20px 60px rgba(76,175,80,0.3)` } }}>
                    <FolderIcon sx={{ fontSize: 60, color: ACCENT_GREEN, mb: 3 }} />
                    <Typography variant="h5" fontWeight={800} color="white" gutterBottom>Product Brochure</Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.7)" mb={5}>Download detailed specifications, dimensions, and performance data for the {product.label}.</Typography>
                    <Button fullWidth variant="contained" size="large" onClick={() => setOpenBrochure(true)} sx={{ py: 2, fontWeight: 700, borderRadius: 3, bgcolor: ACCENT_GREEN, fontSize: '1.1rem' }}>
                      Request Brochure
                    </Button>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper elevation={20} sx={{ height: '100%', p: { xs: 4, md: 5 }, borderRadius: 6, bgcolor: '#222226', border: `2px solid ${ACCENT_GREEN}40`, transition: '0.4s', '&:hover': { transform: 'translateY(-12px)', boxShadow: `0 20px 60px rgba(76,175,80,0.3)` } }}>
                    <InsertDriveFileIcon sx={{ fontSize: 60, color: ACCENT_GREEN, mb: 3 }} />
                    <Typography variant="h5" fontWeight={800} color="white" gutterBottom>Full Product Catalog</Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.7)" mb={5}>Explore our complete range of wet scrubbers, dust collectors, and fume extraction systems.</Typography>
                    <Button fullWidth variant="contained" size="large" onClick={() => setOpenCatalog(true)} sx={{ py: 2, fontWeight: 700, borderRadius: 3, bgcolor: ACCENT_GREEN, fontSize: '1.1rem' }}>
                      Request Physical Copy
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* MODALS – Unchanged but polished */}
          <Modal open={openBrochure} onClose={() => setOpenBrochure(false)}>
            <Box sx={MODAL_STYLE}>
              <Typography variant="h4" color={ACCENT_GREEN} textAlign="center" fontWeight={900} mb={4}>Request {product.label} Brochure</Typography>
              <TextField label="Your Name" fullWidth sx={{ mb: 3 }} InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: ACCENT_GREEN }} /></InputAdornment> }} />
              <TextField label="Company Name" fullWidth sx={{ mb: 3 }} />
              <TextField label="Work Email" fullWidth sx={{ mb: 3 }} />
              <TextField label="Mobile Number" fullWidth sx={{ mb: 4 }} InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIcon sx={{ color: ACCENT_GREEN }} /></InputAdornment> }} />
              <Button fullWidth variant="contained" size="large" sx={{ py: 2.5, fontWeight: 700, bgcolor: ACCENT_GREEN, fontSize: '1.1rem' }}>Send Brochure Instantly</Button>
            </Box>
          </Modal>

          <Modal open={openCatalog} onClose={() => setOpenCatalog(false)}>
            <Box sx={MODAL_STYLE}>
              <Typography variant="h4" color={ACCENT_GREEN} textAlign="center" fontWeight={900} mb={4}>Request Physical Catalog</Typography>
              <TextField label="Full Name" fullWidth sx={{ mb: 3 }} />
              <TextField label="Company" fullWidth sx={{ mb: 3 }} />
              <TextField label="Designation" fullWidth sx={{ mb: 3 }} />
              <TextField label="Shipping Address" fullWidth multiline rows={4} sx={{ mb: 4 }} />
              <Button fullWidth variant="contained" size="large" sx={{ py: 2.5, fontWeight: 700, bgcolor: ACCENT_GREEN, fontSize: '1.1rem' }}>Request Dispatch</Button>
            </Box>
          </Modal>
        </section>
      </Box>
    </ThemeProvider>
  );
}