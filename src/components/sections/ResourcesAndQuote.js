
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
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import QuoteIcon from '@mui/icons-material/FormatQuote';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from 'emailjs-com';

// Import PDFs
import productBrochurePdf from '../../assets/document/details/baghouse.pdf';
import commonCatalogPdf from '../../assets/document/details/napcen.pdf';

// Define scrubber products for the dropdown
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
          color: '#00BFFF',
          textDecoration: 'none',
          '&:hover': {
            color: '#FFD700',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1E',
          borderRadius: '8px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            borderColor: '#00BFFF',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            borderColor: '#00BFFF',
            boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
          },
        },
        icon: {
          color: '#00BFFF',
          transition: 'color 0.3s ease-in-out',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#1C1C1E',
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(0, 191, 255, 0.2)',
            color: '#FFD700',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 191, 255, 0.3)',
            color: '#FFD700',
            '&:hover': {
              backgroundColor: 'rgba(0, 191, 255, 0.4)',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: '#00BFFF',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(0, 191, 255, 0.5)',
          transition: 'border-color 0.3s ease-in-out',
        },
      },
    },
  },
});

const ResourcesAndQuote = ({ isPresentationOpen }) => {
  const [openQuoteModal, setOpenQuoteModal] = useState(false);
  const [openBrochureModal, setOpenBrochureModal] = useState(false);
  const [openCatalogModal, setOpenCatalogModal] = useState(false);
  const [selectedBrochureProduct, setSelectedBrochureProduct] = useState('');
  const [brochureFormData, setBrochureFormData] = useState({
    product: '',
    name: '',
    email: '',
    mobile: '',
    companyName: '',
  });
  const [quoteFormData, setQuoteFormData] = useState({
    product: '',
    name: '',
  });
  const [catalogFormData, setCatalogFormData] = useState({
    product: '',
    name: '',
    companyName: '',
    address: '',
    mobile: '',
  });
  const [brochureFormErrors, setBrochureFormErrors] = useState({});
  const [quoteFormErrors, setQuoteFormErrors] = useState({});
  const [catalogFormErrors, setCatalogFormErrors] = useState({});
  const [isBrochureFormSubmitted, setIsBrochureFormSubmitted] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleOpenQuoteModal = () => setOpenQuoteModal(true);
  const handleCloseQuoteModal = () => {
    setOpenQuoteModal(false);
    setQuoteFormData({ product: '', name: '' });
    setQuoteFormErrors({});
    setStatus('');
    setStatusType('');
  };

  const handleOpenBrochureModal = () => setOpenBrochureModal(true);
  const handleCloseBrochureModal = () => {
    setOpenBrochureModal(false);
    setBrochureFormData({ product: '', name: '', email: '', mobile: '', companyName: '' });
    setBrochureFormErrors({});
    setStatus('');
    setStatusType('');
  };

  const handleOpenCatalogModal = () => setOpenCatalogModal(true);
  const handleCloseCatalogModal = () => {
    setOpenCatalogModal(false);
    setCatalogFormData({ product: '', name: '', companyName: '', address: '', mobile: '' });
    setCatalogFormErrors({});
    setStatus('');
    setStatusType('');
  };

  const handleBrochureInputChange = (e) => {
    const { name, value } = e.target;
    setBrochureFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCatalogInputChange = (e) => {
    const { name, value } = e.target;
    setCatalogFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrochureProductChange = (e) => {
    setSelectedBrochureProduct(e.target.value);
    setBrochureFormData((prev) => ({ ...prev, product: e.target.value }));
  };

  const validateBrochureForm = () => {
    const errors = {};
    if (!brochureFormData.product) errors.product = 'Please select a product';
    if (!brochureFormData.name.trim()) errors.name = 'Name is required';
    if (!brochureFormData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brochureFormData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!brochureFormData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(brochureFormData.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    if (!brochureFormData.companyName.trim()) errors.companyName = 'Company name is required';
    return errors;
  };

  const validateQuoteForm = () => {
    const errors = {};
    if (!quoteFormData.product) errors.product = 'Please select a product';
    if (!quoteFormData.name.trim()) errors.name = 'Name is required';
    return errors;
  };

  const validateCatalogForm = () => {
    const errors = {};
    if (!catalogFormData.product) errors.product = 'Please select a product';
    if (!catalogFormData.name.trim()) errors.name = 'Name is required';
    if (!catalogFormData.companyName.trim()) errors.companyName = 'Company name is required';
    if (!catalogFormData.address.trim()) errors.address = 'Address is required';
    if (!catalogFormData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(catalogFormData.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    return errors;
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    const errors = validateBrochureForm();
    if (Object.keys(errors).length === 0) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            form_type: 'Brochure Request',
            product: brochureFormData.product || 'Not specified',
            from_name: brochureFormData.name,
            email: brochureFormData.email,
            mobile: brochureFormData.mobile,
            company_name: brochureFormData.companyName,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus('Brochure request submitted successfully! You can now view or download the brochure.');
            setStatusType('success');
            setIsBrochureFormSubmitted(true);
            setBrochureFormData({ product: '', name: '', email: '', mobile: '', companyName: '' });
          },
          (error) => {
            setStatus('Failed to send brochure request. Please try again.');
            setStatusType('error');
            console.error('EmailJS error:', error);
          }
        );
    } else {
      setBrochureFormErrors(errors);
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const errors = validateQuoteForm();
    if (Object.keys(errors).length === 0) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            form_type: 'Quote Request',
            product: quoteFormData.product || 'Not specified',
            from_name: quoteFormData.name,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus('Quote request submitted successfully!');
            setStatusType('success');
            setQuoteFormData({ product: '', name: '' });
          },
          (error) => {
            setStatus('Failed to send quote request. Please try again.');
            setStatusType('error');
            console.error('EmailJS error:', error);
          }
        );
    } else {
      setQuoteFormErrors(errors);
    }
  };

  const handleCatalogSubmit = (e) => {
    e.preventDefault();
    const errors = validateCatalogForm();
    if (Object.keys(errors).length === 0) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            form_type: 'Catalog Request',
            product: catalogFormData.product || 'Not specified',
            from_name: catalogFormData.name,
            company_name: catalogFormData.companyName,
            address: catalogFormData.address,
            mobile: catalogFormData.mobile,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus('Catalog request submitted successfully!');
            setStatusType('success');
            setCatalogFormData({ product: '', name: '', companyName: '', address: '', mobile: '' });
          },
          (error) => {
            setStatus('Failed to send catalog request. Please try again.');
            setStatusType('error');
            console.error('EmailJS error:', error);
          }
        );
    } else {
      setCatalogFormErrors(errors);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          sx={{ mt: { xs: 2, sm: 3, md: 4 } }}
        >
          {/* 1. Product Brochure */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 1, sm: 1.5, md: 2 },
                display: 'flex',
                flexDirection: 'column',
                minHeight: { xs: 140, sm: 160, md: 180 },
                mb: { xs: 1, sm: 2 },
                borderRadius: 2,
                backgroundColor: '#1C1C1E',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  borderColor: '#00BFFF',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <FolderIcon
                  sx={{
                    mr: { xs: 1, sm: 2 },
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                    color: '#00BFFF',
                  }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
                >
                  Product Brochure
                </Typography>
              </Box>
              <FormControl fullWidth sx={{ mb: 1 }}>
                <InputLabel sx={{ color: 'white' }}>Select Product</InputLabel>
                <Select
                  value={selectedBrochureProduct}
                  onChange={handleBrochureProductChange}
                  label="Select Product"
                  sx={{
                    color: 'white',
                    '& .MuiSvgIcon-root': { color: '#00BFFF' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                      boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                    },
                  }}
                >
                  {scrubberProducts.map((product) => (
                    <MenuItem key={product} value={product}>
                      {product}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <MuiLink
                  href={isBrochureFormSubmitted ? productBrochurePdf : '#'}
                  target={isBrochureFormSubmitted ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  underline="none"
                  aria-label="View NAPCEN product brochure PDF"
                  sx={{ display: 'block', mb: 0.5 }}
                  onClick={(e) => !isBrochureFormSubmitted && e.preventDefault()}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'medium',
                      color: isBrochureFormSubmitted ? '#00BFFF' : 'grey',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    }}
                  >
                    View PDF ↗️
                  </Typography>
                </MuiLink>
                <MuiLink
                  href={isBrochureFormSubmitted ? productBrochurePdf : '#'}
                  download={isBrochureFormSubmitted ? `Napcen_${selectedBrochureProduct || 'Acid_Fume_Scrubber'}_Brochure.pdf` : undefined}
                  underline="none"
                  aria-label="Download NAPCEN product brochure PDF"
                  sx={{ display: 'block', mb: 0.5 }}
                  onClick={(e) => !isBrochureFormSubmitted && e.preventDefault()}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'medium',
                      color: isBrochureFormSubmitted ? '#FFD700' : 'grey',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    }}
                  >
                    Download Brochure ⬇️
                  </Typography>
                </MuiLink>
                <Button
                  onClick={handleOpenBrochureModal}
                  sx={{
                    mt: 0.5,
                    fontWeight: 'medium',
                    color: selectedBrochureProduct ? '#FFD700' : 'grey',
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    textTransform: 'none',
                    '&:hover': {
                      color: '#00BFFF',
                    },
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                  }}
                  disabled={!selectedBrochureProduct}
                >
                  Request Brochure ↗️
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* 2. Company Catalog */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 1, sm: 1.5, md: 2 },
                display: 'flex',
                alignItems: 'center',
                minHeight: { xs: 140, sm: 160, md: 180 },
                mb: { xs: 1, sm: 2 },
                borderRadius: 2,
                backgroundColor: '#1C1C1E',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  borderColor: '#00BFFF',
                  cursor: 'pointer',
                },
              }}
              onClick={handleOpenCatalogModal}
            >
              <InsertDriveFileIcon
                sx={{
                  mr: { xs: 1, sm: 2 },
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  color: '#00BFFF',
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
                >
                  Company Catalog
                </Typography>
                <MuiLink
                  href={commonCatalogPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  aria-label="View NAPCEN Company Catalog PDF"
                  sx={{ display: 'block' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 0.5,
                      fontWeight: 'medium',
                      color: '#00BFFF',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    }}
                  >
                    View Catalog ↗️
                  </Typography>
                </MuiLink>
                <MuiLink
                  href={commonCatalogPdf}
                  download="Napcen_Company_Catalog.pdf"
                  underline="none"
                  aria-label="Download NAPCEN Company Catalog PDF"
                  sx={{ display: 'block', mt: 0.5 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'medium',
                      color: '#FFD700',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    }}
                  >
                    Download Catalog ⬇️
                  </Typography>
                </MuiLink>
              </Box>
            </Paper>
          </Grid>

          {/* 3. Request a Quote */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 1, sm: 1.5, md: 2 },
                display: 'flex',
                alignItems: 'center',
                minHeight: { xs: 140, sm: 160, md: 180 },
                mb: { xs: 1, sm: 2 },
                borderRadius: 2,
                backgroundColor: '#1C1C1E',
                border: '1px solid rgba(0, 191, 255, 0.15)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  borderColor: '#00BFFF',
                },
              }}
            >
              <QuoteIcon
                sx={{
                  mr: { xs: 1, sm: 2 },
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  color: '#00BFFF',
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
                >
                  Request a Quote
                </Typography>
                <Button
                  onClick={handleOpenQuoteModal}
                  sx={{
                    mt: 0.5,
                    fontWeight: 'medium',
                    color: '#00BFFF',
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    textTransform: 'none',
                    '&:hover': {
                      color: '#FFD700',
                    },
                  }}
                >
                  Get Quote Now ↗️
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Brochure Request Modal */}
        <Modal
          open={openBrochureModal}
          onClose={handleCloseBrochureModal}
          aria-labelledby="brochure-modal-title"
          aria-describedby="brochure-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: 400 },
              bgcolor: '#1C1C1E',
              border: '1px solid #00BFFF',
              borderRadius: 2,
              p: { xs: 2, sm: 3 },
              boxShadow: 24,
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <Typography
              id="brochure-modal-title"
              variant="h6"
              sx={{ color: '#00BFFF', mb: 2 }}
            >
              Request a Brochure
            </Typography>
            <Box component="form" onSubmit={handleBrochureSubmit}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Select Product</InputLabel>
                <Select
                  name="product"
                  value={brochureFormData.product}
                  onChange={handleBrochureInputChange}
                  label="Select Product"
                  sx={{
                    color: 'white',
                    '& .MuiSvgIcon-root': { color: '#00BFFF' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                      boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                    },
                  }}
                >
                  {scrubberProducts.map((product) => (
                    <MenuItem key={product} value={product}>
                      {product}
                    </MenuItem>
                  ))}
                </Select>
                {brochureFormErrors.product && (
                  <Typography variant="caption" color="error">
                    {brochureFormErrors.product}
                  </Typography>
                )}
              </FormControl>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={brochureFormData.name}
                onChange={handleBrochureInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!brochureFormErrors.name}
                helperText={brochureFormErrors.name}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={brochureFormData.email}
                onChange={handleBrochureInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!brochureFormErrors.email}
                helperText={brochureFormErrors.email}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={brochureFormData.mobile}
                onChange={handleBrochureInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!brochureFormErrors.mobile}
                helperText={brochureFormErrors.mobile}
              />
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={brochureFormData.companyName}
                onChange={handleBrochureInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!brochureFormErrors.companyName}
                helperText={brochureFormErrors.companyName}
              />
              {status && (
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    textAlign: 'center',
                    color: statusType === 'success' ? '#4CAF50' : '#f44336',
                    fontWeight: 500,
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  }}
                >
                  {status}
                </Typography>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                <Button
                  onClick={handleCloseBrochureModal}
                  sx={{
                    color: '#FFD700',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#00BFFF',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    bgcolor: '#00BFFF',
                    color: 'white',
                    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
                    '&:hover': {
                      bgcolor: '#0088cc',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>

        {/* Catalog Request Modal */}
        <Modal
          open={openCatalogModal}
          onClose={handleCloseCatalogModal}
          aria-labelledby="catalog-modal-title"
          aria-describedby="catalog-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: 400 },
              bgcolor: '#1C1C1E',
              border: '1px solid #00BFFF',
              borderRadius: 2,
              p: { xs: 2, sm: 3 },
              boxShadow: 24,
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <Typography
              id="catalog-modal-title"
              variant="h6"
              sx={{ color: '#00BFFF', mb: 2 }}
            >
              Request a Catalog
            </Typography>
            <Box component="form" onSubmit={handleCatalogSubmit}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Select Product</InputLabel>
                <Select
                  name="product"
                  value={catalogFormData.product}
                  onChange={handleCatalogInputChange}
                  label="Select Product"
                  sx={{
                    color: 'white',
                    '& .MuiSvgIcon-root': { color: '#00BFFF' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                      boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                    },
                  }}
                >
                  {scrubberProducts.map((product) => (
                    <MenuItem key={product} value={product}>
                      {product}
                    </MenuItem>
                  ))}
                </Select>
                {catalogFormErrors.product && (
                  <Typography variant="caption" color="error">
                    {catalogFormErrors.product}
                  </Typography>
                )}
              </FormControl>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={catalogFormData.name}
                onChange={handleCatalogInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!catalogFormErrors.name}
                helperText={catalogFormErrors.name}
              />
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={catalogFormData.companyName}
                onChange={handleCatalogInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!catalogFormErrors.companyName}
                helperText={catalogFormErrors.companyName}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={catalogFormData.address}
                onChange={handleCatalogInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!catalogFormErrors.address}
                helperText={catalogFormErrors.address}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={catalogFormData.mobile}
                onChange={handleCatalogInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!catalogFormErrors.mobile}
                helperText={catalogFormErrors.mobile}
              />
              {status && (
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    textAlign: 'center',
                    color: statusType === 'success' ? '#4CAF50' : '#f44336',
                    fontWeight: 500,
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  }}
                >
                  {status}
                </Typography>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                <Button
                  onClick={handleCloseCatalogModal}
                  sx={{
                    color: '#FFD700',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#00BFFF',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    bgcolor: '#00BFFF',
                    color: 'white',
                    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
                    '&:hover': {
                      bgcolor: '#0088cc',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>

        {/* Quote Request Modal */}
        <Modal
          open={openQuoteModal}
          onClose={handleCloseQuoteModal}
          aria-labelledby="quote-modal-title"
          aria-describedby="quote-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: 400 },
              bgcolor: '#1C1C1E',
              border: '1px solid #00BFFF',
              borderRadius: 2,
              p: { xs: 2, sm: 3 },
              boxShadow: 24,
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <Typography
              id="quote-modal-title"
              variant="h6"
              sx={{ color: '#00BFFF', mb: 2 }}
            >
              Request a Quote
            </Typography>
            <Box component="form" onSubmit={handleQuoteSubmit}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Select Product</InputLabel>
                <Select
                  name="product"
                  value={quoteFormData.product}
                  onChange={handleQuoteInputChange}
                  label="Select Product"
                  sx={{
                    color: 'white',
                    '& .MuiSvgIcon-root': { color: '#00BFFF' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00BFFF',
                      boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                    },
                  }}
                >
                  {scrubberProducts.map((product) => (
                    <MenuItem key={product} value={product}>
                      {product}
                    </MenuItem>
                  ))}
                </Select>
                {quoteFormErrors.product && (
                  <Typography variant="caption" color="error">
                    {quoteFormErrors.product}
                  </Typography>
                )}
              </FormControl>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={quoteFormData.name}
                onChange={handleQuoteInputChange}
                sx={{
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 191, 255, 0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                    boxShadow: '0 0 8px rgba(0, 191, 255, 0.3)',
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00BFFF' },
                }}
                error={!!quoteFormErrors.name}
                helperText={quoteFormErrors.name}
              />
              {status && (
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    textAlign: 'center',
                    color: statusType === 'success' ? '#4CAF50' : '#f44336',
                    fontWeight: 500,
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  }}
                >
                  {status}
                </Typography>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                <Button
                  onClick={handleCloseQuoteModal}
                  sx={{
                    color: '#FFD700',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#00BFFF',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    bgcolor: '#00BFFF',
                    color: 'white',
                    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
                    '&:hover': {
                      bgcolor: '#0088cc',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>

        {/* Conditional Content for Presentation */}
        {isPresentationOpen && (
          <Box
            sx={{
              mt: 4,
              p: { xs: 2, sm: 3, md: 4 },
              bgcolor: 'rgba(0, 191, 255, 0.1)',
              borderRadius: 2,
              border: '1px dashed #00BFFF',
            }}
          >
            <Typography variant="h5" sx={{ color: '#00BFFF', mb: 1 }}>
              NAPCEN Company Overview
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }}>
              This is the expanded section for the Company Presentation. In a full production environment,
              you would typically render a dedicated modal, a PDF embed viewer, or a series of introductory slides here
              based on the `isPresentationOpen` state.
            </Typography>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ResourcesAndQuote;
