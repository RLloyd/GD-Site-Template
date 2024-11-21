// src/types/theme.ts
export interface Theme {
   colors: {
     primary: string;
     secondary: string;
     background: string;
     text: string;
     grey: {
       light: string;
       medium: string;
       dark: string;
     };
   };
   typography: {
     fonts: {
       heading: string;
       body: string;
     };
   };
 }

