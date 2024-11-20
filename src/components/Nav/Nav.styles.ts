// src/components/nav/Nav.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav.background};
  position: fixed;
  width: 100%;
  top: 0;
  height: ${({ theme }) => theme.sizes.navHeight};
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavContent = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
  transition: opacity ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 0.8;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

// export const StyledNavLink = styled(Link)`
//   color: ${({ theme }) => theme.colors.nav.text};
//   text-decoration: none;
//   padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
//   border-radius: 4px;
//   transition: all ${({ theme }) => theme.transitions.default};

//   &:hover, &.active {
//     background-color: ${({ theme }) => theme.colors.nav.hover};
//   }
// `;
export const StyledNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.nav.text};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover, &.active {
    background-color: ${({ theme }) => theme.colors.nav.hover};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.nav.text};
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

interface MobileMenuProps {
  $isOpen: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: ${({ theme }) => theme.sizes.navHeight};
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.nav.background};
  padding: ${({ theme }) => theme.spacing.md};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform ${({ theme }) => theme.transitions.default};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;