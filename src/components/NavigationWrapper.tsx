// src/components/NavigationWrapper.tsx
import { useTheme } from '@/hooks/use-theme';
//  import { useTheme } from '@/context/ThemeContext';
 import Navbar from '@/components/navbar/Navbar';
import { Nav } from '@/components/nav/Nav';

 export const NavigationWrapper = () => {
   const { navType, isDarkTheme, toggleTheme } = useTheme();

   return navType === 'default' ? (
     <Nav />
   ) : (
     <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
   );
 };