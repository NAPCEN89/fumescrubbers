import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Link as MuiLink,
  Button,
  Modal,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  InputAdornment,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import QuoteIcon from '@mui/icons-material/FormatQuote';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from 'emailjs-com';

// Import PDFs
import productBrochurePdf from '../../assets/document/details/baghouse.pdf';
import commonCatalogPdf from '../../assets/document/details/napcen.pdf';

const scrubberProducts = [
  'Packed Bed Wet Scrubber',
  'Venturi Scrubber',
  'Ammonia Scrubber',
  'HCL Scrubber',
  'Nitric Acid Scrubber',
  'Chromic Acid Scrubber',
  'Acid Fume Scrubber',
  'Alkali Fume Scrubber',
  'Hospital Waste Incinerator Wet Scrubber',
  'Chlorine Scrubber',
  'Vent Gas Scrubber',
  'Boiler Flue Gas Scrubber',
  'Sulfuric Acid Scrubber',
  'CO2 Scrubber',
  'Foundry Exhaust Scrubber',
  'Glue Vapour Scrubber',
  'Caustic',
  'Plastic Fume Scrubber',
];

const theme = createTheme({
  typography: { fontFamily: ['"Poppins"', 'sans-serif'].join(',') },
  components: {
    MuiTypography: { styleOverrides: { root: { color: 'white' } } },
    MuiLink: {
      styleOverrides: {
        root: { color: '#4CAF50', textDecoration: 'none', '&:hover': { color: '#66BB6A' } },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1E',
          borderRadius: '12px',
          '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)', borderColor: '#4CAF50' },
          '&.Mui-focused': { backgroundColor: 'rgba(76, 175, 80, 0.1)', borderColor: '#4CAF50', boxShadow: '0 0 12px rgba(76, 175, 80, 0.3)' },
        },
        icon: { color: '#4CAF50' },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#1C1C1E',
          '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.2)', color: '#66BB6A' },
          '&.Mui-selected': { backgroundColor: 'rgba(76, 175, 80, 0.3)', color: '#66BB6A' },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { color: 'white', '&.Mui-focused': { color: '#4CAF50' } } },
    },
    MuiOutlinedInput: {
      styleOverrides: { notchedOutline: { borderColor: 'rgba(76, 175, 80, 0.5)' } },
    },
  },
});

