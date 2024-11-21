// src/hooks/useDetailContent.ts
import { DetailContent } from '../types/navigation';
import { navigationData } from '../data/mock-data';

export const useDetailContent = () => {
  const getContentByPath = (path: string): DetailContent[] | undefined => {
    const allMenuItems = [...navigationData.menuItems.left, ...navigationData.menuItems.right];
    const item = allMenuItems.find(item => item.path === path);
    return item?.details;
  };

  const getContentById = (path: string, id: string): DetailContent | undefined => {
    const content = getContentByPath(path);
    return content?.find(item => item.id === id);
  };

  return {
    getContentByPath,
    getContentById
  };
};