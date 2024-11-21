// src/theme/ThemeProvider.tsx
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from '../context/theme-context';
import { lightTheme, darkTheme } from '../context/theme.constants';
import { GlobalStyles } from '../styles/GlobalStyles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const value = {
    isDarkTheme,
    toggleTheme: () => setIsDarkTheme(prev => !prev)
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

