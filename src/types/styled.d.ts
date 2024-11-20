// src/types/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
      grey: {
        light: string;
        medium: string;
        dark: string;
      };
      nav: {
        background: string;
        text: string;
        hover: string;
      };
    };
    typography: {
      fonts: {
        heading: string;
        body: string;
      };
      weights: {
        regular: number;
        medium: number;
        bold: number;
      };
      sizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        body: string;
        small: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      default: string;
    };
    sizes: {
      navHeight: string;
      headerHeight: string;
      maxWidth: string;
    };
  }
}