import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'; // Import your custom theme
import { HelmetProvider } from 'react-helmet-async';

// REMOVED: import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 
// REMOVED: serviceWorkerRegistration.unregister(); 

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