// src/components/Layout/PageLayout.styles.ts
import styled from 'styled-components';

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: calc(60px + ${({ theme }) => theme.spacing.xl}); // Account for fixed nav height

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: calc(60px + ${({ theme }) => theme.spacing.md});
  }
`;