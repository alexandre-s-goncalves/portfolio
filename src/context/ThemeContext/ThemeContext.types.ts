import {createContext, ReactNode} from 'react';

export interface ThemeContextType {
  themeDark: boolean;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
