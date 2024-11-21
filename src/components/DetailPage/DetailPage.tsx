// src/components/DetailPage/DetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Tag, Calendar } from 'lucide-react';
import { useDetailContent } from '../../hooks/useDetailContent';
import styled from 'styled-components';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const DetailHeader = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey.dark};
  margin-bottom: 1rem;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.grey.medium};
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const TagItem = styled.span`
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

const ContentSection = styled.section`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};

  p {
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  margin: 2rem 0;
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const DetailPage: React.FC = () => {
  const { path, id } = useParams<{ path: string; id: string }>();
  const navigate = useNavigate();
  const { getContentByPath, getContentById } = useDetailContent();

  const allContent = path ? getContentByPath(`/${path}`) : undefined;
  const selectedContent = id ? getContentById(`/${path}`, id) : allContent?.[0];

  if (!selectedContent) {
    return <div>Content not found</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <DetailContainer>
        <BackButton onClick={handleBack}>
          <ChevronLeft size={20} />
          Back
        </BackButton>

        <DetailHeader>
          <Title>{selectedContent.title}</Title>
          {selectedContent.subtitle && (
            <Subtitle>{selectedContent.subtitle}</Subtitle>
          )}

          <MetaInfo>
            {selectedContent.date && (
              <MetaItem>
                <Calendar size={18} />
                {new Date(selectedContent.date).toLocaleDateString()}
              </MetaItem>
            )}
            {selectedContent.tags && selectedContent.tags.length > 0 && (
              <MetaItem>
                <Tag size={18} />
                {selectedContent.tags.length} tags
              </MetaItem>
            )}
          </MetaInfo>

          {selectedContent.tags && (
            <TagsContainer>
              {selectedContent.tags.map((tag) => (
                <TagItem key={tag}>{tag}</TagItem>
              ))}
            </TagsContainer>
          )}
        </DetailHeader>

        <ContentSection>
          <p>{selectedContent.description}</p>

          {selectedContent.image && (
            <ImageContainer>
              <img src={selectedContent.image} alt={selectedContent.title} />
            </ImageContainer>
          )}

          {selectedContent.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ContentSection>
      </DetailContainer>
    </motion.div>
  );
};

export default DetailPage;