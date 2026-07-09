import {use} from 'react';
import {ThemeContextType} from './ThemeContext.types';
import {ThemeContext} from './ThemeContext.core';

export const useTheme = (): ThemeContextType => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
