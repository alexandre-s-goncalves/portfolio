import {useState, useEffect} from 'react';
import {ThemeContext, ThemeProviderProps} from './ThemeContext.types';

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [themeDark, setThemeDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (themeDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [themeDark]);

  const toggleTheme = () => {
    setThemeDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{themeDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
