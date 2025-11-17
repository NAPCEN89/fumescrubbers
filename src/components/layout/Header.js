// src/components/layout/Header.jsx
import React, { useState, useEffect, useCallback, memo } from 'react';
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
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../../assets/images/Napcen-logo.png';
import { industriesData } from '../../data/IndustryData';

// Green Theme Color
const GREEN = '#4caf50';

// Styled Components
const CustomAppBar = styled(AppBar)({
  background: 'linear-gradient(to right, #424242, #030303)',
  boxShadow: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1300,
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
  [theme.breakpoints.down('lg')]: { gap: '12px', padding: '0 12px' },
  [theme.breakpoints.down('md')]: { display: 'none' },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '15px',
  padding: '8px 16px',
  borderRadius: '8px',
  '&:hover': {
    color: GREEN,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  [theme.breakpoints.down('lg')]: { fontSize: '14px', padding: '6px 12px' },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  borderRadius: '50px',
  padding: '9px 18px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `rgba(76, 175, 80, 0.2)`,
    borderColor: GREEN,
    color: GREEN,
    transform: 'translateY(-1px)',
  },
  [theme.breakpoints.down('sm')]: { fontSize: '13px', padding: '7px 14px' },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '300px',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
    color: '#fff',
    padding: '16px 0',
    boxShadow: '0 0 30px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('sm')]: { width: '260px' },
  },
}));

// Memoized Logo
const Logo = memo(() => (
  <Box
    component="img"
    src={logo}
    alt="Napcen Logo"
    loading="lazy"
    sx={{
      height: { xs: 36, sm: 42, md: 48, lg: 54 },
      width: 'auto',
      objectFit: 'contain',
      filter: 'brightness(1.8) saturate(1.3)',
      cursor: 'pointer',
    }}
  />
));

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

  // Toggle mobile drawer
  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);

  // Close drawer and reset
  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setIndustriesOpen(false);
    setProductsOpen(false);
  }, []);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // Menu Data
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

  // Desktop Dropdown Handler
  const openDropdown = useCallback((e, type) => {
    if (type === 'industries') {
      setIndustriesAnchor(e.currentTarget);
      setProductsAnchor(null);
    } else {
      setProductsAnchor(e.currentTarget);
      setIndustriesAnchor(null);
    }
  }, []);

  const closeDropdowns = useCallback(() => {
    setIndustriesAnchor(null);
    setProductsAnchor(null);
  }, []);

  return (
    <CustomAppBar>
      <Toolbar
        sx={{
          minHeight: { xs: 64, md: 80 },
          px: { xs: 2, md: 4, lg: 6 },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Link component={RouterLink} to="/" sx={{ display: 'flex' }}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <NavMenuContainer>
            {menuItems.map((item) =>
              item.dropdown ? (
                <Box key={item.label}>
                  <NavButton
                    endIcon={<ExpandMoreIcon sx={{ fontSize: 18 }} />}
                    onClick={(e) =>
                      openDropdown(e, item.label.toLowerCase())
                    }
                    aria-haspopup="true"
                  >
                    {item.label}
                  </NavButton>

                  <Menu
                    anchorEl={
                      item.label === 'Industries'
                        ? industriesAnchor
                        : productsAnchor
                    }
                    open={Boolean(
                      item.label === 'Industries'
                        ? industriesAnchor
                        : productsAnchor
                    )}
                    onClose={closeDropdowns}
                    PaperProps={{
                      sx: {
                        bgcolor: 'rgba(15, 15, 15, 0.98)',
                        border: `1px solid ${GREEN}40`,
                        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                        mt: 1.5,
                        minWidth: 220,
                        borderRadius: 2,
                      },
                    }}
                    MenuListProps={{ sx: { py: 1 } }}
                  >
                    {item.items.map((sub) => (
                      <MenuItem
                        key={sub.path}
                        onClick={() => {
                          navigate(sub.path);
                          closeDropdowns();
                        }}
                        sx={{
                          color: '#e0e0e0',
                          fontSize: 14,
                          py: 1.2,
                          '&:hover': {
                            bgcolor: `${GREEN}20`,
                            color: GREEN,
                          },
                        }}
                      >
                        {sub.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <NavButton
                  key={item.label}
                  component={RouterLink}
                  to={item.link}
                >
                  {item.label}
                </NavButton>
              )
            )}
          </NavMenuContainer>
        )}

        {/* Desktop Contact */}
        {!isMobile && (
          <ContactButton onClick={() => navigate('/contact')}>
            <FaUserAlt /> Contact Us
          </ContactButton>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <IconButton onClick={toggleMobile} sx={{ color: '#fff', p: 1 }}>
            {mobileOpen ? (
              <CloseIcon sx={{ fontSize: isTiny ? 26 : 30 }} />
            ) : (
              <MenuIcon sx={{ fontSize: isTiny ? 28 : 32 }} />
            )}
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <MobileDrawer anchor="right" open={mobileOpen} onClose={closeMobile}>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Link component={RouterLink} to="/" onClick={closeMobile}>
              <Logo />
            </Link>
          </Box>

          <List sx={{ pt: 2 }}>
            {menuItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.dropdown ? (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          item.label === 'Industries'
                            ? setIndustriesOpen(!industriesOpen)
                            : setProductsOpen(!productsOpen)
                        }
                        sx={{
                          justifyContent: 'space-between',
                          py: 1.5,
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontWeight: 600,
                            fontSize: '15px',
                          }}
                        />
                        {(item.label === 'Industries'
                          ? industriesOpen
                          : productsOpen) ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ChevronRightIcon />
                        )}
                      </ListItemButton>
                    </ListItem>

                    <Collapse
                      in={
                        item.label === 'Industries'
                          ? industriesOpen
                          : productsOpen
                      }
                      timeout="auto"
                      unmountOnExit
                    >
                      <List disablePadding sx={{ pl: 2, bgcolor: 'rgba(0,0,0,0.3)' }}>
                        {item.items.map((sub) => (
                          <ListItem key={sub.path} disablePadding>
                            <ListItemButton
                              component={RouterLink}
                              to={sub.path}
                              onClick={closeMobile}
                              sx={{ py: 1.2 }}
                            >
                              <ListItemText
                                primary={sub.name}
                                primaryTypographyProps={{
                                  fontSize: '14px',
                                  color: '#ddd',
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton
                      component={RouterLink}
                      to={item.link}
                      onClick={closeMobile}
                      sx={{
                        justifyContent: 'center',
                        py: 1.8,
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 500,
                          fontSize: '15px',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                )}
              </React.Fragment>
            ))}

            {/* Mobile Contact Button */}
            <ListItem sx={{ justifyContent: 'center', mt: 3, mb: 2 }}>
              <ContactButton
                onClick={() => {
                  navigate('/contact');
                  closeMobile();
                }}
                fullWidth
                sx={{ maxWidth: 200 }}
              >
                <FaUserAlt /> Contact Us
              </ContactButton>
            </ListItem>
          </List>
        </MobileDrawer>
      </Toolbar>
    </CustomAppBar>
  );
};

export default memo(Header);