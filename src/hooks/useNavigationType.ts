// src/hooks/useNavigationType.ts
import { useState } from 'react';

export type NavigationType = 'default' | 'centered';

export interface UseNavigationTypeReturn {
  navigationType: NavigationType;
  toggleNavigationType: () => void;
}

export const useNavigationType = (): UseNavigationTypeReturn => {
  const [navigationType, setNavigationType] = useState<NavigationType>('default');

  const toggleNavigationType = () => {
    setNavigationType(prev => prev === 'default' ? 'centered' : 'default');
  };

  return {
    navigationType,
    toggleNavigationType
  };
};