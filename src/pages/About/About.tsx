// src/pages/About/About.tsx
import { siteData } from '@/data/mock-data';
import {
  AboutContainer,
  AboutHeader,
  ContentSection,
  ContentCard,
  TeamSection,
  TeamGrid,
  TeamMember
} from './About.styles';
import { PageTransition } from '@/components/page-transition/PageTransition';

export const About = () => {
  const { title, description, content, team } = siteData.pages.about;

  return (
   <PageTransition>
    <AboutContainer>
      <AboutHeader>
        <h1>{title}</h1>
        <p>{description}</p>
      </AboutHeader>
      <ContentSection>
        {content.map((item) => (
          <ContentCard key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </ContentCard>
        ))}
      </ContentSection>
      <TeamSection>
        <h2>Our Team</h2>
        <TeamGrid>
          {team.map((member) => (
            <TeamMember key={member.id}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
    </PageTransition>
  );
};