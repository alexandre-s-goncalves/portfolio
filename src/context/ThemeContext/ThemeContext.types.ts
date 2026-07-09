import {ReactNode} from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  themeDark: boolean;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
