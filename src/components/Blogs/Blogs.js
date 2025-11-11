
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Blogdata } from './BlogData';
import {
  Container,
  Grid,
  Box,
  Typography,
  Link as MuiLink,
  CardMedia,
  useMediaQuery,
  TextField,
  Chip,
  Avatar,
  Button,
} from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import emailjs from 'emailjs-com';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h2: {
      fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
      fontWeight: 700,
      color: '#f5f6f5',
    },
    h6: {
      fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
      fontWeight: 600,
      color: '#00BFFF',
    },
    body2: {
      fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
      color: '#B0BEC5',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          display: 'inline-flex',
          alignItems: 'center',
          padding: '6px 16px',
          border: '1px solid #00BFFF',
          borderRadius: '6px',
          color: '#00BFFF',
          fontSize: '0.85rem',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(0, 191, 255, 0.15)',
            boxShadow: '0 2px 8px rgba(0, 191, 255, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 20px',
          borderRadius: '6px',
          background: '#00BFFF',
          color: '#f5f6f5',
          fontSize: { xs: '0.8rem', sm: '0.85rem' },
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#0088cc',
            boxShadow: '0 2px 8px rgba(0, 191, 255, 0.3)',
          },
        },
      },
    },
  },
});

const HeroBox = styled(Box)(({ theme }) => ({
  background: 'rgba(26, 42, 42, 0.9)',
  padding: theme.spacing(4, 2),
  textAlign: 'center',
  borderRadius: '8px',
  marginBottom: theme.spacing(4),
  border: '1px solid rgba(0, 191, 255, 0.05)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 1.5),
  },
}));

const BlogCard = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(0, 191, 255, 0.05)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 16px rgba(0, 191, 255, 0.1)',
    borderColor: 'rgba(0, 191, 255, 0.15)',
  },
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

export default function Blogs() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    console.log('Blogdata:', Blogdata);
    if (!Blogdata || Blogdata.length === 0) {
      console.warn('Blogdata is empty or undefined');
    }
    Blogdata.forEach((blog) => {
      console.log(`Blog ID: ${blog.id}, Title: ${blog.title}, Image: ${blog.img}, Slug: ${blog.slug}`);
    });
  }, []);

  // Mock additional data
  const getBlogDate = (blog) => blog.date || 'October 10, 2025';
  const getBlogAuthor = (blog) => blog.author || 'Napcen Team';
  const getBlogReadTime = (blog) => blog.readTime || '4 min read';
  const getBlogCategory = (blog) => blog.category || 'General';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setStatus('');
    setStatusType('');
  };

  const validateEmail = () => {
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const error = validateEmail();
    if (error) {
      setEmailError(error);
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          form_type: 'Newsletter Subscription',
          email: email,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Subscribed successfully! You will receive updates soon.');
          setStatusType('success');
          setEmail('');
        },
        (error) => {
          setStatus('Failed to subscribe. Please try again.');
          setStatusType('error');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: '#0d1515',
          py: { xs: 4, sm: 5, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <HeroBox>
            <Typography variant="h2" sx={{ mb: 1.5 }}>
              Featured Insights
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#B0BEC5', maxWidth: '550px', margin: 'auto', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' } }}
            >
              Discover our latest articles on air quality and sustainable solutions.
            </Typography>
          </HeroBox>

          {Blogdata.length === 0 ? (
            <Typography sx={{ color: '#f5f6f5', textAlign: 'center', py: 4, fontSize: '0.9rem' }}>
              No articles available.
            </Typography>
          ) : (
            <Grid container spacing={2} justifyContent="center">
              {Blogdata.map((blog) => (
                <Grid item xs={12} sm={6} key={blog.id}>
                  <BlogCard>
                    <CardMedia
                      component="img"
                      image={blog.img}
                      alt={blog.title}
                      sx={{
                        height: { xs: 160, sm: 180, md: 200 },
                        objectFit: 'contain',
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '8px',
                        borderBottom: '1px solid rgba(0, 191, 255, 0.05)',
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image for ${blog.title}: ${blog.img}`);
                        e.target.src = 'https://via.placeholder.com/360x200?text=Article+Image';
                      }}
                    />
                    <Box sx={{ p: 1.5, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Chip
                          icon={<CategoryIcon sx={{ fontSize: '0.75rem', color: '#00BFFF' }} />}
                          label={getBlogCategory(blog)}
                          size="small"
                          sx={{ background: 'rgba(0, 191, 255, 0.08)', color: '#00BFFF', border: 'none' }}
                        />
                        <Chip
                          icon={<CalendarTodayIcon sx={{ fontSize: '0.75rem', color: '#00BFFF' }} />}
                          label={getBlogReadTime(blog)}
                          size="small"
                          sx={{ background: 'rgba(0, 191, 255, 0.08)', color: '#00BFFF', border: 'none' }}
                        />
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {blog.desc}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <Avatar sx={{ bgcolor: '#00BFFF', width: 24, height: 24, mr: 1, fontSize: '0.8rem' }}>
                          {getBlogAuthor(blog).charAt(0)}
                        </Avatar>
                        <Typography variant="caption" sx={{ color: '#8892b0' }}>
                          By {getBlogAuthor(blog)} • {getBlogDate(blog)}
                        </Typography>
                      </Box>
                      <MuiLink component={RouterLink} to={`/blogs/${blog.slug}`}>
                        <ArrowForwardIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> Explore
                      </MuiLink>
                    </Box>
                  </BlogCard>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Subscribe Section */}
          <Box
            sx={{
              mt: 5,
              p: { xs: 2, sm: 3 },
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 191, 255, 0.05)',
            }}
          >
            <Typography variant="h4" sx={{ color: '#00BFFF', mb: 1.5, fontWeight: 600, fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' } }}>
              Stay Informed
            </Typography>
            <Typography variant="body1" sx={{ color: '#B0BEC5', mb: 2, maxWidth: '500px', margin: 'auto' }}>
              Subscribe to receive updates on our latest articles and environmental solutions.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              <TextField
                variant="outlined"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                sx={{
                  width: { xs: '100%', sm: 280 },
                  '& .MuiOutlinedInput-root': {
                    color: '#f5f6f5',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    '& fieldset': { borderColor: 'rgba(0, 191, 255, 0.1)' },
                    '&:hover fieldset': { borderColor: '#00BFFF' },
                    '&.Mui-focused fieldset': { borderColor: '#00BFFF' },
                  },
                  '& .MuiInputBase-input': {
                    fontSize: { xs: '0.8rem', sm: '0.85rem' },
                    padding: '8px 12px',
                  },
                }}
                error={!!emailError}
                helperText={emailError}
              />
              <Button type="submit">
                Subscribe
              </Button>
              {status && (
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    textAlign: 'center',
                    color: statusType === 'success' ? '#4CAF50' : '#f44336',
                    fontWeight: 500,
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    width: '100%',
                  }}
                >
                  {status}
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
