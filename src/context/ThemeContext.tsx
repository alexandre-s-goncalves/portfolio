import React, {createContext, ReactNode, useContext, useState} from 'react';

type ThemeContextType = {
  themeDark: boolean;
  handleToggle: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [dark, setDark] = useState(false);

  const handleToggle = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{themeDark: dark, handleToggle}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
