// src/components/layout/Layout.tsx
import { useTheme } from '@/hooks/use-theme';
import { Navbar } from '@/components/navbar';
import { LayoutContainer, MainContent } from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
   const { isDarkTheme, toggleTheme } = useTheme();

   return (
     <LayoutContainer>
       <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
       <MainContent>{children}</MainContent>
     </LayoutContainer>
   );
 };
