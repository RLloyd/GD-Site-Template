// src/components/nav-switcher/NavSwitcher.styles.ts
import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SwitcherButton = styled.button`
  background-color: ${({ theme }) => theme.colors.nav.background};
  color: ${({ theme }) => theme.colors.nav.text};
  border: 1px solid ${({ theme }) => theme.colors.nav.text};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.nav.hover};
  }
`;