// src/components/Layout/PageLayout.tsx
import { ReactNode } from 'react';
import { MainContent } from './PageLayout.styles';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <MainContent>{children}</MainContent>;
};

