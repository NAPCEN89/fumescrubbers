import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Icon Imports
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Assuming logo import is correct
import logo from '../../assets/images/Napcen-logo.png';

// --- Configuration Constants ---
const PRIMARY_BG_GRADIENT = 'linear-gradient(to right, #424242, #030303ff)';
const ACCENT_COLOR = '#22b9ffff';
const TEXT_LIGHT = '#fff';
const TEXT_SECONDARY = '#ccc';
const BORDER_COLOR = '#1a84cf80';

// --- Styled Components ---
const StyledFooter = styled('footer')(({ theme }) => ({
  background: PRIMARY_BG_GRADIENT,
  color: TEXT_LIGHT,
  padding: theme.spacing(4, 0, 2, 0),
  borderTop: `2px solid ${ACCENT_COLOR}`,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: TEXT_SECONDARY,
  fontSize: '0.9rem',
  transition: 'color 0.3s ease, transform 0.2s ease',
  display: 'block',
  padding: theme.spacing(0.4, 0),
  '&:hover': {
    color: ACCENT_COLOR,
    fontWeight: 'bold',
    transform: 'translateX(5px)',
  },
}));

// New styled component for external links (e.g., mailto, tel, Google Maps)
const ExternalFooterLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: TEXT_SECONDARY,
  fontSize: { xs: '0.7rem', sm: '0.75rem' },
  transition: 'color 0.3s ease, transform 0.2s ease',
  '&:hover': {
    color: ACCENT_COLOR,
    fontWeight: 'bold',
    transform: 'translateX(5px)',
  },
}));

const SocialIconLink = styled('a')(({ theme }) => ({
  color: TEXT_SECONDARY,
  transition: 'color 0.3s ease, transform 0.3s ease',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: ACCENT_COLOR,
    transform: 'scale(1.15)',
  },
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  textAlign: { xs: 'center', md: 'left' },
  padding: theme.spacing(0.5, 0),
  height: '100%',
}));

// Updated ContactDetail to include clickable links
const ContactDetail = ({ Icon, label, value, href }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.0, textAlign: { xs: 'center', md: 'left' } }}>
    <Icon sx={{ color: ACCENT_COLOR, fontSize: 20, mr: 1, mt: 0.2, flexShrink: 0 }} />
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: '0.75rem', sm: '0.8rem' },
          color: TEXT_LIGHT,
          fontWeight: 'bold',
          mb: 0.2,
        }}
      >
        {label}
      </Typography>
      <ExternalFooterLink href={href} target="_blank" rel="noopener noreferrer">
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
            color: TEXT_SECONDARY,
            lineHeight: 1.4,
          }}
        >
          {value}
        </Typography>
      </ExternalFooterLink>
    </Box>
  </Box>
);

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledFooter id="contact">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 3, lg: 5 }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* 1. About/Logo Section */}
          <Grid item xs={12} md={4} lg={3}>
            <SectionContainer>
              <Box
                component="img"
                src={logo}
                alt="Napcen Logo"
                sx={{
                  width: { xs: 90, sm: 110 },
                  height: 'auto',
                  mb: 2,
                  filter: 'brightness(180%)',
                  mx: { xs: 'auto', md: '0' },
                  display: 'block',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: TEXT_SECONDARY,
                  lineHeight: 1.6,
                  mb: 2,
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                NAPCEN specializes in manufacturing advanced air pollution control equipment, offering innovative solutions to industries worldwide. We prioritize clean air for human health and the environment.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 1.5, md: 2 },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <SocialIconLink href="https://www.youtube.com/@napcenair6285" aria-label="YouTube">
                  <YouTubeIcon />
                </SocialIconLink>
                <SocialIconLink href="https://in.linkedin.com/company/napcen" aria-label="LinkedIn">
                  <LinkedInIcon />
                </SocialIconLink>
                <SocialIconLink href="https://in.linkedin.com/company/napcen" aria-label="Facebook">
                  <FacebookIcon />
                </SocialIconLink>
                <SocialIconLink href="https://www.instagram.com/napcenpondy" aria-label="Instagram">
                  <InstagramIcon />
                </SocialIconLink>
              </Box>
            </SectionContainer>
          </Grid>

          {/* 2. Quick Links Section */}
          <Grid item xs={6} md={2} lg={3}>
            <SectionContainer>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: ACCENT_COLOR,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  textTransform: 'uppercase',
                  borderBottom: `2px solid ${BORDER_COLOR}`,
                  pb: 0.5,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Quick Links
              </Typography>
              <List disablePadding sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                {[
                  { text: 'Home', to: '/' },
                  { text: 'About Us', to: '/about' },
                  { text: 'Our Services', to: '/service' },
                  { text: 'Blog & News', to: '/#latest-post' },
                  { text: 'Contact Us', to: '/contact' },
                ].map((item, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0 }}>
                    <FooterLink to={item.to}>{item.text}</FooterLink>
                  </ListItem>
                ))}
              </List>
            </SectionContainer>
          </Grid>

          {/* 3. Products Section */}
          <Grid item xs={6} md={3} lg={3}>
            <SectionContainer>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: ACCENT_COLOR,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  textTransform: 'uppercase',
                  borderBottom: `2px solid ${BORDER_COLOR}`,
                  pb: 0.5,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Products
              </Typography>
              <List disablePadding sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                {[
                  { name: 'All Products', path: '/products' },
                  { name: 'Wet Scrubber', path: '/wet-scrubbers' },
                  { name: 'Dry Scrubber', path: '/dry-scrubber' },
                  { name: 'Downdraft Table', path: '/down-draft' },
                  { name: 'Fume Extractor', path: '/fume-extractor' },
                  { name: 'Dust Collector', path: '/dust-collector' },
                ].map((item, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0 }}>
                    <FooterLink to={item.path}>{item.name}</FooterLink>
                  </ListItem>
                ))}
              </List>
            </SectionContainer>
          </Grid>

          {/* 4. Contact Info Section */}
          <Grid item xs={12} md={3} lg={3}>
            <SectionContainer sx={{ pt: { xs: 0, md: 1 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: ACCENT_COLOR,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  textTransform: 'uppercase',
                  borderBottom: `2px solid ${BORDER_COLOR}`,
                  pb: 0.5,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Get In Touch
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                <ContactDetail
                  Icon={LocationOnIcon}
                  label="Location"
                  value="Villianur, Puducherry-605110, India"
                  href="https://www.google.com/maps/search/?api=1&query=Villianur,+Puducherry-605110,+India"
                />
                <ContactDetail
                  Icon={PhoneIcon}
                  label="Call Us"
                  value="+91 7904469219"
                  href="tel:+917904469219"
                />
                <ContactDetail
                  Icon={EmailIcon}
                  label="Email Us"
                  value="sales@napcen.com"
                  href="mailto:sales@napcen.com"
                />
              </Box>
            </SectionContainer>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 3, mb: 2, bgcolor: BORDER_COLOR }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 1, md: 1 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: TEXT_SECONDARY,
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
            }}
          >
            © {new Date().getFullYear()} NAPCEN. All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1, sm: 1.5, md: 2 },
              justifyContent: 'center',
              mb: { xs: 1, md: 0 },
            }}
          >
            {['Terms of Use', 'Privacy Policy'].map((text, i) => (
              <FooterLink
                key={i}
                to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                sx={{
                  display: 'inline',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  '&:hover': { transform: 'none', color: ACCENT_COLOR },
                }}
              >
                {text}
              </FooterLink>
            ))}
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;