
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
  useMediaQuery,
  useTheme,
  Link as MuiLink,
  Grid,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaDribbble } from 'react-icons/fa';
import { AccesoriesData } from './AccesoriesData';

// Styled Components
const AccessoriesWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  background: '#0d1515',
  minHeight: '100vh',
  width: '100%',
  color: '#f5f6f5',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const CategoryButton = styled(Button)(({ theme, active }) => ({
  background: active ? 'rgba(0, 191, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
  color: '#f5f6f5',
  border: active ? '1px solid #00BFFF' : '1px solid rgba(0, 191, 255, 0.1)',
  borderRadius: '6px',
  padding: theme.spacing(0.8, 2),
  margin: theme.spacing(0, 0.5),
  fontSize: '0.85rem',
  fontWeight: 600,
  fontFamily: '"Poppins", sans-serif',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 191, 255, 0.15)',
    borderColor: '#00BFFF',
    boxShadow: '0 2px 6px rgba(0, 191, 255, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5, 1.2),
    fontSize: '0.75rem',
    margin: theme.spacing(0, 0.3),
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 220,
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(0, 191, 255, 0.05)',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 4px 12px rgba(0, 191, 255, 0.1)',
    borderColor: 'rgba(0, 191, 255, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const StyledFooter = styled('footer')(({ theme }) => ({
  background: '#0d1515',
  color: '#B0BEC5',
  padding: theme.spacing(5, 0),
  borderTop: '1px solid rgba(0, 191, 255, 0.1)',
  width: '100%',
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: 'rgba(26, 42, 42, 0.9)',
  borderRadius: '10px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
  color: '#f5f6f5',
  border: '1px solid rgba(0, 191, 255, 0.05)',
}));

const PlainCard = styled(Card)(({ theme }) => ({
  background: 'transparent',
  borderRadius: '10px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  color: '#f5f6f5',
}));

const PhoneIcon = () => (
  <svg viewBox="0 0 512 512" width="18" height="18" fill="#00BFFF">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 512 512" width="18" height="18" fill="#00BFFF">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);

const MapMarkerIcon = () => (
  <svg viewBox="0 0 384 512" width="18" height="18" fill="#00BFFF">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
  </svg>
);

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h3: { fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' }, fontWeight: 700 },
    h5: { fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem' }, fontWeight: 600 },
    h6: { fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' }, fontWeight: 600 },
    body1: { fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' } },
    body2: { fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem', lg: '0.8rem' } },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#f5f6f5',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#B0BEC5',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#00BFFF',
          },
        },
      },
    },
  },
});

const Accesscories = () => {
  const [selectedCategory, setSelectedCategory] = useState(AccesoriesData[0].category);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const muiTheme = useTheme();
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const allProducts = AccesoriesData.find((cat) => cat.category === selectedCategory)?.products || [];
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <AccessoriesWrapper>
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#fff',
              mb: 1.5,
              letterSpacing: '0.2px',
            }}
          >
            Accessories Collection
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              color: '#B0BEC5',
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
              mb: 3,
            }}
          >
            Browse our high-performance accessories for Wet Scrubbers, Dust Collectors, Fume Extractors, and more.
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              mb: 2.5,
              width: { xs: '100%', sm: '70%', md: '50%' },
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '6px',
                color: '#f5f6f5',
                border: '1px solid rgba(0, 191, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#00BFFF',
                  boxShadow: '0 2px 6px rgba(0, 191, 255, 0.15)',
                },
                '&.Mui-focused': {
                  borderColor: '#00BFFF',
                  boxShadow: '0 0 8px rgba(0, 191, 255, 0.2)',
                },
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiInputBase-input': {
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                padding: '8px 10px',
                fontFamily: '"Poppins", sans-serif',
              },
            }}
            InputProps={{
              sx: {
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: '"Poppins", sans-serif',
                },
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 0.8,
              mb: 3,
              px: { xs: 1, sm: 0 },
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
        </Box>
        <Grid
          container
          spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
          sx={{ justifyContent: 'center' }}
        >
          {filteredProducts.length === 0 ? (
            <Typography
              variant="body1"
              sx={{
                color: '#B0BEC5',
                textAlign: 'center',
                width: '100%',
                mt: 3,
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
              }}
            >
              No products found.
            </Typography>
          ) : (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard elevation={0}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      objectFit: 'contain',
                      padding: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderBottom: '1px solid rgba(0, 191, 255, 0.05)',
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image for ${product.title}: ${product.image}`);
                      e.target.src = 'https://picsum.photos/220/160?text=Product+Image';
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 1.2,
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                        fontWeight: 600,
                        mb: 0.5,
                        color: '#00BFFF',
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
                        color: '#B0BEC5',
                        mb: 1,
                        textAlign: 'center',
                      }}
                    >
                      {product.category}
                    </Typography>
                    <MuiLink
                      component={RouterLink}
                      to="/contact"
                      underline="none"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        fontWeight: 600,
                        color: '#f5f6f5',
                        background: 'rgba(0, 191, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '5px 14px',
                        border: '1px solid rgba(0, 191, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#00BFFF',
                          background: 'rgba(0, 191, 255, 0.15)',
                          borderColor: '#00BFFF',
                          boxShadow: '0 2px 6px rgba(0, 191, 255, 0.2)',
                        },
                      }}
                    >
                      Get a Quote
                    </MuiLink>
                  </CardContent>
                </ProductCard>
              </Grid>
            ))
          )}
        </Grid>
      </AccessoriesWrapper>
    </ThemeProvider>
  );
};

export default Accesscories;
