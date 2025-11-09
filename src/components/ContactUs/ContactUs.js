
import React, { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { Box, Typography, TextField, Button, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import emailjs from 'emailjs-com';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaUserAlt } from 'react-icons/fa';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Styled Components
const StyledSection = styled('section')(({ theme }) => ({
  background: 'linear-gradient(to bottom, #1a2a2aff, #0d1515ff)',
  padding: theme.spacing(4, 2),
  color: '#f5f6f5',
  fontFamily: theme.typography.fontFamily,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 2),
    minHeight: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1.5),
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 2),
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(1.2),
  border: '1px solid rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  maxWidth: '380px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.5, 1.5),
    borderRadius: theme.spacing(1),
    maxWidth: '340px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.2, 1.2),
    borderRadius: theme.spacing(0.8),
    maxWidth: '100%',
  },
}));

const SocialIconsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.2),
  marginTop: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(1.5),
    gap: theme.spacing(0.8),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.6),
    marginTop: theme.spacing(1),
  },
}));

const SocialIconLink = styled('a')(({ theme }) => ({
  color: '#f5f6f5',
  transition: 'color 0.3s ease, transform 0.3s ease',
  fontSize: theme.spacing(2.2),
  padding: theme.spacing(0.3),
  [theme.breakpoints.down('md')]: {
    fontSize: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.spacing(1.8),
    padding: theme.spacing(0.2),
  },
  '&:hover': {
    color: '#ff5722',
    transform: 'scale(1.1)',
  },
}));

const ContactInfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.2),
  marginBottom: theme.spacing(1.5),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateX(5px)',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(1),
    gap: theme.spacing(0.8),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.6),
    marginBottom: theme.spacing(0.8),
  },
}));

const StyledIconWrapper = styled(Box)(({ theme }) => ({
  color: '#ff5722',
  background: 'rgba(255, 87, 34, 0.1)',
  borderRadius: '50%',
  width: { xs: theme.spacing(3), sm: theme.spacing(3.5), md: theme.spacing(4) },
  height: { xs: theme.spacing(3), sm: theme.spacing(3.5), md: theme.spacing(4) },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.2),
    background: 'rgba(255, 255, 255, 0.1)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: '#ff5722',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff5722',
      boxShadow: '0 0 8px rgba(255, 87, 34, 0.3)',
    },
  },
  '& .MuiInputBase-input': {
    color: '#f5f6f5',
    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
    padding: theme.spacing(1.2, 1.8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 1.5),
      fontSize: '0.85rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.8, 1.2),
      fontSize: '0.8rem',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#ff5722',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(255, 255, 255, 0.7)',
    opacity: 1,
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1.2),
    background: 'rgba(255, 255, 255, 0.1)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: '#ff5722',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff5722',
      boxShadow: '0 0 8px rgba(255, 87, 34, 0.3)',
    },
  },
  '& .MuiSelect-select': {
    color: '#f5f6f5',
    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
    padding: theme.spacing(1.2, 1.8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 1.5),
      fontSize: '0.85rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.8, 1.2),
      fontSize: '0.8rem',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#ff5722',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.2),
  borderRadius: theme.spacing(1.2),
  textTransform: 'none',
  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
  fontWeight: 600,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#f5f6f5',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 6px 14px rgba(255, 255, 255, 0.15)',
    transform: 'translateY(-1px)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
    fontSize: '0.85rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.8),
    fontSize: '0.8rem',
  },
}));

