import React, { useState } from 'react';
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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import emailjs from 'emailjs-com';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.mobile) {
      setStatus('Please fill in Email & Mobile number');
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name || 'No Name',
          email: formData.email,
          mobile: formData.mobile,
          product: formData.product || 'Not specified',
          message: formData.message || 'No message',
          to_email: 'sales@napcen.com',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('Thank you! We will contact you soon');
        setFormData({ product: '', name: '', email: '', mobile: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch(() => {
        setStatus('Failed to send. Please try again later.');
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: '#0f172a',
        minHeight: '100vh',
        py: { xs: 8, sm: 10, md: 14 },
        background: 'linear-gradient(135deg, #1a2a2a 0%, #0d1515 100%)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, sm: 6 },
            fontWeight: 800,
            fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
            background: 'linear-gradient(90deg, #3b82f6, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
          }}
        >
          Get in Touch
        </Typography>

        {/* Glassmorphism Card */}
        <Box
          sx={{
            mx: 'auto',
            maxWidth: 560,
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.4s ease',
            ...(isMobile
              ? {}
              : {
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)',
                  },
                }),
          }}
        >
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            align="center"
            sx={{ mb: 1, fontWeight: 700, color: '#fff' }}
          >
            Request a Free Quote
          </Typography>
          <Typography
            align="center"
            sx={{
              mb: 4,
              color: '#e2e8f0',
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: 1.5,
            }}
          >
            We reply within <strong>2 hours</strong> • Call:{' '}
            <Box component="span" sx={{ color: '#86efac', fontWeight: 600 }}>
              +91 94441 72555
            </Box>
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Product Select */}
            <FormControl fullWidth sx={{ mb: 2.5 }}>
              <InputLabel sx={{ color: '#cbd5e1' }}>Select Product</InputLabel>
              <Select
                name="product"
                value={formData.product}
                onChange={handleChange}
                label="Select Product"
                MenuProps={{
                  PaperProps: { sx: { bgcolor: '#1e293b', color: '#fff' } },
                }}
                sx={{
                  borderRadius: '14px',
                  bgcolor: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontSize: { xs: '1rem' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#86efac',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4ade80',
                  },
                  '& .MuiSelect-icon': { color: '#86efac' },
                }}
              >
                <MenuItem value="" disabled>
                  <em>Choose a product</em>
                </MenuItem>
                {products.map((p) => (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Name */}
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: '#86efac' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  bgcolor: 'rgba(255,255,255,0.08)',
                  fontSize: { xs: '1rem' },
                },
                '& input': { color: '#fff' },
                '& label': { color: '#cbd5e1' },
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              required
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: '#86efac' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  bgcolor: 'rgba(255,255,255,0.08)',
                  fontSize: { xs: '1rem' },
                },
                '& input': { color: '#fff' },
                '& label': { color: '#cbd5e1' },
              }}
            />

            {/* Mobile */}
            <TextField
              fullWidth
              required
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: '#86efac' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  bgcolor: 'rgba(255,255,255,0.08)',
                  fontSize: { xs: '1rem' },
                },
                '& input': { color: '#fff' },
                '& label': { color: '#cbd5e1' },
              }}
            />

            {/* Message */}
            <TextField
              fullWidth
              label="Your Requirement (Optional)"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              margin="normal"
              placeholder="Tell us what you need..."
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  bgcolor: 'rgba(255,255,255,0.08)',
                },
                '& textarea': { color: '#fff', fontSize: { xs: '1rem' } },
                '& label': { color: '#cbd5e1' },
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 2,
                borderRadius: '16px',
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                background: 'linear-gradient(45deg, #22c55e, #86efac)',
                boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 15px 40px rgba(34, 197, 94, 0.5)',
                },
                '&:active': {
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <SendIcon sx={{ mr: 1, fontSize: '1.4rem' }} />
              Send Message
            </Button>

            {/* Status Message */}
            {status && (
              <Typography
                align="center"
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: '12px',
                  bgcolor: status.includes('Thank')
                    ? 'rgba(34, 197, 94, 0.2)'
                    : 'rgba(239, 68, 68, 0.2)',
                  color: status.includes('Thank') ? '#86efac' : '#fca5a5',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.05rem' },
                }}
              >
                {status}
              </Typography>
            )}
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;