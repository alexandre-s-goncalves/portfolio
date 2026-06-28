import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from 'context/ThemeContext';
import {WebRoutes} from './routes';
import './i18n/i18n';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <WebRoutes />
    </ThemeProvider>
  </StrictMode>,
);
