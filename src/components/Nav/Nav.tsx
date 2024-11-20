// src/components/nav/Nav.tsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  StyledNavLink,
  MobileMenuButton,
  MobileMenu
} from './Nav.styles';
export const Nav = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const location = useLocation();

   const navigationItems = [
     { path: '/', label: 'Home' },
     { path: '/services', label: 'Services' },
     { path: '/about', label: 'About' },
     { path: '/location', label: 'Location' }
   ];

   return (
     <NavContainer role="navigation">
       <NavContent>
         <StyledNavLink to="/" aria-label="Home">
           <Logo src="/logo.svg" alt="Site Logo" />
         </StyledNavLink>

         <NavLinks>
           {navigationItems.map((item) => (
             <li key={item.path}>
               <StyledNavLink
                 to={item.path}
                 className={location.pathname === item.path ? 'active' : ''}
               >
                 {item.label}
               </StyledNavLink>
             </li>
           ))}
         </NavLinks>

         <MobileMenuButton
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           aria-expanded={isMobileMenuOpen}
           aria-label="Toggle navigation menu"
         >
           {isMobileMenuOpen ? <FiX /> : <FiMenu />}
         </MobileMenuButton>
       </NavContent>

       <MobileMenu $isOpen={isMobileMenuOpen}>
         {navigationItems.map((item) => (
           <StyledNavLink
             key={item.path}
             to={item.path}
             onClick={() => setIsMobileMenuOpen(false)}
             className={location.pathname === item.path ? 'active' : ''}
           >
             {item.label}
           </StyledNavLink>
         ))}
       </MobileMenu>
     </NavContainer>
   );
 };