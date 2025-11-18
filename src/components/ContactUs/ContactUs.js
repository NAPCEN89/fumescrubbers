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
  styled,
} from '@mui/material';
import emailjs from 'emailjs-com';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FactoryIcon from '@mui/icons-material/Factory';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// --- Configuration Constants ---
const PRIMARY_COLOR = '#33FFFF'; // Cyan/Aqua
const BG_DARK = '#0d1515';
const TEXT_FADE = '#cbd5e1';
const INPUT_COLOR = '#202023';
const SPACING = 2;

// --- Styled Components for Form Inputs (Uniform 100% Width) ---

const StyledInputWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: INPUT_COLOR,
    borderRadius: '8px', 
    padding: theme.spacing(1),
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    transition: 'all 0.3s ease',
    marginBottom: theme.spacing(SPACING),
    
    '&:focus-within': {
        borderColor: PRIMARY_COLOR,
        boxShadow: `0 0 8px ${PRIMARY_COLOR}60`,
    }
}));

const StyledInput = styled(TextField)(({ theme, isMobile }) => ({
  width: '100%',
  marginBottom: 0, 
  
  '& .MuiOutlinedInput-root': {
    border: 'none',
    backgroundColor: 'transparent',
    padding: 0, 

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  
  // Base Text/Input/Select styles
  '& input, & textarea, & .MuiSelect-select': { 
    color: '#fff', 
    padding: isMobile ? '6px 0' : '8px 0', 
    fontSize: isMobile ? '0.85rem' : '0.95rem',
  },
  
  // Label Styling
  '& label': { 
    color: TEXT_FADE, 
    fontSize: isMobile ? '0.8rem' : '0.9rem', 
    transform: `translate(0, ${isMobile ? '10px' : '13px'}) scale(1)`,
    // For TextField, the label position is fine without custom 'left'
  },
  // Label Shrink Styling
  '& label.MuiInputLabel-shrink': {
    transform: `translate(0, 0px) scale(0.7)`, 
    color: PRIMARY_COLOR,
  },
}));

// --- Main Component ---

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
    'General Inquiry / Other',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.mobile || !formData.product) {
      setStatus('Please fill in Email, Mobile, and Select a Product');
      return;
    }

    // Simulation for local development
    setTimeout(() => {
        const success = Math.random() > 0.1; 
        if (success) {
            setStatus('Thank you! We will contact you soon');
            setFormData({ product: '', name: '', email: '', mobile: '', message: '' });
        } else {
            setStatus('Failed to send. Please try again later.');
        }
        setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  const isSuccess = status.includes('Thank');

  return (
    <Box
      id="contact"
      sx={{
        background: `linear-gradient(135deg, #101827 0%, ${BG_DARK} 100%)`, 
        minHeight: '100vh',
        py: { xs: 4, sm: 6 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
        
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 2, sm: 3 },
            fontWeight: 900,
            fontSize: { xs: '1.8rem', sm: '2.5rem' },
            background: 'linear-gradient(90deg, #3b82f6, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
          }}
        >
          Request A Quote
        </Typography>

        {/* Outer Card Container */}
        <Box
          sx={{
            mx: 'auto',
            maxWidth: 560,
            p: { xs: 2, sm: 3 },
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${PRIMARY_COLOR}30`,
            backdropFilter: 'blur(10px)', 
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            align="center"
            sx={{ mb: 1, fontWeight: 700, color: '#fff', fontSize: { xs: '1.1rem', sm: '1.4rem' } }}
          >
            Get Expert Assistance Today
          </Typography>
          <Typography
            align="center"
            sx={{
              mb: 3,
              color: TEXT_FADE,
              fontSize: { xs: '0.75rem', sm: '0.85rem' },
            }}
          >
            All fields are perfectly aligned and compact.
          </Typography>

          <form onSubmit={handleSubmit}>
            
            {/* --- Name Input --- */}
            <StyledInputWrapper>
                <StyledInput
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isMobile={isMobile}
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                            <PersonIcon sx={{ color: PRIMARY_COLOR, fontSize: isMobile ? '1rem' : '1.1rem' }} />
                        </InputAdornment>
                        ),
                    }}
                />
            </StyledInputWrapper>

            {/* --- Email Input --- */}
            <StyledInputWrapper>
                <StyledInput
                    fullWidth
                    required
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    isMobile={isMobile}
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                            <EmailIcon sx={{ color: PRIMARY_COLOR, fontSize: isMobile ? '1rem' : '1.1rem' }} />
                        </InputAdornment>
                        ),
                    }}
                />
            </StyledInputWrapper>

            {/* --- Mobile Input --- */}
            <StyledInputWrapper>
                <StyledInput
                    fullWidth
                    required
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    isMobile={isMobile}
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                            <PhoneIcon sx={{ color: PRIMARY_COLOR, fontSize: isMobile ? '1rem' : '1.1rem' }} />
                        </InputAdornment>
                        ),
                    }}
                />
            </StyledInputWrapper>

            {/* --- Product Select (Label FIXED) --- */}
            <StyledInputWrapper>
                <FormControl fullWidth required variant="standard">
                    <InputLabel 
                        // **FIXED:** Removed the custom 'left' property.
                        sx={{ 
                            color: TEXT_FADE, 
                            fontSize: isMobile ? '0.8rem' : '0.9rem', 
                        }}
                    >
                        Select Product
                    </InputLabel>
                    <Select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        label="Select Product"
                        isMobile={isMobile}
                        sx={{ 
                            '&:before, &:after': { content: 'none' },
                            color: '#fff',
                            
                            '& .MuiSelect-icon': {
                                color: PRIMARY_COLOR, 
                                fontSize: isMobile ? '1.2rem' : '1.4rem', 
                                right: theme.spacing(1), // Pull icon closer to the edge of the wrapper
                            },
                            // **FIXED:** Adjust padding left to align text with TextField input
                            '& .MuiSelect-select': {
                                paddingLeft: '0 !important',
                            }
                        }}
                        MenuProps={{
                            PaperProps: { sx: { bgcolor: INPUT_COLOR, color: '#fff' } },
                        }}
                        IconComponent={(props) => (
                            <ArrowDropDownIcon {...props} /> 
                        )}
                        startAdornment={
                            <InputAdornment position="start" sx={{ mr: 1 }}>
                                <FactoryIcon sx={{ color: PRIMARY_COLOR, fontSize: isMobile ? '1rem' : '1.1rem' }} /> 
                            </InputAdornment>
                        }
                    >
                        <MenuItem value="" disabled>
                            <em>Choose product type</em>
                        </MenuItem>
                        {products.map((p) => (
                            <MenuItem key={p} value={p} sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                                {p}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </StyledInputWrapper>

            {/* --- Message Input --- */}
            <StyledInputWrapper>
                <StyledInput
                    fullWidth
                    label="Your Detailed Requirement (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={isMobile ? 2 : 3}
                    placeholder="Tell us what you need..."
                    isMobile={isMobile}
                    variant="standard"
                    sx={{ '& .MuiFormControl-root': { marginBottom: 0 } }} 
                />
            </StyledInputWrapper>
            
            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: { xs: 1, sm: 1.2 },
                borderRadius: '10px',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 700,
                textTransform: 'uppercase',
                background: `linear-gradient(45deg, ${PRIMARY_COLOR}, #00D4D4)`,
                boxShadow: `0 5px 10px ${PRIMARY_COLOR}40`,
                color: BG_DARK,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  background: `linear-gradient(45deg, #00D4D4, ${PRIMARY_COLOR})`,
                  transform: 'translateY(-1px)',
                  boxShadow: `0 7px 15px ${PRIMARY_COLOR}60`,
                },
              }}
            >
              <SendIcon sx={{ mr: 1, fontSize: '0.9rem' }} /> 
              Submit Quote Request
            </Button>

            {/* Status Message */}
            {status && (
              <Typography
                align="center"
                sx={{
                  mt: 2,
                  p: 1.2,
                  borderRadius: '8px',
                  bgcolor: isSuccess ? 'rgba(51, 255, 255, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  color: isSuccess ? PRIMARY_COLOR : '#fca5a5',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {isSuccess ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}
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