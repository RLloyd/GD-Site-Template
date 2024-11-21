// src/styled.d.ts
import 'styled-components';
// import { Theme } from './types';

declare module 'styled-components' {
//   export interface DefaultTheme extends Theme {}
// }

// styled.d.ts : test use for topNavBar
// import 'styled-components';

// declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      error: string;
    };
    typography: {
      fontSize: {
        small: string;
        medium: string;
        large: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    shadows: {
      small: string;
      medium: string;
    };
    transitions: {
      default: string;
    };
    sizes: {
      navHeight: string;
      maxWidth: string;
      logoSize: string;
    };
  }
}