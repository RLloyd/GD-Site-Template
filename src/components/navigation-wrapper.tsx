// src/components/navigation-wrapper.tsx
import { useTheme } from '@/hooks/use-theme';
import { Navbar } from './navbar';
import { Nav } from './nav';

export const NavigationWrapper = () => {
  const { navType, isDarkTheme, toggleTheme } = useTheme();

  return navType === 'default' ? (
    <Nav />
  ) : (
    <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
  );
};