// src/components/nav-switcher/NavSwitcher.tsx
import { useTheme } from '@/hooks/use-theme';
import { SwitcherContainer, SwitcherButton } from './NavSwitcher.styles';

export const NavSwitcher = () => {
  const { navType, setNavType, isDarkTheme, toggleTheme } = useTheme();

  return (
    <SwitcherContainer>
      <SwitcherButton onClick={() => setNavType(navType === 'default' ? 'centered' : 'default')}>
        Toggle Nav: {navType === 'default' ? 'Default' : 'Centered'}
      </SwitcherButton>
      <SwitcherButton onClick={toggleTheme}>
        Toggle Theme: {isDarkTheme ? 'Dark' : 'Light'}
      </SwitcherButton>
    </SwitcherContainer>
  );
};