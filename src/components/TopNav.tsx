import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'styled-components';

// Theme interface
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      error: string;
    };
    typography: {
      fontSize: {
        small: string;
        medium: string;
        large: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    shadows: {
      small: string;
      medium: string;
    };
    transitions: {
      default: string;
    };
    sizes: {
      navHeight: string;
      maxWidth: string;
      logoSize: string;
    };
  }
}

// Component Props Interface
interface TopNavProps {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

// Types for data
interface NavLink {
  id: number;
  text: string;
  url: string;
}

interface NavData {
  leftLinks: NavLink[];
  rightLinks: NavLink[];
  logoUrl: string;
}

// Styled Components
const NavContainer = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.sizes.navHeight};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: ${({ theme }) => theme.transitions.default};
`;

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: ${({ theme }) => theme.sizes.logoSize};
  width: auto;
`;

const ThemeContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing.large};
`;

const ThemeButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 4px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

// Mock API call
const fetchNavData = async (): Promise<NavData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    leftLinks: [
      { id: 1, text: 'MashMedia Studio', url: '/mashmedia' },
      { id: 2, text: 'DigitalOne', url: '/digitalone' },
      { id: 3, text: 'Zenmonices', url: '/zenmonices' },
    ],
    rightLinks: [
      { id: 4, text: 'Blog', url: '/blog' },
      { id: 5, text: 'Styleguide', url: '/styleguide' },
      { id: 6, text: 'Profile', url: '/profile' },
    ],
    logoUrl: 'src/assets/GD-Fusion-logo.png',
  };
};

const TopNav: React.FC<TopNavProps> = ({ isDarkTheme, onThemeToggle }) => {
  const [navData, setNavData] = useState<NavData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNavData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchNavData();
        setNavData(data);
      } catch (err) {
        setError('Failed to load navigation data. Please try again later.');
        console.error('Error loading nav data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadNavData();
  }, []);

  if (isLoading) {
    return (
      <NavContainer>
        <ContentWrapper>
          <LoadingSpinner />
        </ContentWrapper>
      </NavContainer>
    );
  }

  if (error) {
    return (
      <NavContainer>
        <ContentWrapper>
          <ErrorMessage>{error}</ErrorMessage>
        </ContentWrapper>
      </NavContainer>
    );
  }

  return (
    <NavContainer>
      <ContentWrapper>
        <MainContainer>
          <LinkContainer>
            {navData?.leftLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.url}
                role="menuitem"
              >
                {link.text}
              </NavLink>
            ))}
          </LinkContainer>

          <Logo
            src={navData?.logoUrl}
            alt="Company Logo"
            role="img"
          />

          <LinkContainer>
            {navData?.rightLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.url}
                role="menuitem"
              >
                {link.text}
              </NavLink>
            ))}
          </LinkContainer>
        </MainContainer>

        <ThemeContainer>
          <ThemeButton
            onClick={onThemeToggle}
            aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
          >
            {isDarkTheme ? '🌞' : '🌙'}
          </ThemeButton>
        </ThemeContainer>
      </ContentWrapper>
    </NavContainer>
  );
};

export default TopNav;