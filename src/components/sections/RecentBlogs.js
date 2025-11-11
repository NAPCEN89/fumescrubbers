import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Blogdata } from "../Blogs/BlogData";
import {
  Container,
  Grid,
  Box,
  Typography,
  Link as MuiLink,
  CardMedia,
  useMediaQuery,
  Chip,
  Avatar,
} from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CategoryIcon from "@mui/icons-material/Category";

const theme = createTheme({
  typography: {
    fontFamily: ["'Poppins'", "sans-serif"].join(","),
    h3: {
      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
      fontWeight: 700,
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.2px",
    },
    h6: {
      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
      fontWeight: 600,
      color: "#00BFFF",
    },
    body2: {
      fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
      color: "#B0BEC5",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          display: "inline-flex",
          alignItems: "center",
          padding: "6px 16px",
          border: "1px solid #00BFFF",
          borderRadius: "6px",
          color: "#00BFFF",
          fontSize: "0.85rem",
          fontWeight: 500,
          textDecoration: "none",
          transition: "all 0.3s ease",
          zIndex: 10, // Ensure buttons are above other elements
          pointerEvents: "auto", // Ensure clicks are captured
          "&:hover": {
            background: "rgba(0, 191, 255, 0.1)",
            boxShadow: "0 2px 8px rgba(0, 191, 255, 0.15)",
            cursor: "pointer",
          },
        },
      },
    },
  },
});

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  background: "linear-gradient(to bottom, rgba(26, 42, 42, 0.9), rgba(13, 21, 21, 0.9))",
  borderRadius: "10px",
  border: "1px solid rgba(0, 191, 255, 0.1)",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle at top center, rgba(0, 191, 255, 0.08), transparent 70%)",
    opacity: 0.5,
    pointerEvents: "none", // Prevent pseudo-element from blocking clicks
  },
}));

const BlogCard = styled(Box)(({ theme }) => ({
  borderRadius: "6px",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(0, 191, 255, 0.1)",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 6px 16px rgba(0, 191, 255, 0.1)",
    borderColor: "rgba(0, 191, 255, 0.25)",
  },
  display: "flex",
  flexDirection: "column",
  height: "100%",
  maxWidth: "350px",
}));

export default function RecentBlogSection() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log("Blogdata:", Blogdata);
    if (!Blogdata || Blogdata.length === 0) {
      console.warn("Blogdata is empty or undefined");
    } else {
      Blogdata.forEach((blog, index) => {
        console.log(`Blog ${index + 1}: ID=${blog.id}, Title=${blog.title}, Slug=${blog.slug}, Image=${blog.img}`);
        if (!blog.slug) {
          console.warn(`Missing slug for blog: ${blog.title || `Blog ${index + 1}`}`);
        }
      });
    }
  }, []);

  // Sort by date (if available) or take first two blogs
  const recentBlogs = Blogdata
    .sort((a, b) => (b.date ? new Date(b.date) - new Date(a.date) : Blogdata.indexOf(a) - Blogdata.indexOf(b)))
    .slice(0, 2);

  // Mock additional data
  const getBlogDate = (blog) => blog.date || "October 10, 2025";
  const getBlogAuthor = (blog) => blog.author || "Napcen Team";
  const getBlogReadTime = (blog) => blog.readTime || "4 min read";

  return (
    <ThemeProvider theme={theme}>
      <SectionBox>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 3, textAlign: "center", position: "relative", zIndex: 1 }}>
            Recent Insights
          </Typography>
          {recentBlogs.length === 0 ? (
            <Typography sx={{ color: "#fff", textAlign: "center", py: 3, fontSize: "0.9rem" }}>
              No recent articles available.
            </Typography>
          ) : (
            <Grid container spacing={2} justifyContent="center">
              {recentBlogs.map((blog, index) => (
                <Grid item xs={12} sm={6} key={blog.id || `blog-${index}`}>
                  <BlogCard>
                    <CardMedia
                      component="img"
                      image={blog.img || "https://via.placeholder.com/350x180?text=Article+Image"}
                      alt={blog.title || "Blog Image"}
                      sx={{
                        height: { xs: 140, sm: 160, md: 180 },
                        objectFit: "cover",
                        borderBottom: "1px solid rgba(0, 191, 255, 0.1)",
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image for ${blog.title || "unknown"}: ${blog.img}`);
                        e.target.src = "https://via.placeholder.com/350x180?text=Article+Image";
                      }}
                    />
                    <Box sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <Chip
                          icon={<CategoryIcon sx={{ fontSize: "0.75rem" }} />}
                          label={blog.category || "General"}
                          size="small"
                          sx={{ background: "rgba(0, 191, 255, 0.05)", color: "#00BFFF", border: "none" }}
                        />
                        <Chip
                          icon={<CalendarTodayIcon sx={{ fontSize: "0.75rem" }} />}
                          label={getBlogReadTime(blog)}
                          size="small"
                          sx={{ background: "rgba(0, 191, 255, 0.05)", color: "#00BFFF", border: "none" }}
                        />
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {blog.title || "Untitled Blog"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          flexGrow: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {blog.desc || "No description available."}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Avatar sx={{ bgcolor: "#00BFFF", width: 20, height: 20, mr: 1, fontSize: "0.7rem" }}>
                          {getBlogAuthor(blog).charAt(0)}
                        </Avatar>
                        <Typography variant="caption" sx={{ color: "#8892b0" }}>
                          By {getBlogAuthor(blog)} • {getBlogDate(blog)}
                        </Typography>
                      </Box>
                      <MuiLink
                        component={RouterLink}
                        to={blog.slug ? `/blogs/${blog.slug}` : "/blogs"}
                        onClick={(e) => {
                          console.log(`Read button clicked for blog: ${blog.title || "unknown"}, navigating to: ${blog.slug ? `/blogs/${blog.slug}` : "/blogs"}`);
                          if (!blog.slug) {
                            e.preventDefault(); // Prevent navigation if slug is missing
                            console.warn(`Cannot navigate: Missing slug for blog: ${blog.title || "unknown"}`);
                          }
                        }}
                        sx={{ alignSelf: "flex-start" }}
                      >
                        <ArrowForwardIcon sx={{ mr: 0.5, fontSize: "0.9rem" }} /> Read
                      </MuiLink>
                    </Box>
                  </BlogCard>
                </Grid>
              ))}
            </Grid>
          )}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <MuiLink
              component={RouterLink}
              to="/blogs"
              onClick={() => console.log("View All Insights button clicked, navigating to: /blogs")}
              sx={{
                padding: "8px 20px",
                borderRadius: "6px",
                fontSize: "0.9rem",
                fontWeight: 600,
                zIndex: 10,
                pointerEvents: "auto",
              }}
            >
              View All Insights
            </MuiLink>
          </Box>
        </Container>
      </SectionBox>
    </ThemeProvider>
  );
};