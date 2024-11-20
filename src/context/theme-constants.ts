// src/context/theme-constants.ts
import { DefaultTheme } from 'styled-components';

const baseTheme = {
   typography: {
      fonts: {
         heading: '"Libre Baskerville", serif',
         body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
      },
      weights: {
         regular: 400,
         medium: 500,
         bold: 700
      },
      sizes: {
         h1: '2.5rem',
         h2: '2rem',
         h3: '1.75rem',
         h4: '1.5rem',
         body: '1rem',
         small: '0.875rem'
      }
   },
   breakpoints: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px'
   },
   spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
   },
   transitions: {
      default: '0.3s ease-in-out'
   },
   sizes: {
      navHeight: '60px',
      headerHeight: '400px',
      maxWidth: '1200px'
   }
};

export const lightTheme: DefaultTheme = {
   ...baseTheme,
   colors: {
      primary: '#2C3E50',
      secondary: '#3498DB',
      text: '#333333',
      background: '#FFFFFF',
      accent: '#E74C3C',
      grey: {
         light: '#F8F9FA',
         medium: '#E9ECEF',
         dark: '#343A40'
      },
      nav: {
         background: '#FFFFFF',
         text: '#333333',
         hover: '#3498DB'
      }
   }
};

export const darkTheme: DefaultTheme = {
   ...baseTheme,
   colors: {
      primary: '#ECF0F1',
      secondary: '#3498DB',
      text: '#FFFFFF',
      background: '#2C3E50',
      accent: '#E74C3C',
      grey: {
         light: '#2C3E50',
         medium: '#34495E',
         dark: '#1A2530'
      },
      nav: {
         background: '#1a2634',
         text: '#FFFFFF',
         hover: '#3498DB'
      }
   }
};