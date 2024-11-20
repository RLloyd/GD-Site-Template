// src/pages/Location/Location.tsx
import { siteData } from '@/data/mock-data';
import { FiMail, FiPhone, FiTwitter, FiGithub, FiLinkedin, FiClock } from 'react-icons/fi';
import {
  LocationContainer,
  LocationHeader,
  ContactGrid,
  ContactCard,
  SocialLinks,
  IconWrapper,
  ContactInfo,
} from './Location.styles';
import { PageTransition } from '@/components/page-transition/PageTransition';

export const Location = () => {
  const { title, description, address, contact, hours } = siteData.pages.location;

  return (
    <PageTransition>
      <LocationContainer>
        <LocationHeader>
          <h1>{title}</h1>
          <p>{description}</p>
        </LocationHeader>
        <ContactGrid>
          <ContactCard>
            <h3>Address</h3>
            <ContactInfo>
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state} {address.zip}
              </p>
              <p>{address.country}</p>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <h3>Contact</h3>
            <ContactInfo>
              <p>
                <IconWrapper>
                  <FiMail />
                </IconWrapper>
                {contact.email}
              </p>
              <p>
                <IconWrapper>
                  <FiPhone />
                </IconWrapper>
                {contact.phone}
              </p>
              <SocialLinks>
                <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FiTwitter size={24} />
                </a>
                <a href={contact.social.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub size={24} />
                </a>
                <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FiLinkedin size={24} />
                </a>
              </SocialLinks>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <h3>Business Hours</h3>
            <ContactInfo>
              <p>
                <IconWrapper>
                  <FiClock />
                </IconWrapper>
                Weekdays: {hours.weekdays}
              </p>
              <p>
                <IconWrapper>
                  <FiClock />
                </IconWrapper>
                Weekends: {hours.weekends}
              </p>
            </ContactInfo>
          </ContactCard>
        </ContactGrid>
      </LocationContainer>
    </PageTransition>
  );
};
