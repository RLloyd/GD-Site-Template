// src/components/LoadingSpinner/LoadingSpinner.tsx
import { SpinnerContainer, SpinnerElement } from './LoadingSpinner.styles';

export const LoadingSpinner = () => (
  <SpinnerContainer role="alert" aria-label="Loading content">
    <SpinnerElement />
  </SpinnerContainer>
);