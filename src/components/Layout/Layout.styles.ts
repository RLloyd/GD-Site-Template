// src/components/Layout/Layout.styles.ts
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  padding-top: 60px;
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;