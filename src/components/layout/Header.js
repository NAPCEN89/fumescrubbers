import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Link,
  useTheme, useMediaQuery, Drawer, List, ListItem,
  ListItemButton, ListItemText, Collapse, Menu, MenuItem
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../../assets/images/Napcen-logo.png';
import { industriesData } from '../../data/IndustryData';

// Styled Components
const CustomAppBar = styled(AppBar)({
  background: 'linear-gradient(to right, #424242, #030303)',
  boxShadow: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
});

const NavMenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to right, #424242, #030303)',
  borderRadius: '50px',
  gap: '20px',
  padding: '0 20px',
  height: '50px',
  [theme.breakpoints.down('lg')]: { gap: '12px', padding: '0 10px' },
  [theme.breakpoints.down('md')]: { display: 'none' },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  textTransform: 'none',
  fontWeight: 400,
  fontSize: '16px',
  padding: '8px 16px',
  '&:hover': { color: '#ff5722', backgroundColor: 'transparent' },
  [theme.breakpoints.down('lg')]: { fontSize: '14px', padding: '6px 12px' },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50px',
  padding: '8px 16px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '14px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  [theme.breakpoints.down('sm')]: { fontSize: '12px', padding: '6px 12px' },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '280px',
    background: 'linear-gradient(to right, #424242, #030303)',
    color: '#fff',
    padding: '20px 0',
    [theme.breakpoints.down('sm')]: { width: '240px' },
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTiny = useMediaQuery('(max-width: 400px)');

  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesAnchor, setIndustriesAnchor] = useState(null);
  const [productsAnchor, setProductsAnchor] = useState(null);

  const navigate = useNavigate();

  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => {
    setMobileOpen(false);
    setIndustriesOpen(false);
    setProductsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const menuItems = [
    { label: 'Home', link: '/' },
    {
      label: 'Products',
      dropdown: true,
      items: [
        { name: 'All Products', path: '/products' },
        { name: 'Wet Scrubber', path: '/wet-scrubbers' },
        { name: 'Dry Scrubber', path: '/dry-scrubber' },
        { name: 'Downdraft Table', path: '/down-draft' },
        { name: 'Fume Extractor', path: '/fume-extractor' },
        { name: 'Dust Collector', path: '/dust-collector' },
      ],
    },
    { label: 'Services', link: '/service' },
    { label: 'Industries', dropdown: true, items: industriesData },
    { label: 'Accessories', link: '/accessories' },
    { label: 'Blog', link: '/blogs' },
  ];

  const Logo = () => (
    <Box
      component="img"
      src={logo}
      alt="Napcen Logo"
      loading="lazy"
      sx={{
        height: { xs: 38, sm: 44, md: 52, lg: 56 },
        width: 'auto',
        objectFit: 'contain',
        filter: 'brightness(1.8) saturate(1.3)',
      }}
    />
  );

  return (
    <CustomAppBar>
      <Toolbar sx={{ minHeight: { xs: 64, md: 80 }, px: { xs: 2, md: 4, lg: 6 }, justifyContent: 'space-between' }}>
        <Link component={RouterLink} to="/">
          <Logo />
        </Link>

        {!isMobile && (
          <NavMenuContainer>
            {menuItems.map((item) => (
              item.dropdown ? (
                <React.Fragment key={item.label}>
                  <NavButton
                    endIcon={<ExpandMoreIcon />}
                    onClick={(e) => item.label === 'Industries'
                      ? (setIndustriesAnchor(e.currentTarget), setProductsAnchor(null))
                      : (setProductsAnchor(e.currentTarget), setIndustriesAnchor(null))
                    }
                  >
                    {item.label}
                  </NavButton>

                  <Menu
                    anchorEl={item.label === 'Industries' ? industriesAnchor : productsAnchor}
                    open={Boolean(item.label === 'Industries' ? industriesAnchor : productsAnchor)}
                    onClose={() => setIndustriesAnchor(null) || setProductsAnchor(null)}
                    PaperProps={{ sx: {
                      bgcolor: 'rgba(21, 29, 29, 0.95)',
                      border: '1px solid rgba(255, 87, 34, 0.3)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                      mt: 1.5,
                      width: 220,
                    }}}
                  >
                    {item.items.map((sub) => (
                      <MenuItem
                        key={sub.path}
                        onClick={() => {
                          navigate(sub.path);
                          setIndustriesAnchor(null);
                          setProductsAnchor(null);
                        }}
                        sx={{ color: '#fff', fontSize: 14, '&:hover': { bgcolor: 'rgba(255, 87, 34, 0.15)', color: '#ff5722' } }}
                      >
                        {sub.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <NavButton key={item.label} component={RouterLink} to={item.link}>
                  {item.label}
                </NavButton>
              )
            ))}
          </NavMenuContainer>
        )}

        {!isMobile && (
          <ContactButton onClick={() => navigate('/contact')}>
            <FaUserAlt style={{ fontSize: 12 }} /> Contact Us
          </ContactButton>
        )}

        {isMobile && (
          <IconButton onClick={toggleMobile} sx={{ color: '#fff' }}>
            <MenuIcon sx={{ fontSize: isTiny ? 28 : 32 }} />
          </IconButton>
        )}

        <MobileDrawer anchor="right" open={mobileOpen} onClose={closeMobile}>
          <IconButton onClick={closeMobile} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff' }}>
            <CloseIcon />
          </IconButton>

          <List sx={{ pt: 8 }}>
            {menuItems.map((item) => (
              item.dropdown ? (
                <React.Fragment key={item.label}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={item.label === 'Industries' ? () => setIndustriesOpen(!industriesOpen) : () => setProductsOpen(!productsOpen)}>
                      <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                      {(item.label === 'Industries' ? industriesOpen : productsOpen) ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                    </ListItemButton>
                  </ListItem>

                  <Collapse in={item.label === 'Industries' ? industriesOpen : productsOpen}>
                    <List disablePadding sx={{ bgcolor: 'rgba(21, 29, 29, 0.9)', mx: 2, my: 1, borderRadius: 1, border: '1px solid rgba(255, 87, 34, 0.3)' }}>
                      {item.items.map((sub) => (
                        <ListItem key={sub.path} disablePadding>
                          <ListItemButton component={RouterLink} to={sub.path} onClick={closeMobile} sx={{ justifyContent: 'center' }}>
                            <ListItemText primary={sub.name} sx={{ textAlign: 'center', fontSize: 14 }} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton component={RouterLink} to={item.link} onClick={closeMobile} sx={{ justifyContent: 'center' }}>
                    <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                  </ListItemButton>
                </ListItem>
              )
            ))}

            <ListItem sx={{ justifyContent: 'center', mt: 3 }}>
              <ContactButton onClick={() => { navigate('/contact'); closeMobile(); }}>
                <FaUserAlt style={{ fontSize: 12 }} /> Contact Us
              </ContactButton>
            </ListItem>
          </List>
        </MobileDrawer>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;