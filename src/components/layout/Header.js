import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Link,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/images/Napcen-logo.png';
import { industriesData } from '../../data/IndustryData';

// Custom styled components
const CustomAppBar = styled(AppBar)({
  background: 'linear-gradient(to right, #424242, #030303ff)',
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
  background: 'linear-gradient(to right, #424242, #030303ff)',
  borderRadius: '50px',
  gap: '20px',
  padding: '0 20px',
  height: '50px',
  [theme.breakpoints.down('lg')]: {
    gap: '12px',
    padding: '0 10px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  textTransform: 'none',
  fontWeight: 400,
  fontSize: '16px',
  padding: '8px 16px',
  minWidth: 'auto',
  textAlign: 'center',
  '&:hover': {
    color: '#ff5722',
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    padding: '6px 12px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
    padding: '4px 8px',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50px',
  padding: '6px 8px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '14px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '6px 12px',
    fontSize: '12px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '6px 12px',
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    padding: '4px 8px',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    background: 'linear-gradient(to right, #424242, #030303ff)',
    color: '#fff',
    padding: '20px 0',
    [theme.breakpoints.down(400)]: {
      width: '200px',
    },
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTinyScreen = useMediaQuery('(max-width: 400px)');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [industriesAnchorEl, setIndustriesAnchorEl] = useState(null);
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setIndustriesDropdownOpen(false);
    setProductsDropdownOpen(false);
  };

  const handleDesktopIndustriesClick = (event) => {
    setIndustriesAnchorEl(event.currentTarget);
    setProductsAnchorEl(null);
  };

  const handleDesktopIndustriesClose = () => {
    setIndustriesAnchorEl(null);
  };

  const handleDesktopProductsClick = (event) => {
    setProductsAnchorEl(event.currentTarget);
    setIndustriesAnchorEl(null);
  };

  const handleDesktopProductsClose = () => {
    setProductsAnchorEl(null);
  };

  const handleMobileIndustriesClick = () => {
    setIndustriesDropdownOpen(!industriesDropdownOpen);
    setProductsDropdownOpen(false);
  };

  const handleMobileProductsClick = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
    setIndustriesDropdownOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: 'Home', link: '/' },
    {
      label: 'Products',
      dropdown: true,
      subItems: [
        {name : 'All Products', path:'/products'},
        { name: 'Wet Scrubber', path: '/wet-scrubbers' },
        { name: 'Dry Scrubber', path: '/dry-scrubber' },
        { name: 'Downdraft Table', path: '/down-draft' },
        { name: 'Fume Extractor', path: '/fume-extractor' },
        { name: 'Dust Collector', path: '/dust-collector' },
      ],
    },
    { label: 'Services', link: '/service' },
    { label: 'Industries', dropdown: true, subItems: industriesData },
    { label: 'Accessories', link: '/accessories' },
    { label: 'Blog', link: '/blogs' },
  ];

  return (
    <CustomAppBar elevation={0}>
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: '60px', md: '80px' },
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflowX: 'hidden',
        }}
      >
        <Link component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="Napcen Logo"
            sx={{
              width: { xs: 100, sm: 106, md: 102.8, lg: 102.8 },
              height: { xs: 29.28, sm: 37.92, md: 57.12, lg: 57.12 }, // Increased by 20% from { xs: 24.4, sm: 31.6, md: 47.6, lg: 47.6 }
              transform: 'translateY(-8px)',
              display: 'block',
              filter: 'brightness(200%) saturate(150%) hue-rotate(0deg)',
            }}
          />
        </Link>

        {!isMobile ? (
          <NavMenuContainer>
            {menuItems.map((item) => (
              item.dropdown ? (
                <React.Fragment key={item.label}>
                  <NavButton
                    id={`${item.label.toLowerCase()}-button`}
                    aria-controls={item.label === 'Industries' ? (industriesAnchorEl ? 'industries-menu' : undefined) : (productsAnchorEl ? 'products-menu' : undefined)}
                    aria-haspopup="true"
                    aria-expanded={item.label === 'Industries' ? (industriesAnchorEl ? 'true' : undefined) : (productsAnchorEl ? 'true' : undefined)}
                    onClick={item.label === 'Industries' ? handleDesktopIndustriesClick : handleDesktopProductsClick}
                    endIcon={<ExpandMoreIcon />}
                  >
                    {item.label}
                  </NavButton>
                  <Menu
                    id={`${item.label.toLowerCase()}-menu`}
                    anchorEl={item.label === 'Industries' ? industriesAnchorEl : productsAnchorEl}
                    open={item.label === 'Industries' ? Boolean(industriesAnchorEl) : Boolean(productsAnchorEl)}
                    onClose={item.label === 'Industries' ? handleDesktopIndustriesClose : handleDesktopProductsClose}
                    MenuListProps={{
                      'aria-labelledby': `${item.label.toLowerCase()}-button`,
                    }}
                    PaperProps={{
                      sx: {
                        background: item.label === 'Industries' ? 'rgba(21, 29, 29, 0.9)' : 'rgba(21, 29, 29, 0.95)',
                        border: item.label === 'Industries' ? '1px solid rgba(0, 191, 255, 0.2)' : '1px solid rgba(255, 87, 34, 0.3)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                        padding: '5px 0',
                        width: '200px',
                        transform: 'translateY(10px)',
                        marginTop: '8px',
                      },
                    }}
                  >
                    {item.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem.path}
                        onClick={() => {
                          item.label === 'Industries' ? handleDesktopIndustriesClose() : handleDesktopProductsClose();
                          navigate(subItem.path);
                        }}
                        sx={{
                          color: '#fff',
                          fontSize: '14px',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 87, 34, 0.1)',
                            color: '#ff5722',
                          },
                        }}
                      >
                        {subItem.name}
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
        ) : (
          <IconButton onClick={toggleMobileMenu} sx={{ color: '#fff' }} aria-label="open menu">
            <MenuIcon sx={{ fontSize: isTinyScreen ? '20px' : '24px' }} />
          </IconButton>
        )}

        {!isMobile && (
          <Box>
            <ContactButton variant="contained" onClick={() => navigate('/contact')}>
              <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaUserAlt style={{ color: '#fff', fontSize: '12px' }} />
                Contact Us
              </Box>
            </ContactButton>
          </Box>
        )}

        <MobileDrawer anchor="right" open={mobileMenuOpen} onClose={closeMobileMenu} aria-label="mobile navigation menu">
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              closeMobileMenu();
            }}
            sx={{
              color: '#fff',
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 1300,
            }}
            aria-label="close menu"
          >
            <CloseIcon sx={{ fontSize: isTinyScreen ? '20px' : '24px' }} />
          </IconButton>
          <List sx={{ pt: 6 }}>
            {menuItems.map((item) => (
              item.dropdown ? (
                <React.Fragment key={item.label}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={item.label === 'Industries' ? handleMobileIndustriesClick : handleMobileProductsClick}
                      sx={{ justifyContent: 'center' }}
                    >
                      <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                      {item.label === 'Industries' ? (
                        industriesDropdownOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />
                      ) : (
                        productsDropdownOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />
                      )}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={item.label === 'Industries' ? industriesDropdownOpen : productsDropdownOpen} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      sx={{
                        background: item.label === 'Industries' ? 'rgba(21, 29, 29, 0.9)' : 'rgba(21, 29, 29, 0.95)',
                        border: item.label === 'Industries' ? '1px solid rgba(0, 191, 255, 0.2)' : '1px solid rgba(255, 87, 34, 0.3)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                        margin: '5px 10px',
                        borderRadius: '4px',
                        padding: '5px 0',
                      }}
                    >
                      {item.subItems.map((subItem) => (
                        <ListItem key={subItem.path} disablePadding>
                          <ListItemButton
                            component={RouterLink}
                            to={subItem.path}
                            onClick={closeMobileMenu}
                            sx={{
                              justifyContent: 'center',
                              color: '#fff',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 87, 34, 0.1)',
                                color: '#ff5722',
                              },
                            }}
                          >
                            <ListItemText primary={subItem.name} sx={{ textAlign: 'center', fontSize: '14px' }} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton component={RouterLink} to={item.link} onClick={closeMobileMenu} sx={{ justifyContent: 'center' }}>
                    <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                  </ListItemButton>
                </ListItem>
              )
            ))}
            <ListItem sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <ContactButton variant="contained" onClick={() => { navigate("/contact"); closeMobileMenu(); }}>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FaUserAlt style={{ color: '#fff', fontSize: '12px' }} />
                  Contact Us
                </Box>
              </ContactButton>
            </ListItem>
          </List>
        </MobileDrawer>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;