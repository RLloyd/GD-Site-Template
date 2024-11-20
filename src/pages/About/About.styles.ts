// src/pages/About/About.styles.ts
import styled from 'styled-components';

export const AboutContainer = styled.main`
  padding-top: ${({ theme }) => theme.sizes.navHeight};
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const AboutHeader = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ContentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.light};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
`;

export const TeamSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const TeamMember = styled.div`
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;