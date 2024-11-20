// src/hooks/useTheme.ts
import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';
// import { ThemeContext } from '@/context/ThemeContext';
// import { ThemeContext } from '@/context/themeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};