const ResourcesAndQuote = ({ isPresentationOpen }) => {
  const [openBrochureModal, setOpenBrochureModal] = useState(false);
  const [openCatalogModal, setOpenCatalogModal] = useState(false);
  const [openQuoteModal, setOpenQuoteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [brochureFormData, setBrochureFormData] = useState({ product: '', name: '', mobile: '', message: '' });
  const [quoteFormData, setQuoteFormData] = useState({ product: '', name: '' });
  const [catalogFormData, setCatalogFormData] = useState({ product: '', name: '', companyName: '', address: '', mobile: '' });
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handlers
  const handleOpen = (setter) => () => setter(true);
  const handleClose = (setter, resetForm, resetErrors) => () => {
    setter(false);
    resetForm({});
    resetErrors({});
    setStatus('');
    setStatusType('');
    setIsSubmitted(false);
  };

  const handleInputChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (e) => {
    const value = e.target.value;
    setSelectedProduct(value);
    setBrochureFormData((prev) => ({ ...prev, product: value }));
  };

  const validateForm = (data, type) => {
    const errors = {};
    if (!data.product) errors.product = 'Please select a product';
    if (!data.name?.trim()) errors.name = 'Name is required';
    if (type !== 'quote') {
      if (!data.mobile?.trim()) errors.mobile = 'Mobile is required';
      else if (!/^\d{10}$/.test(data.mobile)) errors.mobile = '10 digits required';
      if (type === 'brochure' && !data.message?.trim()) errors.message = 'Description is required';
    }
    if (type === 'catalog') {
      if (!data.companyName?.trim()) errors.companyName = 'Company name required';
      if (!data.address?.trim()) errors.address = 'Address required';
    }
    return errors;
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(brochureFormData, 'brochure');
    if (Object.keys(errors).length === 0) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            form_type: 'Brochure Request',
            product: brochureFormData.product,
            from_name: brochureFormData.name,
            mobile: brochureFormData.mobile,
            message: brochureFormData.message,
            to_email: 'sales@napcen.com',
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setStatus('Brochure request sent! Download enabled.');
          setStatusType('success');
          setIsSubmitted(true);
        })
        .catch(() => {
          setStatus('Failed. Try again.');
          setStatusType('error');
        });
    } else {
      setFormErrors(errors);
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(quoteFormData, 'quote');
    if (Object.keys(errors).length === 0) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            form_type: 'Quote Request',
            product: quoteFormData.product,
            from_name: quoteFormData.name,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setStatus('Quote request sent!');
          setStatusType('success');
          setQuoteFormData({ product: '', name: '' });
          setOpenQuoteModal(false);
        })
        .catch(() => {
          setStatus('Failed. Try again.');
          setStatusType('error');
        });
    } else {
      setFormErrors(errors);
    }
  };

  const handleCatalogSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(catalogFormData, 'catalog');
    if (Object.keys(errors).length === 0) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            form_type: 'Catalog Request',
            product: catalogFormData.product,
            from_name: catalogFormData.name,
            company_name: catalogFormData.companyName,
            address: catalogFormData.address,
            mobile: catalogFormData.mobile,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setStatus('Catalog request sent!');
          setStatusType('success');
          setCatalogFormData({ product: '', name: '', companyName: '', address: '', mobile: '' });
          setOpenCatalogModal(false);
        })
        .catch(() => {
          setStatus('Failed. Try again.');
          setStatusType('error');
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" sx={{ mt: { xs: 3, md: 5 } }}>
          {/* 1. Product Brochure */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={8}
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: 3,
                background: 'rgba(28, 28, 30, 0.8)',
                border: '1px solid rgba(76, 175, 80, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.4)', borderColor: '#4CAF50' },
                minHeight: 200,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FolderIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#4CAF50', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  Product Brochure
                </Typography>
              </Box>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'rgba( Translated to English: 255,255,255,0.8)' }}>Select Product</InputLabel>
                <Select value={selectedProduct} onChange={handleProductChange} label="Select Product" sx={{ color: 'white' }}>
                  {scrubberProducts.map((p) => (
                    <MenuItem key={p} value={p}>{p}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <MuiLink
                  href={isSubmitted ? productBrochurePdf : '#'}
                  target="_blank"
                  rel="noopener"
                  sx={{ opacity: isSubmitted ? 1 : 0.5, pointerEvents: isSubmitted ? 'auto' : 'none' }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>View PDF</Typography>
                </MuiLink>

                <MuiLink
                  href={isSubmitted ? productBrochurePdf : '#'}
                  download={`Napcen_${selectedProduct || 'Brochure'}.pdf`}
                  sx={{ opacity: isSubmitted ? 1 : 0.5, pointerEvents: isSubmitted ? 'auto' : 'none' }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#66BB6A' }}>Download</Typography>
                </MuiLink>

                <Button
                  onClick={handleOpen(setOpenBrochureModal)}
                  disabled={!selectedProduct}
                  sx={{
                    mt: 1,
                    bgcolor: selectedProduct ? '#4CAF50' : 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#43A047' },
                  }}
                >
                  Request Brochure
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* 2. Company Catalog */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={8}
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: 3,
                background: 'rgba(28, 28, 30, 0.8)',
                border: '1px solid rgba(76, 175, 80, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.4)', borderColor: '#4CAF50', cursor: 'pointer' },
                minHeight: 200,
              }}
              onClick={handleOpen(setOpenCatalogModal)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <InsertDriveFileIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#4CAF50', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  Company Catalog
                </Typography>
              </Box>
              <MuiLink href={commonCatalogPdf} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>
                <Typography variant="body2" sx={{ color: '#4CAF50', fontWeight: 500 }}>View Catalog</Typography>
              </MuiLink>
              <MuiLink href={commonCatalogPdf} download="Napcen_Catalog.pdf" onClick={(e) => e.stopPropagation()}>
                <Typography variant="body2" sx={{ color: '#66BB6A', fontWeight: 600, mt: 0.5 }}>Download</Typography>
              </MuiLink>
            </Paper>
          </Grid>

          {/* 3. Request a Quote */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={8}
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: 3,
                background: 'rgba(28, 28, 30, 0.8)',
                border: '1px solid rgba(76, 175, 80, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.4)', borderColor: '#4CAF50' },
                minHeight: 200,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <QuoteIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: '#4CAF50', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  Request a Quote
                </Typography>
              </Box>
              <Button
                onClick={handleOpen(setOpenQuoteModal)}
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: '#4CAF50',
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#43A047' },
                }}
              >
                Get Quote Now
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* BROCHURE MODAL */}
        <Modal open={openBrochureModal} onClose={handleClose(setOpenBrochureModal, setBrochureFormData, setFormErrors)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '92%', sm: 460 },
              maxHeight: '90vh',
              overflowY: 'auto',
              bgcolor: '#1C1C1E',
              border: '1px solid #4CAF50',
              borderRadius: 3,
              p: { xs: 3, sm: 4 },
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
            }}
          >
            <Typography variant="h5" sx={{ color: '#4CAF50', mb: 3, fontWeight: 600, textAlign: 'center' }}>
              Request Product Brochure
            </Typography>

            <Box component="form" onSubmit={handleBrochureSubmit}>
              <FormControl fullWidth sx={{ mb: 2.5 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.8)' }}>Product</InputLabel>
                <Select
                  name="product"
                  value={brochureFormData.product}
                  onChange={handleInputChange(setBrochureFormData)}
                  label="Product"
                >
                  {scrubberProducts.map((p) => (
                    <MenuItem key={p} value={p}>{p}</MenuItem>
                  ))}
                </Select>
                {formErrors.product && <Typography color="error" variant="caption">{formErrors.product}</Typography>}
              </FormControl>

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={brochureFormData.name}
                onChange={handleInputChange(setBrochureFormData)}
                sx={{ mb: 2.5 }}
                InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: '#4CAF50' }} /></InputAdornment> }}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />

              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={brochureFormData.mobile}
                onChange={handleInputChange(setBrochureFormData)}
                sx={{ mb: 2.5 }}
                InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIcon sx={{ color: '#4CAF50' }} /></InputAdornment> }}
                error={!!formErrors.mobile}
                helperText={formErrors.mobile}
              />

              <TextField
                fullWidth
                label="Description / Requirement"
                name="message"
                value={brochureFormData.message}
                onChange={handleInputChange(setBrochureFormData)}
                multiline
                rows={3}
                placeholder="Tell us your needs..."
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}><DescriptionIcon sx={{ color: '#4CAF50' }} /></InputAdornment>,
                }}
                error={!!formErrors.message}
                helperText={formErrors.message || 'Optional but recommended'}
              />

              {status && (
                <Typography sx={{ textAlign: 'center', color: statusType === 'success' ? '#4CAF50' : '#f44336', mb: 2, fontWeight: 600 }}>
                  {status}
                </Typography>
              )}

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button onClick={handleClose(setOpenBrochureModal, setBrochureFormData, setFormErrors)} sx={{ color: '#fff' }}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" sx={{ bgcolor: '#4CAF50', '&:hover': { bgcolor: '#43A047' } }}>
                  Send Request
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>

        {/* QUOTE MODAL */}
        <Modal open={openQuoteModal} onClose={handleClose(setOpenQuoteModal, setQuoteFormData, setFormErrors)}>
          <Box sx={{ ...modalStyle }}>
            <Typography variant="h5" sx={{ color: '#4CAF50', mb: 3, fontWeight: 600, textAlign: 'center' }}>
              Request a Quote
            </Typography>
            <Box component="form" onSubmit={handleQuoteSubmit}>
              <FormControl fullWidth sx={{ mb: 2.5 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.8)' }}>Product</InputLabel>
                <Select name="product" value={quoteFormData.product} onChange={handleInputChange(setQuoteFormData)} label="Product">
                  {scrubberProducts.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
                </Select>
                {formErrors.product && <Typography color="error" variant="caption">{formErrors.product}</Typography>}
              </FormControl>

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={quoteFormData.name}
                onChange={handleInputChange(setQuoteFormData)}
                sx={{ mb: 2.5 }}
                InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: '#4CAF50' }} /></InputAdornment> }}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />

              {status && (
                <Typography sx={{ textAlign: 'center', color: statusType === 'success' ? '#4CAF50' : '#f44336', mb: 2 }}>
                  {status}
                </Typography>
              )}

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button onClick={handleClose(setOpenQuoteModal, setQuoteFormData, setFormErrors)} sx={{ color: '#fff' }}>Cancel</Button>
                <Button type="submit" variant="contained" sx={{ bgcolor: '#4CAF50', '&:hover': { bgcolor: '#43A047' } }}>Submit</Button>
              </Box>
            </Box>
          </Box>
        </Modal>

        {/* CATALOG MODAL */}
        <Modal open={openCatalogModal} onClose={handleClose(setOpenCatalogModal, setCatalogFormData, setFormErrors)}>
          <Box sx={{ ...modalStyle }}>
            <Typography variant="h5" sx={{ color: '#4CAF50', mb: 3, fontWeight: 600, textAlign: 'center' }}>
              Request Company Catalog
            </Typography>
            <Box component="form" onSubmit={handleCatalogSubmit}>
              <FormControl fullWidth sx={{ mb: 2.5 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.8)' }}>Product</InputLabel>
                <Select name="product" value={catalogFormData.product} onChange={handleInputChange(setCatalogFormData)} label="Product">
                  {scrubberProducts.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
                </Select>
              </FormControl>

              <TextField fullWidth label="Name" name="name" value={catalogFormData.name} onChange={handleInputChange(setCatalogFormData)} sx={{ mb: 2.5 }} InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: '#4CAF50' }} /></InputAdornment> }} />
              <TextField fullWidth label="Company" name="companyName" value={catalogFormData.companyName} onChange={handleInputChange(setCatalogFormData)} sx={{ mb: 2.5 }} />
              <TextField fullWidth label="Address" name="address" value={catalogFormData.address} onChange={handleInputChange(setCatalogFormData)} sx={{ mb: 2.5 }} />
              <TextField fullWidth label="Mobile" name="mobile" value={catalogFormData.mobile} onChange={handleInputChange(setCatalogFormData)} sx={{ mb: 2.5 }} InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIcon sx={{ color: '#4CAF50' }} /></InputAdornment> }} />

              {status && (
                <Typography sx={{ textAlign: 'center', color: statusType === 'success' ? '#4CAF50' : '#f44336', mb: 2 }}>
                  {status}
                </Typography>
              )}

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button onClick={handleClose(setOpenCatalogModal, setCatalogFormData, setFormErrors)} sx={{ color: '#fff' }}>Cancel</Button>
                <Button type="submit" variant="contained" sx={{ bgcolor: '#4CAF50', '&:hover': { bgcolor: '#43A047' } }}>Submit</Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
};

// Reusable modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '92%', sm: 460 },
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: '#1C1C1E',
  border: '1px solid #4CAF50',
  borderRadius: 3,
  p: { xs: 3, sm: 4 },
  boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
};

export default ResourcesAndQuote;