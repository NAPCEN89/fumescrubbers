import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Logo
import logo from '../../assets/images/Napcen-logo.png';

// Config
const ACCENT_COLOR = '#22b9ffff';
const TEXT_LIGHT = '#fff';
const TEXT_SECONDARY = '#ccc';
const BORDER_COLOR = '#1a84cf80';

// Styled
const StyledFooter = styled('footer')({
  background: 'linear-gradient(to right, #424242, #030303ff)',
  color: TEXT_LIGHT,
  padding: '70px 0 40px',
  borderTop: `3px solid ${ACCENT_COLOR}`,
});

const FooterLink = styled(Link)({
  textDecoration: 'none',
  color: TEXT_SECONDARY,
  fontSize: '0.94rem',
  transition: 'all 0.3s ease',
  display: 'block',
  padding: '7px 0',
  '&:hover': { color: ACCENT_COLOR, transform: 'translateX(8px)', fontWeight: 'bold' },
});

const ExternalLink = styled('a')({
  textDecoration: 'none',
  color: TEXT_SECONDARY,
  transition: 'color 0.3s',
  '&:hover': { color: ACCENT_COLOR },
});

const SocialIconLink = styled('a')({
  color: TEXT_SECONDARY,
  fontSize: '1.7rem',
  transition: 'all 0.3s',
  '&:hover': { color: ACCENT_COLOR, transform: 'scale(1.3)' },
});

const ContactDetail = ({ Icon, label, value, href }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.2, mb: 2.6 }}>
    <Icon sx={{ color: ACCENT_COLOR, fontSize: 28, flexShrink: 0, mt: 0.4 }} />
    <Box>
      <Typography sx={{ fontSize: '0.95rem', color: TEXT_LIGHT, fontWeight: 'bold', lineHeight: 1.3 }}>
        {label}
      </Typography>
      <ExternalLink href={href} target="_blank" rel="noopener noreferrer">
        <Typography sx={{ fontSize: '0.9rem', color: TEXT_SECONDARY, lineHeight: 1.5 }}>
          {value}
        </Typography>
      </ExternalLink>
    </Box>
  </Box>
);

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <Container maxWidth="lg">

        {/* TOP SECTION — LOGO + DESCRIPTION */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Box component="img" src={logo} alt="NAPCEN" sx={{ width: { xs: 120, sm: 150 }, height: 'auto', filter: 'brightness(180%)', mb: 3 }} />
          <Typography sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: { xs: '0.92rem', md: '1rem' }, maxWidth: 800, mx: 'auto', px: 2 }}>
            NAPCEN specializes in manufacturing advanced air pollution control equipment, offering innovative solutions to industries worldwide. We prioritize clean air for human health and the environment.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 4 }}>
            <SocialIconLink href="https://www.youtube.com/@napcenair6285"><YouTubeIcon /></SocialIconLink>
            <SocialIconLink href="https://in.linkedin.com/company/napcen"><LinkedInIcon /></SocialIconLink>
            <SocialIconLink href="https://www.facebook.com/napcenindia"><FacebookIcon /></SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/napcenpondy"><InstagramIcon /></SocialIconLink>
          </Box>
        </Box>

        {/* BOTTOM SECTION — THREE COLUMNS PERFECTLY ALIGNED LEFT / CENTER / RIGHT */}
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">

          {/* Products — Left */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography sx={{ color: ACCENT_COLOR, fontWeight: 700, mb: 2.5, fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: `2px solid ${BORDER_COLOR}`, pb: 1, display: 'inline-block' }}>
                Products
              </Typography>
              <List disablePadding>
                {[
                  { name: 'All Products', path: '/products' },
                  { name: 'Wet Scrubber', path: '/wet-scrubbers' },
                  { name: 'Dry Scrubber', path: '/dry-scrubber' },
                  { name: 'Downdraft Table', path: '/down-draft' },
                  { name: 'Fume Extractor', path: '/fume-extractor' },
                  { name: 'Dust Collector', path: '/dust-collector' },
                ].map((item) => (
                  <ListItem key={item.name} disableGutters sx={{ py: 0.5 }}>
                    <FooterLink to={item.path}>{item.name}</FooterLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Quick Links — TRUE CENTER */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: ACCENT_COLOR, fontWeight: 700, mb: 2.5, fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: `2px solid ${BORDER_COLOR}`, pb: 1, display: 'inline-block' }}>
                Quick Links
              </Typography>
              <List disablePadding>
                {['Home', 'About Us', 'Our Services', 'Blog & News', 'Contact Us'].map((t) => (
                  <ListItem key={t} disableGutters sx={{ py: 0.5, justifyContent: 'center' }}>
                    <FooterLink to={t === 'Home' ? '/' : `/${t.toLowerCase().replace(/\s+/g, '-')}`}>{t}</FooterLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Contact — Right */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography sx={{ color: ACCENT_COLOR, fontWeight: 700, mb: 3, fontSize: '1.1rem', textTransform: 'uppercase', borderBottom: `2px solid ${BORDER_COLOR}`, pb: 1, display: 'inline-block' }}>
                Get In Touch
              </Typography>
              <Box sx={{ maxWidth: 300, mx: { xs: 'auto', md: 0 } }}>
                <ContactDetail Icon={LocationOnIcon} label="Location" value="Villianur, Puducherry-605110" href="https://maps.google.com/?q=Villianur+Puducherry" />
                <ContactDetail Icon={PhoneIcon} label="Call Us" value="+91 7904469219" href="tel:+917904469219" />
                <ContactDetail Icon={EmailIcon} label="Email Us" value="sales@napcen.com" href="mailto:sales@napcen.com" />
              </Box>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ my: 6, bgcolor: BORDER_COLOR }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: TEXT_SECONDARY, fontSize: { xs: '0.84rem', md: '0.9rem' } }}>
            © {new Date().getFullYear()} NAPCEN. All Rights Reserved. 
            <Box component="span" sx={{ mx: 2, color: '#666' }}>|</Box>
            <FooterLink to="/terms-of-use" sx={{ fontSize: 'inherit', display: 'inline' }}>Terms of Use</FooterLink>
            <Box component="span" sx={{ mx: 1, color: '#666' }}>|</Box>
            <FooterLink to="/privacy-policy" sx={{ fontSize: 'inherit', display: 'inline' }}>Privacy Policy</FooterLink>
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;