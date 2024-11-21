// src/context/theme.constants.ts
export const lightTheme = {
   colors: {
     primary: '#1a365d',
     secondary: '#2b6cb0',
     background: '#ffffff',
     surface: '#f7fafc',
     text: '#2d3748',
     accent: '#4299e1',
     grey: {
       light: '#f7fafc',
       medium: '#e2e8f0',
       dark: '#4a5568',
     },
     nav: {
       background: '#ffffff',
       text: '#2d3748',
       hover: '#4299e1',
     },
   },
   typography: {
     fonts: {
       heading: '"Libre Baskerville", serif',
       body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
     },
     weights: {
       regular: 400,
       medium: 500,
       bold: 700,
     },
     sizes: {
       h1: '2.5rem',
       h2: '2rem',
       h3: '1.75rem',
       h4: '1.5rem',
       body: '1rem',
       small: '0.875rem',
     },
   },
   spacing: {
     xs: '0.25rem',
     sm: '0.5rem',
     md: '1rem',
     lg: '1.5rem',
     xl: '2rem',
     xxl: '3rem',
   },
   breakpoints: {
     sm: '640px',
     md: '768px',
     lg: '1024px',
     xl: '1280px',
   },
 };

 export const darkTheme = {
   ...lightTheme,
   colors: {
     ...lightTheme.colors,
     primary: '#90cdf4',
     secondary: '#63b3ed',
     background: '#1a202c',
     surface: '#2d3748',
     text: '#f7fafc',
     accent: '#4299e1',
     grey: {
       light: '#2d3748',
       medium: '#4a5568',
       dark: '#cbd5e0',
     },
     nav: {
       background: '#1a202c',
       text: '#f7fafc',
       hover: '#4299e1',
     },
   },
 };

// // src/context/theme.constants.ts
// import { DefaultTheme } from 'styled-components';

// export const lightTheme: DefaultTheme = {
//   colors: {
//     primary: '#0066cc',
//     secondary: '#6B7280',
//     background: '#FFFFFF',
//     text: '#1F2937',
//     grey: {
//       light: '#F3F4F6',
//       medium: '#9CA3AF',
//       dark: '#4B5563'
//     },
//     nav: {
//       background: '#FFFFFF',
//       text: '#1F2937',
//       hover: '#0066cc'
//     }
//   },
//   typography: {
//     fonts: {
//       heading: '"Libre Baskerville", serif',
//       body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
//     },
//     weights: {
//       regular: 400,
//       medium: 500,
//       bold: 700
//     }
//   }
// };

// export const darkTheme: DefaultTheme = {
//   ...lightTheme,
//   colors: {
//     ...lightTheme.colors,
//     primary: '#60A5FA',
//     secondary: '#9CA3AF',
//     background: '#1F2937',
//     text: '#F9FAFB',
//     grey: {
//       light: '#374151',
//       medium: '#6B7280',
//       dark: '#9CA3AF'
//     },
//     nav: {
//       background: '#111827',
//       text: '#F9FAFB',
//       hover: '#60A5FA'
//     }
//   }
// };

