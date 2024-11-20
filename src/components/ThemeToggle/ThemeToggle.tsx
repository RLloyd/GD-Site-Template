// Add theme toggle button component
 // src/components/ThemeToggle/ThemeToggle.tsx
//  import { useTheme } from '@/context/ThemeContext';
import { useTheme } from '@/hooks/use-theme';
 import styled from 'styled-components';

 const ToggleContainer = styled.div`
   position: fixed;
   bottom: 20px;
   right: 20px;
   z-index: 1000;
   display: flex;
   gap: 10px;
 `;

 const Button = styled.button`
   padding: 8px 16px;
   border-radius: 4px;
   background: ${({ theme }) => theme.colors.primary};
   color: ${({ theme }) => theme.colors.background};
   border: none;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
     opacity: 0.8;
   }
 `;

 export const ThemeToggle = () => {
   const { toggleTheme, setNavType, navType } = useTheme();

   return (
     <ToggleContainer>
       <Button onClick={toggleTheme}>Toggle Theme</Button>
       <Button onClick={() => setNavType(navType === 'default' ? 'centered' : 'default')}>
         Toggle Nav
       </Button>
     </ToggleContainer>
   );
 };