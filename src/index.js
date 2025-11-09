import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'; // Import your custom theme
import { HelmetProvider } from 'react-helmet-async';

// Check if you have a service worker file and unregister it to prevent caching issues
// If you don't have this file, you can remove this line and the unregister call below
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// Call unregister() instead of register() to stop aggressive caching
serviceWorkerRegistration.unregister();