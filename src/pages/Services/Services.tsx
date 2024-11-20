// src/pages/Services/Services.tsx
import { siteData } from '@/data/mock-data';
import {
  ServicesContainer,
  ServicesHeader,
  ServicesList,
  ServiceCard,
  ServiceIcon,
  FeatureList,
} from './Services.styles';
import { PageTransition } from '@/components/page-transition/PageTransition';

export const Services = () => {
  const { title, description, serviceList } = siteData.pages.services;

  return (
    <PageTransition>
      <ServicesContainer>
        <ServicesHeader>
          <h1>{title}</h1>
          <p>{description}</p>
        </ServicesHeader>
        <ServicesList>
          {serviceList.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <FeatureList>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </FeatureList>
            </ServiceCard>
          ))}
        </ServicesList>
      </ServicesContainer>
    </PageTransition>
  );
};
