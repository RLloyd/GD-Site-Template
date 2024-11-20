// src/pages/Home/Home.styles.ts
import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding-top: ${({ theme }) => theme.sizes.navHeight};
`;

export const Hero = styled.section`
   background-color: ${({ theme }) => theme.colors.primary};
   color: ${({ theme }) => theme.colors.background};
   padding: ${({ theme }) => theme.spacing.xl} 0;
   text-align: center;
   height: 400px;
`;

export const HeroContent = styled.div`
   max-width: ${({ theme }) => theme.sizes.maxWidth};
   margin: 0 auto;
   padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const FeaturesSection = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.light};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;