import React from 'react';
import {createRoot} from 'react-dom/client';
import {WebRoutes} from './src/routes/webRoutes';
import {ThemeProvider} from './src/context';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <WebRoutes />
    </ThemeProvider>
  </React.StrictMode>,
);
