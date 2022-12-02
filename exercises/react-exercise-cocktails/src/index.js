import React from 'react';
import { AppProvider } from './context';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
