// src/pages/Home/Home.tsx
import { siteData } from '@/data/mock-data';
import {
  HomeContainer,
  Hero,
  HeroContent,
  Title,
  Subtitle,
  Description,
  FeaturesSection,
  FeatureCard,
  FeatureIcon,
} from './Home.styles';
import { PageTransition } from '@/components/page-transition/PageTransition';

export const Home = () => {
  const { hero, features } = siteData.pages.home;

  return (
    <PageTransition>
      <HomeContainer>
        <Hero>
          <HeroContent>
            <Title>{hero.title}</Title>
            <Subtitle>{hero.subtitle}</Subtitle>
            <Description>{hero.description}</Description>
          </HeroContent>
        </Hero>
        <FeaturesSection>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesSection>
      </HomeContainer>
    </PageTransition>
  );
};
