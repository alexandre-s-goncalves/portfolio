import {useEffect, useState, useMemo, ReactNode} from 'react';
import type {Theme} from './ThemeContext.types';
import {ThemeContext} from './ThemeContext.core';

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

    const hasMatchMedia =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    if (
      hasMatchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(
    () => ({theme, themeDark: theme === 'dark', toggleTheme}),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
