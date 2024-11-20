// src/pages/Location/Location.styles.ts
import styled from 'styled-components';

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  p {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

export const LocationContainer = styled.main`
  padding-top: ${({ theme }) => theme.sizes.navHeight};
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const LocationHeader = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.light};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;