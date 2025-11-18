import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  styled,

  useTheme,
  Link as MuiLink,
  Grid,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AccesoriesData } from './AccesoriesData'; // Assuming this data structure is correct
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';

// --- Configuration Constants ---
const ACCENT_COLOR = '#00BFFF'; // Sky Blue
const PRIMARY_BG = '#0d1515';
const TEXT_LIGHT = '#f5f6f5';
const TEXT_SECONDARY = '#B0BEC5';

// --- Custom Theme ---
const customTheme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h3: { fontSize: '2.4rem', fontWeight: 800, color: TEXT_LIGHT, letterSpacing: '0.5px' },
    h5: { fontSize: '1.2rem', fontWeight: 600 },
    h6: { fontSize: '0.9rem', fontWeight: 700 },
    body1: { fontSize: '0.9rem', color: TEXT_SECONDARY },
    body2: { fontSize: '0.75rem', color: TEXT_SECONDARY },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: TEXT_LIGHT,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: TEXT_SECONDARY,
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: ACCENT_COLOR,
          },
        },
      },
    },
  },
});

// --- Styled Components ---

const AccessoriesWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  background: PRIMARY_BG,
  minHeight: '100vh',
  width: '100%',
  color: TEXT_LIGHT,
}));

const CategoryButton = styled(Button)(({ theme, active }) => ({
  background: active ? `${ACCENT_COLOR}20` : `${TEXT_LIGHT}05`,
  color: active ? ACCENT_COLOR : TEXT_LIGHT,
  border: active ? `1px solid ${ACCENT_COLOR}` : `1px solid ${ACCENT_COLOR}10`,
  borderRadius: '20px', // Pill shape for modern look
  padding: theme.spacing(0.8, 2),
  margin: theme.spacing(0.5, 0.5),
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  boxShadow: active ? `0 0 10px ${ACCENT_COLOR}30` : 'none',
  '&:hover': {
    background: `${ACCENT_COLOR}30`,
    borderColor: ACCENT_COLOR,
    color: TEXT_LIGHT,
    boxShadow: `0 0 15px ${ACCENT_COLOR}40`,
  },
}));

const AdvancedProductCard = styled(Card)(({ theme }) => ({
  width: '100%',
  // Compact vertical size - max width removed for better grid distribution on desktop
  background: `${TEXT_LIGHT}03`, 
  border: `1px solid ${ACCENT_COLOR}10`,
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.17, 0.84, 0.44, 1)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 25px ${ACCENT_COLOR}20`,
    borderColor: `${ACCENT_COLOR}30`,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    mb: 2.5,
    width: '100%', 
    maxWidth: 500,
    '& .MuiInputBase-root': {
        background: `${TEXT_LIGHT}05`,
        borderRadius: '8px',
        color: TEXT_LIGHT,
        border: `1px solid ${ACCENT_COLOR}20`,
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: ACCENT_COLOR,
            boxShadow: `0 0 10px ${ACCENT_COLOR}20`,
        },
        '&.Mui-focused': {
            borderColor: ACCENT_COLOR,
            boxShadow: `0 0 12px ${ACCENT_COLOR}40`,
            background: `${TEXT_LIGHT}08`,
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiInputBase-input': {
        fontSize: '0.9rem',
        padding: '10px 14px',
        color: TEXT_LIGHT,
    },
}));


// --- Main Component ---
const Accesscories = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    AccesoriesData.length > 0 ? AccesoriesData[0].category : ''
  );
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const muiTheme = useTheme();
  
  // Find products based on selected category
  const allProducts =
    AccesoriesData.find((cat) => cat.category === selectedCategory)?.products || [];

  // Filter products based on search term
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider theme={customTheme}>
      <AccessoriesWrapper>
        <Box sx={{ maxWidth: 1200, mx: 'auto', textAlign: 'center' }}>
          
          {/* Header & Search */}
          <Typography
            variant="h3"
            sx={{
              color: ACCENT_COLOR,
              mb: 1.5,
              textShadow: `0 0 10px ${ACCENT_COLOR}40`,
            }}
          >
            Accessory Catalogue
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: TEXT_SECONDARY,
              mb: 4,
            }}
          >
            Explore high-performance, precision-engineered accessories, spares, and consumables for all your air pollution control systems.
          </Typography>
          
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <StyledTextField
              variant="outlined"
              placeholder="Search by product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: ACCENT_COLOR, mr: 1, fontSize: '1.2rem' }} />
                ),
                sx: {
                    // Placeholder styling within InputProps
                    '& .MuiInputBase-input::placeholder': {
                        color: `${TEXT_SECONDARY} !important`,
                        opacity: 1,
                    },
                }
              }}
            />
          </Box>
          
          {/* Category Filter Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              mb: 5,
            }}
          >
            {AccesoriesData.map((cat) => (
              <CategoryButton
                key={cat.category}
                active={cat.category === selectedCategory}
                onClick={() => {
                  setSelectedCategory(cat.category);
                  setSearchTerm('');
                }}
              >
                {cat.category}
              </CategoryButton>
            ))}
          </Box>

          {/* Product Grid */}
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
          >
            {filteredProducts.length === 0 ? (
              <Typography
                variant="body1"
                sx={{
                  color: TEXT_SECONDARY,
                  textAlign: 'center',
                  width: '100%',
                  mt: 3,
                }}
              >
                No products found matching "{searchTerm}" in **{selectedCategory}**.
              </Typography>
            ) : (
              filteredProducts.map((product) => (
                <Grid item xs={6} sm={4} md={3} key={product.id}>
                  <AdvancedProductCard elevation={0}>
                    {/* Image Area */}
                    <Box sx={{ height: 180, p: 1.5, background: `${TEXT_LIGHT}05`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardMedia
                            component="img"
                            image={product.image}
                            alt={product.title}
                            sx={{
                                objectFit: 'contain',
                                maxHeight: '100%',
                                maxWidth: '100%',
                                transition: 'transform 0.4s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                }
                            }}
                            onError={(e) => {
                                // Fallback image for failed load
                                e.target.onerror = null; 
                                e.target.src = 'https://via.placeholder.com/220x180/1a2a2a/00BFFF?text=Image+Missing';
                            }}
                        />
                    </Box>
                    
                    {/* Content Area */}
                    <CardContent
                      sx={{
                        p: 2,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box sx={{ mb: 1, textAlign: 'center' }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: ACCENT_COLOR,
                            fontSize: '1rem',
                            mb: 0.5,
                            lineHeight: 1.2,
                          }}
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: TEXT_SECONDARY,
                            fontSize: '0.7rem',
                            fontWeight: 400,
                            textTransform: 'uppercase',
                          }}
                        >
                          {product.category}
                        </Typography>
                      </Box>
                      
                      <MuiLink
                        component={RouterLink}
                        to="/contact"
                        underline="none"
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: TEXT_LIGHT,
                          background: `${ACCENT_COLOR}30`,
                          borderRadius: '20px',
                          padding: '6px 16px',
                          border: `1px solid ${ACCENT_COLOR}`,
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          '&:hover': {
                            color: PRIMARY_BG,
                            background: ACCENT_COLOR,
                            boxShadow: `0 0 15px ${ACCENT_COLOR}80`,
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        Request Quote
                        <SendIcon sx={{ ml: 1, fontSize: '0.8rem' }} />
                      </MuiLink>
                    </CardContent>
                  </AdvancedProductCard>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </AccessoriesWrapper>
    </ThemeProvider>
  );
};

export default Accesscories;