const ContactUs = () => {
  const [formData, setFormData] = useState({
    product: '',
    firstName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setStatus('Email is required.');
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.firstName,
          email: formData.email,
          product: formData.product || 'Not specified',
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Form Submitted Successfully!');
          setFormData({ product: '', firstName: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
  };

  const getTitleVariant = () => {
    return isSmallScreen ? 'h5' : 'h3';
  };

  const getSubtitleVariant = () => {
    return isSmallScreen ? 'h6' : 'h5';
  };

  return (
    <StyledSection id="contact">
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
        <Box sx={{ marginTop: '10px' }}>
          <Typography
            variant={getTitleVariant()}
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: { xs: 2, sm: 3, md: 4 },
              color: '#3b82f6',
              textTransform: 'uppercase',
              letterSpacing: { xs: '0.6px', sm: '0.8px', md: '1px' },
              fontSize: {
                xs: '1.4rem',
                sm: '1.6rem',
                md: '2rem',
                lg: '2.3rem',
              },
            }}
          >
            Contact Us
          </Typography>

          <Grid container spacing={2} justifyContent="center" alignItems="stretch">
            {/* Left Section - Contact Info */}
            <Grid item xs={12} sm={6} lg={5}>
              <StyledContainer>
                <ContactInfoWrapper>
                  <Box>
                    <Typography
                      variant={getSubtitleVariant()}
                      sx={{
                        fontWeight: 600,
                        mb: { xs: 1, sm: 1.5 },
                        color: '#f5f6f5',
                        textAlign: 'center',
                        width: '100%',
                      }}
                    >
                      Get In Touch
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        mb: { xs: 1.5, sm: 2 },
                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                        textAlign: 'center',
                        lineHeight: 1.4,
                      }}
                    >
                      Have questions or need assistance? Our team is ready to help.
                    </Typography>

                    <Box sx={{ width: '100%', maxWidth: '300px', mx: 'auto' }}>
                      <ContactInfoBox sx={{ justifyContent: 'center', textAlign: 'center' }}>
                        <StyledIconWrapper>
                          <PhoneIcon fontSize="small" />
                        </StyledIconWrapper>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: '#f5f6f5',
                              fontSize: { xs: '0.8rem', sm: '0.85rem' },
                            }}
                          >
                            Phone
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            }}
                          >
                            +91-7904469219
                          </Typography>
                        </Box>
                      </ContactInfoBox>

                      <ContactInfoBox sx={{ justifyContent: 'center', textAlign: 'center' }}>
                        <StyledIconWrapper>
                          <EmailIcon fontSize="small" />
                        </StyledIconWrapper>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: '#f5f6f5',
                              fontSize: { xs: '0.8rem', sm: '0.85rem' },
                            }}
                          >
                            Email
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            }}
                          >
                            sales@napcen.com
                          </Typography>
                        </Box>
                      </ContactInfoBox>

                      <ContactInfoBox sx={{ justifyContent: 'center', textAlign: 'center' }}>
                        <StyledIconWrapper>
                          <LocationOnIcon fontSize="small" />
                        </StyledIconWrapper>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: '#f5f6f5',
                              fontSize: { xs: '0.8rem', sm: '0.85rem' },
                            }}
                          >
                            Address
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                              lineHeight: 1.2,
                            }}
                          >
                            No1.North Street,SMV puram Villianur,Pudhucherry-605110,India
                          </Typography>
                        </Box>
                      </ContactInfoBox>
                    </Box>
                  </Box>

                  <SocialIconsBox>
                    <SocialIconLink href="#" aria-label="Twitter">
                      <TwitterIcon />
                    </SocialIconLink>
                    <SocialIconLink href="#" aria-label="LinkedIn">
                      <LinkedInIcon />
                    </SocialIconLink>
                    <SocialIconLink href="#" aria-label="Facebook">
                      <FacebookIcon />
                    </SocialIconLink>
                    <SocialIconLink href="#" aria-label="Instagram">
                      <InstagramIcon />
                    </SocialIconLink>
                  </SocialIconsBox>
                </ContactInfoWrapper>
              </StyledContainer>
            </Grid>

            {/* Right Section - Form */}
            <Grid item xs={12} sm={6} lg={5}>
              <StyledContainer>
                <FormWrapper>
                  <Box>
                    <Typography
                      variant={getSubtitleVariant()}
                      sx={{
                        fontWeight: 600,
                        mb: { xs: 1, sm: 1.5 },
                        color: '#f5f6f5',
                        textAlign: 'center',
                        width: '100%',
                      }}
                    >
                      Have Questions?
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        mb: { xs: 1.5, sm: 2 },
                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                        textAlign: 'center',
                        lineHeight: 1.4,
                      }}
                    >
                      Fill out the form and our team will get back to you within 24 hours.
                    </Typography>

                    <Box sx={{ width: '100%' }}>
                      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <FormControl fullWidth sx={{ mb: 1.5 }}>
                          <InputLabel
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                              '&.Mui-focused': { color: '#ff5722' },
                            }}
                          >
                            Product
                          </InputLabel>
                          <StyledSelect
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            variant="outlined"
                            displayEmpty
                          >
                            <MenuItem value="" disabled>
                              Select a Product
                            </MenuItem>
                            {products.map((product) => (
                              <MenuItem key={product} value={product}>
                                {product}
                              </MenuItem>
                            ))}
                          </StyledSelect>
                        </FormControl>
                        <StyledTextField
                          fullWidth
                          name="firstName"
                          label="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          variant="outlined"
                        />
                        <StyledTextField
                          fullWidth
                          name="email"
                          type="email"
                          label="Email *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      
                        <StyledButton type="submit" variant="contained">
                          <Box
                            component="span"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: { xs: 0.4, sm: 0.6 },
                              justifyContent: 'center',
                            }}
                          >
                            <FaUserAlt style={{ color: '#fff', fontSize: isSmallScreen ? '11px' : '13px' }} />
                            Send Message
                          </Box>
                        </StyledButton>
                        {status && (
                          <Typography
                            variant="caption"
                            sx={{
                              mt: 1,
                              textAlign: 'center',
                              color: status.includes('Success') ? '#4CAF50' : '#f44336',
                              fontWeight: 500,
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            }}
                          >
                            {status}
                          </Typography>
                        )}
                      </form>
                    </Box>
                  </Box>
                </FormWrapper>
              </StyledContainer>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledSection>
  );
};

export default ContactUs;
