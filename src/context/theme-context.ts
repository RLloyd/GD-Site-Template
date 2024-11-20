// src/context/theme-context.ts
import { createContext } from 'react';
import { NavigationType } from '@/types/navigation';

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  navType: NavigationType;
  setNavType: (type: NavigationType) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);