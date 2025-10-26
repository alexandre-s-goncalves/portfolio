import React from 'react';
import {createRoot} from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import {WebRoutes} from './src/routes/webRoutes';
import {ThemeProvider} from './src/context';
import {i18n} from './src/utils/i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <WebRoutes />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
