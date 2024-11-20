// src/components/navbar/Navbar.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    display: flex;
    background-color: ${({ theme }) => theme.colors.nav.background};
    position: fixed;
    width: 100%;
    top: 0;
    height: ${({ theme }) => theme.sizes.navHeight};
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavigationGroup = styled.div`
    max-width: ${({ theme }) => theme.sizes.maxWidth};
      margin: 0 auto;
    // margin: 0 10% 0 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Logo = styled.div`
  margin: 0 ${({ theme }) => theme.spacing.xl};

  img {
    height: 80px;
    // width: auto;
    top: 20px;
    position: relative;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }
`;

export const MenuItems = styled.ul`
    display: flex;
    //   gap: ${({ theme }) => theme.spacing.lg};
    list-style: none;
    margin: 0;
    padding: 0;

    &.left-menu {
        flex: 1;
        justify-content: flex-end;
    }

    &.right-menu {
        flex: 1;
        justify-content: flex-start;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    width: max-content;
    border-bottom: 4px solid red;
    height: 42px;
    top: 11px;
    position: relative;
    padding: 0 1rem;
    // border: 1px solid red;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.nav.text};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.nav.hover};
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.nav.text};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.nav.text};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};

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

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;