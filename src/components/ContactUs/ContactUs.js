import React, { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import emailjs from 'emailjs-com';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Styled Components
const StyledSection = styled('section')(({ theme }) => ({
  background: 'linear-gradient(to bottom, #1a2a2aff, #0d1515ff)',
  padding: theme.spacing(8, 2),
  color: '#f5f6f5',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 1.5),
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '520px',
  margin: '0 auto',
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.06)',
  borderRadius: theme.spacing(2.5),
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(14px)',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.4s ease',
  '&:hover': {
    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.35)',
    transform: 'translateY(-4px)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3.5),
    maxWidth: '460px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    maxWidth: '100%',
    margin: theme.spacing(0, 2),
    borderRadius: theme.spacing(2),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.08)',
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: '#4CAF50',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4CAF50',
      boxShadow: '0 0 14px rgba(76, 175, 80, 0.35)',
    },
  },
  '& .MuiInputBase-input': {
    color: '#f5f6f5',
    fontSize: '1rem',
    padding: theme.spacing(1.8, 2.2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1.6, 2),
      fontSize: '0.95rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.4, 1.8),
      fontSize: '0.9rem',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: '0.95rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.85rem',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#4CAF50',
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.08)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: '#4CAF50',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4CAF50',
      boxShadow: '0 0 14px rgba(76, 175, 80, 0.35)',
    },
  },
  '& .MuiSelect-select': {
    color: '#f5f6f5',
    fontSize: '1rem',
    padding: theme.spacing(1.8, 2.2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.4, 1.8),
      fontSize: '0.9rem',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 600,
  background: 'linear-gradient(45deg, #4CAF50, #66BB6A)',
  color: '#fff',
  boxShadow: '0 8px 25px rgba(76, 175, 80, 0.45)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #43A047, #66BB6A)',
    boxShadow: '0 12px 32px rgba(76, 175, 80, 0.55)',
    transform: 'translateY(-3px)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.8),
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.6),
    fontSize: '0.95rem',
  },
}));

const ContactUs = () => {
  const [formData, setFormData] = useState({
    product: '',
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const products = [
    'Wet Scrubbers',
    'Dust Collectors',
    'Downdraft Tables',
    'Air Filtration Systems',
    'Mist Collectors',
    'Fume Extractors',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.mobile) {
      setStatus('Email and Mobile are required.');
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          product: formData.product || 'Not specified',
          message: formData.message,
          to_email: 'sales@napcen.com', // YOUR ORIGINAL EMAIL
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Message Sent Successfully!');
          setFormData({ product: '', name: '', email: '', mobile: '', message: '' });
          setTimeout(() => setStatus(''), 4000);
        },
        () => {
          setStatus('Failed to send. Please try again.');
        }
      );
  };

  return (
    <StyledSection id="contact">
      <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h3'}
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            color: '#3b82f6',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontSize: { xs: '1.9rem', sm: '2.4rem', md: '3rem' },
          }}
        >
          Contact Us
        </Typography>

        {/* SINGLE CENTERED FORM CARD */}
        <FormContainer>
          <Box textAlign="center">
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              sx={{
                fontWeight: 600,
                mb: 1.5,
                color: '#f5f6f5',
                fontSize: { xs: '1.3rem', sm: '1.5rem' },
              }}
            >
              Get a Quote
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                mb: 4,
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                lineHeight: 1.5,
              }}
            >
              Fill the form — we’ll reply within 2 hours to <strong>sales@napcen.com</strong>
            </Typography>

            <form onSubmit={handleSubmit}>
              {/* PRODUCT */}
              <FormControl fullWidth>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.75)', '&.Mui-focused': { color: '#4CAF50' } }}>
                  Product
                </InputLabel>
                <StyledSelect
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>Select Product</MenuItem>
                  {products.map((p) => (
                    <MenuItem key={p} value={p}>{p}</MenuItem>
                  ))}
                </StyledSelect>
              </FormControl>

              {/* NAME */}
              <StyledTextField
                fullWidth
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#4CAF50' }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* EMAIL */}
              <StyledTextField
                fullWidth
                name="email"
                type="email"
                label="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: '#4CAF50' }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* MOBILE */}
              <StyledTextField
                fullWidth
                name="mobile"
                label="Mobile No *"
                value={formData.mobile}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: '#4CAF50' }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* DESCRIPTION */}
              <StyledTextField
                fullWidth
                name="message"
                label="Description"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                placeholder="Tell us your requirement..."
              />

              {/* SUBMIT BUTTON */}
              <StyledButton type="submit" variant="contained">
                <EmailIcon sx={{ mr: 1, fontSize: '1.3rem' }} />
                Send Email
              </StyledButton>

              {/* STATUS */}
              {status && (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    textAlign: 'center',
                    color: status.includes('Success') ? '#4CAF50' : '#f44336',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    animation: 'fadeIn 0.5s ease',
                  }}
                >
                  {status}
                </Typography>
              )}
            </form>
          </Box>
        </FormContainer>
      </Container>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </StyledSection>
  );
};

export default ContactUs;