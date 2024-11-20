// src/types/navigation.ts
export type NavigationType = 'default' | 'centered';

export interface NavigationItem {
  label: string;
  path: string;
  isExternal?: boolean;
  openInWindow?: boolean;
}