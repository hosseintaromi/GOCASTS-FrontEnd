import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

// Create a root element for the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app within the ThemeProvider
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
