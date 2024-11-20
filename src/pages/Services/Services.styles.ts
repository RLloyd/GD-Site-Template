// src/pages/Services/Services.styles.ts
import styled from 'styled-components';

export const ServicesContainer = styled.main`
  padding-top: ${({ theme }) => theme.sizes.navHeight};
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const ServicesHeader = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.light};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FeatureList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.lg};
`;