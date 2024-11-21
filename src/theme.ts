import { DefaultTheme } from 'styled-components';

// Theme interface
export interface ThemeInterface extends DefaultTheme {
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

// Base theme with shared values
const baseTheme: Omit<ThemeInterface, 'colors'> = {
  typography: {
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
    },
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
  sizes: {
    navHeight: '70px',
    maxWidth: '1200px',
    logoSize: '40px',
  },
};

// Light theme colors
const lightColors = {
  colors: {
    background: '#ffffff',
    text: '#333333',
    primary: '#0066cc',
    error: '#dc3545',
  },
};

// Dark theme colors
const darkColors = {
  colors: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#66b3ff',
    error: '#ff6b6b',
  },
};

// Export complete themes
export const lightTheme: ThemeInterface = {
  ...baseTheme,
  ...lightColors,
};

export const darkTheme: ThemeInterface = {
  ...baseTheme,
  ...darkColors,
};

// Theme utility functions
export const isTheme = (theme: any): theme is ThemeInterface => {
  return (
    theme &&
    typeof theme === 'object' &&
    'colors' in theme &&
    'typography' in theme &&
    'breakpoints' in theme &&
    'spacing' in theme &&
    'shadows' in theme &&
    'transitions' in theme &&
    'sizes' in theme
  );
};

// Media queries
export const media = {
  mobile: `@media (min-width: ${baseTheme.breakpoints.mobile})`,
  tablet: `@media (min-width: ${baseTheme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${baseTheme.breakpoints.desktop})`,
};

// Theme mixins
export const mixins = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  ellipsis: `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

// Theme constants
export const themeConstants = {
  zIndex: {
    modal: 1000,
    overlay: 900,
    dropdown: 800,
    header: 700,
    footer: 600,
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

// Export everything as a theme utilities object
export const themeUtils = {
  media,
  mixins,
  themeConstants,
  isTheme,
};

export default {
  light: lightTheme,
  dark: darkTheme,
  utils: themeUtils,
};