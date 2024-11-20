// src/components/LoadingSpinner/LoadingSpinner.styles.ts
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const SpinnerElement = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.grey.medium};
  border-top-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;