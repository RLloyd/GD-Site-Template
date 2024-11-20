// src/context/theme-provider.tsx
import { useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme-constants';
import { ThemeContext } from './theme-context';
import { NavigationType } from '@/types/navigation';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const saved = localStorage.getItem('isDarkTheme');
    return saved ? JSON.parse(saved) : false;
  });

  const [navType, setNavType] = useState<NavigationType>(() => {
    const saved = localStorage.getItem('navType');
    return (saved as NavigationType) || 'default';
  });

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  useEffect(() => {
    localStorage.setItem('navType', navType);
  }, [navType]);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, navType, setNavType }}>
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};