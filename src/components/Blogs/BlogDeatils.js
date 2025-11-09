
import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  CardMedia,
  Chip,
  Avatar,
  Container,
  Link as MuiLink,
  Grid,
} from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Blogdata } from './BlogData';

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h1: {
      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '2.8rem' },
      fontWeight: 700,
      color: '#f5f6f5',
    },
    h3: {
      fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
      fontWeight: 600,
      color: '#00BFFF',
    },
    body1: {
      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem' },
      color: '#B0BEC5',
      lineHeight: 1.7,
    },
    caption: {
      fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
      color: '#8892b0',
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
  },
});

const BlogDetailWrapper = styled(Box)(({ theme }) => ({
  background: '#0d1515',
  minHeight: '100vh',
  padding: theme.spacing(6, 2),
  color: '#f5f6f5',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 1),
  },
}));

const BlogContentBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(0, 191, 255, 0.05)',
  borderRadius: '8px',
  padding: theme.spacing(4, 3),
  maxWidth: '900px',
  margin: '0 auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5, 1.5),
  },
}));

const RelatedBlogCard = styled(Box)(({ theme }) => ({
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

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = Blogdata.find((b) => b.slug === slug);
  const relatedBlogs = Blogdata.filter((b) => b.slug !== slug).slice(0, 3); // Show up to 3 related blogs

  // Mock additional data
  const getBlogDate = (blog) => blog?.date || 'October 10, 2025';
  const getBlogAuthor = (blog) => blog?.author || 'AirTech Team';
  const getBlogReadTime = (blog) => blog?.readTime || '4 min read';
  const getBlogCategory = (blog) => blog?.category || 'General';

  if (!blog) {
    return (
      <ThemeProvider theme={theme}>
        <BlogDetailWrapper>
          <Container maxWidth="lg">
            <Typography variant="h1" sx={{ textAlign: 'center', mb: 3 }}>
              Blog Not Found
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: '#B0BEC5', mb: 3 }}>
              The article you're looking for doesn't exist.
            </Typography>
            <MuiLink component={RouterLink} to="/blogs">
              <ArrowBackIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> Back to Blogs
            </MuiLink>
          </Container>
        </BlogDetailWrapper>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <BlogDetailWrapper>
        <Container maxWidth="lg">
          <MuiLink component={RouterLink} to="/blogs" sx={{ mb: 3, display: 'inline-flex' }}>
            <ArrowBackIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> Back to Blogs
          </MuiLink>
          <BlogContentBox>
            <CardMedia
              component="img"
              image={blog.img}
              alt={blog.title}
              sx={{
                height: { xs: 250, sm: 350, md: 450 },
                objectFit: 'contain',
                borderRadius: '8px',
                mb: 4,
                background: 'rgba(255, 255, 255, 0.02)',
                padding: '10px',
              }}
              onError={(e) => {
                console.error(`Failed to load image for ${blog.title}: ${blog.img}`);
                e.target.src = 'https://via.placeholder.com/900x450?text=Article+Image';
              }}
            />
            <Typography variant="h1" sx={{ mb: 2, textAlign: 'center' }}>
              {blog.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2.5 }}>
              <Chip
                icon={<CategoryIcon sx={{ fontSize: '0.85rem', color: '#00BFFF' }} />}
                label={getBlogCategory(blog)}
                size="small"
                sx={{ background: 'rgba(0, 191, 255, 0.08)', color: '#00BFFF', border: 'none' }}
              />
              <Chip
                icon={<CalendarTodayIcon sx={{ fontSize: '0.85rem', color: '#00BFFF' }} />}
                label={getBlogReadTime(blog)}
                size="small"
                sx={{ background: 'rgba(0, 191, 255, 0.08)', color: '#00BFFF', border: 'none' }}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
              <Avatar sx={{ bgcolor: '#00BFFF', width: 30, height: 30, mr: 1, fontSize: '0.95rem' }}>
                {getBlogAuthor(blog).charAt(0)}
              </Avatar>
              <Typography variant="caption">
                By {getBlogAuthor(blog)} • {getBlogDate(blog)}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, textAlign: 'left' }}>
              {blog.desc}
            </Typography>
            {/* Extended Content for News-like Format */}
            <Typography variant="h3" sx={{ mb: 2 }}>
              Why It Matters
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: 'left' }}>
              {blog.desc} {/* Repeated for demonstration; replace with actual extended content */}
              In today’s industrial landscape, maintaining air quality is not just a regulatory requirement but a critical component of operational efficiency and worker safety. Technologies like {blog.title.toLowerCase().includes('wet scrubbers') ? 'wet scrubbers' : blog.title.toLowerCase().includes('dust collector') ? 'dust collectors' : 'advanced filtration systems'} are pivotal in addressing these challenges. This section explores the broader impact of these solutions on environmental sustainability and workplace health.
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Key Features and Benefits
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: 'left' }}>
              Modern {blog.title.toLowerCase().includes('wet scrubbers') ? 'wet scrubbers' : blog.title.toLowerCase().includes('dust collector') ? 'dust collectors' : 'filtration systems'} offer several advantages, including high efficiency in pollutant removal, energy savings, and compatibility with various industrial processes. For instance, integrating IoT technology allows real-time monitoring, ensuring optimal performance and compliance with environmental standards.
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Looking Ahead
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, textAlign: 'left' }}>
              As industries evolve, the demand for innovative air quality solutions continues to grow. Future advancements may include more sustainable materials, enhanced automation, and greater integration with smart factory systems. Stay tuned for updates on how {blog.title.toLowerCase().includes('wet scrubbers') ? 'wet scrubber technology' : blog.title.toLowerCase().includes('dust collector') ? 'dust collection systems' : 'air purification technologies'} will shape the future of industrial air quality.
            </Typography>
          </BlogContentBox>
          {/* Related Blogs Section */}
          {relatedBlogs.length > 0 && (
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography variant="h2" sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' } }}>
                Related Articles
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {relatedBlogs.map((relatedBlog) => (
                  <Grid item xs={12} sm={6} md={4} key={relatedBlog.id}>
                    <RelatedBlogCard>
                      <CardMedia
                        component="img"
                        image={relatedBlog.img}
                        alt={relatedBlog.title}
                        sx={{
                          height: { xs: 140, sm: 160, md: 180 },
                          objectFit: 'contain',
                          background: 'rgba(255, 255, 255, 0.02)',
                          padding: '8px',
                          borderBottom: '1px solid rgba(0, 191, 255, 0.05)',
                        }}
                        onError={(e) => {
                          console.error(`Failed to load image for ${relatedBlog.title}: ${relatedBlog.img}`);
                          e.target.src = 'https://via.placeholder.com/360x180?text=Article+Image';
                        }}
                      />
                      <Box sx={{ p: 1.5, flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ mb: 1, fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' } }}>
                          {relatedBlog.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1.5,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {relatedBlog.desc}
                        </Typography>
                        <MuiLink component={RouterLink} to={`/blogs/${relatedBlog.slug}`}>
                          <ArrowForwardIcon sx={{ mr: 0.5, fontSize: '0.9rem' }} /> Read More
                        </MuiLink>
                      </Box>
                    </RelatedBlogCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Container>
      </BlogDetailWrapper>
    </ThemeProvider>
  );
};

export default BlogDetail;
