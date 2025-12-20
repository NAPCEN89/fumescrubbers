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

export default function ProductClient({ product, category }: { product: any; category: string }) {
  const [openBrochure, setOpenBrochure] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);

  const imageSrc = product.image ?? '/images/placeholder-product.jpg';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: DARK_BG, minHeight: '100vh', color: 'white', pb: 10 }}>
        
        {/* 1. HERO TITLE SECTION */}
        <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography sx={{ color: CYAN, fontWeight: 900, letterSpacing: 3, fontSize: '0.8rem', mb: 2 }}>
              INDUSTRIAL SYSTEMS // {category.toUpperCase()}
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1, mb: 3 }}>
              {product.label}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.8, mb: 6 }}>
              {product.description}
            </Typography>
          </Box>
        </Container>

        {/* 2. CENTERED IMAGE SECTION */}
        <Container maxWidth="lg">
          <Paper
            elevation={12}
            sx={{
              maxWidth: '700px',
              margin: '0 auto',
              borderRadius: '24px',
              bgcolor: 'white',
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: `1px solid rgba(0,229,255,0.3)`,
              overflow: 'hidden'
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 280, sm: 380, md: 460 } }}>
              <Image
                src={imageSrc}
                alt={product.label}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Paper>
        </Container>

        {/* 3. TECHNICAL DETAILS GRID */}
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: CYAN, fontWeight: 900, letterSpacing: 2, display: 'block', mb: 3 }}>
                Technical Parameters
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {Object.entries(product.specs || {}).map(([key, val]: any) => (
                  <Box key={key} sx={{ p: 2, bgcolor: GLASS_BG, border: `1px solid rgba(255,255,255,0.05)`, borderRadius: '8px' }}>
                    <Typography variant="caption" sx={{ color: CYAN, fontWeight: 800, textTransform: 'uppercase' }}>{key}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5 }}>{val}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: CYAN, fontWeight: 900, letterSpacing: 2, display: 'block', mb: 3 }}>
                Core Capabilities
              </Typography>
              <Stack spacing={2}>
                {product.features?.map((f: string, i: number) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <CheckCircleIcon sx={{ color: CYAN, fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>

        {/* 4. PROCUREMENT & RESOURCES */}
        <Box sx={{ mt: 15, py: 10, bgcolor: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" fontWeight={900} mb={8} sx={{ color: 'white' }}>
              Procurement & <span style={{ color: ACCENT_GREEN }}>Resources</span>
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Paper elevation={20} sx={{ height: '100%', p: 4, borderRadius: 5, bgcolor: '#2A2A2E', border: `1px solid ${ACCENT_GREEN}30`, transition: '0.4s', '&:hover': { transform: 'translateY(-10px)' } }}>
                  <FolderIcon sx={{ fontSize: 50, color: ACCENT_GREEN, mb: 2 }} />
                  <Typography variant="h5" fontWeight={800} color="white" gutterBottom>Brochure</Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.6)" mb={4}>Download technical documentation for the {product.label}.</Typography>
                  <Button fullWidth variant="contained" size="large" onClick={() => setOpenBrochure(true)} sx={{ py: 1.5, fontWeight: 700, borderRadius: 2, bgcolor: ACCENT_GREEN }}>
                    Request Brochure
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper elevation={20} sx={{ height: '100%', p: 4, borderRadius: 5, bgcolor: '#2A2A2E', border: `1px solid ${ACCENT_GREEN}30`, transition: '0.4s', '&:hover': { transform: 'translateY(-10px)' } }}>
                  <InsertDriveFileIcon sx={{ fontSize: 50, color: ACCENT_GREEN, mb: 2 }} />
                  <Typography variant="h5" fontWeight={800} color="white" gutterBottom>Full Catalog</Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.6)" mb={4}>Explore our complete range of industrial {category} solutions.</Typography>
                  <Button fullWidth variant="outlined" sx={{ mb: 2, borderColor: ACCENT_GREEN, color: ACCENT_GREEN }}>View Online</Button>
                  <Button fullWidth variant="contained" size="large" onClick={() => setOpenCatalog(true)} sx={{ py: 1.5, fontWeight: 700, borderRadius: 2, bgcolor: ACCENT_GREEN }}>
                    Physical Copy
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* MODALS */}
        <Modal open={openBrochure} onClose={() => setOpenBrochure(false)}>
          <Box sx={MODAL_STYLE}>
            <Typography variant="h4" color={ACCENT_GREEN} textAlign="center" fontWeight={900} mb={4}>Brochure Request</Typography>
            <TextField label="Your Name" fullWidth sx={{ mb: 3 }} InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: ACCENT_GREEN }} /></InputAdornment> }} />
            <TextField label="Work Email" fullWidth sx={{ mb: 3 }} />
            <TextField label="Mobile Number" fullWidth sx={{ mb: 4 }} InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIcon sx={{ color: ACCENT_GREEN }} /></InputAdornment> }} />
            <Button fullWidth variant="contained" size="large" sx={{ py: 2, fontWeight: 700, bgcolor: ACCENT_GREEN }}>Send Brochure</Button>
          </Box>
        </Modal>

        <Modal open={openCatalog} onClose={() => setOpenCatalog(false)}>
          <Box sx={MODAL_STYLE}>
            <Typography variant="h4" color={ACCENT_GREEN} textAlign="center" fontWeight={900} mb={4}>Physical Catalog</Typography>
            <TextField label="Full Name" fullWidth sx={{ mb: 2 }} />
            <TextField label="Company" fullWidth sx={{ mb: 2 }} />
            <TextField label="Shipping Address" fullWidth multiline rows={3} sx={{ mb: 3 }} />
            <Button fullWidth variant="contained" size="large" sx={{ py: 2, fontWeight: 700, bgcolor: ACCENT_GREEN }}>Request Dispatch</Button>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
}