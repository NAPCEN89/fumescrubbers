import { Container, Typography, Grid, Box, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export default function RecentBlogs() {
  // Take only the top 3 latest posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Box sx={{ py: 10, bgcolor: '#010409' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ color: '#00E5FF', fontWeight: 800 }}>Recent Updates</Typography>
          <Link href="/blogs" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: '#00E5FF' }}>View All Blogs →</Button>
          </Link>
        </Box>

        <Grid container spacing={3}>
          {latestPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Box sx={{ p: 3, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid #ffffff10' }}>
                <Typography variant="caption" sx={{ color: '#00E5FF' }}>{post.date}</Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mt: 1, mb: 2 }}>{post.title}</Typography>
                <Link href={`/blogs/${post.slug}`} style={{ color: '#00E5FF', textDecoration: 'none', fontWeight: 600 }}>
                  Read More
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}