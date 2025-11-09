import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { Fab, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // instant jump
  }, [pathname]);

  return null;
};

export default ScrollToTop;